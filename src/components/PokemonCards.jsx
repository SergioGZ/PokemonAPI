import PokemonAPI from './PokemonAPI'

function PokemonCards() {

  return (
    <>
      <div className='container py-4'>
        <div className='row pt-2'>
          <div className='col-md-4 offset-md-2 col-sm-12'>
            <PokemonAPI />
          </div>
          <div className='col-md-4 col-sm-12'>
            <PokemonAPI />
          </div>
        </div>
        <div className='row pt-2'>
          <div className='offset-md-2 col-md-4 col-sm-12'>
            <PokemonAPI />
          </div>
          <div className='col-md-4 col-sm-12'>
            <PokemonAPI />
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonCards