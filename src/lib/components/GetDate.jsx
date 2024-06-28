export default function GetDate() {
  let date = new Date();
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth();
  let day = date.getDate();
  let result = '';

  let monthXYZ = month <= 9 ? `0${month}` : month;

  return result = `${year}${monthXYZ}${day}`;
}
