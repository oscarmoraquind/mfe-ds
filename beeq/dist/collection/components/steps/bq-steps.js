/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { STEPS_SIZE, STEPS_TYPE } from "./bq-steps.types";
import { validatePropValue } from "../../shared/utils";
/**
 * The Steps Component is a UI element used to display a series of steps or stages in a process or task.
 * It is used to guide users through a process or task and to indicate their progress.
 *
 * @example How to use it
 * ```html
 * <bq-steps divider-color="stroke--primary" type="dot" size="medium">
 *   <bq-step-item status="completed"> ... </bq-step-item>
 *   <bq-step-item status="error"> ... </bq-step-item>
 *   <bq-step-item status="current"> ... </bq-step-item>
 *   <bq-step-item status="default"> ... </bq-step-item>
 * </bq-steps>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/896b66-stepper
 * @status stable
 *
 * @dependency bq-divider
 *
 * @attr {string} divider-color - The color of the line that connects the steps. It should be a valid declarative color token.
 * @attr {"medium" | "small"} size - The size of the steps
 * @attr {"numeric" | "icon" | "dot"} type - The type of prefix element to use on the step items
 *
 * @slot - The step items
 *
 * @part container - The container wrapper of the Steps component
 * @part divider-base - The base wrapper of the divider component
 * @part divider-dash-start - The dash start wrapper of the divider component
 * @part divider-dash-end - The dash end wrapper of the divider component
 *
 * @cssprop --bq-steps--divider-color - Divider color
 * @cssprop --bq-steps--gap - Gap between steps
 */
export class BqSteps {
    // Own Properties
    // ====================
    stepElem;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    // Public Property API
    // ========================
    /** The color of the line that connects the steps. It should be a valid declarative color token. */
    dividerColor = 'stroke--primary';
    /** The size of the steps */
    size = 'medium';
    /** The type of prefix element to use on the step items */
    type;
    // Prop lifecycle events
    // =======================
    checkPropValues() {
        validatePropValue(STEPS_SIZE, 'medium', this.el, 'size');
        validatePropValue(STEPS_TYPE, 'numeric', this.el, 'type');
        this.setStepItemProps();
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentDidLoad() {
        this.setStepItemProps();
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
    get bqSteps() {
        if (!this.stepElem)
            return [];
        const slot = this.stepElem.querySelector('slot');
        return [...slot.assignedElements({ flatten: true })].filter((el) => el.tagName.toLowerCase() === 'bq-step-item');
    }
    setStepItemProps = () => {
        this.bqSteps.forEach((bqStepElem) => {
            bqStepElem.size = this.size;
            bqStepElem.type = this.type;
        });
    };
    // private handleChange = (event) => {
    //   this.bqChange.emit(event);
    // }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const dividerPaddingTop = this.size === 'small' ? 'p-bs-s' : 'p-bs-m';
        return (h("div", { key: '9d588d3aa1d6332ff6241d03def7ec6d9cc04591', class: "relative flex w-full items-start justify-between", ref: (div) => (this.stepElem = div), part: "container" }, h("slot", { key: 'd2c70006b661ac24ac3d5b08b547c8bee46aa216' }), h("bq-divider", { key: '897e918adfe2276c317f184a6e4e4a6c5cc8309f', class: `absolute -z-10 p-i-s inset-ie-0 inset-is-0 ${dividerPaddingTop}`, strokeColor: this.dividerColor, strokeThickness: 2, exportparts: "base:divider-base,dash-start:divider-dash-start,dash-end:divider-dash-end" })));
    }
    static get is() { return "bq-steps"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-steps.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-steps.css"]
        };
    }
    static get properties() {
        return {
            "dividerColor": {
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
                    "text": "The color of the line that connects the steps. It should be a valid declarative color token."
                },
                "getter": false,
                "setter": false,
                "attribute": "divider-color",
                "reflect": true,
                "defaultValue": "'stroke--primary'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TStepsSize",
                    "resolved": "\"medium\" | \"small\"",
                    "references": {
                        "TStepsSize": {
                            "location": "import",
                            "path": "./bq-steps.types",
                            "id": "../../packages/beeq/src/components/steps/bq-steps.types.ts::TStepsSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the steps"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'medium'"
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
                            "path": "./bq-steps.types",
                            "id": "../../packages/beeq/src/components/steps/bq-steps.types.ts::TStepsType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of prefix element to use on the step items"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "type",
                "methodName": "checkPropValues"
            }, {
                "propName": "size",
                "methodName": "checkPropValues"
            }];
    }
}
//# sourceMappingURL=bq-steps.js.map
