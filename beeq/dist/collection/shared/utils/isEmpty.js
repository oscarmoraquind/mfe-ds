/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { isDefined, isNil } from ".";
/**
 * Check if the value is an empty array, object, set, map
 * @param value the value to be checked
 * @returns {boolean} true if value is empty
 */
export const isEmpty = (value) => {
    if (isNil(value)) {
        return true;
    }
    else if ('size' in value) {
        return !isDefined(value.size);
    }
    else {
        return !isDefined(Object.values(value).length);
    }
};
//# sourceMappingURL=isEmpty.js.map
