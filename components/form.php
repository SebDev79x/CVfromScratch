<!--     <form method="POST" action="#" id="form">

        <input type="text" name="username" id="username" placeholder="Votre nom">
        <span class="spanForm username"></span>

        <input type="email" name="email" id="email" placeholder="Votre adresse mail">
        <span class="spanForm email"></span>        

        <input type="tel" name="phone" id="phone" placeholder="Votre numéro de téléphone">
        <span class="spanForm phone"></span>       

        <input type="text" name="subject" id="subject" placeholder="Sujet">
        <span class="spanForm subject"></span>     

        <textarea name="messageContact" id="messageContact" cols="30" rows="10" placeholder="Votre message"></textarea>
        <span class="spanForm messageContact"></span>  

        <div class="buttonContainer">
            <input type="submit" class="btn btn3" id="buttonForm" value="Press">
        </div>
        
    </form> -->
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
            <input type="text" name="subject" id="subject"  placeholder=" ">
            <span class="spanAnimlabel">Sujet</span>
            <span class="spanForm subject"></span>
        </div>
        <div class="inputBox">
        <label for="messageContact"></label>
            <textarea name="messageContact" id="messageContact" cols="18" rows="5" placeholder=" "></textarea>
            <span class="spanAnimlabel">Message</span>
            <span class="spanForm messageContact"></span>
        </div>
    </div>
    <div class="buttonContainer item6">
        <input type="submit" class="btn btn3" id="buttonForm" value="Press">
    </div>
</form>