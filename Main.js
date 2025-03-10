const body = document.querySelector("body");
const sideBarBtn = document.querySelector(".side-bar-header-responsive");
const navIn = document.querySelector(".nav-in");
const ulNavIn = document.querySelector(".nav-in ul");
const logo = document.querySelector(".logo img");

function pushElement() {
  const sideBarDiv = document.createElement("div");
  body.appendChild(sideBarDiv);
  sideBarDiv.className = "side-bare-div";
  sideBarDiv.appendChild(navIn);
  navIn.style = "display: flex;";

  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"/></svg>`;
  closeBtn.className = "close-btn";
  sideBarDiv.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => {
    closeSideBar();
    sideBarBtn.style.display = "flex";
    closeBtn.remove();
  });
}

sideBarBtn.addEventListener("click", () => {
  pushElement();
  sideBarBtn.style.display = "none";
});

function closeSideBar() {
  const sideBarDiv = document.querySelector(".side-bare-div");
  if (sideBarDiv) {
    navIn.style.display = "none";
    sideBarDiv.style = "animation:end 0.5s ease-in-out forwards;";

    setTimeout(() => {
      sideBarDiv.remove();
    }, 500);
  }
}
