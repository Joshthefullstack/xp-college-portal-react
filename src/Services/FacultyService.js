
export default class FacultyService{

    constructor(facultyDetails, editFacultyObj, facultyId){
        this.facultyDetails = facultyDetails;
        this.editFacultyObj = editFacultyObj;
        this.facultyId = facultyId;
    }

    apiEndpoint = 'http://localhost:8097/api/v1/faculties';
    async getRequest(){
        const response = await fetch(this.apiEndpoint, {
            method: "GET"
          })
          const data = await response.json();
          return data;
    }

    async postRequest(){
        // console.log(this.facultyDetails)
        await fetch(this.apiEndpoint + "/add", {
            method: "POST",
            body: JSON.stringify(this.facultyDetails),
            headers: { "Content-Type": "application/json" },
          } )
    }

    async putRequest(){
        // console.log(this.editFacultyObj)
        await fetch(this.apiEndpoint, {
            method: "PUT",
            body: JSON.stringify(this.editFacultyObj),
            headers: { "Content-Type": "application/json" },
          });
    }

    async deleteRequest(){
        // console.log(this.facultyId)
        const responses = await fetch(this.apiEndpoint + "/" + this.facultyId, {
            method: "DELETE",
          });
          return responses;
    }
}