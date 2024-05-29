const { User, Thought } = require("../models");

const userController = {
  // get all users
  async getUsers(req, res) {},
  // get single user by id
  async getSingleUser(req, res) {},
  // create a new user
  async createUser(req, res) {},
  // update a user
  async updateUser(req, res) {},
  // delete user (BONUS: and delete associated thoughts)
  async deleteUser(req, res) {},

  // add friend to friend list
  async addFriend(req, res) {},
  // remove friend from friend list
  async removeFriend(req, res) {},
};

module.exports = userController;
