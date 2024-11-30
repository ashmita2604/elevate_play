document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      section.addEventListener("mouseover", () => {
        section.style.backgroundColor = "#fef08a";
      });
  
      section.addEventListener("mouseout", () => {
        section.style.backgroundColor = "#fff";
      });
    });
  });
  