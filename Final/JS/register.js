var productsInventory = [];

function register() {
    var modelName = document.getElementById("modelName_input").value;
    var modelBrand = document.getElementById("modelBrand_input").value;
    var price = document.getElementById("price_input").value;

    /* Nan is not a numbere 
Is method that return true if the value is number

this method converts the value to a number before validade
*/
    if (isNaN(price) || price == "") {
        alert("Please, enter the Price!");
        document.getElementById("price_input").focus();
        document.getElementById("price_input").value = "";
    } else if (!isNaN(modelName) || price == "") {
        alert("Please, enter the Product Name!");
        document.getElementById("modelName_input").focus();
        document.getElementById("modelName_input").value = "";
    } else if (!isNaN(modelBrand) || price == "") {
        alert("Please, enter the Product Brand!");
        document.getElementById("modelBrand_input").focus();
        document.getElementById("modelBrand_input").value = "";
    } else {
        alert("All data is correct!");
        productsInventory.push({
            modelName: modelName,
            modelBrand: modelBrand,
            price: price
        });
        obtainData();
        setCookies();
        window.open("confirmation.html");
        clean();
    }
}

function clean() {
    document.getElementById("modelName_input").value = "";
    document.getElementById("modelBrand_input").value = "";
    document.getElementById("price_input").value = "";
    document.getElementById("modelName_input").focus();
}

function obtainData() {
    var table = document.getElementById("table");

    table.innerHTML = "";

    for (var i = 0; i < productsInventory.length; i++) {
        //add the row
        var makeRow = table.insertRow(-1); //add the content at the end;

        //add the colums
        var makeColumn1 = makeRow.insertCell(0);
        var makeColumn2 = makeRow.insertCell(1);
        var makeColumn3 = makeRow.insertCell(2);
        var makeColumn4 = makeRow.insertCell(3);
        var makeColumn5 = makeRow.insertCell(4);

        //add the CONTENT OF THE ARRAY to the colums????
        makeColumn1.innerHTML = i + 1;
        makeColumn2.innerHTML = productsInventory[i].modelName;
        makeColumn3.innerHTML = productsInventory[i].modelBrand;
        makeColumn4.innerHTML = productsInventory[i].price;
        makeColumn5.innerHTML =
            "<button class = 'buttons btn btn-outline-success' onclick ='selection(" + i + ")'> Select </button>";
    }
}

function setCookies() {
    var id = productsInventory.length;
    var modelName = document.getElementById("modelName_input").value;
    var modelBrand = document.getElementById("modelBrand_input").value;
    var price = document.getElementById("price_input").value;

    document.cookie =
        "id_output=" +
        id +
        "|modelName_output=" +
        modelName +
        "|modelBrand_output=" +
        modelBrand +
        "|price_output=" +
        price;
}

function selection(i) {
    document.getElementById("id").value = i;
    document.getElementById("modelName_input").value = productsInventory[i].modelName;
    document.getElementById("modelBrand_input").value = productsInventory[i].modelBrand;
    document.getElementById("price_input").value = productsInventory[i].price;

    document.getElementById("register").style.display = "none";
    document.getElementById("save").style.display = "inline-block";
    document.getElementById("remove").style.display = "inline-block";
    document.getElementById("cancel").style.display = "inline-block";
}

function cancelbutton() {
    clean();

    document.getElementById("register").style.display = "inline-block";
    document.getElementById("save").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("cancel").style.display = "none";
}

function remove() {
    var id = document.getElementById("id").value;

    productsInventory.splice(id, 1);
    clean();
    obtainData();

    document.getElementById("register").style.display = "inline-block";
    document.getElementById("save").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("cancel").style.display = "none";
}

function savebutton() {
    var id = document.getElementById("id").value;
    var modelName = document.getElementById("modelName_input").value;
    var modelBrand = document.getElementById("modelBrand_input").value;
    var price = document.getElementById("price_input").value;

    if (isNaN(price) || price == "") {
        alert("Please, enter the Price!");
        document.getElementById("price_input").focus();
        document.getElementById("price_input").value = "";
    } else if (!isNaN(modelName) || price == "") {
        alert("Please, enter the Product Name!");
        document.getElementById("modelName_input").focus();
        document.getElementById("modelName_input").value = "";
    } else if (!isNaN(modelBrand) || price == "") {
        alert("Please, enter the Product Brand!");
        document.getElementById("modelBrand_input").focus();
        document.getElementById("modelBrand_input").value = "";
    } else {
        alert("All data is correct!");
        productsInventory.splice(id, 1, {
            modelName: modelName,
            modelBrand: modelBrand,
            price: price
        });
        obtainData();
        clean();
    }

    document.getElementById("register").style.display = "inline-block";
    document.getElementById("save").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("cancel").style.display = "none";
}
