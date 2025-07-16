import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
