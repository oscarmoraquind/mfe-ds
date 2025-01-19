/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { debounce, hasSlotContent, isHTMLElement, isNil } from "../../shared/utils";
/**
 * The Textarea component is a multi-line text input control that is often used in a form to collect user inputs like comments or reviews.
 *
 * @example How to use it
 * ```html
 * <bq-textarea maxlength="0" name="textarea" placeholder="Placeholder..." rows="5">
 *   <label slot="label">Label</label>
 *   <span class="flex items-center gap-xs" slot="helper-text">
 *     <bq-icon name="star"></bq-icon>
 *     Helper text
 *   </span>
 * </bq-textarea>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/16792c-textarea
 * @status stable
 *
 * @attr {string} autocapitalize - Controls whether or not the textarea field should be capitalized and how.
 * @attr {string} autocomplete - Specifies whether or not the textarea field should have autocomplete enabled.
 * @attr {string} autocorrect - Controls whether or not the textarea field should have autocorrect enabled.
 * @attr {boolean} autofocus - If `true`, the textarea will be focused on component render.
 * @attr {boolean} auto-grow - If `true`, the textarea will automatically grow and shrink to fit its contents.
 * @attr {number} debounce-time - The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the textarea value changes.
 * @attr {boolean} disabled - If `true`, the user cannot interact with the textarea.
 * @attr {boolean} disable-resize - If `true`, it will block the user's ability to resize the textarea.
 * @attr {string} form - The ID of the form that the textarea field belongs to.
 * @attr {string} form-validation-message - The native form validation message.
 * @attr {number} maxlength - The maximum number of characters that can be entered into the textarea (`0`: no limit).
 * @attr {string} name - The name of the textarea element.
 * @attr {string} placeholder - The placeholder text to show when there is no value.
 * @attr {boolean} readonly - If `true`, the textarea field cannot be modified.
 * @attr {boolean} required - Indicates whether or not the textarea field is required to be filled out before submitting the form.
 * @attr {number} rows - The number of visible text lines for the control. It must be a positive integer.
 * @attr {boolean} spellcheck - If `true`, the textarea content may be checked for spelling errors.
 * @attr {"error" | "none" | "success" | "warning"} validation-status - The validation status of the textarea.
 * @attr {string} value - The value of the textarea. It can be used to reset the textarea to a previous value.
 * @attr {"soft" | "hard"} wrap - Specifies how the text in a text area is to be wrapped when submitted in a form.
 *
 * @event bqBlur - Handler to be called when the textarea loses focus.
 * @event bqChange - Handler to be called when the textarea value has changed and the textarea loses focus.
 * @event bqClear - Handler to be called when the textarea value has been cleared.
 * @event bqFocus - Handler to be called when the textarea has received focus.
 * @event bqInput - Handler to be called when the textarea value changes.
 *
 * @slot label - The textarea label.
 * @slot helper-text - The helper text.
 *
 * @part base - The component's base wrapper.
 * @part input - The textarea element.
 * @part label - The textarea label.
 * @part helper-info - The helper info container.
 * @part helper-text - The helper text.
 * @part helper-counter - The helper counter.
 *
 * @cssprop --bq-textarea--background-color - Textarea background color
 * @cssprop --bq-textarea--border-color - Textarea border color
 * @cssprop --bq-textarea--border-color-focus - Textarea border color on focus
 * @cssprop --bq-textarea--border-radius - Textarea border radius
 * @cssprop --bq-textarea--border-width - Textarea border width
 * @cssprop --bq-textarea--border-style - Textarea border style
 * @cssprop --bq-textarea--helper-margin-top - Textarea helper text margin top
 * @cssprop --bq-textarea--helper-text-color - Textarea helper text color
 * @cssprop --bq-textarea--helper-text-size - Textarea helper text size
 * @cssprop --bq-textarea--label-margin-bottom - Textarea label margin bottom
 * @cssprop --bq-textarea--label-text-color - Textarea label text color
 * @cssprop --bq-textarea--label-text-size - Textarea label text size
 * @cssprop --bq-textarea--paddingY - Textarea padding top and bottom
 * @cssprop --bq-textarea--padding-start - Textarea padding start
 * @cssprop --bq-textarea--padding-end - Textarea padding end
 * @cssprop --bq-textarea--text-color - Textarea text color
 * @cssprop --bq-textarea--text-size - Textarea text size
 * @cssprop --bq-textarea--text-placeholder-color - Textarea placeholder text color
 */
