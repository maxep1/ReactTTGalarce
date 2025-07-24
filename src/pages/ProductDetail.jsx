import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ProductDetail({ addToCart }) {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemon(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [id])

  if (loading) return <div className="loading">Cargando Pokemon...</div>
  if (error) return <div className="error">Error: {error}</div>
  if (!pokemon) return <div className="not-found">Pokemon no encontrado</div>

  return (
    <div className="product-detail">
      <img 
        src={pokemon.sprites.other['official-artwork'].front_default} 
        alt={pokemon.name} 
        className="pokemon-image"
      />
      <h2>{pokemon.name} <span>#{pokemon.id}</span></h2>
      
      <div className="pokemon-types">
        {pokemon.types.map(type => (
          <span key={type.slot} className={`type ${type.type.name}`}>
            {type.type.name}
          </span>
        ))}
      </div>
      
      <div className="pokemon-stats">
        <p><strong>Altura:</strong> {pokemon.height / 10}m</p>
        <p><strong>Peso:</strong> {pokemon.weight / 10}kg</p>
        <p><strong>Precio:</strong> ${pokemon.base_experience}</p>
      </div>
      
      <button 
        onClick={() => addToCart(pokemon)}
        className="add-to-cart-btn"
      >
        Añadir al carrito
      </button>
    </div>
  )
}