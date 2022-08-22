import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import Loaders from '../Utilities/loaders'
import ModalPosts from './modal.posts'

const CollectionPosts = () => {
    const [datas, setDatas] = useState([])
    const [limit, setLimit] = useState(3)
    const [loading, setLoading] = useState(true)
    const [modalShow, setModalShow] = useState(false)
    const [modalData, setModalData] = useState({})

    useEffect(() => {
        let isCancelled = false
        if (isCancelled === false) {
            setLoading(true)
            axios({
                method: 'get',
                url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`
            }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
        }

        return () => { isCancelled = true }
    }, [limit])

    if (loading) return <Loaders />

    return (
        <React.Fragment>
            <h3>{limit} Postingan</h3>
            {datas.map((data, i) => {
                return (
                    <Card key={i} onClick={() => {
                        setModalShow(true)
                        setModalData(data)
                    }} className="mt-3">
                        <Card.Body>{data.title}</Card.Body>
                    </Card>
                )
            })}
            <ModalPosts show={modalShow} onHide={() => setModalShow(false)} data={modalData} />
        </React.Fragment>
    )
}

export default CollectionPosts