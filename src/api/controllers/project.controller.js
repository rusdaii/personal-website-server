const { successResponse } = require('../../lib/response');
const ProjectService = require('../../services/project');

class ProjectController {
  static getProjects = async (req, res, next) => {
    try {
      const projects = await ProjectService.getProjects();

      res.status(200).json(
        successResponse({
          message: 'Get projects success',
          data: projects,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static createProject = async (req, res, next) => {
    try {
      const project = await ProjectService.createProject(req.body);

      res.status(200).json(
        successResponse({
          message: 'Create project success',
          data: project,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static updateProject = async (req, res, next) => {
    try {
      const project = await ProjectService.updateProject(
        req.params.id,
        req.body
      );

      res.status(200).json(
        successResponse({
          message: 'Update project success',
          data: project,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static deleteProject = async (req, res, next) => {
    try {
      await ProjectService.deleteProject(req.params.id);

      res.status(200).json({
        message: 'Delete project success',
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = ProjectController;
