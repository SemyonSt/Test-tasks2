import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';


import CardContent from '@mui/material/CardContent';

import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


import './App.css'


const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching pokemons:', error);
      });
  }, []);



  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
      <Grid container spacing={2} alignItems="center">
        <Grid >
          <Box sx={{ width: '484px', height: '130px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


            <Grid container spacing={1}>
              {pokemons.map((pokemon) => (
                <Grid item>
                  <Button variant="contained" sx={{ borderRadius: '50em', padding: '18px' }}>{pokemon.name}</Button>
                </Grid>))}


            </Grid>
          </Box>
        </Grid>
        <Grid item>
          <Card sx={{ width: '484px', height: '500px', backgroundColor: '#000000', padding: 0, margin: 0 }}>

            <CardContent sx={{ margin: '44px', padding: 0 }}>
              <Typography gutterBottom variant="h4" component="div" color="#A0A0A0" sx={{ fontSize: '48px' }}>
                Bulbasaur
              </Typography>

              <div style={{ width: '396px', height: '200px', overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </CardContent>
            <CardContent sx={{ ml: '44px', mb: '14px', padding: 0 }}>
              <Typography variant="body2" color="text.secondary" color="#A0A0A0" sx={{ fontSize: '17px' }}>
                <li>Снялся в 78 сериях</li>
                <li>ID</li>
                <li>height</li>
                <li>attack</li>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Container>

  );
};

export default PokemonList;
