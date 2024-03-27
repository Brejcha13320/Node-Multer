import { Request, Response } from "express";

export class PersonController {
  createPersonMultiple = (req: Request, res: Response) => {
    res.status(201).json({
      body: req.body,
      files: req.files,
    });
  };
  createPersonSingle = (req: Request, res: Response) => {
    // res.status(201).json({
    //   body: req.body,
    //   files: req.files,
    // });

    res.status(201).json({
      body: req.body,
      files: req.files,
    });
  };
}
