import React, { useEffect, createContext, useState, useContext } from 'react';
import FacultyService from '../Services/FacultyService.js';
export const UserContext = createContext(null);
export const AddContext = createContext(null);
export function GetAllFaculties (){
    return useContext(UserContext)
}

export function AddFaculties(){
    return useContext(AddContext)
}

function FacultyContext({children}) {
    let [faculty, setFaculty] = useState([]);
    let [facultyId, setFacultyId] = useState(0);
    let [facultyDetails, setFacultyDetails] = useState({
        Name: "",
        Code: "",
        UniqueId: "",
        Status: 0,
    });

    let [editFacultyObj, setEditFacultyObj] = useState({
        FacultyId: 0,
        Name: "",
        Code: "",
        UniqueId: "",
        Status: 0
    })

    const facultyService = new FacultyService(facultyDetails, editFacultyObj, facultyId);

    const getData = async () => {
        const response = await facultyService.getRequest();
        setFaculty(response);
      }

    const createFaculties = async () => {
        await facultyService.postRequest();
        getData();
    }

    const editFaculties = async () => {
        await facultyService.putRequest();
    }

    const deleteFaculties = async  () => {
        const response = await facultyService.deleteRequest();
        return response;
    }

    const detailsObj = {
        faculty: faculty,
        facultyDetails: facultyDetails,
        setFacultyDetails: setFacultyDetails,
        editFacultyObj: editFacultyObj,
        setEditFacultyObj: setEditFacultyObj,
        createFaculties: createFaculties,
        editFaculties: editFaculties,
        facultyId: facultyId,
        setFacultyId: setFacultyId,
        deleteFaculties: deleteFaculties,
    }

    useEffect(()=>{getData()},[faculty])

  return (
    <UserContext.Provider value={detailsObj}>
            {children}
    </UserContext.Provider>
  )
}

export default FacultyContext;