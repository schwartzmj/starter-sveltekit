/**
 * Returns a pluralized string version of the noun based on the count.
 *
 * @param count - The number of items.
 * @param noun - The singular form of the noun.
 * @param [suffix='s'] - The suffix to add to the noun when the count is not 1. Defaults to 's'.
 *
 * @returns The count and appropriately pluralized form of the noun.
 *
 * @example
 * pluralize(1, 'cat'); // returns '1 cat'
 * pluralize(2, 'dog'); // returns '2 dogs'
 * pluralize(2, 'fox', 'es'); // returns '2 foxes'
 */
export const pluralize = (count: number, noun: string, suffix = 's') =>
	`${count} ${noun}${count !== 1 ? suffix : ''}`;

/**
 * Converts a string into a URL-friendly slug.
 *
 * This function processes the input string by normalizing it, removing accents,
 * trimming whitespace, converting to lowercase, and replacing spaces and special
 * characters with hyphens. The resulting string is suitable for use in URLs and
 * file names.
 *
 * @param str - The string to be slugified.
 *
 * @returns The slugified version of the input string.
 *
 * @example
 * slugify('Hello World!'); // returns 'hello-world'
 * slugify('Café Con Leche'); // returns 'cafe-con-leche'
 * slugify('   --Hello-- World--   '); // returns 'hello-world'
 */
export const slugify = (str: string) => {
	return String(str)
		.normalize('NFKD') // split accented characters into their base characters and diacritical marks
		.replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
		.trim() // trim leading or trailing whitespace
		.toLowerCase() // convert to lowercase
		.replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
		.replace(/\s+/g, '-') // replace spaces with hyphens
		.replace(/-+/g, '-'); // remove consecutive hyphens
};
