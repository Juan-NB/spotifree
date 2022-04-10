window.addEventListener("scroll", function() {
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("abajo", this.window.scrollY > 100);
});