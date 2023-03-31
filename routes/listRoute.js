const {
  getList,
  createList,
  deleteList,
} = require("../controllers/listController");

const verify = require("../verifyToken");
const router = require("express").Router();
router.get("/", verify, getList);
router.delete("/:id", verify, deleteList);
router.post("/", verify, createList);

module.exports = router;
