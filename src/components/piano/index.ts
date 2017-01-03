import * as Vue from 'vue';
import { PianoComponent } from './piano';

export const PianoInit = () => {
    Vue.component('piano', PianoComponent);
}