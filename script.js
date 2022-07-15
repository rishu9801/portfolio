let menuOpen = false;
const toggler = document.querySelector("#mobile-menu");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menuLink");
const cardContainer = document.querySelector(".card-container");
const projects = [
  {
    title: "Instagram Clone",
    desc: "I have built an Instagram clone Webapp , where users can signup and upload their pictures and like and comment on other posts.",
    tech: ["React", "firebase", "Bulma","Material UI"],
    link: "https://instagram-9801.web.app/",
  },
  {
    title: "Netflix Clone",
    desc: "netflix clone is a fully functional webapp where users can signUp or login and create their own playlist. users can add movies or tv shows either from popular ones or by searching for them",
    tech: ["angular", "firebase", "omdb API"],
    link: "https://authangular-ac8da.web.app",
  },{
    title: "Crypto Tracker",
    desc: "A React app to keep a track of Cryptocurrencies.",
    tech: ['React','SCSS','CoinGecko API'],
    link: "https://netlify-crypto-tracker.netlify.app/",
  },
  {
    title: "weather app",
    desc: "a weather forecast webapp to checkout weather in different cities of the world",
    tech: ["Angular", "Openweather API"],
    link: "http://rishu9801.github.io/weatherapp",
  },
  {
    title: "Restaurant Menu",
    desc: "a menu page with sorting of different menus",
    tech: ["Angular"],
    link: "https://restaurant-9801.web.app",
  },
  {
    title: "youtube clone",
    desc: "Fully responsive youtube UI.",
    tech: ["HTML", "CSS", "Javascript"],
    link: "http://rishu9801.github.io/youtube",
  },
  {
    title: "Amazon clone",
    desc: "a simple amazon homepage clone.",
    tech: ["HTML", "CSS", "javascript"],
    link: "http://rishu9801.github.io/amazon",
  },
  {
    title: "music studio",
    desc: "it is a simple fully responsive landing page fot a music studio",
    tech: ["HTML", "CSS", "Javascript"],
    link: "http://rishu9801.github.io/studio",
  },
  {
    title: "dino game",
    desc: "a simple version of the legendary dino game.",
    tech: ["HTML", "CSS", "Javascript"],
    link: "http://rishu9801.github.io/dino",
  }
  
 
];
// mobile Menu toggler
toggler.addEventListener("click", toggle);

function toggle() {
  console.log("clicked");
  console.log(menu);
  menuOpen = !menuOpen;
  if (menuOpen) {
    console.log("menuOpened");
    menu.style.top = "10%";
  } else {
    console.log("menuclosed");
    menu.style.top = "-50%";
  }
}
for (const link of menuLinks) {
  link.addEventListener("click", toggle);
}

function renderProjects(projects) {
  projects.forEach((project) => {
    const html = ` <div class="card">
    <span class="card-top">
      <img src="images/folder.png">
      <a href='${
        project.link
      }' target='blank'><img src="images/open.png" class="open"></a>
    </span>
    <span class="card-body">
      <h4 class='project-title'>${project.title}</h4>
      <p>${project.desc}</p>
    </span>
    <span class="card-bottom">
      ${project.tech.join("&nbsp &nbsp  &nbsp")}
    </span>
  </div>`;
    cardContainer.insertAdjacentHTML("beforeend", html);
  });
}
renderProjects(projects);
