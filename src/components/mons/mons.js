import React, { useState, useEffect, useContext } from 'react';
import { Modal, Header, Image } from 'semantic-ui-react';
import {ShowModalContext} from '../../App'

function Mons({ showModal, mon }) { 
    const [displayModal, setDisplayModal] = useState(showModal)
    const {hideModal} = useContext(ShowModalContext);

    useEffect(()=>{
        setDisplayModal(showModal);
    }, [showModal]);

    return (
        <div>
            <Modal open={displayModal} onClose={hideModal}>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src={`${process.env.PUBLIC_URL}/assets/mons/${mon}.png`} />
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>
                            We've found the following gravatar image associated with your e-mail
                            address.
                        </p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    );
}

export default Mons;