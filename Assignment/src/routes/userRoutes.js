// Setup end points.
const {Router} = require("express");
const registerUser = require("../controllers/registerUser");
const hashPassword = require("../middleware/hashPassword");
const listUsers = require("../controllers/listUsers");
const checkPassword = require("../middleware/checkPassword");
const login = require("../controllers/login");
 
const userRouter = Router();
 
userRouter.post("/users/register", hashPassword, registerUser);
userRouter.get("/users/listUsers", checkToken, listUsers);
userRouter.delete("/users/deleteUser", checkToken, deleteUser);
userRouter.put("/users/updatePassword", checkToken, updatePassword);
userRouter.post("/users/login", checkPassword, login)



module.exports = userRouter;