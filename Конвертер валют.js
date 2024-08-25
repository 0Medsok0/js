function convertCurrency(amount, fromCurrency, toCurrency) {
  const rates = {
    USD: {
      EUR: 0.9, // евро
      GBP: 0.75, // фунт стерлингов
      JPY: 144.34, // японская ена
      AUD: 1.47, // австралийский доллар
      RUB: 91.6, // рубли
      CNY: 7.12, // юани
      KZT: 483.77, // тенге
    },
    EUR: {
      USD: 1.1,
      GBP: 0.9,
      JPY: 161.47,
      AUD: 1.65,
      RUB: 101.61,
      CNY: 7.97,
      KZT: 540.1,
    },
    // Россия
    RUB: {
      USD: 0.010917,
      GBP: 0.008332,
      JPY: 1.6,
      AUD: 0.016245,
      EUR: 0.009841,
      CNY: 0.084928,
      KZT: 5.23,
    },
    // Китай
    CNY: {
      USD: 0.140373,
      GBP: 0.106283,
      JPY: 20.26,
      AUD: 0.206675,
      EUR: 0.125475,
      KZT: 67.77,
      RUB: 11.77,
    },
    // Казахстан
    KZT: {
      EUR: 0.001852,
      USD: 0.002067,
      GBP: 0.001568,
      JPY: 0.298996,
      AUD: 0.03305,
      RUB: 0.191202,
      CNY: 0.014756,
    },
  };

  if (fromCurrency === toCurrency) {
    return amount;
  }

  const exchangeRate = rates[fromCurrency][toCurrency]; // Например, если fromCurrency - "USD", а toCurrency - "EUR", то обменному курсу будет присвоено значение 0,9 (обменный курс доллара США на евро).
  let res = amount * exchangeRate; // конвертированную сумму путем умножения исходной суммы на полученный обменный курс
  console.log(res)
}

convertCurrency(1000, "RUB", "USD");
