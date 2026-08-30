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

// നിങ്ങൾ നൽകിയ ലോക്കൽ ചിത്രങ്ങളുടെ ലിസ്റ്റ്
const imageUrls = [
  "photos/images.jpg",       // Day 1: ആഗസ്റ്റ് 31
  "photos/images (1).jpg",   // Day 2: സെപ്റ്റംബർ 1
  "photos/images (2).jpg",   // Day 3: സെപ്റ്റംബർ 2
  "photos/images (3).jpg",   // Day 4: സെപ്റ്റംബർ 3
  "photos/images (4).jpg",   // Day 5: സെപ്റ്റംബർ 4
  "photos/images (5).jpg",   // Day 6: സെപ്റ്റംബർ 5
  "photos/images (6).jpg",   // Day 7: സെപ്റ്റംബർ 6
  "photos/images (7).jpg",   // Day 8: സെപ്റ്റംബർ 7
  "photos/images.jpg"        // Day 9: സെപ്റ്റംബർ 8 (9-ാമത്തെ ചിത്രം ഇല്ലാത്തതിനാൽ ആദ്യ ചിത്രം വീണ്ടും ഉപയോഗിച്ചു)
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
          // ചിത്രം ലോഡ് ആയില്ലെങ്കിൽ ഡിഫോൾട്ട് ആയി കാണിക്കാൻ
          dailyImage.onerror = function() {
              this.src = 'photos/images.jpg';
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
  switchToOverallView(); 

  // Event Listeners
  showOverallBtn.addEventListener('click', switchToOverallView);
  showDailyBtn.addEventListener('click', switchToDailyView);
  dateSelector.addEventListener('change', (e) => {
      updateDailyFocus(e.target.value);
      switchToDailyView();
  });
});