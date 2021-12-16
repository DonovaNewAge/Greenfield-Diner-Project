window.onload = function() {

    var keys = Object.keys(localStorage) // Gets items from localStorage
    console.log(keys.length)
    if (keys.length < 2) {
        localStorage.setItem("Pizza", JSON.stringify({ "type": "item", "source": "imgs/pizza.png", "inCart": false, "calories": 1120, "name": "Pizza", "price": "$7.99", "quantity": 0 }))
        localStorage.setItem("Cheeseburger", JSON.stringify({ "type": "item", "source": "imgs/cheeseburger.png", "inCart": false, "calories": 1250, "name": "Cheeseburger", "price": "$8.49", "quantity": 0 }))
        localStorage.setItem("Stromboli", JSON.stringify({ "type": "item", "source": "imgs/stromboli.png", "inCart": false, "calories": 770, "name": "Stromboli", "price": "$7.49", "quantity": 0 }))
        localStorage.setItem("Calzone", JSON.stringify({ "type": "item", "source": "imgs/calzone.png", "inCart": false, "calories": 650, "name": "Calzone", "price": "$6.99", "quantity": 0 }))
        localStorage.setItem("Pasta", JSON.stringify({ "type": "item", "source": "imgs/pasta.png", "inCart": false, "calories": 560, "name": "Pasta", "price": "$8.99", "quantity": 0 }))
        localStorage.setItem("Chicken_Wrap", JSON.stringify({ "type": "item", "source": "imgs/wrap.png", "inCart": false, "calories": 470, "name": "Chicken_Wrap", "price": "$4.49", "quantity": 0 }))
        localStorage.setItem("Shrimp_Salad", JSON.stringify({ "type": "item", "source": "imgs/saladShrimp.png", "inCart": false, "calories": 740, "name": "Shrimp_Salad", "price": "$9.99", "quantity": 0 }))
        localStorage.setItem("Turkey_Sandwich", JSON.stringify({ "type": "item", "source": "imgs/turkeySandwich.png", "inCart": false, "calories": 560, "name": "Turkey_Sandwich", "price": "$6.49", "quantity": 0 }))
        localStorage.setItem("Fried_Chicken_Sandwich", JSON.stringify({ "type": "item", "source": "imgs/friedChickenSandwich.png", "inCart": false, "calories": 930, "name": "Fried_Chicken_Sandwich", "price": "$7.29", "quantity": 0 }))
        localStorage.setItem("Nachos", JSON.stringify({ "type": "item", "source": "imgs/nachos.png", "inCart": false, "calories": 1100, "name": "Nachos", "price": "$6.59", "quantity": 0 }))
        localStorage.setItem("Lasagna", JSON.stringify({ "type": "item", "source": "imgs/lasagna.png", "inCart": false, "calories": 980, "name": "Lasagna", "price": "$6.79", "quantity": 0 }))
        localStorage.setItem("Meatballs", JSON.stringify({ "type": "item", "source": "imgs/meatballs.webp", "inCart": false, "calories": 670, "name": "Meatballs", "price": "$7.99", "quantity": 0 }))
        localStorage.setItem("Quesadilla", JSON.stringify({ "type": "item", "source": "imgs/quesadilla.png", "inCart": false, "calories": 640, "name": "Quesadilla", "price": "$9.79", "quantity": 0 }))
        localStorage.setItem("Grilled_Cheese", JSON.stringify({ "type": "item", "source": "imgs/grilledCheese.png", "inCart": false, "calories": 110, "name": "Grilled_Cheese", "price": "$3.69", "quantity": 0 }))
        localStorage.setItem("Mozzarella_Sticks", JSON.stringify({ "type": "item", "source": "imgs/mozzsticks.png", "inCart": false, "calories": 470, "name": "Mozzarella_Sticks", "price": "$4.69", "quantity": 0 }))
        localStorage.setItem("Grilled_Chicken_Sandwich", JSON.stringify({ "type": "item", "source": "imgs/grilledChickenSandwich.png", "inCart": false, "calories": 820, "name": "Grilled_Chicken_Sandwich", "price": "$7.19", "quantity": 0 }))
        localStorage.setItem("Roast_Beef_Sandwich", JSON.stringify({ "type": "item", "source": "imgs/roastBeef.png", "inCart": false, "calories": 840, "name": "Roast_Beef_Sandwich", "price": "$6.89", "quantity": 0 }))
        localStorage.setItem("Salad", JSON.stringify({ "type": "item", "source": "imgs/salad.png", "inCart": false, "calories": 630, "name": "Salad", "price": "$7.89", "quantity": 0 }))
        localStorage.setItem("Hot_Dog", JSON.stringify({ "type": "item", "source": "imgs/hotDog.png", "inCart": false, "calories": 440, "name": "Hot_Dog", "price": "$6.29", "quantity": 0 }))
        localStorage.setItem("Fries", JSON.stringify({ "type": "item", "source": "imgs/fries.png", "inCart": false, "calories": 290, "name": "Fries", "price": "$2.79", "quantity": 0 }))
    }
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
        } else if (itemToAddParsed.type == "user" || itemToAddParsed.type == "admin") {
            continue
        } else {
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
                var itemnamefixed = uppercaseImageName.replace("_", " ")

                imageElement.src = imageURL // Setting up HTML for elements
                nameElement.innerHTML = itemnamefixed.replace("_", " ") // Setting up HTML for elements
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

                buttonAddToCart.classList.add(uppercaseImageName) // Used for styling
                buttonAddToCart.classList.add("btn")
                buttonAddToCart.onclick = function() {
                    var itemClass = this.classList.toString()
                    console.log(itemClass)
                    var itemOnly = itemClass.substring(0, itemClass.length - 4)
                    console.log(itemOnly)
                    var itemStored = localStorage.getItem(itemOnly)
                    console.log(itemStored)
                    var itemObject = JSON.parse(itemStored)
                    itemObject.inCart = true
                    itemObject.quantity = 1
                    localStorage.setItem(itemOnly, JSON.stringify(itemObject))
                    window.location.href = "Cart.html"
                }
            }
        }
    }
}

