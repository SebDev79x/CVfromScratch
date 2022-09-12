<form method="POST" action="#" id="form">
    <div class="inputBoxDuoRow">
        <div class="inputBox">
            <label for="firstName"></label>
            <input type="text" name="firstName" id="firstName" placeholder=" ">
            <span class="spanAnimlabel">Prénom</span>
            <span class="spanForm firstName"></span>
        </div>
        <div class="inputBox">
            <label for="lastName"></label>

            <input type="text" name="lastName" id="lastName" placeholder=" ">
            <span class="spanAnimlabel">Nom</span>
            <span class="spanForm lastName"></span>
        </div>
    </div>
    <div class="inputBoxDuoRow">
        <div class="inputBox">
            <label for="email"></label>
            <input type="email" name="email" id="email" placeholder=" ">
            <span class="spanAnimlabel">Email</span>
            <span class="spanForm email"></span>
        </div>
        <div class="inputBox">
            <label for="phone"></label>
            <input type="tel" name="phone" id="phone" placeholder=" ">
            <span class="spanAnimlabel">Téléphone</span>
            <span class="spanForm phone"></span>
        </div>

    </div>
    <div class="inputBoxDuoRow">
        <div class="inputBox">
            <label for="subject"></label>
            <input type="text" name="subject" id="subject" placeholder=" ">
            <span class="spanAnimlabel">Sujet</span>
            <span class="spanForm subject"></span>

        </div>

        <div class="inputBox">
            <label for="messageContact"></label>
            <textarea name="messageContact" id="messageContact" cols="20" rows="10" placeholder=" "></textarea>
            <span class="spanAnimlabel">Message</span>
            <span class="spanForm messageContact"></span>
        </div>

    </div>
    <div class="buttonContainer item6">
        <input type="submit" class="btn btnSubmit" id="buttonForm" value="Valider le formulaire ?">
    </div>
</form>