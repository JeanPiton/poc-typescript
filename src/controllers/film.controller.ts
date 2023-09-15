import { Film, FilmWid } from "@/protocol";
import FilmServices from "@/services/filmServices";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function addFilm(req:Request,res:Response){
    const {nome,plataforma,genero,completo} = req.body as Film
    await FilmServices.addFilm(nome,plataforma,genero,completo)
    res.sendStatus(httpStatus.CREATED)
}

export async function getFilms(req:Request,res:Response){
    const films:FilmWid[] = await FilmServices.getAllFilms()
    res.status(httpStatus.OK).send(films)
}

export async function updateFilm(req:Request,res:Response){
    const {id} = req.params
    const {nome,plataforma,genero,completo} = req.body as Film
    await FilmServices.updateFilm(parseInt(id),nome,plataforma,genero,completo)
    res.sendStatus(httpStatus.OK)
}