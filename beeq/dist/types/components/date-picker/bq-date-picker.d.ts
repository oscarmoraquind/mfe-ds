import { EventEmitter } from '../../stencil-public-runtime';
import { DaysOfWeek, TDatePickerType } from './bq-date-picker.types';
import { Placement } from '../../services/interfaces';
import { TInputValidation } from '../input/bq-input.types';
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
export declare class BqDatePicker {
    private callyElem?;
    private inputElem?;
    private labelElem?;
    private prefixElem?;
    private suffixElem?;
    private fallbackInputId;
    private readonly COMMON_EXPORT_PARTS;
    private readonly BUTTON_EXPORT_PARTS;
    internals: ElementInternals;
    el: HTMLBqDatePickerElement;
    focusedDate: string;
    displayDate: string;
    hasLabel: boolean;
    hasPrefix: boolean;
    hasRangeEnd: boolean;
    hasSuffix: boolean;
    hasValue: boolean;
    /** If `true`, the Date picker input will be focused on component render */
    autofocus: boolean;
    /** The clear button aria label */
    clearButtonLabel?: string;
    /** If `true`, the clear button won't be displayed */
    disableClear?: boolean;
    /**
     * Indicates whether the Date picker input is disabled or not.
     * If `true`, the Date picker is disabled and cannot be interacted with.
     */
    disabled?: boolean;
    /** Represents the distance (gutter or margin) between the Date picker panel and the input element. */
    distance?: number;
    /** The first day of the week, where Sunday is 0, Monday is 1, etc */
    firstDayOfWeek?: DaysOfWeek;
    /** The options to use when formatting the displayed value.
     * Details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
     */
    formatOptions: Intl.DateTimeFormatOptions;
    /** The ID of the form that the Date picker input belongs to. */
    form?: string;
    /** The native form validation message (mandatory if `required` is set) */
    formValidationMessage?: string;
    /** A function that takes a date and returns true if the date should not be selectable */
    isDateDisallowed?: (date: Date) => boolean;
    /** The locale for formatting dates. If not set, will use the browser's locale.
     * Details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
     */
    locale: Intl.LocalesArgument;
    /** The latest date that can be selected */
    max?: string;
    /** The earliest date that can be selected */
    min?: string;
    /** Number of months to show when range is `true` */
    months: number;
    /**
     * Specifies how the next/previous buttons should navigate the calendar.
     * - single: The buttons will navigate by a single month at a time.
     * - months: The buttons will navigate by the number of months displayed per view.
     */
    monthsPerView: 'single' | 'months';
    /** The Date picker input name. */
    name: string;
    /** If `true`, the Date picker panel will be visible. */
    open?: boolean;
    /** When set, it will override the height of the Date picker panel. */
    panelHeight?: string;
    /** The Date picker input placeholder text value */
    placeholder?: string;
    /** Position of the Date picker panel */
    placement?: Placement;
    /** Indicates whether or not the Date picker input is required to be filled out before submitting the form. */
    required?: boolean;
    /** Represents the skidding between the Date picker panel and the input element. */
    skidding?: number;
    /** Whether to show days outside the month */
    showOutsideDays: boolean;
    /** Defines the strategy to position the Date picker panel */
    strategy?: 'fixed' | 'absolute';
    /** The date that is tentatively selected e.g. the start of a range selection  */
    tentative?: string;
    /** It defines how the calendar will behave, allowing single date selection, range selection, or multiple date selection */
    type: TDatePickerType;
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
    validationStatus: TInputValidation;
    /** The select input value represents the currently selected date or range and can be used to reset the field to a previous value.
     * All dates are expected in ISO-8601 format (YYYY-MM-DD). */
    value: string;
    handleValueChange(): void;
    checkPropValues(): void;
    /** Callback handler emitted when the input loses focus */
    bqBlur: EventEmitter<HTMLBqDatePickerElement>;
    /**
     * Callback handler emitted when the input value has changed and the input loses focus.
     * This handler is called whenever the user finishes typing or pasting text into the input field and then clicks outside of the input field.
     */
    bqChange: EventEmitter<{
        value: string;
        el: HTMLBqDatePickerElement;
    }>;
    /** Callback handler emitted when the input value has been cleared */
    bqClear: EventEmitter<HTMLBqDatePickerElement>;
    /** Callback handler emitted when the input has received focus */
    bqFocus: EventEmitter<HTMLBqDatePickerElement>;
    connectedCallback(): Promise<void>;
    componentWillLoad(): void;
    formAssociatedCallback(): void;
    formResetCallback(): void;
    handleOpenChange(ev: CustomEvent<{
        open: boolean;
    }>): void;
    handleClickOutside(ev: MouseEvent): void;
    /**
     * Clears the selected value.
     *
     * @return {Promise<void>}
     * @memberof BqInput
     */
    clear(): Promise<void>;
    private handleBlur;
    private handleFocus;
    private setFocusedDate;
    private handleChange;
    private handleCalendarChange;
    private handleCalendarRangeStart;
    private handleCalendarRangeEnd;
    private handleClearClick;
    private handleLabelSlotChange;
    private handlePrefixSlotChange;
    private handleSuffixSlotChange;
    private generateCalendarMonth;
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
    private generateCalendarMonths;
    /**
     * Extracts and returns the first date part from a given string.
     * When the type of the date picker is 'range' or 'multi', the first or initial date part of the value
     * should be the focused date in the calendar.
     *
     * @param value - The value to be processed, can be a string.
     * @returns The extracted last date portion of the value.
     */
    private formatFocusedDate;
    private formatDisplayValue;
    private updateFormValidity;
    private get CalendarType();
    render(): any;
}
