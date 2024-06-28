import {
  Button,
  Card,
  Container,
  Navbar,
  Strings,
  Table,
  Text
} from '.././lib';

import DocumentGenerator from './Pages/DocumentGenerator.jsx';
import ManageResidents from './Pages/ManageResidents.jsx';
import ManageRequests from './Pages/ManageRequests.jsx';
import ManageTransactions from './Pages/ManageTransactions.jsx';

export default function Personnel() {
  return (
    <>
      <DocumentGenerator />
      <ManageResidents />
      <ManageRequests />
      <ManageTransactions />

      <Navbar.Navbar props='bg-primary fixed-top'>
        <div className='container-fluid'>
          <Navbar.Brand label='Welcome Personnel!' />
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
                <Card.Title label={ Strings.panelCardCreateDocumentLabel } />
              </Card.Body>

              <Card.Footer>
                <Button props='btn-primary'
                  toggle='modal'
                  target='documentGenerator'
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
                <Card.Title label={ Strings.panelCardManageRequestLabel } />
              </Card.Body>

              <Card.Footer>
                <Button props='btn-primary'
                  toggle='modal'
                  target='manageRequests'
                  label={ Strings.panelCardButtonClick }
                />
              </Card.Footer>
            </Card.Card>
          </Table.Col>

          <Table.Col props='col-sm-12 col-lg-4'>
            <Card.Card props='text-center'>
              <Card.Body props='p-5'>
                <Card.Title label={ Strings.panelCardManageTransactionLabel } />
              </Card.Body>

              <Card.Footer>
                <Button props='btn-primary'
                  toggle='modal'
                  target='manageTransactions'
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
