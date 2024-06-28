export default function Input({ change, id, label='No label', name, type='text', props, readonly=false, value }) {
  let attr = `form-control ${ props }`;
  return <input id={ id }
    onChange={ change }
    className={ attr }
    name={ name }
    type={ type }
    placeholder={ label }
    value={ value }
  readOnly={ readonly } />
}
