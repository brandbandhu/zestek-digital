export const toggleFilterValue = (currentValues: string[], value: string) =>
  currentValues.includes(value)
    ? currentValues.filter((item) => item !== value)
    : [...currentValues, value];

export const matchesSelectedOptions = (availableValues: string[], selectedValues: string[]) =>
  selectedValues.length === 0 || selectedValues.some((value) => availableValues.includes(value));

export const matchesSearchQuery = (searchableValues: string[], query: string) => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return true;
  }

  return searchableValues.some((value) => value.toLowerCase().includes(normalizedQuery));
};

export const parseLeadingNumber = (value: string) => {
  const match = value.match(/\d+/);
  return match ? Number(match[0]) : null;
};
