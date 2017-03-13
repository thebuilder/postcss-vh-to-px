const postcss = require('postcss');
const defaults = {
    unitSize: 6.67
};

module.exports = postcss.plugin('PLUGIN_NAME', (opts) => {
    const options = Object.assign({}, defaults, opts);

    return (root) => {
        root.replaceValues(/\d+vh/g, { fast: 'vh' }, val => {
            return options.unitSize * parseInt(val) + 'px';
        });
    };
});
