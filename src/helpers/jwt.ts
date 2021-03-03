import jwt from 'jsonwebtoken';

const SECRET_KEY: any = process.env.SECRET_KEY;

export const genToken = (payload: object) => jwt.sign(payload, SECRET_KEY);

export const chkToken = (token: string) => jwt.verify(token, SECRET_KEY);
