import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { MdDelete } from "react-icons/md";
import { MdCreate } from "react-icons/md";

const StudentsLoading = ({ sname, semail, updateStudent, deleteStudent }) => {
  const [loading, setLoading] = useState(true); // Simulating loading state

  // Simulating loading effect for 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="flex gap-3 flex-col py-3 text-[15px]">
        {loading ? (
          <div>
            <Skeleton width={150} height={35} />
            <Skeleton width={300} height={35} />
          </div>
        ) : (
          <>
            <p>
              <b className="text-slate-500 font-light">Name:</b> {sname}
            </p>
            <p>
              <b className="text-slate-500 font-light">Email:</b> {semail}
            </p>
          </>
        )}
        <div>
          {!loading && (
            <div className="flex items-center gap-4 cursor-pointer text-xl mt-4">
              <MdCreate
                className="icon-btn hover:text-green-600"
                onClick={updateStudent}
              />
              <MdDelete
                className="icon-btn hover:text-red-600"
                onClick={deleteStudent}
              />
            </div>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default StudentsLoading;
