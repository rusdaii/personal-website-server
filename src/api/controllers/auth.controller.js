const { successResponse } = require('../../lib/response');
const AuthService = require('../../services/auth');

class AuthController {
  static loginUser = async (req, res, next) => {
    try {
      const { user, accessToken } = await AuthService.login(req.body);

      res.status(200).json(
        successResponse({
          message: 'Login success',
          data: {
            id: user.id,
            email: user.email,
            accessToken,
          },
        })
      );
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;
