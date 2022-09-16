// Display error or success message in p (not span) form
const spanForm = document.querySelectorAll('.spanForm')
// Convert Nodelist in array
const spansAsArray = Array.from(spanForm)
// Get form element
const formX = document.getElementById('form')

// FUNCTION Check if message == "Champ correct" => boolean
const checkString = (string) => {
    return string == "Champ correct"
}

// FUNCTION Submit form
const submitForm = async () => {
    const go = await formX.submit()
    return go
}

// FUNCTION Toggle classes to hide messages if form is ok after submit
const hideSpansIfFormOk = (array) => {
    return array.map((e, i) => {
        e.classList.toggle('fade')
    })
}

// States
let isFormOk = false
let stateX = false

// FUNCTION Send an email
const sendEmail = (data) => {
    console.log("sendMaildata", data);
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "professeurchaos79@gmail.com",
        Password: "2729EC0632D54AE592B17EDC36BF992EEC1D",
        To: 'professeurchaos79@gmail.com',
        From: 'professeurchaos79@gmail.com',
        Subject: `${data.subject}`,
        Body: `Prénom : ${data.firstName} </br>
        Nom : ${data.lastName} </br>
        Téléphone : ${data.email} </br>
        Téléphone : ${data.phone} </br>
        Sujet : ${data.subject} </br>
        Message : ${data.messageContact}`

    }).then(
        message => console.log("Tout est ok a priori", message)
    )
}

// FUNCTION SWAL1 POP UP CONFIRMATION / ANNULATION SOUMISSION FORM
const fireSwal1 = (stateX, userData) => {
    Swal.fire({
        title: 'Tout est valide',
        text: 'Confirmer l\'envoi ?',
        icon: 'info',
        confirmButtonText: 'Bien sûr !',
        cancelButtonText: "Annuler",
        confirmButtonColor: '#1e3d59',
        cancelButtonColor: '#ff6e40',
        showCancelButton: true,
        heightAuto: true,
    })
        .then((action) => {
            // CONFIRMATION SOUMISSION FORM
            if (action.isConfirmed) {
                stateX = true
                console.log("stateX devient true", stateX);
                if (stateX) {
                    // ENVOI MAIL
                    sendEmail(userData)
                    console.log("On envoie le mail");
                    // POP UP INFORMATION ENVOI MAIL 
                    fireSwal2()
                }
                // ANNULATION SOUMISSION FORM
            } else if (action.dismiss === Swal.DismissReason.cancel) {
                Swal.fire( {
                    title: 'Envoi annulé',
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#1e3d59',
         }
                )
            }
        })
}

// FUNCTION SWAL2 CONFIRMATION ENVOI MAIL
const fireSwal2 = () => {
    setTimeout(() => {
        Swal.fire({
            title: 'Mail envoyé ! Merci !',
            text: 'Je vous répondrai dès que possible :)',
            confirmButtonColor: '#1e3d59',
            confirmButtonText: 'Ok',
            icon: 'success',
        })
            .then((action) => {
                hideSpansIfFormOk(spansAsArray)
                if (action.isConfirmed) {
                    submitForm()
                }
            })
    }, 3000)
}


// FUNCTION Fetch data from validForm
const fetchDataFromForm = async (formatedFormData) => {
    try {
        await fetch('components/validForm.php', {
            method: 'POST',
            body: JSON.stringify({ myData: formatedFormData }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                return response.text()
            })
            .then((data) => {
                data = JSON.parse(data)
                // https://softauthor.com/javascript-htmlcollection-vs-nodelist/
                const message = Object.values(data.message)
                const userInfo = data.myData
                spansAsArray.forEach(function (el, i) {
                    // Change message color
                    const toggleColor = () => {
                        spansAsArray[i].style.color = message[i] == "Champ correct" ? "yellow" : "#ff6e40"
                    }
                    toggleColor()
                    // Display message in p
                    spansAsArray[i].innerHTML = message[i]
                })
                // Check if every element in message == "Champ correct" => form is reset or not
                message.every(checkString) ? isFormOk = true : isFormOk = false
                // Triggers fireSwal1 if isFormOk = true
                isFormOk ? fireSwal1(stateX, userInfo) : console.log('NONONONONO')
            })
            .catch((err) => console.log("err", err))
    } catch (err) {
        console.log(err, "erreur du try catch");
    }
}

// Listen to form submit
formX.addEventListener('submit', function (event) {
    event.preventDefault()
    const formatedFormData = new FormData(formX)
    const data = Object.fromEntries(formatedFormData)
    fetchDataFromForm(data)
})