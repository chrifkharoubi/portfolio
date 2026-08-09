const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

if (menu && nav) {
    menu.addEventListener("click", () => {
        menu.classList.toggle("bx-x");
        nav.classList.toggle("active");
    });
}
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  
 
  setTimeout(() => {
    loader.classList.add('hidden');
  },1500); 
});