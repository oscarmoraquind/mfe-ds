/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { ALERT_TYPE } from "./bq-alert.types";
import { debounce, enter, hasSlotContent, leave, validatePropValue } from "../../shared/utils";
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
export class BqAlert {
    // Own Properties
    // ====================
    autoDismissDebounce;
    bodyElem;
    footerElem;
    alertElement;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasContent = false;
    hasFooter = false;
    // Public Property API
    // ========================
    /** If true, the alert will automatically hide after the specified amount of time */
    autoDismiss;
    /** The corner radius of the alert component */
    border = 's';
    /** If true, the close button at the top right of the alert won't be shown */
    disableClose;
    /** If true, the alert icon won't be shown */
    hideIcon;
    /** If true, the alert will be shown */
    open;
    /** The length of time, in milliseconds, after which the alert will close itself. Only valid if `autoDismiss="true"` */
    time = 3000;
    /** Type of Alert */
    type = 'default';
    /** If true, the alert component will remain fixed at the top of the page, occupying the full viewport */
    sticky;
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
        if (!this.open) {
            this.handleHide();
            return;
        }
        this.handleShow();
        if (this.autoDismiss) {
            this.autoDismissDebounce();
        }
    }
    checkPropValues() {
        validatePropValue(ALERT_TYPE, 'info', this.el, 'type');
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler to be called when the alert is hidden */
    bqHide;
    /** Callback handler to be called when the alert is shown */
    bqShow;
    /** Callback handler to be called after the alert has been shown */
    bqAfterShow;
    /** Callback handler to be called after the alert has been hidden */
    bqAfterHide;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.checkPropValues();
        this.handleTimeout();
    }
    componentDidLoad() {
        if (!this.open) {
            this.el.classList.add('is-hidden');
        }
    }
    // Listeners
    // ==============
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    /** Method to be called to hide the alert component */
    async hide() {
        this.open = false;
    }
    /** Method to be called to show the alert component */
    async show() {
        this.open = true;
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    handleHide = async () => {
        const ev = this.bqHide.emit(this.el);
        if (!ev.defaultPrevented) {
            await leave(this.alertElement);
            this.el.classList.add('is-hidden');
            this.handleTransitionEnd();
        }
    };
    handleShow = async () => {
        const ev = this.bqShow.emit(this.el);
        if (!ev.defaultPrevented) {
            this.el.classList.remove('is-hidden');
            await enter(this.alertElement);
            this.handleTransitionEnd();
        }
    };
    handleTransitionEnd = () => {
        if (this.open) {
            this.bqAfterShow.emit();
            return;
        }
        this.bqAfterHide.emit();
    };
    handleContentSlotChange = () => {
        this.hasContent = hasSlotContent(this.bodyElem, 'body');
    };
    handleFooterSlotChange = () => {
        this.hasFooter = hasSlotContent(this.footerElem, 'footer');
    };
    get iconName() {
        const iconName = {
            error: 'x-circle',
            success: 'check-circle',
            warning: 'warning-circle',
        };
        return iconName[this.type] || 'info';
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const style = {
            ...(this.border && { '--bq-alert--border-radius': `var(--bq-radius--${this.border})` }),
        };
        return (h(Host, { key: 'ba81c40c623b8813b96503aab180455053236029', style: style, class: { 'is-sticky': this.sticky }, "aria-hidden": !this.open ? 'true' : 'false', hidden: !this.open ? 'true' : 'false', role: "alert" }, h("div", { key: 'e9a90a6205edb7f661728e366a73680ef492cf3d', class: {
                [`bq-alert bq-alert__${this.type}`]: true,
                'is-sticky': this.sticky,
            }, "data-transition-enter": "transition ease-out duration-300", "data-transition-enter-start": "opacity-0", "data-transition-enter-end": "opacity-100", "data-transition-leave": "transition ease-in duration-200", "data-transition-leave-start": "opacity-100", "data-transition-leave-end": "opacity-0", ref: (div) => (this.alertElement = div), part: "wrapper" }, !this.disableClose && (h("bq-button", { key: 'bc29165d0f6603d5fc936f077030261fd5fdc65c', class: "bq-alert__close absolute end-5 focus-visible:focus [&::part(label)]:inline-flex", appearance: "text", size: "small", onClick: this.hide.bind(this), part: "btn-close" }, h("slot", { key: '6587b53fd3ad40f3630fad2895192fcfd99d0145', name: "btn-close" }, h("bq-icon", { key: '956d585d7db26ff83c166bdc70e7bc5d4e044a2f', name: "x" })))), h("div", { key: '9dba243e51caa31237f4c791720bd9476fe0a7c4', class: {
                [`bq-alert__icon--${this.type} me-s flex text-left align-top`]: true,
                '!hidden': this.hideIcon,
            }, part: "icon-outline" }, h("slot", { key: 'c91e7e1bb29d562146d090e773183467d4b260fa', name: "icon" }, this.type !== 'default' && h("bq-icon", { key: '2231173a924fb917d82517d5ab1f3363c981d029', name: this.iconName, part: "icon", exportparts: "base,svg" }))), h("div", { key: 'f52fab748c03ebb22f41373380168d1a67f06955', class: "flex flex-col items-start gap-[--bq-alert--content-footer-gap]", part: "main" }, h("div", { key: 'f2ade8ab014acc325d8de245b3173aa5ed8c13c8', class: "flex flex-col gap-[--bq-alert--title-body-gap]", part: "content" }, h("div", { key: '602b234de71a83a48198c3d2df7783a8fce561db', class: {
                'title-font font-semibold leading-regular text-primary': true,
                'flex items-center': this.sticky,
            }, part: "title" }, h("slot", { key: '13170cbc4408ef6591b6ab35771f1b622b475a50' })), h("div", { key: 'cbb21abb4e760dbb46e9c8d65a8bd522185c1af2', class: { 'text-s leading-regular': true, '!hidden': !this.hasContent }, ref: (div) => (this.bodyElem = div), part: "body" }, h("slot", { key: 'e254f7086d42d484248a71d0808e0cba68994bbf', name: "body", onSlotchange: this.handleContentSlotChange }))), h("div", { key: '7b6d602dcc8a7d65307c8b584b67881f33c1478f', class: { 'flex items-start gap-xs': true, '!hidden': !this.hasFooter }, ref: (div) => (this.footerElem = div), part: "footer" }, h("slot", { key: '85e139bc03a735e061c1dc9039552875e8d0b40b', name: "footer", onSlotchange: this.handleFooterSlotChange }))))));
    }
    static get is() { return "bq-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-alert.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-alert.css"]
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
                    "text": "If true, the alert will automatically hide after the specified amount of time"
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
                    "original": "TAlertBorderRadius",
                    "resolved": "\"full\" | \"l\" | \"m\" | \"none\" | \"s\" | \"xs\" | \"xs2\"",
                    "references": {
                        "TAlertBorderRadius": {
                            "location": "import",
                            "path": "./bq-alert.types",
                            "id": "../../packages/beeq/src/components/alert/bq-alert.types.ts::TAlertBorderRadius"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The corner radius of the alert component"
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
                    "text": "If true, the close button at the top right of the alert won't be shown"
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
                    "text": "If true, the alert icon won't be shown"
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
                    "text": "If true, the alert will be shown"
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
                    "text": "The length of time, in milliseconds, after which the alert will close itself. Only valid if `autoDismiss=\"true\"`"
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
                    "original": "TAlertType",
                    "resolved": "\"default\" | \"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "TAlertType": {
                            "location": "import",
                            "path": "./bq-alert.types",
                            "id": "../../packages/beeq/src/components/alert/bq-alert.types.ts::TAlertType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of Alert"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'default'"
            },
            "sticky": {
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
                    "text": "If true, the alert component will remain fixed at the top of the page, occupying the full viewport"
                },
                "getter": false,
                "setter": false,
                "attribute": "sticky",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "hasContent": {},
            "hasFooter": {}
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
                    "text": "Callback handler to be called when the alert is hidden"
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
                    "text": "Callback handler to be called when the alert is shown"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bqAfterShow",
                "name": "bqAfterShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called after the alert has been shown"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bqAfterHide",
                "name": "bqAfterHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called after the alert has been hidden"
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
                    "text": "Method to be called to hide the alert component",
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
                    "text": "Method to be called to show the alert component",
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
}
//# sourceMappingURL=bq-alert.js.map
