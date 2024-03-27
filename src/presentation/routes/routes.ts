import { Router } from "express";
import { PersonRoutes } from "../person/person.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/person", PersonRoutes.routes);

    return router;
  }
}
