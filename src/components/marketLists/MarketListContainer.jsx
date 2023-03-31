import React from 'react';
import EachMarket from './EachMarket';
import styles from '../../styles.module.css';

function MarketListContainer() {
    const data = [
        {id: 1,shopName: 'Total Points',content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
        {id: 2,shopName: 'Total Points',content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
        {id: 3,shopName: 'Total Points',content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
        {id: 4,shopName: 'Total Points',content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    ];
    return (
        <div className={styles.marketContainer}>
            <h3>Markets</h3>
            {
                data.map(market => {
                    return <EachMarket key={market.id} shopName={market.shopName} content={market.content}/>
                })
            }
        </div>
    )
}

export default MarketListContainer;