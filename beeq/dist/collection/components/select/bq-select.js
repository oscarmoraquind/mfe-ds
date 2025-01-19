/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, } from "@stencil/core";
import { debounce, hasSlotContent, isDefined, isHTMLElement, isNil, isString } from "../../shared/utils";
/**
 * The select input component lets users choose from a predefined list, commonly used in forms for easy data selection.
 *
 * @example How to use it
 * ```html
 * <bq-select placeholder="Placeholder">
 *   <label slot="label">Select label</label>
 *   <span slot="helper-text">
 *     <bq-icon name="star"></bq-icon>
 *       Helper text
 *   </span>
 *
 *   <bq-option value="1">Option 1</bq-option>
 *   <bq-option value="2">Option 2</bq-option>
 *   <bq-option value="3">Option 3</bq-option>
 * </bq-select>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/41989d-select/b/09d7b1
 * @status stable
 *
 * @dependency bq-button
 * @dependency bq-dropdown
 * @dependency bq-icon
 * @dependency bq-option-list
 * @dependency bq-tag
 *
 * @attr {boolean} autofocus - If `true`, the Select input will be focused on component render.
 * @attr {string} clear-button-label - The clear button aria label.
 * @attr {number} debounce-time - The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.
 * @attr {boolean} disable-clear - If `true`, the clear button won't be displayed.
 * @attr {boolean} disabled - Indicates whether the Select input is disabled and cannot be interacted with.
 * @attr {number} distance - Represents the distance (gutter or margin) between the Select panel and the input element.
 * @attr {string} form - The ID of the form that Select input field belongs to.
 * @attr {boolean} keep-open-on-select - If `true`, the Select panel will remain open after a selection is made.
 * @attr {number} max-tags-visible - The maximum number of tags to display when multiple selection is enabled.
 * @attr {boolean} multiple - If `true`, the Select input will allow multiple selections.
 * @attr {string} name - The Select input name.
 * @attr {boolean} open - If `true`, the Select panel will be visible.
 * @attr {string} panel-height - When set, it will override the height of the Select panel.
 * @attr {string} placeholder - The Select input placeholder text value.
 * @attr {"bottom" | "bottom-end" | "bottom-start" | "left" | "left-end" | "left-start" | "right" | "right-end" | "right-start" | "top" | "top-end" | "top-start"} placement - Position of the Select panel.
 * @attr {boolean} readonly - If `true`, the Select input cannot be modified.
 * @attr {boolean} required - Indicates whether or not the Select input is required to be filled out before submitting the form.
 * @attr {boolean} same-width - Whether the panel should have the Select same width as the input element.
 * @attr {number} skidding - Represents the skidding between the Select panel and the input element.
 * @attr {"absolute" | "fixed"} strategy - Defines the strategy to position the Select panel.
 * @attr {"error" | "success" | "warning" | "none"} validation-status - The validation status of the Select input.
 * @attr {"number" | "string" | "string[]"} value - The select input value can be used to reset the field to a previous value.
 *
 * @method clear - Method to be called to clear the selected value.
 *
 * @event bqBlur - The callback handler is emitted when the Select input loses focus.
 * @event bqClear - The callback handler is emitted when the selected value has been cleared.
 * @event bqFocus - A callback handler is emitted when the Select input has received focus.
 * @event bqSelect - The callback handler is emitted when the selected value has changed.
 *
 * @slot label - The label slot container.
 * @slot prefix - The prefix slot container.
 * @slot tags - The tags slot container.
 * @slot clear-icon - The clear icon slot container.
 * @slot suffix - The suffix slot container.
 * @slot helper-text - The helper text slot container.
 *
 * @part base - The component's base wrapper.
 * @part button - The native HTML button used under the hood in the clear button.
 * @part clear-btn - The clear button.
 * @part control - The input control wrapper.
 * @part input-outline - The input outline wrapper that holds the tags container and the native HTML input used under the hood.
 * @part helper-text - The helper text slot container.
 * @part input - The native HTML input element used under the hood.
 * @part label - The label slot container.
 * @part panel - The select panel container
 * @part prefix - The prefix slot container.
 * @part suffix - The suffix slot container.
 * @part tags - The tags container of the BqTags for multiple selection.
 * @part tag - The tag container of the BqTag for multiple selection.
 * @part tag__base - The base wrapper of the BqTag for multiple selection.
 * @part tag__prefix - The prefix slot container of the BqTag for multiple selection.
 * @part tag__text - The text slot container of the BqTag for multiple selection.
 * @part tag__btn-close - The close button of the BqTag for multiple selection.
 * @part option-list - The option list container.
 *
 * @cssprop --bq-select--background-color - Select background color
 * @cssprop --bq-select--border-color - Select border color
 * @cssprop --bq-select--border-color-focus - Select border color on focus
 * @cssprop --bq-select--border-color-disabled - Select border color when disabled
 * @cssprop --bq-select--border-radius - Select border radius
 * @cssprop --bq-select--border-width - Select border width
 * @cssprop --bq-select--border-style - Select border style
 * @cssprop --bq-select--gap - Gap between Select content and prefix/suffix
 * @cssprop --bq-select--helper-margin-top - Helper text margin top
 * @cssprop --bq-select--helper-text-color - Helper text color
 * @cssprop --bq-select--helper-text-size - Helper text size
 * @cssprop --bq-select--icon-size - Icon size to use in prefix/suffix and clear button
 * @cssprop --bq-select--label-margin-bottom - Select label margin bottom
 * @cssprop --bq-select--label-text-color - Select label text color
 * @cssprop --bq-select--label-text-size - Select label text size
 * @cssprop --bq-select--padding-start - Select padding start
 * @cssprop --bq-select--padding-end - Select padding end
 * @cssprop --bq-select--paddingY - Select padding top and bottom
 * @cssprop --bq-select--text-color - Select text color
 * @cssprop --bq-select--text-size - Select text size
 * @cssprop --bq-select--text-placeholder-color - Select placeholder text color
 */
