/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

require('./index-1cbd3f9e.js');
const isString = require('./isString-f8847c11.js');

/**
 * Check is a value is not falsy
 * @param value the value to be checked
 * @returns {boolean} the value is not falsy
 */
const isDefined = (value) => {
    return isString.isString(value) ? value.length !== 0 : Boolean(value);
};

exports.isDefined = isDefined;

//# sourceMappingURL=isDefined-5f750401.js.map