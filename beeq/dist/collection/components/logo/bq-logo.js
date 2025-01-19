/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
export class BqLogo {
    /** Tamaño del logo (normal o small) */
    size = 'normal';
    /** Tipo del logo (completo = logo o responsivo = isotype) */
    type = 'logo';
    /** Variante de color (full-color, green, white) */
    variant = 'full-color';
    /**
     * (Opcional) Si deseas recomputar la lógica cada vez que cambien las props:
     */
    handlePropsChange() {
        // Forzar que Stencil re-renderice el componente cuando cambien las props
    }
    /**
     * Genera el `name` o `src` apropiado para <bq-icon>.
     * Por ejemplo, si antes cargabas un archivo `isotype-green.svg`,
     * ahora podrías usar:
     *    name="isotype-green"
     * o bien:
     *    src="assets/logos/isotype-green.svg"
     * dependiendo de cómo quieras manejar tus íconos.
     */
    get iconName() {
        // p.ej.: "logo-full-color", "isotype-green", etc.
        return `${this.type}-${this.variant}`;
    }
    render() {
        const styles = {
            ...(this.size && {
                '--width': `var(--bq-logo--size-${this.size}-width--${this.type})`,
                '--height': `var(--bq-logo--size-${this.size}-height--${this.type})`,
            }),
        };
        return (h(Host, { key: '5bb695508c99b597954b823cd4cbb2df328316df', style: styles }, h("bq-icon", { key: 'b66c66e64c486be645aa48a1496174b54654c2f9', part: "base", role: "img", name: 'logo/' + this.iconName, style: { width: 'var(--width)', height: 'var(--height)' }, size: ' ' })));
    }
    static get is() { return "bq-logo"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-logo.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-logo.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TLogoSize",
                    "resolved": "\"normal\" | \"small\"",
                    "references": {
                        "TLogoSize": {
                            "location": "import",
                            "path": "./bq-logo.types",
                            "id": "../../packages/beeq/src/components/logo/bq-logo.types.ts::TLogoSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tama\u00F1o del logo (normal o small)"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'normal'"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TLogoType",
                    "resolved": "\"isotype\" | \"logo\"",
                    "references": {
                        "TLogoType": {
                            "location": "import",
                            "path": "./bq-logo.types",
                            "id": "../../packages/beeq/src/components/logo/bq-logo.types.ts::TLogoType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tipo del logo (completo = logo o responsivo = isotype)"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'logo'"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TLogoVariant",
                    "resolved": "\"full-color\" | \"green\" | \"white\"",
                    "references": {
                        "TLogoVariant": {
                            "location": "import",
                            "path": "./bq-logo.types",
                            "id": "../../packages/beeq/src/components/logo/bq-logo.types.ts::TLogoVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Variante de color (full-color, green, white)"
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": true,
                "defaultValue": "'full-color'"
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "variant",
                "methodName": "handlePropsChange"
            }, {
                "propName": "type",
                "methodName": "handlePropsChange"
            }, {
                "propName": "size",
                "methodName": "handlePropsChange"
            }];
    }
}
//# sourceMappingURL=bq-logo.js.map
