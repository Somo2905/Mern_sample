import express from 'express';
import dotenv from 'dotenv';
import path from "path";
import { connectDB } from './config/db.js';
import productRoutes from './Routes/product.route.js';
dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get(/^\/(?!api).*/, (req, res) => {
	res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});
}

app.listen(port, () => {
    connectDB();
    console.log("Service started on " + port);});