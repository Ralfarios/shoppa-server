const { List } = require('../models/index');

export default class ListController {
  static async listCreate(req: any, res: any, next: any) {
    try {
      res.send('LIST CREATE OK');
    } catch (err) {
      next(err);
    };
  };

  static async listGetAll(req: any, res: any, next: any) {
    try {
      res.send('LIST GET ALL OK')
    } catch (err) {
      next(err);
    };
  };

  static async listGetOne(req: any, res: any, next: any) {
    try {
      res.send('LIST GET ONE OK');
    } catch (err) {
      next(err);
    };
  };
};