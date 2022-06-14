import { Router } from "express";

import Example from "./controllers/example/example"

const router = Router()

const example = new Example()

router.get('/example', example.index)

export { router }