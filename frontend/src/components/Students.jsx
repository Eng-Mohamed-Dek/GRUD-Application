import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdCreate } from "react-icons/md";

const Students = ({ sname, semail, updateStudent, deleteStudent }) => {
    return (
        <div>
            <div className='flex gap-3 flex-col py-3 text-[18px]'>
                <p><b className='text-slate-500 font-light'>Email:</b>  {sname}</p>
                <p><b className='text-slate-500 font-light'>Email:</b>  {semail}</p>
                <div>
                    <div className="flex items-center gap-4 cursor-pointer text-xl mt-4">
                        <MdCreate className="icon-btn text-green-600"
                            onClick={updateStudent}
                        />
                        <MdDelete className="icon-btn text-red-600"
                            onClick={deleteStudent}
                        />
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Students
