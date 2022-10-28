/*
Rifare l'esercizio della to do list argomento dell to-do list a piacere :faccia_che_festeggia:.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)*/

//const {createApp} = Vue;
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data(){
        return {
            newtask:'',
            hasError: false,
            listaSpesa:[
                'Task 1',
                'Task 2',
                'Task 3'
            ]
        }
    },

    methods:{
        addTask(){
            if(this.newtask.lnegth >=3){
               this.listaSpesa.unshift(this.newtask);
               this.hasError = false;
            } else{
                this.hasError = true;
            }
            this.newtask = '';
        },
        removeTask(){
            this.listaSpesa.splice(i, 1);
        }
    },

    computed:{

    },

    mounted(){
        console.log('in mounted');
    },
    created(){
        console.log('in created');
        console.log(this.surname);
    },
    beforeCreate(){
        console.log('in before created');
        console.log(this.surname);
    },
    beforeUpdate(){
        console.log('in before update');
    },
    updated(){
        console.log('in update');
    }
}).mount('#app')
