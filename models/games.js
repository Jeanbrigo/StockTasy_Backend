const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
  {
    username: { type: String, required: true },
    numberOfPlayers: {
      type: Number,
      required: true,
      min: 2,
      max: 8,
    },
    budget: {
      type: Number,
      required: true,
    },
    pointsInterval: {
      type: Number,
      required: true,
    },
    gameDuration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Game = model("game", gameSchema);

module.exports = Game;
