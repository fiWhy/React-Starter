/**
 * Created by Asus on 05.11.2016.
 */
var root = require('../helpers/root');
module.exports = (function() {
    var base = root('./'),
        src = root('src'),
        dist = root('dist'),
        devPort = 3000;

    return {
        base: base,
        src: src,
        dist: dist,
        devPort: devPort
    }
})();