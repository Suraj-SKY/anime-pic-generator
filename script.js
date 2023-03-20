// notes: for API -> search for cat boys api on google
const btnElement = document.getElementById('btn');
const animeContainerElement = document.querySelector('.anime-container');
const animeImgElement = document.querySelector('.anime-img');
const animeNameElement = document.querySelector('.anime-name');

// when user click on Get anime button fetch new img
btnElement.addEventListener('click', async () => {
    try {
        // until data come button is disabled and change text and show loading effect
        btnElement.disabled = true;
        btnElement.innerText = 'Loading...';
        animeNameElement.innerText = 'Updating...';
        animeImgElement.src = "loader.svg";

        // waiting for img from api
        const response = await fetch('https://api.catboys.com/img');
        const data = await response.json();
        console.log(data);

        // when data comes enable button again
        btnElement.disabled = false;
        btnElement.innerText = 'Get anime';

        // display anime container
        animeContainerElement.style.display = 'block';

        // adding img to element
        animeImgElement.src = data.url;
        // adding name to element
        animeNameElement.innerText = data.artist;

    } catch (error) {
        btnElement.disabled = false;
        btnElement.innerText = 'Get anime';
        animeNameElement.innerHTML = `An Error Happened.<br>Try Again Later`;
    }
});