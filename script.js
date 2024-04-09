import brandLogo from "./src/media/brnadLogo.js";
import { eye, eyeHide } from "./src/media/icons.js";
import vector from "./src/media/vector.js";

const container = document.getElementById("container");

const SignUp = () => {
  const formEl = document.createElement("form");
  const signUpEl = document.createElement("div");
  const tagAEl = document.createElement("a");
  const svgEl = document.createElement("span");
  const h1El = document.createElement("h1");
  const loginEl = document.createElement("div");
  const tagPEl = document.createElement("p");
  const tagALoginEl = document.createElement("a");
  const buttonEl = document.createElement("button");
  const termOfService = document.createElement("p");

  const link = (text) => {
    const element = document.createElement("a");
    element.classList.add("link");
    element.setAttribute("href", "#");
    element.innerHTML = text;
    return element;
  };

  signUpEl.className = "sign-up";
  signUpEl.id = "sign-up";
  tagAEl.href = "#";
  svgEl.className = "brand-logo-design";

  svgEl.innerHTML = brandLogo;

  h1El.className = "title";
  h1El.textContent = "Create An Account";
  loginEl.className = "login";
  tagPEl.textContent = "Already have an account?";
  formEl.className = "form";
  buttonEl.className = "button";
  buttonEl.textContent = "Create";
  termOfService.className = "term-of-service";
  termOfService.textContent = "By signing up, you agree with our ";

  termOfService.appendChild(link("Terms of Service"));
  termOfService.innerHTML += " and ";
  termOfService.appendChild(link("Privacy Policy"));

  signUpEl.appendChild(tagAEl);
  tagAEl.appendChild(svgEl);
  signUpEl.appendChild(h1El);
  signUpEl.appendChild(loginEl);
  loginEl.appendChild(tagPEl);
  tagALoginEl.appendChild(link("Login"));

  loginEl.appendChild(tagALoginEl);
  signUpEl.appendChild(formEl);
  container.appendChild(signUpEl);

  // function gruop
  const Group = (labelText, id, name, type, error, eyeIcon) => {
    const groupEl = document.createElement("div");
    const controlEl = document.createElement("div");
    const inputEl = document.createElement("input");
    const labelEl = document.createElement("label");
    const errorEl = document.createElement("span");

    // password Icon function
    const Icon = () => {
      const iconEl = document.createElement("span");
      iconEl.classList.add("svg-icon");

      const tooltipEl = document.createElement("div");

      tooltipEl.textContent = "hidden";
      tooltipEl.className = "tooltipEl";
      iconEl.innerHTML = eyeIcon;

      iconEl.addEventListener("click", () => {
        const eyeSvg = iconEl.querySelector("svg");
        if (inputEl.type === "password") {
          tooltipEl.textContent = "show";
          inputEl.type = "text";

          eyeSvg.innerHTML = eye;
        } else {
          inputEl.type = "password";

          eyeSvg.innerHTML = eyeHide;

          tooltipEl.textContent = "hidden";
        }
      });

      iconEl.addEventListener("mouseover", () => {
        iconEl.appendChild(tooltipEl);
      });

      iconEl.addEventListener("mouseout", () => {
        iconEl.removeChild(tooltipEl);
      });

      return iconEl;
    };

    groupEl.className = "group";
    controlEl.className = "control";
    inputEl.className = "input-text";
    inputEl.pattern = "^[a-zA-Z0-9]{8,}$";
    inputEl.autocomplete = "off";
    labelEl.className = "label";
    errorEl.className = "error-message";
    errorEl.textContent = "Error Message";
    inputEl.type = type;
    inputEl.name = name;
    inputEl.id = id;
    labelEl.textContent = labelText;

    inputEl.setAttribute("value", "");

    groupEl.appendChild(controlEl);
    controlEl.appendChild(inputEl);
    controlEl.appendChild(labelEl);

    inputEl.addEventListener("change", (e) => {
      inputEl.setAttribute("value", e.target.value);
    });

    if (eyeIcon) {
      controlEl.appendChild(Icon());
    }

    if (error) {
      groupEl.appendChild(errorEl);
      inputEl.classList.add("error");
    }
    return groupEl;
  };

  formEl.appendChild(Group("Username", "username", "username", "text", false));

  formEl.appendChild(Group("Email", "email", "email", "email", false));

  formEl.appendChild(
    Group("Password", "password", "password", "password", false, eyeHide)
  );

  formEl.appendChild(
    Group(
      "Password Confirmation",
      "passwordConfirmation",
      "passwordConfirmation",
      "password",
      true,
      eyeHide
    )
  );

  formEl.appendChild(buttonEl);
  signUpEl.appendChild(termOfService);

  const signUpImageEl = document.createElement("div");
  const svgVector = document.createElement("span");

  svgVector.innerHTML = vector;

  signUpImageEl.className = "sign-up-image";
  container.appendChild(signUpImageEl);
  signUpImageEl.appendChild(svgVector);

  return signUpEl;
};

SignUp();
