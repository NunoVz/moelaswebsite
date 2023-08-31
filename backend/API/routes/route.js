const express = require("express");
const router = express.Router();
const Controllers = require('../controllers/control');

router.route("/addBebida").post(Controllers.postBebida);
router.route("/addShot").post(Controllers.postShot);

router.route("/getShot").get(Controllers.getShots);
router.route("/getBebida").get(Controllers.getBebida);
router.route("/getRoleta").get(Controllers.getRoleta);
router.route("/getBingo").get(Controllers.getBingo);



module.exports = router;