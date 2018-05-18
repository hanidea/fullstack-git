// src/index.js
//console.log('test webpack v4');
import Vue from 'vue';
import App from './pages/app.vue';

new Vue({
    el:"#root",
    render:h=>h(App)
});