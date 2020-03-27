// const cases = document.getElementById('total-cases')
// const recovered = document.getElementById('total-recovered')
// const deaths = document.getElementById('total-deaths')

// fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
// 		"x-rapidapi-key": "22b479c799msh58412a3b933717ep12a6b8jsnf0129e27ad1c"
// 	}
// })
// .then(res => res.json())
// .then(data => {
//     console.log(data)
//     let countries = data.countries_stat



//     countries.forEach(country => {
//         if(country.country_name == 'Sri Lanka') {
//             cases.innerHTML = country.cases
//             recovered.innerHTML = country.total_recovered
//             deaths.innerHTML = country.deaths
//         }
//     });
// })


const lastUpdate = document.getElementById('last-update')
const cases = document.getElementById('total-cases')
const recovered = document.getElementById('total-recovered')
const deaths = document.getElementById('total-deaths')
const newCases = document.getElementById('total-new-cases')
const newDeaths = document.getElementById('total-new-deaths')

fetch("https://hpb.health.gov.lk/api/get-current-statistical")
.then(res => res.json())
.then(data => {
    console.log(data)
    let stats = data.data

        lastUpdate.innerHTML = `Last Updated time: ${stats.update_date_time}`    
        cases.innerHTML = stats.local_total_cases
        recovered.innerHTML = stats.local_recovered
        deaths.innerHTML = stats.local_deaths
        newCases.innerHTML = stats.local_new_cases
        newDeaths.innerHTML = stats.local_new_deaths
        
    
})

