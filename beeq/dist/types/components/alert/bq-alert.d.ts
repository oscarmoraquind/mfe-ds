import { EventEmitter } from '../../stencil-public-runtime';
import { TAlertBorderRadius, TAlertType } from './bq-alert.types';
/**
 * The Alert is a user interface component used to convey important information to the user in a clear and concise manner.
 * It can be used to notify users of success, failure, warning, or any other type of information that needs to be brought to their attention.
 *
 * @example How to use it
 * ```html
 * <bq-alert>
 *   <bq-icon name="star" slot="icon"></bq-icon>
 *   Title
 *   <span slot="body">
 *     Description
 *     <a class="bq-link" href="https://example.com">Link</a>
 *   </span>
 *   <div slot="footer">
 *     <bq-button appearance="primary" size="small">Button</bq-button>
 *     <bq-button appearance="link" size="small">Button</bq-button>
 *   </div>
 * </bq-alert>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/848a50-alert
 * @status stable
 *
 * @dependency bq-button
 * @dependency bq-icon
 *
 * @attr {boolean} [auto-dismiss=false] - If true, the alert will automatically hide after the specified amount of time
 * @attr {"none" | "xs2" | "xs" | "s" | "m" | "l" | "full"} [border='s'] - The corner radius of the alert component
 * @attr {boolean} [disable-close=false] - If true, the close button at the top right of the alert won't be shown
 * @attr {boolean} [hide-icon=false] - If true, the alert icon won't be shown
 * @attr {boolean} [open=false] - If true, the alert will be shown
 * @attr {number} [time=3000] - The length of time, in milliseconds, after which the alert will close itself. Only valid if `autoDismiss="true"`
 * @attr {"info" | "success" | "warning" | "error" | "default"} [type='default'] - Type of Alert
 * @attr {boolean} [sticky=false] - If true, the alert component will remain fixed at the top of the page, occupying the full viewport
 *
 * @event bqHide - Callback handler to be called when the alert is hidden
 * @event bqShow - Callback handler to be called when the alert is shown
 * @event bqAfterShow - Callback handler to be called after the alert has been shown
 * @event bqAfterHide - Callback handler to be called after the alert has been hidden
 *
 * @slot - The alert title content (no slot name required)
 * @slot body - The alert description content
 * @slot footer - The alert footer content
 * @slot icon - The predefined icon based on the alert type (info, success, warning, error, default)
 * @slot btn-close - The close button of the alert
 *
 * @part base - The `<div>` container of the predefined bq-icon component
 * @part body - The container `<div>` that wraps the alert description content
 * @part btn-close - The `bq-button` used to close the alert
 * @part content - The container `<div>` that wraps all the alert content (title, description, footer)
 * @part footer - The container `<div>` that wraps the alert footer content
 * @part icon - The `<bq-icon>` element used to render a predefined icon based on the alert type (info, success, warning, error, default)
 * @part icon-outline - The container `<div>` that wraps the icon element
 * @part main - The container `<div>` that wraps the alert main content (title, description)
 * @part svg - The `<svg>` element of the predefined bq-icon component
 * @part title - The container `<div>` that wraps the alert title content
 * @part wrapper - The wrapper container `<div>` of the element inside the shadow DOM
 *
 * @cssprop --bq-alert--background - The alert background color
 * @cssprop --bq-alert--border-radius - The alert border radius
 * @cssprop --bq-alert--content-footer-gap - The alert content and footer gap
 * @cssprop --bq-alert--title-body-gap - The alert title and body gap
 *
 * @cssprop --bq-alert--border-color - The alert border color
 * @cssprop --bq-alert--border-style - The alert border style
 * @cssprop --bq-alert--border-width - The alert border width
 *
 * @cssprop --bq-alert--background-info - The alert background color for info type
 * @cssprop --bq-alert--background-success - The alert background color for success type
 * @cssprop --bq-alert--background-warning - The alert background color for warning type
 * @cssprop --bq-alert--background-error - The alert background color for error type
 *
 * @cssprop --bq-alert--border-info - The alert border color for info type
 * @cssprop --bq-alert--border-success - The alert border color for success type
 * @cssprop --bq-alert--border-warning - The alert border color for warning type
 * @cssprop --bq-alert--border-error - The alert border color for error type
 *
 * @cssprop --bq-alert--icon-color-info - The alert icon color for info type
 * @cssprop --bq-alert--icon-color-success - The alert icon color for success type
 * @cssprop --bq-alert--icon-color-warning - The alert icon color for warning type
 * @cssprop --bq-alert--icon-color-error - The alert icon color for error type
 *
 * @cssprop --bq-alert--padding - The alert padding
 * @cssprop --bq-alert--min-width - The alert min width
 */
export declare class BqAlert {
    private autoDismissDebounce;
    private bodyElem;
    private footerElem;
    private alertElement;
    el: HTMLBqAlertElement;
    private hasContent;
    private hasFooter;
    /** If true, the alert will automatically hide after the specified amount of time */
    autoDismiss: boolean;
    /** The corner radius of the alert component */
    border: TAlertBorderRadius;
    /** If true, the close button at the top right of the alert won't be shown */
    disableClose: boolean;
    /** If true, the alert icon won't be shown */
    hideIcon: boolean;
    /** If true, the alert will be shown */
    open: boolean;
    /** The length of time, in milliseconds, after which the alert will close itself. Only valid if `autoDismiss="true"` */
    time: number;
    /** Type of Alert */
    type: TAlertType;
    /** If true, the alert component will remain fixed at the top of the page, occupying the full viewport */
    sticky: boolean;
    handleTimeout(): void;
    handleOpenChange(): void;
    checkPropValues(): void;
    /** Callback handler to be called when the alert is hidden */
    bqHide: EventEmitter;
    /** Callback handler to be called when the alert is shown */
    bqShow: EventEmitter;
    /** Callback handler to be called after the alert has been shown */
    bqAfterShow: EventEmitter;
    /** Callback handler to be called after the alert has been hidden */
    bqAfterHide: EventEmitter;
    componentWillLoad(): void;
    componentDidLoad(): void;
    /** Method to be called to hide the alert component */
    hide(): Promise<void>;
    /** Method to be called to show the alert component */
    show(): Promise<void>;
    private handleHide;
    private handleShow;
    private handleTransitionEnd;
    private handleContentSlotChange;
    private handleFooterSlotChange;
    private get iconName();
    render(): any;
}
