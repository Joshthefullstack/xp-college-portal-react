import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GetAllFaculties } from "../../Context/FacultyContext";

function FacultyModal({
  show,
  handleClose,
  add,
  facultyObj
}) {
  const facultyData = GetAllFaculties();

  let [status, setStatus] = useState("");

  if(!add){
    facultyObj.Code.trim();
    
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{add ? "Add Faculty" : "Edit Faculty"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (add) {
                facultyData.createFaculties();
                
              }
              facultyData.editFaculties();
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Faculty Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. Faculty of Arts"
                onChange={(e) => {
                  facultyData.setFacultyDetails(
                    (facultyData.facultyDetails = {
                      ...facultyData.facultyDetails,
                      Name: e.target.value,
                    })
                  );
                  facultyData.setEditFacultyObj(
                    (facultyData.editFacultyObj = {
                      ...facultyData.editFacultyObj,
                      Name: e.target.value,
                    })
                  );
                }}
                // value={add ? "" : facultyObj.Name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Faculty Code:</Form.Label>
              <Form.Control
                type="text"
                placeholder=" e.g. ARTS201"
                onChange={(e) => {
                  facultyData.setFacultyDetails(
                    (facultyData.facultyDetails = {
                      ...facultyData.facultyDetails,
                      Code: e.target.value,
                    })
                  );
                  facultyData.setEditFacultyObj(
                    (facultyData.editFacultyObj = {
                      ...facultyData.editFacultyObj,
                      Code: e.target.value,
                    })
                  );
                }}
                // value={add ? "" : facultyObj.Code}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Faculty Unique Id:</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. ARTS2023"
                onChange={(e) => {
                  facultyData.setFacultyDetails(
                    (facultyData.facultyDetails = {
                      ...facultyData.facultyDetails,
                      UniqueId: e.target.value,
                    })
                  );
                  facultyData.setEditFacultyObj(
                    (facultyData.editFacultyObj = {
                      ...facultyData.editFacultyObj,
                      UniqueId: e.target.value,
                    })
                  );
                }}
                // value={add ? "" : facultyObj.UniqueId}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Status"
                onChange={(e) => {
                  console.log(e.target.checked);
                  setStatus((status = e.target.checked ? 1 : 0));
                  facultyData.setFacultyDetails(
                    (facultyData.facultyDetails = {
                      ...facultyData.facultyDetails,
                      Status: status,
                    })
                  );
                  facultyData.setEditFacultyObj(
                    (facultyData.editFacultyObj = {
                      ...facultyData.editFacultyObj,
                      Status: status,
                    })
                  );
                }}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default FacultyModal;
