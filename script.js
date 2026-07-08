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
    table.innerHTML = "<tr><th>Subject</th><th>Credits</th><th>Grade</th></tr>";
    subjects.forEach(s => {
        table.innerHTML += `<tr><td>${s.name}</td><td>${s.credits}</td><td>${s.grade}</td></tr>`;
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
