import React from 'react';
import QuetionAndAnswerCard from './QuetionAndAnswerCard';
import { qAndAData } from '../quetionAndAnswerProject/qAndAData';

function QAndAContainer() {
    return (
        <main>
            <header>
                <h1>quetion and answer about login</h1>
            </header>
            <section>
                {qAndAData.map(data => {
                    return <QuetionAndAnswerCard key={data.id} data={data}/>
                })}
            </section>
        </main>
    )
}

export default QAndAContainer