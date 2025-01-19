/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { STATUS_TYPE } from "./bq-status.types";
import { validatePropValue } from "../../shared/utils";
/**
 * The Status Component is a UI element that represents the current state or condition of an item, task, or process.
 *
 * @example How to use it
 * ```html
 * <bq-status type="alert">Alert status</bq-status>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/46c8d5-status/b/09d7b1
 * @status stable
 *
 * @dependency bq-badge
 *
 * @attr {"alert" | "danger" | "info" | "neutral" | "success"} type - It defines the type of status to display.
 *
 * @slot The content of the status component.
 *
 * @part base - The component's internal wrapper of the status component.
 * @part circle - The colored circle that marks the status type.
 * @part text - The `<div>` container that holds the text label of the status component.
 *
 * @cssprop --bq-status-circ - Status circle size.
 */
export class BqStatus {
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
    /** It defines the type of status to display  */
    type = 'neutral';
    // Prop lifecycle events
    // =======================
    checkPropValues() {
        validatePropValue(STATUS_TYPE, 'neutral', this.el, 'type');
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
        return (h("div", { key: '7e9c8a0899af6e4771e2cf95e7430e7506147c48', class: "bq-status inline-flex items-center gap-xs", part: "base", role: "status" }, h("bq-badge", { key: 'd6971486ffc01248d3764eebc555d2febb70237d', class: `bq-status__circle rounded-full ${this.type}`, size: "medium", part: "circle", role: "img" }), h("div", { key: '1e4264eb819c29ef43273895f7495729cc1f4fa8', class: "bq-status__text text-s font-medium leading-regular text-primary max-bs-[20px] p-b-0 p-i-0 m-b-0 m-i-0", part: "text" }, h("slot", { key: '44bc2452cd6bacec14d47f0461778858b1012304' }))));
    }
    static get is() { return "bq-status"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-status.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-status.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TStatusType",
                    "resolved": "\"alert\" | \"danger\" | \"info\" | \"neutral\" | \"success\"",
                    "references": {
                        "TStatusType": {
                            "location": "import",
                            "path": "./bq-status.types",
                            "id": "../../packages/beeq/src/components/status/bq-status.types.ts::TStatusType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "It defines the type of status to display"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'neutral'"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "type",
                "methodName": "checkPropValues"
            }];
    }
}
//# sourceMappingURL=bq-status.js.map
