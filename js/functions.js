const checksTheLength = (line, maximumLength) => line.length <= maximumLength;

checksTheLength('проверяемая строка', 20);
checksTheLength('проверяемая строка', 18);
checksTheLength('проверяемая строка', 10);

// проверяю палиндром
const checksThePalindrome = (str) => {
  const normalizedStr = str.toLowerCase().replaceAll(' ', '');

  // сравниваю первый символ с последним
  for (let i = 0; i < Math.floor(normalizedStr.length / 2); i++) {
    const firstChar = normalizedStr[i];
    const lastChar = normalizedStr[normalizedStr.length - 1 - i];

    if (firstChar !== lastChar) {
      return false;
    }
  }

  return true;
};

checksThePalindrome('топот');
checksThePalindrome('ДовОд');
checksThePalindrome('Кекс');
checksThePalindrome('Лёша на полке клопа нашёл ');
