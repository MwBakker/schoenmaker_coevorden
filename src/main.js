// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/big/App'
import router from './router'
import VueFirestore from 'vue-firestore';
import { firebase } from "@firebase/app";
import "@firebase/firestore";

Vue.config.productionTip = false;

Vue.use(VueFirestore);

firebase.initializeApp({
    apiKey: "AIzaSyCtj9PxhnY4Z1g-nYQ2xy0ziLkhg-fjkQc",
    authDomain: "schoenmaker-coevorden.firebaseapp.com",
    databaseURL: "https://schoenmaker-coevorden.firebaseio.com",
    projectId: "schoenmaker-coevorden",
    storageBucket: "schoenmaker-coevorden.appspot.com",
    messagingSenderId: "538853486281"
})

const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
};
firestore.settings(settings);

export const db = firestore;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

