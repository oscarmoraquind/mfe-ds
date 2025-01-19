/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { debounce, hasSlotContent, isDefined, isHTMLElement, isNil } from "../../shared/utils";
/**
 * The Input component is a fundamental user interface element that allows users to input data by typing it into a text field.
 * It is commonly used in web and mobile applications for various purposes, such as collecting user information, search inputs, and login forms.
 *
 * @example How to use it
 * ```html
 * <bq-input name="username" label="Username" placeholder="Enter your username"></bq-input>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/980362-input
 * @status stable
 *
 * @dependency bq-button
 * @dependency bq-icon
 *
 * @attr {string} autocapitalize - Controls whether or not the input field should be capitalized and how.
 * @attr {string} autocomplete - Specifies whether or not the input field should have autocomplete enabled.
 * @attr {string} autocorrect - Controls whether or not the input field should have autocorrect enabled.
 * @attr {boolean} autofocus - If true, the input will be focused on component render.
 * @attr {string} clear-button-label - The clear button aria label.
 * @attr {number} debounce-time - The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.
 * @attr {boolean} disabled - Indicates whether the input is disabled or not.
 * @attr {boolean} disable-clear - If true, the clear button won't be displayed.
 * @attr {string} form - The ID of the form that the input field belongs to.
 * @attr {string} form-validation-message - The native form validation message (mandatory if `required` is set).
 * @attr {string} inputmode - The inputmode attribute specifies what kind of input mechanism would be most helpful for users entering content into the input field.
 * @attr {number | string} max - The maximum value that the input field can accept.
 * @attr {number} maxlength - The maximum number of characters that the input field can accept.
 * @attr {number | string} min - The minimum value that the input field can accept.
 * @attr {number} minlength - The minimum number of characters that the input field can accept.
 * @attr {string} name - The input field name.
 * @attr {string} pattern - Specifies a regular expression the form control's value should match.
 * @attr {string} placeholder - The input placeholder text value.
 * @attr {boolean} readonly - If true, the input field cannot be modified.
 * @attr {boolean} required - Indicates whether or not the input field is required to be filled out before submitting the form.
 * @attr {number | 'any'} step - A number that specifies the granularity that the value must adhere to.
 * @attr {string} type - The type attribute specifies the type of input field to display.
 * @attr {'none' | 'error' | 'warning' | 'success'} validation-status - The validation status of the input.
 * @attr {string | number | string[]} value - The input value, it can be used to reset the input to a previous value.
 *
 * @event bqBlur - Callback handler emitted when the input loses focus.
 * @event bqChange - Callback handler emitted when the input value has changed and the input loses focus.
 * @event bqClear - Callback handler emitted when the input value has been cleared.
 * @event bqFocus - Callback handler emitted when the input has received focus.
 * @event bqInput - Callback handler emitted when the input value changes.
 *
 * @slot label - The label slot container.
 * @slot prefix - The prefix slot container.
 * @slot suffix - The suffix slot container.
 * @slot helper-text - The helper text slot container.
 * @slot clear-icon - The clear icon slot container.
 *
 * @part base - The component's base wrapper.
 * @part button - The native HTML button used under the hood in the clear button.
 * @part clear-btn - The clear button.
 * @part control - The input control wrapper.
 * @part helper-text - The helper text slot container.
 * @part label - The label slot container.
 * @part input - The native HTML input element used under the hood.
 * @part prefix - The prefix slot container.
 * @part suffix - The suffix slot container.
 *
 * @cssprop --bq-input--background-color - Input background color
 * @cssprop --bq-input--border-color - Input border color
 * @cssprop --bq-input--border-color-focus - Input border color on focus
 * @cssprop --bq-input--border-radius - Input border radius
 * @cssprop --bq-input--border-width - Input border width
 * @cssprop --bq-input--border-style - Input border style
 * @cssprop --bq-input--gap - Gap between input content and prefix/suffix
 * @cssprop --bq-input--helper-margin-top - Helper text margin top
 * @cssprop --bq-input--helper-text-color - Helper text color
 * @cssprop --bq-input--helper-text-size - Helper text size
 * @cssprop --bq-input--icon-size - Icon size to use in prefix/suffix and clear button
 * @cssprop --bq-input--label-margin-bottom - Input label margin bottom
 * @cssprop --bq-input--label-text-color - Input label text color
 * @cssprop --bq-input--label-text-size - Input label text size
 * @cssprop --bq-input--padding-start - Input padding start
 * @cssprop --bq-input--padding-end - Input padding end
 * @cssprop --bq-input--paddingY - Input padding top and bottom
 * @cssprop --bq-input--text-color - Input text color
 * @cssprop --bq-input--text-size - Input text size
 * @cssprop --bq-input--text-placeholder-color - Input placeholder text color
 */
