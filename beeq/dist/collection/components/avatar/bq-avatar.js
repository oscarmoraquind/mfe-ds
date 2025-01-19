/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { AVATAR_SHAPE, AVATAR_SIZE } from "./bq-avatar.types";
import { validatePropValue } from "../../shared/utils";
/**
 * The Avatar component is a simple and customizable element that displays an image or initials in a circular or square shape.
 * This component is useful for displaying user profile pictures or any other image that represents a person or an entity.
 *
 * @example How to use it
 * ```html
 * <bq-avatar
 *   alt-text="John Doe profile picture"
 *   image="/image/url/photo-1524593689594.jpeg"
 *   label="John Doe profile picture"
 *   shape="circle"
 *   size="medium"
 * >
 *   <bq-badge slot="badge" text-color="#fff">9</bq-badge>
 * </bq-avatar>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/148da7-avatar
 * @status stable
 *
 * @attr {string} alt-text - Alternate text for the avatar image if the image cannot be displayed.
 * @attr {string} image - The image source to load on the avatar (this can be also a base64 encoded image).
 * @attr {string} label - A text to use for describing the avatar on assistive devices.
 * @attr {string} initials - The text to display on avatar.
 * @attr {"circle" | "square"} shape - The shape of the avatar.
 * @attr {"xsmall" | "small" | "medium" | "large"} size - The size of the avatar.
 *
 * @slot badge - The badge slot is used to add a badge to the avatar. The badge is a small circle or square that can be used to display a number or a status.
 *
 * @part base - The component's internal wrapper.
 * @part img - The `<image>` tag element that load the image source.
 * @part text - The `<span>` tag element that rendered the `Initials` text string.
 * @part badge - The container that wraps the badge slot element.
 *
 * @cssprop --bq-avatar--background - Avatar background color
 *
 * @cssprop --bq-avatar--border-color - Avatar border color
 * @cssprop --bq-avatar--border-style - Avatar border style
 * @cssprop --bq-avatar--border-width - Avatar border width
 *
 * @cssprop --bq-avatar--border-radius-circle - Avatar border radius for circle & any size
 * @cssprop --bq-avatar--border-radius-squareXs - Avatar border radius for square & size xsmall
 * @cssprop --bq-avatar--border-radius-squareS - Avatar border radius for square & size small
 * @cssprop --bq-avatar--border-radius-squareM - Avatar border radius for square & size medium/large
 *
 * @cssprop --bq-avatar--size-xsmall - Avatar xsmall size
 * @cssprop --bq-avatar--size-small - Avatar small size
 * @cssprop --bq-avatar--size-medium - Avatar medium size
 * @cssprop --bq-avatar--size-large - Avatar large size
 *
 * @cssprop --bq-avatar--badge-top-square - Badge top position shape square
 * @cssprop --bq-avatar--badge-left-square - Badge left position shape square
 * @cssprop --bq-avatar--badge-top-circle - Badge top position shape circle
 * @cssprop --bq-avatar--badge-left-circle - Badge left position shape circle
 */
