import React from 'react';
import styles from '../../styles.module.css';
import ProductImages from './ProductImages';
class ProdectSideImageBar extends React.Component {
    render() {
        const {images} = this.props;

        return (
            <div className={styles.sideImageContainer}>
                {
                    images.map(image => {
                        return (
                            <ProductImages key={image} url={image} handleSelectImageChange={this.props.handleSelectImageChange}/>
                            // <img key={image} className={styles.sideImages} src={image}/>
                        )
                    })
                }
            </div>
        )
    }
}
export default ProdectSideImageBar;