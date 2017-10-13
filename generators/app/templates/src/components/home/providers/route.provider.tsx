import {IRouteProvider} from '../../../utils/router/contracts/route.provider';
import {IRouteCombiner} from '../../../utils/router/route.combiner';
import Home from "../index";

class HomeRouteProvider implements IRouteProvider {
    public register(routeCombiner: IRouteCombiner) {
        routeCombiner.addRoute({
            path: '/home',
            component: Home,
        });
    }
}

const _HomeRouteProvider = new HomeRouteProvider;

export default _HomeRouteProvider;