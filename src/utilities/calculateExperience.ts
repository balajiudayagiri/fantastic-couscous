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
