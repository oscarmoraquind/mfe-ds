/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { RADIO_GROUP_ORIENTATION } from "./bq-radio-group.types";
import { debounce, isHTMLElement, isNil, validatePropValue } from "../../shared/utils";
/**
 * The radio group is a user interface component that groups radio buttons to enable a single selection within the group.
 *
 * @example How to use it
 * ```html
 * <bq-radio-group fieldset value="option1">
 *   <span slot="label">radio group</span>
 *   <bq-radio value="option1">Radio option 1</bq-radio>
 *   <bq-radio value="option2">Radio option 2</bq-radio>
 *   <bq-radio value="option3">Radio option 3</bq-radio>
 * </bq-radio-group>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/9718e1-radio-button/b/09d7b1
 * @status stable
 *
 * @attr {boolean} background-on-hover - If `true`, the radio displays background on hover
 * @attr {number} debounce-time - A number representing the delay time (in milliseconds) that bqChange event handler gets triggered once the value change
 * @attr {boolean} disabled - If `true` radio inputs are disabled
 * @attr {boolean} fieldset - If `true` displays fieldset
 * @attr {string} name - Name of the HTML input form control. Submitted with the form as part of a name/value pair
 * @attr {"horizontal" | "vertical"} orientation - The display orientation of the radio inputs
 * @attr {boolean} required - If `true`, the radio group is required
 * @attr {string} required-validation-message - The native form validation message when the radio group is required
 * @attr {string} value - The display orientation of the radio inputs
 *
 * @method vClick - Simulate a click event on the native `<input>` HTML element used under the hood
 * @method vFocus - Sets focus on the native `<input>` HTML element used under the hood
 * @method vBlur - Remove focus from the native `<input>` HTML element used under the hood
 *
 * @event bqChange - Handler to be called when the radio state changes
 *
 * @slot - The bq-radio items to group
 * @slot label - The label content of radio group
 *
 * @part base - The component's internal wrapper of the radio components.
 * @part label - The `<legend>` element that holds the text content.
 * @part group - The `<div>` element that holds the radio inputs.
 */
