import React, { useState, useEffect, useContext } from 'react';
import { Input, Button, Image, Card, Modal, Header } from 'semantic-ui-react'
// import mon from '../../assets/mons';
import './search.css';
import pokemons from './pokemons.json';

import Mons from '../mons/mons';

import { ShowModalContext } from '../../App';

function Search() {
    const [mons, setMons] = useState(pokemons);
    const [selectedMon, setSelectedMon] = useState(0);

    const {showHideModal, showModal} = useContext(ShowModalContext);

    const search = (s) => {
        if (s.length === 0) {
            setMons(pokemons)
        } else if (isNaN(s)) {
            setMons(pokemons.filter(f =>
                f.name.toLowerCase().indexOf(s.toLowerCase()) > -1
            )
            )
        } else if (!isNaN(s)) {
            setMons(pokemons.filter(f => f.id === Number(s)))
        }
    }

    const showMon = (m) => {
        setSelectedMon(m);
        showModal();
    }

    const styles= {
        col: {
            textAlign: 'center',
            backgroundColor: 'red',
            color: 'white',
            padding: 2,
            borderRadius: '4px 4px 0 0',
            fontSize: '8pt',
        }
    }
    return (
        <div className='monBox'>

            <Mons showModal={showHideModal} mon={selectedMon}></Mons>

            <div className='filterBox'>
                <ul>
                    <li>
                        <Input fluid focus onChange={e => search(e.target.value)} placeholder='Pokemon ID or Name...' />
                    </li>
                </ul>
            </div>
            <div>
                <Card.Group itemsPerRow={6}>
                {mons.map(m => (
                    <Card onClick={() => showMon(m.id)}>
                        <Image src={`${process.env.PUBLIC_URL}/assets/mons/${m.id}.png`} wrapped ui={false}/>
                        <Card.Content textAlign='center'>
                                #{m.id.toString().padStart(3, '0')} {m.name}
                        </Card.Content>
                    </Card>
                ))}
                </Card.Group>
            </div>
        </div>
    )
}

export default Search;