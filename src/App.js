import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const students = [
    { name: "Riya", dob: "2002-11-28" },
    { name: "Arjun", dob: "2004-05-12" },
    { name: "Sneha", dob: "2003-11-28" }, // add more if needed
  ];

  function getTodayMMDD() {
    const d = new Date();
    return `${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`;
  }

  const [todaysBirthdays, setTodaysBirthdays] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const today = getTodayMMDD();

    // Filter birthdays
    const list = students.filter((s) => s.dob.slice(5) === today);
    setTodaysBirthdays(list);

    // Show toast if there are birthdays today
    if (list.length > 0) {
      setShowToast(true);

      // Hide toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }
  }, []);

  return (
    <div>
      {showToast && todaysBirthdays.length > 0 && (
        <div className="toast">
          🎉 Today's Birthdays:{" "}
          {todaysBirthdays.map((b) => b.name).join(", ")}
        </div>
      )}

      <h2>Student Birthday Reminder</h2>

      <ul>
        {students.map((s, index) => (
          <li key={index}>
            {s.name} — {s.dob}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

