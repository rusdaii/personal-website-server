const { successResponse } = require('../../lib/response');
const UserService = require('../../services/user');

class UserController {
  static getUsers = async (req, res, next) => {
    try {
      const users = await UserService.getUsers();

      const { password, ...result } = users;

      res.status(200).json(
        successResponse({
          message: 'Get users success',
          data: result,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static updateUser = async (req, res, next) => {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);

      const { password, ...result } = user;

      res.status(200).json(
        successResponse({
          message: 'Update user success',
          data: result,
        })
      );
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserController;
