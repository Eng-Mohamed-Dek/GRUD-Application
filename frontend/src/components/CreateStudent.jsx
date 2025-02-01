import axios from 'axios';
import { useState } from 'react';

const CreateStudent = ({ student, getStudents, type }) => {
    console.log(student)
    // tags state value
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    // CRUD - create students
    const Create = async () => {
        // validations
        if (!name) {
            setError("All Fields are required");
            return;
        }

        if (!email) {
            setError("All Fields are required");
            return;
        }

        setError("");

        try {
            const response = await axios.post("http://localhost:3000/create-student", { name, email });
            //clear after making 
            if (response) {
                setName("");
                setEmail("");
                setTags("");
                getStudents();
            }
        } catch (error) {
            console.log("unexppected occured try again");
        }
    };


    const EditStudent = async () => {
        const studentId = student._id;
        try {
            const response = await axios.put("http://localhost:3000/update-student/" + studentId, { name, email });

            //clear after making 
            setName("");
            setEmail("");
            setTags("");
            getStudents();

        } catch (error) { console.log("unexppected occured try again") }
    }


    // CRUD - create and update student 
    const CreateUpdate = () => {
        if (type == "Create Student") {
            // update edit logic
            Create();
        } else {
            // update create logic
            EditStudent();
        }
    }


    return (
        <div className='flex justify-center mb-10'>
            <div className='border shadow-md p-5 w-[700px] sm:h-[280px] rounded-lg bg-white'>
                <h1 className='text-xl text-slate-500 py-3'>Create Student</h1>
                <div className='flex sm:flex-row flex-col gap-10 sm:gap-24 mb-3'>
                    <div className='flex flex-col gap-5'>
                        <label htmlFor="name" className='font-semibold text-slate-500'>Enter Name</label>
                        <input type="text" placeholder='Student`s Name' className='border border-1 border-slate-400 py-1.5 px-3 rounded' onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <label htmlFor="name" className='font-semibold text-slate-500'>Enter Email</label>
                        <input type="email" placeholder='Student`s Email' className='border border-1 border-slate-400 py-1.5 px-3 rounded' onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                </div>
                {type !== 'Create Student' ? <p className='text-slate-500 text-sm mt-2'>Updating  <b>name:</b> {student.name} <b>email:</b> {student.email}</p> : ""}
                {error && <span className="text-red-500 text-sm font-light"> {error} </span>}
                <button className='text-sm bg-slate-500 py-2.5 px-3 rounded-md font-light text-white cursor-pointer hover:bg-slate-600 active:bg-slate-400 transition-all duration-700 float-end sm:mr-8' onClick={() => { CreateUpdate() }}>
                    {type === 'Create Student' ? type : 'Update Students'}
                </button>
            </div>
        </div>
    )
}

export default CreateStudent