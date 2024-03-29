import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from './Service/Routes/routes.js'


const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/app", routes);

const CONNECTION_URL =
	"mongodb+srv://admin:admin@123@cluster0.jwjjo.azure.mongodb.net/me?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
	)
	.catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);