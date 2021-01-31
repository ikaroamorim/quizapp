import React from 'react';

export default function QuizDaGaleraPage(props){
    return(
        <div>
            <pre style={{color:'white'}}>
                {JSON.stringify(props, null, 4)}
            </pre>
            
        </div>
    )
}

export async function getServerSideProps(context){
    const dbExterno = await fetch('https://aluraquiz-css.omariosouto.vercel.app/api/db')
    .then((response) =>{
        if(response.ok){
            return response.json();
        }
        throw new Error('Falha em pegar os dados');
    })
    .then((json)=>{ return json; })
    .catch((err) =>{ console.error(err); })

    return{
        props: {dbExterno}
    }
}