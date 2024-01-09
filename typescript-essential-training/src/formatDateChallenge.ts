/**
 *
 * @param date: Date
 * @returns Formatted Date
 */
function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    dateStyle: "medium",
  });
}

const formattedDate = formatDate(new Date());

console.log(`Today's date is ${formattedDate}`);
