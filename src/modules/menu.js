const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const serviceBtn = document.querySelector("main>a");

  let nowTop = 0;
  let targetTop = 0;
  let downDirection = true;
  let idAnimate;

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

  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);
  menuItems.forEach((item) =>
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const targetElement = document.querySelector(
        item.attributes.href.nodeValue
      );
      targetTop = targetElement.offsetTop;
      nowTop = document.documentElement.scrollTop;
      if (nowTop < targetTop) {
        downDirection = true;
      } else {
        downDirection = false;
      }
      idAnimate = requestAnimationFrame(scroll);
      handleMenu();
    })
  );
  serviceBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const targetElement = document.querySelector(
      serviceBtn.attributes.href.nodeValue
    );
    targetTop = targetElement.offsetTop;
    nowTop = document.documentElement.scrollTop;
    if (nowTop < targetTop) {
      downDirection = true;
    } else {
      downDirection = false;
    }
    idAnimate = requestAnimationFrame(scroll);
  });
};

export default menu;
