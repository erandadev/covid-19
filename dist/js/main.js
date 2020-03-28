const lastUpdate = document.getElementById('last-update')
const cases = document.getElementById('total-cases')
const recovered = document.getElementById('total-recovered')
const deaths = document.getElementById('total-deaths')
const newCases = document.getElementById('total-new-cases')
const newDeaths = document.getElementById('total-new-deaths')
const activeCases = document.getElementById('active-cases')
const newRecovered = document.getElementById('total-new-recovered')
const countries = document.querySelector('.countries')



fetch("https://hpb.health.gov.lk/api/get-current-statistical")
.then(res => res.json())
.then(data => {
    console.log(data)
    let stats = data.data

        lastUpdate.innerHTML = `Last Updated at: ${stats.update_date_time}`    
        cases.innerHTML = stats.local_total_cases
        recovered.innerHTML = stats.local_recovered
        deaths.innerHTML = stats.local_deaths
        newCases.innerHTML = stats.local_new_cases
        newDeaths.innerHTML = stats.local_new_deaths
        activeCases.innerHTML = stats.local_active_cases
        
    
})


fetch("https://coronavirus-19-api.herokuapp.com/countries")
.then(res => res.json())
.then(data => {
    countries.innerHTML = ''

    for(let i = 0; i <= 5; i++) {
        let country = data[i]

        countries.innerHTML += `
        <div class="country">
             <h1 class="country-name">${country.country}</h1>
             <ul class="country-list">
                <li><b>Total Cases:</b> <span>${country.cases}</span></li>
                <li><b>Deaths:</b> <span>${country.deaths}</span></li>
                <li><b>Recovered:</b> <span>${country.recovered}</span></li>
                <li><b>Active Cases:</b> <span>${country.active}</span></li>
                <li><b>Today Cases</b> <span>${country.todayCases}</span></li>
                <li><b>Today Deaths</b> <span>${country.todayDeaths}</span></li>
                
             </ul>
         </div>
        `

    }
        
    
})

