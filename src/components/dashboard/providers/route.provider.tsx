import {IRouteProvider} from '../../../utils/router/contracts/route.provider';
import {IRouteCombiner} from '../../../utils/router/route.combiner';
import Dashboard from "../index";

class DashboardRouteProvider implements IRouteProvider {
    public register(routeCombiner: IRouteCombiner) {
        routeCombiner.addRoute({
            path: '/', 
            component: Dashboard,
            exact: true,
        });
    }
}

const _DashboardRouteProvider = new DashboardRouteProvider;

export default _DashboardRouteProvider;