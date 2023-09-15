/* for the scroll */
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header first_section a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove("active");
        document.querySelectorAll("header first_section a [href*=" + id + "]").classList.add("active");
      });
    };
  });
};


/* for the nav bar */
function openfile(evt, filename) {
  var i, tabpanel, tab_links;
  tabpanel = document.getElementsByClassName("tabpanel");
  for (i = 0; i < tabpanel.length; i++) {
    tabpanel[i].style.display = "none";
  }
  tab_links = document.getElementsByClassName("tab_links");
  for (i = 0; i < tab_links.length; i++) {
    tab_links[i].className = tab_links[i].className.replace(" active", "");
  }
  document.getElementById(filename).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
