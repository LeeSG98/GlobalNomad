export const generateCalendarDates = (): string[] => {
    const dates = [];
    for (let i = 1; i <= 31; i++) {
      dates.push(`2023-07-${i < 10 ? `0${i}` : i}`);
    }
    return dates;
  };
  