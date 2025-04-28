const submitButton = document.getElementById('submit-button');
const clearButton = document.getElementById('clear-button');
const table = document.getElementById('students-list');

function saveToLocalStorage() {
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
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const studentName = document.getElementById('student-name').value;
    const studentAge = document.getElementById('student-age').value;
    const studentEmail = document.getElementById('student-email').value;
    const studentPhone = document.getElementById('student-phone').value;
    const studentCourse = document.getElementById('student-course').value;

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

    document.getElementById('form').reset();
});

clearButton.addEventListener('click', (event) => {
    event.preventDefault();

    table.innerHTML = '';
    localStorage.removeItem('students');
    document.getElementById('form').reset();
})
