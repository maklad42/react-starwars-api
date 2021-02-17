import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Films({ data }) {
  return (
    <>
      <h1>Films</h1>
      <Grid columns={3}>
        {data.map((film, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{film.name}</Card.Header>
                  <Card.Description>
                    <strong>Episode</strong>
                    <p>{film.episode_id}</p>
                    <strong>Director</strong>
                    <p>{film.director}</p>
                    <strong>Producer</strong>
                    <p>{film.producer}</p>
                    <strong>Release Date</strong>
                    <p>{film.release_date}</p>
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
