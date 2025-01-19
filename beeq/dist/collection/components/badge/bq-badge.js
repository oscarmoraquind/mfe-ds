/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { BADGE_SIZE } from "./bq-badge.types";
import { getColorCSSVariable, getTextContent, isNil, validatePropValue } from "../../shared/utils";
/**
 * The Badge component is a visual indicator that can be added to various elements within a user interface.
 * It is typically used to highlight important or relevant information, such as alerts, notifications, or statuses.
 *
 * @example How to use it
 * ```html
 * <bq-badge background-color="ui--success" text-color="text--inverse" size="small">9</bq-badge>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/194fd1-badge
 * @status stable
 *
 * @attr {string} background-color - Badge background color. The value should be a valid value of the palette color.
 * @attr {string} text-color - Badge number color. The value should be a valid value of the palette color.
 * @attr {"small" | "medium" | "large"} size - The size of the badge. Relevant if badge has no content.
 *
 * @slot - The default slot is used to add content to the badge. The content can be a number or a text.
 *
 * @part base - The component's internal wrapper that holds the count.
 * @part number - The component's internal wrapper that holds the slot.
 *
 * @cssprop --bq-badge--background-color - The badge background color
 * @cssprop --bq-badge--box-shadow - The badge box shadow
 * @cssprop --bq-badge--border-color - The badge border color
 * @cssprop --bq-badge--border-radius - The badge border radius
 * @cssprop --bq-badge--border-style - The badge border style
 * @cssprop --bq-badge--border-width - The badge border width
 * @cssprop --bq-badge--size-small - The badge small size
 * @cssprop --bq-badge--size-medium - The badge medium size
 * @cssprop --bq-badge--size-large - The badge large size
 * @cssprop --bq-badge--text-color - The badge text color
 */
export class BqBadge {
    // Own Properties
    // ====================
    spanElement;
    observer = new MutationObserver((mutations) => {
        const [mutation] = mutations;
        this.contentLength = mutation.target.textContent.length;
    });
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    contentLength = 0;
    // Public Property API
    // ========================
    /** Badge background color. The value should be a valid value of the palette color */
    backgroundColor = 'ui--danger';
    /** Badge number color. The value should be a valid value of the palette color */
    textColor = 'text--inverse';
    /** The size of the badge. Relevant if badge has no content. */
    size = 'small';
    // Prop lifecycle events
    // =======================
    handleSizePropChange() {
        validatePropValue(BADGE_SIZE, 'small', this.el, 'size');
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.handleSizePropChange();
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
    onSlotChange = () => {
        const slot = this.slot;
        if (isNil(slot))
            return;
        this.contentLength = getTextContent(slot, { recurse: true }).length;
        const [node] = slot.assignedNodes({ flatten: true });
        if (isNil(node)) {
            this.observer.takeRecords();
            return;
        }
        this.observer.observe(node, {
            characterData: true,
            childList: true,
            subtree: true,
        });
    };
    get slot() {
        return this.spanElement?.querySelector('slot') ?? null;
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const styles = {
            ...(this.backgroundColor && { '--bq-badge--background-color': getColorCSSVariable(this.backgroundColor) }),
            ...(this.textColor && { '--bq-badge--text-color': getColorCSSVariable(this.textColor) }),
        };
        return (h(Host, { key: '687b0e41e136cf9d593c4f7de0ee515d996165eb', style: styles }, h("div", { key: 'ab9d187fd624d2e3472bdf0f22dbc33479bbab1b', class: {
                'bq-badge': true,
                [`size--${this.size}`]: this.contentLength === 0,
                digit: this.contentLength > 0,
                'p-i-xs2': this.contentLength > 1,
            }, part: "base" }, h("span", { key: '321cda85c0c2e53ade6dba006db24fb3b119581e', ref: (element) => (this.spanElement = element), class: "text-xs font-bold leading-small", part: "number" }, h("slot", { key: 'c9f2f3f5f1ddf26462e643caa4903dbcfb922bcf', onSlotchange: this.onSlotChange })))));
    }
    static get is() { return "bq-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-badge.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-badge.css"]
        };
    }
    static get properties() {
        return {
            "backgroundColor": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Badge background color. The value should be a valid value of the palette color"
                },
                "getter": false,
                "setter": false,
                "attribute": "background-color",
                "reflect": true,
                "defaultValue": "'ui--danger'"
            },
            "textColor": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Badge number color. The value should be a valid value of the palette color"
                },
                "getter": false,
                "setter": false,
                "attribute": "text-color",
                "reflect": true,
                "defaultValue": "'text--inverse'"
            },
            "size": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TBadgeSize",
                    "resolved": "\"medium\" | \"small\"",
                    "references": {
                        "TBadgeSize": {
                            "location": "import",
                            "path": "./bq-badge.types",
                            "id": "../../packages/beeq/src/components/badge/bq-badge.types.ts::TBadgeSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The size of the badge. Relevant if badge has no content."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'small'"
            }
        };
    }
    static get states() {
        return {
            "contentLength": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "handleSizePropChange"
            }];
    }
}
//# sourceMappingURL=bq-badge.js.map
