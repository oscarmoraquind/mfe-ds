/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { isHTMLElement, isNil } from "../../shared/utils";
/**
 * The accordion group component is a container for multiple accordion elements.
 * It allows to manage the appearance and size of all accordions at once.
 *
 * @example How to use it
 * ```html
 * <bq-accordion-group appearance="filled" size="medium">
 *   <bq-accordion> ... </bq-accordion>
 *   <bq-accordion> ... </bq-accordion>
 *   <bq-accordion> ... </bq-accordion>
 * </bq-accordion-group>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/713eae-accordion
 * @status stable
 *
 * @attr {"filled" | "ghost"} [appearance="filled"] - The appearance style of accordion to be applied to all accordions
 * @attr {boolean} [expandAll=false] - If true all accordions are expanded
 * @attr {boolean} [no-animation=false] - Animation is set through JS when the browser does not support CSS calc-size() If true, the accordion animation, will be disabled. No animation will be applied.
 * @attr {boolean} [multiple=false] - If true multiple accordions can be expanded at the same time
 * @attr {"small" | "medium"} [size="medium"] - The size of accordion to be applied to all accordions
 *
 * @slot - The default slot where the bq-accordion elements are placed.
 *
 * @part base - The component's base wrapper.
 *
 * @cssprop --bq-accordion-group--gap - Accordion group distance between elements
 */
export class BqAccordionGroup {
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
    /** The appearance style of accordion to be applied to all accordions */
    appearance = 'filled';
    /** If true all accordions are expanded */
    expandAll;
    /**
     * Animation is set through JS when the browser does not support CSS calc-size()
     * If true, the accordion animation, will be disabled. No animation will be applied.
     */
    noAnimation = false;
    /** If true multiple accordions can be expanded at the same time */
    multiple = false;
    /** The size of accordion to be applied to all accordions */
    size = 'medium';
    // Prop lifecycle events
    // =======================
    checkPropValues() {
        this.bqAccordionElements.forEach((bqAccordionElement) => {
            // NOTE: if expandAll is nil we will keep accordion default state
            if (!isNil(this.expandAll)) {
                bqAccordionElement.expanded = this.expandAll;
            }
            bqAccordionElement.appearance = this.appearance;
            bqAccordionElement.noAnimation = this.noAnimation;
            bqAccordionElement.size = this.size;
        });
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    onBqClick(event) {
        const { detail: bqElem } = event;
        // Make sure the event is coming from a bq-accordion element and its a child of the bq-accordion-group
        if (!isHTMLElement(bqElem, 'bq-accordion') || !this.el.contains(bqElem))
            return;
        // We keep default behavior if multiple accordion can be expanded
        if (this.multiple)
            return;
        this.bqAccordionElements.forEach((bqAccordionElement) => {
            if (bqAccordionElement === event.detail)
                return;
            bqAccordionElement.expanded = false;
        });
    }
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
    get bqAccordionElements() {
        return Array.from(this.el.querySelectorAll('bq-accordion'));
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("div", { key: '0cb47bc1f87226598dc90aad5eefb37926ae32b4', class: "flex flex-col gap-[--bq-accordion-group--gap]", part: "base" }, h("slot", { key: '2865f4184272dd10fa9bc60b62b147145ffedd09' })));
    }
    static get is() { return "bq-accordion-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-accordion-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-accordion-group.css"]
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
                            "path": "../accordion/bq-accordion.types",
                            "id": "../../packages/beeq/src/components/accordion/bq-accordion.types.ts::TAccordionAppearance"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The appearance style of accordion to be applied to all accordions"
                },
                "getter": false,
                "setter": false,
                "attribute": "appearance",
                "reflect": true,
                "defaultValue": "'filled'"
            },
            "expandAll": {
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
                    "text": "If true all accordions are expanded"
                },
                "getter": false,
                "setter": false,
                "attribute": "expand-all",
                "reflect": true
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
                    "text": "Animation is set through JS when the browser does not support CSS calc-size()\nIf true, the accordion animation, will be disabled. No animation will be applied."
                },
                "getter": false,
                "setter": false,
                "attribute": "no-animation",
                "reflect": true,
                "defaultValue": "false"
            },
            "multiple": {
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
                    "text": "If true multiple accordions can be expanded at the same time"
                },
                "getter": false,
                "setter": false,
                "attribute": "multiple",
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
                            "path": "../accordion/bq-accordion.types",
                            "id": "../../packages/beeq/src/components/accordion/bq-accordion.types.ts::TAccordionSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of accordion to be applied to all accordions"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'medium'"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "appearance",
                "methodName": "checkPropValues"
            }, {
                "propName": "expandAll",
                "methodName": "checkPropValues"
            }, {
                "propName": "noAnimation",
                "methodName": "checkPropValues"
            }, {
                "propName": "size",
                "methodName": "checkPropValues"
            }];
    }
    static get listeners() {
        return [{
                "name": "bqClick",
                "method": "onBqClick",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=bq-accordion-group.js.map
