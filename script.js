'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/myanmar`);
request.send();

// console.log(request.responseText);
request.addEventListener('load', function(){
	// console.log(this.responseText);
	const [data] = JSON.parse(this.responseText);
	console.log(data);
	const html = `
		<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.mya}</p>
            <p class="country__row"><span>💰</span>${data.currencies.MMK.name}</p>
          </div>
        </article>
	`;
	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
})


const request2 = new XMLHttpRequest();
request2.open('GET', `https://restcountries.com/v3.1/name/singapore`);
request2.send();

// console.log(request.responseText);
request2.addEventListener('load', function(){
	// console.log(this.responseText);
	const [data] = JSON.parse(this.responseText);
	console.log(data);
	const html = `
		<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
            <p class="country__row"><span>💰</span>${data.currencies.SGD.name}</p>
          </div>
        </article>
	`;
	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
})


const request3 = new XMLHttpRequest();
request3.open('GET', `https://restcountries.com/v3.1/name/usa`);
request3.send();

// console.log(request.responseText);
request3.addEventListener('load', function(){
	// console.log(this.responseText);
	const [data] = JSON.parse(this.responseText);
	console.log(data);
	const html = `
		<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
            <p class="country__row"><span>💰</span>${data.currencies.USD.name}</p>
          </div>
        </article>
	`;
	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
})

const request4 = new XMLHttpRequest();
request4.open('GET', `https://restcountries.com/v3.1/name/thailand`);
request4.send();

// console.log(request.responseText);
request4.addEventListener('load', function(){
	// console.log(this.responseText);
	const [data] = JSON.parse(this.responseText);
	console.log(data);
	const html = `
		<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.tha}</p>
            <p class="country__row"><span>💰</span>${data.currencies.THB.name}</p>
          </div>
        </article>
	`;
	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
})

const request5 = new XMLHttpRequest();
request5.open('GET', `https://restcountries.com/v3.1/name/japan`);
request5.send();

// console.log(request.responseText);
request5.addEventListener('load', function(){
	// console.log(this.responseText);
	const [data] = JSON.parse(this.responseText);
	console.log(data);
	const html = `
		<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.jpn}</p>
            <p class="country__row"><span>💰</span>${data.currencies.JPY.name}</p>
          </div>
        </article>
	`;
	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
})
