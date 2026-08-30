/* =========================================================
   ETTU NOMBU THIRUNAL 2026
   CHURCH POSTER SYSTEM
   ========================================================= */


/* =========================================================
   SCHEDULE DATA
   ========================================================= */

const scheduleData = [

    {
        date: "ആഗസ്റ്റ് 31",
        day: "തിങ്കൾ",
        image: "images.jpg",

        events: [
            {
                time: "5:00 pm",
                text: "കൊടിയേറ്റ്, മദ്ധ്യസ്ഥ പ്രാർത്ഥന"
            },
            {
                time: "5:30 pm",
                text: "വി. കുർബാന – മരിയൻ പ്രഘോഷണം"
            },
            {
                time: "6:30 pm",
                text: "ജപമാല പ്രദക്ഷിണം (പള്ളിക്ക് ചുറ്റും), നേർച്ച",
                procession: true
            }
        ]
    },


    {
        date: "സെപ്റ്റംബർ 1",
        day: "ചൊവ്വ",
        image: "images (1).jpg",

        events: [
            {
                time: "5:00 pm",
                text: "ദിവ്യകാരുണ്യ ആരാധന"
            },
            {
                time: "5:15 pm",
                text: "മദ്ധ്യസ്ഥ പ്രാർത്ഥന"
            },
            {
                time: "5:30 pm",
                text: "വി. കുർബാന – മരിയൻ പ്രഘോഷണം"
            },
            {
                time: "6:30 pm",
                text: "ജപമാല പ്രദക്ഷിണം, നേർച്ച",
                procession: true
            }
        ]
    },


    {
        date: "സെപ്റ്റംബർ 2",
        day: "ബുധൻ",
        image: "images (2).jpg",

        events: [
            {
                time: "5:00 pm",
                text: "ദിവ്യകാരുണ്യ ആരാധന"
            },
            {
                time: "5:15 pm",
                text: "മദ്ധ്യസ്ഥ പ്രാർത്ഥന"
            },
            {
                time: "5:30 pm",
                text: "വി. കുർബാന – മരിയൻ പ്രഘോഷണം"
            },
            {
                time: "6:30 pm",
                text: "ജപമാല പ്രദക്ഷിണം, നേർച്ച",
                procession: true
            }
        ]
    },


    {
        date: "സെപ്റ്റംബർ 3",
        day: "വ്യാഴം",
        image: "images (3).jpg",

        events: [
            {
                time: "5:00 pm",
                text: "ദിവ്യകാരുണ്യ ആരാധന"
            },
            {
                time: "5:15 pm",
                text: "മദ്ധ്യസ്ഥ പ്രാർത്ഥന"
            },
            {
                time: "5:30 pm",
                text: "വി. കുർബാന – മരിയൻ പ്രഘോഷണം"
            },
            {
                time: "6:30 pm",
                text: "ജപമാല പ്രദക്ഷിണം, നേർച്ച",
                procession: true
            }
        ]
    },


    {
        date: "സെപ്റ്റംബർ 4",
        day: "വെള്ളി",
        image: "images (4).jpg",

        events: [
            {
                time: "5:00 pm",
                text: "ദിവ്യകാരുണ്യ ആരാധന"
            },
            {
                time: "5:15 pm",
                text: "മദ്ധ്യസ്ഥ പ്രാർത്ഥന"
            },
            {
                time: "5:30 pm",
                text: "വി. കുർബാന – മരിയൻ പ്രഘോഷണം"
            },
            {
                time: "6:30 pm",
                text: "ജപമാല പ്രദക്ഷിണം, നേർച്ച",
                procession: true
            }
        ]
    },


    {
        date: "സെപ്റ്റംബർ 5",
        day: "ശനി",
        image: "images (5).jpg",

        events: [
            {
                time: "5:00 pm",
                text: "ദിവ്യകാരുണ്യ ആരാധന"
            },
            {
                time: "5:15 pm",
                text: "മദ്ധ്യസ്ഥ പ്രാർത്ഥന"
            },
            {
                time: "5:30 pm",
                text: "വി. കുർബാന – മരിയൻ പ്രഘോഷണം"
            },
            {
                time: "6:30 pm",
                text: "ജപമാല പ്രദക്ഷിണം, നേർച്ച",
                procession: true
            }
        ]
    },


    {
        date: "സെപ്റ്റംബർ 6",
        day: "ഞായർ",
        image: "images (6).jpg",

        events: [
            {
                time: "7:15 am",
                text: "വി. കുർബാന, സൺഡേ സ്കൂൾ"
            },
            {
                time: "5:00 pm",
                text: "ദിവ്യകാരുണ്യ ആരാധന"
            },
            {
                time: "5:30 pm",
                text: "മദ്ധ്യസ്ഥ പ്രാർത്ഥന, ജപമാല പ്രദക്ഷിണം, നേർച്ച",
                procession: true
            }
        ]
    },


    {
        date: "സെപ്റ്റംബർ 7",
        day: "തിങ്കൾ",
        image: "images (7).jpg",

        special: true,

        events: [
            {
                time: "5:00 pm",
                text: "ജപമാല പ്രദക്ഷിണം",
                procession: true
            },
            {
                time: "5:30 pm",
                text: "മദ്ധ്യസ്ഥ പ്രാർത്ഥന, വി. കുർബാന"
            }
        ],

        specialText:
            "മുഖ്യകാർമ്മികൻ: കർദ്ദിനാൾ മാർ ജോർജ്ജ് ആലഞ്ചേരി",

        additionalEvents: [
            "ദിവ്യകാരുണ്യ ആരാധന",
            "നേർച്ച"
        ]
    },


    {
        date: "സെപ്റ്റംബർ 8",
        day: "ചൊവ്വ",
        image: "images (8).jpg",

        feast: true,

        events: [
            {
                time: "5:00 pm",
                text: "ദിവ്യകാരുണ്യ ആരാധന"
            },
            {
                time: "5:15 pm",
                text: "മദ്ധ്യസ്ഥ പ്രാർത്ഥന"
            },
            {
                time: "5:30 pm",
                text: "വി. കുർബാന"
            }
        ],

        processionText:
            "തുടർന്ന് ജപമാല പ്രദക്ഷിണം – പള്ളിയിൽ നിന്ന് St. Mary School-ലേക്ക്, തുടർന്ന് തിരികെ പള്ളിയിലേക്ക്",

        additionalEvents: [
            "നേർച്ച",
            "കൊടിയിറക്ക്"
        ]
    }

];


