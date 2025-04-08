const express = require("express");
const router = express.Router();

const reportController = require("./../controllers/reportController");

router.get("/report/csv", reportController.exportIngressosCSV);
router.get("/report/pdf", reportController.exportIngressosPDF);

module.exports = router;