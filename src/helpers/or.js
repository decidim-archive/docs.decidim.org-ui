// Following documentation copied from
// https://github.com/helpers/handlebars-helpers/blob/fe7e6669204e68e452b2ecb6fbe67366748ccf42/lib/comparison.js:
/**
 * Block helper that renders a block if **any of** the given values
 * is truthy. If an inverse block is specified it will be rendered
 * when falsy.
 *
 * ```handlebars
 * {{#or a b c}}
 *   If any value is true this will be rendered.
 * {{/or}}
 * ```
 *
 * @param {...any} `arguments` Variable number of arguments
 * @param {Object} `options` Handlebars options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */
module.exports = require('handlebars-helpers')(['comparison']).or
