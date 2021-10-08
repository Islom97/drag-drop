const item = document.querySelector(".item")
const dragRoots = document.querySelectorAll(".placeholder");

// #events 

item.addEventListener("dragstart", dragStart)
item.addEventListener("dragend", dragRemove)

//drag Root loop
dragRoots.forEach((drag) => {
   drag.addEventListener("dragover", dragOver)
   drag.addEventListener("dragenter", dragEnter)
   drag.addEventListener("dragleave", dragLeave)
   drag.addEventListener("drop", dragDrop)
})

// #functions
//#function dragstart...

function dragStart(evn) {
   let dragTarget = evn.target;
   dragTarget.classList.add("drag__start");
   setTimeout(() => {
      dragTarget.classList.add("hide");
   }, 0);
}
//#function dragend...
function dragRemove(evn) {
   let dragTarget = evn.target;
   dragTarget.classList.remove("drag__start", "hide")
}

// Function drag over
function dragOver(evn) {
   evn.preventDefault();
}
// Function drag enter
function dragEnter(evn) {
   evn.target.classList.add("initDrag")
}
// Function drag leaver
function dragLeave(evn) {
   evn.target.classList.remove("initDrag")
}
// Function drag drop
function dragDrop(evn) {
   evn.target.classList.remove("initDrag")
   evn.target.append(item);
}