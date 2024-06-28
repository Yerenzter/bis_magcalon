 import axios from 'axios';

import {
  Button,
  GetDate,
  Input,
  Page
} from '../../.././lib';

export function CreateUser() {
  try {
    let username = document.querySelector('#addUsername');
    let password = document.querySelector('#addPassword');
    let accountType = document.querySelector('#addAccountType');
    const user = {
      account_username: username.value,
      account_password: password.value,
      account_type: accountType.value,
      account_created: GetDate()
    }
    axios.post('http://yerenzter.me:4435/accounts', user)
    .then(() => alert('User added successfully'))
    .catch(err => alert(err));
  } catch(e) {
    throw e;
  }
}

export function Footer() {
  return(
    <>
      <Button label='Cancel' toggle='modal' target='manageUsers' props='btn-secondary' />
      <Button label='Done' toggle='modal' target='manageUsers' click={() => CreateUser()} props='btn-primary' />
    </>
  );
}

export default function AddUser() {
  return(
    <Page id='addUser' title='Add new user' enableFooter={true} footerChildren={ <Footer /> }>
      <Input id='addUsername' label='Create username' />
      <br />
      <Input id='addPassword' label='Create password' />
      <br />
      <div className='input-group'>
        <Input id='addAccountType' label='Select account type' readonly={true}/>
        <ul className='dropdown-menu'>
          <li onClick={() => addAccountType.value = 'Admin'}><a className='dropdown-item'>Admin</a></li>
          <li onClick={() => addAccountType.value = 'Personnel'}><a className='dropdown-item'>Personnel</a></li>
        </ul>
        <Button props='btn-outline-secondary dropdown-toggle' toggle='dropdown' label='Account type' />
      </div>
    </Page>
  );
}
