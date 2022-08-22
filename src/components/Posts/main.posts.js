import React from 'react'
import { Container } from 'react-bootstrap'
import CollectionPosts from './collection.posts'

const MainPosts = () => {
    return (
        <React.Fragment>
            <Container className="mt-2">
                <CollectionPosts />
            </Container>
        </React.Fragment>
    )
}

export default MainPosts