const scheduleData = [
  { date: "ആഗസ്റ്റ് 31 | തിങ്കൾ", events: ["🕔 5:00 pm – കൊടിയേറ്റ്, മദ്ധ്യസ്ഥ പ്രാർത്ഥന", "🕠 5:30 pm – വി. കുർബാന – മരിയൻ പ്രഘോഷണം", "🕡 6:30 pm – ജപമാല പ്രദക്ഷിണം (പള്ളിക്ക് ചുറ്റും), നേർച്ച"] },
  { date: "സെപ്റ്റംബർ 1 | ചൊവ്വ", events: ["🕔 5:00 pm – ദിവ്യകാരുണ്യ ആരാധന", "🕠 5:15 pm – മദ്ധ്യസ്ഥ പ്രാർത്ഥന", "🕠 5:30 pm – വി. കുർബാന – മരിയൻ പ്രഘോഷണം", "🕡 6:30 pm – ജപമാല പ്രദക്ഷിണം, നേർച്ച"] },
  { date: "സെപ്റ്റംബർ 2 | ബുധൻ", events: ["🕔 5:00 pm – ദിവ്യകാരുണ്യ ആരാധന", "🕠 5:15 pm – മദ്ധ്യസ്ഥ പ്രാർത്ഥന", "🕠 5:30 pm – വി. കുർബാന – മരിയൻ പ്രഘോഷണം", "🕡 6:30 pm – ജപമാല പ്രദക്ഷിണം, നേർച്ച"] },
  { date: "സെപ്റ്റംബർ 3 | വ്യാഴം", events: ["🕔 5:00 pm – ദിവ്യകാരുണ്യ ആരാധന", "🕠 5:15 pm – മദ്ധ്യസ്ഥ പ്രാർത്ഥന", "🕠 5:30 pm – വി. കുർബാന – മരിയൻ പ്രഘോഷണം", "🕡 6:30 pm – ജപമാല പ്രദക്ഷിണം, നേർച്ച"] },
  { date: "സെപ്റ്റംബർ 4 | വെള്ളി", events: ["🕔 5:00 pm – ദിവ്യകാരുണ്യ ആരാധന", "🕠 5:15 pm – മദ്ധ്യസ്ഥ പ്രാർത്ഥന", "🕠 5:30 pm – വി. കുർബാന – മരിയൻ പ്രഘോഷണം", "🕡 6:30 pm – ജപമാല പ്രദക്ഷിണം, നേർച്ച"] },
  { date: "സെപ്റ്റംബർ 5 | ശനി", events: ["🕔 5:00 pm – ദിവ്യകാരുണ്യ ആരാധന", "🕠 5:15 pm – മദ്ധ്യസ്ഥ പ്രാർത്ഥന", "🕠 5:30 pm – വി. കുർബാന – മരിയൻ പ്രഘോഷണം", "🕡 6:30 pm – ജപമാല പ്രദക്ഷിണം, നേർച്ച"] },
  { date: "സെപ്റ്റംബർ 6 | ഞായർ", events: ["🕢 7:15 am – വി. കുർബാന, സൺഡേ സ്കൂൾ", "🕔 5:00 pm – ദിവ്യകാരുണ്യ ആരാധന", "🕠 5:30 pm – മദ്ധ്യസ്ഥ പ്രാർത്ഥന, ജപമാല പ്രദക്ഷിണം, നേർച്ച"] },
  { date: "സെപ്റ്റംബർ 7 | തിങ്കൾ", events: ["🕔 5:00 pm – ജപമാല പ്രദക്ഷിണം", "🕠 5:30 pm – മദ്ധ്യസ്ഥ പ്രാർത്ഥന, വി. കുർബാന", "<span style='color:#c0392b; font-weight:bold;'>മുഖ്യകാർമ്മികൻ: കർദ്ദിനാൾ മാർ ജോർജ്ജ് ആലഞ്ചേരി</span>", "ദിവ്യകാരുണ്യ ആരാധന, നേർച്ച"] },
  { date: "സെപ്റ്റംബർ 8 | ചൊവ്വ (തിരുനാൾ ദിനം)", events: ["🕔 5:00 pm – ദിവ്യകാരുണ്യ ആരാധന", "🕠 5:15 pm – മദ്ധ്യസ്ഥ പ്രാർത്ഥന", "🕠 5:30 pm – വി. കുർബാന", "ജപമാല പ്രദക്ഷിണം, നേർച്ച – കൊടിയിറക്ക്"] }
];

