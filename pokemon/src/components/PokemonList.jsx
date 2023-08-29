import { Chip, Grid, Box } from '@mui/material';


const PokemonList = (pokemons, setSelectedPokemon) => {
    return (
        <Grid >
            <Box sx={{
                width: '484px',
                height: '130px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
                marginTop: '20px'
            }}>
                <Grid container spacing={1}>
                    {pokemons.map((pokemon) => (
                        <Grid item>
                            <Chip sx={{ borderRadius: '50em', padding: '20px 10px', backgroundColor: '#1986EC', fontSize: '20px', color: '#FFFFFF' }}
                                onClick={() => setSelectedPokemon(pokemon)}
                                key={pokemon.name}
                                label={pokemon.name}
                            />
                        </Grid>))}
                    <div>{console.log(pokemons)}</div>
                </Grid>
            </Box>
        </Grid>
    )
}

export default PokemonList;