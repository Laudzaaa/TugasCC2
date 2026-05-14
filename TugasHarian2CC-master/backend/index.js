import express from "express";
import cors from "cors";
import { json } from "sequelize";
import router from "./routes/NoteRoutes.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(router);

app.get("/health", (_, res) => {
	res.status(200).json({ status: "ok" });
});

app.listen(PORT, ()=> console.log(`server up and running on port ${PORT}`));