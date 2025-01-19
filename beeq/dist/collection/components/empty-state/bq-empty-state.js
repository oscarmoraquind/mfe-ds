/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { EMPTY_STATE_SIZE, SIZE_TO_VALUE_MAP } from "./bq-empty-state.types";
import { hasSlotContent, validatePropValue } from "../../shared/utils";
/**
 * An Empty State is a UI component displayed when there is no data or content available, often used in dynamic or inactive application states.
 *
 * @example How to use it
 * ```html
 * <bq-empty-state size="medium">Title</bq-empty-state>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/673ae0-empty-state/b/09d7b1
 * @status stable
 *
 * @dependency bq-icon
 *
 * @attr {"large" | "medium" | "small"} size - The size of the empty state component
 *
 * @slot thumbnail - The element that wraps the thumbnail element
 * @slot body - The content to be displayed after the thumbnail section
 * @slot footer - The content to be displayed after the body section as footer
 *
 * @part body - The container `<div>` that wraps the alert description content
 * @part footer - The container `<div>` that wraps the alert footer content
 * @part icon - The `<bq-icon>` element used to render a predefined icon size based on the empty state size (small, medium, large)
 * @part thumbnail - The container `<div>` that wraps the thumbnail element
 * @part title - The container `<div>` that wraps the empty state title content
 * @part wrapper - The wrapper container `<div>` of the element inside the shadow DOM
 */
export class BqEmptyState {
    // Own Properties
    // ====================
    bodyElem;
    footerElem;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasBody = false;
    hasFooter = false;
    // Public Property API
    // ========================
    /** The size of the empty state component */
    size = 'medium';
    // Prop lifecycle events
    // =======================
    checkPropValues() {
        validatePropValue(EMPTY_STATE_SIZE, 'medium', this.el, 'size');
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
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
    handleContentSlotChange = () => {
        this.hasBody = hasSlotContent(this.bodyElem, 'body');
    };
    handleFooterSlotChange = () => {
        this.hasFooter = hasSlotContent(this.footerElem, 'footer');
    };
    get iconSize() {
        return SIZE_TO_VALUE_MAP[this.size] || SIZE_TO_VALUE_MAP.medium;
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("div", { key: '53a525855524488f7bf165aedc8ff054908afccc', class: "inline-flex flex-col items-center", part: "wrapper" }, h("div", { key: '0eea074063660c6ad7f3355feb3d4b5aaf3c95c7', class: {
                'm-be-m': this.size === 'small',
                'm-be-xl': this.size === 'medium',
                'm-be-xxl': this.size === 'large',
            }, part: "thumbnail" }, h("slot", { key: 'bee1b37810861c4e6a4edb8dd7c68fb58af9d3bd', name: "thumbnail" }, h("bq-icon", { key: '51615caaf09b947fa2c9d57567039ec1c59f253e', size: this.iconSize, name: "database", part: "icon", exportparts: "base,svg" }))), h("div", { key: 'cb4c4c294293ebb15af50163cbe3978e81cfb5b8', class: {
                'font-bold leading-regular text-primary': true,
                'text-m': this.size === 'small',
                'text-l': this.size === 'medium',
                'text-xxl2': this.size === 'large',
                'm-be-xs': this.size === 'small' && this.hasBody,
                'm-be-m': this.size === 'medium' && this.hasBody,
                'm-be-l': this.size === 'large' && this.hasBody,
            }, part: "title" }, h("slot", { key: 'a7c56e2b03f2ea784d26a8855f956dde2c1d5e63' })), h("div", { key: 'aebef3f59a235c5b2e0b96bc92a5640234bad59f', class: {
                'font-normal leading-regular': true,
                'text-s': this.size === 'small',
                'text-m': this.size === 'medium',
                'text-l': this.size === 'large',
                'm-be-m': this.size === 'small' && this.hasFooter,
                'm-be-l': this.size === 'medium' && this.hasFooter,
                'm-be-xl': this.size === 'large' && this.hasFooter,
            }, ref: (div) => (this.bodyElem = div), part: "body" }, h("slot", { key: 'bf1b79698a27a9def300000959d855bce15f51d3', name: "body", onSlotchange: this.handleContentSlotChange })), h("div", { key: '5d8a13f8d460ca6d68c7a27d620b1edbc28628ce', class: "flex items-start gap-xs", ref: (div) => (this.footerElem = div), part: "footer" }, h("slot", { key: 'a1a403284d3ee8df37a2de53628ac9f2cc5c118a', name: "footer", onSlotchange: this.handleFooterSlotChange }))));
    }
    static get is() { return "bq-empty-state"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-empty-state.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-empty-state.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TEmptyStateSize",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {
                        "TEmptyStateSize": {
                            "location": "import",
                            "path": "./bq-empty-state.types",
                            "id": "../../packages/beeq/src/components/empty-state/bq-empty-state.types.ts::TEmptyStateSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the empty state component"
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
            "hasBody": {},
            "hasFooter": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "checkPropValues"
            }];
    }
}
//# sourceMappingURL=bq-empty-state.js.map
