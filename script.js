window.onload = function() {

    var keys = Object.keys(localStorage) // Gets items from localStorage
    for (i = 0; key = keys[i]; i++) { // Gets items from localStorage
        var itemToAdd = localStorage.getItem(key) // Gets items from localStorage
        var itemToAddParsed = JSON.parse(itemToAdd)

        if (itemToAddParsed.type == "admin" && itemToAddParsed.currentuser == true) { // Separates item that determines if admin
            $(".adminButtons").show(); // Separates item that determines if admin
            continue // Separates item that determines if admin
        }
    }
};

function menu() {
    var keys = Object.keys(localStorage) // Gets items from localStorage
    for (i = 0; key = keys[i]; i++) { // Gets items from localStorage
        var itemToAdd = localStorage.getItem(key) // Gets items from localStorage
        var itemToAddParsed = JSON.parse(itemToAdd)

        if (itemToAddParsed.type == "admin" && itemToAddParsed.currentuser == true) { // Separates item that determines if admin
            $(".adminButtons").show(); // Separates item that determines if admin
            continue // Separates item that determines if admin
        }

        else if (itemToAddParsed.type == "user" || itemToAddParsed.type == "admin") {
            continue
        }

        else { 
            var itemObj = JSON.parse(itemToAdd); // Gets items for the menu 
            if (itemObj.type == "item") { // Gets items for the menu

            var shop = document.getElementById("shop-items") // Gets the menu content area

            var itemContainer = document.createElement("div") // Container for image
            var itemInfo = document.createElement("div") // Container for information and add to cart button
            var imageElement = document.createElement('img') // Will house image for the item
            var nameElement = document.createElement("p") // Will house info for the item
            var priceElement = document.createElement("p") // Will house info for the item
            var caloriesElement = document.createElement("p") // Will house info for the item
            var buttonAddToCart = document.createElement("button") // Will house info for the item

            var imageURL = itemObj.source // Getting information for the elements above
            var itemName = itemObj.name // Getting information for the elements above
            var itemCalories = itemObj.calories // Getting information for the elements above
            var itemPrice = itemObj.price // Getting information for the elements above

            var uppercaseImageName = itemName.charAt(0).toUpperCase() + itemName.slice(1) // Used to unify capitalization on pages
            
            itemContainer.classList.add("shop-item") // Adding classes for CSS
            itemContainer.classList.add(uppercaseImageName) // Adding classes for CSS
            itemInfo.classList.add("shop-item-info") // Adding classes for CSS
           
            imageElement.src = imageURL // Setting up HTML for elements
            nameElement.innerHTML = uppercaseImageName // Setting up HTML for elements
            priceElement.innerHTML = itemPrice // Setting up HTML for elements
            caloriesElement.innerHTML = itemCalories + " cal" // Setting up HTML for elements
            buttonAddToCart.innerHTML = "ADD TO CART" // Setting up HTML for elements

            shop.appendChild(itemContainer) // Adding elements to page
            itemContainer.appendChild(imageElement) // Adding elements to page
            itemContainer.appendChild(itemInfo) // Adding elements to page
            itemInfo.appendChild(nameElement) // Adding elements to page
            itemInfo.appendChild(priceElement) // Adding elements to page
            itemInfo.appendChild(caloriesElement) // Adding elements to page
            itemInfo.appendChild(buttonAddToCart) // Adding elements to page

            buttonAddToCart.classList.add("btn") // Used for styling
            $("." + uppercaseImageName).click(function() { // To add to cart
                var itemToUse = localStorage.getItem(uppercaseImageName)
                var itemToUseParsed = JSON.parse(itemToUse)
                console.log(itemToUseParsed)
                itemToUseParsed.inCart = true
                localStorage.setItem(uppercaseImageName, JSON.stringify(itemToUseParsed))
            })
            }
        }
    }
}


const tempMap = new Map([
    ["joeldw9", ["Joel Wilkerson", "sweaty"]], // List of users, increases through localStorage but includes these hardcoded
    ["DonovaNewAge",["Donovan Winters", "gigachad"]], // List of users, increases through localStorage but includes these hardcoded
    ["ChildishSantino",["Santino Milillo", "tino69420"]], // List of users, increases through localStorage but includes these hardcoded
])


