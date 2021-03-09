import { chkToken } from '../helpers/jwt';

const { User, UserList, List } = require('../models/index');

export default class Auth {
  static async authenticate(req: any, res: any, next: any) {
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

  static async authorizeUserList(req: any, res: any, next: any) {
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

  static async authenticateList(req: any, res: any, next: any) {
    try {
      const { ULID }: any = req.params;
      const findOne: any = await UserList.findOne({ where: { ULID } });

      if (!findOne) throw { name: 'userlistNotFound' };
      if (findOne.UserId !== req.user.id) throw { name: 'unauthorize' };

      req.userlist = findOne;

      return next();
    } catch (err) {
      console.log(err)
      next(err);
    };
  };

  static async authorizeList(req: any, res: any, next: any) {
    try {
      const { ULID }: any = req.params;
      const findOneUL: any = await UserList.findOne({ where: { ULID } });

      if (!findOneUL) throw { name: 'userlistNotFound' };
      if (findOneUL.UserId !== req.user.id) throw { name: 'unauthorize' };

      req.userlist = findOneUL;

      const { id } = req.user;
      const findOne: any = await List.findOne({ where: { LID: req.params.listid } });

      if (!findOne) throw { name: 'listNotFound' };
      if (findOne.UserId !== id) throw { name: 'unauthorize' };

      return next();
    } catch (err) {
      next(err);
    };
  };
};
