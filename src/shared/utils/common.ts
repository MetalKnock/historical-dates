const formatIntoTwoDigitsString = (number: number) => `${number < 10 ? 0 : ''}${number}`.slice(-2);

export { formatIntoTwoDigitsString };
