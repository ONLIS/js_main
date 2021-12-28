const menu = () => {
  const menu = document.querySelector("menu");

  let nowTop = 0;
  let targetTop = 0;
  let downDirection = true;
  let idAnimate;
  //============================================================
  const scroll = () => {
    if (!downDirection) {
      nowTop -= 50;
    } else {
      nowTop += 50;
    }
    if (!downDirection && nowTop <= targetTop) {
      document.documentElement.scrollTop = targetTop;
      cancelAnimationFrame(idAnimate);
    } else if (downDirection && nowTop >= targetTop) {
      document.documentElement.scrollTop = targetTop;
      cancelAnimationFrame(idAnimate);
    } else {
      document.documentElement.scrollTop = nowTop;
      requestAnimationFrame(scroll);
    }
  };

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };
  const goToTarget = (target) => {
    targetTop = target.offsetTop;
    nowTop = document.documentElement.scrollTop;
    if (nowTop < targetTop) {
      downDirection = true;
    } else {
      downDirection = false;
    }
    idAnimate = requestAnimationFrame(scroll);
  };
  const toggleMenu = () => {
    document.addEventListener("click", (e) => {
      if (
        e.target.closest(".menu") ||
        e.target.classList.contains("close-btn")
      ) {
        handleMenu();
      } else if (e.target.closest("menu>ul>li>a")) {
        e.preventDefault();
        const targetElement = document.querySelector(
          e.target.attributes.href.nodeValue
        );
        goToTarget(targetElement);
        handleMenu();
      } else if (e.target.closest("main>a")) {
        e.preventDefault();
        const targetElement = document.querySelector("#service-block");
        goToTarget(targetElement);
      } else if (
        menu.classList.contains("active-menu") &&
        !e.target.closest("menu")
      ) {
        handleMenu();
      }
    });
  };
  //============================================================
  toggleMenu();
};

export default menu;
