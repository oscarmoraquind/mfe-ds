import { EventEmitter } from '../../stencil-public-runtime';
import { TNotificationBorderRadius, TNotificationType } from './bq-notification.types';
/**
 * The Notification component is a user interface element used to provide information or alerts to users in a non-intrusive manner.
 *
 * @example How to use it
 * ```html
 * <bq-notification border="s" time="3000" type="info">
 *   Title
 *   <span slot="body">
 *     This is some description text text
 *     <a class="bq-link" href="https://example.com">Link</a>
 *   </span>
 *   <div class="flex gap-xs" slot="footer">
 *     <bq-button appearance="primary" size="small">Button</bq-button>
 *     <bq-button appearance="link" size="small">Button</bq-button>
 *   </div>
 * </bq-notification>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/945cb6-notification
 * @status stable
 *
 * @dependency bq-button
 * @dependency bq-icon
 *
 * @attr {boolean} auto-dismiss - If true, the notification will automatically hide after the specified amount of time
 * @attr {string} border - The corder radius of the notification component
 * @attr {boolean} disable-close - If true, the close button at the top right of the notification won't be shown
 * @attr {boolean} hide-icon - If true, the notification icon won't be shown
 * @attr {boolean} open - If true, the notification will be shown
 * @attr {number} time - The length of time, in milliseconds, after which the notification will close itself. Only valid if `auto-dismiss="true"`
 * @attr {string} type - Type of Notification
 *
 * @event bqAfterClose - Callback handler to be called after the notification has been closed
 * @event bqAfterOpen - Callback handler to be called after the notification has been opened
 * @event bqHide - Callback handler to be called when the notification is hidden
 * @event bqShow - Callback handler to be called when the notification is shown
 *
 * @slot - The notification title content
 * @slot body - The notification description content
 * @slot footer - The notification footer content
 * @slot icon - The icon to be displayed in the notification
 * @slot btn-close - The close button of the notification
 *
 * @part base - The `<div>` container of the predefined bq-icon component.
 * @part body - The container `<div>` that wraps the notification description content
 * @part btn-close - The `bq-button` used to close the notification
 * @part content - The container `<div>` that wraps all the notification content (title, description, footer)
 * @part footer - The container `<div>` that wraps the notification footer content
 * @part icon - The `<bq-icon>` element used to render a predefined icon based on the notification type
 * @part icon-outline - The container `<div>` that wraps the icon element
 * @part main - The container `<div>` that wraps the notification main content (title, description)
 * @part svg - The `<svg>` element of the predefined bq-icon component.
 * @part title - The container `<div>` that wraps the notification title content
 * @part wrapper - The wrapper container `<div>` of the element inside the shadow DOM
 *
 * @cssprop --bq-notification--background - The notification background color
 * @cssprop --bq-notification--box-shadow - The notification box shadow
 * @cssprop --bq-notification--border-color - The notification border color
 * @cssprop --bq-notification--border-radius - The notification border radius
 * @cssprop --bq-notification--border-style - The notification border style
 * @cssprop --bq-notification--border-width - The notification border width
 * @cssprop --bq-notification--content-footer-gap - The notification content and footer gap
 * @cssprop --bq-notification--title-body-gap - The notification title and body gap
 * @cssprop --bq-notification--icon-color-error - The notification icon color for error type
 * @cssprop --bq-notification--icon-color-info - The notification icon color for info type
 * @cssprop --bq-notification--icon-color-neutral - The notification icon color for neutral type
 * @cssprop --bq-notification--icon-color-success - The notification icon color for success type
 * @cssprop --bq-notification--icon-color-warning - The notification icon color for warning type
 * @cssprop --bq-notification--padding - The notification padding
 * @cssprop --bq-notification--min-width - The notification min width
 */
export declare class BqNotification {
    private autoDismissDebounce;
    private bodyElem;
    private footerElem;
    private notificationElem;
    el: HTMLBqNotificationElement;
    private hasContent;
    private hasFooter;
    private notificationPortal;
    /** If true, the notification will automatically hide after the specified amount of time */
    autoDismiss: boolean;
    /** The corder radius of the notification component */
    border: TNotificationBorderRadius;
    /** If true, the close button at the top right of the notification won't be shown */
    disableClose: boolean;
    /** If true, the notification icon won't be shown */
    hideIcon: boolean;
    /** If true, the notification will be shown */
    open: boolean;
    /** The length of time, in milliseconds, after which the notification will close itself. Only valid if `autoDismiss="true"` */
    time: number;
    /** Type of Notification */
    type: TNotificationType;
    handleTimeout(): void;
    handleOpenChange(): void;
    checkPropValues(): void;
    /** Callback handler to be called when the notification is hidden */
    bqHide: EventEmitter;
    /** Callback handler to be called when the notification is shown */
    bqShow: EventEmitter;
    /** Callback handler to be called after the notification has been opened */
    bqAfterOpen: EventEmitter;
    /** Callback handler to be called after the notification has been closed */
    bqAfterClose: EventEmitter;
    connectedCallback(): void;
    componentWillLoad(): void;
    afterNotificationClose(): void;
    /** Method to be called to hide the notification component */
    hide(): Promise<void>;
    /** Method to be called to show the notification component */
    show(): Promise<void>;
    /** This method can be used to display notifications in a fixed-position element that allows for stacking multiple notifications vertically */
    toast(): Promise<void>;
    private handleHide;
    private handleShow;
    private handleTransitionEnd;
    private handleContentSlotChange;
    private handleFooterSlotChange;
    private get iconName();
    render(): any;
}
