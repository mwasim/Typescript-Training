/**
 *
 * @param date: Date
 * @returns Formatted Date
 */
function formatDate(date) {
    return date.toLocaleDateString("en-US", {
        dateStyle: "medium",
    });
}
const formattedDate = formatDate(new Date());
console.log(`Today's date is ${formattedDate}`);
