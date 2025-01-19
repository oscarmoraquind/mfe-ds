/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
let id = 0;
/**
 * The Dropdown Component is commonly used when presenting a list of selectable options that are too numerous to fit comfortably on the screen.
 * They provide an efficient way to save space and present a long list of options in a compact and organized manner.
 *
 * @example How to use it
 * ```html
 * <bq-dropdown placement="bottom-start">
 *   <bq-button slot="trigger">Dropdown</bq-button>
 *   <bq-option-list>
 *     <bq-option value="users">...</bq-option>
 *     <bq-option value="user">...</bq-option>
 *     <bq-option value="dashboard">...</bq-option>
 *     <bq-option value="settings">...</bq-option>
 *     <bq-option value="logout">...</bq-option>
 *   </bq-option-list>
 * </bq-dropdown>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/47ff4b-dropdown
 * @status stable
 *
 * @dependency bq-panel
 *
 * @attr {boolean} disabled - If true, the dropdown panel will be visible and won't be shown.
 * @attr {number} distance - Represents the distance (gutter or margin) between the panel and the trigger element.
 * @attr {boolean} keep-open-on-select - If true, the panel will remain open after a selection is made.
 * @attr {"top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end"} placement - Position of the panel.
 * @attr {boolean} open - If true, the panel will be visible.
 * @attr {string} panel-height - When set, it will override the height of the dropdown panel.
 * @attr {boolean} same-width - Whether the panel should have the same width as the trigger element.
 * @attr {number} skidding - Represents the skidding between the panel and the trigger element.
 * @attr {"fixed" | "absolute"} strategy - Defines the strategy to position the panel.
 *
 * @event bqOpen - Callback handler to be called when the dropdown panel is opened or closed.
 *
 * @slot trigger - The trigger element that opens the dropdown panel.
 * @slot - The content of the dropdown panel.
 *
 * @part base - The component's internal wrapper.
 * @part dropdown - The `<bq-panel>` element used under the hood to display the dropdown panel.
 * @part panel - The `<div>` element used to display and style the panel inside the `<bq-panel>` element.
 * @part trigger - The `<div>` element that hosts the trigger element.
 *
 * @cssprop --bq-panel--background - Panel background color
 * @cssprop --bq-panel--border-color - Panel border color
 * @cssprop --bq-panel--border-radius - Panel border radius
 * @cssprop --bq-panel--border-style - Panel border style
 * @cssprop --bq-panel--border-width - Panel border width
 * @cssprop --bq-panel--box-shadow - Panel box shadow
 * @cssprop --bq-panel--padding - Panel padding
 * @cssprop --bq-panel--height - Panel height
 * @cssprop --bq-panel--width - Panel width
 * @cssprop --bq-panel-z-index - Panel z-index applied when opened
 */
