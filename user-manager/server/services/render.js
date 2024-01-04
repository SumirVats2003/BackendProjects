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
  axios
    .get("http://localhost:8080/api/users", {
      params: { id: req.query.id },
    })
    .then((userData) => {
      res.render("update_user", { user: userData.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

export { homeRoute, addUser, updateUser };
