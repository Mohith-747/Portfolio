document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons()

  const projects = [
    {
      title: "Quantum based Paddy disease classification",
      description:
        "The project uses Quantum Machine Learning (QML) to detect sheath blight and blast diseases in paddy crops with 99.4% accuracy by analyzing images of healthy and infected leaves.",
      logo: "leaf",
      techStack: ["atom", "microscope", "cpu"],
      video: "assets/paddy.mp4",
    },
    {
      title: "Space Invasion & Obstacle Collider",
      description:
        "Developed a 3D space invasion game in Unity3D utilizing Unity packages and assets. The game challenges players to navigate through multiple levels, avoid collisions with obstacles and enemy spacecraft, and achieve the highest possible score.",
      logo: "rocket",
      techStack: ["gamepad-2", "boxes", "target"],
      video: "assets/Space.mp4",
    },
    {
      title: "Dairy Base Management System",
      description:
        "Developed a website as part of our database management system project to store various dairy products information such as product id, name, quantity .PHP was used for the backend along with bootstrap, Html, CSS, Js.",
      logo: "database",
      techStack: ["code", "database", "server"],
      video: "assets/dbms.mp4",
    },
  ]

  let currentIndex = 0

  const updateProject = (index) => {
    const project = projects[index]
    document.querySelector(".logo-icon").dataset.lucide = project.logo
    document.querySelector(".project-title").textContent = project.title
    document.querySelector(".project-description").textContent = project.description

    const techStack = document.querySelector(".tech-stack")
    techStack.innerHTML = ""
    project.techStack.forEach((tech) => {
      const icon = document.createElement("i")
      icon.dataset.lucide = tech
      techStack.appendChild(icon)
    })

    const videoElement = document.querySelector(".project-video")
    const sourceElement = videoElement.querySelector("source")
    sourceElement.src = project.video
    videoElement.load()

    lucide.createIcons()
  }

  document.querySelector(".nav-btn.prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length
    updateProject(currentIndex)
  })

  document.querySelector(".nav-btn.next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projects.length
    updateProject(currentIndex)
  })

  // Initialize with the first project
  updateProject(currentIndex)

  // Handle "Projects" heading transition
  const projectsSection = document.getElementById("projects")
  const projectsTitle = document.querySelector(".section-title")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectsTitle.classList.add("visible")
        } else {
          projectsTitle.classList.remove("visible")
        }
      })
    },
    { threshold: 0.1 },
  )

  observer.observe(projectsSection)
})

