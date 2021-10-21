import i18n from 'i18n-js';

const currencyFormat = (value: number) => {
  const valor = i18n.toCurrency(value, {
    separator: ".",
    delimiter: ",",
    unit: "",
  });

  return valor;
};

export default currencyFormat;
