import { db } from "./server.js";

// db.query(`CREATE TABLE IF NOT EXISTS guestbook (
//     id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     user_name VARCHAR(255),
//     timestamp TIMESTAMP,
//     comment TEXT,
//     )`);

//I was getting a syntax error again with the query above so I'm switching to the supabase sql editor from now on

//Below queries copied from SQL Editor

// CREATE TABLE IF NOT EXISTS guestbook (
//     id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     user_name VARCHAR(255),
//     timestamp TIMESTAMP,
//     comment TEXT
// )

// INSERT INTO guestbook (user_name, timestamp, comment)
// VALUES (
//   'Guest101', current_timestamp, 'I had a wonderful time at this establishment'
//   ),
//   (
//   'John Smith 359', current_timestamp, 'What a nice place!'
//   );
