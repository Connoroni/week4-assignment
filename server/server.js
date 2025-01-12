import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URI,
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get("/", (req, res) => {
  res.json("Test on root");
});

//Joe's example code to hopefully fix my issue with the POST
// app.post("/new-data", async (req, res) => {
//     const data = req.body.formValues;
//     const query = await db.query(
//       `INSERT INTO table_name (col, col2, col3) VALUES ($1, $2, $3)`,
//       [data.input1, data.input2, data.input3]
//     );
//     await res.json(query.rows);
//   });

app.post("/guestbook", async (req, res) => {
  // console.log("Request body:", req.body);
  const data = req.body.userData;
  console.log("Data within request body:", data);
  const query = await db.query(
    `INSERT INTO guestbook (user_name, timestamp, comment) VALUES (
    $1, current_timestamp, $2)`,
    [data.user_name, data.comment]
  );
  await res.json(query.rows);
  console.log(query.rows);
});

//It was the missing comma on line 39 the whole time, credit to Hannah for sending me her POST to compare and get it working

app.get("/retrieve", async (req, res) => {
  const query = await db.query(
    `SELECT user_name, timestamp, comment FROM guestbook`
  );
  await res.json(query.rows);
  const jsonData = query.rows;
  console.log(jsonData);
});
