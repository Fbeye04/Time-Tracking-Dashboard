// retrieves all necessary global variables
const activitiesContainer = document.getElementById(
  "card-activities-container"
);
const timeframeButtons = document.querySelectorAll(".timeframes button");

// takes the current timeframe
let currentTimeframe = "daily";
// array to store activity data
let activitiesData = [];

const fetchData = async () => {
  try {
    const response = await fetch("../data.json");
    activitiesData = await response.json();
    displayActivities();
  } catch (error) {
    activitiesContainer.innerHTML = "<p>Gagal memuat data</p>";
  }
};

const displayActivities = () => {
  // empty content
  activitiesContainer.innerHTML = "";

  // create cards for each activity using the iteration method
  activitiesData.forEach((activity) => {
    const { title, timeframes } = activity;
    const timeframe = timeframes[currentTimeframe];

    const iconName = title.toLowerCase().replace(/\s+/g, "-");

    const activityCard = document.createElement("section");
    activityCard.classList.add("activity-card");
    activityCard.setAttribute("id", iconName);

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
  // retrieves the timeframe value of the clicked button
  currentTimeframe = event.target.getAttribute("data-timeframe");

  // changes all button values to false
  timeframeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", "false");
  });
  // changes the value of the clicked button to true
  event.target.setAttribute("aria-pressed", "true");

  displayActivities();
};

timeframeButtons.forEach((button) => {
  button.addEventListener("click", updateTimeframe);
});

fetchData();
