import { Film } from "@/protocol";
import FilmServices from "@/services/filmServices";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function addFilm(req:Request,res:Response){
    const {nome,plataforma,genero,completo} = req.body as Film
    await FilmServices.addFilm(nome,plataforma,genero,completo)
    res.sendStatus(httpStatus.CREATED)
}