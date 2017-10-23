import { IRouteProvider } from '../../../utils/router/contracts/route.provider';
import { IRouteCombiner } from '../../../utils/router/route.combiner';
import <%= componentName %> from "../index";

class <%= componentName %>RouteProvider implements IRouteProvider {
    public register(routeCombiner: IRouteCombiner) {
        routeCombiner.addRoute({
            path: '/<%= componentNameLower %>', 
            component: <%= componentName %>,
            exact: true,
        });
    }
}

const _<%= componentName %>RouteProvider = new <%= componentName %>RouteProvider;

export default _<%= componentName %>RouteProvider;