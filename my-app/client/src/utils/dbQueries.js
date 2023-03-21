import Axios from 'axios';

/**
 * This function deletes an entry of the database.
 * @param {*} id Id from the entry that needs to be deleted
 */
export function deleteEntry(id) {
    Axios.delete(`http://localhost:3001/api/delete/${id}`);
    console.log("Entry Deleted: " + id);
}

/**
 * This function updates an entry of the database.
 * @param {*} id Id from the entry that needs to be updated
 * @param {*} formData Data that replaces the current entry
 */
export function updateEntry(id, formData) {
    Axios.put("http://localhost:3001/api/update", {
        formData: formData,
        id: id,
    });
    console.log("Entry Updated: " + id);
}

/**
 * This function inserts a new row of data into the database.
 * @param {*} formData Data that replaces the current entry
 */
export function insertEntry(formData) {
    Axios.post("http://localhost:3001/api/insert", { formData: formData }).then((res) => {
        console.log("We did it!: " + res);
        alert("Succesfull insert!");
    });
    console.log("New Entry Inserted");
}

/**
 * This function retrieves all the data from the database, and stores it in the localstorage.
 */
export function getAllDataFromDB(setDbData) {
    Axios.get("http://localhost:3001/api/get").then((response) => {
        localStorage.setItem("db", response.data);
        console.log(response.data);
        setDbData(response.data)
    });

}