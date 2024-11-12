import React from 'react'

import { useState, useEffect } from "react"
import axios from "axios";

function StudentsPage() {

    const [students, setStudents] = useState(null);

    const fetchStudents = async () => {
  
      // fetch students from api
      const res = await axios.get("http://localhost:3000/students");
      console.log(res.data.students);
  
  
      // set students in state
      setStudents(res.data.students);
    }
  
    useEffect(() => {
      fetchStudents()
    }, []);
  
  
    return (
      <>
        <h1>Students</h1>
  
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
          {
            students != null ?
              students.map((student) => {
                return <tr>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.email}</td>
                </tr>
              }) : <h3>No Record</h3>
          }
        </table>
  
      </>
    );
}

export default StudentsPage