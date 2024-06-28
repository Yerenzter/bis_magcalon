import {
  Button,
  Card,
  Container,
  Modal,
  Navbar,
  Page,
  Strings,
  Table,
  Text
} from '.././lib';

import ManageUsers from './Pages/ManageUsers.jsx';
import ManageResidents from './Pages/ManageResidents.jsx';
import SystemSettings from './Pages/SystemSettings.jsx';

export default function Admin() {
  return (
    <>
      <ManageUsers />
      <ManageResidents />
      <SystemSettings />

      <Navbar.Navbar props='bg-primary fixed-top'>
        <div className='container-fluid'>
          <Navbar.Brand label='Welcome Admin!' />
        </div>
      </Navbar.Navbar>

      <Container>
        <Table.Row props='m-5 g-5 justify-content-center'>
          <Table.Col props='col-sm-12'>
            <h1 className='display-3'>{ Strings.panelAskLabel }</h1>
          </Table.Col>

          <Table.Col props='col-sm-12 col-lg-4'>
            <Card.Card props='text-center'>
              <Card.Body props='p-5'>
                <Card.Title label={ Strings.panelCardManageUserLabel } />
              </Card.Body>

              <Card.Footer>
                <Button props='btn-primary'
                  toggle='modal'
                  target='manageUsers'
                  label={ Strings.panelCardButtonClick }
                />
              </Card.Footer>
            </Card.Card>
          </Table.Col>

          <Table.Col props='col-sm-12 col-lg-4'>
            <Card.Card props='text-center'>
              <Card.Body props='p-5'>
                <Card.Title label={ Strings.panelCardManageResidentLabel } />
              </Card.Body>

            <Card.Footer>
              <Button props='btn-primary'
                toggle='modal'
                target='manageResidents'
                label={ Strings.panelCardButtonClick }
              />
            </Card.Footer>
            </Card.Card>
          </Table.Col>

          <Table.Col props='col-sm-12 col-lg-4'>
            <Card.Card props='text-center'>
              <Card.Body props='p-5'>
                <Card.Title label={ Strings.panelCardManageSystemLabel } />
              </Card.Body>

              <Card.Footer>
                <Button props='btn-primary'
                  toggle='modal'
                  target='systemSettings'
                  label={ Strings.panelCardButtonClick }
                />
              </Card.Footer>
            </Card.Card>
          </Table.Col>
        </Table.Row>
      </Container>
    </>
  );
}
