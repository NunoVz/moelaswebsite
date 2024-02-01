import express, { Router } from "express"
import swaggerUi from "swagger-ui-express"

import ShotRouter from "./shot.route.mjs"

const app = Router()

app.get('/', (req, res) => {
	res.send('Moelas Bar API');
});


// Routes
app.use("/shots", ShotRouter)

app.use("/docs", swaggerUi.serve)

export default app