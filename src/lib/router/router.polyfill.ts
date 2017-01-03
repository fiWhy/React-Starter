import * as VueRouter from 'vue-router';

class RouterPolyfill {
    private routes: VueRouter.RouteConfig[];
    constructor() {
        this.routes = [];
    }
    registerRoute(route: VueRouter.RouteConfig): void {
        this.routes.push(route);
    }

    createRouter(mode: VueRouter.RouterMode): VueRouter {
        let {routes} = this;
        return new VueRouter({ mode, routes });
    }
}

export const Router = new RouterPolyfill;