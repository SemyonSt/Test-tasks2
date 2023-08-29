import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Grid, Card, CardContent } from '@mui/material';

import PokemonList from '../components/PokemonList';
import PokemonDetails from '../components/PokemonDetails';

const PokemonCard = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0]);
  
  
    useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => {
          setPokemons(response.data.results);
          setSelectedPokemon(response.data.results[0]);
        })
        .catch(error => {
          console.error('Error fetching pokemons:', error);
        });
    }, []);
  
    useEffect(() => {
      if (selectedPokemon && selectedPokemon.url) {
        axios.get(selectedPokemon.url)
          .then(response => {
            setSelectedPokemon(prevState => ({
              ...prevState,
              ...response.data
            }));
            console.log(response.data);
          })
          .catch(error => {
            console.error('Ошибка при получении деталей покемона:', error);
          });
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedPokemon && selectedPokemon.url]);
  
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
        <Grid container spacing={2} alignItems="center">
          {PokemonList(pokemons, setSelectedPokemon)}
          <Grid item>
            <Card sx={{ width: '484px', height: '500px', backgroundColor: '#000000', padding: 0, margin: 0 }}>
              <CardContent>
                {selectedPokemon && (
                  PokemonDetails(selectedPokemon)
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
  
      </Container>
  
    );
  };
  
  export default PokemonCard;