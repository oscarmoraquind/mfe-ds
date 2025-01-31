export interface InputProps<T> {
    modelValue?: T;
}
/**
 * Create a callback to define a Vue component wrapper around a Web Component.
 *
 * @prop name - The component tag name (i.e. `ion-button`)
 * @prop componentProps - An array of properties on the
 * component. These usually match up with the @Prop definitions
 * in each component's TSX file.
 * @prop customElement - An option custom element instance to pass
 * to customElements.define. Only set if `includeImportCustomElements: true` in your config.
 * @prop modelProp - The prop that v-model binds to (i.e. value)
 * @prop modelUpdateEvent - The event that is fired from your Web Component when the value changes (i.e. ionChange)
 */
export declare const defineContainer: <Props, VModelType = string | number | boolean>(name: string, defineCustomElement: any, componentProps?: string[], modelProp?: string, modelUpdateEvent?: string) => import("vue").DefineSetupFnComponent<Props & InputProps<VModelType>, {}, {}, Props & InputProps<VModelType> & {}, import("vue").PublicProps>;
