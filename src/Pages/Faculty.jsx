import React, { useEffect, useState, useContext } from "react";
// import Validator from '../Validator';
import Table from "react-bootstrap/Table";
import style from "../module.css/Faculty.module.css";
import ButtonComp from "../Components/Common/Button";
import { GetAllFaculties } from "../Context/FacultyContext";
import FacultyModal from "../Components/App/FacultyModal";

function Faculty() {
  let [addFaculty, setAddFaculty] = useState("Add Faculty");
  const facultyData = GetAllFaculties();
  let [add, setAdd] = useState(true);



  let [facultyObj, setFacultyObj] = useState({})

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // I WANTED TO COME AND TEST MY ADD AND EDIT FORMS
  // REMEMBER TO VALIDATE YOUR FORMS
  //  I WANT TO PREPOPULATE MY EDIT FORMS - NOT YET DONE, ASK FOR HELP
  // I WANT TO WORK ON MY DELETE BUTTON

  const populateEditForm = (id) =>{
    setFacultyObj(facultyObj = facultyData.faculty.find(faculty => faculty.FacultyId === id));
  }

  return (
    <div className={style.container}>
      <h2>Faculty</h2>
      <div className={style.button}>
        <ButtonComp text={addFaculty} action={handleShow} variant="primary" setAdd={setAdd} add={add}/>
      </div>

    <FacultyModal show={show} handleClose={handleClose} handleShow={handleShow} add={add}  facultyObj={facultyObj} />

      <Table bordered className={style.table}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Faculty Name</th>
            <th>Code</th>
            <th>UniqueId</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {facultyData.faculty.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.Name}</td>
                <td>{value.Code}</td>
                <td>{value.UniqueId}</td>
                <td className={value.Status > 0 ? style.green : style.red}>
                  {value.Status > 0 ? "Active" : "Inactive"}
                </td>
                <td>
                  <button className={style.edit_btn} onClick={() => {
                    setAdd(add = false);
                    handleShow();
                    facultyData.setEditFacultyObj(facultyData.editFacultyObj = { ...facultyData.editFacultyObj, FacultyId: value.FacultyId });
                    populateEditForm(value.FacultyId)
                  }}>
                    Edit
                  </button>
                  <button className={style.del_btn} onClick={() => {
                    facultyData.setFacultyId(value.FacultyId)
                    facultyData.deleteFaculties()
                    
                  }}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Faculty;
