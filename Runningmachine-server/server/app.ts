import express, { Request, Response } from "express";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();

import reviewRouter from "./src/routes/review";
import programRouter from "./src/routes/program";
import priceRouter from "./src/routes/price";
import machineRouter from "./src/routes/machine";
import hoursRouter from "./src/routes/hours";
import facilityRouter from "./src/routes/facility";
import companyRouter from "./src/routes/company";
import commentRouter from "./src/routes/comment";

app.use(express.json());
app.use(morgan("tiny"));
app.use(compression());
app.use(helmet());
app.use(cors());

app.use("/review", reviewRouter);
app.use("/program", programRouter);
app.use("/price", priceRouter);
app.use("/machine", machineRouter);
app.use("/hours", hoursRouter);
app.use("/facility", facilityRouter);
app.use("/company", companyRouter);
app.use("/comment", commentRouter);

app.use("/", (req: Request, res: Response) => {
    res.status(404).send("Anavailable route");
});

app.use((err: Error, req: Request, res: Response) => {
    console.error(err);
    res.sendStatus(500);
});

app.listen(8080, () => {
    console.log("Active!");
});