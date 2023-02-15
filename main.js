const app = Vue.createApp({

    data() {
        return {
            products: [{
                name: "popy",
                price: 120
            },
            {
                name: "kj",
                price: 100
            }
            ]
        }
    },
    methods: {

    },
})

app.mount("#contact") 
