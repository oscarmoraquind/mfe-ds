/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
/**
 * Enhances page to retrieve element style by a given selector
 * @param {E2EPage} page - stencil instance of puppeteer page
 * @param {String} selector - selector to be passed to querySelector, it supports stencil `>>>` selector
 * @returns {Object} style declaration
 */
export const computedStyle = (page, selector, filter) => {
    return page.evaluate((querySelector, filter) => {
        const [lightDomSelector, shadowDomSelector] = querySelector.split('>>>');
        let element = document.querySelector(lightDomSelector);
        if (!element) {
            throw new Error(`Could not find element ${lightDomSelector}`);
        }
        if (shadowDomSelector) {
            element = element.shadowRoot.querySelector(shadowDomSelector);
            if (!element) {
                throw new Error(`Could not find element ${shadowDomSelector}`);
            }
        }
        const style = getComputedStyle(element);
        if (filter) {
            return filter.reduce((acc, key) => {
                acc[key] = style[key];
                return acc;
            }, {});
        }
        return JSON.parse(JSON.stringify(style));
    }, selector, filter);
};
//# sourceMappingURL=computedStyle.js.map
