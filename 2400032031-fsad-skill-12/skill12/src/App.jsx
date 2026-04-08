import React, { useState } from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import './App.css';


function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <AddStudent selectedStudent={selectedStudent} onSaved={() => setRefresh(!refresh)} />
      <StudentList key={refresh} onEdit={setSelectedStudent} />
    </div>
  );
}

export default App;