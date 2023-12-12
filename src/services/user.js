const prisma = require('../lib/prisma');

const NotFoundError = require('../exeptions/NotFoundError');

class UserService {
  static async getUsers() {
    const userName = 'Rusdi' || 'Rusydi';

    const user = await prisma.user.findFirst({
      where: {
        name: userName,
      },
    });

    if (!user) {
      throw new NotFoundError('User not found');
    }

    return user;
  }

  static async updateUser(id, payload) {
    const userExists = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new NotFoundError('User not found');
    }

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        ...payload,
      },
    });

    return user;
  }
}

module.exports = UserService;
