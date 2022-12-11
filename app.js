
var list = document.getElementById("list");



function addToDo() {
  var ToDo = document.getElementById("todo_item");
  document.getElementById("error").innerHTML ="";
  if (ToDo.value == '') {
    document.getElementById("error").innerHTML = "Please enter value";

    
  } else {

    var todoItem = document.getElementById("todo_item");
    var li = document.createElement('li');
    var liText =document.createTextNode(todoItem.value);

    li.appendChild(liText);

    /* Delete button */
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("class" , "delbtn");
    delBtn.setAttribute("onclick" , "deleteItem(this)");
    delBtn.appendChild(delText);
    /* edit Button */
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    editBtn.setAttribute("class" , "editbtn");
    editBtn.setAttribute("onclick" , "EditItem(this)");

   
    li.appendChild(delBtn);
    li.appendChild(editBtn);

    list.appendChild(li);

    todoItem.value = "";


    console.log(li);
  }
   

}
function deleteItem(e) {

  e.parentNode.remove()
}
function deleteAll() {

  list.innerHTML = ""

}
function EditItem(e) {

  console.log (e.parentNode.firstChild.nodeValue);
  var val = prompt("Enter your updated value" ,e.parentNode.firstChild.nodeValue );
  e.parentNode.firstChild.nodeValue = val ;
}