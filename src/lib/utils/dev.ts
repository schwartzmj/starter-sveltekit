/**
 * Creates a promise that resolves after a specified duration.
 *
 * This function is useful for introducing a delay in asynchronous operations.
 * It returns a promise that resolves after the given number of milliseconds,
 * effectively pausing execution in an async function for the specified duration.
 *
 * @param ms - The number of milliseconds to wait before resolving the promise.
 * @returns A promise that resolves after the specified duration.
 *
 * @example
 * // Usage in an async function
 * async function example() {
 *   console.log('Wait starts');
 *   await wait(2000); // Wait for 2 seconds
 *   console.log('Wait ends');
 * }
 */
export function wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
