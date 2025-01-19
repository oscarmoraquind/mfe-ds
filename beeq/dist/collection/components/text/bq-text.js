/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { TEXT_SIZE } from "./bq-text.types";
import { getColorCSSVariable, validatePropValue } from "../../shared/utils";
/**
 * El componente `bq-text` muestra texto con estilos controlados (tamaño, color, fondo).
 *
 * @example How to use it
 * ```html
 * <bq-text size="medium" color="text--primary">Hola mundo</bq-text>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/194fd1-text
 * @status stable
 *
 * @attr {string} background-color - text background color. The value should be a valid value of the palette color.
 * @attr {string} text-color - text number color. The value should be a valid value of the palette color.
 * @attr {"small" | "medium" | "large"} size - The size of the text. Relevant if text has no content.
 *
 * @slot - The default slot is used to add content to the text. The content can be a number or a text.
 *
 * @part base - The component's internal wrapper that holds the count.
 * @part number - The component's internal wrapper that holds the slot.
 *
 * @cssprop --bq-text--background-color - The text background color
 * @cssprop --bq-text--box-shadow - The text box shadow
 * @cssprop --bq-text--border-color - The text border color
 * @cssprop --bq-text--border-radius - The text border radius
 * @cssprop --bq-text--border-style - The text border style
 * @cssprop --bq-text--border-width - The text border width
 * @cssprop --bq-text--size-small - The text small size
 * @cssprop --bq-text--size-medium - The text medium size
 * @cssprop --bq-text--size-large - The text large size
 * @cssprop --bq-text--text-color - The text text color
 */
export class BqText {
    // Own Properties
    // ====================
    // Reference to host HTML element
    // ===================================
    el;
    // Public Property API
    // ========================
    /** text background color. The value should be a valid value of the palette color */
    backgroundColor = undefined;
    /** text number color. The value should be a valid value of the palette color */
    textColor = 'text--alt';
    /** The size of the text. Relevant if text has no content. */
    size = 'm';
    // Prop lifecycle events
    // =======================
    handleSizePropChange() {
        validatePropValue(TEXT_SIZE, 'm', this.el, 'size');
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
    // Listeners
    // ==============
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const styles = {
            ...(this.backgroundColor && { '--bq-text--background-color': getColorCSSVariable(this.backgroundColor) }),
            ...(this.textColor && { '--bq-text--text-color': getColorCSSVariable(this.textColor) }),
        };
        return (h(Host, { key: '1a208b82b1f06dc42b3a03a612beeaf4cca17e89', style: styles }, h("div", { key: '4eeda0704fd3166ce976886ff7695918b256e87e', class: {
                'bq-text': true,
                [`size--${this.size}`]: true,
            }, part: "base" }, h("span", { key: '57d945076aabad57ded20811ceb83819423d0bb5', class: "text-xs font-bold leading-small", part: "number" }, h("slot", { key: '32a989b7ed82cc11649c3f46b2d4f7413b3581af' })))));
    }
    static get is() { return "bq-text"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-text.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-text.css"]
        };
    }
    static get properties() {
        return {
            "backgroundColor": {
                "type": "any",
                "mutable": true,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "text background color. The value should be a valid value of the palette color"
                },
                "getter": false,
                "setter": false,
                "attribute": "background-color",
                "reflect": true,
                "defaultValue": "undefined"
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
                    "text": "text number color. The value should be a valid value of the palette color"
                },
                "getter": false,
                "setter": false,
                "attribute": "text-color",
                "reflect": true,
                "defaultValue": "'text--alt'"
            },
            "size": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TTextSize",
                    "resolved": "\"l\" | \"m\" | \"s\" | \"xl\" | \"xs\" | \"xxl\" | \"xxl2\" | \"xxl3\" | \"xxl4\" | \"xxl5\"",
                    "references": {
                        "TTextSize": {
                            "location": "import",
                            "path": "./bq-text.types",
                            "id": "../../packages/beeq/src/components/text/bq-text.types.ts::TTextSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The size of the text. Relevant if text has no content."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'m'"
            }
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
//# sourceMappingURL=bq-text.js.map
