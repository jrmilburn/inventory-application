const { Router } = require("express");
const router = Router();
const brandsController = require("../controllers/brandController");

router.get("/", brandsController.brandsGet);

module.exports = router;