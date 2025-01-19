/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { BUTTON_APPEARANCE, BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT, } from "./bq-button.types";
import { hasSlotContent, isClient, isDefined, isNil, validatePropValue } from "../../shared/utils";
/**
 * Buttons are designed for users to take action on a page or a screen.
 *
 * @example How to use it
 * ```html
 * <bq-button appearance="primary" border="m" size="medium">
 *   <bq-icon name="arrow-circle-left" slot="prefix"></bq-icon>
 *   Go back
 * </bq-button>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/286b43-buttons
 * @status stable
 *
 * @dependency bq-icon
 *
 * @attr {"primary" | "secondary" | "link" | "text"} appearance - The appearance style to apply to the button
 * @attr {boolean} block - If `true`, it will make the button fit to its parent width.
 * @attr {string} border - The corner radius of the button
 * @attr {boolean} disabled - If `true`, the button will be disabled (no interaction allowed)
 * @attr {string} download - Tells the browser to treat the linked URL as a download. Only used when `href` is set.
 * @attr {string} href - When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`
 * @attr {"left" | "center" | "right"} justify-content - It determinate how the content should be aligned
 * @attr {boolean} loading - If `true` it will display the button in a loading state
 * @attr {"small" | "medium" | "large"} size - The size of the button
 * @attr {"_blank" | "_parent" | "_self" | "_top"} target - Where to display the linked URL, as the name for a browsing context (a `tab`, `window`, or `<iframe>`)
 * @attr {"button" | "submit" | "reset"} type - The default behavior of the button
 * @attr {"standard" | "ghost" | "danger"} variant - The variant of button to apply on top of the appearance (applicable only to `appearance="primary"`)
 *
 * @event bqBlur - Handler to be called when the button loses focus
 * @event bqFocus - Handler to be called when button gets focus
 * @event bqClick - Handler to be called when the button is clicked
 *
 * @slot prefix - The prefix content to be displayed before the button label
 * @slot - The button label content
 * @slot suffix - The suffix content to be displayed after the button label
 *
 * @part button - The `<a>` or `<button>` HTML element used under the hood.
 * @part prefix - The `<span>` tag element that acts as prefix container.
 * @part label - The `<span>` tag element that renders the text of the button.
 * @part suffix - The `<span>` tag element that acts as suffix container.
 *
 * @cssprop --bq-button--border-color - Button border color
 * @cssprop --bq-button--border-radius - Button border radius
 * @cssprop --bq-button--border-style - Button border style
 * @cssprop --bq-button--border-width - Button border width
 * @cssprop --bq-button--small-height - Button small height
 * @cssprop --bq-button--small-paddingX - Button small padding block (top and bottom)
 * @cssprop --bq-button--small-paddingY - Button small padding inline (left and right)
 * @cssprop --bq-button--small-font-size - Button small font size
 * @cssprop --bq-button--medium-height - Button medium height
 * @cssprop --bq-button--medium-paddingX - Button medium padding block (top and bottom)
 * @cssprop --bq-button--medium-paddingY - Button medium padding inline (left and right)
 * @cssprop --bq-button--medium-font-size - Button medium font size
 * @cssprop --bq-button--large-height - Button large height
 * @cssprop --bq-button--large-paddingX - Button large padding block (top and bottom)
 * @cssprop --bq-button--large-paddingY - Button large padding inline (left and right)
 * @cssprop --bq-button--large-font-size - Button large font size
 */
