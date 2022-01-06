const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Loading...";
  const errorText = "Error";
  const successText = "Send";

  const validate = (list) => {
    let success = true;
    list.forEach((elm) => {
      if (elm.name === "user_name") {
        if (/[^а-яА-Я\s]/.test(elm.value)) {
          success = false;
          elm.style.border = "2px solid red";
        } else {
          elm.style.border = "";
        }
      }
      if (elm.name === "user_phone") {
        if (/[^\d\+\(\)\-]/.test(elm.value)) {
          success = false;
          elm.style.border = "2px solid red";
        } else {
          elm.style.border = "";
        }
      }
      if (elm.name === "user_message") {
        if (/[^а-яА-Я\s\d\.\,\"\'\!\?\:\;\(\)]/.test(elm.value)) {
          success = false;
          elm.style.border = "2px solid red";
        } else {
          elm.style.border = "";
        }
      }
    });
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.style.color = "white";
    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Введенные данные не валидны");
      statusBlock.textContent = errorText;
    }
  };

  try {
    if (!form) {
      throw new Error("Form not found.");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;
