const express = require("express");
const router = express.Router();
const Student = require("../models/StudentModel");

const studentCntrl = {
  postprofileofstudent: async (req, res) => {
    try {
      const { mobileno, website, photo, linkedin, address } = req.body;
      if (!mobileno || !website || !photo || !photo || !linkedin || !address) {
        return res.status(400).json({ error: "fill all fields" });
      }
      const sttudentprofile = new Student({
        mobileno,
        website,
        photo,
        linkedin,
        address,
      });
      await sttudentprofile.save();
      console.log(req.body.pic);
      console.log(mobileno, website, photo, linkedin, address);
      return res.status(200).json({ msg: "profile updated  Successfully" });
    } catch (error) {
      console.log(error);
      console.log(error);
      return res.status(400).json({ error });
    }
  },

  getallstudents: async (req, res) => {
    try {
      const students = await Student.find();
      res.send(students);
      console.log(students);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },

  onestudent: async (req, res) => {
    try {
      const stuId = req.params.id;
      const stn = await Event.findById(stuId);
      res.send(stn);
    } catch (error) {
      res.status(400).json({ error: "error" });
    }
  },

  editstudentprofile: async (req, res) => {
    try {
      const updatestudentprofile = await Student.findByIdAndUpdate(
        {
          _id: req.body._id,
        },
        {
          mobileno: req.body.mobileno,
          website: req.body.website,
          photo: req.body.photo,
          linkedin: req.body.linkedin,
          address: req.body.address,
        },
        {
          new: true,
        }
      );
      res.send(updatestudentprofile);
      console.log(updatestudentprofile);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  deletestudentprofile: async (req, res) => {
    try {
      const deletestudent = await Student.findByIdAndDelete({
        _id: req.body._id,
      });
      res.send(deletestudent);
    } catch (error) {
      res.status(400).json({ msg: "deleted " });
    }
  },
};

module.exports = studentCntrl;
