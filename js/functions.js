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

  // Проверяем, что начало раб дня <= встреча <= конец раб дня
  return meetingStartMin >= workStartMin && meetingEndMin <= workEndMin;
}

const result = canMeeting('09:00', '17:00', '10:30', 60);
