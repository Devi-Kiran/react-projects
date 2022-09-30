import React from 'react';
import styles from '../../styles.module.css';

function SectionComponent({personsArray}) {
  return (
    <div>
        {personsArray.map(person => {
          return (
            <div key={person.id} className={styles.personBoxContainer}>
              <img className={styles.personImage} src={person.image}/>
              <div>
                <p className={styles.personName}>{person.name}</p>
                <p className={styles.personAge}>{person.age} years</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default SectionComponent;