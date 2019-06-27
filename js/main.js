var myVue = new Vue({
    el: "#app",
    data: {
        books: []
    },
    created() {
        this.megafuncion()
    },
    methods: {
        megafuncion() {
            fetch("https://api.myjson.com/bins/1h3vb3")
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error(response.statusText);
                }).then(function (json) {
                    myVue.books = json.books;

                    console.log(myVue.books)

                    // megafuncion(books);

                }).catch(function (error) {
                    console.log("Request failed: " + error.message);
                });;
        },
    }
})




// // SEARCH
// function myFunction() {
//     var searchValue, allBooks;

//     allBooks = document.getElementsByClassName("divBook");
//     searchValue = document.getElementById("myInput").value.toUpperCase();

//     for (i = 0; i < allBooks.length; i++) {
//         var bookText = allBooks[i].innerText.toUpperCase(); //tot el text de cada llibre en mayuscules

//         if (bookText.includes(searchValue)) {
//             allBooks[i].style.display = ""; //pot set he de mostrar tot el box, no només h2
//         } else {
//             allBooks[i].style.display = "none"; //amagar tot el box, no només h2????
//         }
//     }
// }