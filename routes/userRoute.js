const { getAllUsers, updateById, getUserById, deleteById, getUserStatus ,getLikedMovies,removeFromLikedMovies,addToLikedMovies} = require("../controllers/UserController");
const verify=require("../verifyToken")
const router = require("express").Router();
 router.get("/",verify,getAllUsers)
 router.put("/:id",verify,updateById)
 router.get("/find/:id",getUserById)
 router.delete("/:id",verify,deleteById)
 router.get("/status",getUserStatus)
 router.get("/liked/:email", getLikedMovies);
 router.post("/add", addToLikedMovies);
 router.put("/remove", removeFromLikedMovies);
module.exports = router;
