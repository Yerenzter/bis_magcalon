import { Button, Card, Container, Input, Strings, Table, Text } from '.././lib';

export default function Login() {
  return(
    <Container>
      <Table.Row props='p-5'>
        <Table.Col props='col-sm-12 col-md-12 col-lg-7 d-none d-lg-block'>
          <h1 className='display-1'>{ Strings.loginHeaderTitle }</h1>
          <Text label={ Strings.loginHeaderSubtitle } />
        </Table.Col>

        <Table.Col props='col-sm-12 col-md-12 col-lg-12 d-block d-lg-none my-5 text-center'>
          <h1 className='display-1'>{ Strings.loginSubheaderTitle }</h1>
          <Text label={ Strings.loginSubheaderInstruction } />
        </Table.Col>

        <Table.Col props='col-sm-12 col-md-12 col-lg-5'>
          <form>
            <Card.Card>
              <Card.Body props='p-5'>
                <Input label={ Strings.loginFormUsername } props='my-3'/>
                <Input label={ Strings.loginFormPassword } type='password' props='my-3' />
              </Card.Body>

              <Card.Footer props='justify-content-center d-flex px-5 py-3'>
                <Button label={ Strings.loginButtonLogin } type='submit' props='btn-primary col-sm-12 col-lg-12 ' />
              </Card.Footer>
            </Card.Card>
          </form>
        </Table.Col>
      </Table.Row>
    </Container>
  );
}
