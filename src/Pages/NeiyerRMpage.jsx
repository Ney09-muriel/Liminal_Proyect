import React, { useEffect, useState } from 'react'

export function NeiyerRMpage() {

    const [character, setCharacter] = useState([])
    const getCharacters = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        setCharacter(data.results)
        console.log(data)
    }
    const [pokemons, setPokemons] = useState([])
    const getPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
        const data = await res.json()

        const detallesPokemon = await Promise.all(


            data.results.map(async (pokemon) => {
                const res = await fetch(pokemon.url)
                const detalles = await res.json()

                return {
                    id: detalles.id,
                    name: detalles.name,
                    image: detalles.sprites.other["official-artwork"].front_default,
                    type: detalles.types[0].type.name
                }
            })
        )


        setPokemons(detallesPokemon)
        console.log(data)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    useEffect(() => {
        getCharacters()
    }, [])


    return (
        <>
            <div className="container">
                <h1 className='text-center'> Personajes De Rick And Morty</h1>
                {character.map((char, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                        <img src={char.image} className='card-img-top' alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{char.name}</h5>
                            <p className="card-text">Status: {char.status}</p>
                            <p className="card-text">Especie: {char.status}</p>
                        </div>
                    </div>
                ))}
            </div>



            <div className="container"></div>
            <h1> Personajes Pokemons</h1>
            {pokemons.map((pok, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                    <img src={pok.image} className='card-img-top' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{pok.name}</h5>
                        <p className="card-text">ID: {pok.id}</p>
                        <p className="card-text">Tipo: {pok.type}</p>
                    </div>
                </div>
            ))}


        </>)



}