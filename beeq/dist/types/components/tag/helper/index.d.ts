import { TTagColor, TTagSize, TTagVariant } from '../bq-tag.types';
/**
 * Function to determine the icon size based on the provided tag size.
 *
 * @param {TTagSize} size - The size of the tag.
 * @returns {number} The corresponding icon size. If the provided size does not match any predefined sizes, the function returns the size for 'medium'.
 */
export declare const iconSize: (size: TTagSize) => number;
/**
 * Function to determine the tag text color scheme for a given tag type.
 *
 * @param {TTagType} color - The color of the tag.
 * @returns {Object} An object containing the color scheme for the given tag type. If the provided type does not match any predefined types, the function returns the color scheme for 'default'.
 */
export declare const textColor: (color: TTagColor) => Partial<{ [K in TTagVariant]: string; }>;
