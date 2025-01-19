/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { CARD_TYPE } from "./bq-card.types";
import { validatePropValue } from "../../shared/utils";
/**
 * The Card component serves as a versatile container designed for flexible content presentation within user interfaces.
 * Its structure accommodates various styles, allowing users to customize and adapt it according to their design preferences.
 *
 * @example How to use it
 * ```html
 * <bq-card type="default" border="m">
 *   <div class="p-m">
 *     <h3 class="text-xl font-bold">Card Title</h3>
 *     <p class="text-m">Card content goes here</p>
 *   </div>
 * </bq-card>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/522abb-card
 * @status stable
 *
 * @attr {"default" | "minimal"} type - Type of card component
 * @attr {"none" | "xs2" | "xs" | "s" | "m" | "l" | "full"} border - The corner radius of the card component
 *
 * @slot - The content of the card component
 *
 * @part wrapper - The wrapper container `<div>` of the element inside the shadow DOM
 *
 * @cssprop --bq-card--borderColor - Card border color
 * @cssprop --bq-card--borderRadius - Card border radius
 * @cssprop --bq-card--borderStyle - Card border style
 * @cssprop --bq-card--borderWidth - Card border width
 *
 * @cssprop --bq-card--padding - Card padding
 * @cssprop --bq-card--paddingMinimal - Minimal card padding
 * @cssprop --bq-card--background - Card background color
 */
export class BqCard {
    // Own Properties
    // ====================
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    // Public Property API
    // ========================
    /** Type of card component */
    type = 'default';
    /** The corner radius of the card component */
    border = 'm';
    // Prop lifecycle events
    // =======================
    checkPropValue() {
        validatePropValue(CARD_TYPE, 'default', this.el, 'type');
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.checkPropValue();
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
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const style = {
            ...(this.border && { '--bq-card--borderRadius': `var(--bq-radius--${this.border})` }),
        };
        return (h(Host, { key: '254d17c5d4999e7bea0f03b53ceb1b15d203a0dd', style: style }, h("div", { key: '0599b40fc2410c127585b01729b50412849f0ebd', class: {
                'bq-card rounded-[--bq-card--borderRadius] border-[length:--bq-card--borderWidth] border-[color:--bq-card--borderColor] bg-[--bq-card--background]': true,
                'p-b-[--bq-card--padding] p-i-[--bq-card--padding]': this.type === 'default',
                // Remove padding for minimal card type
                'p-b-0 p-i-0': this.type === 'minimal',
            }, part: "wrapper" }, h("slot", { key: '88c57259b4d994c4a24e259fd98485d98f24912c' }))));
    }
    static get is() { return "bq-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-card.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TCardType",
                    "resolved": "\"default\" | \"minimal\"",
                    "references": {
                        "TCardType": {
                            "location": "import",
                            "path": "./bq-card.types",
                            "id": "../../packages/beeq/src/components/card/bq-card.types.ts::TCardType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of card component"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'default'"
            },
            "border": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TCardBorderRadius",
                    "resolved": "\"full\" | \"l\" | \"m\" | \"none\" | \"s\" | \"xs\" | \"xs2\"",
                    "references": {
                        "TCardBorderRadius": {
                            "location": "import",
                            "path": "./bq-card.types",
                            "id": "../../packages/beeq/src/components/card/bq-card.types.ts::TCardBorderRadius"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The corner radius of the card component"
                },
                "getter": false,
                "setter": false,
                "attribute": "border",
                "reflect": true,
                "defaultValue": "'m'"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "type",
                "methodName": "checkPropValue"
            }];
    }
}
//# sourceMappingURL=bq-card.js.map
