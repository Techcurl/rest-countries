const countryData = require('./countriesV2.json');

const countries = countryData.sort((country1, country2) => {
    if(country1.name < country2.name) { return -1; }
    if(country1.name > country2.name) { return 1; }
    return 0;
});

const newC = countries.map(country => {
    return {
        code: country.alpha2Code,
        name: country.name,
        flag: country.flag
    }
});

const path = require('path');
const fs = require('fs');

fs.writeFileSync('country.json', JSON.stringify(newC), 'utf-8');
console.log(newC);
