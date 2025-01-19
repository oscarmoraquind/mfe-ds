/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { TAB_ORIENTATION, TAB_PLACEMENT, TAB_SIZE } from "./bq-tab.types";
import { hasSlotContent, validatePropValue } from "../../shared/utils";
/**
 * The tab is a user interface element that allows users to navigate between different sections of a page.
 * It should be used inside `<bq-tab-group>` component.
 *
 * @example How to use it
 * ```html
 * <bq-tab tab-id="1" controls="panel-1">Tab 1</bq-tab>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/775321-tabs
 * @status stable
 *
 * @attr {boolean} active - If `true` tab is active
 * @attr {string} controls - The tab panel id that the tab controls
 * @attr {boolean} disabled - If `true` tab is disabled
 * @attr {string} orientation - The direction that tab should be render
 * @attr {string} placement - The placement that tab should be render
 * @attr {string} size - The size of the tab
 * @attr {string} tab-id - The id of the tab
 *
 * @event bqClick - Handler to be called when the tab state changes
 * @event bqFocus - Handler to be called when the tab gets focus
 * @event bqBlur - Handler to be called when the tab loses focus
 * @event bqKeyDown - Handler to be called when the tab key is pressed
 *
 * @method vClick - Simulate a click event on the native `<button>` HTML element used under the hood
 * @method vFocus - Sets focus on the native `<button>` HTML element used under the hood
 * @method vBlur - Remove focus from the native `<button>` HTML element used under the hood
 *
 * @part base - The HTML button used under the hood.
 * @part content - The HTML `<div>` element that holds the content.
 * @part icon - The HTML `<div>` element that holds the icon content.
 * @part text - The HTML `<div>` element that holds the text content.
 * @part underline - The HTML `<div>` element that display active state.
 *
 * @cssprop --bq-tab--font-size - Font size
 * @cssprop --bq-tab--font-weight - Font weight
 * @cssprop --bq-tab--icon-size-large - Icon size for large tab
 * @cssprop --bq-tab--icon-size-medium - Icon size for medium tab
 * @cssprop --bq-tab--icon-size-small - Icon size for small tab
 * @cssprop --bq-tab--label-icon-gap - Gap between label and icon
 * @cssprop --bq-tab--line-height - Line height
 * @cssprop --bq-tab--padding-horizontal-large - Horizontal padding for large tab
 * @cssprop --bq-tab--padding-horizontal-medium - Horizontal padding for medium tab
 * @cssprop --bq-tab--padding-horizontal-small - Horizontal padding for small tab
 * @cssprop --bq-tab--padding-vertical-large - Vertical padding for large tab
 * @cssprop --bq-tab--padding-vertical-medium - Vertical padding for medium tab
 * @cssprop --bq-tab--padding-vertical-small - Vertical padding for small tab
 */
