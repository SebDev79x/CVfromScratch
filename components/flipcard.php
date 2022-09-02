<!-- <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
            youpi
        </div>
        <div class="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div> -->
<?php   $languages = [
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
<?php foreach ($languages as $key => $value) { ?>

<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <div class="technoName"><?php echo $value; ?></div>
            <i class="arrow-icon fas fa-arrow-right arrowClick"></i>
        </div>
        <div class="flip-card-back">
            <div class="innerBack">
            <p><?php echo $value; ?></p>
            <p class="value"><?php echo $values[$key]; ?>%</p>
            
            </div>
            <div class="progressBar">
                <div class="divContainerProgressbar">
                    <div class="progress"></div>
                </div>
            </div>
          
            
            <i class="arrow-icon fas fa-arrow-right arrowClick2"></i>
        </div>
    </div>
</div>
<?php } ?>