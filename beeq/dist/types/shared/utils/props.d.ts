export type TExtractProp<T> = T[keyof T] extends infer U ? U : never;
export type TValidProperty<E, T> = TExtractProp<{
    [K in keyof E]: E[K] extends T ? K : never;
}>;
/**
 * Validate the element property value, if is one of the accepted values
 *
 * @param {readonly} ACCEPTED_VALUES - The list of the accepted values to check against.
 * @param {unknown} fallbackValue - The default value to assign
 * @param {Element} element - The component reference
 * @param {string} propertyName - The property name (will be used in the console notification)
 * @returns {void}
 */
export declare const validatePropValue: <T extends E[keyof E], E extends Element>(ACCEPTED_VALUES: Readonly<T[]>, fallbackValue: T, element: E, propertyName: TValidProperty<E, T>) => void;
