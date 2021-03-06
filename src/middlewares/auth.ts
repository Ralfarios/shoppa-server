import { chkToken } from '../helpers/jwt';

const { User, UserList } = require('../models/index');

export const authenticate = async (req: any, res: any, next: any) => {
  try {
    const decode: any = chkToken(req.headers.access_token);

    if (!decode) throw { name: 'unauthenticate' };

    const user = await User.findOne({ where: { UID: decode.UID } });

    if (!user) throw { name: 'unauthenticate' };

    req.user = user;

    return next();
  } catch (err) {
    next(err);
  };
};

export const authorizeUserList = async (req: any, res: any, next: any) => {
  try {
    const { id } = req.user;
    const findOne: any = await UserList.findOne({ where: { ULID: req.params.userlistid } });

    if (!findOne) throw { name: 'userlistNotFound' };

    if (findOne.UserId !== id) throw { name: 'unauthorize' };

    return next();
  } catch (err) {
    next(err);
  };
};
