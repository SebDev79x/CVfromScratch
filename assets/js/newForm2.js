// Input name onblur et onfocus
// J'affecte à une variable l'id de mon input "name" etc.
let inputName = document.getElementById('name');
// Avec onblur, quand je sors de l'input et s'il est vide, j'applique une bordure rouge à l'input.
inputName.onblur = function () {
    if (inputName.value == "") {
        $(inputName).css('border', '3px solid red');
    }
};
// Si mon curseur rentre dans l'input, la bordure rouge disparaît. Idem pour les autres inputs.
inputName.onfocus = function () {
    if (inputName.value == "") {
        $(inputName).css('border', 'none');
    }
};
let inputPhone = document.getElementById('phone');
// Avec onblur, quand je sors de l'input et s'il est vide, j'applique une bordure rouge à l'input.
inputPhone.onblur = function () {
    if (inputPhone.value == "") {
        $(inputPhone).css('border', '3px solid red');
    }
};
// Si mon curseur rentre dans l'input, la bordure rouge disparaît. Idem pour les autres inputs.
inputPhone.onfocus = function () {
    if (inputPhone.value == "") {
        $(inputPhone).css('border', 'none');
    }
};
// Input email onblur et onfocus
let inputEmail = document.getElementById('email');
inputEmail.onblur = function () {
    if (inputEmail.value == "") {
        $(inputEmail).css('border', '3px solid red');
    }
};
inputEmail.onfocus = function () {
    if (inputEmail.value == "") {
        $(inputEmail).css('border', 'none');
    }
};
// Input subject onblur et onfocus
let inputSubject = document.getElementById('subject');
inputSubject.onblur = function () {
    if (inputSubject.value == "") {
        $(inputSubject).css('border', '3px solid red');
    }
};
inputSubject.onfocus = function () {
    if (inputSubject.value == "") {
        $(inputSubject).css('border', 'none');
    }
};
// Input messageContact onblur et onfocus
let textareaMessageContact = document.getElementById('messageContact');
textareaMessageContact.onblur = function () {
    if (textareaMessageContact.value == "") {
        $(textareaMessageContact).css('border', '3px solid red');
    }
};
textareaMessageContact.onfocus = function () {
    if (textareaMessageContact.value == "") {
        $(textareaMessageContact).css('border', 'none');
    }
};
// Ici je détecte la saisie utilisateur pour chaque input grâce à onkeyup et j'indique en temps réel à l'aide d'une bordure rouge ou 
// verte si la saisie est correcte ou pas.
// Input name onkeyup
inputName.onkeyup = function () {
    let nameValue = $('input[name=name]').val();
    let regexName = /^([A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\?\-\s]{2,50})$/;
    if (!(nameValue).match(regexName)) {
        $(inputName).css('border', '3px solid red');
        $(inputName).css('color', 'red');
        $('.semicolonName').css('visibility', 'visible');
        $('.messageSpanName').css('display', 'none');
        if ($('.help-block-name').css('border', '3px solid green')) {
            $('.help-block-name').css('border', '3px solid green').remove();
        }
    } else {
        $(inputName).css('border', '3px solid green');
        $(inputName).css('color', 'green');
        $('.semicolonName').css('visibility', 'collapse');
        $('.messageSpanName').css('display', 'inline-block');
        $('.help-block-name').remove();
    }
};
inputPhone.onkeyup = function () {
    let phoneValue = $('input[name=phone]').val();
    let regexPhone = /^((\+)33|0)[1-9](\d{2}){4}$/;
    let regexPhone2 = /^((\+)33|0)[1-9](0){8}$/;

    if ((!(phoneValue).match(regexPhone)) || ((phoneValue).match(regexPhone2))) {
        $(inputPhone).css('border', '3px solid red');
        $(inputPhone).css('color', 'red');
        $('.semicolonPhone').css('visibility', 'visible');
        $('.messageSpanPhone').css('display', 'none');
        if ($('.help-block-phone').css('border', '3px solid green')) {
            $('.help-block-phone').css('border', '3px solid green').remove();
        }
    } else {
        $(inputPhone).css('border', '3px solid green');
        $(inputPhone).css('color', 'green');
        $('.semicolonPhone').css('visibility', 'collapse');
        $('.messageSpanPhone').css('display', 'inline-block');

        $('.help-block-phone').remove();
    }
};
// Input subject onkeyup
inputSubject.onkeyup = function () {
    let subjectValue = $('input[name=subject]').val();
    let regexMessage = /^([0-9A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\?\.\:\;\,\!\"\'\(\)\-\s]{8,50})$/;
    if (!(subjectValue).match(regexMessage)) {
        $(inputSubject).css('border', '3px solid red');
        $(inputSubject).css('color', 'red');
        $('.semicolonSubject').css('visibility', 'visible');
        $('.messageSpanSubject').css('display', 'none');
        if ($('.help-block-subject').css('border', 'green')) {
            $('.help-block-subject').css('border', 'green').remove();
        }
    } else {
        $(inputSubject).css('color', 'green');
        $(inputSubject).css('border', '3px solid green');
        $('.semicolonSubject').css('visibility', 'collapse');
        $('.messageSpanSubject').css('display', 'inline-block');
        $('.help-block-subject').remove();
    }
};
// Input messageContact onkeyup
textareaMessageContact.onkeyup = function () {
    let MCValue = $('textarea[name=messageContact]').val();
    let regexMessage = /^([0-9A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\?\.\:\;\,\!\"\'\(\)\-\s]{8,50})$/;
    if (!(MCValue).match(regexMessage)) {
        $(textareaMessageContact).css('border', '3px solid red');
        $(textareaMessageContact).css('color', 'red');
        $('.semicolonMessageContact').css('visibility', 'visible');
        $('.messageSpanMessageContact').css('display', 'none');
        if ($('.help-block-messageContact').css('border', 'green')) {
            $('.help-block-messageContact').css('border', 'green').remove();
        }
    } else {
        $(textareaMessageContact).css('color', 'green');
        $(textareaMessageContact).css('border', '3px solid green');
        $('.semicolonMessageContact').css('visibility', 'collapse');
        $('.messageSpanMessageContact').css('display', 'inline-block');
        $('.help-block-messageContact').remove();

    }
};
// Input email onkeyup
inputEmail.onkeyup = function () {
    let emailValue = $('input[name=email]').val();
    let regexMail = /^[\w-_.+]*[\w-_.]@([\w]+\.)+[\w]+[\w]$/;
    if (!(emailValue).match(regexMail)) {
        $(inputEmail).css('color', 'red');
        $(inputEmail).css('border', '3px solid red');

        $('.semicolonEmail').css('visibility', 'visible');
        $('.messageSpanEmail').css('display', 'none');
        if ($('.help-block-email').css('border', 'green')) {
            $('.help-block-email').css('border', 'green').remove();
        }
    } else {
        $(inputEmail).css('color', 'green');
        $('.semicolonEmail').css('visibility', 'collapse');
        $('.messageSpanEmail').css('display', 'inline-block');
        $(inputEmail).css('border', '3px solid green');
        $('.help-block-email').remove();
    }
};

$('.help-block-email').remove();
$('.help-block-name').remove();
$('.help-block-subject').remove();
$('.help-block-messageContact').remove();
$('.help-block-phone').remove();

// AJAX pour la soumission du formulaire
$('form').submit(function (event) {
    event.preventDefault();
    var formData = {
        'name': $('input[name=name]').val(),
        'email': $('input[name=email]').val(),
        'subject': $('input[name=subject]').val(),
        'messageContact': $('textarea[name=messageContact]').val(),
        'phone': $('input[name=phone]').val()

    };
    $('.help-block-email').remove();
    $('.help-block-name').remove();
    $('.help-block-subject').remove();
    $('.help-block-messageContact').remove();
    $('.help-block-phone').remove();

    $.ajax({
        type: 'POST', // type de requête
        url: 'contactCtrl000Webhost.php', // url vers laquellle envoyer les données
        data: formData, // données du formulaire sous forme d'objet
        dataType: 'json'
       /*  headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        } */
    })
        // done promise callback
        .done(function (data) {
                // erreurs relevées dans le formulaire (input = name)

                if (data.errors.name) {
                    $('#name').css('border', '2px solid red');
                    $('#name-group').append('<div class="help-block-name" style="color : red;">' + data.errors.name + '</div>');


                }else
                if (data.success.name) {
                    $('#name').css('border', '2px solid green');

                    $('#name-group').append('<div class="help-block-name" style="color : green;">' + data.success.name + ' semble convenir' + '</div>');

                }
                // erreurs relevées dans le formulaire (input = email)
                if (data.errors.email) {
                    $('#email').css('border', '2px solid red');
                    /*   $('#spanEmail').fadeIn("slow");*/
                    $('#email-group').append('<div class="help-block-email" style="color : red;">' + data.errors.email + '</div>');

                }else
                if (data.success.email) {
                    $('#email').css('border', '2px solid green');
                    /* $('#spanEmail').fadeOut("slow");*/
                    $('#email-group').append('<div class="help-block-email" style="color : green;">' + data.success.email + ' semble convenir' + '</div>');

                }
                // erreurs relevées dans le formulaire (input = subject)
                if ((data.errors.subject)) {
                    $('#subject').css('border', '2px solid red');
                    $('#subject-group').append('<div class="help-block-subject" style="color : red;">' + data.errors.subject + '</div>');
                }else
                if (data.success.subject) {
                    $('#subject').css('border', '2px solid green');
                    $('#subject-group').append('<div class="help-block-subject" style="color : green;">' + data.success.subject + '</div>');

                }
                // erreurs relevées dans le formulaire (input = messageContact)
                if ((data.errors.messageContact)) {
                    $('#messageContact').css('border', '2px solid red');
                    /*  $('#spanMContact').fadeIn("slow");*/
                    $('#messageContact-group').append('<div class="help-block-messageContact" style="color : red;">' + data.errors.messageContact + '</div>');

                }else
                if (data.success.messageContact) {
                    $('#messageContact').css('border', '2px solid green');
                    /* $('#spanMContact').fadeOut("slow");*/
                    $('#messageContact-group').append('<div class="help-block-messageContact" style="color : green;">' + data.success.messageContact + '</div>');

                }
                // erreurs relevées dans le formulaire (input = messageContact)
                if ((data.errors.phone)) {
                    $('#phone').css('border', '2px solid red');
                    /*  $('#spanMContact').fadeIn("slow");*/
                    $('#phone-group').append('<div class="help-block-phone" style="color : red;">' + data.errors.phone + '</div>');

                }else
                if (data.success.phone) {
                    $('#phone').css('border', '2px solid green');
                    /* $('#spanMContact').fadeOut("slow");*/
                    $('#phone-group').append('<div class="help-block-phone" style="color : green;">' + data.success.phone + '</div>');

                }                
        })
       
        //promise callback en cas d'échec
        .fail(function (xhr,status,error) {
                     setTimeout(function () {
                $('#messageNotSent').show('slow');
                $('form').hide();
                $('.closeModalSpan').hide();
                $('.modal-footer').hide('slow');
                $('.modal-content2').hide();
            }, 1000);
            setTimeout(function () {
                $('#messageNotSent').hide('slow');
                $('form').show();
                $('.closeModalSpan').show();
                $('.modal-content2').show();
                $('.modal-footer').show('slow');
            }, 7000);
        })
        
      

        .then(function (data) {
            if (data.message == 'youpi') {
                $('form').hide();
                $('#messageSent').css('margin-top', '50px');
                $('#messageSent').show('slow');
                $('.modal-content2').css('border-style', 'none');
                $('.closeModalSpan').hide();
                $('.modal-footer').hide();
                $('#loader').show('fast', function () {
                    setTimeout(function () {
                        return "Cela fonctionne";
                    }, 1000);
                });
                if ("Cela fonctionne") {
                    function swalModal() {
                        $('#exampleModalCenter').hide();
                        swal({
                            text: "Votre mail a bien été envoyé. Je vous en remercie !",
                            closeModal: true
                        }).then(function () {
                            window.location = 'index.php';
                        })
                    }
                }
                setTimeout(swalModal, 5000);
            }
        })
});


