/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { FloatingUI } from "../../services/libraries";
/**
 * The Panel component is a versatile and essential element used to wrap and display content in a floating panel.
 *
 * @example How to use it
 * ```html
 * <bq-panel open>
 *   <div>Panel content</div>
 * </bq-panel>
 * ```
 *
 * @status stable
 *
 * @attr {number} distance - Represents the distance (gutter or margin) between the panel and the trigger element.
 * @attr {"top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end"} placement - Position of the panel.
 * @attr {boolean} open - If true, the panel will be visible.
 * @attr {boolean} same-width - Whether the panel should have the same width as the trigger element.
 * @attr {number} skidding - Represents the skidding between the panel and the trigger element.
 * @attr {"fixed" | "absolute"} strategy - Defines the strategy to position the panel.
 *
 * @slot - The content of the panel.
 *
 * @part panel - The `<div>` element used to display and style the panel
 *
 * @prop --bq-panel--background - Panel background color
 * @prop --bq-panel--border-color - Panel border color
 * @prop --bq-panel--border-radius - Panel border radius
 * @prop --bq-panel--border-style - Panel border style
 * @prop --bq-panel--border-width - Panel border width
 * @prop --bq-panel--box-shadow - Panel box shadow
 * @prop --bq-panel--padding - Panel padding
 * @prop --bq-panel--height - Panel height
 * @prop --bq-panel--width - Panel width
 * @prop --bq-panel-z-index - Panel z-index applied when opened
 */
export class BqPanel {
    // Own Properties
    // ====================
    panel;
    floatingUI;
    trigger;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    // Public Property API
    // ========================
    /** Represents the distance (gutter or margin) between the panel and the trigger element. */
    distance = 4;
    /** Position of the panel */
    placement = 'bottom-start';
    /** If true, the panel will be visible. */
    open = false;
    /** Whether the panel should have the same width as the trigger element */
    sameWidth = false;
    /**  Represents the skidding between the panel and the trigger element. */
    skidding = 0;
    /** Defines the strategy to position the panel */
    strategy = 'fixed';
    // Prop lifecycle events
    // =======================
    handleOpenChange() {
        if (!this.open) {
            this.hidePanel();
            return;
        }
        this.showPanel();
    }
    onPropChange() {
        this.floatingUI?.init({ ...this.options });
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentDidLoad() {
        // We need to find the trigger element from the parent to position the panel relative to it.
        const parentTrigger = this.el.parentElement.querySelector('div[part="trigger"]');
        if (!parentTrigger)
            return;
        this.trigger = {
            getBoundingClientRect: () => parentTrigger.getBoundingClientRect(),
            contextElement: parentTrigger,
        };
        this.floatingUI = new FloatingUI(this.trigger, this.panel, { ...this.options });
        this.handleOpenChange();
    }
    disconnectedCallback() {
        this.floatingUI?.destroy();
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
    showPanel() {
        this.floatingUI?.update();
    }
    async hidePanel() {
        this.open = false;
    }
    get options() {
        return {
            distance: this.distance,
            placement: this.placement,
            sameWidth: this.sameWidth,
            skidding: this.skidding,
            strategy: this.strategy,
        };
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("div", { key: '0338a4734eb9cec07495c4a57f82c987834db763', class: "bq-panel", ref: (el) => (this.panel = el), "aria-hidden": !this.open ? 'true' : 'false', hidden: !this.open, part: "panel" }, h("slot", { key: '66cef6169ba224892c3cdc609f1022edda456873' })));
    }
    static get is() { return "bq-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-panel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-panel.css"]
        };
    }
    static get properties() {
        return {
            "distance": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Represents the distance (gutter or margin) between the panel and the trigger element."
                },
                "getter": false,
                "setter": false,
                "attribute": "distance",
                "reflect": true,
                "defaultValue": "4"
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Placement",
                    "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "Placement": {
                            "location": "import",
                            "path": "../../services/interfaces",
                            "id": "../../packages/beeq/src/services/interfaces/index.ts::Placement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Position of the panel"
                },
                "getter": false,
                "setter": false,
                "attribute": "placement",
                "reflect": true,
                "defaultValue": "'bottom-start'"
            },
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If true, the panel will be visible."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            },
            "sameWidth": {
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
                    "text": "Whether the panel should have the same width as the trigger element"
                },
                "getter": false,
                "setter": false,
                "attribute": "same-width",
                "reflect": true,
                "defaultValue": "false"
            },
            "skidding": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Represents the skidding between the panel and the trigger element."
                },
                "getter": false,
                "setter": false,
                "attribute": "skidding",
                "reflect": true,
                "defaultValue": "0"
            },
            "strategy": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'fixed' | 'absolute'",
                    "resolved": "\"absolute\" | \"fixed\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines the strategy to position the panel"
                },
                "getter": false,
                "setter": false,
                "attribute": "strategy",
                "reflect": true,
                "defaultValue": "'fixed'"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }, {
                "propName": "distance",
                "methodName": "onPropChange"
            }, {
                "propName": "placement",
                "methodName": "onPropChange"
            }, {
                "propName": "sameWidth",
                "methodName": "onPropChange"
            }, {
                "propName": "skidding",
                "methodName": "onPropChange"
            }, {
                "propName": "strategy",
                "methodName": "onPropChange"
            }];
    }
}
//# sourceMappingURL=bq-panel.js.map
