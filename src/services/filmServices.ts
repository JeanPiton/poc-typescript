import errorList from "@/errors/errorList"
import { FilmWid } from "@/protocol"
import FilmRepository from "@/repositories/film.repository"

async function addFilm(nome:string,plataforma:string,genero:string,completo:boolean) {
    const exist:Array<FilmWid> = await FilmRepository.FindFilm(null,nome,plataforma)
    if(exist.length!=0) throw errorList.conflictError("Filme já existe")
    return FilmRepository.addFilm(nome,plataforma,genero,completo)
}

async function getAllFilms():Promise<FilmWid[]> {
    return FilmRepository.FindFilm(null,null,null)
}

async function updateFilm(id:number,nome:string,plataforma:string,genero:string,completo:boolean) {
    const exist:Array<FilmWid> = await FilmRepository.FindFilm(id,null,null)
    if(exist.length==0) throw errorList.notFoundError("filme não encontrado")
    return FilmRepository.updateFilm(id,nome,plataforma,genero,completo)
}

const FilmServices = {
    addFilm,
    getAllFilms,
    updateFilm
}

export default FilmServices