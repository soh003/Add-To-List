// Opretter en ny Vue applikation
const app = Vue.createApp({
    // Definerer applikationens data, som kan tilgås og manipuleres i HTML-templaten
    data(){
        return{
            intro:'Tilføj personer til liste',

            navn: null,
            liste: [],
            id: null
        }
    }, 
    // Definerer metoder, som kan kaldes fra templaten (f.eks. når man klikker på en knap)
    methods: {
        addMethod(){
            this.liste.push({navn:this.navn, id:this.id})
            this.navn = null;
            this.id = null;
        },
        deleteMethod(personId){
            this.liste=this.liste.filter(person=> person.id !== personId);
        },
    },
    // computed properties kan bruges til beregninger eller dynamiske værdier baseret på andre data
    computed:{
        myComputed(){
            return''
        },
    }


})