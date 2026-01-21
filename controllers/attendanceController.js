import Attendance from "../models/Attendance.js";

export const markAttendance = async (req, res, next) => {
  try {
    const { employeeId, date, status } = req.body;

    if (!employeeId || !date || !status) {
      return res.status(400).json({ message: "All fields required" });
    }

    const attendance = await Attendance.create({
      employee: employeeId,
      date,
      status,
    });

    res.status(201).json(attendance);
  } catch (error) {
    if (error.code === 11000) {
      error.status = 409;
      error.message = "Attendance already marked for this date";
    }
    next(error);
  }
};

export const getAttendanceByEmployee = async (req, res) => {
  const records = await Attendance.find({
    employee: req.params.employeeId,
  }).sort({ date: -1 });

  res.json(records);
};
export const getPresentCountByEmployee = async (req, res) => {
  const employeeId = req.params.employeeId;

  const count = await Attendance.countDocuments({
    employee: employeeId,
    status: "Present",
  });

  res.json({ presentDays: count });
};

