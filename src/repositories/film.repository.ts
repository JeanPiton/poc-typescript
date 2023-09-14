import { db } from "@/database/database.connection";

async function FindFilm(id:number|null,nome:string|null,plataforma:string|null) {
    const array = []
    let query = `SELECT * FROM filmes WHERE 1=1 `
    if(id!=null){
        array.push(id)
        query += `AND filmes.id = $${array.length} `
    }
    if(nome!=null){
        array.push(nome)
        query += `AND filmes.nome = $${array.length} `
    }
    if(plataforma!=null){
        array.push(plataforma)
        query += `AND filmes.plataforma = $${array.length} `
    }
    const result = await db.query(query,array)
    return result.rows
}

async function addFilm(nome:string,plataforma:string,genero:string,completo:boolean) {
    await db.query(`INSERT INTO filmes(nome,plataforma,genero,completo) VALUES ($1,$2,$3,$4)`,[nome,plataforma,genero,completo])
}

const FilmRepository = {
    FindFilm,
    addFilm
}

export default FilmRepository