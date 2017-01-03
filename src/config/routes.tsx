import {RouteCombiner} from '../utils/router/route.combiner';

import App from '../components/app';
import Home from '../components/home';

RouteCombiner.setApplication(App);
RouteCombiner.setIndexRoute(Home);

let routes = RouteCombiner.routes;
export default routes;