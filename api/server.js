import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./db";
import GenerateIndigency from "./docs/Indigency";
import GenerateClearance from "./docs/Clearance";

const server = express();
const host = Bun.env.SERVER_HOST;
const port = Bun.env.SERVER_PORT;

server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
server.use(bodyParser.urlencoded({ extended: false }));

// POST METHOD
server.post("/accounts/post", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("INSERT INTO accounts VALUES(id, ?,?,?,?)", [
    task.username,
    task.password,
    task.role,
    task.creation,
  ]);

  console.log(data);
});

server.post("/accounts/search", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "SELECT * FROM accounts WHERE id LIKE ? OR username LIKE ?",
    [`${task.id}%`, `${task.username}%`]
  );

  res.send(data);
});

server.post("/accounts/delete", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("DELETE FROM accounts WHERE id=?", [
    task.id,
  ]);
  console.log(data);
});

server.post("/notifications/post", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "INSERT INTO notifications VALUES(id, ?,?,?,?)",
    [task.name, task.message, task.done, task.creation]
  );

  console.log(data);
});

server.post("/residents/post", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "INSERT INTO residents VALUES(id, ?,?,?,?,?,?,?,?,?,?,?)",
    [
      task.firstname,
      task.middlename,
      task.lastname,
      task.age,
      task.sex,
      task.birthday,
      task.civilstatus,
      task.occupation,
      task.purok,
      task.contactnumber,
      task.information,
    ]
  );

  console.log(data);
});

server.post("/residents/search", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "SELECT * FROM residents WHERE id LIKE ? OR firstname LIKE ? OR middlename LIKE ? OR lastname LIKE ? OR occupation LIKE ?",
    [
      `${task.id}%`,
      `${task.firstname}%`,
      `${task.middlename}%`,
      `${task.lastname}%`,
      `${task.occupation}%`,
    ]
  );
  res.send(data);
});

server.post("/residents/delete", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("DELETE FROM residents WHERE id=?", [
    task.id,
  ]);

  console.log(data);
});

server.post("/residents/profile", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("SELECT * FROM residents WHERE id=?", [
    task.id,
  ]);
  res.send(data);
});

server.post("/residents/occupation/search", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "SELECT * FROM residents WHERE occupation=?",
    [`${task.occupation}`]
  );
  res.send(data);
});

server.post("/transactions/post", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "INSERT INTO transactions VALUES(id, ?,?,?,?,?)",
    [task.name, task.message, task.amount, task.referral, task.creation]
  );

  console.log(data);
});

server.post("/feed/post", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "INSERT INTO announcements(title, content) VALUES(?, ?)",
    [task.title, task.content]
  );

  console.log(data);
});

// GET METHOD
server.get("/accounts/order/id", async (req, res) => {
  const data = await db.pool.query(
    "SELECT * FROM accounts WHERE role='Admin' or role='Personnel'"
  );
  res.send(data);
});

server.get("/accounts/login", async (req, res) => {
  const data = await db.pool.query("SELECT * FROM accounts");
  res.send(data);
});

server.get("/notifications", async (req, res) => {
  const data = await db.pool.query("SELECT * FROM notifications");
  res.send(data);
});

server.get("/residents/order/id", async (req, res) => {
  const data = await db.pool.query("SELECT * FROM residents");
  res.send(data);
});

server.get("/residents/profile/:id", async (req, res) => {
  let task = req.params;
  let data = await db.pool.query("SELECT * FROM residents WHERE id=?", [
    task.id,
  ]);
  res.send(data);
});

server.get("/residents/population", async (req, res) => {
  let data = await db.pool.query("SELECT * FROM residents");
  res.send(data);
});

server.get("/residents/population/male", async (req, res) => {
  let data = await db.pool.query("SELECT * FROM residents WHERE sex='Male'");
  res.send(data);
});

server.get("/residents/population/female", async (req, res) => {
  let data = await db.pool.query("SELECT * FROM residents WHERE sex='Female'");
  res.send(data);
});

server.get("/transactions", async (req, res) => {
  const data = await db.pool.query("SELECT * FROM transactions");
  res.send(data);
});

server.get("/feeds", async (req, res) => {
  const data = await db.pool.query("SELECT * FROM announcements");
  res.send(data);
});

// PUT METHOD
server.put("/accounts/edit", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "UPDATE accounts SET username=?, passphrase=? WHERE id=?",
    [task.username, task.passphrase, task.id]
  );

  console.log(data);
});

server.put("/accounts/promote", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("UPDATE accounts SET role=? WHERE id=?", [
    task.role,
    tasl.id,
  ]);

  console.log(data);
});

server.put("/residents/edit", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "UPDATE residents SET firstname=?, middlename=?, lastname=?, age=?, sex=?, birthday=?, civilstatus=?, occupation=?, purok=?, contactnumber=?, information=?",
    [
      task.firstname,
      task.middlename,
      task.lastname,
      task.age,
      task.sex,
      task.birthday,
      task.civilstatus,
      task.occupation,
      task.purok,
      task.contactnumber,
      task.information,
    ]
  );

  console.log(data);
});

// DELETE METHOD

//PDF CREATION
server.post("/document/create/clearance", async (req, res) => {
  const task = req.body;
  res.send(GenerateClearance(task.fullname, task.age, task.sex));
  console.log(task.fullname, task.age, task.sex);
});

server.post("/document/create/indigency", async (req, res) => {
  const task = req.body;
  res.send(GenerateIndigency(task.fullname));
  console.log(task.fullname);
});

// SERVER LISTEN
server.listen(port, () =>
  console.log(`API server is now running at ${host}:${port}...`)
);
