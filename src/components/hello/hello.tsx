import * as React from 'react';

interface Props {
  username: string;
}

export const HolaReactComponent = (props: Props) => {
  return (
    <h2> Hola usuario: {props.username}</h2>
  );
}