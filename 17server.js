const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

const users = [
  { att: "80", Uid: 108233, total_sub: 15, bonus: 23, name: "manan" },
  { att: "80", Uid: 108263, total_sub: 14, bonus: 20, name: "bro" },
  { att: "80", Uid: 108253, total_sub: 14, bonus: 20, name: "aman" },
];

app.use(express.json());

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.Uid === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  console.log(user);
  res.status(200).json(user);
});

app.post("/users", (req, res) => {
  console.log(req.body);

  const newUser = {
    att: req.body.att,
    Uid: req.body.Uid,
    total_sub: req.body.total_sub,
    bonus: req.body.bonus,
    name: req.body.name,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser,
  });
});

app.put("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const index = users.findIndex((u) => u.Uid === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    att: req.body.att,
    Uid: req.body.Uid,
    total_sub: req.body.total_sub,
    bonus: req.body.bonus,
    name: req.body.name,
  };

  res.status(200).json({
    message: "User modified",
    user: users[index],
  });
});

app.patch("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.Uid === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (req.body.name !== undefined) user.name = req.body.name;
  if (req.body.att !== undefined) user.att = req.body.att;

  if (req.body.bonus !== undefined) user.bonus = req.body.bonus;
  if (req.body.total_sub !== undefined) user.total_sub = req.body.total_sub;
  console.log("new replaced", users);

  // att: "80",Uid: 108233,total_sub: 15,bonus: 23,name: "manan"

  res.status(200).json({
    message: "User updated",
    user: users,
  });
});

app.delete("/users/:id", (req, res) => {
  const userID = Number(req.params.id);
  const index = users.find((u) => u.Uid === userID);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  console.log("list of users", users);
  users.splice(index, 1);
  res.status(200).json({
    message: "user deleted",
    user: users[index],
  });
});

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
