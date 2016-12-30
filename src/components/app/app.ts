import * as Vue from 'vue';
import Component from "vue-class-component";
import * as template from './app.html';
import './app.scss';

@Component({
    template: `${template}`
})
export class AppComponent extends Vue{

}