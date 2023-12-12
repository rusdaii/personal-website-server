const prisma = require('../lib/prisma');

const NotFoundError = require('../exeptions/NotFoundError');

class SkillService {
  static async getSkills() {
    const skills = await prisma.skills.findMany();

    return skills;
  }

  static async createSkill(payload) {
    const skill = await prisma.skills.create({
      data: {
        ...payload,
      },
    });

    return skill;
  }

  static async updateSkill(id, payload) {
    const skillExists = await prisma.skills.findUnique({
      where: {
        id,
      },
    });

    if (!skillExists) {
      throw new NotFoundError('Skill not found');
    }

    const skill = await prisma.skills.update({
      where: {
        id,
      },
      data: {
        ...payload,
      },
    });

    return skill;
  }

  static async deleteSkill(id) {
    const skillExists = await prisma.skills.findUnique({
      where: {
        id,
      },
    });

    if (!skillExists) {
      throw new NotFoundError('Skill not found');
    }

    await prisma.skills.delete({
      where: {
        id,
      },
    });

    return;
  }
}

module.exports = SkillService;
