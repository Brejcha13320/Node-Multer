import { Router } from "express";
import { PersonController } from "./person.controller";
import multerMiddleware from "../middlewares/multer.middleware";
import { PersonMiddleware } from "../middlewares/person.middleware";

export class PersonRoutes {
  static get routes(): Router {
    const router = Router();

    const personController = new PersonController();

    router.post(
      "/multiples-files",
      [
        multerMiddleware.fields([
          { name: "person1", maxCount: 1 },
          { name: "person2", maxCount: 1 },
        ]),
        PersonMiddleware.validateCreatePersonMultiple,
      ],
      personController.createPersonMultiple
    );

    router.post(
      "/single-file",
      [
        multerMiddleware.single("person"),
        PersonMiddleware.validateCreatePersonSingle,
      ],
      personController.createPersonSingle
    );

    return router;
  }
}
