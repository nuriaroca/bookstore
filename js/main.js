Vue.component('book', {
    props: ['book'],
    template: ' <div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img v-bind:src="book.portada" class="smallImg"></div><div class="flip-card-back"><h2>{{book.titulo}}</h2><p class="info">{{book.descripcion}}</p><a v-bind:href="book.detalle" data-fancybox="galery"><button type="button" class="btn btn-info">Más info</button></a></div></div></div>'

})

var myVue = new Vue({
    el: "#app",
    data: {
        search: '',
        books: []
    },
    created() {
        console.log("done with vue.js...")
        this.getData()
    },
    methods: {
        getData() {
            fetch("https://api.myjson.com/bins/1h3vb3")
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error(response.statusText);
                }).then(function (json) {
                    myVue.books = json.books;

                }).catch(function (error) {
                    console.log("Request failed: " + error.message);
                });;
        },
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => {
                return book.titulo.toUpperCase().includes(this.search.toUpperCase())
            })
        }
    }
})

// SEARCH
// function myFunction() {
//     var searchValue, allBooks;

//     allBooks = document.getElementsByClassName("flip-card");
//     searchValue = document.getElementById("myInput").value.toUpperCase();

//     for (i = 0; i < allBooks.length; i++) {
//         var bookText = allBooks[i].innerText.toUpperCase();

//         if (bookText.includes(searchValue)) {
//             allBooks[i].style.display = "";
//         } else {
//             allBooks[i].style.display = "none";
//         }
//     }
// }