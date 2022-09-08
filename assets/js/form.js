const spanForm = document.querySelectorAll('.spanForm')
const spansAsArray = Array.from(spanForm)
console.log("spansAsArray",spansAsArray);
// Check if message == "Champ correct" => boolean
const checkString = (string) => {
    return string == "Champ correct"
}
const submitForm = async () => {
    const go = await formX.submit()
    return go
}
// Toggle classes to hide messages if form is ok after submit
const hideSpansIfFormOk = (array) => {
    return array.map((e, i) => {
        e.classList.toggle('fade')
    })
}
// Get form
const formX = document.getElementById('form')

// Fetch data from form
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
                console.log("MESSAGE LISTE",message);
                spansAsArray.forEach(function (el, i) {
                    // Change message color
                    const toggleColor = () => {
                        spansAsArray[i].style.color = message[i] == "Champ correct" ? "green" : "red"
                    }
                    toggleColor()
                    // Display message in span
                    spansAsArray[i].innerHTML = message[i]
                    // SWAL => badass modal
                    /* const fireSwalFormOk = () => {
                        Swal.fire({
                            title: 'Alors !??',
                            text: 'Confirmer la soumission ?',
                            icon: 'warning',
                            confirmButtonText: 'Entendu',
                            showCancelButton: true
                        }).then((action) => {
                            if (action.isConfirmed) {
                                console.log("response swal");
                               console.log("message",message);

                                setTimeout(() => {
                                   

                                    Swal.fire({
                                        title: 'Super !',
                                        text: 'Message envoyé ! Merci !',
                                        icon: 'success'
                                    })
                                    hideSpansIfFormOk(spansAsArray)
                                    formX.reset()
                                    formX.submit()
                                }, 5000)


                            }
                        })
                    } */
                    let stateX = false
                /*     const fireSwalFormOk = () => {
                        console.log("response swal");
                        Swal.fire({
                            title: 'Alors !??',
                            text: 'Confirmer la soumission ?',
                            icon: 'warning',
                            confirmButtonText: 'Entendu',
                            showCancelButton: true,
                            heightAuto: true,
                            
                        }).then((action) => {

                            if (action.isConfirmed) {
                                stateX = true
                            }
                        })
                    } */
             /*        const fireSwalFormOk2 = (() => {
                        console.log("response swal222222");
                        console.log("message", message);
                        setTimeout(() => {
                            if (stateX == true) {
                                Swal.fire({
                                    title: 'Super !',
                                    text: 'Message envoyé ! Merci !',
                                    icon: 'success',
                                    
                                }).then((action) => {
                                        hideSpansIfFormOk(spansAsArray)
                                        stateX = false
                                        if (action.isConfirmed) {
                                            submitForm()
                                        }
                                    })
                    }
                        }, 3000)
            }) */
        // Check if every element in message == "Champ correct" => form is reset or not
        message.every(checkString) ? console.log("TOUT EST OK") : console.log("RIEN N'EST BON") 
/*         fireSwalFormOk2()
 */    })
})
            .catch ((err) => console.log("err", err))
    } catch (err) {
    console.log(err, "erreur du try catch");
}
}
formX.addEventListener('submit', function (event) {
    event.preventDefault()
    const formatedFormData = new FormData(formX)
    const data = Object.fromEntries(formatedFormData)
    fetchDataFromForm(data)
})