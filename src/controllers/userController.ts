import { compPass } from '../helpers/bcrypt';
import { chkToken, genToken } from '../helpers/jwt';

const { User } = require('../models/index');

export default class UserController {
  static async userRegister(req: any, res: any, next: any) {
    try {
      const { email, password, firstname, lastname, profpic, currency, locales } = req.body;
      const input = {
        email,
        password,
        firstname,
        lastname,
        profpic,
        currency,
        locales
      };

      const register = await User.create(input);

      return res.status(201).json({
        UID: register.UID,
        email: register.email,
        firstname: register.firstname,
        lastname: register.lastname
      });
    } catch (err) {
      next(err);
    };
  };

  static async userLogin(req: any, res: any, next: any) {
    try {
      const { user, password } = req.body;
      let login: any;

      if (!user || !password) throw { name: 'invalidLogin' };

      if (user.includes('@')) {
        login = await User.findOne({ where: { email: user } });
      } else {
        login = await User.findOne({ where: { username: user } });
      }

      if (!login) throw { name: 'invalidLogin' };

      const chkPass = compPass(password, login.password);

      if (!chkPass) throw { name: 'invalidLogin' };

      const payload = {
        UID: login.UID,
        email: login.email,
        username: login.username,
        firstname: login.firstname,
        lastname: login.lastname,
        profpic: login.profpic,
        currency: login.currency,
        locales: login.locales
      };

      const access_token = genToken(payload);

      return res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    };
  };

  static async userGetInfo(req: any, res: any, next: any) {
    try {
      const userInfo: any = req.params.userInfo;
      const isNotNum = isNaN(Number(userInfo));
      let user: any;

      if (isNotNum) {
        user = await User.findOne({
          where: { username: userInfo }, attributes: {
            exclude: [
              'id',
              'password',
              'createdAt',
              'updatedAt'
            ]
          }
        });
      } else if (!isNotNum) {
        user = await User.findOne({
          where: { UID: Number(userInfo) }, attributes: {
            exclude: [
              'id',
              'password',
              'createdAt',
              'updatedAt'
            ]
          }
        });
      };

      if (!user) throw { name: 'userNotFound' };
      return res.status(200).json(user);
    } catch (err) {
      next(err);
    };
  };

  static async userGetSelfInfo(req: any, res: any, next: any) { // not need params
    try {
      const decode: any = chkToken(req.headers.access_token);

      const user = await User.findOne(
        {
          where: {
            UID: decode.UID
          },
          attributes: {
            exclude: [
              'id',
              'password',
              'createdAt',
              'updatedAt'
            ]
          }
        }
      );

      return res.status(200).json(user);
    } catch (err) {
      next(err);
    };
  };

  static async userEditInfo(req: any, res: any, next: any) {
    try {
      const decode: any = chkToken(req.headers.access_token);
      const { email, password, firstname, lastname, username, profpic, currency, locales } = req.body;
      const input = {
        email,
        password,
        username,
        firstname,
        lastname,
        profpic,
        currency,
        locales
      };

      await User.update(input, { where: { UID: decode.UID } });

      const output = await User.findOne({ where: { UID: decode.UID } });
      const payload = {
        UID: output.UID,
        email: output.email,
        username: output.username,
        firstname: output.firstname,
        lastname: output.lastname,
        profpic: output.profpic,
        currency: output.currency,
        locales: output.locales
      };
      const access_token = genToken(payload);

      return res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    };
  };

  static async deleteUser(req: any, res: any, next: any) {
    try {
      const decode: any = chkToken(req.headers.access_token);
      const UID = decode.UID;
      const { password } = req.body;

      const user = await User.findOne({ where: { UID } });

      if (!user) throw { name: 'userNotFound' };

      const chkPass = compPass(password, user.password);

      if (!chkPass) throw { name: 'wrongPass' };

      await User.destroy({ where: { UID } });

      res.status(200).json({ name: 'accDeleted' });
    } catch (err) {
      next(err);
    };
  };
};
