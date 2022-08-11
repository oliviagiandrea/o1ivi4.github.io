// helper functions for adding/removing classes
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  };
};

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    };
  };
  element.className = arr1.join(" ");
};

// navbar submenu togglers
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// disable transitions on resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// filter buttons for edu/exp section
function filterEdu(c) {
  var edus, i;
  edus = document.getElementsByClassName("edu-detail");
  for (i = 0; i < edus.length; i++) {
    removeClass(edus[i], "show");
    if (edus[i].className.indexOf(c) > -1) addClass(edus[i], "show");
  };
};
function filterExp(c) {
  var exps, i;
  exps = document.getElementsByClassName("exp-detail");
  for (i = 0; i < exps.length; i++) {
    removeClass(exps[i], "show");
    if (exps[i].className.indexOf(c) > -1) addClass(exps[i], "show");
  };
};

// add selected class to current edu/exp link
var edubtns = document.getElementsByClassName("edubtn");
for (var i = 0; i < edubtns.length; i++) {
  edubtns[i].addEventListener("click", function(){
    for (var j = 0; j < edubtns.length; j++) {
      removeClass(edubtns[j], "selected");
    };
    this.className += " selected";
  });
};
var expbtns = document.getElementsByClassName("expbtn");
for (var i = 0; i < expbtns.length; i++) {
  expbtns[i].addEventListener("click", function(){
    for (var j = 0; j < expbtns.length; j++) {
      removeClass(expbtns[j], "selected");
    };
    this.className += " selected";
  });
};

// filter buttons for proj section
filterSelection("all");
function filterSelection(c) {
  var projs, i;
  projs = document.getElementsByClassName("proj-card");
  if (c == "all") c = "";
  for (i = 0; i < projs.length; i++) {
    removeClass(projs[i], "show");
    if (projs[i].className.indexOf(c) > -1) addClass(projs[i], "show");
  };
};

// add active class to current proj filter btn
var btnContainer = document.getElementById("button-section");
var btns = btnContainer.getElementsByClassName("filter-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    for (var j = 0; j < btns.length; j++) {
      removeClass(btns[j], "active");
    };
    this.className += " active";
  });
};

// change color of icons with text on hover in footer
var container = document.getElementById("copyright-container");

var copyright = document.getElementById("copyright");
var icons = container.getElementsByClassName("fa-solid");
copyright.addEventListener("mouseover", function() {
  copyright.style.setProperty("color", "#b18cec");
  for (var i = 0; i < icons.length; i++) {
    icons[i].style.setProperty("color", "#b18cec");
  };
});
copyright.addEventListener("mouseleave", function() {
  copyright.style.setProperty("color", "#f7f4e9");
  for (var i = 0; i < icons.length; i++) {
    icons[i].style.setProperty("color", "#f7f4e9");
  };
});
