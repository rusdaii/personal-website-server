const SkillController = require('../controllers/skill.controller');
const authentication = require('../middlewares/authentication');

const router = require('express').Router();

router.get('/', SkillController.getSkills);
router.post('/', authentication, SkillController.createSkill);
router.put('/:id', authentication, SkillController.updateSkill);
router.delete('/:id', authentication, SkillController.deleteSkill);

module.exports = router;
