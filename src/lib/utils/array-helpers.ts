/**
 * Splits an array into chunks of a specified size.
 *
 * This function divides an array into smaller sub-arrays (or chunks) of a specified size.
 * It's useful for processing large arrays in smaller segments. If the array can't be divided
 * evenly by the size, the last chunk will contain the remaining elements.
 *
 * @template T - The type of the elements in the array.
 * @param arr - The array to be chunked.
 * @param size - The size of each chunk. Must be a positive integer.
 *
 * @returns An array of chunks, where each chunk is an array of elements from the original array.
 *
 * @example
 * chunk([1, 2, 3, 4, 5], 2); // returns [[1, 2], [3, 4], [5]]
 * chunk(['a', 'b', 'c', 'd'], 3); // returns [['a', 'b', 'c'], ['d']]
 */
export const chunk = <T>(arr: T[], size: number): T[][] =>
	Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
		arr.slice(i * size, i * size + size)
	);
