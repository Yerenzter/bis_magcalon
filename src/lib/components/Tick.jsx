export default function Tick(func) {
    return setInterval(async () => await func(), 1000);
}