/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

/**
 * Restricts value to a specified interval [min, max]
 *
 * @param value - value
 * @param min  - lower end of the interval
 * @param max  - upper end of the interval
 * @returns  - value in interval [min, max]
 */
const clamp = (value, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
    return Math.min(Math.max(min, value), max);
};

exports.clamp = clamp;

//# sourceMappingURL=clamp-dbbea7bf.js.map