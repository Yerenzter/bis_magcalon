export function Navbar({ children, props }) {
  let attr = `navbar ${ props }`;
  return <nav className={ attr }>{ children }</nav>;
}

export function Brand({ label, props }) {
  let attr = `navbar-brand text-white ${ props }`;
  return <span className={ attr }>{ label }</span>;
}

export default { Navbar, Brand }
