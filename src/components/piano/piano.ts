import * as Vue from 'vue';
import * as template from './piano.html';
import Component from 'vue-class-component';


@Component({
    template: template.toString(),
    props: ['cards']
})
export class PianoComponent extends Vue {

}