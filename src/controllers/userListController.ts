export default class UserListController {
  static async userListGetAll(req: any, res: any, next: any) {
    try {
      res.send('GET OK')
    } catch (err) {
      next(err);
    };
  };

  static async userListCreate(req: any, res: any, next: any) {
    try {
      res.send('OK')
    } catch (err) {
      next(err);
    };
  };

  static async userListGetOne(req: any, res: any, next: any) {
    try {
      res.send('GET ONE OK')  
    } catch (err) {
      next(err);
    };
  };
};