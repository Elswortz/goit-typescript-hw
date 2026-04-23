enum Days {
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday',
  sunday = 'sunday'

}

function isWeekend (day: Days) {
  if (day === Days.saturday || day === Days.sunday) {
    return true;
  }
  return false;
}

console.log(isWeekend(Days.saturday));