export default function Container({ children, props }) {
  let attr = `container ${ props }`;
  return <div className={ attr }>{ children }</div>;
}
