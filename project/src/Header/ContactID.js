import { useParams } from "react-router-dom";


function  ContactID () {
    let {userPhone} = useParams();
    return (
        <div>
            <a href="/contacts"> Назад</a>
            <h3>Contact: {userPhone} </h3>
        </div>
    )

}

export default ContactID;