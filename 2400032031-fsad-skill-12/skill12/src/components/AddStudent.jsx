import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddStudent({ selectedStudent, onSaved }) {
  const [student, setStudent] = useState({ name: "", email: "", course: "" });

  useEffect(() => {
    if (selectedStudent) setStudent(selectedStudent);
  }, [selectedStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (student.id) {
      await axios.put(`http://localhost:8081/students/${student.id}`, student);
    } else {
      await axios.post("http://localhost:8081/students", student);
    }
    setStudent({ name: "", email: "", course: "" });
    onSaved();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{student.id ? "Update Student" : "Add Student"}</h2>
      <input name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={student.email} onChange={handleChange} required />
      <input name="course" placeholder="Course" value={student.course} onChange={handleChange} required />
      <button type="submit">{student.id ? "Update" : "Add"}</button>
    </form>
  );
}