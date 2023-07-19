const panels = document.querySelectorAll(".panel")
function toggleOpen(name){
    console.log("Toi da bam");
    this.classList.toggle("open");
}
function toggleActive (name) {}
for (let i = 0; i < panels.length; i++){
    panels[i].addEventListener("click", toggleOpen)
}