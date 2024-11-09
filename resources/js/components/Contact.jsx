import { useEffect, useState } from "react";

function Contact() {

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("")
    const [nbCharacter, setNbCharacter] = useState(0);
    //console.log(successMessage);
    // console.log("Voici les erreurs : " + JSON.stringify(errors));

    useEffect(() => {
        document.title = "Contacter Sofiane Dardek - Développeur Web | Portfolio";
    }, []);

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

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken, // Ajout du token CSRF
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                // Si la soumission est réussie
                const data = await response.json();
                setSuccessMessage("Message envoyé.");
                setErrors({});
                form.reset();
            } else {
                if (response.status === 422) {
                    setSuccessMessage("");
                    console.log("erreur de validation");
                    const data = await response.json();
                    setErrors(data.errors);
                } else if (response.status === 500) {
                    // Gestion d'une erreur serveur
                    throw new Error("Erreur interne du serveur !");
                } else {
                    throw new Error("Erreur lors de la soumission du formulaire");
                }
            }

 

        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
            //alert("Une erreur est survenue lors de l'envoi du message.");
        }
    };

    function handleChange(e)
    {
        let nbChar = e.target.value.length;
        setNbCharacter(nbChar);
    }

        // alert(name + " " + email + " " + message);

    return <>
    <div className="box-contact">
        <h1>Contact</h1>
        {successMessage && (
            <p className="sucess-message">{successMessage}</p>
        )}
        <form onSubmit={handleSubmit} className="form-contact">

            {errors.name && errors.name.map((error, index) => (
                <p key={index} className="error-message">{error}</p>
            ))}
            <label htmlFor="name">Nom :</label>
            <input name="name" type="text" />
            
            {errors.email && errors.email.map((error, index) => (
                <p key={index} className="error-message">{error}</p>
            ))}
            <label htmlFor="email">Email :</label>
            <input type="text" name="email" />

            {errors.message && errors.message.map((error, index) => (
                <p key={index} className="error-message">{error}</p>
            ))}

            <div className="message-container">
                <label htmlFor="message">Message :</label>
                <textarea name="message" onChange={handleChange}></textarea>
                <p className={`nb-char ${nbCharacter > 2000 ? 'exceeded' : ''}`}>{nbCharacter}/2000</p>
            </div>

            <button type="submit" className="button-submit">Envoyer</button>
        </form>
    </div>
    </>
}

export default Contact;