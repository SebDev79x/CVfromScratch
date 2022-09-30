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
            <?php foreach ($json as $diploma) { ?>
            <div class="swiper-slide">
                <div class="diploma">
                    

                    <div class="ribbon">
                        <p> <?php echo $diploma->details->from; ?></p>
                    </div>
                    <?php if ($diploma->details->to !== ''): ?>
                    <div class="ribbon2">
                        <p>
                            <?php echo $diploma->details->to; ?>
                        </p>
                    </div>
                    <?php endif; ?>
                    <div class="diplomaBlock">
                    <div class="circle">
                        <i class="fas <?php echo $diploma->icon; ?>"></i>
                    </div>
                        <div class="title">
                            <h3> <?php echo $diploma->title; ?></h3>
                        </div>
                        <div class="diplomaSubtitle">
                            <p><?php echo $diploma->subtitle; ?></p>
                        </div>
                        <div class="diplomaDetails">
                        <p><?php echo $diploma->details->name; ?></p> 
                            <p><?php echo $diploma->details->location; ?></p>
                        </div>
                    </div>
                    <div class="state">
                        <i class="fas <?php echo $diploma->validated; ?>" title="Diplôme obtenu"></i>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
</section>