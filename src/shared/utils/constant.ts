export const getProgressColor = (level: number): string => {
  if (level >= 75) return "green-500"; // Excellent
  if (level >= 60) return "blue-500"; // Good
  if (level >= 50) return "yellow-500"; // Fair
  if (level >= 40) return "orange-500"; // Moderate
  return "red-500"; // Needs improvement
};
