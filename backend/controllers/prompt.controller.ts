import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line import/prefer-default-export
export const promptGPT = async (req: Request, res: Response, __: NextFunction) => {
	console.log(res);
};
