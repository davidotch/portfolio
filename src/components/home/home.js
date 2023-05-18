import Background from '../../assets/desktop.jpg';

export default function home() {
    return (
        <main className='home'>

            <img className='home_img'
                src={Background}
                alt='laptop and glasses'               
            />

            <div className='home_container'>
                <p className='home_title shadow-title'>
                    &lsaquo;<span className='home_title--green'>div</span> <span className='home_title--violet'>className</span><span className='home_title--red'>=</span>"<strong>Portfolio</strong>"&rsaquo;<br />
                    &emsp;&lsaquo;<span className='home_title--green'>h1</span>&rsaquo;Développeur, intégrateur web&lsaquo;<span className='home_title--green'>h1</span>/&rsaquo;<br />
                    &lsaquo;<span className='home_title--green'>div</span> /&rsaquo;
                </p>  
            </div>

            
              
        </main>
    );
} 