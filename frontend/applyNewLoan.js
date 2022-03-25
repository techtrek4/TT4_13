Vue.createApp({

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

    created() {
        console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOO")
        if (localStorage.getItem("CustomerId")) {
            this.username = localStorage.getItem("CustomerId") // change accordingly afterwards
        }
    },

    methods: {
        calcPayablePerMonth() {
            console.log("============== calcPayablePerMonth ==============")
            let final_amt = (this.loan_amount * ((this.interest_rate / 100)/12)) / (this.loan_period * 12)


        },

        addNewLoan() {
            console.log("**** [START] call addNewLoan() *****")
            
            let url = ""
            axios.get(url)
            .then(response => {
                this.buildings = response.data.records
            })
            .catch(error => { 
                console.log(error.message)
            })  
        }
    }

}).mount("#main-box")