import express from "express";

import { productsRouter } from "./rutas/productos.ruta.js";
import { cartsRouter } from "./rutas/cart.ruta.js";

const port = 8080;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//routes
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);