import { Router } from "express"
const router = Router()

router.get("/users", (req,res) => {
    res.send("getting users!!")
})

router.post("/users", (req, res) => {
  res.send("Creating a user");
});

router.get("/users/:id", (req, res) => {
  res.send("getting a user");
});

router.delete("/users/:id", (req, res) => {
  res.send("deleting a user");
});

router.put("/users/:id", (req, res) => {
  res.send("updating a user");
});



export default router