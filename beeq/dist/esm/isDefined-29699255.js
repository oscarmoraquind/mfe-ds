/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import './index-9e248ad1.js';
import { i as isString } from './isString-9820a2b7.js';

/**
 * Check is a value is not falsy
 * @param value the value to be checked
 * @returns {boolean} the value is not falsy
 */
const isDefined = (value) => {
    return isString(value) ? value.length !== 0 : Boolean(value);
};

export { isDefined as i };

//# sourceMappingURL=isDefined-29699255.js.map