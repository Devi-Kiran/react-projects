import React from 'react';
import styles from "../../styles.module.css";
class ShortcutLinkContainer extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
         isHover: false,
         showTooltipBtn: false,
         showTooltipBox: false,
         showEditShortcut: false,
         editShortcutBox: false
      }
    }

    tooltopHandlerShower = () => {
            this.setState({isHover: true});
            this.setState({showTooltipBtn: true});
    }

    tooltopHandlerHider = () => {
        this.setState({isHover: false});
        if(!this.state.showTooltipBox) {
            this.setState({showTooltipBtn: false});
        }
    }

    editShortcutHandler = (e) => {
        e.preventDefault();
        this.setState({showEditShortcut: true},() => {
            this.props.editShortcutBox(this.state.showEditShortcut);
            //console.log(this.state.showEditShortcut);
        })
    }

    tooltipHandler = (e) => {
        e.preventDefault();
        this.setState({showTooltipBox: true});
    }

    window.addEventListener('click',e => {

    })

    render() {
        const {id,siteName,url} = this.props;

        return (
            <a 
                onMouseOver={this.tooltopHandlerShower}
                onMouseOut={this.tooltopHandlerHider} 
                href={url} 
                target="_blank"
            >
                {this.state.showTooltipBtn && <div onClick={this.tooltipHandler} className={styles.tooltipBtn}>
                    T
                    {this.state.showTooltipBox && (<div className={styles.tooltipBox}>
                        <span onClick={this.editShortcutHandler}>Edit Shortcut</span>
                        {/* <span onClick={this.editShortcutHandler}>Edit Shortcut</span> */}
                        <span>Remove</span>
                    </div>)}
                </div>}
                <div className={styles.logo}></div>
                <span>{`${siteName}`}</span>
            </a>
        )

    }

}
export default ShortcutLinkContainer;