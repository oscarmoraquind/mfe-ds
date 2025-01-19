import { EventEmitter } from '../../stencil-public-runtime';
import { TToastBorderRadius, TToastPlacement, TToastType } from './bq-toast.types';
/**
 * Toasts are time-based components used to display short messages.
 * Commonly used for errors, confirmations, or progress updates.
 *
 * @example How to use it
 * ```html
 * <bq-toast type="info">
 *   This is a message
 * </bq-toast>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/83da51-toast
 * @status stable
 *
 * @dependency bq-icon
 *
 * @attr {"s" | "none" | "xs2" | "xs" | "m" | "l" | "full"} border - The corder radius of the toast component
 * @attr {"success" | "error" | "loading" | "alert" | "info"} type - Type of toast
 * @attr {"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"} placement - Placement of toast
 * @attr {boolean} hide-icon - If true will hide toast icon
 * @attr {boolean} open - If true, the toast will be shown
 * @attr {number} time - The length of time, in milliseconds, after which the toast will close itself
 *
 * @method show - Method to be called to show the toast component
 * @method hide - Method to be called to hide the toast component
 * @method toast - This method can be used to display toasts in a fixed-position element that allows for stacking multiple toasts vertically
 *
 * @event bqHide - Callback handler to be called when the notification is hidden
 * @event bqShow - Callback handler to be called when the notification is shown
 *
 * @slot - The content to be displayed in the toast component.
 * @slot icon - The icon to be displayed in the toast component.
 *
 * @part wrapper - The component's internal wrapper inside the shadow DOM.
 * @part icon-info - The `<div>` container that holds the icon component.
 * @part base - The `<div>` container of the internal bq-icon component.
 * @part svg - The `<svg>` element of the internal bq-icon component.
 *
 * @cssprop --bq-toast--background - Toast background color
 * @cssprop --bq-toast--box-shadow - Toast box shadow
 * @cssprop --bq-toast--padding-y - Toast vertical padding
 * @cssprop --bq-toast--padding-x - Toast horizontal padding
 * @cssprop --bq-toast--gap - Toast distance between icon and text
 * @cssprop --bq-toast--border-radius - Toast border radius
 * @cssprop --bq-toast--border-color - Toast border color
 * @cssprop --bq-toast--border-style - Toast border style
 * @cssprop --bq-toast--border-width - Toast border width
 * @cssprop --bq-toast--icon-color-info - Toast icon color when type is 'info'
 * @cssprop --bq-toast--icon-color-success - Toast icon color when type is 'success'
 * @cssprop --bq-toast--icon-color-alert - Toast icon color when type is 'alert'
 * @cssprop --bq-toast--icon-color-error - Toast icon color when type is 'error'
 * @cssprop --bq-toast--icon-color-loading - Toast icon color when type is 'loading'
 * @cssprop --bq-toast--icon-color-custom - Toast icon color when type is 'custom'
 */
export declare class BqToast {
    private autoDismissDebounce;
    el: HTMLBqToastElement;
    private toastPortal;
    /** The corder radius of the toast component */
    border: TToastBorderRadius;
    /** Type of toast */
    type: TToastType;
    /** Placement of toast */
    placement: TToastPlacement;
    /** If true will hide toast icon */
    hideIcon: boolean;
    /** If true, the toast will be shown */
    open: boolean;
    /** The length of time, in milliseconds, after which the toast will close itself */
    time: number;
    checkPropValues(): void;
    handleTimeChange(): void;
    handleOpenChange(): void;
    /** Callback handler to be called when the notification is hidden */
    bqHide: EventEmitter<HTMLBqToastElement>;
    /** Callback handler to be called when the notification is shown */
    bqShow: EventEmitter<HTMLBqToastElement>;
    connectedCallback(): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    onNotificationHide(): void;
    /** Method to be called to show the toast component */
    show(): Promise<void>;
    /** Method to be called to hide the toast component */
    hide(): Promise<void>;
    /** This method can be used to display toasts in a fixed-position element that allows for stacking multiple toasts vertically */
    toast(): Promise<void>;
    private handleShow;
    private handleHide;
    private get iconName();
    render(): any;
}
