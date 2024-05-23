
const Card = ({ usuario }) => {
  const {nombre, animalPreferido} = usuario;
  return (
    <div>
      <h3>Felicitaciones, {nombre}!</h3>
      <h4>Tu animal preferido es el siguiente: {animalPreferido}</h4>
    </div>
  )
}

export default Card