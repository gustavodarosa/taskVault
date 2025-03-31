import express from "express";
import taskRoutes from "./api/routes/taskRoutes";
import { errorHandler } from './api/middlewares/errorHandler';

const app = express();

// Middleware
app.use(express.json()); // Para entender o corpo da requisição no formato JSON

// Rotas
app.use("/api", taskRoutes);

app.use(errorHandler);

export default app;