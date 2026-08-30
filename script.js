const scheduleData = [
    {
        date: "ആഗസ്റ്റ് 31 | തിങ്കൾ",
        events: [
            "🕔 5:00 pm – കൊടിയേറ്റ്, മദ്ധ്യസ്ഥ പ്രാർത്ഥന",
            "🕠 5:30 pm – വി. കുർബാന – മരിയൻ പ്രഘോഷണം",
            "🕡 6:30 pm – ജപമാല പ്രദക്ഷിണം (പള്ളിക്ക് ചുറ്റും), നേർച്ച"
        ]
    },
    {
        date: "സെപ്റ്റംബർ 1 | ചൊവ്വ",
        events: [
            "🕔 5:00 pm – ദിവ്യകാരുണ്യ ആരാധന",
            "🕠 5:15 pm – മദ്ധ്യസ്ഥ പ്രാർത്ഥന",
            "🕠 5:30 pm – വി. കുർബാന – മരിയൻ പ്രഘോഷണം",
            "🕡 6:30 pm – ജപമാല പ്രദക്ഷിണം, നേർച്ച"
        ]
    },
    {
        date: "സെപ്റ്റംബർ 2 മുതൽ 5 വരെ (ബുധൻ - ശനി)",
        events: [
            "🕔 5:00 pm – ദിവ്യകാരുണ്യ ആരാധന",
            "🕠 5:15 pm – മദ്ധ്യസ്ഥ പ്രാർത്ഥന",
            "🕠 5:30 pm – വി. കുർബാന – മരിയൻ പ്രഘോഷണം",
            "🕡 6:30 pm – ജപമാല പ്രദക്ഷിണം, നേർച്ച",
            "<span class='special-note'>(സെപ്റ്റംബർ 1-ലെ ഇതേ ക്രമത്തിൽ തിരുക്കർമ്മങ്ങൾ നടത്തപ്പെടുന്നതാണ്)</span>"
        ]
    },
    {
        date: "സെപ്റ്റംബർ 6 | ഞായർ",
        events: [
            "🕢 7:15 am – വി. കുർബാന, സൺഡേ സ്കൂൾ",
            "🕔 5:00 pm – ദിവ്യകാരുണ്യ ആരാധന",
            "🕠 5:30 pm – മദ്ധ്യസ്ഥ പ്രാർത്ഥന, ജപമാല പ്രദക്ഷിണം, നേർച്ച"
        ]
    },
    {
        date: "സെപ്റ്റംബർ 7 | തിങ്കൾ",
        events: [
            "🕔 5:00 pm – ജപമാല പ്രദക്ഷിണം",
            "🕠 5:30 pm – മദ്ധ്യസ്ഥ പ്രാർത്ഥന, വി. കുർബാന",
            "<span class='special-note'>(മുഖ്യകാർമ്മികൻ: കർദ്ദിനാൾ മാർ ജോർജ്ജ് ആലഞ്ചേരി)</span>",
            "ദിവ്യകാരുണ്യ ആരാധന, നേർച്ച"
        ]
    },
    {
        date: "സെപ്റ്റംബർ 8 | ചൊവ്വ (തിരുനാൾ ദിനം)",
        events: [
            "🕔 5:00 pm – ദിവ്യകാരുണ്യ ആരാധന",
            "🕠 5:15 pm – മദ്ധ്യസ്ഥ പ്രാർത്ഥന",
            "🕠 5:30 pm – വി. കുർബാന",
            "തുടർന്ന് ജപമാല പ്രദക്ഷിണം",
            "<span class='special-note'>(പള്ളിയിൽ നിന്ന് St. Mary School-ലേക്ക്, തുടർന്ന് തിരികെ പള്ളിയിലേക്ക്)</span>",
            "നേർച്ച – കൊടിയിറക്ക്"
        ]
    }
];

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const contentContainer = document.getElementById('poster-dynamic-content');
    const mainContainer = document.getElementById('poster-container');
    const daySelector = document.getElementById('daySelector');

    function triggerAnimation() {
        mainContainer.classList.remove('fade-in');
        void mainContainer.offsetWidth; // Trigger reflow
        mainContainer.classList.add('fade-in');
    }

    function initDropdown() {
        scheduleData.forEach((day, index) => {
            let option = document.createElement('option');
            option.value = index;
            option.text = day.date.replace(" (തിരുനാൾ ദിനം)", ""); 
            daySelector.appendChild(option);
        });
    }

    function createDayHTML(day) {
        let eventsHTML = day.events.map(event => `<li>${event}</li>`).join('');
        return `
            <div class="day-card">
                <div class="day-title">${day.date}</div>
                <ul class="event-list">
                    ${eventsHTML}
                </ul>
            </div>
        `;
    }

    window.showOverallPoster = function() {
        daySelector.style.display = 'none';
        let htmlContent = '<div class="poster-content">';
        scheduleData.forEach(day => {
            htmlContent += createDayHTML(day);
        });
        htmlContent += '</div>';
        
        contentContainer.innerHTML = htmlContent;
        triggerAnimation();
    }

    window.showSingleDaySelector = function() {
        daySelector.style.display = 'inline-block';
        window.renderSingleDay();
    }

    window.renderSingleDay = function() {
        const selectedIndex = daySelector.value;
        const day = scheduleData[selectedIndex];
        
        let htmlContent = '<div class="poster-content single-day-poster">';
        htmlContent += createDayHTML(day);
        htmlContent += '</div>';
        
        contentContainer.innerHTML = htmlContent;
        triggerAnimation();
    }

    window.downloadPoster = function() {
        const posterElement = document.getElementById('poster-container');
        const originalTransform = posterElement.style.transform;
        
        posterElement.style.transform = 'none';
        
        html2canvas(posterElement, {
            scale: 2,
            useCORS: true,
            backgroundColor: null
        }).then(canvas => {
            posterElement.style.transform = originalTransform;
            
            const image = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            
            let fileName = 'Ettu_Nombu_Overall_Schedule.png';
            if (daySelector.style.display !== 'none') {
                const dayName = scheduleData[daySelector.value].date.split('|')[0].trim();
                fileName = `Ettu_Nombu_${dayName}.png`;
            }
            
            link.download = fileName;
            link.href = image;
            link.click();
        });
    }

    // Initialize
    initDropdown();
    window.showOverallPoster();
});