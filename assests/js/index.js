var home = document.getElementById("home");
console.log(home);
document.addEventListener("DOMContentLoaded", (event) => {
  particlesJS("home", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#2c98f0",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#2c98f0",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});
// Select the element you want to observe
const targetElement = document.querySelectorAll(".div");
const ul = document.getElementsByClassName("item");
// Create a new IntersectionObserver instance
const observer = new IntersectionObserver(
  (entries, observer) => {
    // Callback function for when the intersection changes
    for (let index = 0; index < ul.length; index++) {
      ul[index].classList.remove("active");
    }
    entries.forEach((entry) => {
      // Process the intersection information
      if (entry.isIntersecting) {
        document
          .getElementsByClassName(entry.target.id)[0]
          .classList.add("active");
        //entry.target.classList.add('active');
        // console.log(entry.target);
        // Element is now intersecting
        //   console.log('Element is visible');
      }
    });
  },
  {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // Add a margin around the viewport
    threshold: 1.0, // Fully visible threshold
  }
);

// Start observing the target element
for (let index = 0; index < targetElement.length; index++) {
  observer.observe(targetElement[index]);
  // console.log(targetElement[index]);
}

function show(params) {
  const el = document.getElementById("nav");

  if (el.classList == "nav hiden") {
    el.classList.remove("hiden");
    el.classList.add("show");
  } else if (el.classList == "nav show") {
    el.classList.add("hiden");
    el.classList.remove("show");
  } else {
    el.classList.add("show");
  }

  console.log(el);
}
