/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { DIVIDER_ORIENTATION, DIVIDER_ORIENTATION_ENUM, DIVIDER_STROKE_LINECAP, DIVIDER_TITLE_ALIGNMENT, } from "./bq-divider.types";
import { getColorCSSVariable, getTextContent, hasSlotContent, isNil, validatePropValue } from "../../shared/utils";
/**
 * The Divider component is used to visually separate content in a layout.
 *
 * @example How to use it
 * ```html
 * <bq-divider orientation="horizontal" stroke-color="stroke--primary" title-alignment="middle">
 *   <span slot="title">Divider Title</span>
 * </bq-divider>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/53dfe6-divider
 * @status stable
 *
 * @attr {boolean} dashed - If true, the divider has a dashed pattern.
 * @attr {"horizontal" | "vertical"} orientation - The default orientation of the divider.
 * @attr {string} stroke-color - Set the stroke color of the divider. The value should be a valid value of the palette color.
 * @attr {"start" | "middle" | "end"} title-alignment - Set the alignment of the title on the main axis of the divider (horizontal / vertical).
 * @attr {number} stroke-dash-width - Set the width of each dash of the divider's stroke. This is applicable when the stroke is dashed.
 * @attr {number} stroke-dash-gap - Set the gap of the divider's stroke. This is applicable when the stroke is dashed.
 * @attr {number} stroke-thickness - Set the thickness of the divider's stroke. Value expressed in px.
 * @attr {number} stroke-basis - Set the min width of the divider's stroke when text is not centered. Value expressed in px.
 * @attr {"square" | "round" | "butt"} stroke-linecap - Set the line of the divider's stroke. This is applicable when the stroke is dashed.
 *
 * @slot - The title content of the divider.
 *
 * @part base - The component's internal wrapper.
 * @part dash-start - The component's internal svg wrapper for the start line of the divider's stroke.
 * @part dash-end - The component's internal svg wrapper for the end line of the divider's stroke.
 * @part dash-start-line - The component's internal line component of the divider's stroke.
 * @part dash-end-line - The component's internal line component of the divider's stroke.
 *
 * @cssprop --bq-divider--color - Divider color
 * @cssprop --bq-divider--title-marginX - Divider space between title and delimiters
 */
