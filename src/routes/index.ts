import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hola desde Node.js con Typescript y Express.");
});

export default router; 