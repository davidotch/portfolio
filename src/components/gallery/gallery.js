import Card from '../card/card'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../../style/gallery.css'

const Gallery = () => {
    const [data, setData] = useState()

    useEffect(() => {
        const getData = async () => {
            await fetch('/datas/data.json', {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            })
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Sorry an error occured...')
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data)
                    // console.log(data);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        getData()
    })

    return (
        <section className="gallery">
            <span id="project"></span>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.3 },
                }}>
                portfolio
            </motion.h2>
            <div className="project">
                {data &&
                    data.map((data) => {
                        return (
                            <Card
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                cover={data.cover}
                                description={data.description}
                                link={data.link}
                                tech={data.tech}
                            />
                        )
                    })}
            </div>
        </section>
    )
}

export default Gallery
