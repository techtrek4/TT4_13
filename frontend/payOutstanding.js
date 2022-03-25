Vue.createApp({
    data() {
        return {
            username: '',
            all_loans: ['mobile loan'],
            selected_loan: '',
            amount_to_pay: '',
            loan_id: 1
        }
    },

    created() {
        console.log("============== payOutstanding ================")
            
        let url = ""
        axios.get(url)
        .then(response => {
            this.all_loans = response.data.records
        })
        .catch(error => { 
            console.log(error.message)
        })  
    },

    methods: {
        getLoanAmount() {
            console.log("============== getLoanAmount ================")
            
            let url = ""
            
            axios.get(url, {
                params: {
                    booking_id : loan_id
                }
            })
            .then(response => {
                this.all_loans = response.data.records
            })
            .catch(error => { 
                console.log(error.message)
            })  
        }
    }

}).mount("#main-box")