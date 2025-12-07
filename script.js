var teams = [
  {
    team: "CSK",
    primary: "#f9d616",
    secondary: "#1a237e",
    fullName: "Chennai Super Kings",
    trophies: 5,
    captain: "MS Dhoni"
  },
    {
    team: "PBKS",
    primary: "#f91630ff",
    secondary: "#1a237e",
    fullName: "Punjab Kings",
    trophies: 0,
    captain: "Shreyas Iyer"
  },
  {
    team: "RCB",
    primary: "#d53200e8",
    secondary: "#000000",
    fullName: "Royal Challengers Bangalore",
    trophies: 1,
    captain: "Faf du Plessis"
  },
  {
    team: "MI",
    primary: "#1f00eaff",
    secondary: "#ffd600",
    fullName: "Mumbai Indians",
    trophies: 5,
    captain: "Hardik Pandya"
  },
  {
    team: "KKR",
    primary: "#4a148c",
    secondary: "#ffca28",
    fullName: "Kolkata Knight Riders",
    trophies: 3,
    captain: "Shreyas Iyer"
  }
];

// Element Selection
var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var main = document.querySelector("main");

// Button Click
btn.addEventListener("click", function () {
  var num = Math.floor(Math.random() * teams.length);
  var winner = teams[num];

  // Update Heading Text
  h1.innerHTML = `IPL 2026 Winner🎉: ${winner.team}`;

  // Apply Styles Smoothly
  h1.style.background = `linear-gradient(135deg, ${winner.secondary}, ${winner.primary})`;
  h1.style.boxShadow = `0 5px 20px ${winner.primary}`;

  main.style.backgroundColor = winner.primary;
  main.style.transition = "0.5s ease";

  // Extra info add
  document.querySelector("#info").innerHTML = `
       <p><strong>Full Name:</strong> ${winner.fullName}</p>
       <p><strong>Captain:</strong> ${winner.captain}</p>
       <p><strong>Trophies:</strong> ${winner.trophies}</p>
  `;
});
