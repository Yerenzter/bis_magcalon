export function Card({ children, props }) {
  let attr = `card ${ props }`;
  return <div className={ attr }>{ children }</div>;
}

export function Body({ children, props }) {
  let attr = `card-body ${ props }`;
  return <div className={ attr }>{ children }</div>;
}

export function Footer({ children, props }) {
  let attr = `card-footer ${ props }`;
  return <div className={ attr }>{ children }</div>;
}

export function Header({ children, props }) {
  let attr = `card-header ${ props }`;
  return <div className={ attr }>{ children }</div>;
}

export function Image({ img }) {
  return <img className='card-image' src={ img } />
}

export function Title({ label, props }) {
  let attr = `card-title ${ props }`;
  return <span className={ attr }>{ label }</span>;
}

export default { Card, Body, Footer, Header, Image, Title }
