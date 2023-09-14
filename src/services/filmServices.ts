import errorList from "@/errors/errorList"
import { FilmWid } from "@/protocol"
import FilmRepository from "@/repositories/film.repository"

async function addFilm(nome:string,plataforma:string,genero:string,completo:boolean) {
    const exist:Array<FilmWid> = await FilmRepository.FindFilm(null,nome,plataforma)
    if(exist.length!=0) throw errorList.conflictError("Filme já existe")
    return FilmRepository.addFilm(nome,plataforma,genero,completo)
}

const FilmServices = {
    addFilm
}

export default FilmServices