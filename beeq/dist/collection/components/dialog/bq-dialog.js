/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { DIALOG_FOOTER_APPEARANCE, DIALOG_SIZE, } from "./bq-dialog.types";
import { enter, hasSlotContent, leave, validatePropValue } from "../../shared/utils";
/**
 * The Dialog component is used to display additional content or prompt a user for action.
 * It provides a way to display additional information, options, or controls in a separate, non-obstructive interface element.
 *
 * @example How to use it
 * ```html
 * <bq-dialog footer-appearance="standard" border="m" size="medium">
 *   <h5 class="bold flex items-center gap-s" slot="title">
 *     <bq-icon name="info" size="30" color="text--accent" role="img" title="Info"></bq-icon>
 *     Title
 *   </h5>
 *   <p>
 *     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
 *     standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
 *     type specimen book.
 *   </p>
 *   <div class="flex gap-xs" slot="footer">
 *     <bq-button appearance="link">Button</bq-button>
 *     <bq-button variant="ghost">Button</bq-button>
 *     <bq-button variant="standard" slot="footer">Button</bq-button>
 *   </div>
 * </bq-dialog>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/15b6fc-dialog
 * @status stable
 *
 * @dependency bq-button
 * @dependency bq-icon
 *
 * @attr {"none" | "xs2" | "xs" | "s" | "m" | "l" | "full"} border - Border radius of the dialog component.
 * @attr {boolean} disable-backdrop - If true, the backdrop overlay won't be shown when the dialog opens.
 * @attr {boolean} disable-close-esc-keydown - If true, the dialog will not close when the [Esc] key is pressed.
 * @attr {boolean} disable-close-click-outside - If true, the dialog will not close when clicking on the backdrop overlay.
 * @attr {"standard" | "highlight"} footer-appearance - The appearance of the footer.
 * @attr {boolean} hide-close-button - If true, it hides the close button.
 * @attr {boolean} open - If true, the dialog will be shown as open.
 * @attr {"small" | "medium" | "large"} size - The size of the dialog.
 *
 * @method show - Open the dialog.
 * @method hide - Closes the dialog.
 * @method cancel - Dismiss or cancel the dialog.
 *
 * @event bqCancel - Callback handler emitted when the dialog has been canceled or dismissed.
 * @event bqClose - Callback handler emitted when the dialog will close.
 * @event bqOpen - Callback handler emitted when the dialog will open.
 * @event bqAfterOpen - Callback handler emitted when the dialog finish opening.
 * @event bqAfterClose - Callback handler emitted when the dialog finish closing.
 *
 * @slot title - The title content of the dialog.
 * @slot - The body content of the dialog.
 * @slot footer - The footer content of the dialog.
 * @slot button-close - The close button content of the dialog.
 *
 * @part body - The `<main>` that holds the dialog body content.
 * @part button-close - The button that closes the dialog on click.
 * @part content - The `<div>` container that holds the dialog title and body content.
 * @part dialog - The `<dialog>` wrapper container inside the shadow DOM.
 * @part footer - The `<footer>` that holds footer content.
 * @part header - The `<header>` that holds the icon, title, description and close button.
 * @part title - The `<div>` that holds the title content.
 *
 * @cssprop --bq-dialog--background - Dialog background color
 * @cssprop --bq-dialog--background-backdrop - Dialog backdrop background color
 * @cssprop --bq-dialog--box-shadow - Dialog box shadow
 * @cssprop --bq-dialog--border-color - Dialog border color
 * @cssprop --bq-dialog--border-style - Dialog border style
 * @cssprop --bq-dialog--border-width - Dialog border width
 * @cssprop --bq-dialog--border-radius - Dialog border radius
 * @cssprop --bq-dialog--padding - Dialog padding
 * @cssprop --bq-dialog--content-footer-gap - Dialog gap distance between content and footer elements
 * @cssprop --bq-dialog--title-body-gap - Dialog gap distance between title and body elements
 * @cssprop --bq-dialog--width-small - Dialog small width
 * @cssprop --bq-dialog--width-medium - Dialog medium width
 * @cssprop --bq-dialog--width-large - Dialog large width
 * @cssprop --bq-dialog-z-index - Dialog z-index applied when opened
 */