export class BqSelect {
    // Own Properties
    // ====================
    helperTextElem;
    inputElem;
    labelElem;
    prefixElem;
    suffixElem;
    debounceQuery;
    fallbackInputId = 'select';
    // Reference to host HTML element
    // ===================================
    el;
    internals;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    displayValue;
    hasHelperText = false;
    selectedOptions = [];
    hasLabel = false;
    hasPrefix = false;
    hasSuffix = false;
    hasValue = false;
    // Public Property API
    // ========================
    /** If true, the Select input will be focused on component render */
    autofocus;
    /** The clear button aria label */
    clearButtonLabel = 'Clear value';
    /**
     * The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.
     * A value of 0 means no debouncing will occur.
     */
    debounceTime = 0;
    /**
     * Indicates whether the Select input is disabled or not.
     * If `true`, the Select is disabled and cannot be interacted with.
     */
    disabled = false;
    /** If true, the clear button won't be displayed */
    disableClear = false;
    /** Represents the distance (gutter or margin) between the Select panel and the input element. */
    distance = 8;
    /** The ID of the form that the Select input belongs to. */
    form;
    /** If true, the Select panel will remain open after a selection is made. */
    keepOpenOnSelect = false;
    /** The Select input name. */
    name;
    /** The maximum number of tags to display when multiple selection is enabled */
    maxTagsVisible = 2;
    /** If true, the Select input will allow multiple selections. */
    multiple = false;
    /** If true, the Select panel will be visible. */
    open = false;
    /** When set, it will override the height of the Select panel. */
    panelHeight;
    /** The Select input placeholder text value */
    placeholder;
    /** Position of the Select panel */
    placement = 'bottom';
    /** If true, the list of options cannot be filtered (searching won't be available) */
    readonly;
    /** Indicates whether or not the Select input is required to be filled out before submitting the form. */
    required;
    /** Whether the panel should have the Select same width as the input element */
    sameWidth = true;
    /**  Represents the skidding between the Select panel and the input element. */
    skidding = 0;
    /** Defines the strategy to position the Select panel */
    strategy = 'fixed';
    /**
     * The validation status of the Select input.
     *
     * @remarks
     * This property is used to indicate the validation status of the select input. It can be set to one of the following values:
     * - `'none'`: No validation status is set.
     * - `'error'`: The input has a validation error.
     * - `'warning'`: The input has a validation warning.
     * - `'success'`: The input has passed validation.
     */
    validationStatus = 'none';
    /** The select input value, it can be used to reset the field to a previous value */
    value;
    // Prop lifecycle events
    // =======================
    handleValueChange() {
        if (this.multiple && isString(this.value)) {
            // NOTE: we ensure that value is an array, changing the value will trigger Watch to execute thus the return
            this.value = Array.from(JSON.parse(String(this.value)));
            this.internals.setFormValue(this.value.join(','));
            return;
        }
        this.syncItemsFromValue();
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler emitted when the Select input loses focus */
    bqBlur;
    /** Callback handler emitted when the selected value has been cleared */
    bqClear;
    /** Callback handler emitted when the Select input has received focus */
    bqFocus;
    /** Callback handler emitted when the selected value has changed */
    bqSelect;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    connectedCallback() {
        this.initMultipleValue();
    }
    componentWillLoad() {
        this.initMultipleValue();
    }
    componentDidLoad() {
        if (this.multiple && Array.isArray(this.value)) {
            this.selectedOptions = this.options.filter((item) => this.value.includes(item.value));
        }
        this.handleValueChange();
    }
    formAssociatedCallback() {
        this.internals.role = 'combobox';
        this.internals.ariaExpanded = this.open ? 'true' : 'false';
    }
    async formResetCallback() {
        if (isNil(this.value))
            return;
        this.internals.setValidity({});
        this.clear();
    }
    // Listeners
    // ==============
    handleOpenChange(ev) {
        if (!ev.composedPath().includes(this.el))
            return;
        this.open = ev.detail.open;
    }
    stopOptionFocusBlurPropagation(ev) {
        // Stop propagation of focus and blur events coming from the `bq-option` elements
        if (isHTMLElement(ev.target, 'bq-select'))
            return;
        ev.stopPropagation();
    }
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    /**
     * Clears the selected value.
     *
     * @return {Promise<void>}
     * @memberof BqSelect
     */
    async clear() {
        if (this.disabled)
            return;
        const { multiple, inputElem, bqClear, el } = this;
        // Clear value and selected options
        this.value = undefined;
        this.selectedOptions = [];
        // Clear display value and input element if not multiple
        if (!multiple) {
            this.displayValue = undefined;
            inputElem.value = undefined;
        }
        // Update form value and reset options visibility
        this.resetOptionsVisibility();
        // Emit clear event
        bqClear.emit(el);
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    initMultipleValue = () => {
        if (!this.multiple)
            return;
        this.value = Array.isArray(this.value) ? this.value : Array.from(JSON.parse(String(this.value)));
    };
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
    handleSelect = (ev) => {
        if (this.disabled)
            return;
        if (this.multiple) {
            ev.stopPropagation();
        }
        const { value, item } = ev.detail;
        if (this.multiple) {
            this.handleMultipleSelection(item);
            // Clear the input value after selecting an item
            this.inputElem.value = '';
            // If multiple selection is enabled, emit the selected items array instead of relying on
            // the option list to emit the value of the selected item
            this.bqSelect.emit({ value: this.value, item });
        }
        else {
            this.value = value;
        }
        this.resetOptionsVisibility();
        this.inputElem.focus();
    };
    handleMultipleSelection = (item) => {
        // Set has O(1) complexity for insertion, deletion, and search operations, compared to an Array's O(n)
        const selectedOptionsSet = new Set(this.selectedOptions);
        if (selectedOptionsSet.has(item)) {
            selectedOptionsSet.delete(item);
        }
        else {
            selectedOptionsSet.add(item);
        }
        this.selectedOptions = Array.from(selectedOptionsSet);
        this.value = this.selectedOptions.map((item) => item.value);
    };
    handleSearchFilter = (ev) => {
        if (this.disabled)
            return;
        this.debounceQuery?.cancel();
        const query = ev.target.value?.toLowerCase().trim();
        if (!isDefined(query)) {
            this.clear();
        }
        else {
            this.debounceQuery = debounce(() => {
                this.options.forEach((item) => {
                    const itemLabel = this.getOptionLabel(item).toLowerCase();
                    item.hidden = !itemLabel.includes(query);
                });
            }, this.debounceTime);
            this.debounceQuery();
        }
        // The panel will close once a selection is made
        // so we need to make sure it's open when the user is typing and the query is not empty
        this.open = true;
    };
    handleClearClick = (ev) => {
        (async () => {
            await this.clear();
        })();
        this.inputElem.focus();
        ev.stopPropagation();
    };
    handleTagRemove = (item) => {
        if (this.disabled)
            return;
        this.handleMultipleSelection(item);
        this.bqSelect.emit({ value: this.value, item });
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
    resetOptionsVisibility = () => {
        this.options.forEach((item) => (item.hidden = false));
    };
    syncItemsFromValue = () => {
        const { internals, options, value } = this;
        if (!options.length)
            return;
        // Sync selected state of the BqOption elements
        this.syncSelectedOptionsState();
        if (this.multiple) {
            // Sync selected options for multiple selection mode
            this.selectedOptions = options.filter((option) => this.value?.includes(option.value));
        }
        else {
            // Sync display label for single selection mode
            this.updateDisplayLabel();
        }
        internals.setFormValue(!isNil(value) ? `${value}` : undefined);
    };
    /**
     * Syncs the selected state of the BqOption elements which value is included in the `value` property.
     * Notice that value can be a string or an array of strings.
     *
     * @private
     * @memberof BqSelect
     */
    syncSelectedOptionsState = () => {
        const { options, multiple, value } = this;
        const lowerCaseValue = String(value).toLowerCase();
        options.forEach((option) => {
            if (multiple && Array.isArray(value)) {
                option.selected = value.includes(option.value);
            }
            else {
                option.selected = option.value.toLowerCase() === lowerCaseValue;
            }
        });
    };
    /**
     * Updates the display value of the input element based on the selected option.
     *
     * @private
     * @memberof BqSelect
     */
    updateDisplayLabel = () => {
        const { value, options, inputElem } = this;
        const checkedItem = options.find((item) => item.value === value);
        const displayValue = checkedItem ? this.getOptionLabel(checkedItem) : '';
        inputElem.value = displayValue;
        this.displayValue = displayValue;
    };
    getOptionLabel = (item) => {
        if (!item)
            return;
        return item.innerText.trim() ?? '';
    };
    get options() {
        return Array.from(this.el.querySelectorAll('bq-option'));
    }
    get displayPlaceholder() {
        // Hide the placeholder when multiple selection is enabled and there are selected items
        return this.multiple && this.selectedOptions.length !== 0 ? undefined : this.placeholder;
    }
    get displayTags() {
        return this.selectedOptions.map((item, index) => {
            if (index < this.maxTagsVisible || this.maxTagsVisible < 0) {
                return (h("bq-tag", { key: item.value, removable: true, size: "xsmall", variant: "filled", onBqClose: (event) => {
                        // NOTE: prevents triggering bqClose on parent
                        event.stopPropagation();
                        this.handleTagRemove(item);
                    },
                    // Prevent the tag from closing the panel when clicked
                    onClick: (ev) => ev.stopPropagation(), exportparts: "wrapper:tag__base,prefix:tag__prefix,text:tag__text,btn-close:tag__btn-close", part: "tag" }, this.getOptionLabel(item)));
            }
            else if (index === this.maxTagsVisible) {
                return (h("bq-tag", { key: "more", size: "xsmall", variant: "filled", exportparts: "wrapper:tag__base,prefix:tag__prefix,text:tag__text,btn-close:tag__btn-close", part: "tag" }, "+", this.selectedOptions.length - index));
            }
            return null;
        });
    }
    get hasClearIcon() {
        if (this.disableClear || this.disabled) {
            return false;
        }
        if (this.multiple) {
            return this.selectedOptions.length > 0;
        }
        return isDefined(this.displayValue);
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const labelId = `bq-select__label-${this.name || this.fallbackInputId}`;
        return (h("div", { key: 'e6594936339459af78d12f65c5e9f95d20fe5812', class: "bq-select", part: "base" }, h("label", { key: 'f73f9b34d1d0e15b90e1706e79a4d87b78767b9e', id: labelId, class: { 'bq-select__label': true, '!hidden': !this.hasLabel }, "aria-label": this.name || this.fallbackInputId, htmlFor: this.name || this.fallbackInputId, ref: (labelElem) => (this.labelElem = labelElem), part: "label" }, h("slot", { key: '2b3077bbc8785f8372a74f28478bcb9ea3077cfc', name: "label", onSlotchange: this.handleLabelSlotChange })), h("bq-dropdown", { key: '9b2afa55ffb3bc888e20795a141ae3ddb9ea2796', class: "bq-select__dropdown w-full", disabled: this.disabled, distance: this.distance, keepOpenOnSelect: this.keepOpenOnSelect, open: this.open, panelHeight: this.panelHeight, placement: this.placement, sameWidth: this.sameWidth, skidding: this.skidding, strategy: this.strategy, exportparts: "panel" }, h("div", { key: '9603169c243e9785d7f4ccc442de047028ea34ee', class: {
                'bq-select__control': true,
                [`validation-${this.validationStatus}`]: true,
                disabled: this.disabled,
            }, part: "control", slot: "trigger" }, h("span", { key: 'a1696621c9097a651d993a3064f0b8f0d411673f', class: { 'bq-select__control--prefix': true, '!hidden': !this.hasPrefix }, ref: (spanElem) => (this.prefixElem = spanElem), part: "prefix" }, h("slot", { key: 'f67dc4452f3472007f5e364ea8d6a2b03f5fd836', name: "prefix", onSlotchange: this.handlePrefixSlotChange })), h("div", { key: '69512207e2c41b179bfe6715c0c8fa106dc034ee', class: "flex flex-1 overflow-x-auto", part: "input-outline" }, this.multiple && (h("span", { key: '788a387d2d96bf7ee9edd01aef9b13b00f49122c', class: "bq-select__tags", part: "tags" }, h("slot", { key: '7811cf73e127e74cdad099d3573615b25b318910', name: "tags" }, this.displayTags))), h("input", { key: '4b7780e8e5891dda3fa6634fc8ea67f05154566a', id: this.name || this.fallbackInputId, class: "bq-select__control--input flex-grow is-full", autoComplete: "off", autoCapitalize: "off", "aria-disabled": this.disabled ? 'true' : 'false', "aria-controls": `bq-options-${this.name}`, "aria-expanded": this.open ? 'true' : 'false', "aria-haspopup": "listbox", disabled: this.disabled, form: this.form, name: this.name, placeholder: this.displayPlaceholder, ref: (inputElem) => (this.inputElem = inputElem), readOnly: this.readonly, required: this.required, role: "combobox", spellcheck: false, type: "text", value: this.displayValue, part: "input",
            // Events
            onBlur: this.handleBlur, onFocus: this.handleFocus, onInput: this.handleSearchFilter })), this.hasClearIcon && (
        // The clear button will be visible as long as the input has a value
        // and the parent group is hovered or has focus-within
        h("bq-button", { key: '1a49969395e818e1aa690ef7f6f3341298a5525e', class: "bq-select__control--clear ms-[--bq-select--gap]", appearance: "text", "aria-label": this.clearButtonLabel, size: "small", onBqClick: this.handleClearClick, part: "clear-btn", exportparts: "button", tabIndex: -1 }, h("slot", { key: '77cc72468f4586c0099143e67f802f07e2a9c7e8', name: "clear-icon" }, h("bq-icon", { key: '489421c4e84cee9ded157fd9cd230c2d3f279c59', name: "x-circle", class: "flex" })))), h("span", { key: '0c0fcf860875c355a84ddf5918536f9ce08848e8', class: { 'bq-select__control--suffix': true, 'rotate-180': this.open, 'rotate-0': !this.open }, ref: (spanElem) => (this.suffixElem = spanElem), part: "suffix" }, h("slot", { key: 'a1d929c69b5b7db4fb02f0b7fd2e7409fd971b36', name: "suffix", onSlotchange: this.handleSuffixSlotChange }, h("bq-icon", { key: '8d20019ffa6354c3e5aad8131e74fd6802b65e01', name: "caret-down", class: "flex" })))), h("bq-option-list", { key: 'd0f740cf75a6f8d400211dabafd06c2248fed03c', id: `bq-options-${this.name}`, onBqSelect: this.handleSelect, "aria-expanded": this.open ? 'true' : 'false', exportparts: "base:option-list", role: "listbox" }, h("slot", { key: '338ab1d438ff3af454cf013940d72bb1ca1f7979' }))), h("div", { key: '27d16b1f70a68cb54d7babc622d83d920b60b0b3', class: {
                [`bq-select__helper-text validation-${this.validationStatus}`]: true,
                '!hidden': !this.hasHelperText,
            }, ref: (divElem) => (this.helperTextElem = divElem), part: "helper-text" }, h("slot", { key: 'fc326c6dcf8de3dca5b2ef6bcd7f07f23c57891f', name: "helper-text", onSlotchange: this.handleHelperTextSlotChange }))));
    }
    static get is() { return "bq-select"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-select.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-select.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "If true, the Select input will be focused on component render"
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
                    "text": "Indicates whether the Select input is disabled or not.\nIf `true`, the Select is disabled and cannot be interacted with."
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
            "distance": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Represents the distance (gutter or margin) between the Select panel and the input element."
                },
                "getter": false,
                "setter": false,
                "attribute": "distance",
                "reflect": true,
                "defaultValue": "8"
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
                    "text": "The ID of the form that the Select input belongs to."
                },
                "getter": false,
                "setter": false,
                "attribute": "form",
                "reflect": true
            },
            "keepOpenOnSelect": {
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
                    "text": "If true, the Select panel will remain open after a selection is made."
                },
                "getter": false,
                "setter": false,
                "attribute": "keep-open-on-select",
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
                    "text": "The Select input name."
                },
                "getter": false,
                "setter": false,
                "attribute": "name",
                "reflect": true
            },
            "maxTagsVisible": {
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
                    "text": "The maximum number of tags to display when multiple selection is enabled"
                },
                "getter": false,
                "setter": false,
                "attribute": "max-tags-visible",
                "reflect": false,
                "defaultValue": "2"
            },
            "multiple": {
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
                    "text": "If true, the Select input will allow multiple selections."
                },
                "getter": false,
                "setter": false,
                "attribute": "multiple",
                "reflect": true,
                "defaultValue": "false"
            },
            "open": {
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
                    "text": "If true, the Select panel will be visible."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            },
            "panelHeight": {
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
                    "text": "When set, it will override the height of the Select panel."
                },
                "getter": false,
                "setter": false,
                "attribute": "panel-height",
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
                    "text": "The Select input placeholder text value"
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": true
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Placement",
                    "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "Placement": {
                            "location": "import",
                            "path": "../../services/interfaces",
                            "id": "../../packages/beeq/src/services/interfaces/index.ts::Placement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Position of the Select panel"
                },
                "getter": false,
                "setter": false,
                "attribute": "placement",
                "reflect": true,
                "defaultValue": "'bottom'"
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
                    "text": "If true, the list of options cannot be filtered (searching won't be available)"
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
                    "text": "Indicates whether or not the Select input is required to be filled out before submitting the form."
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": true
            },
            "sameWidth": {
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
                    "text": "Whether the panel should have the Select same width as the input element"
                },
                "getter": false,
                "setter": false,
                "attribute": "same-width",
                "reflect": true,
                "defaultValue": "true"
            },
            "skidding": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Represents the skidding between the Select panel and the input element."
                },
                "getter": false,
                "setter": false,
                "attribute": "skidding",
                "reflect": true,
                "defaultValue": "0"
            },
            "strategy": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'fixed' | 'absolute'",
                    "resolved": "\"absolute\" | \"fixed\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Defines the strategy to position the Select panel"
                },
                "getter": false,
                "setter": false,
                "attribute": "strategy",
                "reflect": true,
                "defaultValue": "'fixed'"
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
                            "text": "This property is used to indicate the validation status of the select input. It can be set to one of the following values:\n- `'none'`: No validation status is set.\n- `'error'`: The input has a validation error.\n- `'warning'`: The input has a validation warning.\n- `'success'`: The input has passed validation."
                        }],
                    "text": "The validation status of the Select input."
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
                    "original": "TSelectValue",
                    "resolved": "string | string[]",
                    "references": {
                        "TSelectValue": {
                            "location": "local",
                            "path": "/home/usuario/Documentos/flypass-projects/frontend-design-system/packages/beeq/src/components/select/bq-select.tsx",
                            "id": "../../packages/beeq/src/components/select/bq-select.tsx::TSelectValue"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The select input value, it can be used to reset the field to a previous value"
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
            "displayValue": {},
            "hasHelperText": {},
            "selectedOptions": {},
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
                    "text": "Callback handler emitted when the Select input loses focus"
                },
                "complexType": {
                    "original": "HTMLBqSelectElement",
                    "resolved": "HTMLBqSelectElement",
                    "references": {
                        "HTMLBqSelectElement": {
                            "location": "global",
                            "id": "global::HTMLBqSelectElement"
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
                    "text": "Callback handler emitted when the selected value has been cleared"
                },
                "complexType": {
                    "original": "HTMLBqSelectElement",
                    "resolved": "HTMLBqSelectElement",
                    "references": {
                        "HTMLBqSelectElement": {
                            "location": "global",
                            "id": "global::HTMLBqSelectElement"
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
                    "text": "Callback handler emitted when the Select input has received focus"
                },
                "complexType": {
                    "original": "HTMLBqSelectElement",
                    "resolved": "HTMLBqSelectElement",
                    "references": {
                        "HTMLBqSelectElement": {
                            "location": "global",
                            "id": "global::HTMLBqSelectElement"
                        }
                    }
                }
            }, {
                "method": "bqSelect",
                "name": "bqSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler emitted when the selected value has changed"
                },
                "complexType": {
                    "original": "{ value: string | number | string[]; item: HTMLBqOptionElement }",
                    "resolved": "{ value: string | number | string[]; item: HTMLBqOptionElement; }",
                    "references": {
                        "HTMLBqOptionElement": {
                            "location": "global",
                            "id": "global::HTMLBqOptionElement"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "clear": {
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
                    "text": "Clears the selected value.",
                    "tags": [{
                            "name": "return",
                            "text": undefined
                        }, {
                            "name": "memberof",
                            "text": "BqSelect"
                        }]
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "bqOpen",
                "method": "handleOpenChange",
                "target": undefined,
                "capture": true,
                "passive": false
            }, {
                "name": "bqFocus",
                "method": "stopOptionFocusBlurPropagation",
                "target": undefined,
                "capture": true,
                "passive": false
            }, {
                "name": "bqBlur",
                "method": "stopOptionFocusBlurPropagation",
                "target": undefined,
                "capture": true,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=bq-select.js.map
