import {IRouteProvider} from './contracts/route.provider';

export interface IRouteCombiner {
    setApplication(component: any, path?: string): void;
    setIndexRoute(component: any): void;
    addRoutes(routes: any): void;
}

class Combiner implements IRouteCombiner {
    private _routes: any = {childRoutes: {}, indexRoute: {}};
    private _routeProviders: IRouteProvider[] = [];
    setApplication(component: any, path: string = '/'): void {
        this._routes.path = path;
        this._routes.component = component;
    }
    
    setIndexRoute(component: any): void {
        this._routes.indexRoute.component = component;
    }

    addRoutes(routes: any): void {
        this._routes = Object.assign(this._routes, {
            childRoutes: {
                routes
            }});
    }

    registerRouteProvider(service): void {
        this._routeProviders.push(service);
    }

    get routes() {
        this._routeProviders.forEach(provider => {
            if(provider.boot)
                provider.boot();

                provider.register(this);
        });
        
        return this._routes;
    }
}

export const RouteCombiner = new Combiner;