/* =========================================================
   ELEMENTS
   ========================================================= */

const overallView =
    document.getElementById("overallView");

const dailyView =
    document.getElementById("dailyView");

const dailyImage =
    document.getElementById("dailyImage");

const focusDate =
    document.getElementById("focusDate");

const focusEvents =
    document.getElementById("focusEvents");

const dateSelector =
    document.getElementById("dateSelector");

const showOverall =
    document.getElementById("showOverall");

const showDaily =
    document.getElementById("showDaily");

const downloadBtn =
    document.getElementById("downloadBtn");

const toast =
    document.getElementById("toast");


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


/* =========================================================
   FORMAT DATE
   ========================================================= */

function formatDate(day) {

    return `
        ${day.date}
        <span style="color:#8d7b66;font-size:14px;">
            | ${day.day}
        </span>
    `;
}


/* =========================================================
   CREATE EVENT HTML
   ========================================================= */

function createEventHTML(event) {

    let extraClass = "";

    if (event.procession) {
        extraClass = "event-procession";
    }

    return `
        <div class="event-item ${extraClass}">

            <div class="event-time">
                ${event.time}
            </div>

            <div class="event-text">
                ${event.text}
            </div>

        </div>
    `;
}


/* =========================================================
   OVERALL VIEW
   ========================================================= */

function populateOverall() {

    overallView.innerHTML = "";

    scheduleData.forEach((day, index) => {

        const card =
            document.createElement("article");

        let classes =
            "schedule-card";

        if (day.special) {
            classes += " special-day";
        }

        if (day.feast) {
            classes += " feast-day";
        }

        card.className = classes;

        card.style.animationDelay =
            `${index * 0.05}s`;


        let html = `

            <div class="card-top"></div>

            <div class="card-number">
                ${index + 1}
            </div>

            <div class="card-header">

        `;


        if (day.feast) {

            html += `
                <div class="feast-label">
                    തിരുനാൾ ദിനം
                </div>
            `;
        }


        html += `

                <div class="card-date">
                    ${formatDate(day)}
                </div>

            </div>

            <div class="card-events">

        `;


        day.events.forEach(event => {

            html += createEventHTML(event);

        });


        if (day.specialText) {

            html += `
                <div class="event-special">
                    ${day.specialText}
                </div>
            `;

        }


        if (day.additionalEvents) {

            day.additionalEvents.forEach(event => {

                html += `
                    <div class="event-item">
                        <div class="event-time">
                            •
                        </div>

                        <div class="event-text">
                            ${event}
                        </div>
                    </div>
                `;

            });

        }


        if (day.processionText) {

            html += `
                <div class="event-special">
                    ${day.processionText}
                </div>
            `;

        }


        html += `
            </div>
        `;


        card.innerHTML = html;


        card.addEventListener("click", () => {

            dateSelector.value = index;

            updateDaily(index);

            switchToDaily();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });


        overallView.appendChild(card);

    });

}


