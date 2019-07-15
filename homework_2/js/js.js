var spisocPocupok = new Array();

function display(product) {
    return product.name + "," + product.quantity + "," + product.buy;
}


spisocPocupok[0] = product = {name: "Moloko", quantity: 3, buy: "Buy"};
spisocPocupok[1] = product = {name: "Bread", quantity: 2, buy: "Buy"};
spisocPocupok[2] = product = {name: "Water", quantity: 5, buy: "Not buy"};
spisocPocupok[3] = product = {name: "Coca-Cola", quantity: 5, buy: "buy"};
spisocPocupok[4] = product = {name: "Pepsi", quantity: 5, buy: "Not buy"};

function print(spisocPocupok) {
    for (var i = 0; i < spisocPocupok.length; i++)
        document.write(display(spisocPocupok[i]) + "<br/>");
}
document.write("<br>"+"Задание 1 часть 1"+"<br>");
print(spisocPocupok);

function addProduct(product, array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].name === product.name) {
            if (array[i].buy === "Buy" && product.buy === "Buy") {
                array[i].quantity = array[i].quantity + product.quantity;
            } else if (array[i].buy === "Not buy" && product.buy === "Buy") {
                array[i].quantity = product.quantity;
                array[i].buy = product.buy;
            } else if (array[i].buy === "Not buy" && product.buy === "Not buy") {
                array[i].quantity = product.quantity;
            }
        } else {
            count = count + 1;
        }
    }
    if (count === array.length) {
        array.push(product);
    }
}


addProduct(product = {name: "Pepsi", quantity: 2, buy: "Buy"}, spisocPocupok);
addProduct(product = {name: "Mirinda", quantity: 4, buy: "Buy"}, spisocPocupok);
addProduct(product = {name: "Fanta", quantity: 1, buy: "Not buy"}, spisocPocupok);

document.write("<br>"+"Задание 1 часть 2"+"<br>");
print(spisocPocupok);


function buyProduct(name) {
    for (var i = 0; i < spisocPocupok.length; i++) {
        if (spisocPocupok[i].name === name) {
            spisocPocupok[i].buy = "Buy";
        }
    }
}

buyProduct("Water");

document.write("<br>"+"Задание 1 часть 3"+"<br>");
print(spisocPocupok);