export class BqRadioGroup {
    // Own Properties
    // ====================
    focusedBqRadio = null;
    debouncedBqChange;
    // Reference to host HTML element
    // ===================================
    internals;
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    // Public Property API
    // ========================
    /** If true, all radio inputs in the group will display a background on hover */
    backgroundOnHover = false;
    /** A number representing the delay time (in milliseconds) that `bqChange` event handler gets triggered once the value change */
    debounceTime = 0;
    /** If true radio inputs are disabled */
    disabled = false;
    /** If true displays fieldset */
    fieldset = false;
    /** Name of the HTML input form control. Submitted with the form as part of a name/value pair.  */
    name;
    /** The display orientation of the radio inputs */
    orientation = 'vertical';
    /** If true, the radio group is required */
    required = false;
    /** The native form validation message when the radio group is required */
    requiredValidationMessage;
    /** A string representing the value of the radio. */
    value;
    // Prop lifecycle events
    // =======================
    handleGroupProperties() {
        if (!this.bqRadioElements)
            return;
        this.bqRadioElements.forEach((bqRadio) => {
            bqRadio.backgroundOnHover = this.backgroundOnHover;
            bqRadio.checked = !isNil(this.value) ? bqRadio.value === this.value : false;
            bqRadio.disabled = this.disabled;
            bqRadio.name = this.name;
            bqRadio.required = this.required;
        });
    }
    checkPropValues() {
        validatePropValue(RADIO_GROUP_ORIENTATION, 'vertical', this.el, 'orientation');
    }
    checkDebounceChange() {
        if (this.debounceTime < 0) {
            this.debounceTime = Math.max(0, this.debounceTime);
        }
        if (this.debouncedBqChange) {
            this.debouncedBqChange.cancel();
        }
        this.debouncedBqChange = debounce((event) => {
            this.bqChange.emit(event);
        }, this.debounceTime);
    }
    async handleRequiredChange() {
        await this.updateFormValidity();
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when the radio state changes */
    bqChange;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.checkPropValues();
        this.checkDebounceChange();
        this.internals.setFormValue(this.value);
    }
    componentDidLoad() {
        this.handleGroupProperties();
    }
    async formAssociatedCallback() {
        this.internals.setFormValue(this.value);
        await this.updateFormValidity();
    }
    formResetCallback() {
        this.value = null;
        this.internals.setFormValue(this.value);
    }
    // Listeners
    // ==============
    onMouseDown(event) {
        if (!isNil(this.focusedBqRadio) && isHTMLElement(event.target, 'bq-radio') && this.el.contains(event.target)) {
            this.focusedBqRadio = event.target;
        }
    }
    onBqClick(event) {
        if (isNil(this.focusedBqRadio)) {
            this.focusedBqRadio = event.detail;
        }
        if (event.detail.value === this.value)
            return;
        const target = event.detail;
        this.bqRadioElements.forEach((bqRadioElement) => (bqRadioElement.checked = bqRadioElement === target));
        this.setCheckedRadioItem(event.detail);
    }
    onBqKeyDown(event) {
        const { target } = event;
        if (!isHTMLElement(target, 'bq-radio'))
            return;
        switch (event.detail.key) {
            case 'ArrowDown':
            case 'ArrowRight': {
                this.focusRadioInputSibling(target, true);
                break;
            }
            case 'ArrowUp':
            case 'ArrowLeft': {
                this.focusRadioInputSibling(target, false);
                break;
            }
            default:
        }
    }
    onBqFocus(event) {
        if (event.detail !== this.focusedBqRadio)
            return;
        event.stopPropagation();
    }
    onBqBlur(event) {
        if (!isNil(this.focusedBqRadio) && event.detail !== this.focusedBqRadio) {
            event.stopPropagation();
        }
        else {
            this.focusedBqRadio = null;
        }
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
    focusRadioInputSibling = (currentTarget, next) => {
        this.bqRadioElements.forEach((bqRadioElement, index, elements) => {
            if (bqRadioElement === currentTarget) {
                const target = this.getNextRadioElement(elements, index, next);
                currentTarget.checked = false;
                target.vFocus();
                this.setCheckedRadioItem(target);
            }
        });
    };
    setCheckedRadioItem = (target) => {
        const { value } = target;
        target.checked = true;
        this.value = value;
        this.focusedBqRadio = target;
        this.internals.setFormValue(value);
        this.debouncedBqChange({ value, target });
    };
    getNextRadioElement = (elements, index, forward = true) => {
        let element = null;
        let elementIndex = index;
        do {
            elementIndex = (elements.length + (elementIndex + (forward ? 1 : -1))) % elements.length;
            element = elements[elementIndex];
        } while (element.disabled);
        return element;
    };
    updateFormValidity = async () => {
        const { internals, required, requiredValidationMessage, value } = this;
        // Clear the validity state
        internals?.states.clear();
        if (!required || (required && !isNil(value))) {
            // If the checkbox is not required or is checked, set the validity state to valid
            internals?.states.add('valid');
            internals?.setValidity({});
            return;
        }
        // If the checkbox is required and not checked, set the validity state to invalid
        internals?.states.add('invalid');
        internals?.setValidity({ valueMissing: true }, requiredValidationMessage, await this.bqRadioElements[0].getNativeInput());
    };
    get bqRadioElements() {
        return Array.from(this.el.querySelectorAll('bq-radio'));
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("fieldset", { key: 'c8255d626f81c91d47eadc332661e32409508a22', class: { 'bq-radio-group': true, 'has-fieldset': this.fieldset }, "aria-labelledby": "bq-radio-group__label", "aria-controls": "bq-radiogroup", role: "radiogroup", part: "base" }, h("legend", { key: '792efa8bca0a69d94a1e7df37df97d18099a711e', part: "label" }, h("slot", { key: '7aa7e29c428533ce1e828595bd079df273653e38', id: "bq-radiogroup__label", name: "label" })), h("div", { key: '8077721556603ae355a9d78111673a098be160f5', class: `bq-radio-group--${this.orientation}`, part: "group" }, h("slot", { key: '6ee4498e1a97666df11d09e35fada6f2dce2ca16', id: "bq-radiogroup" }))));
    }
    static get is() { return "bq-radio-group"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-radio-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-radio-group.css"]
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
                    "text": "If true, all radio inputs in the group will display a background on hover"
                },
                "getter": false,
                "setter": false,
                "attribute": "background-on-hover",
                "reflect": true,
                "defaultValue": "false"
            },
            "debounceTime": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "A number representing the delay time (in milliseconds) that `bqChange` event handler gets triggered once the value change"
                },
                "getter": false,
                "setter": false,
                "attribute": "debounce-time",
                "reflect": true,
                "defaultValue": "0"
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
                    "text": "If true radio inputs are disabled"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "fieldset": {
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
                    "text": "If true displays fieldset"
                },
                "getter": false,
                "setter": false,
                "attribute": "fieldset",
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
            "orientation": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TRadioGroupOrientation",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "TRadioGroupOrientation": {
                            "location": "import",
                            "path": "./bq-radio-group.types",
                            "id": "../../packages/beeq/src/components/radio-group/bq-radio-group.types.ts::TRadioGroupOrientation"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The display orientation of the radio inputs"
                },
                "getter": false,
                "setter": false,
                "attribute": "orientation",
                "reflect": true,
                "defaultValue": "'vertical'"
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
                    "text": "If true, the radio group is required"
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": true,
                "defaultValue": "false"
            },
            "requiredValidationMessage": {
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
                    "text": "The native form validation message when the radio group is required"
                },
                "getter": false,
                "setter": false,
                "attribute": "required-validation-message",
                "reflect": true
            },
            "value": {
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
                "method": "bqChange",
                "name": "bqChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when the radio state changes"
                },
                "complexType": {
                    "original": "{ value: string; target: HTMLBqRadioElement }",
                    "resolved": "{ value: string; target: HTMLBqRadioElement; }",
                    "references": {
                        "HTMLBqRadioElement": {
                            "location": "global",
                            "id": "global::HTMLBqRadioElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "backgroundOnHover",
                "methodName": "handleGroupProperties"
            }, {
                "propName": "disabled",
                "methodName": "handleGroupProperties"
            }, {
                "propName": "name",
                "methodName": "handleGroupProperties"
            }, {
                "propName": "required",
                "methodName": "handleGroupProperties"
            }, {
                "propName": "value",
                "methodName": "handleGroupProperties"
            }, {
                "propName": "orientation",
                "methodName": "checkPropValues"
            }, {
                "propName": "debounceTime",
                "methodName": "checkDebounceChange"
            }, {
                "propName": "required",
                "methodName": "handleRequiredChange"
            }, {
                "propName": "value",
                "methodName": "handleRequiredChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "mousedown",
                "method": "onMouseDown",
                "target": "body",
                "capture": false,
                "passive": true
            }, {
                "name": "bqClick",
                "method": "onBqClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "bqKeyDown",
                "method": "onBqKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "bqFocus",
                "method": "onBqFocus",
                "target": undefined,
                "capture": true,
                "passive": false
            }, {
                "name": "bqBlur",
                "method": "onBqBlur",
                "target": undefined,
                "capture": true,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=bq-radio-group.js.map
