const app = Vue.createApp({
    //data, functions, template
    data() {
        return {
            url: 'https://www.amazon.com/books',
            showBooks: true,
            books: [
                {
                    title: 'name of the wind',
                    author: 'patrick rothfuss',
                    img: './assets/1.jpg',
                    isFav: false
                },
                {
                    title: 'the way of kings',
                    author: 'brandon sanderson',
                    img: './assets/2.jpg',
                    isFav: false

                },
                {
                    title: 'final empire',
                    author: 'brandon sanderson',
                    img: './assets/3.jpg',
                    isFav: false

                },
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleIsFav(book) {
            book.isFav = !book.isFav
        }
    },
    // computed: {
    //     filteredBooks() {
    //         return this.books.filter((book) => book.isFav)
    //     }
    // }

})

app.mount('#app')