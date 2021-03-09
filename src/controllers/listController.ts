import list from "../models/list";

const { UserList, List } = require('../models/index');

export default class ListController {
  static async listCreate(req: any, res: any, next: any) {
    try {
      const { title, price, isDone } = req.body;
      const input: object = {
        title,
        price: Number(price),
        isDone,
        UserId: req.user.id,
        UserListId: req.userlist.id
      };

      const create: any = await List.create(input);

      return res.status(201).json(create);
    } catch (err) {
      next(err);
    };
  };

  static async listGetAll(req: any, res: any, next: any) {
    try {
      const findAll: any = await List.findAll({ where: { UserListId: req.userlist.id } });

      return res.status(200).json(findAll);
    } catch (err) {
      next(err);
    };
  };

  static async listGetOne(req: any, res: any, next: any) {
    try {
      const { listid } = req.params;
      const findOne: any = await List.findOne({ where: { LID: listid } });

      if (!findOne) throw { name: 'listNotFound' };

      return res.status(200).json(findOne);
    } catch (err) {
      next(err);
    };
  };

  static async listUpdate(req: any, res: any, next: any) {
    try {
      res.send('LIST UPDATE OK');
    } catch (err) {
      next(err);
    };
  };

  static async listMarkAsDone(req: any, res: any, next: any) {
    try {
      res.send('LIST PATCH OK');
    } catch (err) {
      next(err);
    };
  };

  static async listDelete(req: any, res: any, next: any) {
    try {
      res.send('LIST DELETE OK');
    } catch (err) {
      next(err);
    };
  };
};