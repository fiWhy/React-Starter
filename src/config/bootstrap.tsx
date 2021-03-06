import {ReducerCombiner} from '../utils/reducer/reducer.combiner';
import {RouteCombiner} from '../utils/router/route.combiner';

import HomeReducerProvider from '../components/home/providers/reducer.provider';
import HomeRouteProvider from '../components/home/providers/route.provider';


import DashboardReducerProvider from '../components/dashboard/providers/reducer.provider';
import DashboardRouteProvider from '../components/dashboard/providers/route.provider';

export const mainConfig = () => {
    return {
        apiUrl: `http://example.com/api`
    }
}

export const registerReducers = () => {
    ReducerCombiner.registerReducerProvider(DashboardReducerProvider);
    ReducerCombiner.registerReducerProvider(HomeReducerProvider);
}

export const registerRoutes = () => {
    RouteCombiner.registerRouteProvider(HomeRouteProvider);
    RouteCombiner.registerRouteProvider(DashboardRouteProvider);
}
