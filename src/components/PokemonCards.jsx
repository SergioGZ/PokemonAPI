import PokemonAPI from './PokemonAPI'

function PokemonCards() {

  return (
    <>
      <div className='container py-3'>
        <div className='row'>
          <div className='col-md-4 offset-md-2 col-sm-12 pb-2'>
            <PokemonAPI />
          </div>
          <div className='col-md-4 col-sm-12 pb-2'>
            <PokemonAPI />
          </div>
        </div>
        <div className='row'>
          <div className='offset-md-2 col-md-4 col-sm-12 pb-2'>
            <PokemonAPI />
          </div>
          <div className='col-md-4 col-sm-12 pb-2'>
            <PokemonAPI />
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonCards