<template>
    <div> 
        <div id='tables'>
            <table id='address-table' class='table-set'> 
                <tr>
                    <td>
                        <img id='address-icon' src="../../assets/imgs/icons/location.png">
                    </td>
                    <td id='address'>
                        <div>
                            <p>Bentheimerstraat 36</p>
                            <p>7741 JL, Coevorden</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img id='phone-icon' src="../../assets/imgs/icons/phone.png">
                    <td>
                        <div id='phone-nr'>
                            <p>0524 523 310</p>
                        </div>
                    </td>
                </tr>
            </table>
            <hr id='seperator'>
            <table id='table-opening-times' class='table-set'>
                <tr class="btn-category" v-for="(openingTime, i) in infoPageData['days'] " :key="i">
                    <td><p>{{ openingTime["day"] }}</p></td>
                    <td><p v-if="(openingTime['opening'] !== 'Gesloten')">{{ openingTime["opening"] }} - {{ openingTime["closing"] }}</p>
                        <p v-else>{{ openingTime["opening"] }}</p></td>
                </tr> 
            </table>
        </div>
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