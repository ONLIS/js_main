import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validate from "./modules/validate";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

const forms = document.querySelectorAll("form");

timer("01 january 2022");
menu();
modal();
validate();
tabs();
slider();
calc(100);

forms.forEach((form) => {
  sendForm({ formId: form.id, someElem: [{ type: "block", id: "total" }] });
});
