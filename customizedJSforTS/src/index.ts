import express from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// config object to encrypt data in cookie
app.use(cookieSession({ keys: ["afdjf945094809dfpoif940r9jf"] }));

app.use(router);

app.listen(2000, () => {
  console.log("Listening on port 2000!");
});
