export const errorHandlers = (err: any, req: any, res: any, next: any) => {
  let errors: any;
  if (err) {
    switch (err.name) {
      case 'SequelizeValidationError':
        errors = err.errors.map((e: any) => e.message);
        return res.status(400).json({ errors });
      case 'wrongPass':
        return res.status(400).json({ errors: ['Wrong password'] })
      case 'invalidLogin':
        return res.status(401).json({ errors: ['Your Email/Username or Password is invalid'] });
      case 'JsonWebTokenError':
        return res.status(401).json({ errors: ['Please login first!'] });
      case 'unauthorize' :
        return res.status(401).json({errors: ['You don\'t have authorization for this request']})
      case 'userNotFound':
        return res.status(404).json({ errors: ['User not found'] });
      case 'userlistNotFound':
        return res.status(404).json({ errors: ['List not found'] });
      case 'SequelizeUniqueConstraintError':
        errors = err.errors.map((e: any) => e.message);
        return res.status(409).json({ errors });
      default:
        return res.status(500).json({ errors: ['Internal server error'] });
    };
  };
};
