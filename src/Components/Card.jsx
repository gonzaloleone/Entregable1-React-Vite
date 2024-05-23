
const Card = ({ usuario }) => {
  const {nombre, animalPreferido} = usuario;
  return (
    <div>
      <h4>Felicitaciones, {nombre}!</h4>
      <h5>Tu animal preferido es el siguiente: {animalPreferido}</h5>
    </div>
  )
}

export default Card