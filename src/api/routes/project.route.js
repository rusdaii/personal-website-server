const authentication = require('../middlewares/authentication');
const ProjectController = require('../controllers/project.controller');

const router = require('express').Router();

router.get('/', ProjectController.getProjects);
router.post('/', authentication, ProjectController.createProject);
router.put('/:id', authentication, ProjectController.updateProject);
router.delete('/:id', authentication, ProjectController.deleteProject);

module.exports = router;
