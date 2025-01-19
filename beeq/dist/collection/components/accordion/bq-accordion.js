/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { ACCORDION_APPEARANCE, ACCORDION_SIZE } from "./bq-accordion.types";
import { Accordion } from "./helper";
import { hasSlotContent, validatePropValue } from "../../shared/utils";
/**
 * The Accordion is a UI component that allows users to toggle between showing and hiding content sections. It provides a collapsible functionality, where only one section can be expanded at a time, while the others remain collapsed.
 *
 * @example How to use it
 * ```html
 * <bq-accordion appearance="filled" size="medium">
 *   <bq-avatar size="xsmall" image="/image/url/img.png" slot="prefix"></bq-avatar>
 *   <h3 slot="header">Header</h3>
 *   <div>Lorem ipsum dolor...</div>
 * </bq-accordion>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/713eae-accordion
 * @status stable
 *
 * @dependency bq-icon
 *
 * @attr {"filled" | "ghost"} [appearance="filled"] - The appearance style of the Accordion
 * @attr {boolean} [disabled=false] - If true, the Accordion is disabled
 * @attr {boolean} [expanded=false] - If true, the Accordion is expanded
 * @attr {boolean} [no-animation=false] - Animation is set through JS when the browser does not support CSS calc-size() If true, the Accordion animation, will be disabled. No animation will be applied.
 * @attr {boolean} [rotate=false] - If true, the Accordion expand icon is rotate 180deg when expanded
 * @attr {"small" | "medium"} [size="medium"] - The size of the the Accordion
 *
 * @event bqOpen - Handler to be called when the accordion is opened
 * @event bqAfterOpen - Handler to be called after the accordion is opened
 * @event bqClose - Handler to be called when the accordion is closed
 * @event bqAfterClose - Handler to be called after the accordion is closed
 * @event bqFocus - Handler to be called when the accordion gets focus
 * @event bqClick - Handler to be called when the accordion is clicked
 * @event bqBlur - Handler to be called when the accordion loses focus
 *
 * @slot - The accordion panel content
 * @slot collapse - The accordion collapse icon
 * @slot expand - The accordion expand icon
 * @slot header - The accordion header content
 * @slot prefix - The accordion prefix content (icon or avatar)
 * @slot suffix - The accordion suffix content (icon or avatar)
 *
 * @part base - The `<details>` that holds the accordion content
 * @part header - The `<summary>` that holds the accordion header content
 * @part panel - The `<div>` that holds the accordion panel content
 * @part prefix - The `<div>` that holds the accordion prefix content
 * @part suffix - The `<div>` that holds the accordion suffix content
 * @part text - The `<div>` that holds the accordion header text content
 *
 * @cssprop --bq-accordion--small-padding-y - Accordion small vertical padding
 * @cssprop --bq-accordion--small-padding-start - Accordion small start padding
 * @cssprop --bq-accordion--small-padding-end - Accordion small end padding
 * @cssprop --bq-accordion--small-padding-gap - Accordion small gap distance between suffix, title and prefix
 * @cssprop --bq-accordion--small-radius - Accordion small border radius
 *
 * @cssprop --bq-accordion--medium-padding-y - Accordion medium vertical padding
 * @cssprop --bq-accordion--medium-padding-start - Accordion medium start padding
 * @cssprop --bq-accordion--medium-padding-end - Accordion medium end padding
 * @cssprop --bq-accordion--medium-padding-gap - Accordion medium gap distance between suffix, title and prefix
 * @cssprop --bq-accordion--medium-radius - Accordion medium border radius
 *
 * @cssprop --bq-accordion--collapsed-border-color - Accordion collapsed border color
 * @cssprop --bq-accordion--collapsed-border-style - Accordion collapsed border style
 * @cssprop --bq-accordion--collapsed-border-width - Accordion collapsed border width
 *
 * @cssprop --bq-accordion--expanded-border-color - Accordion expanded border color
 * @cssprop --bq-accordion--expanded-border-style - Accordion expanded border style
 * @cssprop --bq-accordion--expanded-border-width - Accordion expanded border width
 *
 * @cssprop --bq-accordion--filled-collapsed-background - Accordion filled collapsed header background
 * @cssprop --bq-accordion--filled-collapsed-text-color - Accordion filled collapsed header text color
 * @cssprop --bq-accordion--filled-expanded-background - Accordion filled expanded header background
 * @cssprop --bq-accordion--filled-expanded-collapsed-hover - Accordion filled expanded header color on hover
 * @cssprop --bq-accordion--filled-expanded-text-color - Accordion filled expanded header text color
 *
 * @cssprop --bq-accordion--ghost-collapsed-background - Accordion ghost collapsed header background
 * @cssprop --bq-accordion--ghost-collapsed-text-color - Accordion ghost collapsed header text color
 * @cssprop --bq-accordion--ghost-expanded-background - Accordion ghost expanded header background
 * @cssprop --bq-accordion--ghost-expanded-collapsed-hover - Accordion ghost expanded header color on hover
 * @cssprop --bq-accordion--ghost-expanded-text-color - Accordion ghost expanded header text color
 *
 * @cssprop --bq-accordion--panel-filled-border-color - Accordion filled panel border color
 * @cssprop --bq-accordion--panel-filled-border-style - Accordion filled panel border style
 * @cssprop --bq-accordion--panel-filled-border-width - Accordion filled panel border width
 * @cssprop --bq-accordion--panel-small-filled-padding-y - Accordion small filled panel vertical padding
 * @cssprop --bq-accordion--panel-small-filled-padding-start - Accordion small filled panel start padding
 * @cssprop --bq-accordion--panel-small-filled-padding-end - Accordion small filled panel end padding
 * @cssprop --bq-accordion--panel-medium-filled-padding-y - Accordion medium filled panel vertical padding
 * @cssprop --bq-accordion--panel-medium-filled-padding-start - Accordion medium filled panel start padding
 * @cssprop --bq-accordion--panel-medium-filled-padding-end - Accordion medium filled panel end padding
 *
 * @cssprop --bq-accordion--panel-ghost-border-color - Accordion ghost panel border color
 * @cssprop --bq-accordion--panel-ghost-border-style - Accordion ghost panel border style
 * @cssprop --bq-accordion--panel-ghost-border-width - Accordion ghost panel border width
 * @cssprop --bq-accordion--panel-small-ghost-padding-y - Accordion small ghost panel vertical padding
 * @cssprop --bq-accordion--panel-small-ghost-padding-start - Accordion small ghost panel start padding
 * @cssprop --bq-accordion--panel-small-ghost-padding-end - Accordion small ghost panel end padding
 * @cssprop --bq-accordion--panel-medium-ghost-padding-y - Accordion medium ghost panel vertical padding
 * @cssprop --bq-accordion--panel-medium-ghost-padding-start - Accordion medium ghost panel start padding
 * @cssprop --bq-accordion--panel-medium-ghost-padding-end - Accordion medium ghost panel end padding
 */
