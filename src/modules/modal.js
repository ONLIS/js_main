const modal = () => {
  let screenWidth = document.documentElement.clientWidth;
  const modal = document.querySelector(".popup");
  const modalContent = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  let count = 0;
  let idAnimate;

  const show = () => {
    count++;
    modalContent.style.left = count + "%";
    if (count < 38) {
      requestAnimationFrame(show);
    } else {
      count = 0;
      cancelAnimationFrame(idAnimate);
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (screenWidth > 768) {
        idAnimate = requestAnimationFrame(show);
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
