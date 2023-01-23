import { Request, Response } from "express";
import { TipePoc } from "../protocol/protocol";
import * as pocRepository from "../Repository/Repository.js";

export async function showProgramadores(req: Request, res: Response) {
  try {
    const allprogramadores = await pocRepository.getProgramadores();
    res.status(200).send(allprogramadores.rows);
  } catch (error) {
    res.sendStatus(400);
  }
}

export async function programadorFiltrado(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const programadoresFiltrados = await pocRepository.getProgramadorById(Number(id));

    if (programadoresFiltrados.rows.length <= 0) {
      return res.status(404).send("Sorry, the plant couldn't be found.");
    }

    res.status(200).send(programadoresFiltrados.rows);
  } catch (error) {
    res.sendStatus(400);
  }
}

export async function updateProgramador(req: Request, res: Response) {
  const { ID } = req.params;
  const { programador, primeiraSkill, segundaSkill }: TipePoc = req.body;

  if (programador === "" || primeiraSkill === "" || segundaSkill === "") {
    return res.status(422).send("There is somes spaces empty");
  }
  const id = Number(ID);
  try {
    const get = await pocRepository.getProgramadorById(id);

    if (get.rows.length <= 0) {
      return res.status(400).send("There is no Programator");
    }

    await pocRepository.ProgramadorUpdate({
      programador,
      primeiraSkill,
      segundaSkill,
      id,
    });
    res.status(200).send("Update.");
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function InsertTeam(req: Request, res: Response) {
  const { programador, primeiraSkill, segundaSkill }: TipePoc = req.body;

  if (!programador || !primeiraSkill || segundaSkill) {
    return res.status(422).send("There is one or more informations missing");
  }
  try {
    const insered = pocRepository.getProgramadorByName(programador);

    const get = (await insered).rows.map((item) => item.name);
    if (get[0]) {
      return res.status(409).send("registered.");
    }

    await pocRepository.insertProgramadores({
      programador,
      primeiraSkill,
      segundaSkill,
    });

    res.status(201).send("developers insered");
  } catch (error) {
    res.sendStatus(400);
  }
}
export async function DeletarProgramador(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const result = await pocRepository.getProgramadorById(Number(id));

    if (result.rows.length <= 0) {
      return res.status(400).send("programtor not found.");
    }

    await pocRepository.deleteProgramadorById(Number(id));

    res.status(200).send("deleted.");
  } catch (error) {
    res.sendStatus(400);
  }
}
