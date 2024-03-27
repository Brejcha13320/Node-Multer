import fs from "fs";
import path from "path";
import multer from "multer";
import { Request } from "express";
import { UuidAdapter } from "../../config/uuid.adapter";

// CREAR FILE EN CARPETA

const FOLDER = "uploads";
const ROOT_FOLDER = path.join(process.cwd(), `${FOLDER}`);
const PATH_STORAGE = `${process.cwd()}/${FOLDER}`;

// Verificar si la carpeta existe
if (!fs.existsSync(ROOT_FOLDER)) {
  // La carpeta no existe, así que la creamos
  fs.mkdirSync(ROOT_FOLDER);
}

const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename: function (req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split(".").pop();
    const fileNameRandom = `${UuidAdapter.v4()}.${ext}`;
    cb(null, fileNameRandom);
  },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;

//CREAR FILE EN MEMORIA
// const storage = multer.memoryStorage();
// const upload = multer({ storage });
