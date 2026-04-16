document.addEventListener("DOMContentLoaded", async () => {
    setLoading(true);
    try {
        await fetchMeteoriteData();
        renderMarkers(getFilteredData());
        renderTable(getFilteredData());
        showFeedback("Data loaded successfully. ", "info");
    } catch (error) {
        showFeedback(error.message, "error");
    }
    setLoading(false);
});

//filter by year
document.getElementById("filterYearBtn").addEventListener("click", () => {
    const minYear = parseInt(document.getElementById("minYear").value, 10);
    const maxYear = parseInt(document.getElementById("maxYear").value, 10);

    filterByYear(minYear, maxYear);
    renderMarkers(getFilteredData());
    renderTable(getFilteredData());
});

//reset filter
document.getElementById("resetFilterBtn").addEventListener("click", () => {

    resetFilters();
    renderMarkers(getFilteredData());
    renderTable(getFilteredData());
});

//search by name
document.getElementById("searchNameBtn").addEventListener("click", () => {
    const searchTerm = document.getElementById("searchName").value;

    searchByName(searchTerm);
    renderMarkers(getFilteredData());
    renderTable(getFilteredData());
});