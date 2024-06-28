export default function Loop(props) {
  let items = [];

  for(let r=0; r < props.repeat; r++) {
    items.push(props.children(r));
  }

  return <>{ items }</>;
}
