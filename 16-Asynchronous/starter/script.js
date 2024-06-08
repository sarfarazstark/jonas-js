'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function (countryName) {
  const request = new XMLHttpRequest();
  const string = `https://restcountries.com/v2/name/${countryName}`;
  console.log(string);
  request.open('GET', string);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);
    const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
      </div>
    </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('Bhārat');
getCountryData('usa');
