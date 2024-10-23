function Contact(){
    return <>
    <div className="box-contact">
        <h1>Contact</h1>
        <form className="form-contact">
            <div className="name-group">
                <div>
                    <label htmlFor="firstName">Nom :</label>
                    <input name="firstName" type="text" />
                </div>
                
                <div>
                    <label htmlFor="name">Prenom :</label>
                    <input type="text" name="name" />
                </div>
            </div>

            <label htmlFor="email">Email :</label>
            <input type="text" name="email" />

            <label htmlFor="message">Message :</label>
            <textarea name="message" id=""></textarea>
        </form>
    </div>
    </>
}

export default Contact;