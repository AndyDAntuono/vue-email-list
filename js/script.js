const {createApp} = Vue;

createApp({
    data() {
        return {
            random_emails: []
            /*
            email: null
            */
        }
    },
    /*
    created() {
        this.makeTenRandomMails();
        
    },
    */
    methods: {
        /*
        makeTenRandomMails() {
            //axios è l'http e 'https://flynn.boolean.careers/exercises/api/random/mail' è l'endpoint
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                //i console log ci restituiscono il risultato, in questo caso la generazione di UNA email randomica
                console.log(response.data);
                console.log(response.data.response);
                //scrivendo come segue faccio apparire l'email randomica anche nel file html
                this.email = response.data.response
            });
        }
        */
       generateEmails() {
        this.random_emails = [];
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                this.random_emails.push(response.data.response)
            });
        }
       }
    }
}).mount('#app');