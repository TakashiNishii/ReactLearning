const Photo = require("../models/Photo");
const User = require("../models/User");

const mongoose = require("mongoose");

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const reqUser = req.user;

  const user = await User.findById(reqUser.id);

  //Create a photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name,
  });

  // If photo was created successfully, return data
  if (!newPhoto) {
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."],
    });
  }

  res.status(201).json(newPhoto);
};

const deletePhoto = async (req, res) => {
  const { id } = req.params;

  const reqUser = req.user;

  try {
    const photo = await Photo.findById(id);

    // check if photo exists
    if (!photo) {
      return res.status(404).json({
        errors: ["Foto não encontrada!"],
      });
    }

    // check if photo belongs to user
    if (!photo.userId.equals(reqUser.id)) {
      return res.status(422).json({
        errors: ["Ocorreu um erro, porfavor tente novamente mais tarde."],
      });
    }

    await Photo.findByIdAndDelete(photo._id);

    res.status(200).json({
      id: photo._id,
      message: "Foto deletada com sucesso!",
    });
  } catch (error) {
    res.status(404).json({
      errors: ["Foto não encontrada!"],
    });
    return;
  }
};

module.exports = {
  insertPhoto,
  deletePhoto,
};
