// const User = require("../models/user");
const Game = require("../models/Games");
const auth = require("../auth");
const { Router } = require("express");
const router = Router();

// Index
router.get("/", auth, async (req, res) => {
  try {
    const { username } = req.payload;
    res.status(200).json(await Game.find({ username }));
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Create
router.post("/", auth, async (req, res) => {
  try {
    const { username } = req.payload;
    req.body.username = username;
    res.status(200).json(await Game.create(req.body));
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Show
router.get("/:id", auth, async (req, res) => {
  try {
    const { username } = req.payload;
    req.body.username = username
    const { id } = req.params;
    res.status(200).json(await Game.findById(id));
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Update
// router.put("/:id", auth, async (req, res) => {
//   try {
//     const { username } = req.payload;
//     req.body.username = username;
//     const { id } = req.params;
//     res.status(200).json(await Game.findByIdAndUpdate(id, req.body, {new: true}));
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// });

// Delete
// router.delete("/:id", auth, async (req, res) => {
//   try {
//     const { id } = req.params;
//     res.status(200).json(await Game.findByIdAndRemove(id));
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// });

module.exports = router;