function checkPassword(){
    username = $("#username").val(); // Gets value from input
    entered = $("#password").val(); // Gets value from input

    fullname = tempMap.get(username)[0] // Gets full name
    password = tempMap.get(username)[1] // Gets correct password from map

    if(entered == password){
        var isAdmin = adminArray.indexOf(username) // Finds if user is admin
        if(isAdmin > -1) {
            $('.adminButtons').show(); // Shows admin menu in navbar
            alert("Welcome back " + username + ".")
            localStorage.setItem(username, JSON.stringify({"type": "admin", "fullname": fullname, "username": username, "password": password, "currentuser": true})) // For admin access persistence
        }

        else {
            alert("Welcome back " + username + ".")
            localStorage.setItem(username, JSON.stringify({"type": "user", "fullname": fullname, "username": username, "password": password, "currentuser": true})) // For user access persistence
        }
    }

        else{
            alert("You have entered incorrect information, please try again.") // Alerts when entering wrong login info
    }
}


function signUp(){
    key = []
    fullname = $("#fullname").val();
    username = $("#newUsername").val();
    entered = $("#newPassword").val();
    reentered = $("#confirmPassword").val();
    if(entered == reentered){
        console.log("checked")
        key.push(fullname, entered)
        tempMap.set(username, key)
        localStorage.setItem(username, JSON.stringify({"type": "user", "fullname": fullname, "username": username, "password": entered, "currentuser": true})) // For user access persistence
    }
    else{
        console.log("Nope")
    }
    console.log(tempMap)

}

function reel(){
    $("#signup").slideDown(1000)
}

var adminArray = ["joeldw9", "DonovaNewAge", "ChildishSantino"]

function addItem() {

    var shop = document.getElementById("shop-items") // Gets the menu content area

    var itemContainer = document.createElement("div") // Container for image
    var itemInfo = document.createElement("div") // Container for information and add to cart button
    var imageElement = document.createElement('img') // Will house image for the item
    var nameElement = document.createElement("p") // Will house info for the item
    var priceElement = document.createElement("p") // Will house info for the item
    var caloriesElement = document.createElement("p") // Will house info for the item
    var buttonAddToCart = document.createElement("button") // Will house info for the item

    var imageURL = prompt("Please enter the image URL.") // Getting image source
    var itemName = prompt("What food is in the image?") // Getting information for the elements above
    var itemPrice = prompt("How much should the item cost? Please include $ at the beginning.") // Getting information for the elements above
    var itemCalories = prompt("How many calories are in this food?") // Getting information for the elements above

    var uppercaseImageName = itemName.charAt(0).toUpperCase() + itemName.slice(1) // Used to unify capitalization on pages
            
    itemContainer.classList.add("shop-item") // Adding classes for CSS
    itemContainer.classList.add(uppercaseImageName) // Adding classes for CSS
    itemInfo.classList.add("shop-item-info") // Adding classes for CSS
           
    imageElement.src = imageURL // Setting up HTML for elements
    nameElement.innerHTML = uppercaseImageName // Setting up HTML for elements
    priceElement.innerHTML = itemPrice // Setting up HTML for elements
    caloriesElement.innerHTML = itemCalories + " cal" // Setting up HTML for elements
    buttonAddToCart.innerHTML = "ADD TO CART" // Setting up HTML for elements

    shop.appendChild(itemContainer) // Adding elements to page
    itemContainer.appendChild(imageElement) // Adding elements to page
    itemContainer.appendChild(itemInfo) // Adding elements to page
    itemInfo.appendChild(nameElement) // Adding elements to page
    itemInfo.appendChild(priceElement) // Adding elements to page
    itemInfo.appendChild(caloriesElement) // Adding elements to page
    itemInfo.appendChild(buttonAddToCart) // Adding elements to page

    buttonAddToCart.classList.add("btn") // Used for styling
    $("." + uppercaseImageName).click(function() { // To add to cart
        var itemToUse = localStorage.getItem(uppercaseImageName)
        var itemToUseParsed = JSON.parse(itemToUse)
        console.log(itemToUseParsed)
        itemToUseParsed.inCart = true
        localStorage.setItem(uppercaseImageName, JSON.stringify(itemToUseParsed))
    })

    localStorage.setItem(uppercaseImageName, JSON.stringify({"type": "item", "source": imageURL, "inCart": false, "calories": itemCalories, "name": itemName, "price": itemPrice, "inCart": false}))
}

