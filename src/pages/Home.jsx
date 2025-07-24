import { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import axios from 'axios'

export default function Home({ addToCart }) {
  const [pokemonList, setPokemonList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
        const pokemonDetails = await Promise.all(
          data.results.map(pokemon => axios.get(pokemon.url))
        )
        setPokemonList(pokemonDetails.map(res => res.data))
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [])

  if (loading) return <div className="loading">Cargando Pokemon...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <div className="home-page">
      <h1>Bienvenido a PokeTiendaArg</h1>
      <div className="pokemon-grid">
        {pokemonList.map(pokemon => (
          <PokemonCard 
            key={pokemon.id} 
            pokemon={pokemon} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  )
}