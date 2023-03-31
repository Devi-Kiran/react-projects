import React from 'react';
import ProdectSideImageBar from './ProductSideImagesBar';
import ProdectMainImage from './ProductMainImage';
import styles from '../../styles.module.css';
class ProdectPageContainer extends React.Component {
    state = {
        selectedImage: "https://imgd.aeplcdn.com/664x374/cw/cars/discontinued/hyundai/verna-2006-2010.jpg?q=75",
    };

    handleSelectImageChange = (image) => {
        this.setState({
            selectedImage: image
        })
    }

    render() {
        const images = [ 
            "https://imgd.aeplcdn.com/664x374/cw/cars/discontinued/hyundai/verna-2006-2010.jpg?q=75",
            "https://img.indianautosblog.com/2020/03/30/2020-hyundai-verna-facelift-front-three-quarters-r-37af.jpg",
            "https://imgd.aeplcdn.com/0x0/cw/ec/25465/Hyundai-Verna-Exterior-105272.jpg?v=201711021421",
            "https://static.autox.com/uploads/2020/03/Hyundai-Verna-Image-5-.jpg",
            "https://imgd-ct.aeplcdn.com/1056x660/n/n5cc3sa_1483293.jpg?q=75"

        ];
        return (
            <div className={styles.container}>
                <ProdectSideImageBar 
                    images={images} 
                    handleSelectImageChange={this.handleSelectImageChange}
                />
                <ProdectMainImage selectedImage={this.state.selectedImage} />
            </div>
        )
    }
}
export default ProdectPageContainer;