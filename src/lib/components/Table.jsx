export function Col({ children, props }) {
  let attr = `col ${ props }`;
  return <div className={ attr }>{ children }</div>;
}

export function Row({ children, props }) {
  let attr = `row ${ props }`;
  return <div className={ attr }>{ children }</div>;
}

export default { Col, Row }
