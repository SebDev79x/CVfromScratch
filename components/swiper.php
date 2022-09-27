<?php
$xpFile = 'json/xp.json';
$json = file_get_contents($xpFile);
$json = json_decode($json);
?>
<section class="sectionSwiper anchor" id="sectionSwiper">
    <!-- Slider container -->
    <div class="swiper">
        <div class="diplomasXp">
            <h2>Diplômes/Expériences</h2>
        </div>
        <!-- Required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <?php  foreach ($json as $diploma) { ?>
            <div class="swiper-slide">
                <div class="diploma">
                    <div class="circle">
                        <i class="fas <?php echo $diploma->icon ?>"></i>
                    </div>
                    <div class="titles">
                        <h3> <?php echo $diploma->title ?></h3>
                    </div>
                    <div class="diplomaBlock">
                        <div class="diplomaSubtitle">
                            <p><?php echo $diploma->subtitle ?></p>
                        </div>
                        <div class="diplomaDetails">
                            <?php echo $diploma->details->year;?>
                            <?php echo $diploma->details->location;?>
                            <?php echo $diploma->details->name;?>
                        </div>
                    </div>
                    <div class="state">
                        <i class="fas <?php echo $diploma->validated ?>"></i>
                    </div>
                </div>
            </div>
            <?php } ?>

        </div>

        <!-- <div class="swiper-slide">
                <div class="diploma">
                    <div class="circle"><i class="fas fa-user-graduate logoXP"></i></div>
                    <div class="titles">
                        <h3>B.T.S.</h3>
                        <h4>Assistant de Gestion PME/PMI</h4>
                        <div>Alternance avec Manpower</div>
                    </div>
                    <p>2003</br>
                        AFPI Sifor Oise</br>
                        Compiègne, 60</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="diploma">
                    <div class="circle"><i class="fas fa-briefcase logoXP"></i></div>

                    <div class="titles">
                        <h3>2xMoinsCher.com</h3>
                        <h4>Chargé de Clientèle</h4>
                        <h4>Responsable Modération</h4>
                    </div>
                    <p>2007 - 2012</br>

                        Paris, 3ème Arr.</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="diploma">
                    <div class="circle"><i class="fas fa-briefcase logoXP"></i></div>

                    <div class="titles">
                        <h3>Éducation Nationale</h3>
                        <h4>Assistant d'Éducation</h4>
                    </div>
                    <p>2012 - 2018</br>

                        Noyon, 60</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="diploma">
                    <div class="circle"><i class="fas fa-user-graduate logoXP"></i></div>
                    <div class="titles">
                        <h3 class="titleDev">TITRE</h3>
                        <h4>Développeur Web & Web Mobile</h4>
                    </div>
                    <p>2020</br>
                        La Manu</br>
                        Noyon, 60</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="diploma">
                    <div class="circle"><i class="fas fa-user-graduate logoXP"></i></div>
                    <div class="titles">
                        <h3>Certificat</h3>
                        <h4>POEC React Native</h4>
                    </div>
                    <p>2022</br>
                        La Manu</br>
                        Compiègne, 60</p>
                </div>
            </div>
        </div> -->
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
</section>