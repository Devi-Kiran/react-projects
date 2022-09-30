import {useState} from 'react';
import HeaderComponent from './HeaderComponent';
import SectionComponent from './SectionComponent';
import FooterComponent from './FooterComponent';
import styles from '../../styles.module.css';

function BirthdayRemainderPageContainer() {
    const personsArray = [
        {id: 1,image: 'https://www.tollywood.net/wp-content/uploads/2022/05/What-is-the-reality-of-Jr-NTR-political-knowledge.jpg',name: 'ntr',age: 35},
        {id: 2,image: 'https://cdn.siasat.com/wp-content/uploads/2022/03/prabhas-1.jpg',name: 'prabhas',age: 46},
        {id: 3,image: 'https://yt3.ggpht.com/ytc/AMLnZu-Niy4xRPBN9WsTqRq697n_d8Ui-Ap-cCMzIc3Xmw=s900-c-k-c0x00ffffff-no-rj',name: 'allu arjun',age: 34},
        {id: 4,image: 'https://filmfare.wwmindia.com/content/2021/feb/ranadaggubati41613741548.jpg',name: 'rana',age: 37},
        {id: 5,image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Nani_at_an_interview_for_film_companion_%28cropped%29.png',name: 'nani',age: 30}
    ];

    const [persons,setPersons] = useState(personsArray)



    const clearHandler = () => {
        setPersons([])
    }

    return (
      <div className={styles.pageContainer}>
          <HeaderComponent personCount={persons.length}/>
          <SectionComponent personsArray={persons}/>
          <FooterComponent clearHandler={clearHandler}/>
      </div>
    )
}

export default BirthdayRemainderPageContainer;