export class BqAvatar {
    // Own Properties
    // ====================
    trimmedInitials;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasError;
    // Public Property API
    // ========================
    /** Alternate text for the avatar image if the image cannot be displayed */
    altText;
    /** The image source to load on the avatar (this can be also a base64 encoded image) */
    image;
    /** A text to use for describing the avatar on assistive devices */
    label;
    /** The text to display on avatar */
    initials;
    /** The shape of the avatar */
    shape = 'circle';
    /** The size of the avatar */
    size = 'medium';
    // Prop lifecycle events
    // =======================
    handleImagePropChange() {
        // Reset the error when a new image source is provided
        this.hasError = false;
    }
    checkPropValues() {
        validatePropValue(AVATAR_SHAPE, 'circle', this.el, 'shape');
        validatePropValue(AVATAR_SIZE, 'medium', this.el, 'size');
    }
    onInitialsChange() {
        this.trimInitialsBasedOnSize();
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.trimInitialsBasedOnSize();
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
    onImageError = () => {
        this.hasError = true;
    };
    trimInitialsBasedOnSize = () => {
        if (!this.initials)
            return;
        AVATAR_SIZE.forEach((size) => {
            if (this.size === size) {
                this.trimmedInitials = this.initials.substring(0, this.getIndex(size));
            }
        });
    };
    getIndex = (size) => {
        const sizeIndexMap = {
            xsmall: 1,
            small: 2,
            medium: 3,
            large: 4,
        };
        return sizeIndexMap[size] ?? sizeIndexMap.xsmall;
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h(Host, { key: 'abccffdfcd88cba18c1b6dbd2f15e36506a07a56' }, h("div", { key: '2e84686627ed9b421b80e2f91acbc34c8af054a2', class: {
                'bq-avatar': true,
                [`size--${this.size}`]: true,
                'rounded-[--bq-avatar--border-radius-circle]': this.shape === 'circle',
                'rounded-[--bq-avatar--border-radius-squareXs]': this.shape === 'square' && this.size === 'xsmall',
                'rounded-[--bq-avatar--border-radius-squareS]': this.shape === 'square' && this.size === 'small',
                'rounded-[--bq-avatar--border-radius-squareM]': this.shape === 'square' && (this.size === 'medium' || this.size === 'large'),
            }, "aria-label": this.label, role: "img", part: "base" }, this.initials && (h("span", { key: '269ca55c30ecc41a8de2dc13814160e5a3fc63ba', class: "absolute start-0 inline-flex items-center justify-center font-bold bs-full is-full inset-bs-0", part: "text" }, this.trimmedInitials)), this.image && !this.hasError && (h("img", { key: 'e3531d3aad47cbd0ebb2b45c5e43adb36e80bbae', class: "absolute start-0 object-cover bs-full is-full inset-bs-0", alt: this.altText ?? undefined, src: this.image, onError: this.onImageError, part: "img" }))), h("div", { key: '2a78adccd1bdab1fe1b646bf2993c63e5a22f224', class: {
                'absolute flex items-center justify-center': true,
                'start-[--bq-avatar--badge-left-square] inset-bs-[--bq-avatar--badge-top-square]': this.shape === 'square',
                'start-[--bq-avatar--badge-left-circle] inset-bs-[--bq-avatar--badge-top-circle]': this.shape === 'circle',
            }, part: "badge" }, h("slot", { key: '0429f20565d7919ace3eb9f4b348dc9fbf6fe8c3', name: "badge" }))));
    }
    static get is() { return "bq-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-avatar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-avatar.css"]
        };
    }
    static get properties() {
        return {
            "altText": {
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
                    "text": "Alternate text for the avatar image if the image cannot be displayed"
                },
                "getter": false,
                "setter": false,
                "attribute": "alt-text",
                "reflect": true
            },
            "image": {
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
                    "text": "The image source to load on the avatar (this can be also a base64 encoded image)"
                },
                "getter": false,
                "setter": false,
                "attribute": "image",
                "reflect": true
            },
            "label": {
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
                    "text": "A text to use for describing the avatar on assistive devices"
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": true
            },
            "initials": {
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
                    "text": "The text to display on avatar"
                },
                "getter": false,
                "setter": false,
                "attribute": "initials",
                "reflect": true
            },
            "shape": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TAvatarShape",
                    "resolved": "\"circle\" | \"square\"",
                    "references": {
                        "TAvatarShape": {
                            "location": "import",
                            "path": "./bq-avatar.types",
                            "id": "../../packages/beeq/src/components/avatar/bq-avatar.types.ts::TAvatarShape"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The shape of the avatar"
                },
                "getter": false,
                "setter": false,
                "attribute": "shape",
                "reflect": true,
                "defaultValue": "'circle'"
            },
            "size": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "TAvatarSize",
                    "resolved": "\"large\" | \"medium\" | \"small\" | \"xsmall\"",
                    "references": {
                        "TAvatarSize": {
                            "location": "import",
                            "path": "./bq-avatar.types",
                            "id": "../../packages/beeq/src/components/avatar/bq-avatar.types.ts::TAvatarSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the avatar"
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
            "hasError": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "image",
                "methodName": "handleImagePropChange"
            }, {
                "propName": "shape",
                "methodName": "checkPropValues"
            }, {
                "propName": "size",
                "methodName": "checkPropValues"
            }, {
                "propName": "initials",
                "methodName": "onInitialsChange"
            }, {
                "propName": "size",
                "methodName": "onInitialsChange"
            }];
    }
}
//# sourceMappingURL=bq-avatar.js.map
