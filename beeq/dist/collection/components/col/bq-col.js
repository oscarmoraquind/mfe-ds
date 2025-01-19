/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
/**
 * The component description.
 *
 * @example How to use it
 * ```html
 * <bq-col>Stencil</bq-col>
 * ```
 *
 * @documentation - The documentation link.
 * @status progress
 *
 * @dependency bq-icon (Specify if the component uses other components)
 *
 * @attr {string} attribute-name - The attribute description, use always kebab-case.
 *
 * @method methodName - The method description.
 *
 * @event eventName - The event description.
 *
 * @slot - The default slot content.
 *
 * @part partName - The CSS shadow DOM part description.
 *
 * @cssprop --bq-col--margin - The margin of the component.
 */
export class BqCol {
    // Own Properties
    // ====================
    // Reference to host HTML element
    // ===================================
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    // Public Property API
    // ========================
    // Prop lifecycle events
    // =======================
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
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
    /**
     * The size of the column, expressed as a fraction of 12 (e.g., 6 for half width).
     * Can also be "auto" for automatic sizing.
     */
    size = undefined;
    render() {
        const sizeClass = this.size === 'auto'
            ? 'w-auto'
            : this.size
                ? `w-${this.size}/12`
                : 'w-full';
        return (h(Host, { key: 'e30c389cae1116bdb5c7119ef0ca885e77b62562', class: `bq-col ${sizeClass}` }, h("slot", { key: '4f2cd4d8233dfac43ba8ff3cd34603174c04d5df' })));
    }
    static get is() { return "bq-col"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-col.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-col.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the column, expressed as a fraction of 12 (e.g., 6 for half width).\nCan also be \"auto\" for automatic sizing."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": false,
                "defaultValue": "undefined"
            }
        };
    }
}
//# sourceMappingURL=bq-col.js.map
