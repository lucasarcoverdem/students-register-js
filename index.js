const submitButton = document.getElementById('submit-button');
const clearButton = document.getElementById('clear-button');
const table = document.getElementById('students-list');

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

    document.getElementById('form').reset();
});

clearButton.addEventListener('click', (event) => {
    event.preventDefault();

    document.getElementById('form').reset();
})
