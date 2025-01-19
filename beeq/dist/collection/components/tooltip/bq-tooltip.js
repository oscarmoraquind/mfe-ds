/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { FloatingUI } from "../../services/libraries";
/**
 * The Tooltip component is a small pop-up box that appears when a user hovers over or clicks on an element, providing additional information or context.
 *
 * @example How to use it
 * ```html
 * <bq-tooltip visible>
 *   Yuhu! I'm a tooltip 🙃
 *   <bq-button slot="trigger">Hover me!</bq-button>
 * </bq-tooltip>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/64c562-tooltip
 * @status stable
 *
 * @attr {boolean} always-visible - If true, the tooltip will always be visible
 * @attr {number} distance - Distance between trigger element and tooltip
 * @attr {boolean} hide-arrow - If true, the arrow on the tooltip content won't be shown
 * @attr {"top" | "right" | "bottom" | "left"} placement - Defines the position of the tooltip
 * @attr {boolean} same-width - Whether the tooltip should have the same width as the trigger element (applicable only for content shorter than the trigger element)
 * @attr {"click" | "hover"} display-on - Set the action when the tooltip should be displayed, on hover (default) or click
 * @attr {boolean} visible - Indicates whether or not the tooltip is visible when the component is first rendered, and when interacting with the trigger
 *
 * @method show - Shows the tooltip
 * @method hide - Hides the tooltip
 *
 * @slot trigger - The element which displays tooltip on hover
 * @slot - The tooltip content
 *
 * @part base - The component wrapper container inside the shadow DOM
 * @part trigger - The `<div>` container that holds the element which displays tooltip on hover
 * @part panel - The `<div>` container that holds the tooltip content
 *
 * @cssprop --bq-tooltip--background-color - Tooltip background color
 * @cssprop --bq-tooltip--box-shadow - Tooltip box shadow
 * @cssprop --bq-tooltip--font-size - Tooltip font size
 * @cssprop --bq-tooltip--line-height - Tooltip line height
 * @cssprop --bq-tooltip--text-color - Tooltip text color
 * @cssprop --bq-tooltip--paddingX - Tooltip horizontal padding
 * @cssprop --bq-tooltip--paddingY - Tooltip vertical padding
 * @cssprop --bq-tooltip--border-color - Tooltip border color
 * @cssprop --bq-tooltip--border-radius - Tooltip border radius
 * @cssprop --bq-tooltip--border-style - Tooltip border style
 * @cssprop --bq-tooltip--border-width - Tooltip border width
 * @cssprop --bq-tooltip--z-index: Tooltip z-index
 */
