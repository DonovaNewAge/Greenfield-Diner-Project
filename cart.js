window.onload = function () {
    var itemsArray = []
    var orderArray = []
    var total = 0
    var keys = Object.keys(localStorage) // Gets items from localStorage
    for (i = 0; i < keys.length; i++) { // Gets items from localStorage
        // console.log(keys[i])
        var itemToAdd = localStorage.getItem(keys[i]) // Gets items from localStorage
        var itemToAddParsed = JSON.parse(itemToAdd)
        // console.log(itemToAddParsed)
        if (itemToAddParsed.type == "admin" && itemToAddParsed.currentuser == true) { // Separates item that determines if admin
            $(".adminButtons").show(); // Separates item that determines if admin
            // Separates item that determines if admin
        }
        else if (itemToAddParsed.type == "item" && itemToAddParsed.inCart == true && itemToAddParsed.quantity > 0) { // Gets items for the menu

            if (itemsArray.indexOf(itemToAddParsed.name) > -1) {
                localStorage.removeItem(itemToAddParsed.name)

            }
            else {

                itemsArray.push(itemToAddParsed.name)


                cartItemBox = document.createElement("div")
                cartItemBox.classList.add("cart-items")

                cartImageBox = document.createElement("div")
                cartImageBox.classList.add("image-box")

                cartImage = document.createElement("img");

                cartImage.src = itemToAddParsed.source;

                cartImage.setAttribute("height", "120px")

                cartImageBox.appendChild(cartImage)

                var uppercaseImageName = keys[i].charAt(0).toUpperCase() + keys[i].slice(1)
                cartAboutBox = document.createElement("div")
                cartAboutBox.classList.add("about")

                aboutTitle = document.createElement("h1")

                aboutTitle.innerHTML = uppercaseImageName
                cartAboutBox.appendChild(aboutTitle)

                aboutSubtitle = document.createElement("h3")
                aboutSubtitle.innerHTML = itemToAddParsed.calories + "cal"

                cartAboutBox.appendChild(aboutSubtitle)


                cartCounterBox = document.createElement("div")
                cartCounterBox.classList.add("counter")

                var plusButton = document.createElement("button")
                plusButton.innerHTML = "+"
                cartCounterBox.appendChild(plusButton)
                plusButton.classList.add(uppercaseImageName)
                plusButton.classList.add("bttnn")
                $(plusButton).click(function () { // To add to cart
                    if (plusButton.classList.contains("bttnn")) {
                        var classToFind = this.classList.toString()
                        var classSliced = classToFind.substring(0, classToFind.length - 6);
                        var itemSliced = localStorage.getItem(classSliced)
                        var itemToUseParsed = JSON.parse(itemSliced)
                        // console.log(itemToUseParsed)
                        var quantity = itemToUseParsed.quantity
                        var newQuantity = quantity + 1
                        itemToUseParsed.quantity = newQuantity
                        localStorage.setItem(classSliced, JSON.stringify(itemToUseParsed))
                        window.location.href = "Cart.html"
                    }
                })

                var counter = document.createElement("div")
                counter.classList.add("count")
                counter.innerHTML = itemToAddParsed.quantity
                cartCounterBox.appendChild(counter)



                var minusButton = document.createElement("button")
                minusButton.classList.add(keys[i])
                minusButton.innerHTML = "-"
                cartCounterBox.appendChild(minusButton)
                minusButton.classList.add("bttnn")
                minusButton.onclick = function () { // To add to cart
                    if (minusButton.classList.contains("bttnn")) {
                        var classToFind = this.classList.toString()
                        var classSliced = classToFind.substring(0, classToFind.length - 6);
                        var itemSliced = localStorage.getItem(classSliced)
                        var itemParsed = JSON.parse(itemSliced)
                        // console.log(itemParsed)
                        var quantity = itemParsed.quantity
                        var newQuantity = quantity - 1
                        itemParsed.quantity = newQuantity
                        if (itemParsed.quantity < 1) {
                            itemParsed.inCart = false
                        }
                        localStorage.setItem(classSliced, JSON.stringify(itemParsed))
                        window.location.href = "Cart.html"
                    }
                }

                $("." + uppercaseImageName)

                var quantity = parseFloat(itemToAddParsed.quantity)

                console.log(quantity)

                var price = parseFloat(itemToAddParsed.price.replace("$", ""))

                console.log(price)

                var itemTotal = price * quantity

                total = total + itemTotal
                console.log(total)


                cartPricesBox = document.createElement("div")
                cartPricesBox.classList.add("prices")


                var amountContainer = document.createElement("div")

                var amountOfItem = document.createElement("div")
                amountOfItem.innerHTML = itemTotal.toFixed(2)
                amountOfItem.classList.add("amount")

                var save = document.createElement("a")
                save.innerHTML = "Save for Later"
                save.classList.add("save")

                var blankline = document.createElement("br")

                var remove = document.createElement("a")
                remove.innerHTML = "Remove"
                remove.classList.add(uppercaseImageName)
                remove.classList.add("btnr")
                remove.onclick = function () {
                    if (remove.classList.contains("btnr")) {
                        var classToFind = this.classList.toString()
                        var classSliced = classToFind.substring(0, classToFind.length - 5)
                        var itemSliced = localStorage.getItem(classSliced)
                        var itemToUseParsed = JSON.parse(itemSliced)
                        console.log(classSliced)
                        console.log(itemToUseParsed)
                        var newQuantity = 0
                        itemToUseParsed.quantity = newQuantity
                        itemToAddParsed.inCart = false
                        localStorage.setItem(classSliced, JSON.stringify(itemToUseParsed))
                        window.location.href = "Cart.html"
                    }
                }
                amountContainer.append(amountOfItem, save, blankline, remove)
                cartItemBox.append(cartImageBox, cartAboutBox, cartCounterBox, amountContainer)
                $(".cart-container").append(cartItemBox)

                orderArray.push(itemToAddParsed)


            }
        }
    }
}
    
 