export class BqTextarea {
    // Own Properties
    // ====================
    debounceBqInput;
    fallbackId = 'textarea';
    helperTextElem;
    labelElem;
    textarea;
    // Reference to host HTML element
    // ===================================
    internals;
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasHelperText = false;
    hasLabel = false;
    // Public Property API
    // ========================
    /**
     * Controls whether or not the textarea field should be capitalized and how.
     * Possible values are 'off', 'none', 'on', 'sentences', 'words', and 'characters'.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
     */
    autocapitalize = 'off';
    /**
     * Specifies whether or not the textarea field should have autocomplete enabled.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
     */
    autocomplete = 'off';
    /**
     * Controls whether or not the textarea field should have autocorrect enabled.
     * Possible values are 'on' and 'off'.
     */
    autocorrect = 'off';
    /** If true, the textarea will be focused on component render */
    autofocus;
    /**
     * If `true`, the textarea will automatically grow and shrink to fit its contents.
     * If `false`, the textarea will have a fixed height specified by the `rows` property.
     */
    autoGrow = false;
    /**
     * The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the textarea value changes.
     * A value of 0 means no debouncing will occur.
     */
    debounceTime = 0;
    /** If `true`, the user cannot interact with the textarea. */
    disabled = false;
    /** If `true`, it will block the user's ability to resize the textarea. */
    disableResize = false;
    /** The ID of the form that the textarea field belongs to. */
    form;
    /** The native form validation message */
    formValidationMessage;
    /**
     * The maximum number of characters that can be entered into the textarea (`0`: no limit).
     * When enabled, a character counter will be shown underneath the textarea.
     */
    maxlength;
    /** The name of the textarea element. */
    name;
    /** The placeholder text to show when there is no value. */
    placeholder;
    /** If true, the textarea field cannot be modified. */
    readonly = false;
    /** Indicates whether or not the textarea field is required to be filled out before submitting the form. */
    required = false;
    /** The number of visible text lines for the control. It must be a positive integer. */
    rows = 5;
    /** If true, the textarea content may be checked for spelling errors. */
    spellcheck = false;
    /**
     * The validation status of the textarea.
     *
     * @remarks
     * This property is used to indicate the validation status of the textarea. It can be set to one of the following values:
     * - `'none'`: No validation status is set.
     * - `'error'`: The textarea has a validation error.
     * - `'warning'`: The textarea has a validation warning.
     * - `'success'`: The textarea has passed validation.
     */
    validationStatus = 'none';
    /** The value of the textarea. It can be used to reset the textarea to a previous value. */
    value;
    /** Specifies how the text in a text area is to be wrapped when submitted in a form */
    wrap = 'soft';
    // Prop lifecycle events
    // =======================
    handleValueChange() {
        if (!this.textarea)
            return;
        if (!this.maxlength || this.value?.length < this.maxlength)
            return;
        // If the value is longer than the maxlength, we need to truncate it
        this.value = this.value?.substring(0, this.maxlength);
        this.textarea.value = this.value ?? '';
    }
    handleRequiredPropChange() {
        this.updateFormValidity();
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler emitted when the textarea loses focus */
    bqBlur;
    /**
     * Callback handler emitted when the textarea value has changed and the textarea loses focus.
     * This handler is called whenever the user finishes typing or pasting text into the textarea field and then clicks outside of the textarea field.
     */
    bqChange;
    /** Callback handler emitted when the textarea value has been cleared */
    bqClear;
    /** Callback handler emitted when the textarea has received focus */
    bqFocus;
    /**
     * Callback handler emitted when the textarea value changes.
     * This handler is called whenever the user types or pastes text into the textarea field.
     */
    bqInput;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentDidLoad() {
        this.handleValueChange();
    }
    formAssociatedCallback() {
        this.setFormValue(this.value);
        this.updateFormValidity();
    }
    formResetCallback() {
        this.clearSelection();
        // Reset the form validity state
        this.setFormValue();
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
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    get numberOfCharacters() {
        if (!this.maxlength || !this.textarea)
            return 0;
        return this.value?.length;
    }
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
    handleChange = (ev) => {
        if (this.disabled)
            return;
        if (!isHTMLElement(ev.target, 'textarea'))
            return;
        this.value = ev.target.value;
        this.setFormValue(this.value);
        this.updateFormValidity();
        this.bqChange.emit({ value: this.value, el: this.el });
    };
    handleInput = (ev) => {
        if (this.disabled)
            return;
        this.debounceBqInput?.cancel();
        if (!isHTMLElement(ev.target, 'textarea'))
            return;
        this.value = ev.target.value;
        this.debounceBqInput = debounce(() => {
            this.bqInput.emit({ value: this.value, el: this.el });
        }, this.debounceTime);
        this.debounceBqInput();
        this.autoResize();
    };
    autoResize = () => {
        if (!this.autoGrow)
            return;
        const inputElem = this.textarea;
        if (!inputElem)
            return;
        inputElem.style.height = 'auto';
        inputElem.style.height = `${inputElem.scrollHeight}px`;
    };
    handleLabelSlotChange = () => {
        this.hasLabel = hasSlotContent(this.labelElem);
    };
    handleHelperTextSlotChange = () => {
        this.hasHelperText = hasSlotContent(this.helperTextElem);
    };
    setFormValue = (value) => {
        this.internals.setFormValue(!isNil(value) ? `${value}` : undefined);
    };
    updateFormValidity = () => {
        const { formValidationMessage, internals, required, value, textarea } = this;
        // Clear the validity state
        internals?.states.clear();
        if (required && (!value || value.trim() === '')) {
            // Set validity state to invalid
            internals?.states.add('invalid');
            internals?.setValidity({ valueMissing: true }, formValidationMessage, textarea);
            return;
        }
        // Set validity state to valid if textarea has value or is not required
        internals?.states.add('valid');
        internals?.setValidity({});
    };
    clearSelection = () => {
        this.value = '';
        this.textarea.value = this.value;
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("div", { key: 'ebc93d4e9b3c290b2f9229eba6452856b6838eee', class: "bq-textarea flex flex-auto flex-col", part: "base" }, h("label", { key: 'ee1ff516838b9eb40427a6a1d4b5aba77f4b882b', class: { 'bq-textarea__label': true, '!hidden': !this.hasLabel }, htmlFor: this.name ?? this.fallbackId, "aria-label": this.name ?? this.fallbackId, ref: (label) => (this.labelElem = label), part: "label" }, h("slot", { key: 'f63cd86c78382f19063301ab0958498c793c5335', name: "label", onSlotchange: this.handleLabelSlotChange })), h("textarea", { key: 'f1b5a0ddf058fed02efb2be73a16501c14a2d4a8', id: this.name ?? this.fallbackId, class: {
                'bq-textarea__input': true,
                'resize-none': this.disableResize,
                [`validation-${this.validationStatus}`]: true,
            }, autocapitalize: this.autocapitalize, autocomplete: this.autocomplete, autocorrect: this.autocorrect, autofocus: this.autofocus, disabled: this.disabled, form: this.form, maxLength: this.maxlength > 0 ? this.maxlength : undefined, name: this.name, placeholder: this.placeholder, readOnly: this.readonly, required: this.required, rows: this.rows, spellcheck: this.spellcheck, wrap: this.wrap, ref: (elem) => (this.textarea = elem), onBlur: this.handleBlur, onChange: this.handleChange, onFocus: this.handleFocus, onInput: this.handleInput, part: "input" }, this.value), h("div", { key: '328537a189ec3049b694a8001535526106bd92d9', class: {
                'bq-textarea__helper flex items-center justify-between': true,
                [`validation-${this.validationStatus}`]: true,
                '!hidden': !this.hasHelperText && !this.maxlength,
            }, part: "helper-info" }, h("span", { key: '18c7d996aa7d18d23aba55915072218855eabd0a', class: "bq-textarea__helper--text", ref: (span) => (this.helperTextElem = span), part: "helper-text" }, h("slot", { key: '015469a8eb0629f43ada78414ab80c18fdc8c7f4', name: "helper-text", onSlotchange: this.handleHelperTextSlotChange })), h("span", { key: '15e1a9314adeadab6901cfc7db97fea830d713cb', class: { 'bq-textarea__helper--counter [fontVariant:tabular-nums]': true, '!hidden': !this.maxlength }, part: "helper-counter" }, this.numberOfCharacters ?? 0, "/", this.maxlength))));
    }
    static get is() { return "bq-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-textarea.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-textarea.css"]
        };
    }
    static get properties() {
        return {
            "autocapitalize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TTextareaAutoCapitalize",
                    "resolved": "\"characters\" | \"off\" | \"on\" | \"sentences\" | \"words\"",
                    "references": {
                        "TTextareaAutoCapitalize": {
                            "location": "import",
                            "path": "./bq-textarea.types",
                            "id": "../../packages/beeq/src/components/textarea/bq-textarea.types.ts::TTextareaAutoCapitalize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls whether or not the textarea field should be capitalized and how.\nPossible values are 'off', 'none', 'on', 'sentences', 'words', and 'characters'.\nSee: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize"
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
                    "text": "Specifies whether or not the textarea field should have autocomplete enabled.\nSee: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values"
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
                    "text": "Controls whether or not the textarea field should have autocorrect enabled.\nPossible values are 'on' and 'off'."
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
                    "text": "If true, the textarea will be focused on component render"
                },
                "getter": false,
                "setter": false,
                "attribute": "autofocus",
                "reflect": true
            },
            "autoGrow": {
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
                    "text": "If `true`, the textarea will automatically grow and shrink to fit its contents.\nIf `false`, the textarea will have a fixed height specified by the `rows` property."
                },
                "getter": false,
                "setter": false,
                "attribute": "auto-grow",
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the textarea value changes.\nA value of 0 means no debouncing will occur."
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If `true`, the user cannot interact with the textarea."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "disableResize": {
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
                    "text": "If `true`, it will block the user's ability to resize the textarea."
                },
                "getter": false,
                "setter": false,
                "attribute": "disable-resize",
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
                    "text": "The ID of the form that the textarea field belongs to."
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
                    "text": "The native form validation message"
                },
                "getter": false,
                "setter": false,
                "attribute": "form-validation-message",
                "reflect": false
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
                    "text": "The maximum number of characters that can be entered into the textarea (`0`: no limit).\nWhen enabled, a character counter will be shown underneath the textarea."
                },
                "getter": false,
                "setter": false,
                "attribute": "maxlength",
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
                    "text": "The name of the textarea element."
                },
                "getter": false,
                "setter": false,
                "attribute": "name",
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
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The placeholder text to show when there is no value."
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
                    "text": "If true, the textarea field cannot be modified."
                },
                "getter": false,
                "setter": false,
                "attribute": "readonly",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "Indicates whether or not the textarea field is required to be filled out before submitting the form."
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": true,
                "defaultValue": "false"
            },
            "rows": {
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
                    "text": "The number of visible text lines for the control. It must be a positive integer."
                },
                "getter": false,
                "setter": false,
                "attribute": "rows",
                "reflect": true,
                "defaultValue": "5"
            },
            "spellcheck": {
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
                    "text": "If true, the textarea content may be checked for spelling errors."
                },
                "getter": false,
                "setter": false,
                "attribute": "spellcheck",
                "reflect": true,
                "defaultValue": "false"
            },
            "validationStatus": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TInputValidation",
                    "resolved": "\"error\" | \"none\" | \"success\" | \"warning\"",
                    "references": {
                        "TInputValidation": {
                            "location": "import",
                            "path": "../input/bq-input.types",
                            "id": "../../packages/beeq/src/components/input/bq-input.types.ts::TInputValidation"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "remarks",
                            "text": "This property is used to indicate the validation status of the textarea. It can be set to one of the following values:\n- `'none'`: No validation status is set.\n- `'error'`: The textarea has a validation error.\n- `'warning'`: The textarea has a validation warning.\n- `'success'`: The textarea has passed validation."
                        }],
                    "text": "The validation status of the textarea."
                },
                "getter": false,
                "setter": false,
                "attribute": "validation-status",
                "reflect": true,
                "defaultValue": "'none'"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The value of the textarea. It can be used to reset the textarea to a previous value."
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": false
            },
            "wrap": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TTextareaWrap",
                    "resolved": "\"hard\" | \"off\" | \"soft\"",
                    "references": {
                        "TTextareaWrap": {
                            "location": "import",
                            "path": "./bq-textarea.types",
                            "id": "../../packages/beeq/src/components/textarea/bq-textarea.types.ts::TTextareaWrap"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies how the text in a text area is to be wrapped when submitted in a form"
                },
                "getter": false,
                "setter": false,
                "attribute": "wrap",
                "reflect": true,
                "defaultValue": "'soft'"
            }
        };
    }
    static get states() {
        return {
            "hasHelperText": {},
            "hasLabel": {}
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
                    "text": "Callback handler emitted when the textarea loses focus"
                },
                "complexType": {
                    "original": "HTMLBqTextareaElement",
                    "resolved": "HTMLBqTextareaElement",
                    "references": {
                        "HTMLBqTextareaElement": {
                            "location": "global",
                            "id": "global::HTMLBqTextareaElement"
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
                    "text": "Callback handler emitted when the textarea value has changed and the textarea loses focus.\nThis handler is called whenever the user finishes typing or pasting text into the textarea field and then clicks outside of the textarea field."
                },
                "complexType": {
                    "original": "{ value: string; el: HTMLBqTextareaElement }",
                    "resolved": "{ value: string; el: HTMLBqTextareaElement; }",
                    "references": {
                        "HTMLBqTextareaElement": {
                            "location": "global",
                            "id": "global::HTMLBqTextareaElement"
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
                    "text": "Callback handler emitted when the textarea value has been cleared"
                },
                "complexType": {
                    "original": "HTMLBqTextareaElement",
                    "resolved": "HTMLBqTextareaElement",
                    "references": {
                        "HTMLBqTextareaElement": {
                            "location": "global",
                            "id": "global::HTMLBqTextareaElement"
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
                    "text": "Callback handler emitted when the textarea has received focus"
                },
                "complexType": {
                    "original": "HTMLBqTextareaElement",
                    "resolved": "HTMLBqTextareaElement",
                    "references": {
                        "HTMLBqTextareaElement": {
                            "location": "global",
                            "id": "global::HTMLBqTextareaElement"
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
                    "text": "Callback handler emitted when the textarea value changes.\nThis handler is called whenever the user types or pastes text into the textarea field."
                },
                "complexType": {
                    "original": "{ value: string; el: HTMLBqTextareaElement }",
                    "resolved": "{ value: string; el: HTMLBqTextareaElement; }",
                    "references": {
                        "HTMLBqTextareaElement": {
                            "location": "global",
                            "id": "global::HTMLBqTextareaElement"
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
            }, {
                "propName": "required",
                "methodName": "handleRequiredPropChange"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=bq-textarea.js.map
