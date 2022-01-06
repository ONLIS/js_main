const validate = () => {
  //const textElementsArray = [];
  //const emailElementsArray = [];
  //const telElementsArray = [];

  //const form1 = document.getElementById("form1");
  //const form1Elements = form1.querySelectorAll("input");
  //const form2 = document.getElementById("form2");
  //const form2Elements = form2.querySelectorAll("input");
  //const form3 = document.getElementById("form3");
  //const form3Elements = form3.querySelectorAll("input");
  const calcInputs = document.querySelectorAll(
    ".calc-square, .calc-count, .calc-day"
  );

  //const sortFunc = (elm) => {
  //  if (elm.type === "text") {
  //    textElementsArray.push(elm);
  //  } else if (elm.type === "email") {
  //    emailElementsArray.push(elm);
  //  } else if (elm.type === "tel") {
  //    telElementsArray.push(elm);
  //  }
  //};

  //form1Elements.forEach((elm) => {
  //  sortFunc(elm);
  //});
  //form2Elements.forEach((elm) => {
  //  sortFunc(elm);
  //});
  //form3Elements.forEach((elm) => {
  //  sortFunc(elm);
  //});

  //textElementsArray.forEach((item) => {
  //  item.addEventListener("input", (event) => {
  //    event.target.value = event.target.value.replace(/[^а-яА-Я\s\-]/, "");
  //  });
  //});
  //emailElementsArray.forEach((item) => {
  //  item.addEventListener("input", (event) => {
  //    event.target.value = event.target.value.replace(
  //      /[^a-zA-Z\@\-\_\.\!\~\*\']/,
  //      ""
  //    );
  //  });
  //});
  //telElementsArray.forEach((item) => {
  //  item.addEventListener("input", (event) => {
  //    event.target.value = event.target.value.replace(/\D\(\)\-/, "");
  //  });
  //});
  calcInputs.forEach((item) => {
    item.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/\D+/, "");
    });
  });
};

export default validate;
