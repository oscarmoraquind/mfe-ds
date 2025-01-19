/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

/**
 * Check if the value is a string or not
 * @param value the value to be checked
 * @returns {boolean} the value is a string
 */
const isString = (value) => {
    const type = typeof value;
    return (type === 'string' ||
        (type === 'object' &&
            value != null &&
            !Array.isArray(value) &&
            Object.prototype.toString.call(value) == '[object String]'));
};

exports.isString = isString;

//# sourceMappingURL=isString-f8847c11.js.map