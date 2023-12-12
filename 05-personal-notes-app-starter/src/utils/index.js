/**
 *
 * @param {date} date
 * @param {locale} string
 * @description ini membuat format date menjadi sesuai yang di inginkan
 * contoh untuk menggunakan format indonesia maka locale ny menjadi id-ID
 * sedangkan untuk english locale ny menjadi en-US
 * @returns
 */

const showFormattedDate = (date, locale) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(locale, options);
};

export { showFormattedDate };
