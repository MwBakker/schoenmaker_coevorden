<template>
   <div>
        <div @click="redirect('werkplaats')" class='maintainence-sub' >
            <div class='maintainence-sub-img'><img src="../../assets/imgs/icons/truck.png"/></div>
            <div class="maintainence-sub-text"><p><u>Reparatie via verzending</u></p></div> 
        </div>
        <hr>
        <div @click="redirect('producten/leder/onderhoud')" class='maintainence-sub'>
            <div class='maintainence-sub-text'><p><u>Onderhoudsproducten</u></p></div> 
            <div class='maintainence-sub-img'><img src="../../assets/imgs/icons/cream_black.png"/></div>
        </div> 
   </div>
</template>
<script>
    export default {

        methods: { 
            //                          //
            //  page-chagnge animation  //
            //                          //
            redirect(newPage) {
                this.change(this.$router, newPage, 10);
            },
            change(router, newPage, time) { 
            setTimeout(function() {
                    router.push({ path: '../../' + newPage })
                }, time);
            }
        }
    }
</script>