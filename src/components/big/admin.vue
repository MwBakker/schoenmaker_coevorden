<template>
    <div> 
        <input type="text" name="username" v-model="input.username" placeholder="Admin naam"/>
        <input type="text" name="username" v-model="input.username" placeholder="Admin wachtwoord"/>
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    import { db } from "../../main";
    import firebase from "firebase";
    
    export default {
        name: 'info',
        data() {
            return {
                infoPageData: []
            };
        },
        firestore() {
            return {
                infoPageData: db.collection('Paragraphs').doc('info-page'),
            }
        },
        methods: {
            getOpeningTimes(day) {
                alert("test");
                let meuk = this.openingTimes; 
                var meuk2 = meuk[day]["opening"];
                //return this.openingTimes[day]["opening"] + "-" + this.openingTimes[day]["closing"]
            }
        }
    }
</script>