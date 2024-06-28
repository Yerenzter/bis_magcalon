const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const server = express();
const host = Bun.env.SERVER_HOST;
const port = Bun.env.SERVER_PORT;

server.use(cors({
  origin: 'http://yerenzter.me:5173',
  credentials: true
}));
server.use('/login', (req, res) => {
  res.send({
    token: 'bis-2024-0000'
  })
});
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));

// GET METHOD
server.get('/accounts', async (req, res) => {
  const data = await db.pool.query('SELECT * FROM accounts', [req.body.account_id]);
  res.send(data);
});

server.get('/puroks', async (req, res) => {
  const data = await db.pool.query('SELECT * FROM puroks', [req.body.purok_id]);
  res.send(data);
});

server.get('/requests', async (req, res) => {
  const data = await db.pool.query('SELECT * FROM requests', [req.body.request_id]);
  res.send(data);
});

server.get('/residents', async (req, res) => {
  const data = await db.pool.query('SELECT * FROM residents', [req.body.resident_id]);
  res.send(data);
});

server.get('/transactions', async (req, res) => {
  const data = await db.pool.query('SELECT * FROM transactions', [req.body_transaction_id]);
  res.send(data);
});

server.get('/users', async(req, res) => {
  const data = await db.pool.query('SELECT * FROM users', [req.body.user_id]);
  res.send(data);
});


// POST METHOD
server.post('/accounts', async (req, res) => {
  const task = req.body;
  const data = await db.pool.query('INSERT INTO accounts VALUES(account_id, ?, ?, ?, ?)', [
    task.account_username,
    task.account_password,
    task.account_type,
    task.account_created
  ]);
  console.log(data);
});

server.post('/puroks', async (req, res) => {
  const task = req.body;
  const data = await db.pool.query('INSERT INTO puroks VALUES(purok_id, ?)', [task.purok_name]);
  console.log(data);
});

server.post('/requests', async (req, res) => {
  const task = req.body;
  const data = await db.pool.query('INSERT INTO requests VALUES(request_id, ?, ?, ?)', [
    task.request_name,
    task.request_status,
    task.request_date
  ]);
  console.log(data);
});

server.post('/residents', async (req, res) => {
  const task = req.body;
  const data = await db.pool.query('INSERT INTO residents VALUES(resident_id, ?, ?, ?, ?, ?, ?, ?)', [
    task.resident_firstname,
    task.resident_middlename,
    task.resident.lastname,
    task.resident_age,
    task.resident_birthday,
    task.resident_sex,
    task.resident_occupation,
    task.resident_civil_status
  ]);
  console.log(data);
});

server.post('/transactions', async (req, res) => {
  const task = req.body;
  const data = db.pool.query('INSERT INTO transactions VALUES(transaction_id, ?, ?, ?, ?)', [
    task.transaction_name,
    task.transaction_code,
    task.transaction_date,
    task.transaction_payment
  ]);
  console.log(data);
});

server.post('/users', async (req, res) => {
  const task = req.body;
  const data = await db.pool.query('INSERT INTO users VALUES(user_id, ?, ?, ?, ?)', [
    task.user_username,
    task.user_password,
    task.user_type,
    task.user_created
  ]);
  console.log(data);
});


// UPDATE METHOD
server.put('/accounts', async (req, res) => {
  const task = req.body;
  const data = await db.pool.query('UPDATE accounts SET account_username=?, account_password=? WHERE account_id=?', [
    task.account_username,
    task.account_password,
    task.account_id
  ]);
  console.log(data);
});

server.put('/accounts/promote', async(req, res) => {
  const task = req.body;
  const data = await db.pool.query('UPDATE accounts SET account_type=? WHERE account_id=?', [
    task.account_type,
    task.account_id
  ]);
});

server.put('/puroks', async (req, res) => {
  const task = req.body;
  const data = await db.pool.query('UPDATE puroks SET purok_name=? WHERE purok_id=?', [task.purok_name, task.purok_id]);
  res.send(data);
});

server.put('/residents', async (req, res) => {
  const task = req.body;
  const data = await db.pool.query('UPDATE residents SET resident_firstname=?, resident_middlename=?, resident_lastname=?, resident_age=?, resident_birthday=?, resident_sex=?, resident_occupation=?, resident_civil_status=? WHERE resident_id=?', [
    task.resident_firstname,
    task.resident_middlename,
    task.resident_lastname,
    task.resident_age,
    task.resident_birthday,
    task.resident_occupation,
    task.resident_civil_status,
    task.resident_id
  ]);
  res.send(data);
});

server.put('/users', async (req, res) => {
  const task = req.body;
  const data =  await db.pool.query('UPDATE users SET user_username=?, user_password=? WHERE user_id=?',[
    task.user_username,
    task.user_password,
    task.user_id
  ]);
});

server.put('/users/promote', async (req, res) => {
  const task = req.body;
  const data = await db.pool.query('UPDATE users SET user_type=? WHERE user_id=?', [
    task.user_type,
    task.user_id
  ])
});


// DELETE METHOD
server.delete('/accounts', async (req, res) => {
  const data = await db.pool.query('DELETE FROM accounts WHERE account_id=?', [req.query.account_id]);
  res.send(data);
});

server.delete('/puroks', async (req, res) => {
  const data =  await db.pool.query('DELETE FROM puroks WHERE purok_id=?', [req.query.purok_id]);
  res.send(data);
});

server.delete('/requests', async (req, res) => {
  const data = await db.pool.query('DELETE FROM requests WHERE requests WHERE request_id=?', [req.query.request_id]);
  res.send(data);
});

server.delete('/residents', async (req, res) => {
  const data = await db.pool.query('DELETE FROM residents WHERE resident_id=?', [req.query.resident_id]);
  res.send(data);
});

server.delete('/transactions', async (req, res) => {
  const data = await db.pool.query('DELETE FROM transactions WHERE transaction_id=?', [req.query.transaction_id]);
  res.send(data);
});

server.delete('/users', async (req, res) => {
  const task = req.body;
  const data = await db.pool.query('DELETE FROM users WHERE user_id=?', [task.user_id]);
  console.log(data);
});

server.listen(port, () => console.log(`Database server is now runinng at ${host}:${port}`));