const tempMap = new Map([
    ["joeldw9", ["Joel Wilkerson", "sweaty"]], // List of users, increases through localStorage but includes these hardcoded
    ["DonovaNewAge", ["Donovan Winters", "gigachad"]], // List of users, increases through localStorage but includes these hardcoded
    ["ChildishSantino", ["Santino Milillo", "tino69420"]], // List of users, increases through localStorage but includes these hardcoded
])


function checkPassword() {
    username = $("#username").val(); // Gets value from input
    entered = $("#password").val(); // Gets value from input

    fullname = tempMap.get(username)[0] // Gets full name
    password = tempMap.get(username)[1] // Gets correct password from map

    if (entered == password) {
        var isAdmin = adminArray.indexOf(username) // Finds if user is admin
        if (isAdmin > -1) {
            $('.adminButtons').show(); // Shows admin menu in navbar
            alert("Welcome back " + username + ".")
            localStorage.setItem(username, JSON.stringify({ "type": "admin", "fullname": fullname, "username": username, "password": password, "currentuser": true })) // For admin access persistence
        } else {
            alert("Welcome back " + username + ".")
            localStorage.setItem(username, JSON.stringify({ "type": "user", "fullname": fullname, "username": username, "password": password, "currentuser": true })) // For user access persistence
        }
    } else {
        alert("You have entered incorrect information, please try again.") // Alerts when entering wrong login info
    }
}


function signUp() {
    key = []
    fullname = $("#fullname").val();
    username = $("#newUsername").val();
    entered = $("#newPassword").val();
    reentered = $("#confirmPassword").val();
    if (entered == reentered) {
        console.log("checked")
        key.push(fullname, entered)
        tempMap.set(username, key)
        localStorage.setItem(username, JSON.stringify({ "type": "user", "fullname": fullname, "username": username, "password": entered, "currentuser": true })) // For user access persistence
    } else {
        console.log("Nope")
    }
    console.log(tempMap)

}