export class BqInput {
    // Own Properties
    // ====================
    helperTextElem;
    inputElem;
    labelElem;
    prefixElem;
    suffixElem;
    debounceBqInput;
    fallbackInputId = 'input';
    // Reference to host HTML element
    // ===================================
    el;
    internals;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasHelperText = false;
    hasLabel = false;
    hasPrefix = false;
    hasSuffix = false;
    hasValue = false;
    // Public Property API
    // ========================
    /**
     * Controls whether or not the input field should be capitalized and how.
     * Possible values are 'off', 'none', 'on', 'sentences', 'words', and 'characters'.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
     */
    autocapitalize = 'off';
    /**
     * Specifies whether or not the input field should have autocomplete enabled.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
     */
    autocomplete = 'off';
    /**
     * Controls whether or not the input field should have autocorrect enabled.
     * Possible values are 'on' and 'off'.
     */
    autocorrect = 'off';
    /** If true, the input will be focused on component render */
    autofocus;
    /** The clear button aria label */
    clearButtonLabel = 'Clear value';
    /**
     * The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.
     * A value of 0 means no debouncing will occur.
     */
    debounceTime = 0;
    /**
     * Indicates whether the input is disabled or not.
     * If `true`, the input is disabled and cannot be interacted with.
     */
    disabled = false;
    /** If true, the clear button won't be displayed */
    disableClear = false;
    /** The ID of the form that the input field belongs to. */
    form;
    /** The native form validation message (mandatory if `required` is set) */
    formValidationMessage;
    /**
     * The inputmode attribute specifies what kind of input mechanism would be most helpful for users entering content into the input field.
     * This allows a browser to display an appropriate virtual keyboard while editing.
     * Possible values are 'none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url', and 'date'.
     */
    inputmode;
    /**
     * The maximum value that the input field can accept.
     * Only applies to date and number input types.
     */
    max;
    /** The maximum number of characters that the input field can accept. */
    maxlength;
    /**
     * The minimum value that the input field can accept.
     * Only applies to date and number input types.
     */
    min;
    /** The minimum number of characters that the input field can accept. */
    minlength;
    /** The input field name. */
    name;
    /**
     * Specifies a regular expression the form control's value should match.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern
     */
    pattern;
    /** The input placeholder text value */
    placeholder;
    /** If true, the input field cannot be modified. */
    readonly;
    /** Indicates whether or not the input field is required to be filled out before submitting the form. */
    required;
    /**
     * A number that specifies the granularity that the value must adhere to.
     * Valid for date, month, week, time, datetime-local, number, and range.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
     */
    step;
    /**
     * The type attribute specifies the type of input field to display.
     * Possible values are 'text', 'password', 'email', 'number', 'tel', 'search', 'url', and more.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
     */
    type = 'text';
    /**
     * The validation status of the input.
     *
     * @remarks
     * This property is used to indicate the validation status of the input. It can be set to one of the following values:
     * - `'none'`: No validation status is set.
     * - `'error'`: The input has a validation error.
     * - `'warning'`: The input has a validation warning.
     * - `'success'`: The input has passed validation.
     */
    validationStatus = 'none';
    /** The input value, it can be used to reset the input to a previous value */
    value;
    // Prop lifecycle events
    // =======================
    handleValueChange() {
        const { internals, value } = this;
        if (Array.isArray(value)) {
            this.hasValue = value.some((val) => val.length > 0);
            this.internals.setFormValue(value.join(','));
            return;
        }
        this.hasValue = isDefined(value);
        internals.setFormValue(!isNil(value) ? `${value}` : undefined);
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler emitted when the input loses focus */
    bqBlur;
    /**
     * Callback handler emitted when the input value has changed and the input loses focus.
     * This handler is called whenever the user finishes typing or pasting text into the input field and then clicks outside of the input field.
     */
    bqChange;
    /** Callback handler emitted when the input value has been cleared */
    bqClear;
    /** Callback handler emitted when the input has received focus */
    bqFocus;
    /**
     * Callback handler emitted when the input value changes.
     * This handler is called whenever the user types or pastes text into the input field.
     */
    bqInput;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.handleValueChange();
    }
    formAssociatedCallback() {
        this.setFormValue(this.value?.toString());
        this.updateFormValidity();
    }
    formResetCallback() {
        if (isNil(this.value))
            return;
        this.handleClear();
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
    handleBlur = () => {
        if (this.disabled)
            return;
        this.bqBlur.emit(this.el);
    };
    handleFocus = () => {
        if (this.disabled)
            return;
        this.bqFocus.emit(this.el);
    };
    handleInput = (ev) => {
        if (this.disabled)
            return;
        this.debounceBqInput?.cancel();
        if (!isHTMLElement(ev.target, 'input'))
            return;
        this.value = this.type === 'number' ? Number(ev.target.value) : ev.target.value;
        this.debounceBqInput = debounce(() => {
            this.bqInput.emit({ value: this.value, el: this.el });
        }, this.debounceTime);
        this.debounceBqInput();
    };
    handleChange = (ev) => {
        if (this.disabled)
            return;
        if (!isHTMLElement(ev.target, 'input'))
            return;
        this.value = this.type === 'number' ? Number(ev.target.value) : ev.target.value;
        // Update form value and validity
        this.setFormValue(`${this.value}`);
        this.updateFormValidity();
        this.bqChange.emit({ value: this.value, el: this.el });
    };
    handleClear = () => {
        if (this.disabled)
            return;
        const { inputElem, setFormValue, updateFormValidity } = this;
        // Clear input element value
        inputElem.value = '';
        this.value = inputElem.value;
        // Set form value to empty string abd update validity
        setFormValue(this.value);
        updateFormValidity();
    };
    handleClearClick = (ev) => {
        ev.stopPropagation();
        this.handleClear();
        const { bqClear, bqChange, bqInput, el, inputElem } = this;
        // Emit events
        bqClear.emit(el);
        bqInput.emit({ value: this.value, el });
        bqChange.emit({ value: this.value, el });
        // Refocus input element
        inputElem.focus();
    };
    setFormValue = (value) => {
        this.internals.setFormValue(!isNil(value) ? `${value}` : undefined);
    };
    updateFormValidity = () => {
        const { formValidationMessage, internals, required, value, inputElem } = this;
        // Clear the validity state
        internals?.states.clear();
        if (required && (!value || value.toString().trim() === '')) {
            // Set validity state to invalid
            internals?.states.add('invalid');
            internals?.setValidity({ valueMissing: true }, formValidationMessage, inputElem);
            return;
        }
        // Set validity state to valid if textarea has value or is not required
        internals?.states.add('valid');
        internals?.setValidity({});
    };
    handleLabelSlotChange = () => {
        this.hasLabel = hasSlotContent(this.labelElem);
    };
    handlePrefixSlotChange = () => {
        this.hasPrefix = hasSlotContent(this.prefixElem);
    };
    handleSuffixSlotChange = () => {
        this.hasSuffix = hasSlotContent(this.suffixElem);
    };
    handleHelperTextSlotChange = () => {
        this.hasHelperText = hasSlotContent(this.helperTextElem);
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("div", { key: '0dcdf81922be21d38f7bba929c9b27abfcf71c49', class: "bq-input", part: "base" }, h("label", { key: '8e2f0c455008a207c18eb0d8ca6ce2efa52f1690', class: { 'bq-input--label': true, '!hidden': !this.hasLabel }, "aria-label": this.name || this.fallbackInputId, htmlFor: this.name || this.fallbackInputId, ref: (labelElem) => (this.labelElem = labelElem), part: "label" }, h("slot", { key: '933f0cb7688021ca2d045d29ea27b98f4faf4ad2', name: "label", onSlotchange: this.handleLabelSlotChange })), h("div", { key: '2021e802923da53378fa842638c865764a19b4dd', class: {
                'bq-input--control': true,
                [`validation-${this.validationStatus}`]: true,
                disabled: this.disabled,
            }, part: "control" }, h("span", { key: '767338a2a5befd7eed4838cc59141bc157e2cab2', class: { 'bq-input--control__prefix': true, '!hidden': !this.hasPrefix }, ref: (spanElem) => (this.prefixElem = spanElem), part: "prefix" }, h("slot", { key: 'b4a6167db257e470ce459f2e7384d6dbfce5c469', name: "prefix", onSlotchange: this.handlePrefixSlotChange })), h("input", { key: 'eed7a59ddf917f8ab056a7107db1e28ba5592190', id: this.name || this.fallbackInputId, class: "bq-input--control__input", "aria-disabled": this.disabled ? 'true' : 'false', autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, disabled: this.disabled, form: this.form, inputMode: this.inputmode, max: this.max, maxLength: this.maxlength, min: this.min, minLength: this.minlength, name: this.name, pattern: this.pattern, placeholder: this.placeholder, ref: (inputElem) => (this.inputElem = inputElem), readOnly: this.readonly, required: this.required, step: this.step, type: this.type, value: this.value, part: "input",
            // Events
            onBlur: this.handleBlur, onChange: this.handleChange, onFocus: this.handleFocus, onInput: this.handleInput }), this.hasValue && !this.disabled && !this.disableClear && (
        // The clear button will be visible as long as the input has a value
        // and the parent group is hovered or has focus-within
        h("bq-button", { key: 'e566fc4a539773e7b90606960f603c37ba9a7dbf', class: "bq-input--control__clear ms-[--bq-input--gap] hidden", appearance: "text", "aria-label": this.clearButtonLabel, size: "small", onBqClick: this.handleClearClick, part: "clear-btn", exportparts: "button" }, h("slot", { key: '2fb6f3be2d29d8b0fcb7ce05b8031b2820922e15', name: "clear-icon" }, h("bq-icon", { key: 'd7988ae465c576497eb9c79fa050a9d1a61c372b', name: "x-circle", class: "flex" })))), h("span", { key: '70695ce87e7e2cd25842f55e646e3d6b0542e65a', class: { 'bq-input--control__suffix': true, '!hidden': !this.hasSuffix }, ref: (spanElem) => (this.suffixElem = spanElem), part: "suffix" }, h("slot", { key: '4de2dae0b8418d4e2002d546e322e95d928df2f4', name: "suffix", onSlotchange: this.handleSuffixSlotChange }))), h("div", { key: 'dac42dd887d753fe3ba90fc64548dcb4f37b5836', class: {
                [`bq-input--helper-text validation-${this.validationStatus}`]: true,
                '!hidden': !this.hasHelperText,
            }, ref: (divElem) => (this.helperTextElem = divElem), part: "helper-text" }, h("slot", { key: '933d7f6c2162f68c0efa45340b032da8fbfcb4bd', name: "helper-text", onSlotchange: this.handleHelperTextSlotChange }))));
    }
    static get is() { return "bq-input"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-input.css"]
        };
    }
    static get properties() {
        return {
            "autocapitalize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls whether or not the input field should be capitalized and how.\nPossible values are 'off', 'none', 'on', 'sentences', 'words', and 'characters'.\nSee: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize"
                },
                "getter": false,
                "setter": false,
                "attribute": "autocapitalize",
                "reflect": true,
                "defaultValue": "'off'"
            },
            "autocomplete": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies whether or not the input field should have autocomplete enabled.\nSee: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values"
                },
                "getter": false,
                "setter": false,
                "attribute": "autocomplete",
                "reflect": true,
                "defaultValue": "'off'"
            },
            "autocorrect": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'on' | 'off'",
                    "resolved": "\"off\" | \"on\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls whether or not the input field should have autocorrect enabled.\nPossible values are 'on' and 'off'."
                },
                "getter": false,
                "setter": false,
                "attribute": "autocorrect",
                "reflect": true,
                "defaultValue": "'off'"
            },
            "autofocus": {
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
                    "text": "If true, the input will be focused on component render"
                },
                "getter": false,
                "setter": false,
                "attribute": "autofocus",
                "reflect": true
            },
            "clearButtonLabel": {
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
                    "text": "The clear button aria label"
                },
                "getter": false,
                "setter": false,
                "attribute": "clear-button-label",
                "reflect": true,
                "defaultValue": "'Clear value'"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.\nA value of 0 means no debouncing will occur."
                },
                "getter": false,
                "setter": false,
                "attribute": "debounce-time",
                "reflect": true,
                "defaultValue": "0"
            },
            "disabled": {
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
                    "text": "Indicates whether the input is disabled or not.\nIf `true`, the input is disabled and cannot be interacted with."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "disableClear": {
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
                    "text": "If true, the clear button won't be displayed"
                },
                "getter": false,
                "setter": false,
                "attribute": "disable-clear",
                "reflect": true,
                "defaultValue": "false"
            },
            "form": {
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
                    "text": "The ID of the form that the input field belongs to."
                },
                "getter": false,
                "setter": false,
                "attribute": "form",
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
                    "text": "The native form validation message (mandatory if `required` is set)"
                },
                "getter": false,
                "setter": false,
                "attribute": "form-validation-message",
                "reflect": false
            },
            "inputmode": {
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
                    "text": "The inputmode attribute specifies what kind of input mechanism would be most helpful for users entering content into the input field.\nThis allows a browser to display an appropriate virtual keyboard while editing.\nPossible values are 'none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url', and 'date'."
                },
                "getter": false,
                "setter": false,
                "attribute": "inputmode",
                "reflect": false
            },
            "max": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "number | string",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The maximum value that the input field can accept.\nOnly applies to date and number input types."
                },
                "getter": false,
                "setter": false,
                "attribute": "max",
                "reflect": true
            },
            "maxlength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The maximum number of characters that the input field can accept."
                },
                "getter": false,
                "setter": false,
                "attribute": "maxlength",
                "reflect": true
            },
            "min": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "number | string",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The minimum value that the input field can accept.\nOnly applies to date and number input types."
                },
                "getter": false,
                "setter": false,
                "attribute": "min",
                "reflect": true
            },
            "minlength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The minimum number of characters that the input field can accept."
                },
                "getter": false,
                "setter": false,
                "attribute": "minlength",
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
                    "text": "The input field name."
                },
                "getter": false,
                "setter": false,
                "attribute": "name",
                "reflect": true
            },
            "pattern": {
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
                    "text": "Specifies a regular expression the form control's value should match.\nSee: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern"
                },
                "getter": false,
                "setter": false,
                "attribute": "pattern",
                "reflect": true
            },
            "placeholder": {
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
                    "text": "The input placeholder text value"
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": true
            },
            "readonly": {
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
                    "text": "If true, the input field cannot be modified."
                },
                "getter": false,
                "setter": false,
                "attribute": "readonly",
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
                    "text": "Indicates whether or not the input field is required to be filled out before submitting the form."
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": true
            },
            "step": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "number | 'any'",
                    "resolved": "\"any\" | number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "A number that specifies the granularity that the value must adhere to.\nValid for date, month, week, time, datetime-local, number, and range.\nSee: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step"
                },
                "getter": false,
                "setter": false,
                "attribute": "step",
                "reflect": true
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TInputType",
                    "resolved": "\"date\" | \"datetime-local\" | \"email\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"time\" | \"url\"",
                    "references": {
                        "TInputType": {
                            "location": "import",
                            "path": "./bq-input.types",
                            "id": "../../packages/beeq/src/components/input/bq-input.types.ts::TInputType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type attribute specifies the type of input field to display.\nPossible values are 'text', 'password', 'email', 'number', 'tel', 'search', 'url', and more.\nSee: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'text'"
            },
            "validationStatus": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TInputValidation",
                    "resolved": "\"error\" | \"none\" | \"success\" | \"warning\"",
                    "references": {
                        "TInputValidation": {
                            "location": "import",
                            "path": "./bq-input.types",
                            "id": "../../packages/beeq/src/components/input/bq-input.types.ts::TInputValidation"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "remarks",
                            "text": "This property is used to indicate the validation status of the input. It can be set to one of the following values:\n- `'none'`: No validation status is set.\n- `'error'`: The input has a validation error.\n- `'warning'`: The input has a validation warning.\n- `'success'`: The input has passed validation."
                        }],
                    "text": "The validation status of the input."
                },
                "getter": false,
                "setter": false,
                "attribute": "validation-status",
                "reflect": true,
                "defaultValue": "'none'"
            },
            "value": {
                "type": "any",
                "mutable": true,
                "complexType": {
                    "original": "TInputValue",
                    "resolved": "number | string | string[]",
                    "references": {
                        "TInputValue": {
                            "location": "import",
                            "path": "./bq-input.types",
                            "id": "../../packages/beeq/src/components/input/bq-input.types.ts::TInputValue"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The input value, it can be used to reset the input to a previous value"
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
            "hasHelperText": {},
            "hasLabel": {},
            "hasPrefix": {},
            "hasSuffix": {},
            "hasValue": {}
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
                    "text": "Callback handler emitted when the input loses focus"
                },
                "complexType": {
                    "original": "HTMLBqInputElement",
                    "resolved": "HTMLBqInputElement",
                    "references": {
                        "HTMLBqInputElement": {
                            "location": "global",
                            "id": "global::HTMLBqInputElement"
                        }
                    }
                }
            }, {
                "method": "bqChange",
                "name": "bqChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler emitted when the input value has changed and the input loses focus.\nThis handler is called whenever the user finishes typing or pasting text into the input field and then clicks outside of the input field."
                },
                "complexType": {
                    "original": "{ value: string | number | string[]; el: HTMLBqInputElement }",
                    "resolved": "{ value: string | number | string[]; el: HTMLBqInputElement; }",
                    "references": {
                        "HTMLBqInputElement": {
                            "location": "global",
                            "id": "global::HTMLBqInputElement"
                        }
                    }
                }
            }, {
                "method": "bqClear",
                "name": "bqClear",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler emitted when the input value has been cleared"
                },
                "complexType": {
                    "original": "HTMLBqInputElement",
                    "resolved": "HTMLBqInputElement",
                    "references": {
                        "HTMLBqInputElement": {
                            "location": "global",
                            "id": "global::HTMLBqInputElement"
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
                    "text": "Callback handler emitted when the input has received focus"
                },
                "complexType": {
                    "original": "HTMLBqInputElement",
                    "resolved": "HTMLBqInputElement",
                    "references": {
                        "HTMLBqInputElement": {
                            "location": "global",
                            "id": "global::HTMLBqInputElement"
                        }
                    }
                }
            }, {
                "method": "bqInput",
                "name": "bqInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler emitted when the input value changes.\nThis handler is called whenever the user types or pastes text into the input field."
                },
                "complexType": {
                    "original": "{ value: string | number | string[]; el: HTMLBqInputElement }",
                    "resolved": "{ value: string | number | string[]; el: HTMLBqInputElement; }",
                    "references": {
                        "HTMLBqInputElement": {
                            "location": "global",
                            "id": "global::HTMLBqInputElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=bq-input.js.map
