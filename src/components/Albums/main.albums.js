import React from 'react'
import { Container } from 'react-bootstrap'
import Collection from './collection.albums'

const Albums = () => {
    return (
        <React.Fragment>
            <Container className="mt-2">
                <Collection />
            </Container>
        </React.Fragment>
    )
}

export default Albums