import React from "react";
import styles from "../../styles.module.css";
class ProductImages extends React.Component {
  render() {
    return (
      <img
        className={styles.sideImages}
        src={this.props.url}
        onMouseOver={() => this.props.handleSelectImageChange(this.props.url)}
      />
    );
  }
}
export default ProductImages;
