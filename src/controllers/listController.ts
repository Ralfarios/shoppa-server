const { List } = require('../models/index');

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
      const LID: string = req.params.listid;
      const { title, price, isDone } = req.body;
      const input: object = {
        title,
        price: Number(price),
        isDone
      };

      const edit: any = await List.update(input, { where: { LID } });
      const findOne: any = await List.findOne({ where: { LID } }, edit);

      return res.status(200).json(findOne);
    } catch (err) {
      console.log(err)
      next(err);
    };
  };

  static async listMarkAsDone(req: any, res: any, next: any) {
    try {
      const LID: string = req.params.listid;
      const isDone: boolean = req.body.isDone;

      const mark: any = await List.update({ isDone }, { where: { LID } });
      const findOne: any = await List.findOne({ where: { LID } }, mark);

      return res.status(200).json(findOne);
    } catch (err) {
      next(err);
    };
  };

  static async listDelete(req: any, res: any, next: any) {
    try {
      const LID: string = req.params.listid;

      await List.destroy({ where: { LID } });

      return res.status(200).json({ msg: 'Item has been deleted' });
    } catch (err) {
      next(err);
    };
  };
};