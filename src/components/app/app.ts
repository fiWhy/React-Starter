import * as Vue from 'vue';
import Component from "vue-class-component";
import * as template from './app.html';
import './app.scss';

import { AppService, IAppService } from './services/app.service';

@Component({
    template: template.toString()
})
export class AppComponent extends Vue {
    public AppService: IAppService;
    public cards: any[];
    constructor() {
        super();
        this.AppService = AppService;
        this.cards = AppService.cards;
    }
}