function reel() {
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
    var itemPrice = prompt("How much should the item cost? Please exclude $ at the beginning.") // Getting information for the elements above
    var itemCalories = prompt("How many calories are in this food?") // Getting information for the elements above

    var uppercaseImageName = itemName.charAt(0).toUpperCase() + itemName.slice(1) // Used to unify capitalization on pages

    itemContainer.classList.add("shop-item") // Adding classes for CSS
    itemContainer.classList.add(uppercaseImageName) // Adding classes for CSS
    itemInfo.classList.add("shop-item-info") // Adding classes for CSS

    imageElement.src = imageURL // Setting up HTML for elements
    nameElement.innerHTML = uppercaseImageName // Setting up HTML for elements
    priceElement.innerHTML = "$" + itemPrice // Setting up HTML for elements
    caloriesElement.innerHTML = itemCalories + " cal" // Setting up HTML for elements
    buttonAddToCart.innerHTML = "ADD TO CART" // Setting up HTML for elements

    shop.appendChild(itemContainer) // Adding elements to page
    itemContainer.append(imageElement, itemInfo) // Adding elements to page
    itemInfo.append(nameElement, priceElement, caloriesElement, buttonAddToCart) // Adding elements to page

    buttonAddToCart.classList.add("btn") // Used for styling
    $(buttonAddToCart).click(function() { // To add to cart
        if (buttonAddToCart.classList.contains("btn")) {
            var classToFind = this.classList.toString()
            var classSliced = classToFind.substring(0, classToFind.length - 4);
            var itemToUse = localStorage.getItem(classSliced)
            console.log(classSliced)
            var itemToUseParsed = JSON.parse(itemToUse)
            console.log(itemToUseParsed)
            itemToUseParsed.inCart = true
            itemToUseParsed.quantity = 1
            localStorage.setItem(uppercaseImageName, JSON.stringify(itemToUseParsed))
            window.location.href = "Cart.html"
        }
    })

    localStorage.setItem(uppercaseImageName, JSON.stringify({ "type": "item", "source": imageURL, "inCart": false, "calories": itemCalories, "name": itemName, "price": itemPrice, "inCart": false, "quantity": 0 }))
    window.location.href = "menuAdmin.html"
}

function removeItem() {
    var itemToRemoveClass = prompt("What item would you like to remove? Please enter the name without spaces.")
    var uppercaseClassName = itemToRemoveClass.charAt(0).toUpperCase() + itemToRemoveClass.slice(1)
    $("." + uppercaseClassName).remove();
    localStorage.removeItem(uppercaseClassName)
    window.location.href = "menuAdmin.html"
}

function editItem() {
    var itemToEdit = prompt("What item would you like to edit?")
    var AttributeToEdit = prompt("What would you like to change about it? Please enter name, price, calories, or source to change the image.")
    var newValue = prompt("What would you like the new value to be?")
    var myObj = JSON.parse(localStorage.getItem(itemToEdit));
    if (AttributeToEdit == "name") {
        myObj.name = newValue;
        localStorage.removeItem(itemToEdit);
        localStorage.setItem(newValue, JSON.stringify(myObj));
    } else {
        myObj.setAttribute(AttributeToEdit, newValue)
        localStorage.setItem(itemToEdit, JSON.stringify(myObj));
    }
    window.location.href = "menuAdmin.html"
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

function orderDelivered() {
    var order = localStorage.getItem("order")
    var orderParsed = JSON.parse(order)
    if (orderParsed.orderDelivery == false) {
        orderParsed.orderDelivery = true
    } else {
        orderParsed.orderDelivery = false
    }
    localStorage.setItem("order", JSON.stringify(orderParsed))
}

function receipt() {
    var itemAddedContainer = document.createElement("div")
    var itemAddedName = document.createElement("p")
    var itemAddedQuantity = document.createElement("p")
    var itemAddedPrice = document.createElement("p")
    var blank = document.createElement("hr")
    blank.classList.add("test")

    itemAddedName.innerHTML = "Name"
    itemAddedQuantity.innerHTML = "Quantity"
    itemAddedPrice.innerHTML = "Price"

    itemAddedContainer.append(itemAddedName, itemAddedQuantity, itemAddedPrice)
    itemAddedContainer.classList.add("order-item")
    document.body.append(itemAddedContainer)
    document.body.append(blank)

    var itemsOrdered = localStorage.getItem("order")
    var itemsParsed = JSON.parse(itemsOrdered)
    var itemsArrayParsed = itemsParsed.orderItems
    var k = 0
    for (k; itemSelected = itemsArrayParsed[k]; k++) {
        var itemToAdd = itemSelected
        var itemName = itemToAdd.name.replace("_", " ")
        var itemQuantity = itemToAdd.quantity
        var itemPrice = itemToAdd.price

        var itemAddedContainer = document.createElement("div")
        var itemAddedName = document.createElement("p")
        var itemAddedQuantity = document.createElement("p")
        var itemAddedPrice = document.createElement("p")

        itemAddedName.innerHTML = itemName.replace("_", " ")
        itemAddedQuantity.innerHTML = itemQuantity
        itemAddedPrice.innerHTML = "$" + parseFloat(parseFloat(itemPrice.replace("$", "")) * parseFloat(itemQuantity))

        itemAddedContainer.append(itemAddedName, itemAddedQuantity, itemAddedPrice)
        itemAddedContainer.classList.add("order-item")

        document.body.append(itemAddedContainer)
    }
}

function checkoutButton() {
    window.location.href = "receipt.html"
}