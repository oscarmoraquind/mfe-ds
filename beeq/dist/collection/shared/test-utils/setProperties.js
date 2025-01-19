/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
/**
 * Enhances page to set and retrieve properties based on attributes parameter. It typed against bq web components
 * @param {E2EPage} page - stencil instance of puppeteer page
 * @param {String} element - element selector
 * @param {Object} attributes - attributes that will be set on element instance
 * @returns {Object} attributes that were set on element instance
 */
export const setProperties = async (page, element, attributes) => {
    await page.$eval(element, (elementRef, attributes) => {
        Object.entries(attributes).forEach(([attr, value]) => (elementRef[attr] = value));
    }, attributes);
    await page.waitForChanges();
    return page.$eval(element, (elementRef, attributes) => {
        const attrs = {};
        Object.keys(attributes).forEach((attr) => (attrs[attr] = elementRef[attr]));
        return attrs;
    }, attributes);
};
//# sourceMappingURL=setProperties.js.map
