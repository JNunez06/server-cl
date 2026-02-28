import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { userController } from "./controller/userController.js";
import { quoteController } from "./controller/quoteController.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", userController.getUsers);
app.post("/users", userController.createUser);
app.post("/quotes", quoteController.create);
app.get("/quotes", quoteController.findAll);
app.get("/quotes/:id", quoteController.findById);
app.put("/quotes/:id", quoteController.update);
app.delete("/quotes/:id", quoteController.delete);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});