import "./css/Tab.css";
import { useEffect, useState } from "react";
function Tab({notification, allAsRead}){

    const [view,setView] =useState(false);
    const [seen,setSeen] =useState(notification.seen);
    const tabStyle={
        backgroundColor: seen ? 'white' : 'hsl(211, 68%, 94%)', 
    }
    function handleClick(){
        setView(!view);
        setSeen(true);
    }
    
    useEffect(function(){
        if(allAsRead){
            setSeen(true);
        }
    },[allAsRead]);
    return <div className="tab" style={tabStyle} onClick= {handleClick}>
        <div className="tab__img">
            <img src={"assets/images/"+notification.img} alt="usericon" />
        </div>
        <div className="tab__info">
            <p className="info__message">
                <span className="message__name">{notification.name}</span>
                {notification.message} 
                {notification.highlightedMessage && 
                <span className="message__highlighted">
                {notification.highlightedMessage}
                </span>}
                {!seen && <span className="dot"></span>}
            </p>
            <p className="info__time">{notification.time}</p>
            {/* {notification.responseImage && <img className="responseImage" src={"assets/images/"+notification.responseImage} alt="responseicon" />} */}
            {view && <p className="info__readMore">{notification.readMore}</p>}   
        </div>
    </div>
}

export default Tab;