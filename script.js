window.onload = function() {
    var keys = Object.keys(localStorage)
    for (i = 0; key = keys[i]; i++) {
        var itemToAdd = localStorage.getItem(key)
    }
};
// main()

// function main(){

// }

// function genesis(){
    
// }


function menu() {
    var keys = Object.keys(localStorage)
    for (i = 0; key = keys[i]; i++) {
        var itemToAdd = localStorage.getItem(key)
        console.log(itemToAdd)
        var itemObj = JSON.parse(itemToAdd)
        if (itemObj.onMenu == true) {
            var source = itemObj.source
            var imageName = itemObj.name
            var price = itemObj.price
            var uppercaseImageName = imageName.charAt(0).toUpperCase() + imageName.slice(1)
            var div1 = document.createElement("div")
            var image = document.createElement('img');
            image.src = source;
            var shop = document.getElementById("shop-items")
            shop.appendChild(div1)
            div1.classList.add("shop-item")
            div1.appendChild(image)
            div1.classList.add(uppercaseImageName)
            var div = document.createElement("div")
            div1.appendChild(div)
            div.classList.add("shop-item-info")
            var name = document.createElement("p")
            var priceElement = document.createElement("p")
            var buttonAddToCart = document.createElement("button")
            buttonAddToCart.innerHTML = "ADD TO CART"
            buttonAddToCart.classList.add(uppercaseImageName)
            priceElement.innerHTML = price
            name.innerHTML = uppercaseImageName
            name.classList.add("name")
            div.appendChild(name)
            div.appendChild(priceElement)
            div.appendChild(buttonAddToCart)
            buttonAddToCart.classList.add("btn")
        }
    }
}



const tempMap = new Map([
    ["joeldw9", ["Joel Wilkerson", "sweaty"]],
    ["DonovaNewAge",["Donovan Winters", "gigachad"]],
    ["ChildishSantino",["Santino Milillo", "tino69420"]],
    ["MainManMainul", ["Mainul Chowdhury", "devloper" ]]
])

var menuList = document.getElementsByClassName("shop-items")

var adminArray = ["joeldw9", "DonoveNewAge","Chlidish Santino", "MainManMainul"]

function checkPassword(){
    username = $("#username").val();
    entered = $("#password").val();
    console.log(tempMap.get(username)[1])
    password = tempMap.get(username)[1]
    if(entered == password){
        console.log("allow access");
    }
    else{
        console.log("access denied");
    }

}


function signUp(){
    first = document.getElementById("signup")
    second = first.getElementsByClassName("input").val()
    piArray = Array.from(first.getElementsByClassName("input").val());

    console.log(piArray)
    key = []
    fullname = $("#fullname").val();
    username = $("#newUsername").val();
    entered = $("#newPassword").val();
    reentered = $("#confirmPassword").val();
    if(entered == reentered){
        console.log("checked")
        key.push(fullname, entered)
        tempMap.set(username, key)

    }
    else{
        console.log("Nope")
    }
    console.log(tempMap)

}

function reel(){
    $("#signup").slideDown(1000)
}

function logInMenu() {
    username = prompt("What is your username?")
    password = tempMap.get(username)[1]
    entered = prompt("Please enter your password.")
    var isAdmin = adminArray.indexOf(username)
    if(entered == password && isAdmin > -1) {
        $('.adminButtons').show();
    }
}

function addItem() {
    var imageURL = prompt("Please enter the image URL.")
    var itemName = prompt("What food is in the image?")
    var price = prompt("How much should the item cost? Please include $ at the beginning.")
    var calories = prompt("How many calories are in this food?")
    var uppercaseImageName = imageName.charAt(0).toUpperCase() + imageName.slice(1)
    var div1 = document.createElement("div")
    var image = document.createElement('img');
    image.src = img;

    var uppercaseItemName = itemName.charAt(0).toUpperCase() + itemName.slice(1)

    localStorage.setItem(itemName, imageURL)

    var newItemBox = document.createElement("div")
    var image = document.createElement('img');

    image.src = localStorage.getItem(itemName);

    var shop = document.getElementById("shop-items")

    shop.appendChild(newItemBox)
    newItemBox.classList.add("shop-item")
    newItemBox.appendChild(image)
    newItemBox.classList.add(uppercaseItemName)

    var newItemText = document.createElement("div")

    newItemBox.appendChild(itemText)
    newItemText.classList.add("shop-item-info")

    var foodName = document.createElement("p")
    var priceElement = document.createElement("p")
    var buttonAddToCart = document.createElement("button")

    buttonAddToCart.innerHTML = "ADD TO CART"
    buttonAddToCart.classList.add(uppercaseImageName)
    priceElement.innerHTML = price
    name.innerHTML = uppercaseImageName
    name.classList.add("name")
    div.appendChild(name)
    div.appendChild(priceElement)
    div.appendChild(buttonAddToCart)
    foodName.innerHTML = uppercaseItemName

    newItemText.appendChild(foodName)
    newItemText.appendChild(priceElement)
    newItemText.appendChild(buttonAddToCart)

    buttonAddToCart.classList.add("btn")
    localStorage.setItem(uppercaseImageName, JSON.stringify({"source": img, "inCart": false, "calories": calories, "name": imageName, "price": price, "onMenu": true}))
}


function removeItem() {
    var itemToRemoveClass = prompt("What item would you like to remove? Please enter the name without spaces.")
    var uppercaseClassName = itemToRemoveClass.charAt(0).toUpperCase() + itemToRemoveClass.slice(1)
    $("." + uppercaseClassName).remove();
    localStorage.removeItem(uppercaseClassName)

}

function saveEdits() {

    //get the editable element
    var editElem = document.getElementById("edit");
    
    //get the edited element content
    var userVersion = editElem.innerHTML;
    
    //save the content to local storage
    localStorage.userEdits = userVersion;
    
    //write a confirmation to the user
    document.getElementById("update").innerHTML="Edits saved!";
}
function checkEdits() {

    //find out if the user has previously saved edits
    if(localStorage.userEdits!=null)
    document.getElementById("edit").innerHTML = localStorage.userEdits;
    }

var editElem = document.getElementById("edit");
editElem.contentEditable="false";
function registerClickHandler() {
    // Register click event handler for button of class 'remove'
      "use strict";
      var node = document.getElementsByClassName("image");
      if (node.parentNode) {
          node.parentNode.removeChild(node);
      }
  }
  
  var listen = document.getElementbyClassName("remove");
  listen.addEventListener("click", registerClickHandler());
