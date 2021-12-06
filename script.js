window.onload = function() {
    var keys = Object.keys(localStorage)
    for (i = 0; key = keys[i]; i++) {
        var itemToAdd = localStorage.getItem(key)
        if (itemToAdd == "true") {
            $(".adminButtons").show();
            continue
        }
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
        if (itemToAdd == "true") {
            $(".adminButtons").show();
            continue
        }
        else {
        console.log(itemToAdd)
        var itemObj = JSON.parse(itemToAdd)
        if (itemObj.onMenu == true) {
            var source = itemObj.source
            var imageName = itemObj.name
            var calories = itemObj.calories
            var price = itemObj.price
            var uppercaseImageName = imageName.charAt(0).toUpperCase() + imageName.slice(1)
            var div1 = document.createElement("div")
            var image = document.createElement('img');
            image.src = source;
            var shop = document.getElementById("shop-items")
            shop.appendChild(div1)
            var caloriesElement = document.createElement("p")
            caloriesElement.innerHTML = calories + " cal"
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
            div.appendChild(caloriesElement)
            div.appendChild(buttonAddToCart)
            buttonAddToCart.classList.add("btn")
        }
    }
    }
}


const tempMap = new Map([
    ["joeldw9", ["Joel Wilkerson", "sweaty"]],
    ["DonovaNewAge",["Donovan Winters", "gigachad"]],
    ["ChildishSantino",["Santino Milillo", "tino69420"]],
])

var menuList = document.getElementsByClassName("shop-items")

function checkPassword(){
    username = $("#username").val();
    entered = $("#password").val();
    console.log(tempMap.get(username)[1])
    password = tempMap.get(username)[1]
    if(entered == password){
        console.log("allow access");
        var isAdmin = adminArray.indexOf(username)
        if(entered == password && isAdmin > -1) {
            $('.adminButtons').show();
            localStorage.setItem("isAdmin", true)
        }
    }
    else{
        console.log("access denied");
        alert("You have entered incorrect information, please try again.")
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

function logInMenu() {
    username = prompt("What is your username?")
    password = tempMap.get(username)[1]
    entered = prompt("Please enter your password.")
    var isAdmin = adminArray.indexOf(username)
    if(entered == password && isAdmin > -1) {
        $('.adminButtons').show();
        localStorage.setItem("isAdmin", true)
    }
}

function addItem() {
    var img = prompt("Please enter the image URL.")
    var imageName = prompt("What food is in the image?")
    var price = prompt("How much should the item cost? Please include $ at the beginning.")
    var calories = prompt("How many calories are in this food?")
    var uppercaseImageName = imageName.charAt(0).toUpperCase() + imageName.slice(1)
    var div1 = document.createElement("div")
    var image = document.createElement('img');
    image.src = img;
    var shop = document.getElementById("shop-items")
    shop.appendChild(div1)
    div1.classList.add("shop-item")
    div1.appendChild(image)
    div1.classList.add(uppercaseImageName)
    var div = document.createElement("div")
    div1.appendChild(div)
    div.classList.add("shop-item-info")
    var name = document.createElement("p")
    var caloriesElement = document.createElement("p")
    var priceElement = document.createElement("p")
    var buttonAddToCart = document.createElement("button")
    caloriesElement.innerHTML = calories + " cal"
    buttonAddToCart.innerHTML = "ADD TO CART"
    buttonAddToCart.classList.add(uppercaseImageName)
    priceElement.innerHTML = price
    name.innerHTML = uppercaseImageName
    name.classList.add("name")
    div.appendChild(name)
    div.appendChild(priceElement)
    div.appendChild(caloriesElement)
    div.appendChild(buttonAddToCart)
    buttonAddToCart.classList.add("btn")
    localStorage.setItem(uppercaseImageName, JSON.stringify({"source": img, "inCart": false, "calories": calories, "name": imageName, "price": price, "onMenu": true}))
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
        var myObj = JSON.parse(localStorage.getItem(itemToEdit));
        myObj.name = newValue;
        localStorage.removeItem(itemToEdit);
        localStorage.setItem(newValue, JSON.stringify(myObj));
    }
    if (AttributeToEdit == "price") {
        var myObj = JSON.parse(localStorage.getItem(itemToEdit));
        myObj.price = newValue;
        localStorage.setItem(itemToEdit, JSON.stringify(myObj));
    }
    if (AttributeToEdit == "calories") {
        var myObj = JSON.parse(localStorage.getItem(itemToEdit));
        myObj.calories = newValue;
        localStorage.setItem(itemToEdit, JSON.stringify(myObj));
    }
    if (AttributeToEdit == "image") {
        var myObj = JSON.parse(localStorage.getItem(itemToEdit));
        myObj.source = newValue;
        localStorage.setItem(itemToEdit, JSON.stringify(myObj));
    }
}

function logOut() {
    localStorage.removeItem("isAdmin")
    window.location.href = "index.html";
}