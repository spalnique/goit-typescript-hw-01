enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday = 'weekend',
  Sunday = 'weekend',
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === 'weekend';
};
