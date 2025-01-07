document.getElementById('submitButton').addEventListener('click', function () {
    const date = document.getElementById('date').value;
    const className = document.getElementById('class').value;
    const facultyName = document.getElementById('facultyName').value;
    const period = document.getElementById('period').value;

    if (!date || !className || !facultyName || !period) {
        alert('Please fill all fields correctly!');
        return;
    }

    const table = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${date}</td>
        <td>${className}</td>
        <td>${facultyName}</td>
        <td>${period}</td>
    `;

    document.getElementById('adjustmentForm').reset();
});

document.getElementById('printButton').addEventListener('click', function () {
    window.print();
});
