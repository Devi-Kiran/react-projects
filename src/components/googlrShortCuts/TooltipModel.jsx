import React from 'react';
import styles from '../../styles.module.css';
import ReactDOM from 'react-dom';
class TooltipModel extends React.Component {
    render() {
        return ReactDOM.createPortal((
            <div className={styles.tooltipModel}>
                <p>Edit Shortcut</p>
                <label>Name</label>
                <input name="name"/>
                <br/>
                <label>URL</label>
                <input name="url"/>
                <div className={styles.buttonsContainer}>
                <button className={styles.cancelBtn}>Calcel</button>
                <button>Done</button>
                </div>
            </div>
        ),document.getElementById('tooltip-model'));
    }
}
export default TooltipModel;