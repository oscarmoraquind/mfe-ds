/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { TOAST_PLACEMENT, TOAST_TYPE } from "./bq-toast.types";
import { debounce, isClient, validatePropValue } from "../../shared/utils";
const TOAST_PORTAL_SELECTOR = 'bq-toast-portal';
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
export class BqToast {
    // Own Properties
    // ====================
    autoDismissDebounce;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    toastPortal = isClient() ? document.querySelector(`.${TOAST_PORTAL_SELECTOR}`) : null;
    // Public Property API
    // ========================
    /** The corder radius of the toast component */
    border = 's';
    /** Type of toast */
    type = 'info';
    /** Placement of toast */
    placement = 'bottom-center';
    /** If true will hide toast icon */
    hideIcon = false;
    /** If true, the toast will be shown */
    open;
    /** The length of time, in milliseconds, after which the toast will close itself */
    time = 3000;
    // Prop lifecycle events
    // =======================
    checkPropValues() {
        validatePropValue(TOAST_TYPE, 'default', this.el, 'type');
        validatePropValue(TOAST_PLACEMENT, 'bottom-center', this.el, 'placement');
        const { toastPortal } = this;
        toastPortal?.classList.remove(...TOAST_PLACEMENT);
        toastPortal?.classList.add(this.placement);
    }
    handleTimeChange() {
        this.autoDismissDebounce?.cancel();
        this.time = Math.max(0, this.time);
        this.autoDismissDebounce = debounce(() => {
            this.hide();
        }, this.time);
    }
    handleOpenChange() {
        this.autoDismissDebounce?.cancel();
        if (this.open) {
            this.autoDismissDebounce?.();
        }
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler to be called when the notification is hidden */
    bqHide;
    /** Callback handler to be called when the notification is shown */
    bqShow;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    connectedCallback() {
        if (!isClient())
            return;
        const { toastPortal } = this;
        if (!toastPortal) {
            this.toastPortal = Object.assign(document.createElement('div'), { className: TOAST_PORTAL_SELECTOR });
        }
    }
    componentWillLoad() {
        this.checkPropValues();
        this.handleTimeChange();
        this.handleOpenChange();
    }
    disconnectedCallback() {
        this.autoDismissDebounce?.cancel();
    }
    // Listeners
    // ==============
    onNotificationHide() {
        try {
            const { toastPortal } = this;
            toastPortal?.removeChild(this.el);
            // Remove the toast portal from the DOM when there are no more toasts
            if (toastPortal?.querySelector(this.el.tagName.toLowerCase()) === null) {
                toastPortal?.remove();
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
    /** Method to be called to show the toast component */
    async show() {
        this.handleShow();
    }
    /** Method to be called to hide the toast component */
    async hide() {
        this.handleHide();
    }
    /** This method can be used to display toasts in a fixed-position element that allows for stacking multiple toasts vertically */
    async toast() {
        if (!isClient())
            return;
        const { toastPortal } = this;
        if (toastPortal?.parentElement === null) {
            document.body.append(toastPortal);
        }
        toastPortal?.appendChild(this.el);
        requestAnimationFrame(() => {
            this.show();
        });
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    handleShow = () => {
        const ev = this.bqShow.emit(this.el);
        if (!ev.defaultPrevented) {
            this.open = true;
        }
    };
    handleHide = () => {
        const ev = this.bqHide.emit(this.el);
        if (!ev.defaultPrevented) {
            this.open = false;
        }
    };
    get iconName() {
        const typeMap = {
            success: 'check-circle-bold',
            error: 'x-circle-bold',
            loading: 'spinner-gap-bold',
            alert: 'warning-bold',
            info: 'info-bold',
        };
        return typeMap[this.type] || 'info-bold';
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const style = {
            ...(this.border && { '--bq-toast--border-radius': `var(--bq-radius--${this.border})` }),
        };
        return (h(Host, { key: 'f7a611330df56aa070f87d80974d010233b47528', style: style, class: { 'is-hidden': !this.open }, "aria-hidden": !this.open ? 'true' : 'false', hidden: !this.open ? 'true' : 'false', role: "status" }, h("output", { key: '92fe0a77c1dc3e8fdf0cc2776ff7da7db4beb298', class: "bq-toast", part: "wrapper" }, h("div", { key: '3354198b0aca7d13bce77c1bbeed798eac8ae228', class: { [`bq-toast--icon ${this.type}`]: true, '!hidden': this.hideIcon }, part: "icon" }, h("slot", { key: 'c9c4ef34dadc4da02a0a969b87c493f65207ce6f', name: "icon" }, h("bq-icon", { key: '05d0a5f46f1ca3d844698a746619500fc939423b', name: this.iconName, size: "24", slot: "icon", exportparts: "base,svg" }))), h("slot", { key: '41e7f87c3ede17b83e7b19bab1af5d2740bc5332' }))));
    }
    static get is() { return "bq-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-toast.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-toast.css"]
        };
    }
    static get properties() {
        return {
            "border": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TToastBorderRadius",
                    "resolved": "\"full\" | \"l\" | \"m\" | \"none\" | \"s\" | \"xs\" | \"xs2\"",
                    "references": {
                        "TToastBorderRadius": {
                            "location": "import",
                            "path": "./bq-toast.types",
                            "id": "../../packages/beeq/src/components/toast/bq-toast.types.ts::TToastBorderRadius"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The corder radius of the toast component"
                },
                "getter": false,
                "setter": false,
                "attribute": "border",
                "reflect": true,
                "defaultValue": "'s'"
            },
            "type": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TToastType",
                    "resolved": "\"alert\" | \"custom\" | \"error\" | \"info\" | \"loading\" | \"success\"",
                    "references": {
                        "TToastType": {
                            "location": "import",
                            "path": "./bq-toast.types",
                            "id": "../../packages/beeq/src/components/toast/bq-toast.types.ts::TToastType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of toast"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'info'"
            },
            "placement": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TToastPlacement",
                    "resolved": "\"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"top-center\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "TToastPlacement": {
                            "location": "import",
                            "path": "./bq-toast.types",
                            "id": "../../packages/beeq/src/components/toast/bq-toast.types.ts::TToastPlacement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placement of toast"
                },
                "getter": false,
                "setter": false,
                "attribute": "placement",
                "reflect": true,
                "defaultValue": "'bottom-center'"
            },
            "hideIcon": {
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
                    "text": "If true will hide toast icon"
                },
                "getter": false,
                "setter": false,
                "attribute": "hide-icon",
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the toast will be shown"
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
                    "text": "The length of time, in milliseconds, after which the toast will close itself"
                },
                "getter": false,
                "setter": false,
                "attribute": "time",
                "reflect": true,
                "defaultValue": "3000"
            }
        };
    }
    static get states() {
        return {
            "toastPortal": {}
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
                    "original": "HTMLBqToastElement",
                    "resolved": "HTMLBqToastElement",
                    "references": {
                        "HTMLBqToastElement": {
                            "location": "global",
                            "id": "global::HTMLBqToastElement"
                        }
                    }
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
                    "original": "HTMLBqToastElement",
                    "resolved": "HTMLBqToastElement",
                    "references": {
                        "HTMLBqToastElement": {
                            "location": "global",
                            "id": "global::HTMLBqToastElement"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
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
                    "text": "Method to be called to show the toast component",
                    "tags": []
                }
            },
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
                    "text": "Method to be called to hide the toast component",
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
                    "text": "This method can be used to display toasts in a fixed-position element that allows for stacking multiple toasts vertically",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "type",
                "methodName": "checkPropValues"
            }, {
                "propName": "placement",
                "methodName": "checkPropValues"
            }, {
                "propName": "time",
                "methodName": "handleTimeChange"
            }, {
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "bqHide",
                "method": "onNotificationHide",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=bq-toast.js.map
