import Vue from 'vue';
import App from './app.vue';

import './assets/styles/test.css';
import './assets/images/bg.jpeg';
import './assets/styles/test-stylus.styl';


new Vue({
    el:"body",
    render:h=>h(App)
});