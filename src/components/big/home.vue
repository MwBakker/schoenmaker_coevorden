<template>
    <div> 
       <div id='intro-content'>
            <p class='upper-marged'>Goedendag bezoeker. Mijn naam is Henk Redder en als de 
                                Schoenmaker van Coevorden mag ik u verwelkomen op mijn site.</p>
            <div id='henk' ref='henk'>
                <div id='henk-img'><img src="../../assets/imgs/henk.jpg"></div>
                <div id='henk-intro'><p class='justified'> Met mijn kennis en jarenlange ervaring binnen het vak schoenmaker kan ik u helpen met 
                                                           alles wat te maken heeft met lederproducten, sleutels, voetzolen en naamborden.</p></div>
            </div>
            <p class='upper-marged'> Bij de vraag "Kunt u hier iets mee?" begint bij mij de uitdaging om voor deze persoon een passende oplossing te bieden.</p>
        </div>
        <div id='history-imgs'>
            <img id='history1' class='history-img' src="../../assets/imgs/overgrootVader.jpg">
            <img id='history2' class='history-img' src="../../assets/imgs/huidig.jpg">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        mounted() {
           // this.scrolldown();
        },
        methods: { 
            scrolldown() { 
               document.getElementById("body").animate({
    scrollTop: window.scrollTo(0, 500)
});
                /*
                let bodyEl = this.$refs.home; 
                alert(bodyEl); 
                alert(this.$refs.henk);
                bodyEl.animate({
                    scrollTop: $(this.$refs.henk).offset().top}, 'slow');
                    */
            },
            getDayPart() { 
                let houres = getHours();
                alert(houres);
                switch(houres) {
                    case 1:
                        this.tempArray[1] = timeString; break;
                    case 2:
                        this.tempArray[2] = timeString; break;
                    default:
                        "morgen"
                }
            }
        }
    }
</script>