export default function GetDate() {
  let date = new Date();
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth();
  let day = date.getUTCDate();

  month = month <= 9 ? `0${month}` : month;
  day = day <= 9 ? `0${day}` : day;

  return `${year}${month}${day}`;
}