export class BqTooltip {
    // Own Properties
    // ====================
    trigger;
    panel;
    arrow;
    floatingUI;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    // Public Property API
    // ========================
    /** If true, the tooltip will always be visible */
    alwaysVisible = false;
    /** Distance between trigger element and tooltip */
    distance = 10;
    /** If true, the arrow on the tooltip content won't be shown */
    hideArrow = false;
    /* Defines the position of the tooltip */
    placement = 'top';
    /** Whether the tooltip should have the same width as the trigger element
     * (applicable only for content shorter than the trigger element) */
    sameWidth = false;
    /** Set the action when the tooltip should be displayed, on hover (default) or click */
    displayOn = 'hover';
    /**
     * Indicates whether or not the tooltip is visible when the component is first rendered,
     * and when interacting with the trigger
     */
    visible = false;
    // Prop lifecycle events
    // =======================
    async handleVisibleChange() {
        if (!this.visible && !this.alwaysVisible) {
            return await this.hide();
        }
        await this.show();
    }
    handleFloatingUIOptionsChange() {
        this.floatingUI.init({
            placement: this.placement,
            distance: this.distance,
            sameWidth: this.sameWidth,
            strategy: 'fixed',
        });
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentDidLoad() {
        this.floatingUI = new FloatingUI(this.trigger, this.panel, {
            ...(!this.hideArrow && { arrow: this.arrow }),
            placement: this.placement,
            distance: this.distance,
            sameWidth: this.sameWidth,
            strategy: 'fixed',
            skidding: 0,
        });
    }
    disconnectedCallback() {
        this.floatingUI?.destroy();
    }
    // Listeners
    // ==============
    async handleDocumentMouseDown(event) {
        // Close when clicking outside of the close element
        const path = event.composedPath();
        if (!path.includes(this.el)) {
            await this.hide();
        }
    }
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    /** Shows the tooltip */
    async show() {
        this.visible = true;
        this.showTooltip();
    }
    /** Hides the tooltip */
    async hide() {
        if (this.alwaysVisible)
            return;
        this.visible = false;
        this.hideTooltip();
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    handleTriggerMouseOver = () => {
        (async () => {
            if (this.displayOn !== 'hover')
                return;
            await this.show();
        })();
    };
    handleTriggerMouseLeave = () => {
        (async () => {
            if (this.displayOn !== 'hover')
                return;
            await this.hide();
        })();
    };
    handleTriggerOnClick = () => {
        (async () => {
            if (this.displayOn !== 'click')
                return;
            await (this.visible ? this.hide() : this.show());
        })();
    };
    showTooltip = () => {
        if (!this.panel)
            return;
        this.floatingUI?.update();
    };
    hideTooltip = () => {
        if (!this.panel)
            return;
        this.visible = false;
    };
    get isHidden() {
        return !this.visible && !this.alwaysVisible;
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("div", { key: '59f1c9d0ce4ea30c09e61e7848baf2139779d58b', class: "bq-tooltip relative", part: "base" }, h("div", { key: '949f2a03bb79c3cb15dcaa5d6dbe01137d6baacc', class: "bq-tooltip--trigger", onMouseOver: this.handleTriggerMouseOver, onMouseLeave: this.handleTriggerMouseLeave, onClick: this.handleTriggerOnClick, ref: (el) => (this.trigger = el), part: "trigger" }, h("slot", { key: '34ba72ab34c6e668e50e91a017d916b5f05573c8', name: "trigger" })), h("div", { key: 'aa0a6fb984049f38688694922da0ff70ff222fde', class: "bq-tooltip--panel", "aria-hidden": this.isHidden, hidden: this.isHidden, role: "tooltip", ref: (el) => (this.panel = el), part: "panel" }, !this.hideArrow && h("div", { key: '242d17e620f5c087c35cf5c1a8059fc8892917d8', class: "bq-tooltip--arrow", ref: (el) => (this.arrow = el) }), h("slot", { key: '7f2484ae908e1284919e3368aa698d975ef62a36' }))));
    }
    static get is() { return "bq-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-tooltip.css"]
        };
    }
    static get properties() {
        return {
            "alwaysVisible": {
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
                    "text": "If true, the tooltip will always be visible"
                },
                "getter": false,
                "setter": false,
                "attribute": "always-visible",
                "reflect": false,
                "defaultValue": "false"
            },
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
                    "text": "Distance between trigger element and tooltip"
                },
                "getter": false,
                "setter": false,
                "attribute": "distance",
                "reflect": true,
                "defaultValue": "10"
            },
            "hideArrow": {
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
                    "text": "If true, the arrow on the tooltip content won't be shown"
                },
                "getter": false,
                "setter": false,
                "attribute": "hide-arrow",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "placement",
                "reflect": true,
                "defaultValue": "'top'"
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
                    "text": "Whether the tooltip should have the same width as the trigger element\n(applicable only for content shorter than the trigger element)"
                },
                "getter": false,
                "setter": false,
                "attribute": "same-width",
                "reflect": true,
                "defaultValue": "false"
            },
            "displayOn": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'click' | 'hover'",
                    "resolved": "\"click\" | \"hover\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the action when the tooltip should be displayed, on hover (default) or click"
                },
                "getter": false,
                "setter": false,
                "attribute": "display-on",
                "reflect": true,
                "defaultValue": "'hover'"
            },
            "visible": {
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
                    "text": "Indicates whether or not the tooltip is visible when the component is first rendered,\nand when interacting with the trigger"
                },
                "getter": false,
                "setter": false,
                "attribute": "visible",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get methods() {
        return {
            "show": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Shows the tooltip",
                    "tags": []
                }
            },
            "hide": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Hides the tooltip",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "visible",
                "methodName": "handleVisibleChange"
            }, {
                "propName": "distance",
                "methodName": "handleFloatingUIOptionsChange"
            }, {
                "propName": "hideArrow",
                "methodName": "handleFloatingUIOptionsChange"
            }, {
                "propName": "placement",
                "methodName": "handleFloatingUIOptionsChange"
            }, {
                "propName": "sameWidth",
                "methodName": "handleFloatingUIOptionsChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "mousedown",
                "method": "handleDocumentMouseDown",
                "target": "document",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=bq-tooltip.js.map
