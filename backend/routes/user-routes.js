import  express  from "express";
import { deleteUser, getAllUsers, login, signup, updateUser,getUserById,getBookingsOfUser
 } from "../controllers/user-controller.js";

const userRouter= express.Router();

userRouter.get("/",getAllUsers); 
userRouter.post("/usersignup",signup);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id",deleteUser);
userRouter.post("/login",login);
userRouter.get("/bookings/:id", getBookingsOfUser);
export default userRouter;
