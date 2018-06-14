import * as React from 'react';
import { HelloWorldContainer, NameEditContainer, PhoneListContainer} from './components';

export const App = () => {
  return (
    <>
      <HelloWorldContainer />
      <br/>
      <NameEditContainer />
      <br/>
      <PhoneListContainer/>
    </>
  );
}