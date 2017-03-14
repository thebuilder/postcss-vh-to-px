const postcss = require('postcss');
const defaults = {
    unitSize: 6.67
};

module.exports = postcss.plugin('postcss-vh-to-px', (opts) => {
    const options = Object.assign({}, defaults, opts);

    return (root) => {
        root.replaceValues(/[\d.]+vh/g, { fast: 'vh' }, val => {
            return options.unitSize * parseFloat(val) + 'px';
        });
    };
});
