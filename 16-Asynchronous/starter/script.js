'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imgContainer = document.querySelector('.images');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (data, className = '') {
  // console.log(data);
  const html = `
<article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(2)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
  </div>
</article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
// const getCountryData = function (countryName) {
//   const request = new XMLHttpRequest();
//   const string = `https://restcountries.com/v2/name/${countryName}`;
//   console.log(string);
//   request.open('GET', string);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
//       </div>
//     </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('ind');
// getCountryData('usa');

// const getCountryAndNeighbor = function (countryName) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${countryName}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // Render country 1
//     renderCountry(data);

//     // get neighbor country 1
//     const neighbor = data.borders?.[0];
//     // console.log(neighbor);
//     if (!neighbor) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbor');
//     });
//   });
// };

// getCountryAndNeighbor('usa');

// const request = new XMLHttpRequest();
// const string = `https://restcountries.com/v2/name/${countryName}`;
// console.log(string);
// request.open('GET', string);
// request.send();

// const request = fetch('https://restcountries.com/v2/name/usa');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     console.log(url);
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };
// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.eu/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2
//       return getJSON(
//         `https://restcountries.eu/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       response.json();
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0]?.borders[0];

//       if (!neighbor) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('tytyty');
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

const getJSON = async function (url, error = 'Something went wrong') {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${error}, ${response.status}`);
  return await response.json();
};
const getCountryData2 = function (country) {
  getJSON(
    `https://restcountries.com/v2/name/${country}`,
    'RESTCountryAPI not available'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// const whereAmI = function (lat, lon) {
//   getJSON(
//     `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=6697a77bd9d3f606025998nxq7a419d`,
//     'GEOCODE api not available'
//   ).then(data => {
//       console.log(data);
//       const { city, country} = data.address;
//       const isoCode = data.address["ISO3166-2-lvl4"];

//       getCountryData2(country);
//       console.log(`You are in ${city}, ${country}`);
//     })
//     .catch(err => console.log(err));
// };

// btn.addEventListener('click', function () {
//   whereAmI('19.037', '72.873');
// });

// console.log('Test Start');
// setTimeout(()=>console.log('0 sec timer'), 0)
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for(let i = 0; i < 1000000000; i++){}
//   console.log(res);
// })
// console.log('Test End');

//* Lecture 243
// const lottery = new Promise(function(resolve, reject){
//   console.log("Lottery draw is happening 🔮");
//   setTimeout(function(){
//     if(Math.random() >= 0.5){
//       resolve('You win the lottery💥')
//     } else {
//       reject(new Error('You lose 💩'))
//     }
//   }, 2000)
// })

// lottery.then(res => console.log(res))
// .catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = function(seconds){
//   return new Promise(function(resolve){
//     setTimeout(resolve, seconds * 1000);
//   })
// }

// wait(2).then(()=>{
//   console.log('I waited for 2 seconds');
//   return wait(1);
// }).then(()=> console.log('I waited for 3 seconds'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).then(x => console.log(x))

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       console.log(pos);
//       const { latitude: lat, longitude: lon } = pos.coords;

//       return fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=6697a77bd9d3f606025998nxq7a419d`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`${error}, ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       const { city, country } = data.address;
//       getCountryData2(country);
//       console.log(`You are in ${city}, ${country}`);
//     })
//     .catch(err => console.log(err));
// };

// btn.addEventListener('click', whereAmI);

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
// let imgEl;
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.onload = () => {
//       resolve(img);
//       imgContainer.append(img);
//     };
//     img.onerror = () => reject(new Error('Image load error'));
//   });
// };

// createImage('img/img-1.jpg')
//   .then(img => {
//     imgEl = img;
//     console.log('1st image loaded');
//     return wait(2);
//   })
//   .then(() => {
//     imgEl.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     imgEl = img;
//     console.log('2nd image loaded');
//     return wait(2);
//   })
//   .then(() => {
//     imgEl.style.display = 'none';
//   })
//   .catch(error => {
//     console.error(error);
//   });

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Getting user location from Geolocation API
    const pos = await getPosition();
    const { latitude: lat, longitude: lon } = pos.coords;

    // Using the location to get the country name
    const resGEO = await fetch(
      `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=6697a77bd9d3f606025998nxq7a419d`
    );
    if (!resGEO.ok) throw new Error('Problem getting location data');
    const dataGEO = await resGEO.json();
    const { city, country } = dataGEO.address;

    // Using the country name to get the country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${country}?fullText=true`
    );
    console.log(`You are in ${city}, ${country}`);
    const data = await res.json();

    // Rendering the country data
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    renderError(`Something went wrong 💥💥 ${err.message}. try again!`);
  }
};

whereAmI();

// try {
//   let x = 1;
//   const y = 3;
//   y = 2;
// } catch (error) {
//   console.log(error.message);
// }

console.log('First');
