/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { isClient, isHTMLElement } from "../../shared/utils";
/**
 *The default side menu serves as a versatile container for organizing and displaying navigation elements,
 * with default side menu items providing a clean and straightforward way to represent individual menu options.
 * Together, they form the foundation for building structured and intuitive side menu layouts.
 *
 * @example How to use it
 * ```html
 * <bq-side-menu>
 *   <div slot="logo">
 *     <h1>Your Logo</h1>
 *   </div>
 *   <bq-side-menu-item active>
 *     <bq-icon name="home" slot="prefix"></bq-icon>
 *     Home
 *   </bq-side-menu-item>
 *   <bq-side-menu-item>
 *     <bq-icon name="settings" slot="prefix"></bq-icon>
 *     Settings
 *   </bq-side-menu-item>
 *   <bq-side-menu-item disabled>
 *     <bq-icon name="help" slot="prefix"></bq-icon>
 *     Help
 *   </bq-side-menu-item>
 * </bq-side-menu>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/99822d-side-menu/b/09d7b1
 * @status stable
 *
 * @attr {"brand" | "default" | "inverse"} appearance - It sets a predefined appearance of the side menu.
 * @attr {boolean} collapse - If `true`, the container will reduce its width.
 * @attr {"medium" | "small"} - size - It sets the size of the navigation menu items.
 *
 * @method toggleCollapse - Method to be called to toggle the collapse state of the side menu.
 *
 * @event bqCollapse - Callback handler to be called when the Side menu changes its width from expanded to collapse and vice versa.
 * @event bqSelect - Callback handler to be called when the active/selected menu item changes.
 *
 * @slot logo - The section for displaying the logo or brand in the side menu.
 * @slot The main section that holds all menu items.
 * @slot footer - The section for adding footer content to the side menu.
 *
 * @part base - HTML `<aside>` root container
 * @part footer - HTML `<div>` element that holds the footer
 * @part logo - HTML `<div>` element that holds the logo
 * @part nav - HTML `<nav>` element that holds the navigation items
 *
 * @cssprop --bq-side-menu--bg-color - Side menu background color
 * @cssprop --bq-side-menu--brand-color - Side menu logo color
 * @cssprop --bq-side-menu--border-color - Side menu border color
 */
