const users = [
  {
    name: "Versha Yadav",
    profession: "Fullstack Developer",
    image: "https://images.unsplash.com/photo-1579535984712-92fffbbaa266"
  },
  {
    name: "Nina Williams",
    profession: "UX Designer",
image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8" },
  {
    name: "Rohan Sharma",
    profession: "Frontend Developer",
    image: "https://media.istockphoto.com/id/1503329763/photo/handsome-successful-indian-man-focused-on-remote-work-as-an-internet-entrepreneur-using.webp?a=1&b=1&s=612x612&w=0&k=20&c=c-APrtG60wIbT9lUiABpkBclVxAZvJqR60i8A_3_ECY="
  },
  {
    name: "Lucas Hernandez",
    profession: "Product Manager",
    image: "https://images.unsplash.com/photo-1652695903999-9c814b8a8ead?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8"
  },
  {
    name: "kimberly johnson",
    profession: "Software Engineer",
    image: "https://plus.unsplash.com/premium_photo-1690359582591-3b3ab6399885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVuc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Daniel Kim",
    profession: "Data Analyst",
image: "https://images.unsplash.com/photo-1601253767643-81b4e536600d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8"  }
];

let sum = "";

users.forEach(user => {
  sum += `
    <div class="card">
      <img src="${user.image}" alt="${user.name}">
      <h3>${user.name}</h3>
      <h4>${user.profession}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  `;
});

document.querySelector("#main").innerHTML = sum;