export class BqTab {
    // Own Properties
    // ====================
    buttonElement;
    iconElement;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    tabIndex = null;
    hasIcon = false;
    // Public Property API
    // ========================
    /** If true tab is active */
    active;
    /** The tab panel id that the tab controls */
    controls;
    /** If true tab is disabled */
    disabled = false;
    /** The direction that tab should be render */
    orientation = 'horizontal';
    /** The placement that tab should be render */
    placement = 'start';
    /** The size of the tab */
    size = 'medium';
    /** The id of the tab */
    tabId;
    // Prop lifecycle events
    // =======================
    checkPropValues() {
        validatePropValue(TAB_SIZE, 'medium', this.el, 'size');
        validatePropValue(TAB_ORIENTATION, 'horizontal', this.el, 'orientation');
        validatePropValue(TAB_PLACEMENT, 'start', this.el, 'placement');
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when the tab state changes */
    bqClick;
    /** Handler to be called when the tab gets focus */
    bqFocus;
    /** Handler to be called when the tab loses focus */
    bqBlur;
    /** Handler to be called when the tab key is pressed */
    bqKeyDown;
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
    /**
     * Simulate a click event on the native `<button>` HTML element used under the hood.
     * Use this method instead of the global `element.click()`.
     */
    async vClick() {
        this.buttonElement?.click();
    }
    /**
     * Sets focus on the native `<button>` HTML element used under the hood.
     * Use this method instead of the global `element.focus()`.
     */
    async vFocus() {
        this.buttonElement?.focus();
    }
    /**
     * Remove focus from the native `<button>` HTML element used under the hood.
     * Use this method instead of the global `element.blur()`.
     */
    async vBlur() {
        this.buttonElement?.blur();
    }
    /**
     * @internal Sets tabindex on the native `<button>` HTML element used under the hood.
     * This method is used inside `<bq-tab-group>` to make tab focusable after the active one is focused
     */
    async enableFocus(value) {
        this.tabIndex = value ? 0 : null;
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    handleClick = () => {
        this.active = true;
        this.bqClick.emit(this.el);
    };
    handleOnFocus = () => {
        this.bqFocus.emit(this.el);
    };
    handleOnBlur = () => {
        this.bqBlur.emit(this.el);
    };
    handleOnKeyDown = (event) => {
        this.bqKeyDown.emit(event);
    };
    handleIconSlotChange = () => {
        this.hasIcon = hasSlotContent(this.iconElement, 'icon');
    };
    get tabindex() {
        // NOTE: this.active is undefined when is not part of bq-tab-group
        return `${this.tabIndex ?? -1 + +(this.active ?? 1)}`;
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("button", { key: 'a0ec1121ccd09d7eea2e6b433cfc83f18fe1895f', ref: (el) => (this.buttonElement = el), class: {
                [`bq-tab bq-tab--${this.size} bq-tab--${this.orientation}-${this.placement}`]: true,
                'text-brand': this.active,
                'text-primary': !this.active,
            }, id: this.tabId, onBlur: this.handleOnBlur, onClick: this.handleClick, onFocus: this.handleOnFocus, onKeyDown: this.handleOnKeyDown, disabled: this.disabled, role: "tab", "aria-controls": this.controls, "aria-disabled": this.disabled ? 'true' : 'false', "aria-selected": this.active ? 'true' : 'false', tabindex: this.tabindex, part: "base" }, h("div", { key: 'a2b7c29dd2e4955643852e1fb28eac7abf0dff1d', class: "flex items-center justify-center", part: "content" }, h("div", { key: 'f4cd985d627f423baeec0e7f793def74dce9f705', class: "flex", ref: (span) => (this.iconElement = span), part: "icon" }, h("slot", { key: '741895e05bea256789d1813461495515842d09fa', name: "icon", onSlotchange: this.handleIconSlotChange })), h("div", { key: 'b1744221688c1764ed1c746245f0d5e72d718f23', class: { 'line-clamp-1': true, 'ms-[--bq-tab--label-icon-gap]': this.hasIcon }, part: "text" }, h("slot", { key: 'aaa99fa9e84f72b95ddf97d5b3f711164718bfd0' })))));
    }
    static get is() { return "bq-tab"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-tab.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-tab.css"]
        };
    }
    static get properties() {
        return {
            "active": {
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
                    "text": "If true tab is active"
                },
                "getter": false,
                "setter": false,
                "attribute": "active",
                "reflect": true
            },
            "controls": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The tab panel id that the tab controls"
                },
                "getter": false,
                "setter": false,
                "attribute": "controls",
                "reflect": true
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
                    "text": "If true tab is disabled"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "orientation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TTabOrientation",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "TTabOrientation": {
                            "location": "import",
                            "path": "./bq-tab.types",
                            "id": "../../packages/beeq/src/components/tab/bq-tab.types.ts::TTabOrientation"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The direction that tab should be render"
                },
                "getter": false,
                "setter": false,
                "attribute": "orientation",
                "reflect": true,
                "defaultValue": "'horizontal'"
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TTabPlacement",
                    "resolved": "\"end\" | \"start\"",
                    "references": {
                        "TTabPlacement": {
                            "location": "import",
                            "path": "./bq-tab.types",
                            "id": "../../packages/beeq/src/components/tab/bq-tab.types.ts::TTabPlacement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The placement that tab should be render"
                },
                "getter": false,
                "setter": false,
                "attribute": "placement",
                "reflect": true,
                "defaultValue": "'start'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TTabSize",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {
                        "TTabSize": {
                            "location": "import",
                            "path": "./bq-tab.types",
                            "id": "../../packages/beeq/src/components/tab/bq-tab.types.ts::TTabSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the tab"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'medium'"
            },
            "tabId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The id of the tab"
                },
                "getter": false,
                "setter": false,
                "attribute": "tab-id",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "tabIndex": {},
            "hasIcon": {}
        };
    }
    static get events() {
        return [{
                "method": "bqClick",
                "name": "bqClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when the tab state changes"
                },
                "complexType": {
                    "original": "HTMLBqTabElement",
                    "resolved": "HTMLBqTabElement",
                    "references": {
                        "HTMLBqTabElement": {
                            "location": "global",
                            "id": "global::HTMLBqTabElement"
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
                    "text": "Handler to be called when the tab gets focus"
                },
                "complexType": {
                    "original": "HTMLBqTabElement",
                    "resolved": "HTMLBqTabElement",
                    "references": {
                        "HTMLBqTabElement": {
                            "location": "global",
                            "id": "global::HTMLBqTabElement"
                        }
                    }
                }
            }, {
                "method": "bqBlur",
                "name": "bqBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when the tab loses focus"
                },
                "complexType": {
                    "original": "HTMLBqTabElement",
                    "resolved": "HTMLBqTabElement",
                    "references": {
                        "HTMLBqTabElement": {
                            "location": "global",
                            "id": "global::HTMLBqTabElement"
                        }
                    }
                }
            }, {
                "method": "bqKeyDown",
                "name": "bqKeyDown",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when the tab key is pressed"
                },
                "complexType": {
                    "original": "KeyboardEvent",
                    "resolved": "KeyboardEvent",
                    "references": {
                        "KeyboardEvent": {
                            "location": "global",
                            "id": "global::KeyboardEvent"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "vClick": {
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
                    "text": "Simulate a click event on the native `<button>` HTML element used under the hood.\nUse this method instead of the global `element.click()`.",
                    "tags": []
                }
            },
            "vFocus": {
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
                    "text": "Sets focus on the native `<button>` HTML element used under the hood.\nUse this method instead of the global `element.focus()`.",
                    "tags": []
                }
            },
            "vBlur": {
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
                    "text": "Remove focus from the native `<button>` HTML element used under the hood.\nUse this method instead of the global `element.blur()`.",
                    "tags": []
                }
            },
            "enableFocus": {
                "complexType": {
                    "signature": "(value: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "value",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": [{
                            "name": "internal",
                            "text": "Sets tabindex on the native `<button>` HTML element used under the hood.\nThis method is used inside `<bq-tab-group>` to make tab focusable after the active one is focused"
                        }]
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "checkPropValues"
            }, {
                "propName": "orientation",
                "methodName": "checkPropValues"
            }, {
                "propName": "placement",
                "methodName": "checkPropValues"
            }];
    }
}
//# sourceMappingURL=bq-tab.js.map
