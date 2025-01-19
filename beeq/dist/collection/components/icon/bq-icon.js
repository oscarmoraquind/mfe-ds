/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { getSvgContent, iconContent } from "./helper/request";
import { getBasePath, getColorCSSVariable, isNil } from "../../shared/utils";
/**
 * The Icon component is an image that provides a visual representation of an object, action, or concept displayed on the screen.
 * It is a small graphical element that is used to enhance the user interface and improve user experience.
 *
 * @example How to use it
 * ```html
 * <bq-icon color="text--brand" name="bell-ringing" size="24"></bq-icon>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/675fad-icon
 * @status stable
 *
 * @attr {string} color - Set the stroke color of the SVG. The value should be a valid value of the palette color.
 * @attr {string} label - Label for the icon, used for accessibility.
 * @attr {string} name - Icon name to load. Please check all available icons [here](https://phosphoricons.com/).
 * @attr {string | number} size - Set the size of the SVG.
 * @attr {string} src - Set the source of the SVG. If the source is set, the name property will be ignored.
 *
 * @event svgLoaded - Callback handler to be called when the SVG has loaded.
 *
 * @part base - The component's internal wrapper that holds the icon SVG content.
 * @part svg - The `<svg>` tag element inside the component.
 *
 * @cssprop --bq-icon--color - The stroke color of the SVG.
 * @cssprop --bq-icon--size - The size of the SVG.
 */
export class BqIcon {
    // Own Properties
    // ====================
    // Reference to host HTML element
    // ===================================
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    _svgContent;
    // Public Property API
    // ========================
    /** Label for the icon, used for accessibility */
    label;
    /** Set the stroke color of the SVG. The value should be a valid value of the palette color */
    color;
    /** Icon name to load. Please check all available icons [here](https://phosphoricons.com/) */
    name;
    /** Set the size of the SVG */
    size = 24;
    /** Set the source of the SVG. If the source is set, the name property will be ignored */
    src;
    /** @deprecated It set the icon weight/style */
    weight = undefined;
    // Prop lifecycle events
    // =======================
    handlePropsChange() {
        this.loadIcon(this.name);
    }
    /**
     * !TO BE REMOVED: Delete this `@Watch()` once the deprecated `weight` property is removed
     * We need to maintain retro-compatibility until the next major release
     */
    handleWeightChange() {
        if (this.name.includes(this.weight))
            return;
        console.warn(`❗️ [bq-icon]: the 'weight' property is deprecated, you should add the weight to the icon name.\n
       For example, '<bq-icon name="bell-fill"></bq-icon>' instead of '<bq-icon name="bell" weight="fill"></bq-icon>'`);
        // Check if the icon is weighted. An icon is considered weighted if its weight is not 'regular' and ENV_SVG_PATH is not set.
        // Eg: if the weight is 'bold' and ENV_SVG_PATH is not set, isWeightedIcon will be true.
        const REGULAR = 'regular';
        const isWeightedIcon = !isNil(this.weight) && this.weight !== REGULAR;
        // If the icon is weighted, append the weight to the icon name. Otherwise, append nothing.
        // Eg: if isWeightedIcon is true and the weight is 'bold', weightSuffix will be '-bold'.
        const weightSuffix = isWeightedIcon ? `-${this.weight}` : '';
        // Construct the icon name by appending the weight suffix (if any) and the file extension.
        // Eg: if the name is 'my-icon' and weightSuffix is '-bold', iconName will be 'my-icon-bold.svg'.
        const iconName = `${this.name}${weightSuffix}`;
        this.loadIcon(iconName);
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler to be called when the SVG has loaded */
    svgLoaded;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    connectedCallback() {
        this.setupIconComponent();
    }
    componentWillLoad() {
        this.setupIconComponent();
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
    setupIconComponent = () => {
        this.loadIcon(this.name);
        // !TO BE REMOVED: Delete this once the deprecated `weight` property is removed
        if (!isNil(this.weight))
            this.handleWeightChange();
    };
    getIconSource = (name) => {
        if (!this.name && !this.src)
            return;
        // Return the src if it is set
        if (this.src)
            return this.src;
        const SVG_EXTENSION = '.svg';
        const iconFileName = `${name}${SVG_EXTENSION}`;
        return getBasePath(iconFileName);
    };
    loadIcon = (name) => {
        const url = this.getIconSource(name);
        getSvgContent(url, true).then(() => {
            this._svgContent = iconContent.get(url);
            this.svgLoaded.emit(this._svgContent);
        });
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const styles = {
            ...(this.color && { '--bq-icon--color': getColorCSSVariable(this.color) }),
            ...(this.size && { '--bq-icon--size': `${this.size}px` }),
        };
        return (h(Host, { key: '58b7f0bb84fc48079615e5e54e0e2f7f7fe62ed3', style: styles }, h("div", { key: 'ea1ebb6a5ea7d0be4c0101d48d3de2f4a816dbfd', "aria-label": this.label ?? `${this.name} icon`, class: `flex text-[color:--bq-icon--color] ${(this.size && 'bs-[--bq-icon--size] is-[--bq-icon--size]') || ''}`, innerHTML: this._svgContent, part: "base", role: "img" })));
    }
    static get is() { return "bq-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-icon.css"]
        };
    }
    static get assetsDirs() { return ["svg"]; }
    static get properties() {
        return {
            "label": {
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
                    "text": "Label for the icon, used for accessibility"
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": true
            },
            "color": {
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
                    "text": "Set the stroke color of the SVG. The value should be a valid value of the palette color"
                },
                "getter": false,
                "setter": false,
                "attribute": "color",
                "reflect": true
            },
            "name": {
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
                    "text": "Icon name to load. Please check all available icons [here](https://phosphoricons.com/)"
                },
                "getter": false,
                "setter": false,
                "attribute": "name",
                "reflect": true
            },
            "size": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the size of the SVG"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "24"
            },
            "src": {
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
                    "text": "Set the source of the SVG. If the source is set, the name property will be ignored"
                },
                "getter": false,
                "setter": false,
                "attribute": "src",
                "reflect": true
            },
            "weight": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TIconWeight",
                    "resolved": "\"bold\" | \"duotone\" | \"fill\" | \"light\" | \"regular\" | \"thin\"",
                    "references": {
                        "TIconWeight": {
                            "location": "import",
                            "path": "./bq-icon.types",
                            "id": "../../packages/beeq/src/components/icon/bq-icon.types.ts::TIconWeight"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "It set the icon weight/style"
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "weight",
                "reflect": true,
                "defaultValue": "undefined"
            }
        };
    }
    static get states() {
        return {
            "_svgContent": {}
        };
    }
    static get events() {
        return [{
                "method": "svgLoaded",
                "name": "svgLoaded",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Callback handler to be called when the SVG has loaded"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "color",
                "methodName": "handlePropsChange"
            }, {
                "propName": "name",
                "methodName": "handlePropsChange"
            }, {
                "propName": "size",
                "methodName": "handlePropsChange"
            }, {
                "propName": "weight",
                "methodName": "handleWeightChange"
            }];
    }
}
//# sourceMappingURL=bq-icon.js.map
