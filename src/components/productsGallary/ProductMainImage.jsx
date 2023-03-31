import React from 'react';
import styles from '../../styles.module.css';
class ProdectMainImage extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    render() {
        return (
            <div className={styles.mainImageContainer}>
                <img className={styles.mainImage} src={this.props.selectedImage}/>
            </div>
        )
    }
}
export default ProdectMainImage;