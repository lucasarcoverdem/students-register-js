const submitButton = document.getElementById('submit-button');
const clearButton = document.getElementById('clear-button');
const table = document.getElementById('students-list');

function saveToLocalStorage(students) {
    localStorage.setItem('students', JSON.stringify(students));
}

function loadFromLocalStorage() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.course}</td>
        `;
        table.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    const students = JSON.parse(localStorage.getItem('students')) || [];
    clearButton.disabled = students.length === 0;
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const studentName = document.getElementById('student-name').value.trim();
    const studentAge = document.getElementById('student-age').value.trim();
    const studentEmail = document.getElementById('student-email').value.trim();
    const studentPhone = document.getElementById('student-phone').value.trim();
    const studentCourse = document.getElementById('student-course').value.trim();
    
    if (!studentName || !studentAge || !studentEmail || !studentPhone || studentCourse === 'none') {
        alert('Please fill out all fields before submitting.');
        return;
    }

    if (isNaN(studentAge) || studentAge <= 0) {
        alert('Please enter a valid age.');
        return;
    }

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${studentName}</td>
        <td>${studentAge}</td>
        <td>${studentEmail}</td>
        <td>${studentPhone}</td>
        <td>${studentCourse}</td>
    `;
    table.appendChild(row);

    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push({
        name: studentName,
        age: studentAge,
        email: studentEmail,
        phone: studentPhone,
        course: studentCourse
    });

    saveToLocalStorage(students)

    document.getElementById('form').reset();

    clearButton.disabled = false;
});

clearButton.addEventListener('click', (event) => {
    event.preventDefault();

    let confirmation = confirm("Are you sure you want to clear the list?");
    if (!confirmation) return;

    table.innerHTML = '';
    localStorage.removeItem('students');
    document.getElementById('form').reset();
    clearButton.disabled = true;
})
