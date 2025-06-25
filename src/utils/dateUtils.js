import dayjs from "dayjs";

export const getMonthDays = (year, month) => {
  const date = dayjs(`${year}-${month}-01`);
  return {
    daysInMonth: date.daysInMonth(),
    startDayOfWeek: date.day(), // Sunday = 0
  };
};

export const isToday = (dateStr) => {
  return dayjs().format("YYYY-MM-DD") === dateStr;
};

export const isSameDate = (d1, d2) => {
  return dayjs(d1).format("YYYY-MM-DD") === dayjs(d2).format("YYYY-MM-DD");
};
