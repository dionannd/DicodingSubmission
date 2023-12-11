const showFormattedDate = (date, locale) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(locale, options);
};

const isTruncate = (String) => {
  return String.length > 150 ? String.substring(0, 150) + "..." : String;
};

const isTruncateTitle = (String) => {
  return String.length > 40 ? String.substring(0, 40) + "..." : String;
};

export { showFormattedDate, isTruncate, isTruncateTitle };
