const HTML_PAGE = `
<div class="textbox">
    <h1 class="center">Le Pôle des Sciences de Clover</h1>
    <hr class="minihr">

    <ul class="HorizontalList">
        <li>
            <p class="justify">Le Pôle des Sciences de Clover est un centre d'excellence où la magie et la science se rencontrent pour offrir des avancées majeures dans le domaine de la médecine et de la recherche. Ce pôle regroupe des médecins et des scientifiques, unissant leur expertise pour repousser les frontières de la guérison et de l'innovation. </p>
            <br>
            <p class="justify">Chaque chevalier-mage, fort de sa formation et de ses compétences magiques, a la possibilité de se spécialiser dans l'un des quatre domaines clés du Pôle des Sciences de Clover. Cette approche permet à chaque individu d’évoluer dans un domaine de pointe, alliant la rigueur scientifique aux capacités magiques uniques des chevaliers-mages. Les quatre spécialités proposées sont:</p>
        </li>
        <li style="text-align: center;"><img src="assets/cm.png" alt="" style="width: 80%;"></li>
    </ul>
    <ul class="HorizontalList" id="x4">
        <li>
            <h3 class="boxButton"><a href="https://sites.google.com/view/yugen-registre-mdical-de-clove/accueil/chirurgie-g%C3%A9n%C3%A9rale" style="text-decoration: none; text-align: center; height: 20px;">Chirurgie Générale</a></h3>
            <p class="justify">Les chevaliers-mages peuvent se consacrer à la chirurgie de routine, réparant blessures et pathologies variées grâce à leur savoir-faire magique et médical. Ils sont formés pour traiter des cas complexes, alliant soins traditionnels et techniques innovantes.</p>
        </li>
        <li>
            <h3 class="boxButton"><a href="https://sites.google.com/view/yugen-registre-mdical-de-clove/accueil/chirurgie-cardiovasculaire" style="text-decoration: none; text-align: center; height: 20px;">Chirurgie Cardiovasculaire</a></h3>
            <p class="justify">Spécialisés dans les maladies du cœur et des vaisseaux sanguins, ces chevaliers-mages utilisent des technologies magiques avancées pour soigner des pathologies cardiovasculaires, offrant des interventions de haute précision.</p>
        </li>
        <li>
            <h3 class="boxButton"><a href="https://sites.google.com/view/yugen-registre-mdical-de-clove/accueil/neurochirurgie" style="text-decoration: none; text-align: center; height: 20px;">Neurochirurgie</a></h3>
            <p class="justify">La neurochirurgie permet aux chevaliers-mages de traiter des affections du cerveau et du système nerveux. En alliant connaissances scientifiques et maîtrises magiques, ils peuvent réparer des lésions cérébrales, soigner des troubles neurologiques et même intervenir sur des cas complexes.</p>
        </li>
        <li>
            <h3 class="boxButton"><a onclick="LoadScien();" style="text-decoration: none; text-align: center; height: 20px;">Recherche</a></h3>
            <p class="justify">Les chercheurs du Pôle des Sciences explorent de nouvelles frontières dans le domaine médical et scientifique. Ils mènent des études approfondies pour comprendre les mystères de la biologie, de la magie à la recherche de réponses.</p>
        </li>
    </ul>
</div>
<div class="textbox">
    <h1 class="center">Figures emblématiques</h1>
    <hr class="minihr"> <br>
    <ul class="HorizontalList">
        <li style="width: 250%;">
            <img src="assets/adrien.png" style="width: 80%;" alt="">
        </li>
        <li>
            <h2>Adrien N. W. Vangeance - Capitaine de l'Aube d'Or</h2>
            <h3><span class="italic">Chef de la Chirurgie</span></h3>
            <p class="justify"">Aujourd’hui, Adrien possède des idées plus claires et posées qu’à l’époque. Il a fait preuve à de nombreuses reprises de ses capacités de stratège. Il souhaite faire prospérer l’image des Chevaliers-Mages auprès de la population ainsi que de protéger ses terres qui lui sont chères. Il a fait le serment de servir l’Empereur-Mage, le Roi et le peuple et d’entrer corps et âme dans les conflits mettant en péril la paix de Clover. Combattant à son niveau les inégalités, il fait preuve de discernement et trouve en chacun un adversaire digne d’être affronté. Plus que tout, il souhaite que la paix perdure et qu’à jamais, Clover reste un Royaume fier et juste. Au fur et à mesure, Ventus s’est entouré d’ami proche, avec lequel il a intégré le service de l’Empereur-Mage. Doté d’un fort esprit de justice, il met tout son cœur afin d’apporter la prospérité au royaume, allant à user des anciennes magies de sa famille.</p>
        </li>
    </ul>
</div>
<div class="textbox">
    <h1 class="center">Médecins et Chercheurs de renom à travers le temps</h1>
    <hr class="minihr">
    <ul class="HorizontalList">
        <li style="width: 33%;">
            <h3 class="center"><span class="italic">Son Altesse</span>, Luna Vermillion</h3>
            <p>F</p>
        </li>
        <li style="width: 33%;">
            <h3 class="center">Mayari Evanderis</h3>
            <p>F</p>
        </li>
        <li style="width: 33%;">
            <h3 class="center">Seiko Notche</h3>
            <p>F</p>
        </li>
    </ul>
</div>
`

function LoadAccueil() {
    document.getElementById("main").innerHTML = HTML_PAGE;
}