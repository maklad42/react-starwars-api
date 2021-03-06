import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import Species from './components/Species';
import Films from './components/Films';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState([]);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let url = 'https://swapi.dev/api/people';
      let data = [];
      do {
        let res = await fetch(url);
        let tmpData = await res.json();
        data.push(...tmpData.results);
        url = tmpData.next;
      } while (url != null);
      data.map((v) => (v['details'] = false));
      setPeople(data);
      setLoading(false);
    }

    async function fetchPlanets() {
      let url = 'https://swapi.dev/api/planets/';
      let data = [];
      do {
        let res = await fetch(url);
        let tmpData = await res.json();
        data.push(...tmpData.results);
        url = tmpData.next;
      } while (url != null);
      setPlanets(data);
      setLoading(false);
    }

    async function fetchStarships() {
      let url = 'https://swapi.dev/api/starships/';
      let data = [];
      do {
        let res = await fetch(url);
        let tmpData = await res.json();
        data.push(...tmpData.results);
        url = tmpData.next;
      } while (url != null);
      setStarships(data);
      setLoading(false);
    }

    async function fetchVehicles() {
      let url = 'https://swapi.dev/api/vehicles/';
      let data = [];
      do {
        let res = await fetch(url);
        let tmpData = await res.json();
        data.push(...tmpData.results);
        url = tmpData.next;
      } while (url != null);
      setVehicles(data);
      setLoading(false);
    }

    async function fetchSpecies() {
      let url = 'https://swapi.dev/api/species/';
      let data = [];
      do {
        let res = await fetch(url);
        let tmpData = await res.json();
        data.push(...tmpData.results);
        url = tmpData.next;
      } while (url != null);
      setSpecies(data);
      setLoading(false);
    }

    async function fetchFilms() {
      let url = 'https://swapi.dev/api/films/';
      let data = [];
      do {
        let res = await fetch(url);
        let tmpData = await res.json();
        data.push(...tmpData.results);
        url = tmpData.next;
      } while (url != null);
      setFilms(data);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
    fetchStarships();
    fetchVehicles();
    fetchSpecies();
    fetchFilms();
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
              <Route exact path="/species">
                <Species data={species} />
              </Route>
              <Route exact path="/films">
                <Films data={films} />
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;
