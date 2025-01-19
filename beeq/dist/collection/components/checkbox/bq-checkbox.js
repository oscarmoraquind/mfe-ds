/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { isNil } from "../../shared/utils";
/**
 * The checkbox is a UI component that allows users to select one or more options from a list of choices.
 * It is commonly used in forms, surveys, and settings pages.
 *
 * @example How to use it
 * ```html
 * <bq-checkbox name="bq-checkbox" value="checkbox-value" background-on-hover>
 *   Checkbox label
 * </bq-checkbox>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/431f17-checkbox
 * @status stable
 *
 * @attr {boolean} background-on-hover - If true checkbox displays background on hover
 * @attr {string} form-id - The form ID that the checkbox is associated with
 * @attr {string} form-validation-message - The native form validation message
 * @attr {boolean} checked - If true checkbox is checked
 * @attr {boolean} disabled - If true checkbox is disabled
 * @attr {boolean} indeterminate - A state that is neither checked nor unchecked
 * @attr {string} name - Name of the HTML input form control. Submitted with the form as part of a name/value pair
 * @attr {boolean} required - If `true`, it will indicate that the user must specify a value for the checkbox before the owning form can be submitted
 * @attr {string} value - A string representing the value of the checkbox. Primarily used to differentiate a list of related checkboxes that have the same name
 *
 * @method vClick - Simulate a click event on the native `<input>` HTML element used under the hood
 * @method vFocus - Sets focus on the native `<input>` HTML element used under the hood
 * @method vBlur - Remove focus from the native `<input>` HTML element used under the hood
 *
 * @event bqChange - Handler to be called when the checkbox state changes
 * @event bqFocus - Handler to be called when the checkbox gets focus
 * @event bqBlur - Handler to be called when the checkbox loses focus
 *
 * @slot - The content of the checkbox component
 *
 * @part base - The component's internal wrapper of the checkbox component.
 * @part control - The container `<div>` element that holds the custom checkbox.
 * @part input - The native HTML `<input type="checkbox">` used under the hood.
 * @part checkbox - The `<span>` element that renders the custom checked/indeterminate state.
 * @part label - The `<span>` element that holds the text content.
 *
 * @cssprop --bq-checkbox--size - Checkbox size
 * @cssprop --bq-checkbox--border-radius - Checkbox border radius
 * @cssprop --bq-checkbox--border-width - Checkbox border width
 */
