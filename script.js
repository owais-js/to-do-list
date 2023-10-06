function addItem(){
    // input ki value list mian add karni ha

    var inputElement = document.getElementById('input')
    var ulElement = document.getElementById('list')

    var liElement = document.createElement('li')

    var editbtn = '<button id="ebtn"onclick="editItem(event)">Edit</button>'
    var deletebtn = '<button onclick="deleteItem(event)">Delete</button>'
  
    liElement.innerHTML = '<span>'+ inputElement.value + '</span>'+ editbtn + deletebtn;

    ulElement.append(liElement)

    cls();
}

function deleteItem(event){
    // jis item k delete par click ho usee urana ha
    console.log(event);
    var liElement =  event.target.parentElement
    liElement.remove();
}

var activeItem = null;

function editItem(event) {

    // item ki value input main lani ha
  // add k bajae update ka button aa jaye

  console.log(event)

  var inputElement = document.getElementById('input');
  var itemElement = event.target.previousSibling;

   activeItem = itemElement; // Store the active item
  var textContent = itemElement.textContent;
  inputElement.value = textContent;

  var addbtn = document.getElementById('Add-btn');
  addbtn.className = 'hide';

  var updatebtn = document.getElementById('update-btn');
  updatebtn.className = '';
}

function updatebtnFunction() {
  var inputElement = document.getElementById('input');
  var updatedValue = inputElement.value;
  
  activeItem.textContent = updatedValue;

  // Input field khali karian ge
  inputElement.value = "";


  var addbtn = document.getElementById('Add-btn');
  addbtn.className = '';


  var updatebtn = document.getElementById('update-btn');
  updatebtn.className ='hide';
}

function delall() {
  // tamam items ko delete karna ha bagair ul ko delete  kiye hue.
  var ulElement = document.getElementById('list');
  ulElement.innerHTML = ''; 
}

function cls(){
    var inputElement = document.getElementById('input')
    inputElement.value ='';
}