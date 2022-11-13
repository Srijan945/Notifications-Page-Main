import './css/Header.css';
function Header({setAllAsRead}){

    function handleClick(){
        setAllAsRead(true);
    }
    return <header className="header">
        <span>
            <span className="notification">Notifications</span>
            <span className="bubble">3</span>
        </span>
        <span>
            <p className='mark' onClick={handleClick}>Mark all as read</p>
        </span>
    </header>
}

export default Header;