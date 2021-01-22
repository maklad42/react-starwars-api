import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Vehicles({ data }) {
  return (
    <>
      <h1>Vehicles</h1>
      <Grid columns={3}>
        {data.map((vehicle, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{vehicle.name}</Card.Header>
                  <Card.Description>
                    <strong>Model</strong>
                    <p>{vehicle.model}</p>
                    <strong>Class</strong>
                    <p>{vehicle.vehicle_class}</p>
                    <strong>Crew</strong>
                    <p>{vehicle.crew}</p>
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
