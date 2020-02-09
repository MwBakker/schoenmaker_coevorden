<template>
  <div id="app">
    <div id='header'>
      <nav>
		    <ul id='mainUL'>
          <li id='main-logo' class='navli' @click="redirect('home')" ><div class='li-el'><img class='navli-icon' src="../../assets/imgs/logo.png"></div></li>
          <li class='navli'><div class='li-el'><img class='navli-icon' src="../../assets/imgs/icons/leather.png"></div>
            <ul>
              <li v-if="getScreenWidth() < 800"><div class='sub-menu-item' @click="redirect('producten/leder/onderhoud-sub')"><img class='navli-icon' src="../../assets/imgs/icons/leatherCutterIcon.png"><p>Onderhoud</p></div></li>
              <li v-else><div class='sub-menu-item'><img src="../../assets/imgs/icons/leatherCutterIcon.png"><p>Onderhoud</p></div>
                <ul>
                  <li @click="redirect('werkplaats')"><div class='sub-menu-item'><img src="../../assets/imgs/icons/package2.png"><p>Reparatie via verzending</p></div></li>
                  <li @click="redirect('producten/leder/onderhoud')"><div class='sub-menu-item'><img src="../../assets/imgs/icons/cream.png"><p>Onderhoudsproducten</p></div></li>
                </ul>
              </li>
              <li @click="redirect('producten/leder/riemen')"><div class='sub-menu-item'><img class='navli-icon' src="../../assets/imgs/icons/belt.png"><p>Riemen</p></div></li>
            </ul>
          </li>
           <li class='navli'><div class='li-el'><img class='navli-icon' src="../../assets/imgs/icons/key.png"></div>
            <ul>
              <li @click="redirect('producten/sleutels/reguliere_sleutels')"><div class='sub-menu-item'><img src="../../assets/imgs/icons/keys.png"><p>Reguliere sleutels</p></div>
              <li @click="redirect('producten/sleutels/autosleutels')"><div class='sub-menu-item'><img src="../../assets/imgs/icons/car-key.png"><p>Autosleutels</p></div></li>
            </ul>
          </li>
          <li id='navli-nameplate' class='navli'><div class='li-el' @click="redirect('producten/naamplaten')"><img class='navli-icon' src="../../assets/imgs/icons/sign.png"></div></li>
          <li class='navli' @click="redirect('producten/voetzolen')"><div class='li-el'><img class='navli-icon' src="../../assets/imgs/icons/soles.png"></div></li>
          <li class='navli' @click="redirect('info')"><div class='li-el'><img class='navli-icon' src="../../assets/imgs/icons/info.png"></div></li>
          <li id='quotes'><p id='q' ref="quote">{{ quotes[currentIndex] }}</p></li>
		    </ul>
      </nav>
      <hr id='nav-hr'>
      <div id='home-img' ref="mainImg"/>
    </div>
      <hr ref='contentseperator'>
    <transition name="fade">
      <div ref='contedsdfnts'>
        <router-view id='content'/>
      </div>
    </transition>
    <div id='footer'>
      <hr>
      <div id='logos'>
         <a href='https://www.facebook.com/deschoenmakercoevorden/'><img id='FBFollow' src='../../assets/imgs/icons/facebookFollow.png'/></a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',

  data() {
    return {
        quotes: [ '"De drager kan het beste zeggen waar de schoen wringt."', 
                  '"Men moet geen oude schoenen wegwerpen voordat men nieuwe heeft."', 
                  '"Over de hoge schoenen gaan."',
                  '"Men dient in iemands schoenen te treden voor hij oordeelt."',  
                  '"De stoute schoenen aantrekken."', 
                  '"Met lood in de schoenen lopen."',
                  '"Lap het leven niet aan uw zolen"',
                  '"Het lopen is voor de zotten niet gemaakt."',
                  '"Het hart in de schoenen zinken."',
                  '"Denken met kousen en schoenen in de hemel te komen."',
                  '"Iets in andermans schoenen schuiven."',
                  '"Het land in iemand in zijn schoenen hebben."',
                  '"Voor iemand de zolen uit zijn schoenen lopen."',
                  '"Recht in zijn schoenen staan."' ],
        currentIndex: 0
    };
  },
  mounted() {
    this.updateQuote();
  },
  methods: { 
    //                          //
    //  page-chagnge animation  //
    //                          //
    redirect(newPage) { 
      let currentPage = this.$router.currentRoute.path.substring(1).toLowerCase(); 
      if (currentPage !== newPage) { 
        let mainImg = this.$refs.mainImg;
        if (currentPage == "home") { 
          // zoom
          mainImg.className = 'zoom-in';
          this.removeMainImg(mainImg, newPage, 1600)
        } else { 
          // no zoom
          this.removeMainImg(mainImg, newPage, 500);
        }
      }   
    },
    removeMainImg(mainImg, newPage, fadeOutTime){ 
      setTimeout(function() {
        mainImg.className = 'fade-out';
      }, fadeOutTime);
      this.addNewImg(mainImg, newPage, (fadeOutTime * 1.4));
    },
    addNewImg(mainImg, newPage, fadeInTime) {
      setTimeout(function() {
        let newPageArr = newPage.split('/');
        mainImg.id =  newPageArr[newPageArr.length - 1] + '-img';
        mainImg.className = 'fade-in';
      }, fadeInTime);
      let router = this.$router;
      let hrLine = this.$refs.contentseperator;
      setTimeout(function() {
        router.push({ path: '../../' + newPage })
        var VueScrollTo = require('vue-scrollto');
        VueScrollTo.scrollTo(hrLine, 50)
      }, fadeInTime + 300);
    },
    getScreenWidth() {
      return screen.width;
    },
    //                          //
    // Everything quote related // 
    //                          //
    updateQuote() {
      let el = this.$refs.quote;
      setTimeout(function() {
        el.className = 'fade-out';
      }, 3000);
      this.randomizer();
      el.className = 'fade-in';
      setTimeout(this.updateQuote, 4000);
    },
    // sets index to a new random value
    randomizer() {
      let randomNr = Math.floor((Math.random() * 10) + 1);
      if (randomNr == this.currentIndex) {
        this.randomizer(); 
      } else { 
        this.currentIndex = randomNr;
      }
    }
  }
}
</script>

<style lang="scss">
    @import '../../assets/scss/main.scss';
</style>
