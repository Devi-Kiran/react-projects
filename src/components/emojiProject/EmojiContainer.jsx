import React from 'react';
import {data} from './emojiData';
import styles from '../../styles.module.css';
class EmojiContainer extends React.Component {
    state = {
        emeojiesList: data
    }

    filterControl(value) {
        const filteredArray = data.filter(obj => obj.name.toLocaleLowerCase().includes(value));
        this.setState({emeojiesList: filteredArray})
    }
    
    copyHandler(emoji) {
        navigator.clipboard.writeText(emoji);
    }
    render() {
        const {emeojiesList} = this.state;
        return (
            <main>
                <header>
                    <h1>emoji search</h1>
                    <nav>
                        <input onChange={(e) => this.filterControl(e.target.value.toLocaleLowerCase().trim())} type="search" placeholder="search..."/>
                    </nav>
                </header>
                <section>
                <ul>
                    {emeojiesList.map(obj => {
                        return <li onClick={() => this.copyHandler(obj.emoji)} key={obj.html}><span><span style={{fontSize: "20px"}}>{obj.emoji}</span> {obj.name}</span>  <span className={styles.copyIndicator}>Click to copy emoji</span></li>
                    })}
                </ul>
                </section>
            </main>
        )
    }
}
export default EmojiContainer;