export class BqAccordion {
    // Own Properties
    // ====================
    accordion;
    prefixElem;
    suffixElem;
    detailsElem;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasPrefix = false;
    hasSuffix = false;
    // Public Property API
    // ========================
    /** The appearance style of the Accordion */
    appearance = 'filled';
    /** If true, the Accordion is disabled */
    disabled = false;
    /** If true, the Accordion is expanded */
    expanded = false;
    /**
     * Animation is set through JS when the browser does not support CSS calc-size()
     * If true, the Accordion animation, will be disabled. No animation will be applied.
     */
    noAnimation = false;
    /** If true, the Accordion expand icon is rotate 180deg when expanded */
    rotate = false;
    /** The size of the Accordion */
    size = 'medium';
    // Prop lifecycle events
    // =======================
    checkPropValues() {
        validatePropValue(ACCORDION_SIZE, 'medium', this.el, 'size');
        validatePropValue(ACCORDION_APPEARANCE, 'filled', this.el, 'appearance');
    }
    handleExpandedChange() {
        const event = this.expanded ? this.bqOpen.emit(this.el) : this.bqClose.emit(this.el);
        if (event.defaultPrevented) {
            this.expanded = !this.expanded;
            return;
        }
        if (this.expanded) {
            this.accordion?.open();
        }
        else {
            this.accordion?.close();
        }
        if (!this.isCssInterpolateSizeSupported)
            return;
        // NOTE: This is a workaround to trigger the transitionEnd event
        // when the open/close animation is handled via CSS instead of JS
        setTimeout(() => {
            this.el.dispatchEvent(new CustomEvent('accordionTransitionEnd', { bubbles: false, composed: true }));
        }, 200);
    }
    handleDisabledChange() {
        if (!this.disabled)
            return;
        this.expanded = false;
    }
    handleJsAnimation() {
        if (this.isCssInterpolateSizeSupported)
            return;
        console.warn(`[bq-accordion] animating to/from intrinsic sizing keywords (interpolate-size: allow-keywords) is not supported and animation will be set through JS.
        For vertical layout, consider using the 'noAnimation' prop ('no-animation' attribute) to disable it`);
        this.accordion = !this.noAnimation ? new Accordion(this.detailsElem) : null;
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when the accordion loses focus */
    bqBlur;
    /** Handler to be called when the accordion gets focus */
    bqFocus;
    /** Handler to be called when the accordion is opened */
    bqOpen;
    /** Handler to be called after the accordion is opened */
    bqAfterOpen;
    /** Handler to be called when the accordion is closed */
    bqClose;
    /** Handler to be called after the accordion is closed */
    bqAfterClose;
    /** Handler to be called when the accordion is clicked */
    bqClick;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.checkPropValues();
    }
    componentDidLoad() {
        this.handleJsAnimation();
        this.handleExpandedChange();
    }
    // Listeners
    // ==============
    onAccordionTransitionEnd(event) {
        event.stopPropagation();
        if (event.target !== this.el)
            return;
        if (this.expanded) {
            this.bqAfterOpen.emit(this.el);
            return;
        }
        this.bqAfterClose.emit(this.el);
    }
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
    handleClick = (event) => {
        event.preventDefault();
        if (this.disabled)
            return;
        this.bqClick.emit(this.el);
        this.expanded = !this.expanded;
    };
    handleFocus = () => {
        if (this.disabled)
            return;
        this.bqFocus.emit(this.el);
    };
    handleBlur = () => {
        this.bqBlur.emit(this.el);
    };
    handlePrefixSlotChange = () => {
        this.hasPrefix = hasSlotContent(this.prefixElem, 'prefix');
    };
    handleSuffixSlotChange = () => {
        this.hasSuffix = hasSlotContent(this.suffixElem, 'suffix');
    };
    get open() {
        return this.expanded && !this.disabled;
    }
    get isCssInterpolateSizeSupported() {
        return window.CSS?.supports('(interpolate-size: allow-keywords)');
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("details", { key: 'a870407449d2cfeb32d4817e7d56018c7afc40fc', class: {
                [`bq-accordion overflow-hidden ${this.size} ${this.appearance}`]: true,
                'no-animation': this.noAnimation,
                disabled: this.disabled,
            }, ref: (detailsElem) => (this.detailsElem = detailsElem), open: this.open, part: "base" }, h("summary", { key: '6b1e2312519bf04dac0e4109817fc40c59857bf7', id: "bq-accordion__header", class: "bq-accordion__header", onClick: this.handleClick, onFocus: this.handleFocus, onBlur: this.handleBlur, "aria-expanded": this.expanded ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-controls": "bq-accordion__content", tabindex: this.disabled ? -1 : 0, role: "button", part: "header" }, h("div", { key: '43e333e7a08eb42e893673809d2a0f4ac68f8c5e', ref: (element) => (this.prefixElem = element), class: { 'bq-accordion__header--prefix': true, '!hidden': !this.hasPrefix }, part: "prefix" }, h("slot", { key: 'ee464fd1e0a383beebefe4d713bda6f1c6c488fe', name: "prefix", onSlotchange: this.handlePrefixSlotChange })), h("div", { key: '09f8b02d8dce6fb7a3b1a28c3943c3d2d0aae755', class: "bq-accordion__header--text", part: "text" }, h("slot", { key: '7083b8911805c5d0cd617e9a4eef7235b2f4af7b', name: "header" })), h("div", { key: 'c3c678ad4f482b11efb584b273fcfd189a3203f9', ref: (element) => (this.suffixElem = element), class: { 'bq-accordion__header--suffix': true, '!hidden': !this.hasSuffix }, part: "suffix" }, h("slot", { key: '24abd092ca5a84ae39f4bb3aa1f924e7164805fa', name: "suffix", onSlotchange: this.handleSuffixSlotChange })), h("div", { key: 'efee2573a804ccd5b304c80cf605ceeb5ad7d71d', class: {
                'flex items-center justify-center transition-transform duration-300 ease-in-out': true,
                '!hidden': this.open && !this.rotate,
                'rotate-180': this.rotate && this.open,
            }, "aria-hidden": "true" }, h("slot", { key: '4ebb25cbe06bd0092a9786b650d06fca20518194', name: "expand" }, h("bq-icon", { key: 'b4a1a7819959dcc4e08efc8d1a95258f5d0fd199', name: "plus" }))), h("div", { key: 'b78d55a27e5cabe6075b0f8772bdb95f0e3cc08f', class: { 'flex items-center justify-center': true, '!hidden': (!this.open && !this.rotate) || this.rotate }, "aria-hidden": "true" }, h("slot", { key: '911ac4631b5df73d5935b8cf3c84d2d252877eb3', name: "collapse" }, h("bq-icon", { key: '112d66213061258d41bdce2661df09ff236ffca4', name: "minus" })))), h("div", { key: '26065bedbfdd0e24d6e40e3e27a2eb793695ab0d', class: "bq-accordion__body overflow-hidden", "aria-labelledby": "bq-accordion__header", role: "region", part: "panel" }, h("slot", { key: '5f4d340fa5f8d1f1277a322f1c43bb1165f4f23d', id: "bq-accordion__content", class: "bq-accordion__content block" }))));
    }
    static get is() { return "bq-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-accordion.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-accordion.css"]
        };
    }
    static get properties() {
        return {
            "appearance": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TAccordionAppearance",
                    "resolved": "\"filled\" | \"ghost\"",
                    "references": {
                        "TAccordionAppearance": {
                            "location": "import",
                            "path": "./bq-accordion.types",
                            "id": "../../packages/beeq/src/components/accordion/bq-accordion.types.ts::TAccordionAppearance"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The appearance style of the Accordion"
                },
                "getter": false,
                "setter": false,
                "attribute": "appearance",
                "reflect": true,
                "defaultValue": "'filled'"
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
                    "text": "If true, the Accordion is disabled"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "expanded": {
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
                    "text": "If true, the Accordion is expanded"
                },
                "getter": false,
                "setter": false,
                "attribute": "expanded",
                "reflect": true,
                "defaultValue": "false"
            },
            "noAnimation": {
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
                    "text": "Animation is set through JS when the browser does not support CSS calc-size()\nIf true, the Accordion animation, will be disabled. No animation will be applied."
                },
                "getter": false,
                "setter": false,
                "attribute": "no-animation",
                "reflect": true,
                "defaultValue": "false"
            },
            "rotate": {
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
                    "text": "If true, the Accordion expand icon is rotate 180deg when expanded"
                },
                "getter": false,
                "setter": false,
                "attribute": "rotate",
                "reflect": true,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TAccordionSize",
                    "resolved": "\"medium\" | \"small\"",
                    "references": {
                        "TAccordionSize": {
                            "location": "import",
                            "path": "./bq-accordion.types",
                            "id": "../../packages/beeq/src/components/accordion/bq-accordion.types.ts::TAccordionSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the Accordion"
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
                    "text": "Handler to be called when the accordion loses focus"
                },
                "complexType": {
                    "original": "HTMLBqAccordionElement",
                    "resolved": "HTMLBqAccordionElement",
                    "references": {
                        "HTMLBqAccordionElement": {
                            "location": "global",
                            "id": "global::HTMLBqAccordionElement"
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
                    "text": "Handler to be called when the accordion gets focus"
                },
                "complexType": {
                    "original": "HTMLBqAccordionElement",
                    "resolved": "HTMLBqAccordionElement",
                    "references": {
                        "HTMLBqAccordionElement": {
                            "location": "global",
                            "id": "global::HTMLBqAccordionElement"
                        }
                    }
                }
            }, {
                "method": "bqOpen",
                "name": "bqOpen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when the accordion is opened"
                },
                "complexType": {
                    "original": "HTMLBqAccordionElement",
                    "resolved": "HTMLBqAccordionElement",
                    "references": {
                        "HTMLBqAccordionElement": {
                            "location": "global",
                            "id": "global::HTMLBqAccordionElement"
                        }
                    }
                }
            }, {
                "method": "bqAfterOpen",
                "name": "bqAfterOpen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called after the accordion is opened"
                },
                "complexType": {
                    "original": "HTMLBqAccordionElement",
                    "resolved": "HTMLBqAccordionElement",
                    "references": {
                        "HTMLBqAccordionElement": {
                            "location": "global",
                            "id": "global::HTMLBqAccordionElement"
                        }
                    }
                }
            }, {
                "method": "bqClose",
                "name": "bqClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when the accordion is closed"
                },
                "complexType": {
                    "original": "HTMLBqAccordionElement",
                    "resolved": "HTMLBqAccordionElement",
                    "references": {
                        "HTMLBqAccordionElement": {
                            "location": "global",
                            "id": "global::HTMLBqAccordionElement"
                        }
                    }
                }
            }, {
                "method": "bqAfterClose",
                "name": "bqAfterClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called after the accordion is closed"
                },
                "complexType": {
                    "original": "HTMLBqAccordionElement",
                    "resolved": "HTMLBqAccordionElement",
                    "references": {
                        "HTMLBqAccordionElement": {
                            "location": "global",
                            "id": "global::HTMLBqAccordionElement"
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
                    "text": "Handler to be called when the accordion is clicked"
                },
                "complexType": {
                    "original": "HTMLBqAccordionElement",
                    "resolved": "HTMLBqAccordionElement",
                    "references": {
                        "HTMLBqAccordionElement": {
                            "location": "global",
                            "id": "global::HTMLBqAccordionElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "checkPropValues"
            }, {
                "propName": "expanded",
                "methodName": "handleExpandedChange"
            }, {
                "propName": "disabled",
                "methodName": "handleDisabledChange"
            }, {
                "propName": "noAnimation",
                "methodName": "handleJsAnimation"
            }];
    }
    static get listeners() {
        return [{
                "name": "accordionTransitionEnd",
                "method": "onAccordionTransitionEnd",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=bq-accordion.js.map
