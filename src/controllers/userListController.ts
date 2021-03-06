const { UserList } = require('../models/index');

export default class UserListController {
  static async userListGetAll(req: any, res: any, next: any) {
    try {
      const getAll: any = await UserList.findAll({ where: { UserId: req.user.id } });

      return res.status(200).json(getAll);
    } catch (err) {
      next(err);
    };
  };

  static async userListCreate(req: any, res: any, next: any) {
    try {
      const { name, currency, date, color } = req.body;
      const input: object = {
        name,
        currency: !currency ? req.body.currency : currency,
        date: !date ? new Date() : date,
        color: !color ? 'GRA' : color,
        UserId: req.user.id
      };

      const create: any = await UserList.create(input);

      return res.status(201).json({
        name: create.name,
        currency: create.currency,
        date: create.date,
        color: create.color,
        ULID: create.ULID,
        UserId: create.UserId
      });
    } catch (err) {
      console.log(err)
      next(err);
    };
  };

  static async userListGetOne(req: any, res: any, next: any) {
    try {
      const ULID = req.params.userlistid;
      const getOne: any = await UserList.findOne({ where: { ULID } });

      if (!getOne) throw { name: 'userlistNotFound' };

      return res.status(200).json(getOne);
    } catch (err) {
      next(err);
    };
  };

  static async userListEdit(req: any, res: any, next: any) {
    try {
      const ULID: string = req.params.userlistid;
      const { name, currency, date, color } = req.body;
      const input: object = { name, currency, date, color };

      const edit: any = await UserList.update(input, { where: { ULID } });
      const findOne: any = await UserList.findOne({ where: { ULID }, edit });

      return res.status(200).json(findOne);
    } catch (err) {
      next(err);
    };
  };

  static async userListDelete(req: any, res: any, next: any) {
    try {
      const ULID: string = req.params.userlistid;

      await UserList.destroy({ where: { ULID } });

      return res.status(200).json({msg: 'List has been deleted'});
    } catch (err) {
      next(err);
    };
  };
};