export class BqCheckbox {
    // Own Properties
    // ====================
    inputElem;
    prevCheckedValue;
    // Reference to host HTML element
    // ===================================
    el;
    internals;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    // Public Property API
    // ========================
    /** If true checkbox displays background on hover */
    backgroundOnHover = false;
    /** The form ID that the checkbox is associated with */
    formId;
    /** The native form validation message */
    formValidationMessage;
    /** If true checkbox is checked */
    checked;
    /** If true checkbox is disabled */
    disabled = false;
    /** A state that is neither checked nor unchecked */
    indeterminate = false;
    /** Name of the HTML input form control. Submitted with the form as part of a name/value pair.  */
    name;
    /** If `true`, it will indicate that the user must specify a value for the checkbox before the owning form can be submitted */
    required;
    /** A string representing the value of the checkbox. Primarily used to differentiate a list of related checkboxes that have the same name.  */
    value;
    // Prop lifecycle events
    // =======================
    handleIndeterminatePropChange() {
        if (!this.inputElem)
            return;
        this.inputElem.indeterminate = this.indeterminate;
        if (this.indeterminate) {
            this.checked = false;
        }
    }
    handleRequiredPropChange() {
        this.updateFormValidity();
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when the checkbox state changes */
    bqChange;
    /** Handler to be called when the checkbox gets focus */
    bqFocus;
    /** Handler to be called when the checkbox loses focus */
    bqBlur;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.prevCheckedValue = this.checked;
    }
    componentDidUpdate() {
        /**
         * We need to trigger the `bqChange` immediately after the first update happens
         * so the checked attribute get applied, otherwise, a delay will happen
         * between the event emits and when the checked attribute value gets reflected in the element host.
         */
        if (this.checked !== this.prevCheckedValue) {
            if (!this.indeterminate) {
                this.bqChange.emit({ checked: this.checked });
            }
            this.prevCheckedValue = this.checked;
        }
    }
    formAssociatedCallback() {
        this.setFormValue(this.checked);
        this.updateFormValidity();
    }
    formResetCallback() {
        // Reset the form value and validity state
        this.checked = false;
        this.indeterminate = false;
        this.inputElem.removeAttribute('checked');
        this.internals?.setFormValue(undefined);
        this.updateFormValidity();
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
     * Simulate a click event on the native `<input>` HTML element used under the hood.
     * Use this method instead of the global `element.click()`.
     */
    async vClick() {
        this.inputElem?.click();
    }
    /**
     * Sets focus on the native `<input>` HTML element used under the hood.
     * Use this method instead of the global `element.focus()`.
     */
    async vFocus() {
        this.inputElem?.focus();
    }
    /**
     * Remove focus from the native `<input>` HTML element used under the hood.
     * Use this method instead of the global `element.blur()`.
     */
    async vBlur() {
        this.inputElem?.blur();
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    setFormValue = (checked) => {
        const value = checked ? 'on' : undefined;
        // Set form value based on the checked state
        // Here we also pass the state of the checkbox (2nd argument) as the state of the form control
        // Details: https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/setFormValue
        this.internals?.setFormValue(value, `${this.checked}`);
    };
    updateFormValidity = () => {
        const { formValidationMessage, internals, required, checked, inputElem } = this;
        // Clear the validity state
        internals?.states.clear();
        if (!(required && !checked)) {
            // If the checkbox is not required or is checked, set the validity state to valid
            internals?.states.add('valid');
            internals?.setValidity({});
            return;
        }
        // Set validity state based on the required property and checked state
        internals?.states.add('invalid');
        internals?.setValidity({ valueMissing: true }, formValidationMessage, inputElem);
    };
    handleChange = () => {
        this.checked = !this.checked;
        this.indeterminate = false;
        this.setFormValue(this.checked);
        this.updateFormValidity();
    };
    handleOnFocus = () => {
        this.bqFocus.emit(this.el);
    };
    handleOnBlur = () => {
        this.bqBlur.emit(this.el);
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("label", { key: '053e842109825e99667d5e64ff18e0c5a53dc374', class: {
                'bq-checkbox group': true,
                'is-checked': this.checked,
                'is-indeterminate': this.indeterminate,
                'is-disabled !cursor-not-allowed': this.disabled,
                'has-background': this.backgroundOnHover,
            }, "aria-label": this.name || 'checkbox', part: "base" }, h("div", { key: '52e585b723f131e239df38538766b67b5586f32d', class: "bq-checkbox__control relative box-border flex items-center justify-center bs-[--bq-checkbox--size] is-[--bq-checkbox--size] p-b-xs3 p-i-xs3", part: "control" }, h("input", { key: '0c3edea796f2401cf9988ba2f849fd9dbac63f5e', type: "checkbox", class: "bq-checkbox__input pointer-events-none absolute opacity-0 p-b-0 p-i-0 m-b-0 m-i-0", name: !isNil(this.name) ? this.name : undefined, checked: this.checked, disabled: this.disabled, indeterminate: this.indeterminate, form: this.formId, required: this.required, value: this.value, "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', ref: (input) => (this.inputElem = input), onBlur: this.handleOnBlur, onChange: this.handleChange, onFocus: this.handleOnFocus, part: "input", tabindex: "0" }), h("span", { key: '5668a11e8cb8b76ba0929a50560ff9772ce09778', class: "bq-checkbox__checkbox relative box-border flex items-center justify-center bs-full is-[--bq-checkbox--size]", part: "checkbox" }, this.checked && (h("svg", { key: 'f387a3faeba68268279b1af98d2113893645c8a8', xmlns: "http://www.w3.org/2000/svg", class: "absolute text-neutral-white bs-full is-full", viewBox: "0 0 256 256" }, h("path", { key: 'a6db6bc4a9c6f412bc78ba551ac7eb0b67fff567', fill: "none", d: "M0 0h256v256H0z" }), h("path", { key: 'd42f27ba06d5ebc7f7b2d532ea3d9df19068e294', fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "32", d: "M216 72 104 184l-56-56" }))), !this.checked && this.indeterminate && (h("svg", { key: '2eedf28d4744409906ca433b7539037f37b0ba8f', xmlns: "http://www.w3.org/2000/svg", class: "absolute text-neutral-white bs-full is-full", viewBox: "0 0 256 256", fill: "currentColor" }, h("path", { key: '980ca3817f629ada32d20e65d5311c41261c472f', fill: "none", d: "M0 0h256v256H0z" }), h("path", { key: '75c9c16f2f30236ad915cfdfc2b0d1b9529505c7', fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "32", d: "M40 128h176" }))))), h("span", { key: '36c605473a17a729a80c20c7c164396460c41ef9', class: "bq-checkbox__label ps-xs text-start font-medium leading-regular text-primary group-hover-[&:not(.is-disabled)]:text-hover-primary group-[.is-disabled]:opacity-60", part: "label" }, h("slot", { key: '004f6c0593dc4fd7ba37386ed505c7850e44f93d' }))));
    }
    static get is() { return "bq-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-checkbox.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-checkbox.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "If true checkbox displays background on hover"
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
                    "text": "The form ID that the checkbox is associated with"
                },
                "getter": false,
                "setter": false,
                "attribute": "form-id",
                "reflect": true
            },
            "formValidationMessage": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The native form validation message"
                },
                "getter": false,
                "setter": false,
                "attribute": "form-validation-message",
                "reflect": false
            },
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
                    "text": "If true checkbox is checked"
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
                    "text": "If true checkbox is disabled"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "indeterminate": {
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
                    "text": "A state that is neither checked nor unchecked"
                },
                "getter": false,
                "setter": false,
                "attribute": "indeterminate",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "If `true`, it will indicate that the user must specify a value for the checkbox before the owning form can be submitted"
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
                    "text": "A string representing the value of the checkbox. Primarily used to differentiate a list of related checkboxes that have the same name."
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
                "method": "bqChange",
                "name": "bqChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when the checkbox state changes"
                },
                "complexType": {
                    "original": "{ checked: boolean }",
                    "resolved": "{ checked: boolean; }",
                    "references": {}
                }
            }, {
                "method": "bqFocus",
                "name": "bqFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when the checkbox gets focus"
                },
                "complexType": {
                    "original": "HTMLBqCheckboxElement",
                    "resolved": "HTMLBqCheckboxElement",
                    "references": {
                        "HTMLBqCheckboxElement": {
                            "location": "global",
                            "id": "global::HTMLBqCheckboxElement"
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
                    "text": "Handler to be called when the checkbox loses focus"
                },
                "complexType": {
                    "original": "HTMLBqCheckboxElement",
                    "resolved": "HTMLBqCheckboxElement",
                    "references": {
                        "HTMLBqCheckboxElement": {
                            "location": "global",
                            "id": "global::HTMLBqCheckboxElement"
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
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "indeterminate",
                "methodName": "handleIndeterminatePropChange"
            }, {
                "propName": "required",
                "methodName": "handleRequiredPropChange"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=bq-checkbox.js.map
