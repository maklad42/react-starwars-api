import React from 'react';

export default function Details({ person }) {
  return (
    <>
      <strong>Skin Colour</strong>
      <p>{person.skin_color}</p>
    </>
  );
}
