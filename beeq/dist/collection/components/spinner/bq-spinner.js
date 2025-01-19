/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { SPINNER_SIZE, SPINNER_TEXT_POSITION } from "./bq-spinner.types";
import { getCSSVariableValue, getTextContent, hasSlotContent, isHTMLElement, isNil, validatePropValue, } from "../../shared/utils";
/**
 * Spinners are designed for users to display data loading.
 *
 * @example How to use it
 * ```html
 * <bq-spinner size="medium" text-position="bellow">
 *   <span>Loading...</span>
 * </bq-spinner>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/275f10-spinner/b/09d7b1
 * @status stable
 *
 * @attr {boolean} animation - If `false`, the animation on the icon element will be stopped.
 * @attr {"small" | "medium" | "large"} size - It defines the size of the icon element displayed.
 * @attr {"above" | "below" | "left" | "right" | "none"} text-position - It defines the position of the label text.
 *
 * @slot icon - The icon slot container.
 * @slot - The content of the spinner component.
 *
 * @part base - The div wrapper container used under the hood.
 * @part icon - The `<svg>` icon element used to spin/animate.
 * @part custom-icon - The `<span>` tag element that holds the custom icon element passed.
 * @part text - The `<span>` tag element that renders the label text inside the component.
 *
 * @cssprop --bq-spinner--color - Spinner color
 * @cssprop --bq-spinner--size-large - Spinner large size
 * @cssprop --bq-spinner--size-medium - Spinner medium size
 * @cssprop --bq-spinner--size-small - Spinner small size
 * @cssprop --bq-spinner--large-text-fontSize - Spinner large text font size
 * @cssprop --bq-spinner--medium-text-fontSize - Spinner medium text font size
 * @cssprop --bq-spinner--small-text-fontSize - Spinner small text font size
 * @cssprop --bq-spinner--text-lineHeight - Spinner text line height
 */