// Working HD Image URLs
const imageUrls = [
  "https://images.unsplash.com/photo-1583047648359-0091cb7a5d3e?w=500&q=80", // Day 1: Mary Statue
  "https://images.unsplash.com/photo-1502446755427-4a0b22f28b4c?w=500&q=80", // Day 2: Rosary
  "https://images.unsplash.com/photo-1603529329712-4d22be457a1d?w=500&q=80", // Day 3: Candles
  "https://images.unsplash.com/photo-1574218683076-2e90c883a45c?w=500&q=80", // Day 4: Mary Close-up
  "https://images.unsplash.com/photo-1548625361-ec85718cb621?w=500&q=80", // Day 5: Church Cross
  "https://images.unsplash.com/photo-1614234551101-9989ceb8b6a3?w=500&q=80", // Day 6: Virgin Mary
  "https://images.unsplash.com/photo-1519782522771-419b48c26f04?w=500&q=80", // Day 7: Church Interior
  "https://images.unsplash.com/photo-1605336152002-39c8789ccb0c?w=500&q=80", // Day 8: Stained Glass
  "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=500&q=80"  // Day 9: Holy Bible
];

document.addEventListener("DOMContentLoaded", () => {
  const overallView = document.getElementById('overallView');
  const dailyView = document.getElementById('dailyView');
  const dailyImage = document.getElementById('dailyImage');
  const focusDate = document.getElementById('focusDate');
  const focusEventsList = document.querySelector('#focusEvents ul');
  const dateSelector = document.getElementById('dateSelector');
  const showOverallBtn = document.getElementById('showOverall');
  const showDailyBtn = document.getElementById('showDaily');

  function populateOverallSchedule() {
      overallView.innerHTML = '';
      scheduleData.forEach((day, index) => {
          const card = document.createElement('div');
          card.className = 'schedule-card';
          card.innerHTML = `
              <div class="card-header-date">${day.date}</div>
              <div class="card-events">
                  <ul>${day.events.map(event => `<li>${event}</li>`).join('')}</ul>
              </div>
          `;
          // When a card is clicked, show the image and daily details
          card.addEventListener('click', () => {
              updateDailyFocus(index);
              switchToDailyView();
              dateSelector.value = index; 
          });
          overallView.appendChild(card);
      });
  }

  function populateDateSelector() {
      scheduleData.forEach((day, index) => {
          const option = document.createElement('option');
          option.value = index;
          option.textContent = day.date;
          dateSelector.appendChild(option);
      });
  }

  function updateDailyFocus(index) {
      dailyImage.style.opacity = 0; 
      setTimeout(() => {
          dailyImage.src = imageUrls[index];
          // Fallback image just in case
          dailyImage.onerror = function() {
              this.src = 'https://images.unsplash.com/photo-1583047648359-0091cb7a5d3e?w=500&q=80';
          };
          dailyImage.style.opacity = 1; 
      }, 300);

      focusDate.textContent = scheduleData[index].date;
      focusEventsList.innerHTML = scheduleData[index].events.map(event => `<li>${event}</li>`).join('');
  }

  function switchToOverallView() {
      overallView.style.display = 'flex';
      dailyView.style.display = 'none';
      showOverallBtn.classList.add('active');
      showDailyBtn.classList.remove('active');
  }

  function switchToDailyView() {
      overallView.style.display = 'none';
      dailyView.style.display = 'flex';
      showOverallBtn.classList.remove('active');
      showDailyBtn.classList.add('active');
  }

  // Initial Setup
  populateOverallSchedule();
  populateDateSelector();
  updateDailyFocus(0); 
  switchToOverallView(); // Starts with overall view (No images visible here)

  // Event Listeners
  showOverallBtn.addEventListener('click', switchToOverallView);
  showDailyBtn.addEventListener('click', switchToDailyView);
  dateSelector.addEventListener('change', (e) => {
      updateDailyFocus(e.target.value);
      switchToDailyView();
  });
});