export class BqSideMenu {
    // Own Properties
    // ====================
    menuItemCssSelector = 'bq-side-menu-item';
    bodyCss = 'bq-body--side-menu';
    bodyCssExpand = 'bq-body--side-menu__expand';
    bodyCssCollapse = 'bq-body--side-menu__collapse';
    menuElem;
    // Reference to host HTML element
    // ===================================
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    documentBody;
    // Public Property API
    // ========================
    /** It sets a predefined appearance of the side menu */
    appearance = 'default';
    /** If true, the container will reduce its width */
    collapse = false;
    /** It sets the size of the navigation menu items */
    size = 'medium';
    // Prop lifecycle events
    // =======================
    onCollapsePropChange() {
        this.handleCollapse();
        this.bqCollapse.emit({ collapse: this.collapse });
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler to be called when the Side menu changes its width from expanded to collapse and vice versa */
    bqCollapse;
    /** Callback handler to be called when the active/selected menu item changes */
    bqSelect;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentDidLoad() {
        if (!isClient())
            return;
        this.documentBody = document.querySelector('body');
        this.documentBody.classList.add(this.bodyCss);
        this.handleCollapse();
    }
    disconnectedCallback() {
        this.cleanDocumentBodyClass();
    }
    // Listeners
    // ==============
    onMenuItemClick(event) {
        const { target: item } = event;
        if (!isHTMLElement(item, 'bq-side-menu-item'))
            return;
        this.menuItems.forEach((menuItem) => (menuItem.active = !menuItem.disabled && menuItem === item));
        this.bqSelect.emit(item);
    }
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    /** Toggle the collapse state of the side menu */
    async toggleCollapse() {
        this.collapse = !this.collapse;
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    get menuItems() {
        if (!this.menuElem)
            return [];
        const slot = this.menuElem.querySelector('slot');
        return [...slot.assignedElements({ flatten: true })].filter((el) => el.tagName.toLowerCase() === this.menuItemCssSelector);
    }
    handleCollapse = () => {
        if (!this.menuItems.length)
            return;
        this.menuItems.forEach((menuItem) => (menuItem.collapse = this.collapse));
        if (this.collapse) {
            this.collapseDocumentBody();
        }
        else {
            this.expandDocumentBody();
        }
    };
    collapseDocumentBody = () => {
        if (!this.collapse)
            return;
        this.documentBody.classList.remove(this.bodyCssExpand);
        this.documentBody.classList.add(this.bodyCssCollapse);
    };
    expandDocumentBody = () => {
        if (this.collapse)
            return;
        this.documentBody.classList.remove(this.bodyCssCollapse);
        this.documentBody.classList.add(this.bodyCssExpand);
    };
    cleanDocumentBodyClass = () => {
        this.documentBody.classList.remove(this.bodyCss, this.bodyCssCollapse, this.bodyCssExpand);
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("aside", { key: '75cc7b1e1631af71c734e096af6d323900481dd0', class: { 'bq-side-menu overflow-y-auto': true, 'is-collapsed': this.collapse }, part: "base" }, h("div", { key: '85dcabdddc0e5fca71add40b6cdf1446cdf3c340', class: { 'bq-side-menu--logo': true, 'is-collapsed': this.collapse }, part: "logo" }, h("slot", { key: 'c1374c576f025c4f3616a9325b2e29cdbe7f26c9', name: "logo" })), h("nav", { key: 'e44f912b5769e75c0e04341bb4822ac39b237824', class: "bq-side-menu--nav flex flex-col gap-y-xs px-xs pt-xs2", ref: (navElem) => (this.menuElem = navElem),
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role: "menu", part: "nav" }, h("slot", { key: '0a5270a60b47e5eafae825f74a2a6a231ef9cf00' })), h("div", { key: '24202fd7a842a5341ab464720099847dd82c77cc', class: "bq-side-menu--footer sticky flex justify-center bg-[var(--bq-side-menu--bg-color)] p-xs inset-be-0 m-bs-[auto]", part: "footer" }, h("slot", { key: '474971e3d7c203141f96b3e34f9bab1356c3b1af', name: "footer" }))));
    }
    static get is() { return "bq-side-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-side-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-side-menu.css"]
        };
    }
    static get properties() {
        return {
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TSideMenuAppearance",
                    "resolved": "\"brand\" | \"default\" | \"inverse\"",
                    "references": {
                        "TSideMenuAppearance": {
                            "location": "import",
                            "path": "./bq-side-menu.types",
                            "id": "../../packages/beeq/src/components/side-menu/bq-side-menu.types.ts::TSideMenuAppearance"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "It sets a predefined appearance of the side menu"
                },
                "getter": false,
                "setter": false,
                "attribute": "appearance",
                "reflect": true,
                "defaultValue": "'default'"
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
                    "text": "If true, the container will reduce its width"
                },
                "getter": false,
                "setter": false,
                "attribute": "collapse",
                "reflect": true,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TSideMenuSize",
                    "resolved": "\"medium\" | \"small\"",
                    "references": {
                        "TSideMenuSize": {
                            "location": "import",
                            "path": "./bq-side-menu.types",
                            "id": "../../packages/beeq/src/components/side-menu/bq-side-menu.types.ts::TSideMenuSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "It sets the size of the navigation menu items"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'medium'"
            }
        };
    }
    static get states() {
        return {
            "documentBody": {}
        };
    }
    static get events() {
        return [{
                "method": "bqCollapse",
                "name": "bqCollapse",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called when the Side menu changes its width from expanded to collapse and vice versa"
                },
                "complexType": {
                    "original": "{ collapse: boolean }",
                    "resolved": "{ collapse: boolean; }",
                    "references": {}
                }
            }, {
                "method": "bqSelect",
                "name": "bqSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called when the active/selected menu item changes"
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
    static get methods() {
        return {
            "toggleCollapse": {
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
                    "text": "Toggle the collapse state of the side menu",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "collapse",
                "methodName": "onCollapsePropChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "bqClick",
                "method": "onMenuItemClick",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=bq-side-menu.js.map
