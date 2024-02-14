export const formatTime = (date: Date) => {
  return date.toLocaleTimeString().slice(0, -3);
};
