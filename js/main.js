var data;

fetch("https://api.myjson.com/bins/1h3vb3")
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    }).then(function (json) {
        data = json.books;

        console.log(data)

        megafuncion(data);

    }).catch(function (error) {
        console.log("Request failed: " + error.message);
    });;

function megafuncion(data) {

    var container = document.getElementById("container");

    for (var i = 0; i < data.length; i++) {

        var link = document.createElement("a");
        var img = document.createElement("img");
        var divBook = document.createElement("div"); //div para cada libro
        divBook.setAttribute("class", "divBook");

        //mandinga para el flip: create divs and set attribute
        var flipCard = document.createElement("div");
        var flipCardInner = document.createElement("div");
        var flipCardFront = document.createElement("div");
        var flipCardBack = document.createElement("div");
        flipCard.setAttribute("class", "flip-card");
        flipCardInner.setAttribute("class", "flip-card-inner");
        flipCardFront.setAttribute("class", "flip-card-front");
        flipCardBack.setAttribute("class", "flip-card-back");


        //añadir tags a los elementos a and img
        link.href = data[i].detalle;
        link.setAttribute("data-fancybox", 'galery'); //setAttribute pq "data-fancy" no existe x fer-ho com la resta
        img.src = data[i].portada;
        img.setAttribute("class", "smallImg");

        //back book
        var title = document.createElement("h2");
        var description = document.createElement("p");
        var button = document.createElement("button");
        button.setAttribute("type", "button");

        var divInfo = document.createElement("div");
        divInfo.setAttribute("class", "info");

        title.innerHTML = data[i].titulo;
        description.innerHTML = data[i].descripcion;
        button.innerHTML = "Más info";

        flipCardFront.append(img); //portada plana
        divInfo.append(title, description, button);
        flipCardBack.append(link, divInfo); //link+img 3D
        flipCardInner.append(flipCardFront, flipCardBack);
        flipCard.append(flipCardInner);
        divBook.append(flipCard);
        container.append(divBook);
    }
}