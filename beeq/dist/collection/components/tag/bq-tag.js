/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { TAG_COLOR, TAG_SIZE, TAG_VARIANT } from "./bq-tag.types";
import { iconSize, textColor } from "./helper";
import { getColorCSSVariable, hasSlotContent, validatePropValue } from "../../shared/utils";
/**
 * The Tag Component is a UI element used to label and categorize content within an application.
 * Tags are commonly used to label items with keywords or categories, making it easier to find and organize content.
 *
 * @example How to use it
 * ```html
 * <bq-tag color="success" size="medium" variant="filled">Success</bq-tag>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/42f8c9-tag
 * @status stable
 *
 * @dependency bq-button
 * @dependency bq-icon
 *
 * @attr {string} border - The corner radius of the Tag (will override size's predefined border)
 * @attr {boolean} clickable - If `true`, the Tag can be clickable
 * @attr {"error" | "gray" | "info" | "success" | "warning"} color - The color style of the Tag
 * @attr {boolean} disabled - If `true`, the Tag will be disabled (only if clickable = `true`, no interaction allowed)
 * @attr {boolean} hidden - If `true`, the Tag component will hidden (only if removable = `true`)
 * @attr {boolean} removable - If `true`, the Tag component can be removed
 * @attr {boolean} selected - If `true`, the Tag is selected (only if clickable = `true`)
 * @attr {"xsmall" | "small" | "medium"} size - The size of the Tag component
 * @attr {"outline" | "filled"} variant - The variant of Tag to apply on top of the variant
 *
 * @method hide - Method to be called to remove the tag component
 * @method show - Method to be called to show the tag component
 *
 * @event bqClose - Callback handler to be called when the tag is close/hidden
 * @event bqOpen - Callback handler to be called when the tag is not open/shown
 * @event bqBlur - Handler to be called when tag loses focus
 * @event bqClick - Handler to be called when tag is clicked
 * @event bqFocus - Handler to be called when tag is focused
 *
 * @slot prefix - The prefix slot to add an icon or any other content before the text
 * @slot - The text content of the tag
 *
 * @part wrapper - The wrapper container `<div>` of the element inside the shadow DOM.
 * @part prefix - The `<span>` tag element that acts as prefix container (when icon exists in front of tag).
 * @part text - The `<div>` element containing the text of the tag component.
 * @part btn-close - The close button element to remove the tag component.
 *
 * @cssprop --bq-tag--background-color - Tag background color
 * @cssprop --bq-tag--border-color - Tag border color
 * @cssprop --bq-tag--border-radius - Tag border radius
 * @cssprop --bq-tag--border-style - Tag border style
 * @cssprop --bq-tag--border-width - Tag border width
 * @cssprop --bq-tag--small-border-radius - Tag small border radius
 * @cssprop --bq-tag--small-gap - Tag small gap between content
 * @cssprop --bq-tag--small-padding-x - Tag small padding horizontal
 * @cssprop --bq-tag--small-padding-y - Tag small padding vertical
 * @cssprop --bq-tag--medium-gap - Tag medium gap between content
 * @cssprop --bq-tag--medium-padding-x - Tag medium padding horizontal
 * @cssprop --bq-tag--medium-padding-y - Tag medium padding vertical
 */
