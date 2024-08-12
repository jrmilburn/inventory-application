const { Router } = require("express");
const router = Router();
const brandsRouter = require("./brands");
const brandsController = require("../controllers/brandController");

router.get("/", brandsController.brandsGet);
router.use("/brands", brandsRouter);


module.exports = router;