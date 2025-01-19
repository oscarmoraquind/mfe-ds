/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host, } from "@stencil/core";
import { getTextContent, isNil } from "../../shared/utils";
/**
 * Toggle switches are digital on/off switches.
 * They should provide immediate results, giving users the freedom to control their preferences as needed.
 *
 * @example How to use it
 * ```html
 * <bq-switch inner-label="default" justify-content="start" name="bq-switch" value="Switch value">
 *   Toggle me!
 * </bq-switch>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/49d9c9-switch
 * @status stable
 *
 * @dependency bq-icon
 *
 * @attr {boolean} background-on-hover - If `true`, a background will be displayed on hover
 * @attr {boolean} checked - It indicates whether if the switch is `ON` by default (when the page loads)
 * @attr {boolean} disabled - If `true`, the switch control will be disabled and no interaction will be allowed
 * @attr {string} form-validation-message - The native form validation message
 * @attr {boolean} full-width - If `true`, the component will take the full width space available on the parent container
 * @attr {"default" | "icon"} inner-label - It indicates how to to display the on/off marks inside the control, with icons or none (default)
 * @attr {"start" | "end" | "center" | "space-between" | "space-around" | "space-evenly"} justify-content - It defines how to distribute the space between and around the control and the label text
 * @attr {string} name - Name of the form control. Submitted with the form as part of a name/value pair
 * @attr {boolean} required - If `true`, it will indicate that the user must switch `ON` the element before the owning form can be submitted
 * @attr {boolean} reverse-order - If `true`, the order of the control and the label text will be changed
 * @attr {string} value - The input control's value, submitted as a name/value pair with form data
 *
 * @event bqChange - Handler to be called when the switch state changes
 * @event bqFocus - Handler to be called when the switch gets focus
 * @event bqBlur - Handler to be called when the switch loses focus
 *
 * @slot - The switch label text
 *
 * @part base - HTML `<label>` root container
 * @part control - HTML `<div>` element for the custom control
 * @part dot - HTML `<div>` element that acts as changing dot
 * @part icon-off - HTMLBqIcon `<pk-icon>` element used as the `OFF` mark inner label
 * @part icon-on - HTMLBqIcon `<pk-icon>` element used as the `ON` mark inner label
 * @part label - HTML `<span>` element that holds the label text
 *
 * @cssprop --bq-switch--height - Switch height
 * @cssprop --bq-switch--justify-content - Switch justify content
 * @cssprop --bq-switch--width - Switch width
 * @cssprop --bq-switch--dot-size - Switch dot size
 */
