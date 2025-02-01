import React, { useEffect, useState } from 'react'
import CreateStudent from './components/CreateStudent'
import Students from './components/Students'
import axios from 'axios'
import StudentsLoading from './components/StudentsLoading'

const App = () => {
  const [allStudents, setStudents] = useState('')
  const [loading, setLoading] = useState(true);
  // editing states
  const [update, setUpdate] = useState({
    isUpdate: false,
    type: "Create Student",
    data: null,
  })

  const apiUrl = import.meta.env.REACT_APP_API_URL;

  //let url = http://localhost:3000

  // CRUD - read students data
  const getStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/get-student");
      if (response.data) {
        setStudents(response.data.student);
      }
    } catch (error) {
      console.log("unexppected occured try again");
    }
  }


  setTimeout(() => {
    setLoading(false);
  }, 2000); // Simulating 2 seconds loading
  
  useEffect(() => {
    getStudents()
  }, [allStudents])

  // CRUD - update student 
  const handleEdit = (student) => {
    setUpdate({ isUpdate: true, data: student, type: "update" });
  };


  // CRUD - delete student
  const handleDelete = async (student) => {
    const studentId = student._id;
    try {
    const response = await axios.delete("http://localhost:3000/delete-student/" + studentId);

    getStudents();

    } catch (error) {
      console.log("Unexpected error happened");
    }
  };

  return (
    <div className='w-8/12 mx-auto mt-14 mb-20'>
      <h1 className='text-center font-bold text-xl sm:text-4xl mb-10 text-slate-500'>GRUD Application</h1>
      {/* CRUD - Create Data  */}
      <CreateStudent student={update.data} getStudents={getStudents} type={update.type} />

      {/* CRUD - Read, Update and Delete Data  */}
      <h1 className='text-2xl font-semibold mb-5 text-slate-400'>List Of Students</h1>
      {loading ? 
      <div className='grid sm:grid-cols-3 gap-10'>
        {allStudents && allStudents.map((student) => (
            <StudentsLoading />
         ))} 
      </div> : 
      <div className='grid sm:grid-cols-3 gap-10'>
        {allStudents && allStudents.map((student) => (
          <Students
          sname={student.name}
          semail={student.email}
          updateStudent={() => handleEdit(student)}
          deleteStudent={() => handleDelete(student)}
          />
        ))}
      </div>
      }
    </div>
  )
}

export default App