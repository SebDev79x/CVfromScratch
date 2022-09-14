    <form method="POST" action="#" id="form">
        <div class="wrapperRow">
            <div class="rows">
                <div class="inputBox">
                    <label for="firstName"></label>
                    <input type="text" name="firstName" id="firstName" placeholder=" " />
                    <span class="spanAnimlabel">Prénom</span>
                        <p class="spanForm firstName"></p>
                </div>
                <div class="inputBox">
                    <label for="lastName"></label>
                    <input type="text" name="lastName" id="lastName" placeholder=" " />
                    <span class="spanAnimlabel">Nom</span>
                    <p class="spanForm lastName"></p>
                </div>
            </div>
        </div>
        <div class="wrapperRow">
            <div class="rows">
                <div class="inputBox">
                    <label for="email"></label>
                    <input type="text" name="email" id="email" placeholder=" " />
                    <span class="spanAnimlabel">Email</span>
                    <p class="spanForm email"></p>
                </div>
                <div class="inputBox">
                    <label for="phone"></label>
                    <input type="text" name="phone" id="phone" placeholder=" " />
                    <span class="spanAnimlabel">Téléphone</span>
                    <p class="spanForm phone"></p>
                </div>
            </div>
        </div>
            <div class="wrapperRow">
                <div class="inputBox">
                    <label for="subject"></label>
                    <input type="text" name="subject" id="subject" placeholder=" " />
                    <span class="spanAnimlabel">Sujet</span>  
                </div>
                    <p class="spanForm subject"></p>
            </div>
        <div class="wrapperRow">
            <div class="inputBox">
                <label for="messageContact"></label>
                <textarea name="messageContact" id="messageContact" placeholder=" " rows="2" cols="35"></textarea>
                <span class="spanAnimlabel">Message</span>
                    <p class="spanForm messageContact"></p>
            </div>
        </div>
        <div class="buttonContainer" style="display: flex; justify-content: center;">
            <button type="submit" style="padding: 5px 3px;" class="btn buttonForm" id="buttonForm">Envoyer ?</button>
        </div>
    </form>
