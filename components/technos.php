<?php
$languages = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'Angular',
    'React-Native',
    'SQL',
    'Truc'
];
$values = [80, 70, 60, 40, 40, 50, 50, 90];
?>


<section class="sectionEvaluations">
<?php foreach ($languages as $key => $value) { ?>
    <div class="rowBlocksEvaluations">
    <div class="rowEachBlocksEvaluations">

             <div class="technoName"><?php echo $value; ?></div>
                    <div class="progressBar">
                        <div class="divContainerProgressbar">
                            <div class="progress"></div>
                        </div>
                    </div>
                    <div class="value"><?php echo $values[$key]; ?>%</div>
                </div>
                </div>

   <?php } ?>
</div>
</section>
