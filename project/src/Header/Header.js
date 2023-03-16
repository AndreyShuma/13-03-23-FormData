import Contacts from "./Contacts";
function Header() {
    return (
        <div>
            <h3>Привіт вивчаю Реакт!</h3>
            <ul>
                <li> <a href="/">Home</a> </li>
                <li> <a href="/mainTEST">Main</a> </li>
                <li> <a href="/contacts">Contacts</a> </li>
                {/* <li> <a href="/f">{<Contacts/>}</a></li> */}
            </ul>
        </div>
    )
}

export default Header;