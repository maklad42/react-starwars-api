import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    async function fetchStarships() {
      let res = await fetch('https://swapi.dev/api/starships/');
      let data = await res.json();
      setStarships(data.results);
      setLoading(false);
    }

    async function fetchVehicles() {
      let res = await fetch('https://swapi.dev/api/vehicles/');
      let data = await res.json();
      setVehicles(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
    fetchStarships();
    fetchVehicles();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading...</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/people">
                <People data={people} />
              </Route>
              <Route exact path="/planets">
                <Planets data={planets} />
              </Route>
              <Route exact path="/ships">
                <Starships data={starships} />
              </Route>
              <Route exact path="/vehicles">
                <Vehicles data={vehicles} />
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;
