'use strict';

import { contacts, skills, languages, interests, institutions } from './data.js';
import { capitalize } from './helpers.js';

const contactsList = document.getElementById('contacts');
const skillsList = document.getElementById('skills');
const languagesList = document.getElementById('languages');
const interestsList = document.getElementById('interests');
const institutionsList = document.getElementById('institutions');

for (const key in contacts) {
  contactsList.innerHTML += `
    <li>
      <p class="contact_key">${capitalize(key)}:</p>
      <p class="contact_value">${contacts[key]}</p>
    </li>
  `;
}

for (const { image, alt, skill, className } of skills) {
  skillsList.innerHTML += `
    <li>
      <img src="assets/${image}" alt="${alt}" class="${className ? alt : ''}" />
      <p class="skill">${skill}</p>
    </li>
  `;
}

for (const { image, alt, language, className } of languages) {
  languagesList.innerHTML += `
    <li>
      <img src="assets/${image}" alt="${alt}" class="${className ? alt : ''}" />
      <p class="language">${language}</p>
    </li>
  `;
}

for (const { image, alt, interest } of interests) {
  interestsList.innerHTML += `
    <li>
      <img src="assets/${image}" alt="${alt}" />
      <p class="interest">${interest}</p>
    </li>
  `;
}

for (const { location, institution, additionalInformation, period } of institutions) {
  institutionsList.innerHTML += `
    <li>
      <p class="location">${location}</p>
      <p class="institution">${institution}</p>
      <p>${additionalInformation}</p>
      <p class="period">${period}</p>
    </li>
  `;
}
