export const getTime = () => {
  const date = new Date();

  const minutes = date.getMinutes();
  const hours = date.getHours();

  if (hours < 10) {
    if (minutes < 10) return `0${hours}:0${minutes}`;
    return `0${hours}:${minutes}`;
  } else {
    if (minutes < 10) return `${hours}:0${minutes}`;
    return `${hours}:${minutes}`;
  }
};
