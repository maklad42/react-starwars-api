import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Starships({ data }) {
  return (
    <>
      <h1>Starships</h1>
      <Grid columns={3}>
        {data.map((ship, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{ship.name}</Card.Header>
                  <Card.Description>
                    <strong>Model</strong>
                    <p>{ship.model}</p>
                    <strong>Class</strong>
                    <p>{ship.starship_class}</p>
                    <strong>Crew</strong>
                    <p>{ship.crew}</p>
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
