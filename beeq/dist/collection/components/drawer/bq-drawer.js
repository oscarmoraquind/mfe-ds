/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { DRAWER_PLACEMENT, DRAWER_POSITIONS } from "./bq-drawer.types";
import { enter, hasSlotContent, isNil, leave, validatePropValue } from "../../shared/utils";
/**
 * The Drawer component provides a sliding panel interface commonly used for navigation or presenting additional content without taking up significant screen space.
 *
 * @example How to use it
 * ```html
 * <bq-drawer position="end">
 *   <div class="flex gap-xs" slot="title">Title</div>
 *   <div class="...">
 *     Content
 *   </div>
 *   <div class="flex flex-1 justify-center gap-xs" slot="footer">
 *     <bq-button appearance="primary" block="" size="small">Button</bq-button>
 *     <bq-button appearance="link" block="" size="small">Button</bq-button>
 *   </div>
 * </bq-drawer>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/871139-drawer
 * @status stable
 *
 * @dependency bq-button
 * @dependency bq-icon
 * @dependency bq-divider
 *
 * @attr {boolean} enable-backdrop - If true, the backdrop overlay will be shown when the drawer opens.
 * @attr {boolean} close-on-click-outside - If true, the drawer will not close when clicking outside the panel.
 * @attr {boolean} close-on-esc - If true, the drawer will not close when the [Esc] key is pressed.
 * @attr {boolean} open - If true, the drawer component will be shown.
 * @attr {"start" | "end"} position - Defines the position of the drawer.
 *
 * @method show - Method to be called to show the drawer component.
 * @method hide - Method to be called to hide the drawer component.
 *
 * @event bqClose - Callback handler to be called when the drawer is closed.
 * @event bqOpen - Callback handler to be called when the drawer is opened.
 * @event bqAfterOpen - Callback handler to be called after the drawer has been opened.
 * @event bqAfterClose - Callback handler to be called after the drawer has been closed.
 *
 * @slot title - The title content of the drawer.
 * @slot - The body content of the drawer.
 * @slot footer - The footer content of the drawer.
 * @slot button-close - The close button content of the drawer.
 * @slot footer-divider - The footer divider content of the drawer.
 *
 * @part backdrop - The `<div>` that holds the backdrop overlay.
 * @part button-close - The BqButton that closes the drawer.
 * @part button-close__btn - The native button used under the hood that closes the drawer.
 * @part button-close__label - The text inside the native button that closes the drawer.
 * @part panel - The `<div>` that holds the drawer entire content.
 * @part header - The `<header>` that holds the icon, title, and close button.
 * @part title - The `<div>` that holds the title content.
 * @part body - The `<main>` that holds the drawer body content.
 * @part footer - The `<footer>` that holds footer content.
 *
 * @cssprop --bq-drawer--backgroundBackdrop - Background color of the backdrop
 * @cssprop --bq-drawer--gap - Gap between the drawer and the viewport
 * @cssprop --bq-drawer--width - Width of the drawer
 * @cssprop --bq-drawer--paddingX - Padding left and right of the drawer
 * @cssprop --bq-drawer--paddingY - Padding top and bottom of the drawer
 * @cssprop --bq-drawer--zIndex - Z-index of the drawer component
 */
