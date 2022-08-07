const prettyPrice = (price) => {
  return `${parseFloat(price)
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ')}`;
};

function pluralize(n, textForms) {
  if (textForms.length === 2) {
    return (n % 100) % 10 === 1 ? textForms[0] : textForms[1];
  }

  n = Math.abs(n) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) {
    return textForms[2];
  }

  if (n1 > 1 && n1 < 5) {
    return textForms[1];
  }

  return n1 === 1 ? textForms[0] : textForms[2];
}

export const textUtils = {
  prettyPrice,
  pluralize
};
