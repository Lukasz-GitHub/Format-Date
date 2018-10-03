const formatDate = (timeInSeconds) => {
  
  let second = `${timeInSeconds}`;
  let minute = 0;
  let hour = 0;
// Zwraca sekundy
  if (second < 60) {
    return second + 's';
  }
// Zwraca minuty i sekundy
  else if (second < 3600) {
    minute = Math.floor(second / 60);
    seconds = second - 60 * minute;
    if (seconds === 0) {
		return minute + 'm'; 
    }
    else {
      return minute + 'm ' + seconds + 's';
    }
  } 
// Zwraca godziny, minuty i sekundy
  else if (second >= 3600) {
    hour = Math.floor(second / 3600);
    minute = Math.floor((second - 3600 * hour) / 60);
    seconds = second - (3600 * hour + 60 * minute);
    if (seconds === 0 && minute === 0) {
      return hour + 'h';
    }
// Nie zwraca zbędnyc wartości zerowych
    else if (seconds === 0) {
      return hour + 'h ' + minute + 'm';
    }
    else if (minute === 0) {
      return hour + 'h ' + seconds + 's';
    }
    else {
      return hour + 'h ' + minute + 'm ' + seconds + 's';
    }
  }
  else {
    return '0s';
  }
}

module.exports = formatDate;
