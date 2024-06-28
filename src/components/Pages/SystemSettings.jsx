import { Page, Text } from '../.././lib';

export default function SystemSettings() {
  return(
    <Page id='systemSettings' title='System Settings' fullscreen={true}>
      <Text label='This is system settings page.' />
    </Page>
  );
}