export class BqDropdown {
    // Own Properties
    // ====================
    dropdownPanelId = `bq-dropdown-panel-${++id}`;
    triggerElem;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    // Public Property API
    // ========================
    /** If true, the dropdown panel will be visible and won't be shown. */
    disabled = false;
    /** Represents the distance (gutter or margin) between the panel and the trigger element. */
    distance = 4;
    /** If true, the panel will remain open after a selection is made. */
    keepOpenOnSelect = false;
    /** Position of the panel */
    placement = 'bottom-start';
    /** If true, the panel will be visible. */
    open = false;
    /** When set, it will override the height of the dropdown panel */
    panelHeight;
    /** Whether the panel should have the same width as the trigger element */
    sameWidth = false;
    /**  Represents the skidding between the panel and the trigger element. */
    skidding = 0;
    /** Defines the strategy to position the panel */
    strategy = 'fixed';
    // Prop lifecycle events
    // =======================
    onOpenChange() {
        this.bqOpen.emit({ open: this.open });
    }
    handleDisabledChange() {
        if (!this.triggerElem)
            return;
        // set 'disabled' attribute based on 'this.disabled' value, ensuring consistent state handling
        if (!this.disabled) {
            this.triggerElem?.removeAttribute('disabled');
            return;
        }
        this.triggerElem?.setAttribute('disabled', 'true');
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler to be called when the dropdown panel is opened or closed. */
    bqOpen;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentDidLoad() {
        this.triggerElem = this.el.querySelector('[slot="trigger"]');
        this.handleDisabledChange();
    }
    // Listeners
    // ==============
    /** Listens for the 'click' event on the document object
     * and closes the dropdown panel if the click is outside the component.
     */
    onClickOutside(event) {
        if (!this.open)
            return;
        // Close when clicking outside of the close element
        const path = event.composedPath();
        if (!path.includes(this.el)) {
            this.open = false;
        }
    }
    /**
     * Listens for the 'keyup' event on the window object
     * and closes the dropdown panel if the 'Escape' key or 'Tab' key outside the component is pressed.
     */
    onEscape(event) {
        if (!this.open)
            return;
        if (event.key === 'Escape' || (event.key === 'Tab' && !event.composedPath().includes(this.el))) {
            this.open = false;
        }
    }
    onItemSelect() {
        if (this.keepOpenOnSelect)
            return;
        this.open = false;
    }
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
    togglePanel = () => {
        // Don't toggle the panel if the component is disabled or the trigger element is disabled
        if (this.disabled || this.triggerElem?.hasAttribute('disabled'))
            return;
        this.open = !this.open;
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const style = {
            ...(this.panelHeight && { '--bq-panel--height': this.panelHeight }),
        };
        return (h("div", { key: '66d8a6799031b547cf4224d52ab8ee85098e0b85', class: "bq-dropdown", part: "base" }, h("div", { key: '0dc08ce3861034bdf0966a7f7ab834d58228e2f0', class: "bq-dropdown__trigger block", "aria-controls": this.dropdownPanelId, "aria-haspopup": "true", onClick: this.togglePanel, part: "trigger" }, h("slot", { key: 'a89fd974c4e2638ae1be90ad3b3b08aef61afbac', name: "trigger" })), h("bq-panel", { key: 'f903ab3a6385af3cf5313c6ffff820e9318ef064', style: style, id: this.dropdownPanelId, class: "bq-dropdown__panel", distance: this.distance, placement: this.placement, open: this.open, sameWidth: this.sameWidth, skidding: this.skidding, strategy: this.strategy, role: "group", part: "dropdown", exportparts: "panel" }, h("slot", { key: 'fac96b48bae524cd541d397ece9d891d772f4336' }))));
    }
    static get is() { return "bq-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-dropdown.css"]
        };
    }
    static get properties() {
        return {
            "disabled": {
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
                    "text": "If true, the dropdown panel will be visible and won't be shown."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
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
                    "text": "Represents the distance (gutter or margin) between the panel and the trigger element."
                },
                "getter": false,
                "setter": false,
                "attribute": "distance",
                "reflect": true,
                "defaultValue": "4"
            },
            "keepOpenOnSelect": {
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
                    "text": "If true, the panel will remain open after a selection is made."
                },
                "getter": false,
                "setter": false,
                "attribute": "keep-open-on-select",
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
            "panelHeight": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "When set, it will override the height of the dropdown panel"
                },
                "getter": false,
                "setter": false,
                "attribute": "panel-height",
                "reflect": true
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
    static get events() {
        return [{
                "method": "bqOpen",
                "name": "bqOpen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called when the dropdown panel is opened or closed."
                },
                "complexType": {
                    "original": "{ open: boolean }",
                    "resolved": "{ open: boolean; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "onOpenChange"
            }, {
                "propName": "disabled",
                "methodName": "handleDisabledChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "onClickOutside",
                "target": "document",
                "capture": false,
                "passive": true
            }, {
                "name": "keyup",
                "method": "onEscape",
                "target": "window",
                "capture": false,
                "passive": true
            }, {
                "name": "bqSelect",
                "method": "onItemSelect",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=bq-dropdown.js.map
