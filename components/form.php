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
        <input type="text" name="username" id="username" required>
        <span>Prénom</span>
        </div>
        <!-- <span class="spanForm username"></span>
 -->
 <div class="inputBox">
        <input type="text" name="userlastname" id="userlastname" required>
        <span>Nom</span>
        </div>
    </div>
    <!-- <span class="spanForm email"></span>        
 -->
    <div class="inputBoxDuoRow">
        <div class="inputBox">
            <input type="tel" name="phone" id="phone" required>
            <span>Téléphone</span>
        </div>
        <div class="inputBox">
            <input type="email" name="email" id="email" required>
            <span>Email</span>
        </div>
    </div>


    <!-- <span class="spanForm phone"></span>       
 -->
    <div class="inputBoxDuoRow">
    <div class="inputBox">
        <input type="text" name="subject" id="subject" required>
        <span>Sujet</span>
        </div>


        <!-- <span class="spanForm subject"></span>     
 -->    <div class="inputBox">
        <textarea name="messageContact" id="messageContact" cols="18" rows="5" required></textarea>
        <span>Message</span>
    </div>
    </div>

    <!-- <span class="spanForm messageContact"></span>  
 -->
    <div class="buttonContainer item6">
        <input type="submit" class="btn btn3" id="buttonForm" value="Press">
    </div>

</form>