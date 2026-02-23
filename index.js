// const express = require("express");
// const port=3001;
// const app = express();

// const users = [
//   { id: 1, name: "Arjun", role: "student" },
//   { id: 2, name: "Priyesha", role: "mentor" }
// ];

// app.use(express.json());


// app.get("/users", (req, res) => {
//   res.status(200).json(users);
// });


// app.get("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const user = users.find(u => u.id === userId);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   res.status(200).json(user);
// });



// app.post("/users", (req, res) => {
//     console.log(req.body);
    
    
//   const newUser = {
//     id: req.body.id,
//     name: req.body.name,
//     role: req.body.role
//   };

//   users.push(newUser);



//   res.status(201).json({
//     message: "User created",
//     user: newUser
//   });
// });


// app.put("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const index = users.findIndex(u => u.id === userId);

//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   users[index] = {
//     id: userId,
//     name: req.body.name,
//     role: req.body.role
//   };

//   res.status(200).json({
//     message: "User replaced",
//     user: users[index]
//   });
// });


// app.patch("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const user = users.find(u => u.id === userId);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   if (req.body.name) user.name = req.body.name;
//   if (req.body.role) user.role = req.body.role;

//   res.status(200).json({
//     message: "User updated",
//     user: users[index]
//   });
// });


// app.delete("/users/:id",(req,res)=>{
//   const userID=Number(req.params.id);
//    const index= users.find(u => u.id === userID);

//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   if (req.body.name) index.name = req.body.name;
//   if (req.body.role) index.role = req.body.role;

//   users.splice(index, 1);
//   res.status(200).json({
//     message:"user deleted",
//     user: users[index]
//   })
// })

// app.listen(port, () => {
//   console.log(`Server started on port http://localhost:${port}`);
// });