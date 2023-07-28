let selectedRow = null;

// function showAlert(message, className) {
//     const div = document.createElement('div');
//     div.className = `alert alert-${className}`;
//     div.appendChild(document.createTextNode(message));

//     const container = document.querySelector('.container');
//     const main = document.querySelector('.main');
//     container.insertBefore(div, main);

//     setTimeout(() => document.querySelector('.alert').remove(), 1000);
// }
// Clear All Fields 
function clearField() {
    document.querySelector('#firstname').value = ""
    document.querySelector('#lastname').value = ""
    document.querySelector('#courseteacher').value = ""
    document.querySelector('#rollno').value = ""
}
// Add Data 
document.querySelector('#student-form').addEventListener('click', (e) => {
    let firstname = document.querySelector('#firstname').value;
    let lastname = document.querySelector('#lastname').value;
    let teacher = document.querySelector('#courseteacher').value;
    let rollno = document.querySelector('#rollno').value;

    // condition 
    if (firstname == "" || lastname == "" || teacher == "" || rollno == "") {
        showAlert("Please fill All the Fields",'danger');
    } else {
        if (selectedRow == null) {
            const list = document.querySelector('#student-list');
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${firstname}</td>
            <td>${lastname}</td>
            <td>${rollno}</td>
            <td>${teacher}</td>
            <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert('Data Added','success')
        }else{
            selectedRow.children[0].textContent = firstname;
            selectedRow.children[1].textContent = lastname;
            selectedRow.children[2].textContent = rollno;
            selectedRow.children[3].textContent = teacher;
            selectedRow = null;
            showAlert('Data Edited', 'info')
        }
        clearField();
    }
})
// Edit Data 
document.querySelector('#student-list').addEventListener('click', (e)=>{
    target = e.target;
    if (target.classList.contains('edit')) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector('#firstname').value =  selectedRow.children[0].textContent;
        document.querySelector('#lastname').value =  selectedRow.children[1].textContent;
        document.querySelector('#courseteacher').value =  selectedRow.children[2].textContent;
        document.querySelector('#rollno').value =  selectedRow.children[3].textContent;
        
    }
})

// Delete Button 
document.querySelector('#student-list').addEventListener('click', (e) => {
    target = e.target;
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.remove();
        showAlert('Data Deleted Successfully', 'danger')
    }
});