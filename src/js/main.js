const navBar = document.querySelector("#navbar-default");
const navShow = () => {
  if (navBar.classList.contains("hidden")) {
    navBar.classList.remove("hidden");
    navBar.classList.add("visible");
  } else {
    navBar.classList.remove("visible");
    navBar.classList.add("hidden");
  }
};
