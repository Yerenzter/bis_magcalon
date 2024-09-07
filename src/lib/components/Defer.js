export default function Defer(func) {
  return new Promise((res) => {
    setTimeout(res, 2000);
  }).then(() => func);
}
