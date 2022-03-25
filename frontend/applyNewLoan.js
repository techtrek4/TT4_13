

const main = Vue.createApp({

    // Data Properties
    data() {
        return {
            username: '',
            loan_type: '',
            loan_amount: 20000,
            loan_period: 2,
            interest_rate: 2.5
        }
    },

    created: function() {
        if (localStorage.getItem("id")) {
            this.username = localStorage.getItem("id") // change accordingly afterwards
        }
    },

    methods: {
        calcPayablePerMonth() {
            console.log("============== calcPayablePerMonth ==============")
            let final_amt = (this.loan_amount * (this.interest_rate / 100)) / (this.loan_period * 12)

        }
    }

})

main.mount("#main-box")