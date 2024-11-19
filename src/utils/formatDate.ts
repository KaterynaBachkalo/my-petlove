// Format the date as DD/MM/YYYY
export function formatDate(inputDate: string) {
  const date = new Date(inputDate);

  return [
    date.getDate().toString().padStart(2, "0"), // Day (DD)
    (date.getMonth() + 1).toString().padStart(2, "0"), // Month (MM)
    date.getFullYear(), // Year (YYYY)
  ].join("/");
}

//2020-08-10 -> 10.08.2020
export function fixDate(inputDate: string): string {
  if (!inputDate) return "Unknown";
  const date = new Date(inputDate);
  if (isNaN(date.getTime())) return "Invalid date";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`; // Format as dd.mm.yyyy
}
