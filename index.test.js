const postcss = require('postcss');
const plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('Converts viewport height to px', () => {
    return run('a{ height: 100vh }', 'a{ height: 667px }', { });
});


it('Handles the unitSize option', () => {
    return run('a{ height: 100vh }', 'a{ height: 500px }', { unitSize: 5 });
});

it('Handles the decimals', () => {
    return run('a{ height: 10.1vh }', 'a{ height: 50.5px }', { unitSize: 5 });
});
