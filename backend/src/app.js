import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";


const app = express();

// Express App Setup

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);


app.get("/", (req, res) => {
  res.send("E-commerce API is running");
});

export default app;


