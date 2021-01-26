import React, { useState } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import Details from './Details';

export default function People2({ data }) {
  return (
    <>
      <h1>People</h1>
      <Grid columns={3}>
        {data.map((person, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{person.name}</Card.Header>
                  <Card.Description>
                    <strong>Height</strong>
                    <p>{person.height}</p>
                    <strong>Mass</strong>
                    <p>{person.mass}</p>
                    <strong>Hair Colour</strong>
                    <p>{person.hair_color}</p>
                    <Details data={person} />
                    <p>More...</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
