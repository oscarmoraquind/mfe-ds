/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { hasSlotContent } from "../../shared/utils";
/**
 * An option refers to a specific choice that appears in a list of selectable items that can be opened or closed by the user.
 * It can be an element of the navigation system that allows users to select different sections or pages within an application or it can be used within a dropdown list.
 *
 * @example How to use it
 * ```html
 * <bq-option value="user">
 *   <span>User profile</span>
 *   <bq-icon slot="suffix" name="user"></bq-icon>
 * </bq-option>
 * ```
 *
 * @documentation https://storybook.beeq.design/?path=/story/components-option--with-option-group
 * @status stable
 *
 * @attr {boolean} disabled - If true, the option is disabled.
 * @attr {boolean} hidden - If true, the option is hidden.
 * @attr {string} value - A string representing the value of the option. Can be used to identify the item.
 * @attr {boolean} selected - If true, the option is selected and active.
 *
 * @event bqBlur - Handler to be called when item loses focus.
 * @event bqFocus - Handler to be called when item is focused.
 * @event bqClick - Handler to be called when item is clicked.
 * @event bqEnter - Handler to be called on enter key press.
 *
 * @slot prefix - The prefix content to be displayed before the label.
 * @slot - The label content to be displayed.
 *
 * @part base - The component's internal wrapper.
 * @part label - The `span` element in which the label text is displayed.
 * @part prefix - The `span` element in which the prefix is displayed (generally `bq-icon`).
 * @part suffix - The `span` element in which the suffix is displayed (generally `bq-icon`).
 *
 * @cssprop --bq-option--background - background color
 * @cssprop --bq-option--font-size - font size
 * @cssprop --bq-option--border-color - border color
 * @cssprop --bq-option--border-style - border style
 * @cssprop --bq-option--border-width - border width
 * @cssprop --bq-option--border-radius - border radius
 * @cssprop --bq-option--box-shadow - box shadow
 * @cssprop --bq-option--gap-start - gap space between prefix and label
 * @cssprop --bq-option--gap-end - gap space between label and suffix
 * @cssprop --bq-option--paddingY - padding Y axis
 * @cssprop --bq-option--padding-start - option label padding start
 * @cssprop --bq-option--padding-end - option label padding end
 */
export class BqOption {
    // Own Properties
    // ====================
    prefixElem;
    suffixElem;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasPrefix = false;
    hasSuffix = false;
    // Public Property API
    // ========================
    /** If true, the option is hidden. */
    hidden = false;
    /** If true, the option is disabled. */
    disabled = false;
    /** A string representing the value of the option. Can be used to identify the item */
    value;
    /** If true, the option is selected and active. */
    selected = false;
    // Prop lifecycle events
    // =======================
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when item loses focus */
    bqBlur;
    /** Handler to be called when item is focused */
    bqFocus;
    /** Handler to be called when item is clicked */
    bqClick;
    /** Handler to be called on enter key press */
    bqEnter;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    // Listeners
    // ==============
    onKeyDown(event) {
        if (event.key !== 'Enter')
            return;
        this.bqEnter.emit(this.el);
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
    onBlur = (event) => {
        if (this.isDisabledOrHidden) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        this.bqBlur.emit(this.el);
    };
    onFocus = (event) => {
        if (this.isDisabledOrHidden) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        this.bqFocus.emit(this.el);
    };
    onClick = (event) => {
        if (this.isDisabledOrHidden) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        this.bqClick.emit(this.el);
    };
    onSlotChange = () => {
        this.hasPrefix = hasSlotContent(this.prefixElem, 'prefix');
    };
    handleSuffixSlotChange = () => {
        this.hasSuffix = hasSlotContent(this.suffixElem, 'suffix');
    };
    get isDisabledOrHidden() {
        return this.disabled || this.hidden;
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h(Host, { key: '97c536dd03056e0b70c25432644fe2c6940c48ed', "aria-disabled": this.isDisabledOrHidden ? 'true' : 'false', "aria-hidden": this.hidden ? 'true' : 'false', "aria-selected": this.selected ? 'true' : 'false', role: "option" }, h("div", { key: '778c1ef7be84b9e37dcd71fbcca3347f1661802c', class: {
                'bq-option': true,
                disabled: this.disabled,
                active: !this.disabled && this.selected,
            }, onBlur: this.onBlur, onFocus: this.onFocus, onClick: this.onClick, tabindex: this.isDisabledOrHidden ? '-1' : '0', role: "button", part: "base" }, h("span", { key: 'a0e6a0880ab3c83f63c3ae3b8f29bdcdf80dc11d', class: {
                'bq-option__prefix me-[--bq-option--gap-start] flex items-center': true,
                '!hidden': !this.hasPrefix,
            }, ref: (elem) => (this.prefixElem = elem), part: "prefix" }, h("slot", { key: '1757eec87ea4d18abeb7c8ee5a5289a2be30da5c', name: "prefix", onSlotchange: this.onSlotChange })), h("span", { key: 'f18f0e276bf3fe79d5f77a3b226b00df8dc71e93', class: "bq-option__label", part: "label" }, h("slot", { key: '089b128380f30630ffcb6b2e81bb277cbcec2c18' })), h("span", { key: '3e82ec5d9a34dea4e82185a6b2b50a6394d445cf', class: {
                'bq-option__suffix ml-auto ms-[--bq-option--gap-end] flex items-center': true,
                '!hidden': !this.hasSuffix,
            }, ref: (elem) => (this.suffixElem = elem), part: "suffix" }, h("slot", { key: 'd2fdd33de21dbc0362023fd00a71c5ff25849d9a', name: "suffix", onSlotchange: this.handleSuffixSlotChange })))));
    }
    static get is() { return "bq-option"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-option.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-option.css"]
        };
    }
    static get properties() {
        return {
            "hidden": {
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
                    "text": "If true, the option is hidden."
                },
                "getter": false,
                "setter": false,
                "attribute": "hidden",
                "reflect": true,
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If true, the option is disabled."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "value": {
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
                    "text": "A string representing the value of the option. Can be used to identify the item"
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": true
            },
            "selected": {
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
                    "text": "If true, the option is selected and active."
                },
                "getter": false,
                "setter": false,
                "attribute": "selected",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "hasPrefix": {},
            "hasSuffix": {}
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
                    "text": "Handler to be called when item loses focus"
                },
                "complexType": {
                    "original": "HTMLBqOptionElement",
                    "resolved": "HTMLBqOptionElement",
                    "references": {
                        "HTMLBqOptionElement": {
                            "location": "global",
                            "id": "global::HTMLBqOptionElement"
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
                    "text": "Handler to be called when item is focused"
                },
                "complexType": {
                    "original": "HTMLBqOptionElement",
                    "resolved": "HTMLBqOptionElement",
                    "references": {
                        "HTMLBqOptionElement": {
                            "location": "global",
                            "id": "global::HTMLBqOptionElement"
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
                    "text": "Handler to be called when item is clicked"
                },
                "complexType": {
                    "original": "HTMLBqOptionElement",
                    "resolved": "HTMLBqOptionElement",
                    "references": {
                        "HTMLBqOptionElement": {
                            "location": "global",
                            "id": "global::HTMLBqOptionElement"
                        }
                    }
                }
            }, {
                "method": "bqEnter",
                "name": "bqEnter",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called on enter key press"
                },
                "complexType": {
                    "original": "HTMLBqOptionElement",
                    "resolved": "HTMLBqOptionElement",
                    "references": {
                        "HTMLBqOptionElement": {
                            "location": "global",
                            "id": "global::HTMLBqOptionElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=bq-option.js.map
