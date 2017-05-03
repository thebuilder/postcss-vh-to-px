# Postcss-vh-to-px [![Build Status](https://travis-ci.org/thebuilder/postcss-vh-to-px.svg?branch=master)](https://travis-ci.org/thebuilder/postcss-vh-to-px)

[![Greenkeeper badge](https://badges.greenkeeper.io/thebuilder/postcss-vh-to-px.svg)](https://greenkeeper.io/)

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

## Why

The reason this plugin exists, is to allow our CSS files to work inside the EPIServer CMS system. It has an [issue](http://world.episerver.com/support/Bug-list/Bug/?bugId=CMS-1503), that breaks the view if the css contains `vh` units.
It uses an iframe that gets resized to fit the height of all its content. But css viewport units are based on the size of the containing viewport, which in this case is the iframe. It would go into an infinite loop where it keeps resizing itself.

Converting all our `vh` units to `px` inside the CMS fixes the issue, while allowing us to still use `vh` in our css.


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
