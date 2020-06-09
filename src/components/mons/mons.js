import React, { useState, useEffect, useContext } from 'react';
import { Modal, Header, Image } from 'semantic-ui-react';
import {ShowModalContext} from '../../App'

import './mons.css';

function Mons({ showModal, mon }) { 
    const [displayModal, setDisplayModal] = useState(showModal)
    const [monData, setMonData] = useState([]);

    const {hideModal} = useContext(ShowModalContext);

    async function getPokemon(id){
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
        const json = await res.json();

        setMonData(json);
    }

    useEffect(()=>{
        getPokemon(mon);
        setDisplayModal(showModal);
    }, [showModal, mon]);

    const styles ={
        headerText: {
            textTransform: 'capitalize'
        }
    }

    return (
        <div>
            <Modal open={displayModal} onClose={hideModal}>
                <Modal.Content image>
                    <Image wrapped size='medium' src={`${process.env.PUBLIC_URL}/assets/mons/${mon}.png`} />
                    <Modal.Description>
                        <Header style={styles.headerText}>
                            #{mon} {monData.name}
                        </Header>

                        <div style={{all: "unset"}} className="typeCapsule">
                            { 
                                ( monData && monData.types) 
                                ? 
                                    monData.types.map(m => (
                                    <div className={"typeCapsule " + m.type.name}>
                                        {m.type.name}
                                    </div>
                                    ))
                                :
                                ''
                            }
                            </div>
                        <p>
                           
                        </p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    );
}

export default Mons;