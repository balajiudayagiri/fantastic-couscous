export function calculateExperience(startDate: Date): string {
  const start = new Date(startDate);
  const now = new Date();

  const diffInYears =
    (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  const years = Math.floor(diffInYears);
  const months = Math.floor((diffInYears - years) * 12);

  // Add .5 to years if months are 6 or more
  return months >= 6 ? `${years}.5+` : `${years}+`;
}


