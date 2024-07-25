Esercizio di oggi: Vue Email List
nome repo: vue-email-list
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

/*SOLUZIONE*/
- creo prima una stuttura rigida nel file index.html
- nel vue.js creo nella sezione data l'oggetto email a cui do il valore null:
- creo il metodo makeTenRandomMails a cui associo l'http axios e a sua volta lo associo all'endpoint https://flynn.boolean.careers/exercises/api/random/mail. Ciò permette di creare un indirizzo email randomico;
- imposto un console log all'http e all'endpoint per assicurarmi che tutto fili liscio;
- stampo l'indirizzo email nel file html;