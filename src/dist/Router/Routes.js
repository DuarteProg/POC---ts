import express from "express";
var router = express.Router();
import { showProgramadores, programadorFiltrado, updateProgramador, InsertTeam, DeletarProgramador } from "../Controllers/Controller";
router.get("/get", showProgramadores);
router.get("/get/:id", programadorFiltrado),
    router.put("/post/:id", updateProgramador);
router.post("/post", InsertTeam);
router["delete"]("/delete", DeletarProgramador);
export default router;
