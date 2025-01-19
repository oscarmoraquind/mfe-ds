/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

/**
 * Checks if the code is running on the client side.
 * @returns {boolean} True if running on the client side, false otherwise.
 */
const isClient = () => {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
};

exports.isClient = isClient;

//# sourceMappingURL=isClient-c22372aa.js.map