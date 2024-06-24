document.addEventListener('DOMContentLoaded', () => {
    const api1Url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=275b61e647724a0d924125455242406';
    const api2Url = 'https://v2.jokeapi.dev/joke/Any';
    const api3Url = 'https://dog.ceo/api/breeds/image/random';

    function fetchData(url, elementId) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayData(data, elementId);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                document.getElementById(elementId).innerText = 'Error fetching data';
            });
    }

    function displayData(data, elementId) {
        const container = document.getElementById(elementId);
        container.innerHTML = JSON.stringify(data, null, 2);
    }

    fetchData(api1Url, 'api1-data');
    fetchData(api2Url, 'api2-data');
    fetchData(api3Url, 'api3-data');
});
