const formatDate = (val: string) => {

  const date = new Date(val);


  const timeFormat = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(date);


  const arabicDateFormat = new Intl.DateTimeFormat('ar-EG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);


  const standardDateFormat = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  }).format(date);

  return {
    time: timeFormat.toLowerCase(), // converts to lowercase for consistency
    arabicDate: arabicDateFormat,
    standardDate: standardDateFormat
  };
};

export default formatDate;