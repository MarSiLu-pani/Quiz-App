import "./header.css";
import logoSrc from "../assets/marsilu.png";
import { createElement } from "../utils/elements";

function Header() {
  const logo = createElement("img", {
    src: logoSrc,
    alt: "Logo",
  });

  const title = createElement("span", {
    className: "header__title",
    innerText: "MarSiLu-Pani",
  });

  const header = createElement("header", {
    className: "header",
    children: [logo, title],
  });

  return header;
}

export default Header;
