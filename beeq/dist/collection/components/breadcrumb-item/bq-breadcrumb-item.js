/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { isDefined } from "../../shared/utils";
/**
 * The Breadcrumb Item helps users understand their current location within a website or application's hierarchical structure.
 *
 * @example How to use it
 * ```html
 * <bq-breadcrumb-item label="Home page">
 *   <bq-icon name="house-line" size="16"></bq-icon>
 *   Home
 * </bq-breadcrumb-item>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/61d6c0-breadcrumb
 * @status stable
 *
 * @attr {string} href - If set, the breadcrumb item will be rendered as an `<a>` with this `href`, otherwise, a `<button>` will be rendered.
 * @attr {string} target - Where to display the link in the browser context. Relevant only if `href` is set.
 * @attr {string} rel - Where to display the link in the browser context. Relevant only if `href` is set.
 *
 * @event bqFocus - Handler to be called when item is focused
 * @event bqClick - Handler to be called when item is clicked
 * @event bqBlur - Handler to be called when item loses focus
 *
 * @slot - The default slot is used to add content to the breadcrumb item.
 *
 * @part base - The component wrapper container
 * @part content - The `span` tag that wraps the content item
 * @part item - The breadcrumb item wrapper (`button` or `a`)
 * @part separator - The `span` tag that wraps the separator element
 *
 * @cssprop --bq-breadcrumb-item--background - Background color of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--box-shadow - Box shadow of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--border-color - Border color of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--border-style - Border style of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--border-width - Border width of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--border-radius - Border radius of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--line-height - Line height of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--text-color - Text color of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--text-color-current - Text color of the current breadcrumb item (active)
 * @cssprop --bq-breadcrumb-item--text-size - Text size of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--text-size-separator - Text size of the breadcrumb item separator
 * @cssprop --bq-breadcrumb-item--padding-start - Padding start of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--padding-end - Padding end of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--paddingY - Padding top and bottom of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--padding-start-separator - Padding start of the breadcrumb item separator
 * @cssprop --bq-breadcrumb-item--padding-end-separator - Padding end of the breadcrumb item separator
 */
export class BqBreadcrumbItem {
    // Own Properties
    // ====================
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    // Public Property API
    // ========================
    /** If set, the breadcrumb item will be rendered as an `<a>` with this `href`, otherwise, a `<button>` will be rendered. */
    href;
    /** Where to display the link in the browser context. Relevant only if `href` is set. */
    target;
    /** Where to display the link in the browser context. Relevant only if `href` is set. */
    rel = 'noreferrer noopener';
    // Prop lifecycle events
    // =======================
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when item loses focus */
    bqBlur;
    /** Handler to be called when item is focused */
    bqFocus;
    /** Handler to be called when item is clicked */
    bqClick;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
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
    onBlur = () => {
        this.bqBlur.emit(this.el);
    };
    onFocus = () => {
        this.bqFocus.emit(this.el);
    };
    onClick = () => {
        this.bqClick.emit(this.el);
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const isLink = isDefined(this.href);
        const TagElem = isLink ? 'a' : 'button';
        return (h("div", { key: '21a04b5c156ccdf0cad12f8aa2d85c29732352a1', class: "flex items-center", part: "base" }, h(TagElem, { key: '72094828cfda2db64bb2844c7b7129ad1dfbcec6', class: "breadcrumb-item", href: isLink ? this.href : undefined, rel: isLink && this.target ? 'noreferrer noopener' : undefined, target: isLink ? this.target : undefined, onBlur: this.onBlur, onFocus: this.onFocus, onClick: this.onClick, part: "item" }, h("span", { key: 'a0b861623018d23405cfa2aef5fd95ab69fa68f9', class: "flex items-center gap-xs2", part: "content" }, h("slot", { key: '6fc19a342300b6c7d68b06f4b878858ff61c6d58' }))), h("span", { key: '6b19fd8e54f4584529488792ff0cc6674fa7db60', class: "breadcrumb-separator", part: "separator" }, h("slot", { key: '7ebe62fcf7edc8509c65af1ead3e1e35d6be1d55', name: "separator" }))));
    }
    static get is() { return "bq-breadcrumb-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-breadcrumb-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-breadcrumb-item.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "If set, the breadcrumb item will be rendered as an `<a>` with this `href`, otherwise, a `<button>` will be rendered."
                },
                "getter": false,
                "setter": false,
                "attribute": "href",
                "reflect": true
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
                    "text": "Where to display the link in the browser context. Relevant only if `href` is set."
                },
                "getter": false,
                "setter": false,
                "attribute": "target",
                "reflect": true
            },
            "rel": {
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
                    "text": "Where to display the link in the browser context. Relevant only if `href` is set."
                },
                "getter": false,
                "setter": false,
                "attribute": "rel",
                "reflect": true,
                "defaultValue": "'noreferrer noopener'"
            }
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
                    "text": "Handler to be called when item loses focus"
                },
                "complexType": {
                    "original": "HTMLBqBreadcrumbItemElement",
                    "resolved": "HTMLBqBreadcrumbItemElement",
                    "references": {
                        "HTMLBqBreadcrumbItemElement": {
                            "location": "global",
                            "id": "global::HTMLBqBreadcrumbItemElement"
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
                    "text": "Handler to be called when item is focused"
                },
                "complexType": {
                    "original": "HTMLBqBreadcrumbItemElement",
                    "resolved": "HTMLBqBreadcrumbItemElement",
                    "references": {
                        "HTMLBqBreadcrumbItemElement": {
                            "location": "global",
                            "id": "global::HTMLBqBreadcrumbItemElement"
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
                    "text": "Handler to be called when item is clicked"
                },
                "complexType": {
                    "original": "HTMLBqBreadcrumbItemElement",
                    "resolved": "HTMLBqBreadcrumbItemElement",
                    "references": {
                        "HTMLBqBreadcrumbItemElement": {
                            "location": "global",
                            "id": "global::HTMLBqBreadcrumbItemElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=bq-breadcrumb-item.js.map
