const { successResponse } = require('../../lib/response');
const SkillService = require('../../services/skill');

class SkillController {
  static getSkills = async (req, res, next) => {
    try {
      const skills = await SkillService.getSkills();

      res.status(200).json(
        successResponse({
          message: 'Get skills success',
          data: skills,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static createSkill = async (req, res, next) => {
    try {
      const skill = await SkillService.createSkill(req.body);

      res.status(200).json(
        successResponse({
          message: 'Create skill success',
          data: skill,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static updateSkill = async (req, res, next) => {
    try {
      const skill = await SkillService.updateSkill(req.params.id, req.body);

      res.status(200).json(
        successResponse({
          message: 'Update skill success',
          data: skill,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static deleteSkill = async (req, res, next) => {
    try {
      await SkillService.deleteSkill(req.params.id);

      res.status(200).json(
        successResponse({
          message: 'Delete skill success',
        })
      );
    } catch (error) {
      next(error);
    }
  };
}

module.exports = SkillController;
