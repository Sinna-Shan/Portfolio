/* eslint-disable no-unused-vars */
import Nav from "../../components/Nav/Nav";
import Project from "../../components/Project";
import Footer from "../../components/footer/Footer";
const projects = [
  {
    id: 1,
    title: "Omini-food ",
    description:
      "This is Responsive webpage for a online meal providing business. I made this project utilizing my html, css and javascript skills. This site is fully responsive across most of the devices out these and also optimized for the best performance.",
    image: "ominifood.png",
    url: "https://github.com/Sinna-Shan/Omni-food-desktop.git",
    btnMsg: "have a taste",
  },
  {
    id: 2,
    title: "React-quiz",
    description:
      "This is a simple quiz of 15 questions about react. building this project gave me the hands on experience of using the useReducer hook in React. This project manage the more than six states in the reducer.",
    image: "reactquiz.png",
    url: "https://github.com/Sinna-Shan/react-quiz.git",
    btnMsg: "test your knowledge",
  },
  {
    id: 3,
    title: "usePopCorn",
    description:
      "This is a movie website. you can search for movies and give a rating even you can keep track of your favorite movies. this project uses main react hooks including useState, useReducer, useRef and also manages the local-storage keep track of your favorite movies. usePopCorn get the movie details form a real api so this project cleverly handles the api requests using fetch.",
    image: "usepopcorn.png",
    url: "https://github.com/Sinna-Shan/use-pop-corn.git",
    btnMsg: "let's watch",
  },
  {
    id: 4,
    title: "Natours",
    description:
      "This application is to travel agency that offers tours all aroud the world. you can book a tour, search for the best tours and more. this project is mainly focus on back-end design using express and mongodb and mongoose. by doing this project I was able to get a broad knowledge of handling requests and errors while working with a database.",
    image: "natours.png",
    url: "https://github.com/Sinna-Shan/natours.git",
    btnMsg: "book today",
  },
  {
    id: 5,
    title: "Mapty",
    description:
      "This is a workout location tracking project using JavaScript, HTML, CSS, and the OpenStreetMap API.By completing this project I gained experience in array manipulation, API handling, OOP, and DOM manipulation.",
    image: "mapty.png",
    url: "https://github.com/Sinna-Shan/mapty.git",
    btnMsg: "stay fit",
  },
  {
    id: 6,
    title: "Forkify",
    description:
      " This is a website to find cooking recipes.To create this website I used JavaScript, HTML, and CSS. The site allows users to search, view, and save recipes, dynamically adjust servings, and user can add their own recipes to the site. This project enhanced my web development skills, including MVC architecture, object-oriented programming, async/await, module usage, and array manipulation.",
    image: "forkify.png",
    url: "https://github.com/Sinna-Shan/forkify.git",
    btnMsg: "let's cook",
  },
  {
    id: 7,
    title: "Weather forecast",
    description:
      " Weather forecast is a web site created with HTML, CSS, and JavaScript. The site provides current weather at a location, integrates Google Maps, displays past weather data, and offers three-day of past weather and hourly forecasts.",
    image: "weather.png",
    url: "https://github.com/Sinna-Shan/Weather-forecasting-web-site.git",
    btnMsg: "let's check",
  },
  {
    id: 8,
    title: "World wise",
    description:
      "currently developing this single page application which is able to keep track of your travel history pin pointed on a map. this project uses react router and the react hooks.",
    image: "worldwise.png",
    url: "https://github.com/Sinna-Shan/worldwise.git",
    btnMsg: "pack your bags",
  },
];

function ProjectsPage() {
  return (
    <div>
      <Nav />
      <header className="flex w-full h-24 items-center justify-center">
        <h1 className="text-[orangered] text-2xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">Projects</h1>
      </header>
      <section className="grid grid-cols-1 gap-3 mx-3 my-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 lg:mx-[4rem]">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.url}
            btnMsg={project.btnMsg}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
