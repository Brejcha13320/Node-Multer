import { NextFunction, Request, Response } from "express";

export class PersonMiddleware {
  static async validateCreatePersonMultiple(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    let message: string = "";
    let error: boolean = false;

    console.log("req.body", req.body);
    console.log("req.files", req.files);

    if (!error) {
      next();
    } else {
      res.status(400).json({
        success: false,
        message,
      });
    }
  }

  static async validateCreatePersonSingle(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    let message: string = "";
    let error: boolean = false;

    console.log("req.body", req.body);
    console.log("req.file", req.file);

    if (!error) {
      next();
    } else {
      res.status(400).json({
        success: false,
        message,
      });
    }
  }
}
