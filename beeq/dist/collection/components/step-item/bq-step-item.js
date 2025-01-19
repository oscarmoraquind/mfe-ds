/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { STEP_ITEM_STATUS } from "./bq-step-item.types";
import { isHTMLElement, validatePropValue } from "../../shared/utils";
import { STEPS_SIZE } from "../steps/bq-steps.types";
/**
 * The Step Item Component is a UI element used to display a single step or stage in a process or task.
 * It should be used inside the Steps component.
 *
 * @example How to use it
 * ```html
 * <bq-step-item status="completed">
 *   <bq-icon slot="prefix" name="check-circle"></bq-icon>
 *   <span>Title</span>
 *   <span slot="description">Description</span>
 * </bq-step-item>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/896b66-stepper
 * @status stable
 *
 * @attr {"small" | "medium"} size - It defines prefix size
 * @attr {"completed" | "current" | "error" | "default" | "disabled"} status - It defines step item appearance based on its status
 * @attr {"numeric" | "icon" | "dot"} type - It defines the step item type used
 *
 * @event bqClick - Callback handler emitted when the step item is clicked
 *
 * @slot - The step item content
 * @slot prefix - The step item prefix
 * @slot description - The step item description
 *
 * @part base - The component's base wrapper.
 * @part title - The component's title.
 * @part description - The component's description.
 *
 * @cssprop --bq-step-item--prefix-color - Color of the prefix icon
 * @cssprop --bq-step-item--prefix-color-current - Color of the prefix icon when current
 * @cssprop --bq-step-item--prefix-color-completed - Color of the prefix icon when completed
 * @cssprop --bq-step-item--prefix-color-error - Color of the prefix icon when error
 * @cssprop --bq-step-item--prefix-num-size - Size of the prefix number
 * @cssprop --bq-step-item--prefix-num-bg-color - Background color of the prefix number
 */
export class BqStepItem {
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
    /** It defines prefix size */
    size = 'medium';
    /** It defines step item appearance based on its status */
    status = 'default';
    /** It defines the step item type used */
    type;
    // Prop lifecycle events
    // =======================
    checkPropValues() {
        validatePropValue(STEPS_SIZE, 'medium', this.el, 'size');
        validatePropValue(STEP_ITEM_STATUS, 'default', this.el, 'status');
        this.handleIconPrefix();
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler emitted when the step item is clicked */
    bqClick;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    connectedCallback() {
        this.checkPropValues();
    }
    componentWillLoad() {
        this.checkPropValues();
    }
    componentDidLoad() {
        this.handleIconPrefix();
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
    get isDisabled() {
        return this.status === 'disabled';
    }
    get isCurrent() {
        return this.status === 'current';
    }
    handleIconPrefix = () => {
        const iconElem = this.el.querySelector('[slot="prefix"]');
        if (!iconElem || !isHTMLElement(iconElem, 'bq-icon'))
            return;
        iconElem.size = this.size === 'small' ? 24 : 32;
        iconElem.weight = this.isCurrent ? 'fill' : 'regular';
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("div", { key: '4430ed87a4f6bfb3a957cfbaa302cf28b2705f64', class: {
                'bq-step-item flex gap-s': true,
                [`bq-step-item--${this.status}`]: true,
                'pointer-events-none opacity-60': this.isDisabled,
            }, part: "base" }, h("div", { key: '33bff7ff1d45c1d3b15e521fdd454a26ed511e7b', class: `bq-step-item__prefix relative ${this.type} ${this.size} ${this.status}` }, h("slot", { key: 'b5d379a3792c8100d1bdce3a9cbee67b8be6150b', name: "prefix", onSlotchange: this.handleIconPrefix })), h("div", { key: 'cb86266d520db707da55db061a95ec2f114eca93', class: "bq-step-item__content" }, h("div", { key: 'b20e3a94338f9290e57b6d42b673978915e7271d', class: {
                'bq-step-item__content--title pe-xs3 text-m leading-regular text-primary': true,
                'pointer-events-none': this.isDisabled,
                'text-brand': this.isCurrent,
            }, part: "title" }, h("slot", { key: '71bf9e0d900be045f11b381c01ac0ee8d5c7f8b3' })), h("div", { key: '71381b61cf83d0cec54db02f1f2497c344e810d2', class: {
                'bq-step-item__content--description text-s leading-regular opacity-60': true,
                'opacity-60': this.isDisabled,
            }, part: "description" }, h("slot", { key: 'c790ccda7f285cdab68e538009aa5c21f4c63c58', name: "description" })))));
    }
    static get is() { return "bq-step-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-step-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-step-item.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TStepsSize",
                    "resolved": "\"medium\" | \"small\"",
                    "references": {
                        "TStepsSize": {
                            "location": "import",
                            "path": "../steps/bq-steps.types",
                            "id": "../../packages/beeq/src/components/steps/bq-steps.types.ts::TStepsSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "It defines prefix size"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'medium'"
            },
            "status": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TStepItemStatus",
                    "resolved": "\"completed\" | \"current\" | \"default\" | \"disabled\" | \"error\"",
                    "references": {
                        "TStepItemStatus": {
                            "location": "import",
                            "path": "./bq-step-item.types",
                            "id": "../../packages/beeq/src/components/step-item/bq-step-item.types.ts::TStepItemStatus"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "It defines step item appearance based on its status"
                },
                "getter": false,
                "setter": false,
                "attribute": "status",
                "reflect": true,
                "defaultValue": "'default'"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TStepsType",
                    "resolved": "\"dot\" | \"icon\" | \"numeric\"",
                    "references": {
                        "TStepsType": {
                            "location": "import",
                            "path": "../steps/bq-steps.types",
                            "id": "../../packages/beeq/src/components/steps/bq-steps.types.ts::TStepsType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "It defines the step item type used"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true
            }
        };
    }
    static get events() {
        return [{
                "method": "bqClick",
                "name": "bqClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler emitted when the step item is clicked"
                },
                "complexType": {
                    "original": "{ target: HTMLBqStepItemElement; value: string }",
                    "resolved": "{ target: HTMLBqStepItemElement; value: string; }",
                    "references": {
                        "HTMLBqStepItemElement": {
                            "location": "global",
                            "id": "global::HTMLBqStepItemElement"
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
                "propName": "status",
                "methodName": "checkPropValues"
            }];
    }
}
//# sourceMappingURL=bq-step-item.js.map
