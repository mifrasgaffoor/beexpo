const express = require("express");
const router = express.Router();
const Blog = require("../models/BlogModel");

const blogCntrl = {
  createblog: async (req, res) => {
    try {
      const { title, message, category } = req.body;

      const blog = new Blog({
        title,
        message,
        category,
      });
      await blog.save();
      return res.status(200).json(blog);
    } catch (error) {
      console.log(error);
      res.status(409).json({ message: error.message });
    }
  },

  allblogs: async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.send(blogs);
      console.log(blogs);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },

  oneblog: async (req, res) => {
    try {
      const postId = req.params.id;
      const post = await Blog.findById(postId);
      res.send(post);
    } catch (error) {
      res.status(400).json({ error: "error" });
    }
  },
};

module.exports = blogCntrl;
