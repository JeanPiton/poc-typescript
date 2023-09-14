import { Router } from "express";
import FilmRouter from "./films.routes";

const router:Router = Router()

router.use(FilmRouter)

export default router