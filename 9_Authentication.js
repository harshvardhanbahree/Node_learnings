const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

const users = [
  {
    name: "Harsh",
    password: "$2b$10$0vzOeiTDnZXf1N3tkci0TuXXJfihbEBwgx68Nddsvtt/wrgfRk7fm",
  },
];
app.use(express.json());

app.get("/login", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt(); --> this is another way go creating a salt
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    console.info(hashPassword);

    users.push({ name: req.body.name, password: hashPassword });
    res.status(200).json("Added");
  } catch (error) {}
});

app.post("/users/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);

  if (!user) {
    return res.json(400).json({ msg: "No user" });
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success");
    } else {
      res.send("Wrong Password");
    }
  } catch (error) {}
});

app.listen(3000, () => {
  console.info("Running...");
});
