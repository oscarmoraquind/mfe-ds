import { TLogoSize, TLogoType, TLogoVariant } from './bq-logo.types';
export declare class BqLogo {
    /** Tamaño del logo (normal o small) */
    size: TLogoSize;
    /** Tipo del logo (completo = logo o responsivo = isotype) */
    type: TLogoType;
    /** Variante de color (full-color, green, white) */
    variant: TLogoVariant;
    /**
     * (Opcional) Si deseas recomputar la lógica cada vez que cambien las props:
     */
    handlePropsChange(): void;
    /**
     * Genera el `name` o `src` apropiado para <bq-icon>.
     * Por ejemplo, si antes cargabas un archivo `isotype-green.svg`,
     * ahora podrías usar:
     *    name="isotype-green"
     * o bien:
     *    src="assets/logos/isotype-green.svg"
     * dependiendo de cómo quieras manejar tus íconos.
     */
    private get iconName();
    render(): any;
}
