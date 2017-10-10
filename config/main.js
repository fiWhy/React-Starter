/**
 * Created by Asus on 05.11.2016.
 */
var root = require('../helpers/root');
module.exports = (function() {
    var base = root('./'),
        src = root('src'),
        dist = root('dist'),
        html = root("src", "index.html"),
        devPort = 3000,
        extensions = ['.js', '.ts', '.tsx', '.html', 'scss'];

    return {
        base: base,
        src: src,
        dist: dist,
        devPort: devPort,
        extensions: extensions,
        html: html
    }
})();