// Format the date as DD/MM/YYYY
export function formatDate(inputDate: string) {
  const date = new Date(inputDate);

  return [
    date.getDate().toString().padStart(2, "0"), // Day (DD)
    (date.getMonth() + 1).toString().padStart(2, "0"), // Month (MM)
    date.getFullYear(), // Year (YYYY)
  ].join("/");
}