/* =========================================================
   DATE SELECTOR
   ========================================================= */

function populateDateSelector() {

    scheduleData.forEach((day, index) => {

        const option =
            document.createElement("option");

        option.value = index;

        option.textContent =
            `${day.date} | ${day.day}`;

        dateSelector.appendChild(option);

    });

}


/* =========================================================
   DAILY VIEW
   ========================================================= */

function updateDaily(index) {

    const day =
        scheduleData[index];

    if (!day) return;


    dailyImage.style.opacity = "0";


    setTimeout(() => {

        dailyImage.src =
            day.image;

        dailyImage.onload = () => {

            dailyImage.style.opacity = "1";

        };

        dailyImage.onerror = () => {

            dailyImage.src =
                "images.jpg";

            dailyImage.style.opacity =
                "1";

        };

    }, 150);


    focusDate.innerHTML =
        formatDate(day);


    let html = `
        <div class="daily-events">
    `;


    day.events.forEach(event => {

        html += `
            <div class="daily-event">

                <div class="daily-event-time">
                    ${event.time}
                </div>

                <div class="daily-event-text">
                    ${event.text}
                </div>

            </div>
        `;

    });


    if (day.specialText) {

        html += `
            <div class="daily-special">
                ${day.specialText}
            </div>
        `;

    }


    if (day.processionText) {

        html += `
            <div class="daily-special">
                ${day.processionText}
            </div>
        `;

    }


    if (day.additionalEvents) {

        day.additionalEvents.forEach(event => {

            html += `
                <div class="daily-event">

                    <div class="daily-event-time">
                        •
                    </div>

                    <div class="daily-event-text">
                        ${event}
                    </div>

                </div>
            `;

        });

    }


    html += `
        </div>
    `;


    focusEvents.innerHTML =
        html;

}


/* =========================================================
   SWITCH TO OVERALL
   ========================================================= */

function switchToOverall() {

    overallView.hidden = false;

    dailyView.hidden = true;

    showOverall.classList.add("active");

    showDaily.classList.remove("active");

}


/* =========================================================
   SWITCH TO DAILY
   ========================================================= */

function switchToDaily() {

    overallView.hidden = true;

    dailyView.hidden = false;

    showOverall.classList.remove("active");

    showDaily.classList.add("active");

}


/* =========================================================
   DOWNLOAD POSTER
   ========================================================= */

async function downloadPoster() {

    const target =
        document.getElementById("poster-content");


    showToast(
        "പോസ്റ്റർ തയ്യാറാക്കുന്നു..."
    );


    try {

        const canvas =
            await html2canvas(target, {

                scale: 2,

                useCORS: true,

                backgroundColor:
                    "#faf7f0",

                logging: false

            });


        const link =
            document.createElement("a");


        let filename =
            "Ettu-Nombu-Thirunal-2026.png";


        if (!dailyView.hidden) {

            const index =
                Number(dateSelector.value || 0);

            filename =
                `Ettu-Nombu-${index + 1}-2026.png`;

        }


        link.download =
            filename;

        link.href =
            canvas.toDataURL("image/png");

        link.click();


        showToast(
            "പോസ്റ്റർ ഡൗൺലോഡ് ചെയ്തു"
        );


    } catch (error) {

        console.error(error);

        showToast(
            "പോസ്റ്റർ തയ്യാറാക്കുന്നതിൽ പിശക് സംഭവിച്ചു"
        );

    }

}


/* =========================================================
   EVENTS
   ========================================================= */

showOverall.addEventListener(
    "click",
    switchToOverall
);


showDaily.addEventListener(
    "click",
    () => {

        if (
            dateSelector.value === ""
        ) {

            dateSelector.value = "0";

        }

        updateDaily(
            Number(dateSelector.value)
        );

        switchToDaily();

    }
);


dateSelector.addEventListener(
    "change",
    event => {

        const index =
            Number(event.target.value);

        updateDaily(index);

        switchToDaily();

    }
);


downloadBtn.addEventListener(
    "click",
    downloadPoster
);


/* =========================================================
   INITIALIZE
   ========================================================= */

populateOverall();

populateDateSelector();

updateDaily(0);

switchToOverall();