export class BqTag {
    // Own Properties
    // ====================
    prefixElem;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasPrefix = false;
    // Public Property API
    // ========================
    /** The corner radius of the Tag (will override size's predefined border) */
    border;
    /** If true, the Tag can be clickable */
    clickable = false;
    /** The color style of the Tag */
    color;
    /** If true, the Tag will be disabled (only if clickable = `true`, no interaction allowed) */
    disabled = false;
    /** If true, the Tag component will hidden (only if removable = `true`) */
    hidden;
    /** If true, the Tag component can be removed */
    removable = false;
    /** If true, the Tag is selected (only if clickable = `true`) */
    selected = false;
    /** The size of the Tag component */
    size = 'medium';
    /** The variant of Tag to apply on top of the variant */
    variant = 'filled';
    // Prop lifecycle events
    // =======================
    checkPropValues() {
        validatePropValue(TAG_SIZE, 'medium', this.el, 'size');
        validatePropValue(TAG_VARIANT, 'filled', this.el, 'variant');
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler to be called when the tag is close/hidden  */
    bqClose;
    /** Callback handler to be called when the tag is not open/shown */
    bqOpen;
    /** Handler to be called when tag loses focus */
    bqBlur;
    /** Handler to be called when tag is clicked */
    bqClick;
    /** Handler to be called when tag is focused */
    bqFocus;
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
    /** Method to be called to remove the tag component */
    async hide() {
        this.handleHide();
    }
    /** Method to be called to show the tag component */
    async show() {
        this.handleShow();
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    handleHide = () => {
        if (!this.isRemovable)
            return;
        const ev = this.bqClose.emit(this.el);
        if (!ev.defaultPrevented) {
            this.hidden = true;
        }
    };
    handleShow = () => {
        if (!this.isRemovable)
            return;
        const ev = this.bqOpen.emit(this.el);
        if (!ev.defaultPrevented) {
            this.hidden = false;
        }
    };
    handleClick = () => {
        // If the tag is not clickable or the tag is disabled, we don't want to handle the click
        if (!this.isClickable || this.disabled)
            return;
        // Emit a click event on the element
        const ev = this.bqClick.emit(this.el);
        // If the event was not prevented, toggle the clickable state
        if (!ev.defaultPrevented) {
            this.selected = !this.selected;
        }
    };
    handleBlur = () => {
        if (!this.isClickable)
            return;
        this.bqBlur.emit(this.el);
    };
    handleFocus = () => {
        if (!this.isClickable)
            return;
        this.bqFocus.emit(this.el);
    };
    handleSlotChange = () => {
        this.hasPrefix = hasSlotContent(this.prefixElem, 'prefix');
    };
    get isClickable() {
        return this.clickable && !this.color && !this.hasCustomColor && !this.removable;
    }
    get isRemovable() {
        return this.removable && !this.isClickable;
    }
    get isHidden() {
        return this.isRemovable && this.hidden;
    }
    get hasCustomColor() {
        return this.color !== undefined ? !TAG_COLOR.includes(this.color) : false;
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const style = {
            '--bq-tag--icon-prefix-size': `${iconSize(this.size)}px`,
            ...(this.border && { '--bq-tag--border-radius': `var(--bq-radius--${this.border})` }),
            ...(this.color && { '--bq-tag--background-color': getColorCSSVariable(this.color) ?? this.color }),
            ...(this.hasCustomColor && { '--bq-text--primary': `var(--bq-text--alt)` }),
        };
        return (h(Host, { key: '4a787e7979e8d1db7d218fc474adccdc48762a69', style: style, "aria-hidden": this.isHidden ? 'true' : 'false', hidden: this.isHidden ? 'true' : 'false' }, h("button", { key: '9c98c9a8c1b451671f4a81103b4cfcf6977ef70f', class: {
                [`bq-tag bq-tag__${this.size}`]: true,
                [`bq-tag__${this.color || 'default'} bq-tag__${this.variant}`]: !this.hasCustomColor,
                'is-clickable': this.isClickable,
                'is-removable': this.removable,
                // Active/Selected state when clickable
                active: this.isClickable && this.selected,
                // Fixed border radius
                'has-border': !!this.border,
            }, disabled: this.disabled, onBlur: this.handleBlur, onClick: this.handleClick, onFocus: this.handleFocus, tabindex: this.isClickable ? 0 : -1, part: "wrapper" }, h("span", { key: 'fd4c81e07f292978829fe691c9c36d1795a87ce1', class: { 'bq-tag__prefix inline-flex': true, '!hidden': !this.hasPrefix }, ref: (spanElem) => (this.prefixElem = spanElem), part: "prefix" }, h("slot", { key: 'a024873f42c89a4d2e15038a9538477d7d6841d1', name: "prefix", onSlotchange: this.handleSlotChange })), h("div", { key: '937bd63b6747891af06e0142b1054c4240baac81', class: {
                'text-xs': this.size === 'xsmall',
                'text-s': this.size === 'small',
                'text-m': this.size === 'medium',
            }, part: "text" }, h("slot", { key: 'a61c9db842414f1de0f473b0c363740841f16044' })), this.isRemovable && !this.disabled && (h("bq-button", { key: '6ae30878eecf43e1599b8296be3bc0c6127feb77', class: "bq-tag__close", appearance: "text", size: "small", onClick: this.handleHide, part: "btn-close" }, h("bq-icon", { key: '3251178f44079ad97547542a4b0d3b3d44034cb6', size: iconSize(this.size), name: "x-circle", color: this.color && !this.hasCustomColor ? textColor(this.color)[this.variant] : 'text--primary' }))))));
    }
    static get is() { return "bq-tag"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-tag.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-tag.css"]
        };
    }
    static get properties() {
        return {
            "border": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TTagBorderRadius",
                    "resolved": "\"full\" | \"l\" | \"m\" | \"none\" | \"s\" | \"xs\" | \"xs2\"",
                    "references": {
                        "TTagBorderRadius": {
                            "location": "import",
                            "path": "./bq-tag.types",
                            "id": "../../packages/beeq/src/components/tag/bq-tag.types.ts::TTagBorderRadius"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The corner radius of the Tag (will override size's predefined border)"
                },
                "getter": false,
                "setter": false,
                "attribute": "border",
                "reflect": true
            },
            "clickable": {
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
                    "text": "If true, the Tag can be clickable"
                },
                "getter": false,
                "setter": false,
                "attribute": "clickable",
                "reflect": true,
                "defaultValue": "false"
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TTagColor",
                    "resolved": "\"error\" | \"gray\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "TTagColor": {
                            "location": "import",
                            "path": "./bq-tag.types",
                            "id": "../../packages/beeq/src/components/tag/bq-tag.types.ts::TTagColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color style of the Tag"
                },
                "getter": false,
                "setter": false,
                "attribute": "color",
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If true, the Tag will be disabled (only if clickable = `true`, no interaction allowed)"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "hidden": {
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
                    "text": "If true, the Tag component will hidden (only if removable = `true`)"
                },
                "getter": false,
                "setter": false,
                "attribute": "hidden",
                "reflect": true
            },
            "removable": {
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
                    "text": "If true, the Tag component can be removed"
                },
                "getter": false,
                "setter": false,
                "attribute": "removable",
                "reflect": true,
                "defaultValue": "false"
            },
            "selected": {
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
                    "text": "If true, the Tag is selected (only if clickable = `true`)"
                },
                "getter": false,
                "setter": false,
                "attribute": "selected",
                "reflect": true,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TTagSize",
                    "resolved": "\"medium\" | \"small\" | \"xsmall\"",
                    "references": {
                        "TTagSize": {
                            "location": "import",
                            "path": "./bq-tag.types",
                            "id": "../../packages/beeq/src/components/tag/bq-tag.types.ts::TTagSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the Tag component"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'medium'"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TTagVariant",
                    "resolved": "\"filled\" | \"outline\"",
                    "references": {
                        "TTagVariant": {
                            "location": "import",
                            "path": "./bq-tag.types",
                            "id": "../../packages/beeq/src/components/tag/bq-tag.types.ts::TTagVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The variant of Tag to apply on top of the variant"
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": true,
                "defaultValue": "'filled'"
            }
        };
    }
    static get states() {
        return {
            "hasPrefix": {}
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
                    "text": "Callback handler to be called when the tag is close/hidden"
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
                    "text": "Callback handler to be called when the tag is not open/shown"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bqBlur",
                "name": "bqBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when tag loses focus"
                },
                "complexType": {
                    "original": "HTMLBqTagElement",
                    "resolved": "HTMLBqTagElement",
                    "references": {
                        "HTMLBqTagElement": {
                            "location": "global",
                            "id": "global::HTMLBqTagElement"
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
                    "text": "Handler to be called when tag is clicked"
                },
                "complexType": {
                    "original": "HTMLBqTagElement",
                    "resolved": "HTMLBqTagElement",
                    "references": {
                        "HTMLBqTagElement": {
                            "location": "global",
                            "id": "global::HTMLBqTagElement"
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
                    "text": "Handler to be called when tag is focused"
                },
                "complexType": {
                    "original": "HTMLBqTagElement",
                    "resolved": "HTMLBqTagElement",
                    "references": {
                        "HTMLBqTagElement": {
                            "location": "global",
                            "id": "global::HTMLBqTagElement"
                        }
                    }
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
                    "text": "Method to be called to remove the tag component",
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
                    "text": "Method to be called to show the tag component",
                    "tags": []
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
                "propName": "variant",
                "methodName": "checkPropValues"
            }];
    }
}
//# sourceMappingURL=bq-tag.js.map
