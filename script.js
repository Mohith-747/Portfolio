document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons()

  const projects = [
    {
      title: "Quantum based Paddy disease classification",
      description:
        "The project uses Quantum Machine Learning (QML) to detect sheath blight and blast diseases in paddy crops with 99.4% accuracy by analyzing images of healthy and infected leaves.",
      techStack: ["code", "database", "server"],
      video: "assets/paddy.mp4",
    },
    {
      title: "Space Invasion & Obstacle Collider",
      description:
      "Developed a 3D space invasion game in Unity3D utilizing Unity packages and assets. The game challenges players to navigate through multiple levels, avoid collisions with obstacles and enemy spacecraft, and achieve the highest possible score.",
      logo: "home",
      techStack: ["wifi", "cpu", "cloud"],
      video: "assets/Space.mp4",
    },
    {
      title: "Dairy Product Management System ",
      description:
        " Developed a website as part of our database management system project to store various dairy products information such as product id, name, quantity .PHP was used for the backend along with bootstrap, Html, CSS, Js.",
      logo: "dumbbell",
      techStack: ["glasses", "heart-pulse", "brain"],
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
    videoElement.load() // Reload the video with the new source

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
})


