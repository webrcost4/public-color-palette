import { useEffect, useState } from 'react';
import axios from 'axios';
import { TableColors } from '../styles/styledComponents';

interface IElementsColorPallet {
    name: string;
    hex: string;
    rgb: string;
}

interface IColorPalett {
    colors: IElementsColorPallet[][];
}

function App() {

    const [colors, setColors] = useState<IColorPalett>();
    const [indexColors, setIndexColors] = useState<number>(0);
  
    async function fetchApi() {
        try {
            const pallets = await axios.get('https://weber.vercel.app/pallets.json');
            setColors(pallets.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=> {
        fetchApi();
    }, []);

    return (
        <>

            <div className='row m-auto justify-content-center'>
                {
                    colors?.colors.map((elements, key)=> (
                        <button 
                            style={{
                                backgroundColor: elements[0].hex,
                                color: elements[0].hex === '#000000' ? 'white' : 'black' }}
                            onClick={()=> {
                                setIndexColors(key);
                            }} key={key}>
                            {elements[0].hex}
                        </button>
                    ))
                }
            </div>
            
            <h1>Tabela de cores</h1>
            {colors?.colors[indexColors].map((element, key)=>(
                <TableColors $bgColor={element.hex} key={key}>
                    <p key={key}>{element.hex}</p>
                </TableColors>
            ))}
        </>
    );
}

export default App;
