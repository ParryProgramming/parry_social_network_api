const { Thought, User } = require("../models");

const thoughtController = {
  // get all thoughts
  async getThoughts(req, res) {},
  // get single thought by id
  async getSingleThought(req, res) {},
  // create a thought
  async createThought(req, res) {},
  // update thought
  async updateThought(req, res) {},
  // delete thought
  async deleteThought(req, res) {},

  // add a reaction to a thought
  async addReaction(req, res) {},
  // remove reaction from a thought
  async removeReaction(req, res) {},
};

module.exports = thoughtController;