export class BqDialog {
    // Own Properties
    // ====================
    dialogElem;
    contentElem;
    footerElem;
    closeSlotElem;
    OPEN_CSS_CLASS = 'bq-dialog--open';
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
    /** Border radius of the dialog component */
    border = 'm';
    /** If true, the backdrop overlay won't be shown when the dialog opens */
    disableBackdrop = false;
    /** If true, the dialog will not close when the [Esc] key is press */
    disableCloseEscKeydown = false;
    /** If true, the dialog will not close when clicking on the backdrop overlay */
    disableCloseClickOutside = false;
    /** The appearance of footer */
    footerAppearance = 'standard';
    /** If true, it hides the close button */
    hideCloseButton = false;
    /** If true, the dialog will be shown as open */
    open = false;
    /** The size of the dialog */
    size = 'medium';
    // Prop lifecycle events
    // =======================
    checkPropValues() {
        validatePropValue(DIALOG_SIZE, 'large', this.el, 'size');
        validatePropValue(DIALOG_FOOTER_APPEARANCE, 'standard', this.el, 'footerAppearance');
    }
    async handleOpenChange() {
        if (this.open) {
            await this.handleOpen();
            return;
        }
        await this.handleClose();
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler emitted when the dialog has been canceled or dismissed */
    bqCancel;
    /** Callback handler emitted when the dialog will close */
    bqClose;
    /** Callback handler emitted when the dialog will open */
    bqOpen;
    /** Callback handler emitted when the dialog finish opening */
    bqAfterOpen;
    /** Callback handler emitted when the dialog finish closing */
    bqAfterClose;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.checkPropValues();
    }
    componentDidLoad() {
        this.handleOpenChange();
        this.closeSlotElem = this.el.shadowRoot.querySelector('slot[name="button-close"]');
        this.closeSlotElem?.addEventListener('click', () => this.hide());
    }
    disconnectedCallback() {
        this.closeSlotElem?.removeEventListener('click', () => this.hide());
    }
    // Listeners
    // ==============
    async handleMouseClick(event) {
        if (!this.open)
            return;
        if (!this.dialogElem || this.disableCloseClickOutside)
            return;
        // Skip if the mouse button is not the main button
        if (event.button !== 0)
            return;
        const rect = this.dialogElem.getBoundingClientRect();
        if (event.clientY < rect.top ||
            event.clientY > rect.bottom ||
            event.clientX < rect.left ||
            event.clientX > rect.right) {
            await this.cancel();
        }
    }
    async handleKeyDown(ev) {
        const isEscapeKey = ev.key === 'Escape' || ev.key === 'Esc';
        if (!this.open || !this.dialogElem || !isEscapeKey)
            return;
        if (this.disableCloseEscKeydown) {
            ev.preventDefault();
            return;
        }
        await this.cancel();
    }
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    /** Open the dialog */
    async show() {
        const ev = this.bqOpen.emit();
        if (ev.defaultPrevented)
            return;
        this.open = true;
    }
    /** Closes the dialog */
    async hide() {
        const ev = this.bqClose.emit();
        if (ev.defaultPrevented)
            return;
        this.open = false;
    }
    /** Dismiss or cancel the dialog */
    async cancel() {
        const ev = this.bqCancel.emit();
        if (ev.defaultPrevented)
            return;
        this.open = false;
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    handleClose = async () => {
        if (!this.dialogElem)
            return;
        await leave(this.dialogElem);
        this.dialogElem.close();
        // Emit bqAfterClose event after the dialog is closed
        this.handleTransitionEnd();
    };
    handleOpen = async () => {
        if (!this.dialogElem)
            return;
        this.el.classList.add(this.OPEN_CSS_CLASS);
        // Show the dialog
        if (this.disableBackdrop) {
            this.dialogElem.show();
        }
        else {
            this.dialogElem.showModal();
        }
        await enter(this.dialogElem);
        // Emit bqAfterOpen event after the dialog is opened
        this.handleTransitionEnd();
    };
    handleTransitionEnd = () => {
        if (this.open) {
            this.bqAfterOpen.emit();
            return;
        }
        this.bqAfterClose.emit();
        this.el.classList.remove(this.OPEN_CSS_CLASS);
    };
    handleContentSlotChange = () => {
        this.hasContent = hasSlotContent(this.contentElem);
    };
    handleFooterSlotChange = () => {
        this.hasFooter = hasSlotContent(this.footerElem, 'footer');
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const style = {
            ...(this.border && { '--bq-dialog--border-radius': `var(--bq-radius--${this.border})` }),
        };
        return (h("dialog", { key: '3f38f35b48ef75ca7aff533074fcf26abfa36643', style: style, class: {
                [`bq-dialog hidden ${this.size} m-auto focus-visible:outline-none`]: true,
                'inset-be-[50%] inset-bs-[50%]': this.disableBackdrop,
            }, "data-transition-enter": "transition ease-in duration-300", "data-transition-enter-start": "opacity-0 scale-90", "data-transition-enter-end": "opacity-100 scale-100", "data-transition-leave": "transition ease-out duration-300", "data-transition-leave-start": "opacity-100 scale-100", "data-transition-leave-end": "opacity-0 scale-90", inert: this.open ? undefined : true, ref: (dialogElem) => (this.dialogElem = dialogElem), "aria-modal": "true", "aria-labelledby": "bq-dialog--title", part: "dialog" }, h("main", { key: '4a4cb49b1bf127f823a8e0f0198ab29231d16eb0', class: "flex flex-col gap-[--bq-dialog--title-body-gap] overflow-hidden", part: "content" }, h("header", { key: 'a63e17d4551a58cfbe616411aac322fc5b151b79', class: "bq-dialog--header", part: "header" }, h("div", { key: '8f50b0bf80aa2445cfa9c9c2a81c87c17d0678b3', id: "bq-dialog--title", class: "bq-dialog--title flex flex-1 items-center justify-between", part: "title" }, h("slot", { key: '83bee9eca7bc92e5a4b86bca51c97b6d720dbf51', name: "title" })), h("slot", { key: 'ec8341464b7f9471ae59856c48c7cadc944bbf20', name: "button-close" }, !this.hideCloseButton && (h("bq-button", { key: '4ca88b5b29230c5918e3b3a6970356a7324f4f9b', class: "bq-dialog--close", appearance: "text", size: "small" }, h("bq-icon", { key: '234e2ec020ca79e4aee1266524552dc0481541e7', class: "cursor-pointer", name: "x", role: "img", title: "Close" }))))), h("div", { key: 'e578bf30f50a50c6896aab77827bddf9e1c76ba4', class: {
                '!hidden': !this.hasContent,
                'overflow-y-auto p-i-[--bq-dialog--padding]': this.hasContent,
                '!p-be-[--bq-dialog--padding]': !this.hasFooter,
            }, ref: (mainElem) => (this.contentElem = mainElem), part: "body" }, h("slot", { key: '41fac7ca6931b57227a2008902b808735d9f9bf4', onSlotchange: this.handleContentSlotChange }))), h("footer", { key: '88bd4a6e8a604af80269055b7c6714ef87686f52', class: {
                '!hidden': !this.hasFooter,
                'bq-dialog--footer': this.hasFooter,
                'bg-ui-alt !p-b-s': this.footerAppearance === 'highlight',
            }, ref: (footerElem) => (this.footerElem = footerElem), part: "footer" }, h("slot", { key: 'ffb93e91b74020b55301742a008dfa8b4989d8d8', name: "footer", onSlotchange: this.handleFooterSlotChange }))));
    }
    static get is() { return "bq-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-dialog.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-dialog.css"]
        };
    }
    static get properties() {
        return {
            "border": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TDialogBorderRadius",
                    "resolved": "\"full\" | \"l\" | \"m\" | \"none\" | \"s\" | \"xs\" | \"xs2\"",
                    "references": {
                        "TDialogBorderRadius": {
                            "location": "import",
                            "path": "./bq-dialog.types",
                            "id": "../../packages/beeq/src/components/dialog/bq-dialog.types.ts::TDialogBorderRadius"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Border radius of the dialog component"
                },
                "getter": false,
                "setter": false,
                "attribute": "border",
                "reflect": true,
                "defaultValue": "'m'"
            },
            "disableBackdrop": {
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
                    "text": "If true, the backdrop overlay won't be shown when the dialog opens"
                },
                "getter": false,
                "setter": false,
                "attribute": "disable-backdrop",
                "reflect": true,
                "defaultValue": "false"
            },
            "disableCloseEscKeydown": {
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
                    "text": "If true, the dialog will not close when the [Esc] key is press"
                },
                "getter": false,
                "setter": false,
                "attribute": "disable-close-esc-keydown",
                "reflect": true,
                "defaultValue": "false"
            },
            "disableCloseClickOutside": {
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
                    "text": "If true, the dialog will not close when clicking on the backdrop overlay"
                },
                "getter": false,
                "setter": false,
                "attribute": "disable-close-click-outside",
                "reflect": true,
                "defaultValue": "false"
            },
            "footerAppearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TDialogFooterAppearance",
                    "resolved": "\"highlight\" | \"standard\"",
                    "references": {
                        "TDialogFooterAppearance": {
                            "location": "import",
                            "path": "./bq-dialog.types",
                            "id": "../../packages/beeq/src/components/dialog/bq-dialog.types.ts::TDialogFooterAppearance"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The appearance of footer"
                },
                "getter": false,
                "setter": false,
                "attribute": "footer-appearance",
                "reflect": true,
                "defaultValue": "'standard'"
            },
            "hideCloseButton": {
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
                    "text": "If true, it hides the close button"
                },
                "getter": false,
                "setter": false,
                "attribute": "hide-close-button",
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
                    "text": "If true, the dialog will be shown as open"
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TDialogSize",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {
                        "TDialogSize": {
                            "location": "import",
                            "path": "./bq-dialog.types",
                            "id": "../../packages/beeq/src/components/dialog/bq-dialog.types.ts::TDialogSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the dialog"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'medium'"
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
                "method": "bqCancel",
                "name": "bqCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler emitted when the dialog has been canceled or dismissed"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bqClose",
                "name": "bqClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler emitted when the dialog will close"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bqOpen",
                "name": "bqOpen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler emitted when the dialog will open"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
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
                    "text": "Callback handler emitted when the dialog finish opening"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
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
                    "text": "Callback handler emitted when the dialog finish closing"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
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
                    "text": "Open the dialog",
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
                    "text": "Closes the dialog",
                    "tags": []
                }
            },
            "cancel": {
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
                    "text": "Dismiss or cancel the dialog",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "footerAppearance",
                "methodName": "checkPropValues"
            }, {
                "propName": "size",
                "methodName": "checkPropValues"
            }, {
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "mousedown",
                "method": "handleMouseClick",
                "target": "window",
                "capture": true,
                "passive": true
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": "window",
                "capture": true,
                "passive": false
            }];
    }
}
//# sourceMappingURL=bq-dialog.js.map
