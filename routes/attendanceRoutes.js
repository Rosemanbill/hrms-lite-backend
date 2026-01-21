import express from "express";
import {
  markAttendance,
  getAttendanceByEmployee,
} from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/", markAttendance);
router.get("/:employeeId", getAttendanceByEmployee);
router.get("/present-count/:employeeId", getPresentCountByEmployee);

export default router;
