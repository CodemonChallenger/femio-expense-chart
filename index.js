// Get current day of the week
const today = new Date();
const dow = today.getDay();

// Selectors
const mon = document.querySelector('#mon');
const tue = document.querySelector('#tue');
const wed = document.querySelector('#wed');
const thu = document.querySelector('#thu');
const fri = document.querySelector('#fri');
const sat = document.querySelector('#sat');
const sun = document.querySelector('#sun');

const monText = document.querySelector('#monText');
const tueText = document.querySelector('#tueText');
const wedText = document.querySelector('#wedText');
const thuText = document.querySelector('#thuText');
const friText = document.querySelector('#friText');
const satText = document.querySelector('#satText');
const sunText = document.querySelector('#sunText');

// Fetch data from JSON file
const getData = async () =>
  await fetch('./data.json').then((data) => data.json());

// Dynamically construct chart bar heighths and text for pop-up divs
const createChart = async () => {
  let values = await getData();
  monText.innerHTML = values[0].amount.toFixed(2).toString();
  tueText.innerHTML = values[1].amount.toFixed(2).toString();
  wedText.innerHTML = values[2].amount.toFixed(2).toString();
  thuText.innerHTML = values[3].amount.toFixed(2).toString();
  friText.innerHTML = values[4].amount.toFixed(2).toString();
  satText.innerHTML = values[5].amount.toFixed(2).toString();
  sunText.innerHTML = values[6].amount.toFixed(2).toString();
  let largest = 0;
  values.forEach((element) => {
    if (element.amount > largest) {
      largest = element.amount;
    }
  });
  mon.style.height = `${(values[0].amount / largest) * 100}%`;
  tue.style.height = `${(values[1].amount / largest) * 100}%`;
  wed.style.height = `${(values[2].amount / largest) * 100}%`;
  thu.style.height = `${(values[3].amount / largest) * 100}%`;
  fri.style.height = `${(values[4].amount / largest) * 100}%`;
  sat.style.height = `${(values[5].amount / largest) * 100}%`;
  sun.style.height = `${(values[6].amount / largest) * 100}%`;
};

createChart();

// Dynamically color current day of week bar a different color
const selectDay = (day) => {
  switch (day) {
    case 0:
      sun.style.background = 'var(--primary-cyan)';
      break;
    case 1:
      mon.style.background = 'var(--primary-cyan)';
      break;
    case 2:
      tue.style.background = 'var(--primary-cyan)';
      break;
    case 3:
      wed.style.background = 'var(--primary-cyan)';
      break;
    case 4:
      thu.style.background = 'var(--primary-cyan)';
      break;
    case 5:
      fri.style.background = 'var(--primary-cyan)';
      break;
    case 6:
      sat.style.background = 'var(--primary-cyan)';
      break;
    default:
      mon.style.background = 'var(--primary-cyan)';
  }
};

selectDay(dow);

// Hover event listener functions to show/hide the value div
const onMouseEnter = (el) => {
  el.style.display = 'block';
};

const onMouseOut = (el) => {
  el.style.display = 'none';
};

// Event Listeners
mon.addEventListener('mouseenter', () => onMouseEnter(monText));
tue.addEventListener('mouseenter', () => onMouseEnter(tueText));
wed.addEventListener('mouseenter', () => onMouseEnter(wedText));
thu.addEventListener('mouseenter', () => onMouseEnter(thuText));
fri.addEventListener('mouseenter', () => onMouseEnter(friText));
sat.addEventListener('mouseenter', () => onMouseEnter(satText));
sun.addEventListener('mouseenter', () => onMouseEnter(sunText));

mon.addEventListener('mouseout', () => onMouseOut(monText));
tue.addEventListener('mouseout', () => onMouseOut(tueText));
wed.addEventListener('mouseout', () => onMouseOut(wedText));
thu.addEventListener('mouseout', () => onMouseOut(thuText));
fri.addEventListener('mouseout', () => onMouseOut(friText));
sat.addEventListener('mouseout', () => onMouseOut(satText));
sun.addEventListener('mouseout', () => onMouseOut(sunText));
