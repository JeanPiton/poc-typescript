import { addFilm, getFilms } from "@/controllers/film.controller";
import { validateBody } from "@/middlewares/validateSchema";
import { AddFilm } from "@/schemas/filmSchema";
import { Router } from "express";

const FilmRouter:Router = Router()

FilmRouter.post("/film",validateBody(AddFilm),addFilm)
FilmRouter.get("/film",getFilms)

export default FilmRouter