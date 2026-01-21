import express from "express";
import {
  markAttendance,
  getAttendanceByEmployee,
  getPresentCountByEmployee
} from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/", markAttendance);
router.get("/present-count/:employeeId", getPresentCountByEmployee);
router.get("/:employeeId", getAttendanceByEmployee);



export default router;
