import Modal from '../components/Modal.jsx';
import Button from '../components/Button.jsx';

export default function Page({ children, id, enableFooter=false, footerChildren, fullscreen, title}) {
  return(
    <Modal.Modal id={ id } fullscreen={fullscreen}>
      <Modal.Header>
        <Modal.Title label={ title } />
        <button type='button'
          className='btn-close'
          data-bs-dismiss='modal'
        aria-label='Close' />
      </Modal.Header>

      <Modal.Body>{ children }</Modal.Body>
      { enableFooter == true ? (
        <Modal.Footer>
          { footerChildren}
        </Modal.Footer>
      ) : false }
    </Modal.Modal>
  );
}
