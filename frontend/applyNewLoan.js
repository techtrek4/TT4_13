const main = Vue.createApp({

    // Data Properties
    data() {
        return {
            username: '',
            loan_type: '',
            loan_amount: 20000,
            loan_period: 12,
            interest_rate: 1.3
        }
    },

    created: function() {
        if (localStorage.getItem("id")) {
            this.username = localStorage.getItem("id")
        }
    },

    methods: {
        calcPayablePerMonth() {
            console.log("============== calcPayablePerMonth ==============")

        }
    }

})

main.mount("#main-box")