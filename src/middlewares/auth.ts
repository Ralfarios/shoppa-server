import { chkToken } from '../helpers/jwt';

const { User } = require('../models/index');

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

export const authorize = async (req: any, res: any, next: any) => {
  try {
    console.log('author');
  } catch (err) {
    next(err);
  };
};
