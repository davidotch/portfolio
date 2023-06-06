import Card from '../card/card';
import { useEffect, useState } from 'react';
import '../../style/gallery.css';

const Gallery = () => {

    const [ data, setData ] = useState();

    useEffect(() => {

        const getData = async () => {
            await fetch('./data.json',{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((res) => {
                if (!res.ok) {
                    throw Error("Sorry an error occured...");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                // console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        getData();
    });
    
    return (
        <section className='gallery'>
            <span id='project'></span>
            <h2>portfolio</h2>
            <div className='project'>
                    {data && data.map(data => {
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
        
    );
}

export default Gallery