function removeItem() {
    var itemToRemoveClass = prompt("What item would you like to remove? Please enter the name without spaces.")
    var uppercaseClassName = itemToRemoveClass.charAt(0).toUpperCase() + itemToRemoveClass.slice(1)
    $("." + uppercaseClassName).remove();
    localStorage.removeItem(uppercaseClassName)
}

function editItem() {
    var itemToEdit = prompt("What item would you like to edit?")
    var AttributeToEdit = prompt("What would you like to change about it? Please enter name, price, calories, or image.")
    var newValue = prompt("What would you like the new value to be?")
    if (AttributeToEdit == "name") {
        var itemToEdit = JSON.parse(localStorage.getItem(itemToEdit));
        itemToEdit.name = newValue;
        localStorage.removeItem(itemToEdit);
        localStorage.setItem(newValue, JSON.stringify(itemToEdit));
    }
    if (AttributeToEdit == "price") {
        var itemToEdit = JSON.parse(localStorage.getItem(itemToEdit));
        itemToEdit.price = newValue;
        localStorage.setItem(itemToEdit, JSON.stringify(itemToEdit));
    }
    if (AttributeToEdit == "calories") {
        var itemToEdit = JSON.parse(localStorage.getItem(itemToEdit));
        itemToEdit.calories = newValue;
        localStorage.setItem(itemToEdit, JSON.stringify(itemToEdit));
    }
    if (AttributeToEdit == "image") {
        var itemToEdit = JSON.parse(localStorage.getItem(itemToEdit));
        itemToEdit.source = newValue;
        localStorage.setItem(itemToEdit, JSON.stringify(itemToEdit));
    }
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


  function newCartItem(){
        cartItemBox = document.createElement("div")
        cartItemBox.classList.add("cart-items")

        cartImageBox = document.createElement("div")
        cartImageBox.classList.add("image-box")

        cartImage = document.createElement("img");
        cartImage.src = "imgs/pizza.png"

        cartImageBox.appendChild(cartImage)


        cartAboutBox = document.createElement("div")
        cartAboutBox.classList.add("about")

        aboutTitle = document.createElement("h1")
        aboutTitle.innerHTML = "Pizza"
        cartAboutBox.appendChild(aboutTitle)

        aboutSubtitle = document.createElement("h3")
        aboutSubtitle.innerHTML = "1000"
        cartAboutBox.appendChild(aboutSubtitle)


        cartCounterBox = document.createElement("div")
        cartCounterBox.classList.add("counter")

        counterArray = [["bttnn","+"],["count","1"],["bttnn","-"]]
        for(i=0; i < counterArray.length; i++){
            counterDivs = document.createElement("div")
            counterDivs.classList.add(counterArray[i][0])
            counterDivs.innerHTML = counterArray[i][1]
            cartCounterBox.appendChild(counterDivs)
        }


        cartPricesBox = document.createElement("div")
        cartPricesBox.classList.add("prices")

        pricesArray = [["amount","5.99"],["save","Save for later"],["remove","remove"]]
        for(i=0; i < pricesArray.length; i++){
            pricesDivs = document.createElement("div")
            pricesDivs.classList.add(pricesArray[i][0])
            pricesDivs.innerHTML = pricesArray[i][1]
            cartPricesBox.appendChild(pricesDivs)
        }

        cartItemBox.append(cartImageBox,cartAboutBox,cartCounterBox,cartPricesBox)
        console.log(cartItemBox)
        $(".cart-container").append(cartItemBox)

  }

function logOut() {
  
    var keys = Object.keys(localStorage) // Gets items from localStorage
    for (i = 0; key = keys[i]; i++) { // Gets items from localStorage
        var itemToAdd = localStorage.getItem(key) // Gets items from localStorage
        var itemToAddParsed = JSON.parse(itemToAdd)

        if (itemToAddParsed.type == "user" || itemToAddParsed.type == "admin") {
            if (itemToAddParsed.currentuser == true) { // Separates item that determines if current user
            itemToAddParsed.currentuser = false
            localStorage.setItem(key, JSON.stringify(itemToAddParsed))
            console.log(localStorage.getItem(key))
        }
    }
    window.location.href = "index.html"
}
}

function cartItem(item) {
    var itemToUse = localStorage.getItem(item)
    var itemToUseParsed = JSON.parse(itemToUse)
    console.log(itemToUseParsed)
}

