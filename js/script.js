const {createApp} = Vue;

createApp({
    data() {
        return {
            email: null
            /*
            emails: [
                {
                    //1
                    text: "volareohoh@gmail.com"
                },
                {
                    //2
                    text: "javon33@gmail.com"
                },
                {
                    //3
                    text: "gunner97@outlook.com"
                },
                {
                    //4
                    text: "Kamren82@outlook.com"
                },
                {
                    //5
                    text: "Ephraim_Dickens-Abernathy31@yahoo.com"
                },
                {
                    //6
                    text: "Roxane14@yahoo.com"
                },
                {
                    //7
                    text: "Laney_Dicki96@aol.com"
                },
                {
                    //8
                    text: "Magnus.Hyatt19@aol.com"
                },
                {
                    //9
                    text: "Eulah.Beahan@yandex.com"
                },
                {
                    //10
                    text: "Missouri_Paucek@yandex.com"
                },
                
            ],
            */
        }
    },
    created() {
        this.makeTenRandomMails();
    },
    methods: {
        makeTenRandomMails() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                //i console log ci restituiscono il risultato, in questo caso la generazione di UNA email randomica
                console.log(response.data);
                console.log(response.data.response);
                //this.email = response.
            });
        }
    }
}).mount('#app');