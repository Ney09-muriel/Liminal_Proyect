import React, { useEffect, useState } from 'react'

export function NeiyerRMpage() {

    const [character, setCharacter] = useState([])
    const getCharacters = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        setCharacter(data.results)
        console.log(data)
    }

    useEffect(() => {
        getCharacters()
    }, [])


    return (
        <>
            <h1> Personajes De Rick And Morty</h1>
            {character.map((char, index) => (
                <div key={index} className="card" style={{ width: "18rem" }}>
                    <img src={char.image} className='card-img-top' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{char.name}</h5>
                        <p className="card-text">Status: {char.status}</p>
                        <p className="card-text">Especie: {char.status}</p>
                    </div>
                </div>
            ))}


        </>)

         const [Pokemons, setPokemons] = useState([])
    const getPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/Pokemons/")
        const data = await res.json()
        setPokemons(data.results)
        console.log(data)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    

    return (
        <>
            <h1> Personajes De Rick And Morty</h1>
            {character.map((char, index) => (
                <div key={index} className="card" style={{ width: "18rem" }}>
                    <img src={char.image} className='card-img-top' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{char.name}</h5>
                        <p className="card-text">Status: {char.status}</p>
                        <p className="card-text">Especie: {char.status}</p>
                    </div>
                </div>
            ))}


        </>)}