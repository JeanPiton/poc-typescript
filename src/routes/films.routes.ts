import { addFilm, getFilms, updateFilm } from "@/controllers/film.controller";
import { validateBody, validateParams } from "@/middlewares/validateSchema";
import { AddFilm, IdFilm } from "@/schemas/filmSchema";
import { Router } from "express";

const FilmRouter:Router = Router()

FilmRouter.post("/film",validateBody(AddFilm),addFilm)
FilmRouter.get("/film",getFilms)
FilmRouter.patch("/film/:id",validateParams(IdFilm),validateBody(AddFilm),updateFilm)

export default FilmRouter