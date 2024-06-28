export default function Text({ label, props }) {
  let attr = `flow-text ${ props }`;
  return <p className={ attr }>{ label }</p>;
}
