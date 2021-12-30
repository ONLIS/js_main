import { animate } from "./helpers";

const modal = () => {
  let screenWidth = document.documentElement.clientWidth;
  const modal = document.querySelector(".popup");
  const modalContent = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (screenWidth > 768) {
        animate({
          duration: 300,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalContent.style.left = progress * 38 + "%";
            modalContent.style.opacity = progress;
          },
        });
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });

  window.addEventListener("resize", () => {
    screenWidth = document.documentElement.clientWidth;
  });
};

export default modal;
