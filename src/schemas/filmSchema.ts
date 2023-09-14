import { Film } from "@/protocol"
import joi from "joi"

export const AddFilm = joi.object<Film>({
    nome: joi.string().required(),
    plataforma: joi.string().required(),
    genero: joi.string().required(),
    completo: joi.boolean().required()
})