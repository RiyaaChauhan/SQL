const sqlConcepts = [
    { title: "LIMIT", desc: "Limit the number of rows returned.", query: "SELECT * FROM employees LIMIT 3;" },
    { title: "FETCH", desc: "Retrieve a specified number of rows.", query: "SELECT * FROM employees FETCH FIRST 3 ROWS ONLY;" },
    { title: "WHERE", desc: "Filter rows based on conditions.", query: "SELECT * FROM employees WHERE department = 'IT';" },
    { title: "LIKE", desc: "Match a pattern in a column.", query: "SELECT * FROM employees WHERE first_name LIKE 'J%';" },
    { title: "IN", desc: "Match any value in a list.", query: "SELECT * FROM employees WHERE department IN ('HR', 'Finance');" },
    { title: "BETWEEN", desc: "Match values within a range.", query: "SELECT * FROM employees WHERE salary BETWEEN 50000 AND 60000;" },
    { title: "IS NULL", desc: "Match NULL values.", query: "SELECT * FROM employees WHERE department IS NULL;" },
    { title: "AND", desc: "Combine multiple conditions.", query: "SELECT * FROM employees WHERE department = 'IT' AND salary > 60000;" },
    { title: "OR", desc: "Specify multiple conditions.", query: "SELECT * FROM employees WHERE department = 'HR' OR department = 'Finance';" },
    { title: "NOT", desc: "Negate a condition.", query: "SELECT * FROM employees WHERE NOT department = 'IT';" },
    { title: "ORDER BY", desc: "Sort the result set.", query: "SELECT * FROM employees ORDER BY salary DESC;" },
    { title: "GROUP BY", desc: "Group rows into summary rows.", query: "SELECT department, COUNT(*) FROM employees GROUP BY department;" },
    { title: "COUNT", desc: "Count the number of rows.", query: "SELECT COUNT(*) FROM employees;" },
    { title: "SUM", desc: "Calculate the sum of a column.", query: "SELECT SUM(salary) FROM employees;" },
    { title: "AVG", desc: "Calculate the average value.", query: "SELECT AVG(salary) FROM employees;" },
    { title: "MIN", desc: "Find the minimum value.", query: "SELECT MIN(salary) FROM employees;" },
    { title: "MAX", desc: "Find the maximum value.", query: "SELECT MAX(salary) FROM employees;" },
    { title: "INNER JOIN", desc: "Match values in both tables.", query: "SELECT * FROM employees INNER JOIN departments ON employees.department_id = departments.department_id;" },
    { title: "LEFT JOIN", desc: "Retrieve all left table records.", query: "SELECT * FROM employees LEFT JOIN departments ON employees.department_id = departments.department_id;" },
    { title: "RIGHT JOIN", desc: "Retrieve all right table records.", query: "SELECT * FROM employees RIGHT JOIN departments ON employees.department_id = departments.department_id;" },
    { title: "FULL OUTER JOIN", desc: "Match in either table.", query: "SELECT * FROM employees FULL OUTER JOIN departments ON employees.department_id = departments.department_id;" },
    { title: "CROSS JOIN", desc: "Retrieve Cartesian product.", query: "SELECT * FROM employees CROSS JOIN departments;" },
    { title: "CREATE INDEX", desc: "Create an index.", query: "CREATE INDEX idx_department ON employees (department);" },
    { title: "DROP INDEX", desc: "Remove an index.", query: "DROP INDEX IF EXISTS idx_department;" },
    { title: "BEGIN TRANSACTION", desc: "Start a transaction.", query: "BEGIN TRANSACTION;" },
    { title: "COMMIT", desc: "Save changes.", query: "COMMIT;" },
    { title: "ROLLBACK", desc: "Undo changes.", query: "ROLLBACK;" }
];

document.addEventListener("DOMContentLoaded", () => {
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
});



