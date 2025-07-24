export default function PokemonCard({ pokemon, addToCart }) {
  return (
    <div className="pokemon-card">
      <img 
        src={pokemon.sprites.other['official-artwork'].front_default} 
        alt={pokemon.name}
        className="pokemon-image"
      />
      <h3>{pokemon.name}</h3>
      <p className="pokemon-id">#{pokemon.id}</p>
      
      <div className="pokemon-types">
        {pokemon.types.map(type => (
          <span key={type.slot} className={`type ${type.type.name}`}>
            {type.type.name}
          </span>
        ))}
      </div>
      
      <p className="pokemon-price">${pokemon.base_experience}</p>
      
      <button 
        onClick={() => addToCart(pokemon)}
        className="add-to-cart-btn"
      >
        Añadir al carrito
      </button>
    </div>
  )
}