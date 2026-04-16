//render meteorite table
function renderTable(meteorites) {
    const tbody =document.querySelector("#meteoriteTable tbody");
    tbody.innerHTML = "";

    if (!meteorites.length) {
        tbody.innerHTML = `<tr><td colspan="5">No results found.</td></tr>`;
        return;
    }

    meteorites.forEach(m => {
        const year = m.year ? String(m.year).slice(0,4) : "N/A";
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${m.id || "N/A"}</td>
        <td>${m.name || "N/A"}</td>
        <td>${year}</td>
        <td>${m.recclass || "N/A"}</td>
        <td>${m.mass || "N/A"}</td>
        `;
        tbody.appendChild(row);
    });
}

// Show feedback messages to the user
function showFeedback(message, type = "info") {
    const feedback = document.getElementById("feedback");
    feedback.textContent = message;
    feedback.className = type;
}

//show or hide loading spinner
function setLoading(isLoading) {
    document.getElementById("loading").style.display = isLoading ? "block" : "none";
}
window.renderTable = renderTable;
window.showFeedback = showFeedback;
window.setLoading = setLoading;