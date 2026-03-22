import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { userController } from "./controller/userController.js";
import { quoteController } from "./controller/quoteController.js";
import { ProductsController } from "./controller/productController.js";
import { authController } from "./controller/authController.js";
import { verifyToken } from "./middleware/verifyToken.js";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", verifyToken, userController.getUsers);
app.post("/users", userController.createUser);
app.post("/quotes", quoteController.create);
app.get("/quotes", quoteController.findAll);
app.get("/quotes/:id", quoteController.findById);
app.put("/quotes/:id", quoteController.update);
app.delete("/quotes/:id", quoteController.delete);
app.post("/products", ProductsController.create)
app.get("/products", ProductsController.findAll)
app.get("/products/:id", ProductsController.findById)
app.put("/products/:id", ProductsController.update)
app.delete("/products/:id", ProductsController.delete)

app.post("/register", authController.register);
app.post("/login", authController.login);



const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});