import express from "express";
import cors from "cors";
import router from "./routes/index.Router.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

// mongod --dbpath ~/.mongo

const PORT = 5000;
app.listen(PORT, () => console.log("server running on port 5000 || or who knows"))