const { getAllMovie, updateById, deleteMovie, getById, getRandom, createMovie } = require("../controllers/MovieController");
const verify=require("../verifyToken")
const router = require("express").Router();
 router.get("/",verify,getAllMovie)
 router.put("/:id",verify,updateById)
 router.get("/find/:id",getById )
 router.delete("/:id",verify,deleteMovie)
 router.get("/random",getRandom);
 router.post("/",verify,createMovie)
 
module.exports = router;
