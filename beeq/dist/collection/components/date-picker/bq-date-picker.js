/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, } from "@stencil/core";
import { DATE_PICKER_TYPE } from "./bq-date-picker.types";
import { hasSlotContent, isClient, isDefined, isEventTargetChildOfElement, isHTMLElement, isNil, validatePropValue, } from "../../shared/utils";
/**
 * The Date Picker is a intuitive UI element component allows users to select dates from a visual calendar interface, providing an intuitive way to input date information.
 *
 * @example How to use it
 * ```html
 * <bq-date-picker
 *   first-day-of-week="1"
 *   locale="en-GB"
 *   months-per-view="single"
 *   months="2"
 *   name="bq-date-picker"
 *   placeholder="Enter your date"
 *   placement="bottom-end"
 *   show-outside-days="false"
 *   type="range"
 *   validation-status="none"
 *   value="2024-05-25"
 * >
 *   <label class="flex flex-grow items-center" slot="label">
 *     Date picker label
 *   </label>
 * </bq-date-picker>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/5793a9-date-picker
 * @status stable
 *
 * @dependency bq-button
 * @dependency bq-dropdown
 * @dependency bq-icon
 *
 * @attr {boolean} autofocus - If `true`, the Date picker input will be focused on component render.
 * @attr {string} clear-button-label - The clear button aria label.
 * @attr {boolean} disable-clear - If `true`, the clear button won't be displayed.
 * @attr {boolean} disabled - Indicates whether the Date picker input is disabled or not.
 * @attr {number} distance - Represents the distance (gutter or margin) between the Date picker panel and the input element.
 * @attr {0 | 1 | 2 | 3 | 4 | 5 | 6} first-day-of-week - The first day of the week, where Sunday is 0, Monday is 1, etc.
 * @attr {Intl.DateTimeFormatOptions} format-options - The options to use when formatting the displayed value. Details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
 * @attr {string} form - The ID of the form that the Date picker input belongs to.
 * @attr {string} form-validation-message - The native form validation message (mandatory if `required` is set).
 * @attr {function} is-date-disallowed - A function that takes a date and returns true if the date should not be selectable.
 * @attr {Intl.LocalesArgument} locale - The locale for formatting dates. If not set, will use the browser's locale. Details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 * @attr {string} max - The latest date that can be selected.
 * @attr {string} min - The earliest date that can be selected.
 * @attr {number} months - Number of months to show when range is `true`.
 * @attr {string} name - The Date picker input name.
 * @attr {boolean} open - If `true`, the Date picker panel will be visible.
 * @attr {string} panel-height - When set, it will override the height of the Date picker panel.
 * @attr {"top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end"} placement - Position of the Date picker panel.
 * @attr {boolean} required - Indicates whether or not the Date picker input is required to be filled out before submitting the form.
 * @attr {number} skidding - Represents the skidding between the Date picker panel and the input element.
 * @attr {boolean} show-outside-days - Whether to show days outside the month.
 * @attr {string} strategy - Defines the strategy to position the Date picker panel.
 * @attr {string} tentative - The date that is tentatively selected, e.g. the start of a range selection.
 * @attr {"single" | "multi" | "range"} type - It defines how the calendar will behave, allowing single date selection, range selection, or multiple date selection.
 * @attr {"error" | "none" | "success" | "warning"} validation-status - The validation status of the Select input.
 * @attr {string} value - The select input value represents the currently selected date or range and can be used to reset the field to a previous value.
 *
 * @method clear - Clears the selected value.
 *
 * @event bqBlur - Callback handler emitted when the input loses focus.
 * @event bqChange - Callback handler emitted when the input value has changed and the input loses focus.
 * @event bqClear - Callback handler emitted when the input value has been cleared.
 * @event bqFocus - Callback handler emitted when the input has received focus.
 *
 * @part base - The component's base wrapper.
 * @part button - The native HTML button used under the hood in the clear button.
 * @part calendar__button - Any button used in the calendar-month component.
 * @part calendar__button - Any button within the calendar-range component.
 * @part calendar__container - The calendar-range container for the entire component.
 * @part calendar__day - The buttons corresponding to each day in the calendar-month grid.
 * @part calendar__disabled - A button that is disabled due to min/max on the calendar-range component.
 * @part calendar__disallowed - Any day that has been disallowed via isDateDisallowed.
 * @part calendar__head - The calendar-month table's header row.
 * @part calendar__header - The calendar-range container for the heading and buttons.
 * @part calendar__heading - The calendar-month heading container that labels the month.
 * @part calendar__heading - The calendar-range heading containing the month and year.
 * @part calendar__next - The next page button on the calendar-range component.
 * @part calendar__outside - Any days which are outside the current month.
 * @part calendar__previous - The previous page button on the calendar-range component.
 * @part calendar__range-end - The day at the end of a date range.
 * @part calendar__range-inner - Any days between the start and end of a date range.
 * @part calendar__range-start - The day at the start of a date range.
 * @part calendar__selected - Any days which are selected.
 * @part calendar__table - The calendar-month <table> element.
 * @part calendar__td - The calendar-month table's body cells.
 * @part calendar__th - The calendar-month table's header cells.
 * @part calendar__today - The Today's day.
 * @part calendar__tr - Any row within the table on the calendar-month component.
 * @part calendar__week - The calendar-month table's body rows.
 * @part clear-btn - The clear button.
 * @part control - The input control wrapper.
 * @part input - The native HTML input element used under the hood.
 * @part label - The label slot container.
 * @part panel - The date picker panel container
 * @part prefix - The prefix slot container.
 * @part suffix - The suffix slot container.
 *
 * @cssprop --bq-date-picker--background-color - Date picker background color.
 * @cssprop --bq-date-picker--border-color - Date picker border color.
 * @cssprop --bq-date-picker--border-color-disabled - Date picker border color when disabled.
 * @cssprop --bq-date-picker--border-color-focus - Date picker border color on focus.
 * @cssprop --bq-date-picker--border-radius - Date picker border radius.
 * @cssprop --bq-date-picker--border-style - Date picker border style.
 * @cssprop --bq-date-picker--border-width - Date picker border width.
 * @cssprop --bq-date-picker--currentDate-border-color - Date picker border color for current date.
 * @cssprop --bq-date-picker--currentDate-border-width - Date picker border width for current date.
 * @cssprop --bq-date-picker--day-size - Date picker button day size.
 * @cssprop --bq-date-picker--gap - Gap between Date picker content and prefix/suffix.
 * @cssprop --bq-date-picker--icon-size - Icon size to use in prefix/suffix and clear button.
 * @cssprop --bq-date-picker--label-margin-bottom - Date picker label margin bottom.
 * @cssprop --bq-date-picker--label-text-color - Date picker label text color.
 * @cssprop --bq-date-picker--label-text-size - Date picker label text size.
 * @cssprop --bq-date-picker--padding-end - Date picker padding end.
 * @cssprop --bq-date-picker--padding-start - Date picker padding start.
 * @cssprop --bq-date-picker--paddingY - Date picker padding top and bottom.
 * @cssprop --bq-date-picker--range-background-color - Background color for the selected date range in the date picker.
 * @cssprop --bq-date-picker--range-inner-background-color - Background color for the selected dates inside the date range in the date picker.
 * @cssprop --bq-date-picker--text-color - Date picker text color.
 * @cssprop --bq-date-picker--text-placeholder-color - Date picker placeholder text color.
 * @cssprop --bq-date-picker--text-size - Date picker text size.
 */
