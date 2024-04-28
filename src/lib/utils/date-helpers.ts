/**
 * Formats a Date object into a human-readable string specific to the 'America/Chicago' timezone.
 *
 * This function takes a Date object and converts it to a string format that includes the
 * weekday, year, month, day, hour, and minute, using a 12-hour clock notation. The date and time
 * are formatted according to the 'en-US' locale and are adjusted to the 'America/Chicago' timezone.
 *
 * @param date - The date to be formatted.
 *
 * @returns The formatted date string in a human-readable format.
 *
 * @example
 * formatDateToHumanReadable(new Date('2023-12-25T15:30:00Z'));
 * // might return 'Sun, Dec 25, 2023, 9:00 AM' (depending on the daylight saving time)
 */
export function formatDateToHumanReadable(date: Date) {
	return date.toLocaleDateString('en-US', {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
		timeZone: 'America/Chicago'
	});
}