export class BqDivider {
    // Own Properties
    // ====================
    titleElem;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasTitle;
    // Public Property API
    // ========================
    /** If true, the divider has a dashed pattern */
    dashed = false;
    /** The default orientation of the divider */
    orientation = 'horizontal';
    /** Set the stroke color of the divider. The value should be a valid value of the palette color */
    strokeColor = 'stroke--primary';
    /** Set the alignment of the title on the main axis of the divider (horizontal / vertical) */
    titleAlignment = 'middle';
    /** Set the width of each dash of the divider's stroke. This is applicable when the stroke is dashed */
    strokeDashWidth = 12;
    /** Set the gap of the divider's stroke. This is applicable when the stroke is dashed */
    strokeDashGap = 7;
    /** Set the thickness of the divider's stroke. Value expressed in px*/
    strokeThickness = 1;
    /** Set the min width of the divider's stroke when text is not centered. Value expressed in px */
    strokeBasis = 0;
    /** Set the line of the divider's stroke. This is applicable when the stroke is dashed */
    strokeLinecap = 'butt';
    // Prop lifecycle events
    // =======================
    checkPropValues() {
        validatePropValue(DIVIDER_ORIENTATION, 'horizontal', this.el, 'orientation');
        validatePropValue(DIVIDER_TITLE_ALIGNMENT, 'middle', this.el, 'titleAlignment');
        validatePropValue(DIVIDER_STROKE_LINECAP, 'butt', this.el, 'strokeLinecap');
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
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
        this.handleSlotChange();
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
    handleSlotChange = () => {
        this.hasTitle = hasSlotContent(this.titleElem) || !!getTextContent(this.titleElem.querySelector('slot'));
    };
    get strokeAttributes() {
        return {
            ...this.strokeDrawPositions,
            ...(this.dashed && { 'stroke-dasharray': this.strokeDasharray }),
            'stroke-linecap': this.strokeLinecap,
            'stroke-width': this.strokeThickness,
        };
    }
    get strokeDrawPositions() {
        const drawOffset = this.strokeThickness / 2;
        const strokeDrawPositions = {
            [DIVIDER_ORIENTATION_ENUM.HORIZONTAL]: { x1: drawOffset, x2: '100%', y1: drawOffset, y2: drawOffset },
            [DIVIDER_ORIENTATION_ENUM.VERTICAL]: { x1: drawOffset, x2: drawOffset, y1: drawOffset, y2: '100%' },
        };
        const orientationMap = new Map(Object.entries(strokeDrawPositions));
        return orientationMap.get(this.orientation);
    }
    get strokeDasharray() {
        return `${this.strokeDashWidth}, ${this.strokeDashGap}`;
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const styles = {
            ...(this.strokeColor && { '--bq-divider--stroke-color': getColorCSSVariable(this.strokeColor) }),
            ...(this.strokeThickness && { '--bq-divider--stroke-thickness': `${this.strokeThickness}px` }),
            ...(!isNil(this.strokeBasis) && { '--bq-divider--stroke-basis': `${this.strokeBasis}px` }),
        };
        return (h(Host, { key: '63f3990b60ad1ff066b2d26437a2bc51b46ce891', style: styles }, h("div", { key: 'd5bffef97fcc9fe8cfc9d7c6ec08963468708361', class: {
                'bq-divider': true,
                [`bq-divider--${this.orientation}`]: true,
                [`bq-divider--title__${this.titleAlignment}`]: true,
                'gap-0': !this.hasTitle,
            }, part: "base", ref: (div) => (this.titleElem = div), role: "separator", "aria-orientation": this.orientation }, h("svg", { key: '91e147233dcf4f4e986f90bbbc602e2217fbb8cb', class: {
                'bq-divider--stroke start': true,
                '!hidden': this.strokeBasis === 0 && this.titleAlignment === 'start',
            }, part: "dash-start" }, h("line", { key: 'adc080f95ee98ceb89c95e37e0dae1833a8f09b0', ...this.strokeAttributes, part: "dash-start-line" })), h("slot", { key: 'a5193fc98114b6d1c05c37da445283a265e7e24c', onSlotchange: this.handleSlotChange }), h("svg", { key: '5ffbeed0a5811c5aca279c5b7368ba918bae2b6d', class: {
                'bq-divider--stroke end': true,
                '!hidden': !this.hasTitle || (this.strokeBasis === 0 && this.titleAlignment === 'end'),
            }, part: "dash-end" }, h("line", { key: '51f2d4d4a0a5e0bd5b24a9c4ac2d4dd6bb75eeb4', ...this.strokeAttributes, part: "dash-end-line" })))));
    }
    static get is() { return "bq-divider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-divider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-divider.css"]
        };
    }
    static get properties() {
        return {
            "dashed": {
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
                    "text": "If true, the divider has a dashed pattern"
                },
                "getter": false,
                "setter": false,
                "attribute": "dashed",
                "reflect": false,
                "defaultValue": "false"
            },
            "orientation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TDividerOrientation",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "TDividerOrientation": {
                            "location": "import",
                            "path": "./bq-divider.types",
                            "id": "../../packages/beeq/src/components/divider/bq-divider.types.ts::TDividerOrientation"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The default orientation of the divider"
                },
                "getter": false,
                "setter": false,
                "attribute": "orientation",
                "reflect": true,
                "defaultValue": "'horizontal'"
            },
            "strokeColor": {
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
                    "text": "Set the stroke color of the divider. The value should be a valid value of the palette color"
                },
                "getter": false,
                "setter": false,
                "attribute": "stroke-color",
                "reflect": true,
                "defaultValue": "'stroke--primary'"
            },
            "titleAlignment": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TDividerTitleAlignment",
                    "resolved": "\"end\" | \"middle\" | \"start\"",
                    "references": {
                        "TDividerTitleAlignment": {
                            "location": "import",
                            "path": "./bq-divider.types",
                            "id": "../../packages/beeq/src/components/divider/bq-divider.types.ts::TDividerTitleAlignment"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the alignment of the title on the main axis of the divider (horizontal / vertical)"
                },
                "getter": false,
                "setter": false,
                "attribute": "title-alignment",
                "reflect": true,
                "defaultValue": "'middle'"
            },
            "strokeDashWidth": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the width of each dash of the divider's stroke. This is applicable when the stroke is dashed"
                },
                "getter": false,
                "setter": false,
                "attribute": "stroke-dash-width",
                "reflect": true,
                "defaultValue": "12"
            },
            "strokeDashGap": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the gap of the divider's stroke. This is applicable when the stroke is dashed"
                },
                "getter": false,
                "setter": false,
                "attribute": "stroke-dash-gap",
                "reflect": true,
                "defaultValue": "7"
            },
            "strokeThickness": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the thickness of the divider's stroke. Value expressed in px"
                },
                "getter": false,
                "setter": false,
                "attribute": "stroke-thickness",
                "reflect": true,
                "defaultValue": "1"
            },
            "strokeBasis": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the min width of the divider's stroke when text is not centered. Value expressed in px"
                },
                "getter": false,
                "setter": false,
                "attribute": "stroke-basis",
                "reflect": true,
                "defaultValue": "0"
            },
            "strokeLinecap": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TDividerStrokeLinecap",
                    "resolved": "\"butt\" | \"round\" | \"square\"",
                    "references": {
                        "TDividerStrokeLinecap": {
                            "location": "import",
                            "path": "./bq-divider.types",
                            "id": "../../packages/beeq/src/components/divider/bq-divider.types.ts::TDividerStrokeLinecap"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the line of the divider's stroke. This is applicable when the stroke is dashed"
                },
                "getter": false,
                "setter": false,
                "attribute": "stroke-linecap",
                "reflect": true,
                "defaultValue": "'butt'"
            }
        };
    }
    static get states() {
        return {
            "hasTitle": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "orientation",
                "methodName": "checkPropValues"
            }, {
                "propName": "titleAlignment",
                "methodName": "checkPropValues"
            }, {
                "propName": "strokeLinecap",
                "methodName": "checkPropValues"
            }];
    }
}
//# sourceMappingURL=bq-divider.js.map