export class BqSwitch {
    // Own Properties
    // ====================
    labelElem;
    inputElem;
    prevCheckedValue;
    // Reference to host HTML element
    // ===================================
    internals;
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasLabel = false;
    // Public Property API
    // ========================
    /** If true, a background will be displayed on hover */
    backgroundOnHover = false;
    /** It indicates whether if the switch is `ON` by default (when the page loads) */
    checked = false;
    /** If true, the switch control will be disabled and no interaction will be allowed */
    disabled = false;
    /** The native form validation message */
    formValidationMessage;
    /** If true, the component will take the full width space available on the parent container */
    fullWidth = false;
    /** It indicates how to to display the on/off marks inside the control, with icons or none (default)  */
    innerLabel = 'default';
    /**
     * It defines how to distribute the space between and around the control and the label text
     * (https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
     */
    justifyContent = 'start';
    /** Name of the form control. Submitted with the form as part of a name/value pair */
    name;
    /** If `true`, it will indicate that the user must switch `ON` the element before the owning form can be submitted */
    required = false;
    /** If true, the order of the control and the label text will be changed  */
    reverseOrder = false;
    /** The input control's value, submitted as a name/value pair with form data. */
    value;
    // Prop lifecycle events
    // =======================
    handleRequiredChange() {
        this.updateFormValidity();
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when the switch state changes */
    bqChange;
    /** Handler to be called when the switch gets focus */
    bqFocus;
    /** Handler to be called when the switch loses focus */
    bqBlur;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.prevCheckedValue = this.checked;
    }
    componentDidLoad() {
        this.handleSlotChange();
    }
    componentDidUpdate() {
        /**
         * We need to trigger the `bqChange` immediately after the first update happens
         * so the checked attribute get applied, otherwise, a delay will happen
         * between the event emits and when the checked attribute value gets reflected in the element host.
         */
        if (this.checked !== this.prevCheckedValue) {
            this.bqChange.emit({ checked: this.checked });
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
    handleChange = () => {
        this.checked = !this.checked;
        this.inputElem.setAttribute('checked', `${this.checked}`);
        this.setFormValue(this.checked);
        this.updateFormValidity();
    };
    handleOnFocus = () => {
        this.bqFocus.emit(this.el);
    };
    handleOnBlur = () => {
        this.bqBlur.emit(this.el);
    };
    handleSlotChange = () => {
        const slot = this.labelElem?.querySelector('slot') ?? null;
        if (isNil(slot))
            return;
        this.hasLabel = !!getTextContent(slot, { recurse: true }).length;
    };
    setFormValue = (checked) => {
        const value = checked ? 'on' : undefined;
        // Set form value based on the checked state
        // Here we also pass the state of the component (2nd argument) as the state of the form control
        // Details: https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/setFormValue
        this.internals?.setFormValue(value, `${this.checked}`);
    };
    updateFormValidity = () => {
        const { formValidationMessage, internals, required, checked, inputElem } = this;
        // Clear the validity state
        internals?.states.clear();
        if (!(required && !checked)) {
            // If the switch component is not required or is checked, set the validity state to valid
            internals?.states.add('valid');
            internals?.setValidity({});
            return;
        }
        // Set validity state based on the required property and checked state
        internals?.states.add('invalid');
        internals?.setValidity({ valueMissing: true }, formValidationMessage, inputElem);
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const hostStyle = {
            ...(this.justifyContent && { '--bq-switch--justify-content': this.justifyContent }),
        };
        const labelCssClasses = {
            'has-background': this.backgroundOnHover,
            'is-checked': this.checked,
            'is-disabled': this.disabled,
            'flex-row-reverse': this.reverseOrder,
        };
        return (h(Host, { key: '8295fa546abc07b5bebf8d29fab21463a6561be5', class: { 'full-width': this.fullWidth }, style: hostStyle }, h("label", { key: '3faea35d773b3cbdb79179903273271cd7d28be0', class: { 'bq-switch group': true, ...labelCssClasses }, part: "base" }, h("input", { key: '30d6ffea7a3800469bbb6a90c31a379925b2233b', class: "bq-switch--input peer sr-only !bs-[--bq-switch--dot-size] !is-[--bq-switch--width] peer-checked:invisible", type: "checkbox", checked: this.checked, disabled: this.disabled, required: this.required, name: !isNil(this.name) ? this.name : undefined, "aria-label": this.name, "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', onBlur: this.handleOnBlur, onChange: this.handleChange, onFocus: this.handleOnFocus, ref: (input) => (this.inputElem = input), role: "switch", value: this.value }), h("div", { key: '97495408b935f71ff3f923003b9b7ba5032f4f53', class: "bq-switch--control relative box-border flex justify-between rounded-full bg-ui-tertiary transition duration-300 bs-[--bq-switch--height] is-[--bq-switch--width] p-b-xs2 p-i-xs2 group-[&.is-checked]:bg-ui-brand", part: "control" }, this.innerLabel === 'icon' && (h("bq-icon", { key: 'eb39886fd1be8959cfc1a707bff44f4a5ddfe02c', class: "bq-switch--control__icon on", name: "check", color: "icon--alt", role: "img", title: "On", part: "icon-on" })), this.innerLabel === 'icon' && (h("bq-icon", { key: 'cf4db5387f312c5388ddc913fc3544fd02f90d6e', class: "bq-switch--control__icon off", name: "x", color: "icon--inverse", role: "img", title: "Off", part: "icon-off" })), h("div", { key: '505272e0cb05c2d195666c15e130c509eb0dbca4', class: "bq-switch--control__dot", part: "dot" })), h("span", { key: 'db897aa5e4488eec93ebf34080c165ada3d0f2ef', class: {
                'bq-switch--label text-m font-medium leading-regular text-primary transition-colors duration-300': true,
                'ms-s': this.hasLabel && !this.reverseOrder,
                'me-s': this.hasLabel && this.reverseOrder,
            }, ref: (span) => (this.labelElem = span), part: "label" }, h("slot", { key: '807d4d881be9187e55135ceb1f01cb01f9e1b46d', onSlotchange: this.handleSlotChange })))));
    }
    static get is() { return "bq-switch"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-switch.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-switch.css"]
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
                    "text": "If true, a background will be displayed on hover"
                },
                "getter": false,
                "setter": false,
                "attribute": "background-on-hover",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "It indicates whether if the switch is `ON` by default (when the page loads)"
                },
                "getter": false,
                "setter": false,
                "attribute": "checked",
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
                    "text": "If true, the switch control will be disabled and no interaction will be allowed"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
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
            "fullWidth": {
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
                    "text": "If true, the component will take the full width space available on the parent container"
                },
                "getter": false,
                "setter": false,
                "attribute": "full-width",
                "reflect": true,
                "defaultValue": "false"
            },
            "innerLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TSwitchInnerLabel",
                    "resolved": "\"default\" | \"icon\"",
                    "references": {
                        "TSwitchInnerLabel": {
                            "location": "import",
                            "path": "./bq-switch.types",
                            "id": "../../packages/beeq/src/components/switch/bq-switch.types.ts::TSwitchInnerLabel"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "It indicates how to to display the on/off marks inside the control, with icons or none (default)"
                },
                "getter": false,
                "setter": false,
                "attribute": "inner-label",
                "reflect": true,
                "defaultValue": "'default'"
            },
            "justifyContent": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TSwitchJustifyContent",
                    "resolved": "\"center\" | \"end\" | \"flex-end\" | \"flex-start\" | \"inherit\" | \"initial\" | \"left\" | \"normal\" | \"right\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\"",
                    "references": {
                        "TSwitchJustifyContent": {
                            "location": "import",
                            "path": "./bq-switch.types",
                            "id": "../../packages/beeq/src/components/switch/bq-switch.types.ts::TSwitchJustifyContent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "It defines how to distribute the space between and around the control and the label text\n(https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)"
                },
                "getter": false,
                "setter": false,
                "attribute": "justify-content",
                "reflect": true,
                "defaultValue": "'start'"
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
                    "text": "Name of the form control. Submitted with the form as part of a name/value pair"
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
                    "text": "If `true`, it will indicate that the user must switch `ON` the element before the owning form can be submitted"
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": true,
                "defaultValue": "false"
            },
            "reverseOrder": {
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
                    "text": "If true, the order of the control and the label text will be changed"
                },
                "getter": false,
                "setter": false,
                "attribute": "reverse-order",
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
                    "text": "The input control's value, submitted as a name/value pair with form data."
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "hasLabel": {}
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
                    "text": "Handler to be called when the switch state changes"
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
                    "text": "Handler to be called when the switch gets focus"
                },
                "complexType": {
                    "original": "HTMLBqSwitchElement",
                    "resolved": "HTMLBqSwitchElement",
                    "references": {
                        "HTMLBqSwitchElement": {
                            "location": "global",
                            "id": "global::HTMLBqSwitchElement"
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
                    "text": "Handler to be called when the switch loses focus"
                },
                "complexType": {
                    "original": "HTMLBqSwitchElement",
                    "resolved": "HTMLBqSwitchElement",
                    "references": {
                        "HTMLBqSwitchElement": {
                            "location": "global",
                            "id": "global::HTMLBqSwitchElement"
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
                "propName": "required",
                "methodName": "handleRequiredChange"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=bq-switch.js.map