export class BqButton {
    // Own Properties
    // ====================
    prefixElem;
    suffixElem;
    // Reference to host HTML element
    // ===================================
    el;
    internals;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasPrefix = false;
    hasSuffix = false;
    // Public Property API
    // ========================
    /** The appearance style to apply to the button */
    appearance = 'primary';
    /** If `true`, it will make the button fit to its parent width. */
    block = false;
    /** The corner radius of the button */
    border = 'm';
    /** If true, the button will be disabled (no interaction allowed) */
    disabled = false;
    /**
     * Tells the browser to treat the linked URL as a download. Only used when `href` is set.
     * Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download
     */
    download;
    /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>` */
    href;
    /** It determinate how the content should be aligned */
    justifyContent = 'center';
    /** If `true` it will display the button in a loading state */
    loading = false;
    /** The size of the button */
    size = 'medium';
    /**
     * Where to display the linked URL, as the name for a browsing context (a `tab`, `window`, or `<iframe>`)
     * Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
     */
    target;
    /** The default behavior of the button */
    type = 'button';
    /** The variant of button to apply on top of the appearance (applicable only to `appearance="primary"`) */
    variant = 'standard';
    // Prop lifecycle events
    // =======================
    checkPropValues() {
        validatePropValue(BUTTON_APPEARANCE, 'primary', this.el, 'appearance');
        validatePropValue(BUTTON_TYPE, 'button', this.el, 'type');
        validatePropValue(BUTTON_SIZE, 'medium', this.el, 'size');
        validatePropValue(BUTTON_VARIANT, 'standard', this.el, 'variant');
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when the button loses focus */
    bqBlur;
    /** Handler to be called when the button is clicked */
    bqFocus;
    /** Handler to be called when button gets focus */
    bqClick;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.checkPropValues();
    }
    // Listeners
    // ==============
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    handleBlur = () => {
        this.bqBlur.emit(this.el);
    };
    handleFocus = () => {
        this.bqFocus.emit(this.el);
    };
    handleClick = (ev) => {
        const { disabled, loading, bqClick, el } = this;
        if (disabled || loading) {
            this.preventEvent(ev);
            return;
        }
        const bqClickEvent = bqClick.emit(el);
        if (bqClickEvent.defaultPrevented) {
            this.preventEvent(ev);
            return;
        }
        this.handleFormAction();
    };
    handleFormAction() {
        const { type, internals: { form }, } = this;
        if (isNil(form))
            return;
        const formAction = this.formActions(form)[type];
        if (isNil(formAction))
            return;
        formAction();
    }
    formActions = (form) => ({
        submit: () => this.submitAssociatedForm(form),
        reset: () => form.reset(),
    });
    submitAssociatedForm = (form) => {
        if (!isClient() || isNil(form))
            return;
        const btn = document.createElement('button');
        btn.type = this.type;
        btn.hidden = true;
        form.append(btn);
        btn.click();
        btn.remove();
    };
    handleSlotChange = () => {
        this.hasPrefix = hasSlotContent(this.prefixElem, 'prefix');
        this.hasSuffix = hasSlotContent(this.suffixElem, 'suffix');
    };
    preventEvent(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const isLink = isDefined(this.href);
        const TagElem = isLink ? 'a' : 'button';
        const style = {
            ...(this.border && { '--bq-button--border-radius': `var(--bq-radius--${this.border})` }),
        };
        return (h(Host, { key: '691a9a18f1ec2c80443b13e3fdbca7261ad1ad2a', style: style }, h(TagElem, { key: '07230a7919e5d23aa2bebd3d9e9fc43f4b6adae5', class: {
                'bq-button': true,
                [`bq-button--${this.appearance}`]: true,
                [`content-${this.justifyContent}`]: true,
                [`${this.variant}`]: true,
                [`${this.size}`]: true,
                block: this.block,
                disabled: this.disabled,
                'has-prefix': this.hasPrefix,
                'has-suffix': this.hasSuffix,
                loading: this.loading,
            }, "aria-disabled": this.disabled ? 'true' : 'false', disabled: this.disabled, download: isLink ? this.download : undefined, href: isLink ? this.href : undefined, part: "button", rel: isLink && this.target ? 'noreferrer noopener' : undefined, target: isLink ? this.target : undefined, type: this.type, tabIndex: this.disabled ? -1 : 0, onBlur: this.handleBlur, onFocus: this.handleFocus, onClick: this.handleClick }, h("span", { key: '3ce2f07a5a4f0959bd362a42db2a54d53dbe0ebc', class: "bq-button__prefix", ref: (spanElem) => (this.prefixElem = spanElem), part: "prefix" }, h("slot", { key: '5267d704e596fdfe01cef5bac540bf011d6f8e8b', name: "prefix", onSlotchange: this.handleSlotChange })), h("span", { key: 'edb9e79a9b0de979905b0770c69e1b7161d9a7d7', class: "bq-button__label", part: "label" }, h("slot", { key: 'a4661e376f45337b2b3e02c0a8407670e71accb1' })), h("span", { key: '32d83a66a51c5c0daec70a5a3c009c270a0101c5', class: "bq-button__suffix", ref: (spanElem) => (this.suffixElem = spanElem), part: "suffix" }, h("slot", { key: '4e8cb788994ac9416c168f78dd898a6935fb634f', name: "suffix", onSlotchange: this.handleSlotChange })), this.loading && h("bq-icon", { key: 'a5b27ba3db912f9703850751902cef791116ffd9', class: "bq-button__loader", name: "spinner-gap" }))));
    }
    static get is() { return "bq-button"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-button.css"]
        };
    }
    static get properties() {
        return {
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TButtonAppearance",
                    "resolved": "\"link\" | \"primary\" | \"secondary\" | \"text\"",
                    "references": {
                        "TButtonAppearance": {
                            "location": "import",
                            "path": "./bq-button.types",
                            "id": "../../packages/beeq/src/components/button/bq-button.types.ts::TButtonAppearance"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The appearance style to apply to the button"
                },
                "getter": false,
                "setter": false,
                "attribute": "appearance",
                "reflect": true,
                "defaultValue": "'primary'"
            },
            "block": {
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
                    "text": "If `true`, it will make the button fit to its parent width."
                },
                "getter": false,
                "setter": false,
                "attribute": "block",
                "reflect": true,
                "defaultValue": "false"
            },
            "border": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TButtonBorderRadius",
                    "resolved": "\"full\" | \"l\" | \"m\" | \"none\" | \"s\" | \"xs\" | \"xs2\"",
                    "references": {
                        "TButtonBorderRadius": {
                            "location": "import",
                            "path": "./bq-button.types",
                            "id": "../../packages/beeq/src/components/button/bq-button.types.ts::TButtonBorderRadius"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The corner radius of the button"
                },
                "getter": false,
                "setter": false,
                "attribute": "border",
                "reflect": true,
                "defaultValue": "'m'"
            },
            "disabled": {
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
                    "text": "If true, the button will be disabled (no interaction allowed)"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "download": {
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
                    "text": "Tells the browser to treat the linked URL as a download. Only used when `href` is set.\nDetails: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download"
                },
                "getter": false,
                "setter": false,
                "attribute": "download",
                "reflect": false
            },
            "href": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`"
                },
                "getter": false,
                "setter": false,
                "attribute": "href",
                "reflect": true
            },
            "justifyContent": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'center' | 'right'",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "It determinate how the content should be aligned"
                },
                "getter": false,
                "setter": false,
                "attribute": "justify-content",
                "reflect": true,
                "defaultValue": "'center'"
            },
            "loading": {
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
                    "text": "If `true` it will display the button in a loading state"
                },
                "getter": false,
                "setter": false,
                "attribute": "loading",
                "reflect": false,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TButtonSize",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {
                        "TButtonSize": {
                            "location": "import",
                            "path": "./bq-button.types",
                            "id": "../../packages/beeq/src/components/button/bq-button.types.ts::TButtonSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the button"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'medium'"
            },
            "target": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'_blank' | '_parent' | '_self' | '_top'",
                    "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Where to display the linked URL, as the name for a browsing context (a `tab`, `window`, or `<iframe>`)\nDetails: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target"
                },
                "getter": false,
                "setter": false,
                "attribute": "target",
                "reflect": true
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TButtonType",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {
                        "TButtonType": {
                            "location": "import",
                            "path": "./bq-button.types",
                            "id": "../../packages/beeq/src/components/button/bq-button.types.ts::TButtonType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The default behavior of the button"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'button'"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TButtonVariant",
                    "resolved": "\"danger\" | \"ghost\" | \"standard\"",
                    "references": {
                        "TButtonVariant": {
                            "location": "import",
                            "path": "./bq-button.types",
                            "id": "../../packages/beeq/src/components/button/bq-button.types.ts::TButtonVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The variant of button to apply on top of the appearance (applicable only to `appearance=\"primary\"`)"
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": true,
                "defaultValue": "'standard'"
            }
        };
    }
    static get states() {
        return {
            "hasPrefix": {},
            "hasSuffix": {}
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
                    "text": "Handler to be called when the button loses focus"
                },
                "complexType": {
                    "original": "HTMLBqButtonElement",
                    "resolved": "HTMLBqButtonElement",
                    "references": {
                        "HTMLBqButtonElement": {
                            "location": "global",
                            "id": "global::HTMLBqButtonElement"
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
                    "text": "Handler to be called when the button is clicked"
                },
                "complexType": {
                    "original": "HTMLBqButtonElement",
                    "resolved": "HTMLBqButtonElement",
                    "references": {
                        "HTMLBqButtonElement": {
                            "location": "global",
                            "id": "global::HTMLBqButtonElement"
                        }
                    }
                }
            }, {
                "method": "bqClick",
                "name": "bqClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when button gets focus"
                },
                "complexType": {
                    "original": "HTMLBqButtonElement",
                    "resolved": "HTMLBqButtonElement",
                    "references": {
                        "HTMLBqButtonElement": {
                            "location": "global",
                            "id": "global::HTMLBqButtonElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "appearance",
                "methodName": "checkPropValues"
            }, {
                "propName": "type",
                "methodName": "checkPropValues"
            }, {
                "propName": "size",
                "methodName": "checkPropValues"
            }, {
                "propName": "variant",
                "methodName": "checkPropValues"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=bq-button.js.map
