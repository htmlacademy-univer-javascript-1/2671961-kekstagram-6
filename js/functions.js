// Проверяет, можно ли провести встречу в рабочее время
function canMeeting(workStart, workEnd, meetingStart, meetingDuration) {
  // Преобразует время в количество минут
  function toMinutes(time) {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  }

  // Конвертирует все времена в минуты
  const workStartMin = toMinutes(workStart);
  const workEndMin = toMinutes(workEnd);
  const meetingStartMin = toMinutes(meetingStart);
  const meetingEndMin = meetingStartMin + meetingDuration;

  // Проверяем: начало раб дня <= встреча <= конец раб дня
  return meetingStartMin >= workStartMin && meetingEndMin <= workEndMin;
}

console.log(canMeeting('08:00', '17:30', '14:00', 90)); // true
console.log(canMeeting('8:0', '10:0', '8:0', 120));     // true
console.log(canMeeting('08:00', '14:30', '14:00', 90)); // false