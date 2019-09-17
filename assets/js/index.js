window.addEventListener("scroll", () => {
  const target = document.querySelectorAll(".prlx");

  // target.style.transform = "translate3d(0px," + rate + "px, 0px)";
  var targets = target.length;
  for (let index = 0; index < targets; index++) {
    var scrolled = window.pageYOffset * target[index].dataset.rate;

    target[index].style.transform = "translate3d(0px," + scrolled + "px, 0px)";
  }
});

document.getElementById("close-button").addEventListener("click", () => {
  document.getElementById("sidebar").style.width = "0";
  // document.getElementById('main').style.marginRight = '0';
});
document.getElementById("menu-button").addEventListener("click", () => {
  document.getElementById("sidebar").style.width = "20vw";
  // document.getElementById('main').style.marginRight = '20vw';
});

const openWork = work => {
  switch (work) {
    case "frontend":
      document.getElementById("frontend-work").style.width = "100%";
      break;
    case "design":
      document.getElementById("design-work").style.width = "100%";
      break;
    case "illustration":
      document.getElementById("illustration-work").style.width = "100%";
      break;

    default:
      break;
  }
};

const closeWork = work => {
  switch (work) {
    case "frontend":
      document.getElementById("frontend-work").style.width = "0";
      break;
    case "design":
      document.getElementById("design-work").style.width = "0";
      break;
    case "illustration":
      document.getElementById("illustration-work").style.width = "0";
      break;

    default:
      break;
  }
};

const openModal = work => {
  let modal = document.getElementById("modal");
  let modalContent = document.getElementById("modal-content");
  let image = document.getElementById(work);

  modalContent.src = image.src;
  modal.style.height = "100%";
};

const closeModal = () => {
  let modal = document.getElementById("modal");
  modal.style.height = "0";
};
