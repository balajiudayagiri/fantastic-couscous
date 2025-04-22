export const createSlug = (title: string): string => {
  return title
    .replace(/`/g, "") // Remove backticks
    .replace(/'/g, "") // Remove single quotes
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric chars with hyphens
    .replace(/(^-|-$)/g, ""); // Remove leading/trailing hyphens
};
