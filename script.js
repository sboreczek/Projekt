const cisnienie = document.querySelector('.cisnienie')
const wilgotnosc = document.querySelector('.wilgotnosc')
const temperatura = document.querySelector('.temperatura')
const pogoda = document.querySelector('.pogoda')
const ikona = document.querySelector('img')
const error = document.querySelector('.error')
const input = document.querySelector('input')
const button = document.querySelector('button')
const nazwaMiasta = document.querySelector('.miasto')

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=b1d8af06d5f2502eaf72da113ebe1e1e'
const API_UNITS = '&units=metric'

const sprawdzPogode = () => {
    const city = input.value || 'Warsaw'
    const URL = API_URL + city + API_KEY + API_UNITS
    axios.get(URL).then(response =>{ 
        console.log(response.data)
        const temp = response.data.main.temp
        const hum = response.data.main.humidity
        const press = response.data.main.pressure
        const status = response.data.weather[0]

        nazwaMiasta.textContent = `${response.data.name}, ${response.data.sys.country}`

        temperatura.textContent = `${Math.round(temp)}°C`
        wilgotnosc.textContent = `${hum}%`
        cisnienie.textContent = `${press}hPa`
        pogoda.textContent = status.main
        ikona.setAttribute('src', `./img/${status.icon}.png`)
    })
}

sprawdzPogode()
button.addEventListener('click', sprawdzPogode)
