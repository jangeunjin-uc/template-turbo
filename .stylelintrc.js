module.exports = {
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'selector-class-pattern': null,
    'color-hex-alpha': 'never',
    'color-named': 'never',
    'function-url-no-scheme-relative': true,
    'length-zero-no-unit': true,
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'color-hex-length': 'short',
    'font-weight-notation': 'numeric',
    'import-notation': 'url',
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'selector-not-notation': 'complex',
    'selector-pseudo-element-colon-notation': 'double',
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'declaration-block-no-redundant-longhand-properties': [true, { ignoreShorthands: ['/grid/'] }],
    'scss/at-rule-no-unknown': true,
    'order/properties-order': [
      'content',
      'quotes',
      'display',
      'visibility',
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'align-content',
      'align-items',
      'align-self',
      'justify-content',
      'order',
      'grid',
      'grid-after',
      'grid-area',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid-auto-rows',
      'grid-before',
      'grid-column',
      'grid-column-end',
      'grid-column-gap',
      'grid-column-start',
      'grid-columns',
      'grid-end',
      'grid-gap',
      'grid-row',
      'grid-row-end',
      'grid-row-gap',
      'grid-row-start',
      'grid-rows',
      'grid-start',
      'grid-template',
      'grid-template-areas',
      'grid-template-columns',
      'grid-template-rows',
      'position',
      'z-index',
      'top',
      'right',
      'bottom',
      'left',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'table-layout',
      'empty-cells',
      'caption-side',
      'border-spacing',
      'border-collapse',
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      'columns',
      'column-gap',
      'column-fill',
      'column-rule',
      'column-span',
      'column-count',
      'column-width',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'block-size',
      'min-block-size',
      'max-block-size',
      'inline-size',
      'min-inline-size',
      'max-inline-size',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-block',
      'margin-block-start',
      'margin-block-end',
      'margin-inline',
      'margin-inline-start',
      'margin-inline-end',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'padding-block',
      'padding-block-start',
      'padding-block-end',
      'padding-inline',
      'padding-inline-start',
      'padding-inline-end',
      'box-sizing',
      'clip',
      'zoom',
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',
      'stroke-width',
      'stroke-linecap',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke',
      'background',
      'background-attachment',
      'background-clip',
      'background-color',
      'background-image',
      'background-repeat',
      'background-position',
      'background-size',
      'box-shadow',
      'fill',
      'opacity',
      'list-style',
      'text-align',
      'text-align-last',
      'line-height',
      'vertical-align',
      'color',
      'font',
      'font-family',
      'font-size',
      'font-size-adjust',
      'font-smoothing',
      'font-stretch',
      'font-style',
      'font-variant',
      'font-weight',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'letter-spacing',
      'text-decoration',
      'text-decoration-color',
      'text-decoration-line',
      'text-decoration-style',
      'text-indent',
      'text-justify',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      'text-rendering',
      'text-outline',
      'text-shadow',
      'text-transform',
      'text-wrap',
      'word-wrap',
      'word-break',
      'white-space',
      'word-spacing',
      'hyphens',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-style',
      'text-emphasis-position',
      'src',
      'tab-size',
      'counter-reset',
      'counter-increment',
      'resize',
      'cursor',
      'pointer-events',
      'speak',
      'user-select',
      'nav-index',
      'nav-up',
      'nav-right',
      'nav-down',
      'nav-left',
    ],
  },
};
