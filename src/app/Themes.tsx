import { useEffect, useState } from 'react';
import axios from 'axios';
import { TableColors } from '../styles/styledComponents';

interface IColorThemes {
  themes: [
    {
      name: string;
      colors: Array<string>
    }
  ]
}

export default function Themes() {

    const [themes, setThemes] = useState<IColorThemes>();
    const [indexThemes, setIndexThemes] = useState<number>(0);
  
    async function fetchApi() {
        try {
            const pallets = await axios.get('https://weber.vercel.app/themes-pallet.json');
            setThemes(pallets.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        fetchApi();
    }, []);

    return (
        <>
            <h1>Paleta de cores</h1>

            {themes?.themes.map((element, key)=>(
                <button 
                    style={{
                        backgroundColor: element.colors[0]
                    }}
                    onClick={()=> setIndexThemes(key)} 
                    key={key}>
                    {element.name}
                </button>
            ))}

            {themes?.themes[indexThemes].colors.map((colors, keyColors)=> (
                <TableColors key={keyColors} $bgColor={colors}>
                    <span>{colors}</span>
                </TableColors>
            ))}

            
        </>
    );
}