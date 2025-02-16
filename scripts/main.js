const activitiesContainer = document.getElementById(
  "card-activities-container"
);
const timeframeButtons = document.querySelectorAll(".timeframes button");

let currentTimeframe = "daily";
let activitiesData = [];

const fetchData = async () => {
  try {
    const response = await fetch("../data.json");
    activitiesData = await response.json();
    displayActivities();
  } catch (error) {
    console.log("Error fetching data:", error);
    activitiesContainer.innerHTML = "<p>Gagal memuat data</p>";
  }
};

const displayActivities = () => {
  activitiesContainer.innerHTML = "";

  activitiesData.forEach((activity) => {
    const { title, timeframes } = activity;
    const timeframe = timeframes[currentTimeframe];

    const iconName = title.toLowerCase().replace(/\s+/g, "-");

    const activityCard = document.createElement("section");
    activityCard.classList.add("activity-card");

    activityCard.innerHTML = `
        <div class="activity-icon">
            <img src="../images/icon-${iconName}.svg" alt="icon ${title}">
        </div>
        <div class="activity-details">
            <div class="activity-header">
                <h2>${title}</h2>
                <img src="../images/icon-ellipsis.svg" alt="options">
            </div>
            <div class="activity-info">
                <p class="current">${timeframe.current}hrs</p>
                <p class="previous">Last ${capitalizeTimeframe(
                  currentTimeframe
                )} - ${timeframe.previous}hrs</p>
            </div>
        </div>
        `;

    activitiesContainer.appendChild(activityCard);
  });
};

const capitalizeTimeframe = (str) => {
  if (str === "daily") return "Day";
  if (str === "weekly") return "Week";
  if (str === "monthly") return "Month";
};

const updateTimeframe = (event) => {
  currentTimeframe = event.target.getAttribute("data-timeframe");

  timeframeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", "false");
  });
  event.target.setAttribute("aria-pressed", "true");

  displayActivities();
};

timeframeButtons.forEach((button) => {
  button.addEventListener("click", updateTimeframe);
});

fetchData();
