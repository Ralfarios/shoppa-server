import bcrypt from 'bcryptjs';

export const hashPass = (userPass: string) => bcrypt.hashSync(userPass, bcrypt.genSaltSync(10));

export const compPass = (userPass: string, dbPass: string) => bcrypt.compareSync(userPass, dbPass);
