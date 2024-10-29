import express from "express";
import "dotenv/config";
import connectDB from "./Database/User.js";
connectDB();
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import feedbackRouter from "./routes/feedback.routes.js";
import courseRouter from "./routes/course.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/feedback", feedbackRouter);
app.use("/api/courses", courseRouter);

app.listen(process.env.PORT || 3009, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
