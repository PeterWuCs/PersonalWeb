let currentProjIndex = 1; // Start with the second project

const projectsList = document.querySelectorAll(".project_block");

function updateProjects() {
  projectsList.forEach((project_block, index) => {
    if (index === currentProjIndex % projectsList.length) {
      project_block.classList.add("main-project");
      project_block.style.opacity = "1";
      project_block.style.display = "block"; // Ensure the main project is visible
    } else if (
      currentProjIndex % projectsList.length === 0 &&
      index === projectsList.length - 1
    ) {
      project_block.classList.add("left-project");
      project_block.style.opacity = "0.8";
      project_block.style.display = "block";
    } else if (index === (currentProjIndex % projectsList.length) + 1) {
      project_block.classList.remove("main-project");
      project_block.classList.add("right-project");
      project_block.style.opacity = "0.8";
      project_block.style.display = "block"; // Ensure adjacent projects are visible
    } else if (index === (currentProjIndex % projectsList.length) - 1) {
      project_block.classList.remove("main-project");
      project_block.classList.add("left-project");
      project_block.style.opacity = "0.8";
      project_block.style.display = "block"; // Ensure adjacent projects are visible
    } else {
      project_block.classList.remove("left-project");
      project_block.classList.remove("right-project");
      project_block.style.display = "none"; // Hide non-adjacent projects
    }
  });
}

function moveLeft() {
  if (currentProjIndex === 1) {
    currentProjIndex = currentProjIndex + projectsList.length - 1;
  } else {
    currentProjIndex = currentProjIndex - 1;
  }

  updateProjects();
}

function moveRight() {
  currentProjIndex = currentProjIndex + 1;
  updateProjects();
}

// Initialize the view
updateProjects();

// setInterval(moveLeft, 5000);

function toggleSublist(sublistId, element) {
  const sublist = document.getElementById(sublistId);
  const expandBtn = element.querySelector(".expand-btn");
  if (sublist.style.display === "none") {
    sublist.style.display = "block";
    expandBtn.textContent = "-";
  } else {
    sublist.style.display = "none";
    expandBtn.textContent = "+";
  }
}

// Select the target element and the image
const hoverTarget1 = document.getElementById("email");
const hoverTarget2 = document.getElementById("github");
const hoverTarget3 = document.getElementById("linkedin");

const image = document.getElementById("profile_pic");

function changeImage(imageSrc) {
  image.style.opacity = 0;
  setTimeout(() => {
    image.src = imageSrc;
    image.style.opacity = 1;
  }, 200);
}

// Add event listeners to change the image src on hover
hoverTarget1.addEventListener("mouseenter", () => {
  changeImage("Images/left.webp"); // Change to the new image
});

hoverTarget1.addEventListener("mouseleave", () => {
  changeImage("Images/profile.jpeg"); // Revert back to the original image
});

hoverTarget2.addEventListener("mouseenter", () => {
  changeImage("Images/right.jpg"); // Change to the new image
});

hoverTarget2.addEventListener("mouseleave", () => {
  changeImage("Images/profile.jpeg"); // Revert back to the original image
});

hoverTarget3.addEventListener("mouseenter", () => {
  changeImage("Images/down.jpg"); // Change to the new image
});

hoverTarget3.addEventListener("mouseleave", () => {
  changeImage("Images/profile.jpeg"); // Revert back to the original image
});

function handleSubClicked() {
  const h1 = this.querySelector("h1"); // Find the h1 inside the summary
  h1.classList.toggle("underlined"); // Toggle underline on the h1 element
}

document.querySelectorAll("summary").forEach((element) => {
  element.addEventListener("click", handleSubClicked); // Attach the click handler to each summary
});

const projectElements = document.querySelectorAll(".project-block");

function onScroll() {
  projectElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    // Check if the element is in the viewport (either entering or exiting)
    if (elementTop < windowHeight - 250) {
      element.classList.add("show");
      element.classList.remove("hidden");
    } else {
      element.classList.remove("show");
      element.classList.add("hidden");
    }
  });
}

window.addEventListener("scroll", onScroll);

// Initial check to show elements already in view
onScroll();
