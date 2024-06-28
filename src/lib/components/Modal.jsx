export function Modal({ children, fullscreen=false, id }) {
  let attr = fullscreen === true ? 'modal-dialog modal-fullscreen' : 'modal-dialog'; 
  return(
    <div id={ id } className='modal fade' tabIndex='-1' aria-labelledby={ id }>
      <div className={ attr }>
        <div className='modal-content'>{ children }</div>
      </div>
    </div>
  );
}

export function Body({ children }) {
  return <div className='modal-body'>{ children }</div>;
}

export function Footer({ children }) {
  return <div className='modal-footer'>{ children }</div>;
}

export function Header({ children }) {
  return <div className='modal-header'>{ children }</div>
}

export function Title({ label }) {
  return <h3 className='modal-title'>{ label }</h3>
}

export default { Modal, Body, Footer, Header, Title }
