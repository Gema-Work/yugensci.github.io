const MEDICALE_HTML = `
<div class="textbox">
    <h1 class="center">Serment des Médecins</h1>
    <hr class="minihr">
    <ul class="HorizontalList">
        <li style="width: 40%;">
            <img src="assets/serment.png" style="width: 80%;" alt="serment des médecins">
        </li>
        <li>
            <p class="center" style="line-height: 3vh; font-size: smaller;">
                "En tant que mage et médecin, je jure de consacrer mes pouvoirs à la guérison et au bien-être de ceux qui en ont besoin.<br> Je m’engage à soigner avec compassion, à écouter avec attention, et à respecter la dignité de chaque être humain.<br> Je promets d'utiliser ma magie pour apaiser les souffrances, restaurer la santé et soulager la douleur,<br> tout en cherchant sans relâche de nouvelles connaissances pour améliorer mes pratiques.<br> Je m’efforcerai de toujours agir avec honnêteté, intégrité et humilité,<br> en plaçant la vie et le respect de chaque individu au cœur de ma vocation."
            </p> <br>
            <p>En suivant ces principes, ce serment met l’accent sur l’éthique médicale et l'utilisation de la magie dans un cadre altruiste et bienveillant. </p>
        </li>
    </ul>
</div>
<div class="textbox">
    <h1 class="center">Le B-à-ba du bon Médecin</h1>
    <hr class="minihr"> <br>
    <ul class="HorizontalList">
        <li style="width: 50%; line-height: 25px">
            <p class="justify italic">Le b-a-ba du médecin repose sur plusieurs principes fondamentaux : l’écoute attentive des symptômes, l’examen minutieux du corps, le diagnostic précis, et l’utilisation de traitements appropriés, qu’ils soient magiques ou médicaux. Chaque patient est unique, et le médecin doit adapter son approche en fonction des besoins spécifiques de chacun.</p>
            <h3 class="boxButton" style="margin: 50px 50px 0 50px;"><a onclick="LoadMalette();" style="text-decoration: none; text-align: center; height: 20px;">💼・La malette de tout bon médecin </a></h3>
        </li>
        <li> <img src="assets/malette.png" alt="" style="width: 80%;"> </li>
    </ul>
</div>
`

function LoadMedicale() {
    document.getElementById("main").innerHTML = MEDICALE_HTML
}

const MALETTE_HTML = `
<div class="textbox">
    <h1 class="center">La Malette du bon médecin</h1>
    <hr class="minihr"><br>
    <ul class="HorizontalList">
        <li style="width: 100%;"> <img style="width: 80%;" src="assets/malette.png" alt=""> </li>
        <li>
            <p class="justify">À notre époque, la mallette du médecin <span class="italic">(ou trousse médicale)</span> contient un assortiment limité d'instruments et de remèdes pour un usage de première nécessité souvent basé sur des connaissances médicales limitées et basique, parfois trop influencées par la théorie des traditions de guérison magiques. Voici quelques éléments indispensables que l'on peut trouver dans une trousse médicale :</p>
        </li>
    </ul>
    <ul class="HorizontalList">
        <li>
            <h2>1. Remèdes </h2>
            <ul style="padding-inline-start: 0;">
                <li><span class="underline">Fioles</span>: Des fioles contenant des décoctions à base de plantes, des extraits d'herbes, des échantillons et des remède en tout genre. Elles peuvent également contenir de l'eau purifiée, du miel, du vin ou des préparations d'animaux.</li>
                <br><li><span class="underline">Bandages et Compresses</span>: Des morceaux de tissu, souvent de lin, désinfectés, pour enrouler les plaies, les fractures ou les blessures.</li>
                <br><li><span class="underline">Plantes médicinales</span>: Des herbes séchées, des racines, des fleurs et des graines, souvent stockés dans des sachets ou petites pochettes en cuir ou en lin. Souvent utilisées pour des remèdes à consommer comme des tisanes.</li>
                <br><li><span class="underline">Herbier d'Alchimiste</span>: Un manuel contenant des connaissances médicales et des recettes pour fabriquer des médicaments à base de plantes, de minéraux ou d'autres substances naturelles.</li>
            </ul>
        </li> <li style="background-color: white; width: 3px; margin: 0 30px 0 30px;"></li> <li>
            <h2>2. Instruments chirurgicaux </h2>
            <ul style="padding-inline-start: 0;">
                <li><span class="underline">Couteaux / Scalpels / Ciseaux</span>: Utilisés pour les découpes de bandages et tissus, les incisions, saignées ou opérations mineures.  Comporte également dans le lot,  un couteau de collecte pour les plantes médicinales  et  la  récupération d'échantillons.</li>
                <br><br><li><span class="underline">Pincettes</span>: Pour extraire des corps étrangers, comme des éclats de bois , métal ou fragments issus de résidus  de projectiles de magie.</li>
                <br><br><li><span class="underline">Scies / Outils de Fracture</span>: Pour manipuler les fractures osseuses.</li>
            </ul>
        </li>
    </ul>
</div>
`

function LoadMalette() {
    document.getElementById("main").innerHTML = MALETTE_HTML
}