import * as VueRouter from 'vue-router';

export class RouterPolyfill<T> {
    private routes: VueRouter.Route[];
    constructor() {
        this.routes = [];
    }
    registerRoute(route: VueRouter.Route): void {
        this.routes.push(route);
    }

    createRouter(): VueRouter {
        let {routes} = this;
        return new VueRouter({ routes });
    }
}