/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { Fragment, h } from "@stencil/core";
import { getTextContent } from "../../shared/utils";
/**
 * Represents the default side menu item for standard navigation elements, providing a clean and straightforward way to display menu options.
 *
 * @example How to use it
 * ```html
 * <bq-side-menu-item>
 *   <bq-icon name="star-four" slot="prefix"></bq-icon>
 *   Menu item
 *   <bq-badge slot="suffix">5</bq-badge>
 * </bq-side-menu-item>
 * ```
 * @documentation https://www.beeq.design/3d466e231/p/99822d-side-menu/b/09d7b1
 * @status stable
 *
 * @dependency bq-tooltip
 *
 * @attr {boolean} active - If `true`, the menu item will be shown as active/selected.
 * @attr {boolean} collapse - If `true`, the item label and suffix will be hidden and the with will be reduced according to its parent.
 * @attr {boolean} disabled - If `true`, the menu item will be disabled (no interaction allowed).
 *
 * @event bqBlur - Handler to be called when the button loses focus.
 * @event bqClick - Handler to be called when the button gets focused.
 * @event bqFocus - Handler to be called when the button is clicked.
 *
 * @slot prefix - The prefix part of menu item.
 * @slot - The content of the menu item.
 * @slot suffix - The suffix part of menu item.
 *
 * @part base - The component wrapper container inside the shadow DOM
 * @part label - The label slot
 * @part prefix - The prefix slot
 * @part suffix - The suffix slot
 * @part panel - The `<div>` container that holds the tooltip content (when the side menu is collapsed)
 * @part trigger - The `<div>` container that holds the element which displays tooltip on hover (when the side menu is collapsed)
 *
 * @cssprop --bq-side-menu-item--bg-default - Side menu item default background color
 * @cssprop --bq-side-menu-item--bg-hover - Side menu item hover background color
 * @cssprop --bq-side-menu-item--bg-active - Side menu item active background color
 * @cssprop --bq-side-menu-item--text-default - Side menu item default text color
 * @cssprop --bq-side-menu-item--text-hover - Side menu item hover text color
 * @cssprop --bq-side-menu-item--text-active - Side menu item active text color
 * @cssprop --bq-side-menu-item--text-disabled - Side menu item disable text color
 * @cssprop --bq-side-menu-item--paddingX - Side menu item vertical padding
 * @cssprop --bq-side-menu-item--paddingY - Side menu item horizontal padding
 */
export class BqSideMenuItem {
    // Own Properties
    // ====================
    labelElem;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    textContent;
    // Public Property API
    // ========================
    /** If true, the menu item will be shown as active/selected. */
    active = false;
    /** If true, the item label and suffix will be hidden and the with will be reduce according to its parent */
    collapse = false;
    /** If true, the menu item will be disabled (no interaction allowed) */
    disabled = false;
    // Prop lifecycle events
    // =======================
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when the button loses focus */
    bqBlur;
    /** Handler to be called when the button is clicked */
    bqFocus;
    /** Handler to be called when button gets focus */
    bqClick;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentDidLoad() {
        this.handleSlotChange();
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
    handleSlotChange = () => {
        if (!this.labelElem)
            return;
        this.textContent = getTextContent(this.labelElem.querySelector('slot'));
    };
    handleBlur = (ev) => {
        if (this.disabled) {
            ev.preventDefault();
            ev.stopPropagation();
            return;
        }
        this.bqBlur.emit(this.el);
    };
    handleFocus = (ev) => {
        if (this.disabled) {
            ev.preventDefault();
            ev.stopPropagation();
            return;
        }
        this.bqFocus.emit(this.el);
    };
    handleClick = (ev) => {
        if (this.disabled) {
            ev.preventDefault();
            ev.stopPropagation();
            return;
        }
        this.bqClick.emit(this.el);
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    menuItem = () => (h(Fragment, null, h("a", { class: {
            'bq-side-menu__item': true,
            active: this.active,
            disabled: this.disabled,
            'is-collapsed': this.collapse,
        }, onBlur: this.handleBlur, onFocus: this.handleFocus, onClick: this.handleClick, "aria-disabled": this.disabled ? 'true' : 'false', role: "menuitem", tabindex: this.disabled ? -1 : 0, slot: "trigger", part: "base" }, h("div", { class: "bq-side-menu__item--prefix flex items-center", part: "prefix" }, h("slot", { name: "prefix" })), h("div", { class: "bq-side-menu__item--label overflow-hidden text-ellipsis whitespace-nowrap", ref: (labelElem) => (this.labelElem = labelElem) }, h("slot", { onSlotchange: this.handleSlotChange })), h("div", { class: "bq-side-menu__item--suffix ml-auto flex items-center", part: "suffix" }, h("slot", { name: "suffix" })))));
    render() {
        return !this.collapse ? (this.menuItem()) : (h("bq-tooltip", { class: "bq-side-menu__item--tooltip block", placement: "right", exportparts: "trigger, panel" }, this.textContent, this.menuItem()));
    }
    static get is() { return "bq-side-menu-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-side-menu-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-side-menu-item.css"]
        };
    }
    static get properties() {
        return {
            "active": {
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
                    "text": "If true, the menu item will be shown as active/selected."
                },
                "getter": false,
                "setter": false,
                "attribute": "active",
                "reflect": false,
                "defaultValue": "false"
            },
            "collapse": {
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
                    "text": "If true, the item label and suffix will be hidden and the with will be reduce according to its parent"
                },
                "getter": false,
                "setter": false,
                "attribute": "collapse",
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
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
                    "text": "If true, the menu item will be disabled (no interaction allowed)"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "textContent": {}
        };
    }
    static get events() {
        return [{
                "method": "bqBlur",
                "name": "bqBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when the button loses focus"
                },
                "complexType": {
                    "original": "HTMLBqSideMenuItemElement",
                    "resolved": "HTMLBqSideMenuItemElement",
                    "references": {
                        "HTMLBqSideMenuItemElement": {
                            "location": "global",
                            "id": "global::HTMLBqSideMenuItemElement"
                        }
                    }
                }
            }, {
                "method": "bqFocus",
                "name": "bqFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when the button is clicked"
                },
                "complexType": {
                    "original": "HTMLBqSideMenuItemElement",
                    "resolved": "HTMLBqSideMenuItemElement",
                    "references": {
                        "HTMLBqSideMenuItemElement": {
                            "location": "global",
                            "id": "global::HTMLBqSideMenuItemElement"
                        }
                    }
                }
            }, {
                "method": "bqClick",
                "name": "bqClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when button gets focus"
                },
                "complexType": {
                    "original": "HTMLBqSideMenuItemElement",
                    "resolved": "HTMLBqSideMenuItemElement",
                    "references": {
                        "HTMLBqSideMenuItemElement": {
                            "location": "global",
                            "id": "global::HTMLBqSideMenuItemElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=bq-side-menu-item.js.map
