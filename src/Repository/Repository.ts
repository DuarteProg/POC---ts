import connection from "../dataBase/dataBase.js";
import { TipePoc } from "../protocol/protocol.js";
import { QueryResult } from "pg";

async function getProgramadorByName (programador : string) : Promise<QueryResult> {
    return connection.query(`SELECT * FROM poc WHERE name = $1;`, [programador]);
}

async function insertProgramadores ({ programador, primeiraSkill, segundaSkill} : TipePoc) : Promise<QueryResult> {
    return connection.query(`
        INSERT INTO poc (programador, "primeiraSkill", "segundaSkill") VALUES ($1, $2, $3);
    `, [programador, primeiraSkill, segundaSkill]);
}

async function getProgramadores () : Promise<QueryResult> {
    return connection.query(`SELECT * FROM poc;`);
}

async function getProgramadorById (id : number) : Promise<QueryResult> {
    return connection.query(`SELECT * FROM poc WHERE id = $1`, [id]); 
}

async function ProgramadorUpdate ({programador, primeiraSkill, segundaSkill, id} : TipePoc) : Promise<QueryResult> {
    return connection.query(`
        UPDATE poc SET programador = $1, "primeiraSkill" = $2, "segundaSkill" = $3 WHERE id = $4;
    `, [programador, primeiraSkill, segundaSkill, id]);
}

async function deleteProgramadorById (id : number) : Promise<QueryResult> {
    return connection.query(`DELETE FROM poc WHERE id = $1;`, [id]);
}

export {getProgramadorByName, insertProgramadores, getProgramadores, getProgramadorById, ProgramadorUpdate, deleteProgramadorById};