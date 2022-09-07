<?php   $languages = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'Angular',
    'React Native',
    'SQL',
    'Truc'
];

$values = [80, 70, 60, 40, 40, 50, 50, 90];
$icons = ["devicon-html5-plain","devicon-css3-plain-wordmark","devicon-javascript-plain","devicon-php-plain",
"devicon-angularjs-plain","devicon-react-original","devicon-mysql-plain-wordmark","devicon-mysql-plain-wordmark"
]
?>
<?php foreach ($languages as $key => $value) { ?>

<div class="flip-card item<?php $key; ?>">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <div class="supHalfFront">
                <i class=<?php echo $icons[$key]; ?>></i>
            </div>
            <div class="infHalfFront">
                <i class="arrow-icon fas fa-arrow-right arrowClick"></i>
            </div>
        </div>
        <div class="flip-card-back">
            <div class="supHalfBack">
                <div class="technoName"><?php echo $value; ?></div>
                <span class="value"><?php echo $values[$key]; ?></span>
            </div>
            <div class="infHalfBack">
            <span class="spanPercent"></span>
                <i class="arrow-icon fas fa-arrow-right arrowClick2"></i>
            </div>
        </div>
    </div>
</div>
<?php } ?>