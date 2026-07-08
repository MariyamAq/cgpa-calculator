let subjects = [];

function addSubject() {
    const name = document.getElementById('subject').value;
    const credits = parseFloat(document.getElementById('credits').value);
    const grade = parseFloat(document.getElementById('grade').value);

    if (name && credits && grade) {
        subjects.push({ name, credits, grade });
        updateTable();
    }
}

function updateTable() {
    const table = document.getElementById('subject-table');
    // Keep the header, reset everything else
    table.innerHTML = "<tr><th>Subject</th><th>Credits</th><th>Grade</th><th>Action</th></tr>";
    
    subjects.forEach((s, index) => {
        table.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.credits}</td>
                <td>${s.grade}</td>
                <td><button onclick="deleteSubject(${index})" style="background:red; padding:5px;">Delete</button></td>
            </tr>`;
    });
}

function calculate() {
    let totalPoints = 0;
    let totalCredits = 0;
    subjects.forEach(s => {
        totalPoints += (s.grade * s.credits);
        totalCredits += s.credits;
    });
    const gpa = totalPoints / totalCredits;
    document.getElementById('result').innerText = `GPA: ${gpa.toFixed(2)}`;
}
function deleteSubject(index) {
    subjects.splice(index, 1); // Removes 1 item at the specific index
    updateTable(); // Re-renders the table without that item
}
