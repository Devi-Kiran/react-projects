import React,{useState} from 'react'
function BulbHome() {
    const [url,setUrl] = useState("https://www.w3schools.com/js/pic_bulboff.gif");

    function BulbSwith() {
        setUrl(url !== "https://www.w3schools.com/js/pic_bulbon.gif" ? "https://www.w3schools.com/js/pic_bulbon.gif" : "https://www.w3schools.com/js/pic_bulboff.gif");
    }

    return (
        <div>
            <img onClick={BulbSwith} src={url}/>
        </div>
    )
}

export default BulbHome;