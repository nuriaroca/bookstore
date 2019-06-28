Vue.component('book', { //book es el nombre de mi "div"
    props: ['item'], //hay que igualar esta propiedad a la anterior (book) con el v-bind:item="book" para que la reconozca
    template: ' <div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img v-bind:src="item.portada" class="smallImg"></div><div class="flip-card-back"><h2>{{item.titulo}}</h2><p class="info">{{item.descripcion}}</p><a v-bind:href="item.detalle" data-fancybox="galery"><button type="button" class="btn btn-info">Más info</button></a></div></div></div>'
}) // el nombre de prop actua en template como un parametro en funciones

var myVue = new Vue({
    el: "#app",
    data: { //cajón donde guardar variables
        search: '', //definir search que esta en html (v-model="search")
        books: [],
        lang: [] //enlazar cb con data
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
            return this.langFilter.filter(book => {
                return book.titulo.toUpperCase().includes(this.search.toUpperCase()), book.descripcion.toUpperCase().includes(this.search.toUpperCase())
            })
        },
        langFilter() {
            return this.books.filter(book => this.lang.includes(book.idioma) || this.lang.length === 0);
        }
    }
})