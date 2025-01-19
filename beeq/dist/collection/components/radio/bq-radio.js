/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
/**
 * The radio button is a user interface element that allows users to select a single option.
 *
 * @example How to use it
 * ```html
 * <bq-radio value="option1">Radio option 1</bq-radio>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/9718e1-radio-button/b/09d7b1
 * @status stable
 *
 * @attr {boolean} background-on-hover - If `true`, the radio displays background on hover
 * @attr {boolean} checked - If `true` radio input is checked
 * @attr {boolean} disabled - If `true` radio input is disabled
 * @attr {string} form-id - The form ID that the radio input is associated with
 * @attr {string} name - Name of the HTML input form control. Submitted with the form as part of a name/value pair
 * @attr {boolean} required - If `true`, it will indicate that the user must specify a value for the radio before the owning form can be submitted
 * @attr {boolean} value - A string representing the value of the radio
 *
 * @method vClick - Simulate a click event on the native `<input>` HTML element used under the hood
 * @method vFocus - Sets focus on the native `<input>` HTML element used under the hood
 * @method vBlur - Remove focus from the native `<input>` HTML element used under the hood
 * @method getNativeInput - Returns the native `<input>` HTML element used under the hood
 *
 * @event bqBlur - Handler to be called when the radio loses focus
 * @event bqClick - Handler to be called when the radio state changes
 * @event bqFocus - Handler to be called when the radio gets focused
 * @event bqKeyDown - The handler is to be called when the radio key is pressed
 *
 * @slot - The bq-radio item
 *
 * @part base - The component's internal wrapper of the radio component.
 * @part input - The native HTML `<input type="radio">` used under the hood.
 * @part radio - The component's internal wrapper of the radio component.
 * @part label - The `<span>` element that holds the text content.
 *
 * @cssprop --bq-radio--size - Radio size
 * @cssprop --bq-radio--border-width - Radio border width
 */