if (total == 0) {
    var emptyCart = document.createElement("div")
    emptyCart.classList.add("emptyCartClass")
    emptyCart.innerHTML = "Your cart is empty."
    $(".cart-container").append(emptyCart)
}

var tax = (total * 0.06).toFixed(2)

var totalWithTax = (parseFloat(total) + parseFloat(tax)).toFixed(2)

var checkoutContainer = document.createElement("div")
checkoutContainer.classList.add("checkOut")

var labelsContainer = document.createElement("div")
labelsContainer.classList.add("priceLabels")

var label1 = document.createElement("p")
label1.innerHTML = "Subtotal:"

var label2 = document.createElement("p")
label2.innerHTML = "Tax:"

var label3 = document.createElement("p")
label3.innerHTML = "Total:"

var pricesContainer = document.createElement("div")
pricesContainer.classList.add("priceAmounts")

var amount1 = document.createElement("p")
amount1.innerHTML = " $" + total.toFixed(2)

var amount2 = document.createElement("p")
amount2.innerHTML = " $" + tax

var amount3 = document.createElement("p")
amount3.innerHTML = " $" + totalWithTax

$(".cart-container").append(checkoutContainer)

checkoutContainer.append(labelsContainer, pricesContainer)

labelsContainer.append(label1, label2, label3)

pricesContainer.append(amount1, amount2, amount3)

localStorage.setItem("order", JSON.stringify({
    "type": "order",
    "beforeTax": total,
    "tax": tax,
    "afterTax": totalWithTax,
    "orderStatus": "prePayment",
    "orderItems": orderArray
}))

var checkoutButton = document.createElement("button")
checkoutButton.innerHTML = "Check Out"
pricesContainer.append(checkoutButton)
checkoutButton.addEventListener("click", function () {
    window.location.href = "payment.html"
})
