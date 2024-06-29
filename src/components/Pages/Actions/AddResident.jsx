import axios from 'axios';
import {
  Button,
  GetDate,
  Input,
  Page
} from '../../.././lib';

export function AddResident() {
  return(
    <>
      <Page id='addResident' title='Register new resident'>
        <h1>Add new resident page</h1>
      </Page>
    </>
  );
}

export default AddResident;
