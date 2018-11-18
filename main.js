// a click event that calls a function when user inputs and submits
// var document.getElementById('enter').onclick = toDoAdd;
document.getElementById('complete').onclick = completed;
document.getElementById('clear').onclick = clearAll;
document.getElementById('save').onclick = save;

var trash = document.getElementsByClassName('fa-trash-alt')
Array.from(trash).forEach((icon)=>{
  trashIcon.addEventListener('click', function(){
    const word = this.parentNode.parentNode.childNodes[1].innerText
    fetch('delete', {
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'word': word
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  })
})
//
// // var myStorage = window.localStorage;
// // var li = document.createElement("li");
// // var historyBtn = document.querySelector('#history');
// // var hisList= localStorage.getItem('toDoList');
// //
Array.from(clearAll).forEach(function(clear) {
  console.log(clearAll)
      clearButton.addEventListener('click', function(){
        const word = this.parentNode.parentNode.childNodes[1].innerText
        fetch('delete', {
          method: 'delete',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'word': word
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
// });
Array.from(completed).forEach((complete)=> {
  console.log(completed)
      completedButton.addEventListener('click', function(){
        const word = this.parentNode.parentNode.childNodes[1].innerText
        fetch('word', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'tasks': tasks
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
// });
//
Array.from(save).forEach((save)=> {
      saveButton.addEventListener('click', function(){
        const word = this.parentNode.parentNode.childNodes[1].innerText
        fetch('word', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'word': word
          })
        }).then(function (response) {
          window.location.reload(true)
        })
      });

      Array.from(archive).forEach((history)=> {
            archiveButton.addEventListener('click', function(){
              const word = this.parentNode.parentNode.childNodes[1].innerText
              fetch('word', {
                method: 'get',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  'word': word
                })
              }).then(function (response) {
                window.location.reload(true)
              })
            });
});





























































// // build an empty array that will hold all li
// var count = 0;
//
// var form = document.getElementById("inputContainer");
// form.addEventListener("submit", function (e) {
//   var item = document.getElementById("input").value;
//   e.preventDefault();
//   if(item == ""){
//     alert("enter something")
//   }else{
//   toDoAdd();
//   document.getElementById("input").value = "";
// }
// });
//
//
// // function that will add input to array
// function toDoAdd(){
//
//   // what you are grabbing from html
//   var item = document.getElementById("input").value;
//   var ul = document.getElementById("toDoList");
//   // what you are going to add to li
//   var text = document.createTextNode(item);
//   // creating li element
//   var li = document.createElement("li");
//
//   if(item == ""){
//     alert("enter something")
//   }else{
//     // adds the li to the html with user input
//     li.appendChild(text)
//
//     ul.appendChild(li)
//     // item count
//     count++
//     displayCompleteMessage(count + " items left" + " in your to-do list")
//
//     document.getElementById("input").value = "";
//     // change h2 to display list length
//   }
//
// }
//
//
// // click li, strikethourgh with event delegation
// var ul = document.querySelector("ul")
//
// ul.addEventListener("click", function(ev){
//   if(ev.target.tagName === 'LI'){
//     ev.target.classList.toggle("checked")
//   }
// })
//
// // Event Delegation in JQuery
// // $('ul').on('click','li', function(){
// // })
//
//
// // will delete all our to-dos
// function clearAll(){
//   var ul = document.getElementById("toDoList");
//   ul.innerHTML = "";
//   localStorage.removeItem('todolist', ul.innerHTML);
//   // removes all items from list
//   count = 0;
//   displayCompleteMessage(count + " items left" + " in your to-do list")
// }
//
// function clearComplete(){
//   var checkedLi = ul.querySelectorAll(".checked");
//   checkedLi.forEach(function(li){
//     // remove li from parent
//     count--
//     ul.removeChild(li)
//     displayCompleteMessage(count + " items left" + " in your to-do list")
//   })
// }
//
// function displayCompleteMessage(msg) {
//   document.getElementById("itemCount").innerHTML = msg;
// }
//
//
// // Local Storage
// var saveBtn = document.querySelector("#save");
//
// saveBtn.addEventListener('click', function(){
//    localStorage.setItem('todoList',ul.innerHTML);
//    localStorage.setItem("countHistory", count)
//    console.log(localStorage);
// });
//
// var li = document.createElement("li");
// var historyBtn = document.querySelector('#history');
// var hisList= localStorage.getItem('toDoList');
//
// historyBtn.addEventListener('click', function(){
//   const lis = localStorage.getItem('todoList');
//   count = localStorage.getItem('countHistory')
//    console.log(lis);
//    ul.innerHTML=lis;
//    displayCompleteMessage(count + " items left" + " in your to-do list")
// });
