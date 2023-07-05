export const dateStringToDate = (dateString: string): Date => {
  // 29/09/2018
  const dateParts = dateString.split("/").map((value: string): number => parseInt(value));

  // new Date(year, month, day), month in js is 0 based
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
