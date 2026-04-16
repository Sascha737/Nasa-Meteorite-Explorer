let meteoriteData = [];
let filteredData = [];

//fetch data from local JSON file
async function fetchMeteoriteData() {
    const localUrl = "Meteorite_Landings.json";
    try {
        const response = await fetch(localUrl);
        if (!response.ok) throw new Error ('Local fetch failed');
        meteoriteData = await response.json();
        filteredData = [...meteoriteData];
        return meteoriteData;
        }catch (error) {
            throw new Error('Failed to load meteroite data from local file.');
        }
        }

        
        function getMeteoriteData() {
            return meteoriteData;
        }

        function getFilteredData() {
            return filteredData;
        }

        function filterByYear(minYear, maxYear) {
            filteredData = meteoriteData.filter(m => {
                if(!m.year) return false;
                const year = parseInt(m.year.slice(0, 4), 10);
                if (isNaN(year)) return false;
                if (!isNaN(minYear) && year < minYear) return false;
                if (!isNaN(maxYear) && year > maxYear) return false;
                return true;
    });  
        }

        function resetFilters() {
            filteredData = [...meteoriteData];
        }

        function searchByName(searchTerm) {
            if (!searchTerm) {
                filteredData = [...meteoriteData];
                return;
            }
            const term = searchTerm.toLowerCase();
            filteredData = meteoriteData.filter(m => 
                m.name && m.name.toLowerCase().includes(term)
            );
        }
        window.fetchMeteoriteData = fetchMeteoriteData;
window.getFilteredData = getFilteredData;
window.filterByYear = filterByYear;
window.resetFilters = resetFilters;
window.searchByName = searchByName;

