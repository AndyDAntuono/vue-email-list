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
- modifico il vue.js per crea una proprità dentro alla sezione data per creare un array vuoto che chiamerò random_emails;
- creo il metodo generateEmails il cui compito è riempire l'array vuoto random_emails con un ciclo di 10 iterazioni, le quali vengono prodotte dall'hettp axios e l'end-point fornitomi dalla consegna;
- creo un bottone a cui conferisco la direttiva @click, la quale a sua volta richiama il metodo generateEmails
- nel div ul inserisco un v-if in cui specifico che la lunghezza dell'array random_emails DEVE essere equivalente a 10 indirizzi e-mail, altrimenti non appare proprio

PS: 
1 - so di aver compiuto dei passaggi in più rispetto a quanto richiesto della consegna. Infatti nelle versioni precedenti della repo avevo sviluppato tutti i file per generare UNA sola email
randomica. In seguito ho preferito commentare il codice superfluo anziche cancellarlo perché così facendo mi creo degli appunti per ripassi futuri;
2 - ho preferito includere subito il bonus nell'esecuzione base dell'esercizio poiché era semplice da realizzare;
3 - ho fatto un gran confuzione con la repo: all'inizio avevo iniziato a lavorare su pc portatile poiché c'era il rishchio di incappare in un blackout visto che intorno alla mia residenza c'erno dei lavori in corso sulla linea elettrica. Ma a causa di problemi tecnici, ho dovuto invece creare una nuova repo. intitolata vue-email-list-two, sul mio pc fisso. Ho quindi lavorato su vue-email-list-two per eseguire l'esercizio. Alla sua conclusione, ho cancellato la prima repo (divuta ormai obsoleta) su Github repo e ho rinominato "vue-email-list-two" in "vue-email-list".