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
 * <bq-row>Stencil</bq-row>
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
 * @cssprop --bq-row--margin - The margin of the component.
 */
export class BqRow {
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
    render() {
        return (h(Host, { key: '4ef86efa606534c2e0ed2c8f7b38a85ee2193801', class: "bq-row" }, h("slot", { key: 'c635b3269dac77cf4362857c5dded7dceccd032c' })));
    }
    static get is() { return "bq-row"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-row.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-row.css"]
        };
    }
}
//# sourceMappingURL=bq-row.js.map
