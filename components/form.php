    <form method="POST" id="form">
        <div class="wrapperRow">
            <div class="rows">
                <div class="inputBox">
                    <label for="firstName"></label>
                    <input class="field" type="text" name="firstName" id="firstName" placeholder=" " />
                    <span class="spanAnimlabel">Prénom</span>
                        <p class="spanForm firstName"></p>
                </div>
                <div class="inputBox">
                    <label for="lastName"></label>
                    <input class="field" type="text" name="lastName" id="lastName" placeholder=" " />
                    <span class="spanAnimlabel">Nom</span>
                    <p class="spanForm lastName"></p>
                </div>
            </div>
        </div>
        <div class="wrapperRow">
            <div class="rows">
                <div class="inputBox">
                    <label for="email"></label>
                    <input class="field" type="text" name="email" id="email" placeholder=" " />
                    <span class="spanAnimlabel">Email</span>
                    <p class="spanForm email"></p>
                </div>
                <div class="inputBox">
                    <label for="phone"></label>
                    <input class="field" type="text" name="phone" id="phone" placeholder=" " />
                    <span class="spanAnimlabel">Téléphone</span>
                    <p class="spanForm phone"></p>
                </div>
            </div>
        </div>
            <div class="wrapperRow">
                <div class="inputBox">
                    <label for="subject"></label>
                    <input class="field" type="text" name="subject" id="subject" placeholder=" " />
                    <span class="spanAnimlabel">Sujet</span>  
                </div>
                    <p class="spanForm subject"></p>
            </div>
        <div class="wrapperRow">
            <div class="inputBox">
                <label for="messageContact"></label>
                <textarea class="field" name="messageContact" id="messageContact" placeholder=" " ></textarea>
                <span class="spanAnimlabel">Message</span>
                    <p class="spanForm messageContact"></p>
            </div>
        </div>
        <div class="buttonContainer">
            <button type="submit" class="btn buttonForm" id="buttonForm">Envoyer ?</button>
        </div>
    </form>
