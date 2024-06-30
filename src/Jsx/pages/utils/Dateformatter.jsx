export function formatDate() {
  const date = new Date();

  // Get day with ordinal suffix
  const day = date.getDate();
  const daySuffix = getDaySuffix(day);

  // Get month and year using Intl.DateTimeFormat
  const options = { month: "short" };
  const month = new Intl.DateTimeFormat("en-US", options).format(date);
  const year = date.getFullYear();

  return `${day}${daySuffix} ${month} ${year}`;
}

// Helper function to determine the suffix
function getDaySuffix(day) {
  if (day > 3 && day < 21) return "th"; // catch 11-20
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