export class BqDrawer {
    // Own Properties
    // ====================
    footerElem;
    drawerElem;
    OPEN_CSS_CLASS = 'bq-drawer--open';
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasFooter = false;
    hasIcon = false;
    // Public Property API
    // ========================
    /** If true, the backdrop overlay will be shown when the drawer opens */
    enableBackdrop = false;
    /** If true, the drawer will not close when clicking outside the panel */
    closeOnClickOutside = false;
    /** If true, the dialog will not close when the [Esc] key is pressed */
    closeOnEsc = false;
    /** If true, the drawer component will be shown */
    open;
    /** @deprecated Defines the position of the drawer */
    placement = 'right';
    /** Defines the position of the drawer */
    position = 'end';
    // Prop lifecycle events
    // =======================
    async handleOpenChange() {
        if (!this.open) {
            await this.handleAfterHide();
            return;
        }
        await this.handleAfterShow();
    }
    /**
     * !TO BE REMOVED: Delete this `@Watch()` once the deprecated `placement` property is removed
     * We need to maintain retro-compatibility with the deprecated `placement` property
     */
    handlePlacementChange() {
        if (!isNil(this.placement)) {
            console.warn(`❗️ [bq-drawer]: the 'placement' prop is deprecated and it will be removed in the future. Please use 'position' instead.`);
        }
        validatePropValue(DRAWER_PLACEMENT, 'right', this.el, 'placement');
        // Sync 'position' property
        const synPositionMap = {
            right: 'end',
            left: 'start',
        };
        this.position = synPositionMap[this.placement] || this.position;
    }
    handlePositionChange() {
        validatePropValue(DRAWER_POSITIONS, 'start', this.el, 'position');
        /**
         * Sync 'placement' property
         * !TO BE REMOVED: Delete the code below once the deprecated `placement` property is removed
         */
        const syncPlacementMap = {
            end: 'right',
            start: 'left',
        };
        this.placement = syncPlacementMap[this.position] || this.placement;
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler to be called when the drawer is closed */
    bqClose;
    /** Callback handler to be called when the drawer is opened */
    bqOpen;
    /** Callback handler to be called after the drawer has been opened */
    bqAfterOpen;
    /** Callback handler to be called after the drawer has been closed */
    bqAfterClose;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.handlePositionChange();
        // !TO BE REMOVED: Delete this once the deprecated `placement` property is removed
        this.handlePlacementChange();
    }
    // Listeners
    // ==============
    async handleMouseClick(event) {
        if (!this.open)
            return;
        if (!this.drawerElem || this.closeOnClickOutside)
            return;
        // Skip if the mouse button is not the main button
        if (event.button !== 0)
            return;
        const rect = this.drawerElem.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right) {
            await this.hide();
        }
    }
    async handleKeyDown(event) {
        if (!this.open)
            return;
        if (!this.drawerElem || this.closeOnEsc || !(event.key === 'Escape' || event.key === 'Esc'))
            return;
        await this.hide();
    }
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    /** Method to be called to hide the drawer component */
    async hide() {
        const ev = this.bqClose.emit();
        if (ev.defaultPrevented)
            return;
        this.open = false;
    }
    /** Method to be called to show the drawer component */
    async show() {
        const ev = this.bqOpen.emit();
        if (ev.defaultPrevented)
            return;
        this.open = true;
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    handleFooterSlotChange = () => {
        this.hasFooter = hasSlotContent(this.footerElem, 'footer');
    };
    handleAfterHide = async () => {
        if (!this.drawerElem)
            return;
        await leave(this.drawerElem);
        this.handleTransitionEnd();
    };
    handleAfterShow = async () => {
        if (!this.drawerElem)
            return;
        this.el.classList.add(this.OPEN_CSS_CLASS);
        await enter(this.drawerElem);
        this.handleTransitionEnd();
    };
    handleTransitionEnd = () => {
        if (this.open) {
            this.bqAfterOpen.emit();
            return;
        }
        this.bqAfterClose.emit();
        this.el.classList.remove(this.OPEN_CSS_CLASS);
    };
    get isPositionStart() {
        // !TO BE REMOVED: `placement` is deprecated and will be removed in the future
        return this.position === 'start' || this.placement === 'left';
    }
    get isPositionEnd() {
        // !TO BE REMOVED: `placement` is deprecated and will be removed in the future
        return this.position === 'end' || this.placement === 'right';
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h(Host, { key: '645d443af186232f712d86c483b1c56de3fb34a5' }, this.enableBackdrop && (h("div", { key: 'd32abd3db021d4b222d674204fb2b6c8e364a430', class: {
                'fixed inset-0 block bg-[--bq-drawer--backgroundBackdrop] opacity-0 transition-opacity duration-300': true,
                'pointer-events-none': !this.open,
                'opacity-60': this.open,
            }, tabIndex: -1, part: "backdrop" })), h("div", { key: 'e412f591d4a6d5596058e61df70522f9517abef7', class: {
                [`bq-drawer transition-all duration-300 ease-in-out ${this.position || this.placement}`]: true,
                '-start-[--bq-drawer--width]': this.isPositionStart,
                '-end-[--bq-drawer--width]': this.isPositionEnd,
                'start-0': this.open && this.isPositionStart,
                'end-0': this.open && this.isPositionEnd,
            }, ref: (div) => (this.drawerElem = div), "aria-hidden": !this.open ? 'true' : 'false', "aria-labelledby": "bq-drawer__title", "aria-modal": "true", hidden: !this.open, part: "panel", role: "dialog" }, h("header", { key: 'c272a91c5bb30456c628612374e55201d80a5ada', class: "flex items-center", part: "header" }, h("h2", { key: 'eeed6fb535afbe1f77d8c8751c16389a8969db5a', class: "flex-1 items-center justify-between font-bold leading-regular text-primary", id: "bq-drawer__title", part: "title" }, h("slot", { key: 'd2d264225b7a4fc8cf2666add42f49dab9afa610', name: "title" })), h("div", { key: '1e9230701c5e60473335594e64d45795f034c7c8', class: "flex", part: "button-close" }, h("bq-button", { key: 'bcb40fcf65774bc50fb710250e10b36a59b87e85', class: "[&::part(button)]:rounded-s [&::part(button)]:border-0 [&::part(button)]:bs-fit [&::part(button)]:p-b-0 [&::part(button)]:p-i-0 [&::part(label)]:inline-flex", appearance: "text", size: "small", slot: "button-close", exportparts: "button:button-close__btn,label:button-close__label", onClick: this.hide.bind(this) }, h("slot", { key: '71c62640a9a2ded728da262ff21eb3231c093446', name: "button-close" }, h("bq-icon", { key: '8ecbaa03cefbc36af5b62928b027998670223e91', name: "x-bold", role: "img", title: "Close" }))))), h("main", { key: '91e7f56b48301b89fc038781aa16ffdea469d4aa', class: "block flex-auto overflow-auto", part: "body" }, h("slot", { key: 'f8a9c484014473d163fce51842f42a6192df73e3' })), h("footer", { key: '767cd0c70930555b0a063d62e14a35c1bb728136', class: {
                block: true,
                '!hidden': !this.hasFooter,
            }, ref: (footerElem) => (this.footerElem = footerElem), part: "footer" }, h("slot", { key: 'f2f45af2ffb77d16ad4f2527571bc86047de4530', name: "footer-divider" }, h("bq-divider", { key: '70bff4d1228168e238e0af78cbd51a26b982fbde', class: "mb-m block", dashed: true })), h("slot", { key: 'ca1e7cf7be41185a31ce124097bdaa3556c537cc', name: "footer", onSlotchange: this.handleFooterSlotChange })))));
    }
    static get is() { return "bq-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-drawer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-drawer.css"]
        };
    }
    static get properties() {
        return {
            "enableBackdrop": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the backdrop overlay will be shown when the drawer opens"
                },
                "getter": false,
                "setter": false,
                "attribute": "enable-backdrop",
                "reflect": true,
                "defaultValue": "false"
            },
            "closeOnClickOutside": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the drawer will not close when clicking outside the panel"
                },
                "getter": false,
                "setter": false,
                "attribute": "close-on-click-outside",
                "reflect": true,
                "defaultValue": "false"
            },
            "closeOnEsc": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the dialog will not close when the [Esc] key is pressed"
                },
                "getter": false,
                "setter": false,
                "attribute": "close-on-esc",
                "reflect": true,
                "defaultValue": "false"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the drawer component will be shown"
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true
            },
            "placement": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TDrawerPlacement",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "TDrawerPlacement": {
                            "location": "import",
                            "path": "./bq-drawer.types",
                            "id": "../../packages/beeq/src/components/drawer/bq-drawer.types.ts::TDrawerPlacement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "Defines the position of the drawer"
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "placement",
                "reflect": true,
                "defaultValue": "'right'"
            },
            "position": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TDrawerPosition",
                    "resolved": "\"end\" | \"start\"",
                    "references": {
                        "TDrawerPosition": {
                            "location": "import",
                            "path": "./bq-drawer.types",
                            "id": "../../packages/beeq/src/components/drawer/bq-drawer.types.ts::TDrawerPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Defines the position of the drawer"
                },
                "getter": false,
                "setter": false,
                "attribute": "position",
                "reflect": true,
                "defaultValue": "'end'"
            }
        };
    }
    static get states() {
        return {
            "hasFooter": {},
            "hasIcon": {}
        };
    }
    static get events() {
        return [{
                "method": "bqClose",
                "name": "bqClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called when the drawer is closed"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bqOpen",
                "name": "bqOpen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called when the drawer is opened"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bqAfterOpen",
                "name": "bqAfterOpen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called after the drawer has been opened"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bqAfterClose",
                "name": "bqAfterClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called after the drawer has been closed"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
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
                    "text": "Method to be called to hide the drawer component",
                    "tags": []
                }
            },
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
                    "text": "Method to be called to show the drawer component",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }, {
                "propName": "placement",
                "methodName": "handlePlacementChange"
            }, {
                "propName": "position",
                "methodName": "handlePositionChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "mousedown",
                "method": "handleMouseClick",
                "target": "window",
                "capture": true,
                "passive": true
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": "window",
                "capture": true,
                "passive": false
            }];
    }
}
//# sourceMappingURL=bq-drawer.js.map
