# PostCSS Starter (CSSNext Flavor)

The branch includes includes proposed CSS syntax to be considered for future
releases of CSS (CSS4). It uses [gulp-cssnext](https://github.com/cssnext/gulp-cssnext)
to transpile from CSS4 to CSS3. It's core uses [css-next](https://github.com/cssnext/cssnext).

The ideal scenario is that the css file within this branch will work in future browsers
without the need to be transpiled.

## Build from CSS4 to CSS3

```
gulp css
```

## [Available features](https://github.com/cssnext/cssnext#features)

* [custom properties & `var()`](http://www.w3.org/TR/css-variables/)
* [reduced `calc()`](https://github.com/MoOx/reduce-css-calc#readme)
* [custom media queries](http://dev.w3.org/csswg/mediaqueries/#custom-mq)
* [media queries ranges](http://dev.w3.org/csswg/mediaqueries/#mq-ranges)
* [custom selectors](http://dev.w3.org/csswg/css-extensions/#custom-selectors)
* [`color()`](http://dev.w3.org/csswg/css-color/#modifying-colors)
* [`hwb()`](http://dev.w3.org/csswg/css-color/#the-hwb-notation)
* [`gray()`](http://dev.w3.org/csswg/css-color/#grays)
* [#rrggbbaa](http://dev.w3.org/csswg/css-color/#hex-notation)
* [`rebeccapurple`](http://dev.w3.org/csswg/css-color/#valdef-color-rebeccapurple)
* [font-variant](http://dev.w3.org/csswg/css-fonts/#propdef-font-variant)
* [filter](http://www.w3.org/TR/filter-effects/)
* [`rem` units](http://www.w3.org/TR/css3-values/#rem-unit)
* [pseudo-elements](http://www.w3.org/TR/css3-selectors/#pseudo-elements)
* alpha colors for browser that don't understand [css 3 colors](http://www.w3.org/TR/css3-color/)