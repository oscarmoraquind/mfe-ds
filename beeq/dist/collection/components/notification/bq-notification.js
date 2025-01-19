/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { NOTIFICATION_TYPE } from "./bq-notification.types";
import { debounce, enter, hasSlotContent, isClient, leave, validatePropValue } from "../../shared/utils";
const NOTIFICATION_PORTAL_SELECTOR = 'bq-notification-portal';
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
export class BqNotification {
    // Own Properties
    // ====================
    autoDismissDebounce;
    bodyElem;
    footerElem;
    notificationElem;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasContent = false;
    hasFooter = false;
    notificationPortal = isClient() ? document.querySelector(`.${NOTIFICATION_PORTAL_SELECTOR}`) : null;
    // Public Property API
    // ========================
    /** If true, the notification will automatically hide after the specified amount of time */
    autoDismiss;
    /** The corder radius of the notification component */
    border = 's';
    /** If true, the close button at the top right of the notification won't be shown */
    disableClose;
    /** If true, the notification icon won't be shown */
    hideIcon;
    /** If true, the notification will be shown */
    open;
    /** The length of time, in milliseconds, after which the notification will close itself. Only valid if `autoDismiss="true"` */
    time = 3000;
    /** Type of Notification */
    type = 'info';
    // Prop lifecycle events
    // =======================
    handleTimeout() {
        this.autoDismissDebounce?.cancel();
        if (!this.autoDismiss)
            return;
        this.autoDismissDebounce = debounce(() => {
            this.hide();
        }, this.time);
        // Make sure to autodismiss the notification if the `auto-dismiss` value changed while open
        if (this.open)
            this.autoDismissDebounce();
    }
    handleOpenChange() {
        this.autoDismissDebounce?.cancel();
        if (!(this.autoDismiss && this.open))
            return;
        this.autoDismissDebounce();
    }
    checkPropValues() {
        validatePropValue(NOTIFICATION_TYPE, 'info', this.el, 'type');
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler to be called when the notification is hidden */
    bqHide;
    /** Callback handler to be called when the notification is shown */
    bqShow;
    /** Callback handler to be called after the notification has been opened */
    bqAfterOpen;
    /** Callback handler to be called after the notification has been closed */
    bqAfterClose;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    connectedCallback() {
        if (!isClient())
            return;
        const { notificationPortal } = this;
        if (!notificationPortal) {
            this.notificationPortal = Object.assign(document.createElement('div'), {
                className: NOTIFICATION_PORTAL_SELECTOR,
            });
        }
    }
    componentWillLoad() {
        this.checkPropValues();
        this.handleTimeout();
    }
    // Listeners
    // ==============
    afterNotificationClose() {
        try {
            const { notificationPortal } = this;
            notificationPortal.removeChild(this.el);
            // Remove the notification portal from the DOM when there are no more notifications
            if (notificationPortal.querySelector(this.el.tagName.toLowerCase()) === null) {
                notificationPortal.remove();
            }
        }
        catch (error) {
            /**
             * Skip DOMException error since it could be possible that
             * in some situations the notification portal is missing
             */
            if (error instanceof DOMException)
                return;
            throw error;
        }
    }
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    /** Method to be called to hide the notification component */
    async hide() {
        await this.handleHide();
    }
    /** Method to be called to show the notification component */
    async show() {
        await this.handleShow();
    }
    /** This method can be used to display notifications in a fixed-position element that allows for stacking multiple notifications vertically */
    async toast() {
        if (!isClient())
            return;
        const { notificationPortal } = this;
        if (notificationPortal?.parentElement === null) {
            document.body.append(notificationPortal);
        }
        notificationPortal?.appendChild(this.el);
        requestAnimationFrame(() => {
            this.show();
        });
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    handleHide = async () => {
        const ev = this.bqHide.emit(this.el);
        if (!ev.defaultPrevented) {
            await leave(this.notificationElem);
            this.open = false;
            this.handleTransitionEnd();
        }
    };
    handleShow = async () => {
        const ev = this.bqShow.emit(this.el);
        if (!ev.defaultPrevented) {
            this.open = true;
            await enter(this.notificationElem);
            this.handleTransitionEnd();
        }
    };
    handleTransitionEnd = () => {
        if (this.open) {
            this.bqAfterOpen.emit();
            return;
        }
        this.bqAfterClose.emit();
    };
    handleContentSlotChange = () => {
        this.hasContent = hasSlotContent(this.bodyElem);
    };
    handleFooterSlotChange = () => {
        this.hasFooter = hasSlotContent(this.footerElem, 'footer');
    };
    get iconName() {
        const typeMap = {
            error: 'x-circle',
            success: 'check-circle',
            warning: 'warning-circle',
        };
        return typeMap[this.type] || 'info';
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const style = {
            ...(this.border && { '--bq-notification--border-radius': `var(--bq-radius--${this.border})` }),
        };
        return (h(Host, { key: '6b730ba771e43b2d2f25c9b47bed2c4ab2c45cd4', style: style, class: { 'is-hidden': !this.open }, "aria-hidden": !this.open ? 'true' : 'false', hidden: !this.open ? 'true' : 'false', role: "alert" }, h("div", { key: 'fb66bb0f14e4a375987246d1ce470e7a54559d68', class: "bq-notification", "data-transition-enter": "transform transition ease-out duration-300", "data-transition-enter-start": "translate-y-xs opacity-0 sm:translate-y-0 sm:translate-x-s", "data-transition-enter-end": "translate-y-0 opacity-100 sm:translate-x-0", "data-transition-leave": "transform transition ease-in duration-100", "data-transition-leave-start": "translate-y-0 opacity-100 sm:translate-x-0", "data-transition-leave-end": "-translate-y-xs opacity-0 sm:translate-y-0 sm:translate-x-s", ref: (div) => (this.notificationElem = div), part: "wrapper" }, !this.disableClose && (h("bq-button", { key: 'e7c848ddb6fd49ffe265dd67686aa973967089e1', class: "notification--close absolute inset-ie-5 [&::part(label)]:inline-flex", appearance: "text", size: "small", onClick: () => this.hide(), part: "btn-close" }, h("slot", { key: 'e71fad760be4fffc253dd50da717a363524dfd07', name: "btn-close" }, h("bq-icon", { key: 'fe1987c6dcf93a0cb44916a0074eef25d1ff4700', name: "x" })))), h("div", { key: '4202221dcd0acf733731a82b3942b49f0e9aae32', class: {
                '!hidden': this.hideIcon,
                [`color-${this.type}`]: true, // The icon color will be based on the type (info, success, warning, error)
                'notification--icon me-xs flex text-left align-top': true,
            }, part: "icon-outline" }, h("slot", { key: '1dca4bdfceacfaff54593245a0fe12ff33f8a2ae', name: "icon" }, h("bq-icon", { key: '9314c72d5dbbfa84700849166fc6c9cc81b5aa74', name: this.iconName, part: "icon", exportparts: "base,svg" }))), h("div", { key: '0f73726fe676c3690d446f74481af6a60ca7f5d9', class: "flex flex-col items-start gap-[--bq-notification--content-footer-gap]", part: "main" }, h("div", { key: 'e59c2d9e84cb19e94e33982c35721284976b0455', class: "flex flex-col gap-[--bq-notification--title-body-gap]", part: "content" }, h("div", { key: '510e7e055fa93868823d866060deeabb65d20d4c', class: "title-font font-semibold leading-regular", part: "title" }, h("slot", { key: '1ea6fcb677c50ce43f67be169ecda24b6edd393a' })), h("div", { key: '695bbdc098b5269ca94de8bfeac637296d7aeff8', class: { 'text-s leading-regular': true, '!hidden': !this.hasContent }, ref: (div) => (this.bodyElem = div), part: "body" }, h("slot", { key: '9f6b3759f98bdb6acbab671df36a7b61c77e0b12', name: "body", onSlotchange: this.handleContentSlotChange }))), h("div", { key: '4f70ea829a647b80151ff2f3c3f38cdbef3b7374', class: { 'flex items-start gap-xs': true, '!hidden': !this.hasFooter }, ref: (div) => (this.footerElem = div), part: "footer" }, h("slot", { key: '22135fdffabcd75dc927e6d4d98b846f41b0c4fb', name: "footer", onSlotchange: this.handleFooterSlotChange }))))));
    }
    static get is() { return "bq-notification"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-notification.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-notification.css"]
        };
    }
    static get properties() {
        return {
            "autoDismiss": {
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
                    "text": "If true, the notification will automatically hide after the specified amount of time"
                },
                "getter": false,
                "setter": false,
                "attribute": "auto-dismiss",
                "reflect": true
            },
            "border": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TNotificationBorderRadius",
                    "resolved": "\"full\" | \"l\" | \"m\" | \"none\" | \"s\" | \"xs\" | \"xs2\"",
                    "references": {
                        "TNotificationBorderRadius": {
                            "location": "import",
                            "path": "./bq-notification.types",
                            "id": "../../packages/beeq/src/components/notification/bq-notification.types.ts::TNotificationBorderRadius"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The corder radius of the notification component"
                },
                "getter": false,
                "setter": false,
                "attribute": "border",
                "reflect": true,
                "defaultValue": "'s'"
            },
            "disableClose": {
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
                    "text": "If true, the close button at the top right of the notification won't be shown"
                },
                "getter": false,
                "setter": false,
                "attribute": "disable-close",
                "reflect": true
            },
            "hideIcon": {
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
                    "text": "If true, the notification icon won't be shown"
                },
                "getter": false,
                "setter": false,
                "attribute": "hide-icon",
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the notification will be shown"
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true
            },
            "time": {
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
                    "text": "The length of time, in milliseconds, after which the notification will close itself. Only valid if `autoDismiss=\"true\"`"
                },
                "getter": false,
                "setter": false,
                "attribute": "time",
                "reflect": true,
                "defaultValue": "3000"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TNotificationType",
                    "resolved": "\"error\" | \"info\" | \"neutral\" | \"success\" | \"warning\"",
                    "references": {
                        "TNotificationType": {
                            "location": "import",
                            "path": "./bq-notification.types",
                            "id": "../../packages/beeq/src/components/notification/bq-notification.types.ts::TNotificationType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of Notification"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'info'"
            }
        };
    }
    static get states() {
        return {
            "hasContent": {},
            "hasFooter": {},
            "notificationPortal": {}
        };
    }
    static get events() {
        return [{
                "method": "bqHide",
                "name": "bqHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called when the notification is hidden"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bqShow",
                "name": "bqShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called when the notification is shown"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bqAfterOpen",
                "name": "bqAfterOpen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called after the notification has been opened"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bqAfterClose",
                "name": "bqAfterClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called after the notification has been closed"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "hide": {
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
                    "text": "Method to be called to hide the notification component",
                    "tags": []
                }
            },
            "show": {
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
                    "text": "Method to be called to show the notification component",
                    "tags": []
                }
            },
            "toast": {
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
                    "text": "This method can be used to display notifications in a fixed-position element that allows for stacking multiple notifications vertically",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "autoDismiss",
                "methodName": "handleTimeout"
            }, {
                "propName": "time",
                "methodName": "handleTimeout"
            }, {
                "propName": "open",
                "methodName": "handleOpenChange"
            }, {
                "propName": "type",
                "methodName": "checkPropValues"
            }];
    }
    static get listeners() {
        return [{
                "name": "bqAfterClose",
                "method": "afterNotificationClose",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=bq-notification.js.map
