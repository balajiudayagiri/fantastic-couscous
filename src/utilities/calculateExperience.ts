/**
 * Calculates the experience in years based on the provided initial date.
 *
 * @param initialDate - A string representing the start date in a format
 *                      that can be parsed by the `Date` constructor.
 * @returns A string representing the experience in years. If the calculated
 *          experience is less than 1 year, it returns "Less than 1 year".
 *          Otherwise, it returns the number of years followed by "+ years".
 *
 * @example
 * ```typescript
 * const experience = calculateExperience("2020-06-15");
 * console.log(experience); // Output: "3+ years" (as of 2023)
 * ```
 */
export function calculateExperience(initialDate: string) {
  const currentDate = new Date();
  const startDate = new Date(initialDate);

  const yearDifference = currentDate.getFullYear() - startDate.getFullYear();
  const monthDifference = currentDate.getMonth() - startDate.getMonth();

  let experience = yearDifference;

  // If the current month is before the initial month, decrement the experience
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < startDate.getDate())
  ) {
    experience--;
  }

  return experience < 1 ? "Less than 1 year" : `${experience}+ years`;
}
