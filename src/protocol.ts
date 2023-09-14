export type FilmWid = {
    id:number,
    nome:string,
    plataforma:string,
    genero:string,
    completo:boolean
}

export type Film = Omit<FilmWid,"id">