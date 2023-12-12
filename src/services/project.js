const prisma = require('../lib/prisma');

const NotFoundError = require('../exeptions/NotFoundError');

class ProjectService {
  static async getProjects() {
    const projects = await prisma.projects.findMany();

    return projects;
  }

  static async createProject(payload) {
    const project = await prisma.projects.create({
      data: {
        ...payload,
      },
    });

    return project;
  }

  static async updateProject(id, payload) {
    const projectExists = await prisma.projects.findUnique({
      where: {
        id,
      },
    });

    if (!projectExists) {
      throw new NotFoundError('Project not found');
    }

    const project = await prisma.projects.update({
      where: {
        id,
      },
      data: {
        ...payload,
      },
    });

    return project;
  }

  static async deleteProject(id) {
    const projectExists = await prisma.projects.findUnique({
      where: {
        id,
      },
    });

    if (!projectExists) {
      throw new NotFoundError('Project not found');
    }

    await prisma.projects.delete({
      where: {
        id,
      },
    });

    return;
  }
}

module.exports = ProjectService;
