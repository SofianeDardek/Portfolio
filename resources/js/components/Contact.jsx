function Contact(){
    return <>
    <div className="box-contact">
        <h1>Contact</h1>
        <form className="form-contact">
            <label htmlFor="firstName">Nom :</label>
            <input name="firstName" type="text" />
            

            <label htmlFor="email">Email :</label>
            <input type="text" name="email" />

            <label htmlFor="message">Message :</label>
            <textarea name="message" id=""></textarea>

            <button type="submit" className="button-submit">Envoyer</button>
        </form>
    </div>
    </>
}

export default Contact;