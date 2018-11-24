// Following documentation copied from
// https://github.com/helpers/handlebars-helpers/blob/cbbec0851e5806a21f4d3b7b18379b2030919ec0/lib/html.js
/**
 * Strip HTML tags from a string, so that only the text nodes
 * are preserved.
 *
 * ```handlebars
 * {{sanitize "<span>foo</span>"}}
 * <!-- results in: 'foo' -->
 * ```
 *
 * @param {String} `str` The string of HTML to sanitize.
 * @return {String}
 * @api public
 */
module.exports = require('handlebars-helpers')(['html']).sanitize
