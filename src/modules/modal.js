const modal = () => {
  let screenWidth = document.documentElement.clientWidth;
  const modal = document.querySelector(".popup");
  const modalContent = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
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

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("resize", () => {
    screenWidth = document.documentElement.clientWidth;
  });
};

export default modal;
