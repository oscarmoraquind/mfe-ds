/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
/**
 * Checks if the code is running on the client side.
 * @returns {boolean} True if running on the client side, false otherwise.
 */
export const isClient = () => {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
};
//# sourceMappingURL=isClient.js.map
