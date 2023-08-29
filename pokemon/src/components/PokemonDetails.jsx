import { CardContent, Typography, CardMedia } from '@mui/material';

const PokemonDetails = (selectedPokemon) => {
    return (
      <>
        <CardContent sx={{ margin: '44px', padding: 0 }}>
          <Typography gutterBottom variant="h4" component="div"  sx={{ fontSize: '48px', color: '#A0A0A0' }}>
            {selectedPokemon.name[0].toUpperCase() + selectedPokemon.name.slice(1)}
          </Typography>
  
          <div style={{ width: '396px', height: '200px', overflow: 'hidden' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.url.split('/')[6]}.png`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </CardContent>
        <CardContent sx={{ ml: '44px', mb: '14px', padding: 0 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '17px', listStyleType: 'none', color: '#A0A0A0' }}>
            <li>Снялся в 78 сериях</li>
            <li>id: {selectedPokemon.id}</li>
            <li>height: {selectedPokemon.height}</li>
            <li>attack: {selectedPokemon?.stats?.find(stat => stat.stat.name === 'attack')?.base_stat}</li>
  
          </Typography>
        </CardContent>
      </>
    )
  }

  export default PokemonDetails;