export class BqRadio {
    // Own Properties
    // ====================
    inputElement;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    // Public Property API
    // ========================
    /** If true radio input is checked */
    checked;
    /** If true radio input is disabled */
    disabled = false;
    /** If true radio displays background on hover */
    backgroundOnHover = false;
    /** The form ID that the radio input is associated with */
    formId;
    /** Name of the HTML input form control. Submitted with the form as part of a name/value pair.  */
    name;
    /** If `true`, it will indicate that the user must specify a value for the radio before the owning form can be submitted */
    required;
    /** A string representing the value of the radio. */
    value;
    // Prop lifecycle events
    // =======================
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when the radio state changes */
    bqClick;
    /** Handler to be called when the radio gets focus */
    bqFocus;
    /** Handler to be called when the radio loses focus */
    bqBlur;
    /** Handler to be called when the radio key is pressed */
    bqKeyDown;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    // Listeners
    // ==============
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    /**
     * Simulate a click event on the native `<input>` HTML element used under the hood.
     * Use this method instead of the global `element.click()`.
     */
    async vClick() {
        this.inputElement?.click();
    }
    /**
     * Sets focus on the native `<input>` HTML element used under the hood.
     * Use this method instead of the global `element.focus()`.
     */
    async vFocus() {
        this.inputElement?.focus();
    }
    /**
     * Remove focus from the native `<input>` HTML element used under the hood.
     * Use this method instead of the global `element.blur()`.
     */
    async vBlur() {
        this.inputElement?.blur();
    }
    /**
     * Returns the native `<input>` HTML element used under the hood.
     */
    async getNativeInput() {
        return this.inputElement;
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    handleClick = () => {
        this.checked = true;
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
    get tabindex() {
        // NOTE: this.checked is undefined when is not part of bq-radio-group
        return `${-1 + +(this.checked ?? 1)}`;
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("label", { key: '9bdb87fca9cb91117e25d186f49605962a4eedfa', class: {
                'bq-radio group': true,
                'is-disabled !cursor-not-allowed': this.disabled,
                'is-checked': this.checked,
                'has-background': this.backgroundOnHover,
            }, part: "base" }, h("div", { key: 'fa6e9428ef27fa4de59ec731a0c42ee048df3247', class: "bq-radio__control" }, h("input", { key: '3282e2eac7833bafdcac63cab1ddf3de64790fcc', class: "bq-radio__input", ref: (element) => (this.inputElement = element), type: "radio", form: this.formId, name: this.name, value: this.value, required: this.required, disabled: this.disabled, onBlur: this.handleOnBlur, onClick: this.handleClick, onFocus: this.handleOnFocus, onKeyDown: this.handleOnKeyDown, "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-labelledby": "bq-radio__label", tabindex: this.tabindex, part: "input" }), h("div", { key: 'fbeda341b197c56a011dff7abe4d12236fb266b0', class: "bq-radio__circle", part: "radio" }, h("div", { key: '7f5b27004efd1a2c2349b5b0f023d0d489f2e9a9', class: "bq-radio__checked" }))), h("span", { key: '1a792b4f617b12f27af03079d885621c9ff07ae5', class: "bq-radio__label group-hover:text-text-primary-hover group-[.is-disabled]:text-text-primary-disabled", part: "label" }, h("slot", { key: '53b6310d54b070df27c5ca9e61ddacf02fe3b6c4', id: "bq-radio__label" }))));
    }
    static get is() { return "bq-radio"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-radio.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-radio.css"]
        };
    }
    static get properties() {
        return {
            "checked": {
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
                    "text": "If true radio input is checked"
                },
                "getter": false,
                "setter": false,
                "attribute": "checked",
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
                    "text": "If true radio input is disabled"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "backgroundOnHover": {
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
                    "text": "If true radio displays background on hover"
                },
                "getter": false,
                "setter": false,
                "attribute": "background-on-hover",
                "reflect": true,
                "defaultValue": "false"
            },
            "formId": {
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
                    "text": "The form ID that the radio input is associated with"
                },
                "getter": false,
                "setter": false,
                "attribute": "form-id",
                "reflect": true
            },
            "name": {
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
                    "text": "Name of the HTML input form control. Submitted with the form as part of a name/value pair."
                },
                "getter": false,
                "setter": false,
                "attribute": "name",
                "reflect": true
            },
            "required": {
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
                    "text": "If `true`, it will indicate that the user must specify a value for the radio before the owning form can be submitted"
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": true
            },
            "value": {
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
                    "text": "A string representing the value of the radio."
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": true
            }
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
                    "text": "Handler to be called when the radio state changes"
                },
                "complexType": {
                    "original": "HTMLBqRadioElement",
                    "resolved": "HTMLBqRadioElement",
                    "references": {
                        "HTMLBqRadioElement": {
                            "location": "global",
                            "id": "global::HTMLBqRadioElement"
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
                    "text": "Handler to be called when the radio gets focus"
                },
                "complexType": {
                    "original": "HTMLBqRadioElement",
                    "resolved": "HTMLBqRadioElement",
                    "references": {
                        "HTMLBqRadioElement": {
                            "location": "global",
                            "id": "global::HTMLBqRadioElement"
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
                    "text": "Handler to be called when the radio loses focus"
                },
                "complexType": {
                    "original": "HTMLBqRadioElement",
                    "resolved": "HTMLBqRadioElement",
                    "references": {
                        "HTMLBqRadioElement": {
                            "location": "global",
                            "id": "global::HTMLBqRadioElement"
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
                    "text": "Handler to be called when the radio key is pressed"
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
                    "text": "Simulate a click event on the native `<input>` HTML element used under the hood.\nUse this method instead of the global `element.click()`.",
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
                    "text": "Sets focus on the native `<input>` HTML element used under the hood.\nUse this method instead of the global `element.focus()`.",
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
                    "text": "Remove focus from the native `<input>` HTML element used under the hood.\nUse this method instead of the global `element.blur()`.",
                    "tags": []
                }
            },
            "getNativeInput": {
                "complexType": {
                    "signature": "() => Promise<HTMLInputElement>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLInputElement": {
                            "location": "global",
                            "id": "global::HTMLInputElement"
                        }
                    },
                    "return": "Promise<HTMLInputElement>"
                },
                "docs": {
                    "text": "Returns the native `<input>` HTML element used under the hood.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=bq-radio.js.map
