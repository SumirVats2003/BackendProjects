import userDb from "../model/model.js";

// create and save new user
const create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Contents cannot be empty!" });
    return;
  }

  const user = new userDb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  user
    .save(user)
    .then((data) => {
      // res.send(data);
      res.redirect("/");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occured",
      });
    });
};

// retrieve and return all users/single user
const find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    userDb
      .findById(id)
      .then((data) => {
        if (!data) {
          return res.status(404).send({ message: "User not found" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving user",
        });
      });
  } else {
    userDb
      .find({})
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "some error occured",
        });
      });
  }
};

// update user by user id
const update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data cannot be empty" });
  }

  const id = req.params.id;
  userDb
    .findByIdAndUpdate(id, req.body, { useFindByIdAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Cannot update user" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Some error occured" });
    });
};

// delete user by user id
const del = (req, res) => {
  const id = req.params.id;
  userDb
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Cannot delete data" });
      } else {
        res.send({ message: "Deleted data successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Cannot delete user",
      });
    });
};

export { create, find, update, del };
