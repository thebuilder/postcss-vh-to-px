# Postcss-vh-to-px [![Build Status](https://travis-ci.org/thebuilder/postcss-vh-to-px.svg?branch=master)](https://travis-ci.org/thebuilder/postcss-vh-to-px)

[PostCSS] plugin that converts all your references to `vh` units, into a static `px` value.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/postcss-vh-to-px.svg
[ci]:      https://travis-ci.org/postcss-vh-to-px

```css
.foo {
    /* Input example */
    min-height: 100vh;
}
```

```css
.foo {
  /* Output example */
  min-height: 667px;
}
```

## Usage

```js
postcss([ require('postcss-vh-to-px') ])
```

# Options

### `unitSize`

- Type: `number`
- Default: `6.67`

You can define the unit size, that's used to calculate the pixel value.
The viewport height value is multiplied by this amount, to get the pixel value.


See [PostCSS] docs for examples for your environment.

## License

MIT - Daniel Schmidt
