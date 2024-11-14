import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateStudentPage() {

  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: '',
    age: 0,
    email: ''
  })

  const handleInputChange = (e) => {

    let { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value
    })

    // console.log(student);
  }

  const handleFormSubmit = async (e) => {
    
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/students", student);

    navigate('/students');

  }



  return (
    <>
      <h1>Create Student</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name: <input type='text' name='name' onChange={handleInputChange} value={student.name} />
        </label><br />
        <label>
          Age: <input type='number' name='age' onChange={handleInputChange} value={student.age} />
        </label><br />
        <label>
          Email: <input type='email' name='email' onChange={handleInputChange} value={student.email} />
        </label><br />
        <input type='submit' value='Create' />
      </form>
    </>
  )
}

export default CreateStudentPage