export class BqDatePicker {
    // Own Properties
    // ====================
    callyElem;
    inputElem;
    labelElem;
    prefixElem;
    suffixElem;
    fallbackInputId = 'date-picker';
    // Export parts of the calendar-month component
    COMMON_EXPORT_PARTS = 'calendar__heading,calendar__table,calendar__tr,calendar__head,calendar__week,calendar__th,calendar__td';
    BUTTON_EXPORT_PARTS = 'calendar__button,calendar__day,calendar__selected,calendar__today,calendar__disallowed,calendar__outside,calendar__range-start,calendar__range-end,calendar__range-inner';
    // Reference to host HTML element
    // ===================================
    internals;
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    focusedDate;
    displayDate;
    hasLabel = false;
    hasPrefix = false;
    hasRangeEnd = false;
    hasSuffix = false;
    hasValue = false;
    // Public Property API
    // ========================
    /** If `true`, the Date picker input will be focused on component render */
    autofocus;
    /** The clear button aria label */
    clearButtonLabel = 'Clear value';
    /** If `true`, the clear button won't be displayed */
    disableClear = false;
    /**
     * Indicates whether the Date picker input is disabled or not.
     * If `true`, the Date picker is disabled and cannot be interacted with.
     */
    disabled = false;
    /** Represents the distance (gutter or margin) between the Date picker panel and the input element. */
    distance = 8;
    /** The first day of the week, where Sunday is 0, Monday is 1, etc */
    firstDayOfWeek = 1;
    /** The options to use when formatting the displayed value.
     * Details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
     */
    formatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };
    /** The ID of the form that the Date picker input belongs to. */
    form;
    /** The native form validation message (mandatory if `required` is set) */
    formValidationMessage;
    /** A function that takes a date and returns true if the date should not be selectable */
    isDateDisallowed;
    /** The locale for formatting dates. If not set, will use the browser's locale.
     * Details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
     */
    locale = 'en-GB';
    /** The latest date that can be selected */
    max;
    /** The earliest date that can be selected */
    min;
    /** Number of months to show when range is `true` */
    months;
    /**
     * Specifies how the next/previous buttons should navigate the calendar.
     * - single: The buttons will navigate by a single month at a time.
     * - months: The buttons will navigate by the number of months displayed per view.
     */
    monthsPerView = 'single';
    /** The Date picker input name. */
    name;
    /** If `true`, the Date picker panel will be visible. */
    open = false;
    /** When set, it will override the height of the Date picker panel. */
    panelHeight = 'auto';
    /** The Date picker input placeholder text value */
    placeholder;
    /** Position of the Date picker panel */
    placement = 'bottom-end';
    /** Indicates whether or not the Date picker input is required to be filled out before submitting the form. */
    required;
    /** Represents the skidding between the Date picker panel and the input element. */
    skidding = 0;
    /** Whether to show days outside the month */
    showOutsideDays = false;
    /** Defines the strategy to position the Date picker panel */
    strategy = 'fixed';
    /** The date that is tentatively selected e.g. the start of a range selection  */
    tentative;
    /** It defines how the calendar will behave, allowing single date selection, range selection, or multiple date selection */
    type = 'single';
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
    /** The select input value represents the currently selected date or range and can be used to reset the field to a previous value.
     * All dates are expected in ISO-8601 format (YYYY-MM-DD). */
    value;
    // Prop lifecycle events
    // =======================
    handleValueChange() {
        const { formatDisplayValue, internals, value } = this;
        internals.setFormValue(!isNil(value) ? `${value}` : undefined);
        this.updateFormValidity();
        if (Array.isArray(value)) {
            this.hasValue = value.some((val) => val.length > 0);
            return;
        }
        this.hasValue = isDefined(value);
        this.displayDate = formatDisplayValue(value);
        this.setFocusedDate();
    }
    checkPropValues() {
        validatePropValue(DATE_PICKER_TYPE, 'single', this.el, 'type');
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
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    async connectedCallback() {
        if (!isClient())
            return;
        await import('cally');
    }
    componentWillLoad() {
        this.handleValueChange();
    }
    formAssociatedCallback() {
        this.updateFormValidity();
    }
    formResetCallback() {
        if (isNil(this.value))
            return;
        this.clear();
    }
    // Listeners
    // ==============
    handleOpenChange(ev) {
        if (!ev.composedPath().includes(this.el))
            return;
        this.open = ev.detail.open;
        this.setFocusedDate();
    }
    handleClickOutside(ev) {
        const { open, type, hasRangeEnd } = this;
        if (!open || type !== 'range' || ev.button !== 0)
            return;
        if (isEventTargetChildOfElement(ev, this.el) || hasRangeEnd)
            return;
        if (isEventTargetChildOfElement(ev, this.el))
            return;
        if (!hasRangeEnd) {
            this.tentative = undefined;
            this.hasRangeEnd = false;
        }
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
     * @memberof BqInput
     */
    async clear() {
        if (this.disabled)
            return;
        this.value = undefined;
        this.internals.setFormValue(undefined);
        this.bqClear.emit(this.el);
    }
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
    setFocusedDate = () => {
        if (!this.callyElem)
            return;
        // We need to set the focused date in the calendar component via a ref
        // because it doesn't work when passed as a prop (the Cally element does not re-render)
        this.focusedDate = this.value ? this.formatFocusedDate(this.value) : new Date().toLocaleDateString('fr-CA');
        this.callyElem.focusedDate = this.focusedDate;
    };
    handleChange = (ev) => {
        if (this.disabled)
            return;
        if (!isHTMLElement(ev.target, 'input'))
            return;
        const dateValue = new Date(ev.target.value);
        if (!isNaN(dateValue.getTime())) {
            // We need to force the value to respect the format: yyyy-mm-dd, hence the hardcoded locale
            this.value = dateValue.toLocaleDateString('fr-CA');
            this.displayDate = this.formatDisplayValue(this.value);
            this.internals.setFormValue(`${this.value}`);
            this.bqChange.emit({ value: this.value, el: this.el });
        }
    };
    handleCalendarChange = (ev) => {
        const { value } = ev.target;
        this.value = value;
        this.displayDate = this.formatDisplayValue(this.value);
        this.inputElem.value = this.displayDate;
        this.inputElem.focus();
        this.internals.setFormValue(`${this.value}`);
        this.bqChange.emit({ value: this.value, el: this.el });
        this.open = this.type === 'multi';
    };
    handleCalendarRangeStart = (ev) => {
        this.hasRangeEnd = false;
        this.tentative = new Date(ev.detail).toLocaleDateString('fr-CA');
    };
    handleCalendarRangeEnd = () => {
        this.hasRangeEnd = true;
    };
    handleClearClick = (ev) => {
        if (this.disabled)
            return;
        this.inputElem.value = '';
        this.value = this.inputElem.value;
        this.hasRangeEnd = false;
        this.bqClear.emit(this.el);
        this.bqChange.emit({ value: this.value, el: this.el });
        this.internals.setFormValue(undefined);
        this.inputElem.focus();
        ev.stopPropagation();
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
    generateCalendarMonth = (offset, className = '') => {
        return (h("calendar-month", { offset: offset, class: className, exportparts: `${this.COMMON_EXPORT_PARTS},${this.BUTTON_EXPORT_PARTS}` }));
    };
    /**
     * Generates an array of JSX.Element representing calendar months.
     *
     * If the type of the date picker is 'range' or 'multi' and the number of months is specified,
     * it generates an array of calendar months with the specified length. Each month will have an offset
     * and a class name based on its position in the array. The offset is used to determine the month to display,
     * and the class name is used for responsive design.
     *
     * If the type of the date picker is not 'range' or 'multi', or if the number of months is not specified,
     * it generates an array with a single calendar month.
     *
     * @returns {JSX.Element[]} An array of JSX.Element representing calendar months.
     */
    generateCalendarMonths = () => {
        if (this.type === 'range' || (this.type === 'multi' && this.months)) {
            return Array.from({ length: this.months }, (_, i) => {
                const offset = i > 0 ? i : undefined;
                const className = offset ? 'hidden sm:block' : '';
                return this.generateCalendarMonth(offset, className);
            });
        }
        return [this.generateCalendarMonth()];
    };
    /**
     * Extracts and returns the first date part from a given string.
     * When the type of the date picker is 'range' or 'multi', the first or initial date part of the value
     * should be the focused date in the calendar.
     *
     * @param value - The value to be processed, can be a string.
     * @returns The extracted last date portion of the value.
     */
    formatFocusedDate = (value) => {
        if (!value)
            return;
        const dateRegex = /\b\d{4}-\d{2}-\d{2}\b/;
        const match = dateRegex.exec(value);
        return match ? match[0] : null;
    };
    formatDisplayValue = (value) => {
        if (!value)
            return;
        const dateFormatter = new Intl.DateTimeFormat(this.locale, this.formatOptions);
        if (this.type === 'range') {
            const [start, end] = value.split('/').map((dateStr) => new Date(dateStr));
            return dateFormatter.formatRange(start, end);
        }
        if (this.type === 'multi') {
            const dates = value.split(' ').map((dateStr) => new Date(dateStr));
            return dates.map((date) => dateFormatter.format(date)).join(', ');
        }
        return dateFormatter.format(new Date(value));
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
    get CalendarType() {
        const componentTypes = {
            single: 'calendar-date',
            multi: 'calendar-multi',
            range: 'calendar-range',
        };
        // Return the corresponding component type, based on the type prop value
        return componentTypes[this.type] || componentTypes.single;
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const CallyCalendar = this.CalendarType;
        const labelId = `bq-date-picker__label-${this.name || this.fallbackInputId}`;
        return (h("div", { key: 'ee2bd9be02ae56302e2fae534043a9eaafdf8080', class: "bq-date-picker", part: "base" }, h("label", { key: 'bc8a35cd158e180823bcaa50c90db713badae9f7', id: labelId, class: { 'bq-date-picker__label': true, '!hidden': !this.hasLabel }, "aria-label": this.name || this.fallbackInputId, htmlFor: this.name || this.fallbackInputId, ref: (labelElem) => (this.labelElem = labelElem), part: "label" }, h("slot", { key: 'a3e881a3e9266078a95b83a1a9a7cf1341930fa7', name: "label", onSlotchange: this.handleLabelSlotChange })), h("bq-dropdown", { key: '49398d2c24dfaf0275f69008a238a7904e4053c3', class: "bq-date-picker__dropdown is-full [&::part(panel)]:p-m [&::part(panel)]:is-auto", disabled: this.disabled, distance: this.distance, open: this.open, panelHeight: this.panelHeight, placement: this.placement, skidding: this.skidding, strategy: this.strategy, exportparts: "panel" }, h("div", { key: '13f203d8075d499ae699e3d2a92b91cbe6f42a7b', class: {
                'bq-date-picker__control': true,
                [`validation-${this.validationStatus}`]: true,
                disabled: this.disabled,
            }, part: "control", slot: "trigger" }, h("span", { key: '8e024740a1535727c7d2cc2bd35f79260a1c4146', class: { 'bq-date-picker__control--prefix': true, '!hidden': !this.hasPrefix }, ref: (spanElem) => (this.prefixElem = spanElem), part: "prefix" }, h("slot", { key: '2fb3ec6832f365406d8ff68c0c5a45c5f45fdd7d', name: "prefix", onSlotchange: this.handlePrefixSlotChange })), h("input", { key: 'd0990e0d912aa255b2ffd119e3609912c1684fcc', id: this.name || this.fallbackInputId, class: "bq-date-picker__control--input", autoComplete: "off", autoCapitalize: "off", "aria-disabled": this.disabled ? 'true' : 'false', "aria-controls": `${this.name}`, "aria-haspopup": "dialog", disabled: this.disabled, form: this.form, name: this.name, placeholder: this.placeholder, readonly: this.type !== 'single', ref: (inputElem) => (this.inputElem = inputElem), required: this.required, spellcheck: false, type: "text", value: this.displayDate, part: "input",
            // Events
            onBlur: this.handleBlur, onFocus: this.handleFocus, onChange: this.handleChange }), this.hasValue && !this.disabled && !this.disableClear && (
        // The clear button will be visible as long as the input has a value
        // and the parent group is hovered or has focus-within
        h("bq-button", { key: '878c0f97cb5cbdb0ef542ef5dc078f5fbd262114', class: "bq-date-picker__control--clear ms-[--bq-date-picker--gap] hidden", appearance: "text", "aria-label": this.clearButtonLabel, size: "small", onBqClick: this.handleClearClick, part: "clear-btn", exportparts: "button" }, h("slot", { key: 'f076cafb429bd58548ac6341eba5877e4e5190ea', name: "clear-icon" }, h("bq-icon", { key: '31ce521c5304e47d401eb12bf62e0bdc1e1f24e2', name: "x-circle", class: "flex" })))), h("span", { key: 'b5a5fc5e8a78f9e89fbf62c13a659177c2d5d487', class: "bq-date-picker__control--suffix", ref: (spanElem) => (this.suffixElem = spanElem), part: "suffix" }, h("slot", { key: '6d089ca853b12c4e25c160df340f3466d083533b', name: "suffix", onSlotchange: this.handleSuffixSlotChange }, h("bq-icon", { key: '631d7daad09410243bfd47098177e7274a283a04', name: "calendar-blank", class: "flex" })))), h(CallyCalendar, { key: '72a864a8d0a3c4e2941589ebeac8de40bf82e14d', isDateDisallowed: this.isDateDisallowed, locale: this.locale, value: this.value, min: this.min, max: this.max, months: this.months, tentative: this.tentative, pageBy: this.monthsPerView, firstDayOfWeek: this.firstDayOfWeek, showOutsideDays: this.showOutsideDays, onChange: this.handleCalendarChange, onRangestart: this.handleCalendarRangeStart, onRangeend: this.handleCalendarRangeEnd, exportparts: "container:calendar__container,header:calendar__header,button:calendar__button,previous:calendar__previous,next:calendar__next,disabled:calendar__disabled,heading:calendar__heading", ref: (elem) => (this.callyElem = elem) }, h("bq-icon", { key: '5df13a4e7a5c59a4ca02a37e46ead7368ecd5615', color: "text--primary", slot: "previous", name: "caret-left", label: "Previous" }), h("bq-icon", { key: '5966b9ae3f07f96c45cdec894d6cb9fb39c65a3e', color: "text--primary", slot: "next", name: "caret-right", label: "Next" }), h("div", { key: '4677b63562fcb18211626154cbc0f1347c6805c8', class: "flex flex-wrap justify-center gap-[--bq-spacing-m]" }, this.generateCalendarMonths())))));
    }
    static get is() { return "bq-date-picker"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-date-picker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-date-picker.css"]
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
                    "text": "If `true`, the Date picker input will be focused on component render"
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
                    "text": "If `true`, the clear button won't be displayed"
                },
                "getter": false,
                "setter": false,
                "attribute": "disable-clear",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "Indicates whether the Date picker input is disabled or not.\nIf `true`, the Date picker is disabled and cannot be interacted with."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
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
                    "text": "Represents the distance (gutter or margin) between the Date picker panel and the input element."
                },
                "getter": false,
                "setter": false,
                "attribute": "distance",
                "reflect": true,
                "defaultValue": "8"
            },
            "firstDayOfWeek": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "DaysOfWeek",
                    "resolved": "0 | 1 | 2 | 3 | 4 | 5 | 6",
                    "references": {
                        "DaysOfWeek": {
                            "location": "import",
                            "path": "./bq-date-picker.types",
                            "id": "../../packages/beeq/src/components/date-picker/bq-date-picker.types.ts::DaysOfWeek"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The first day of the week, where Sunday is 0, Monday is 1, etc"
                },
                "getter": false,
                "setter": false,
                "attribute": "first-day-of-week",
                "reflect": true,
                "defaultValue": "1"
            },
            "formatOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Intl.DateTimeFormatOptions",
                    "resolved": "DateTimeFormatOptions",
                    "references": {
                        "Intl": {
                            "location": "global",
                            "id": "global::Intl"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The options to use when formatting the displayed value.\nDetails: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{\n    day: 'numeric',\n    month: 'short',\n    year: 'numeric',\n  }"
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
                    "text": "The ID of the form that the Date picker input belongs to."
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
            "isDateDisallowed": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(date: Date) => boolean",
                    "resolved": "(date: Date) => boolean",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "A function that takes a date and returns true if the date should not be selectable"
                },
                "getter": false,
                "setter": false
            },
            "locale": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Intl.LocalesArgument",
                    "resolved": "Locale | readonly (string | Locale)[] | string",
                    "references": {
                        "Intl": {
                            "location": "global",
                            "id": "global::Intl"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The locale for formatting dates. If not set, will use the browser's locale.\nDetails: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument"
                },
                "getter": false,
                "setter": false,
                "attribute": "locale",
                "reflect": true,
                "defaultValue": "'en-GB'"
            },
            "max": {
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
                    "text": "The latest date that can be selected"
                },
                "getter": false,
                "setter": false,
                "attribute": "max",
                "reflect": true
            },
            "min": {
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
                    "text": "The earliest date that can be selected"
                },
                "getter": false,
                "setter": false,
                "attribute": "min",
                "reflect": true
            },
            "months": {
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
                    "text": "Number of months to show when range is `true`"
                },
                "getter": false,
                "setter": false,
                "attribute": "months",
                "reflect": true
            },
            "monthsPerView": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'single' | 'months'",
                    "resolved": "\"months\" | \"single\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies how the next/previous buttons should navigate the calendar.\n- single: The buttons will navigate by a single month at a time.\n- months: The buttons will navigate by the number of months displayed per view."
                },
                "getter": false,
                "setter": false,
                "attribute": "months-per-view",
                "reflect": true,
                "defaultValue": "'single'"
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
                    "text": "The Date picker input name."
                },
                "getter": false,
                "setter": false,
                "attribute": "name",
                "reflect": true
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
                    "text": "If `true`, the Date picker panel will be visible."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            },
            "panelHeight": {
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
                    "text": "When set, it will override the height of the Date picker panel."
                },
                "getter": false,
                "setter": false,
                "attribute": "panel-height",
                "reflect": true,
                "defaultValue": "'auto'"
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
                    "text": "The Date picker input placeholder text value"
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
                    "text": "Position of the Date picker panel"
                },
                "getter": false,
                "setter": false,
                "attribute": "placement",
                "reflect": true,
                "defaultValue": "'bottom-end'"
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
                    "text": "Indicates whether or not the Date picker input is required to be filled out before submitting the form."
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": true
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
                    "text": "Represents the skidding between the Date picker panel and the input element."
                },
                "getter": false,
                "setter": false,
                "attribute": "skidding",
                "reflect": true,
                "defaultValue": "0"
            },
            "showOutsideDays": {
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
                    "text": "Whether to show days outside the month"
                },
                "getter": false,
                "setter": false,
                "attribute": "show-outside-days",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "Defines the strategy to position the Date picker panel"
                },
                "getter": false,
                "setter": false,
                "attribute": "strategy",
                "reflect": true,
                "defaultValue": "'fixed'"
            },
            "tentative": {
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
                    "text": "The date that is tentatively selected e.g. the start of a range selection"
                },
                "getter": false,
                "setter": false,
                "attribute": "tentative",
                "reflect": true
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TDatePickerType",
                    "resolved": "\"multi\" | \"range\" | \"single\"",
                    "references": {
                        "TDatePickerType": {
                            "location": "import",
                            "path": "./bq-date-picker.types",
                            "id": "../../packages/beeq/src/components/date-picker/bq-date-picker.types.ts::TDatePickerType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "It defines how the calendar will behave, allowing single date selection, range selection, or multiple date selection"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'single'"
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
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The select input value represents the currently selected date or range and can be used to reset the field to a previous value.\nAll dates are expected in ISO-8601 format (YYYY-MM-DD)."
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
            "focusedDate": {},
            "displayDate": {},
            "hasLabel": {},
            "hasPrefix": {},
            "hasRangeEnd": {},
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
                    "original": "HTMLBqDatePickerElement",
                    "resolved": "HTMLBqDatePickerElement",
                    "references": {
                        "HTMLBqDatePickerElement": {
                            "location": "global",
                            "id": "global::HTMLBqDatePickerElement"
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
                    "original": "{ value: string; el: HTMLBqDatePickerElement }",
                    "resolved": "{ value: string; el: HTMLBqDatePickerElement; }",
                    "references": {
                        "HTMLBqDatePickerElement": {
                            "location": "global",
                            "id": "global::HTMLBqDatePickerElement"
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
                    "original": "HTMLBqDatePickerElement",
                    "resolved": "HTMLBqDatePickerElement",
                    "references": {
                        "HTMLBqDatePickerElement": {
                            "location": "global",
                            "id": "global::HTMLBqDatePickerElement"
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
                    "original": "HTMLBqDatePickerElement",
                    "resolved": "HTMLBqDatePickerElement",
                    "references": {
                        "HTMLBqDatePickerElement": {
                            "location": "global",
                            "id": "global::HTMLBqDatePickerElement"
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
                            "text": "BqInput"
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
            }, {
                "propName": "type",
                "methodName": "checkPropValues"
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
                "name": "click",
                "method": "handleClickOutside",
                "target": "body",
                "capture": true,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=bq-date-picker.js.map
