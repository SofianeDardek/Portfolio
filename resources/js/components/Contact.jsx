function Contact() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);


        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        try {
            // Récupère le jeton CSRF depuis la balise meta
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            
            const response = await fetch("http://localhost:8000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken, // Ajout du token CSRF
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }

            const data = await response.json();
            console.log("Réponse du serveur:", data);
            alert("Votre message a été envoyé avec succès !");

        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
            alert("Une erreur est survenue lors de l'envoi du message.");
        }
    };

        // alert(name + " " + email + " " + message);

    return <>
    <div className="box-contact">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit} className="form-contact">
            <label htmlFor="name">Nom :</label>
            <input name="name" type="text" />
            

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