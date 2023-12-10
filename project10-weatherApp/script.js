/*-------Openweather api-------*/

const apiKey = "c4ca5d7b36d94336ae1f0af3f137d165";

/*-------submit button will trigger a fetch request-------*/

const weatherSubmitbutton = document.querySelector(".submit");
weatherSubmitbutton.addEventListener("click", async () => {
  const locationInput = document.querySelector(".locationInput");
  const location = locationInput.value;
  if (!location) {
    alert("Please enter a location");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    /*-------if response not ok, then it display alert message-------*/

    if (response.ok) {
      displayWeather(data);
      locationInput.value = "";
    } else {
      alert("Location not found. Please enter a valid location.");
      locationInput.value = "";
    }
  } catch (error) {
    console.error("Error fetching weather data", error);
  }
});

/*-------UI is updated-------*/

function displayWeather(data) {
  const locationName = document.querySelector(".locationname");
  const temperature = document.querySelector(".temperature");
  const description = document.querySelector(".description");
  const weatherIcon = document.querySelector(".weatherIcon");
  locationName.textContent = data.name;
  temperature.textContent = data.main.temp;
  description.textContent = data.weather[0].description;

  let src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  weatherIcon.setAttribute("src", src);
}
