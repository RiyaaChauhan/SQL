const sqlConcepts = [
    { title: "SELECT Statement", desc: "Retrieves data from a database.", query: "SELECT * FROM table_name;" },
    { title: "INSERT Statement", desc: "Adds new records to a table.", query: "INSERT INTO table_name (column1, column2) VALUES (value1, value2);" },
    { title: "UPDATE Statement", desc: "Modifies existing records.", query: "UPDATE table_name SET column1 = value1 WHERE condition;" },
    { title: "DELETE Statement", desc: "Removes records from a table.", query: "DELETE FROM table_name WHERE condition;" }
];

const container = document.getElementById("sqlContainer");

sqlConcepts.forEach(concept => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="icon">🔹</div>
        <h2>${concept.title}</h2>
        <p>${concept.desc}</p>
        <code class="code">${concept.query}</code>
    `;
    container.appendChild(card);
});
