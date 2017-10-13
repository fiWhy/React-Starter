import {IRouteProvider} from './contracts/route.provider';
import { RouteProps } from "react-router-dom";

export interface IRouteCombiner {
    addRoutes(routes: RouteProps[]): void;
    addRoute(route: RouteProps): void;
}

class Combiner implements IRouteCombiner {
    private _routes: RouteProps[] = [];
    private _routeProviders: IRouteProvider[] = [];

    addRoutes(routes: RouteProps[]): void {
        this._routes = [...this._routes, ...routes];
    }

    addRoute(route: RouteProps): void {
        this._routes = [...this._routes, route];
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