export class BqSpinner {
    // Own Properties
    // ====================
    iconSlotElem;
    slotElem;
    observer = new MutationObserver((mutations) => {
        const [mutation] = mutations;
        this.slotContentLength = mutation.target.textContent.length;
    });
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasIconSlot = false;
    hasSlot = false;
    slotContentLength = 0;
    // Public Property API
    // ========================
    /** If `false`, the animation on the icon element will be stopped */
    animation = true;
    /** It defines the position of the label text */
    textPosition = 'none';
    /** It defines the size of the icon element displayed */
    size = 'medium';
    // Prop lifecycle events
    // =======================
    handleTextPositionProp() {
        validatePropValue(SPINNER_TEXT_POSITION, 'none', this.el, 'textPosition');
    }
    handleSizeProp() {
        validatePropValue(SPINNER_SIZE, 'medium', this.el, 'size');
        this.setIconSize();
    }
    handleHasIconSlot() {
        this.setIconSize();
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.checkPropValues();
    }
    componentDidLoad() {
        this.setIconSize();
    }
    disconnectedCallback() {
        this.observer?.disconnect();
    }
    // Listeners
    // ==============
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    handleSlotChange = () => {
        if (!this.slotElem)
            return;
        this.hasSlot = hasSlotContent(this.slotElem);
        if (!this.hasSlot)
            return;
        const slot = this.slotElem.querySelector('slot') ?? null;
        if (isNil(slot))
            return;
        this.slotContentLength = getTextContent(slot, { recurse: true }).length;
        const nodes = slot.assignedNodes({ flatten: true });
        nodes.forEach((node) => {
            this.observer.observe(node, {
                characterData: true,
                childList: true,
                subtree: true,
            });
        });
    };
    handleIconSlotChange = () => {
        this.hasIconSlot = hasSlotContent(this.iconSlotElem, 'icon');
    };
    checkPropValues = () => {
        validatePropValue(SPINNER_TEXT_POSITION, 'none', this.el, 'textPosition');
        validatePropValue(SPINNER_SIZE, 'medium', this.el, 'size');
    };
    get isTextDisplayed() {
        return this.textPosition !== 'none';
    }
    setIconSize() {
        if (!this.hasIconSlot || !this.bqIcon)
            return;
        this.bqIcon.size = parseInt(getCSSVariableValue(`bq-spinner--size-${this.size}`, this.el)).toString();
    }
    get bqIcon() {
        if (!this.hasIconSlot)
            return null;
        const slot = this.iconSlotElem.querySelector('slot');
        return [...slot.assignedElements({ flatten: true })].filter((el) => isHTMLElement(el, 'bq-icon'))[0];
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("div", { key: '1321c7fe1d76dc8e17ddddc940537654d9f93861', class: {
                [`bq-spinner ${this.size} text-${this.textPosition}`]: true,
                'is-animated': this.animation,
                'has-text': !!this.slotContentLength,
            }, part: "base" }, !this.hasIconSlot && (h("div", { key: 'c23acaf606777dda3cb6bdb7de53b121b0912f01', class: `bq-spinner--loader ${this.size} relative text-[--bq-spinner--color]`, "aria-label": "Loading...", role: "status" }, h("svg", { key: 'c5499b0829b2d734071a4a4ecb0ecdf8e9bbf044', class: "bs-full is-full", fill: "currentColor", viewBox: "0 0 48 48" }, h("path", { key: '755615dad040bb5173b3f641f3fe5ff59ea9af2f', fill: "currentColor", d: "M10.27 7.637c-.937-1.117-.798-2.796.415-3.605a24 24 0 0 1 37.09 23.249c-.2 1.444-1.65 2.301-3.064 1.944-1.414-.356-2.25-1.793-2.096-3.242A18.72 18.72 0 0 0 14.102 8.11c-1.237.77-2.895.643-3.832-.474Z" }), h("path", { key: 'c944d747c4ffe29ee7d0e5f86286bbab0a6a64e7', fill: "currentColor", d: "M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0s24 10.745 24 24ZM5.28 24c0 10.339 8.381 18.72 18.72 18.72 10.339 0 18.72-8.381 18.72-18.72 0-10.339-8.381-18.72-18.72-18.72C13.661 5.28 5.28 13.661 5.28 24Z", opacity: ".1" })))), h("span", { key: '6ac9efd198fbdf907e1b3d02d8085b444b91d751', class: {
                'bq-spinner--icon': true,
                flex: this.hasIconSlot,
                '!hidden': !this.hasIconSlot,
            }, ref: (spanElem) => (this.iconSlotElem = spanElem), part: "custom-icon" }, h("slot", { key: '8e63a899f086e6a90bd8bfd09d9be4e3fb0f5a26', name: "icon", onSlotchange: this.handleIconSlotChange })), h("span", { key: 'd9ee2573ce8512eca0ef35681b097499d717bb33', class: {
                'bq-spinner--text font-medium leading-regular text-primary': true,
                '!hidden': !this.isTextDisplayed,
            }, part: "text", ref: (spanElem) => (this.slotElem = spanElem) }, h("slot", { key: '20f911a474c9afc75d294dd7fbdea4b84940835e', onSlotchange: this.handleSlotChange }))));
    }
    static get is() { return "bq-spinner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-spinner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-spinner.css"]
        };
    }
    static get properties() {
        return {
            "animation": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If `false`, the animation on the icon element will be stopped"
                },
                "getter": false,
                "setter": false,
                "attribute": "animation",
                "reflect": true,
                "defaultValue": "true"
            },
            "textPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TSpinnerTextPosition",
                    "resolved": "\"above\" | \"bellow\" | \"left\" | \"none\" | \"right\"",
                    "references": {
                        "TSpinnerTextPosition": {
                            "location": "import",
                            "path": "./bq-spinner.types",
                            "id": "../../packages/beeq/src/components/spinner/bq-spinner.types.ts::TSpinnerTextPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "It defines the position of the label text"
                },
                "getter": false,
                "setter": false,
                "attribute": "text-position",
                "reflect": true,
                "defaultValue": "'none'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TSpinnerSize",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {
                        "TSpinnerSize": {
                            "location": "import",
                            "path": "./bq-spinner.types",
                            "id": "../../packages/beeq/src/components/spinner/bq-spinner.types.ts::TSpinnerSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "It defines the size of the icon element displayed"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'medium'"
            }
        };
    }
    static get states() {
        return {
            "hasIconSlot": {},
            "hasSlot": {},
            "slotContentLength": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "textPosition",
                "methodName": "handleTextPositionProp"
            }, {
                "propName": "size",
                "methodName": "handleSizeProp"
            }, {
                "propName": "hasIconSlot",
                "methodName": "handleHasIconSlot"
            }];
    }
}
//# sourceMappingURL=bq-spinner.js.map
