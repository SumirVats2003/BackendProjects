import axios from "axios";

const homeRoute = (req, res) => {
  axios
    .get("http://localhost:8080/api/users")
    .then((response) => {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

const addUser = (req, res) => {
  res.render("add_user");
};

const updateUser = (req, res) => {
  res.render("update_user");
};

export { homeRoute, addUser, updateUser };
