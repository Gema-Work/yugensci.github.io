const SCIEN_HTML = `
<div class="textbox">
    <h1 class="center">Centre de recherches</h1>
    <hr class="minihr"><br>
    <div style="width: 50%; margin: auto;">
        <p class="center">Le Centre de Recherches du Royaume de Clover est une institution dédiée à l'étude et au développement de la magie, visant à améliorer la vie quotidienne, la sécurité et la défense du royaume. </p>
        <p class="center">Ses objectifs incluent la recherche sur la magie, la création d'outils et de sorts pratiques (comme des dispositifs médicaux, des barrières de protection), et l'exploration de magies anciennes ou interdites. </p>
        <p class="center">Il forme aussi des mages spécialisés et collabore avec d'autres institutions pour garantir le progrès et la protection du royaume de Clover.</p>
    </div>
</div>
<div class="textbox">
    <h1 class="center">Champ d'action des chercheurs et scientifiques</h1>
    <hr class="minihr"><br>
    <p>Le Centre de Recherches centralise les différents projets scientifiques du Royaume, sous la surveillance étroite du Parlement Magique, qui sont compris dans un large panel d'utilités, notamment :</p>
    <p>
        <span class="underline">Création d'outils magiques médicaux</span>: Développement d'outils qui aident les médecins à effectuer leurs tâches de soins afin de maintenir leur camarade en vie pour leur permettre de se rétablir. <br><br>
        <span class="underline">Création de Barrières magiques</span>: Recherche sur des protections magiques puissantes capables de défendre des zones stratégiques contre des attaques, des invasions ou des phénomènes naturels. <br><br>
        <span class="underline">Création d'outils magiques à usage divers</span>: Recherche sur des armures enchantées qui augmentent la résistance physique, magique ou les deux. <br><br>
        <span class="underline">Étude de la Faune et la Flore</span>: Recherche sur l’utilisation de la magie pour accélérer la croissance des plantes, améliorer la qualité des récoltes ou rendre certaines cultures résistantes aux maladies. <br><br>
        <span class="underline">Étude des mythes anciens</span>: Recherche sur la création de sorts qui ont des effets permanents, comme des améliorations corporelles permanentes ou des enchantements durables.
    </p>
</div>
<div class="textbox">
    <h1 class="center">Informations</h1>
    <hr class="minihr"><br>
    <div style="max-width: 300px; margin: auto;">
        <h3 class="boxButton"><a href="https://sites.google.com/view/clover-scientifique/artéfact/rune" style="text-decoration: none; text-align: center; height: 20px;">🔗 Runes 🔗</a></h3>
        <h3 class="boxButton"><a href="https://sites.google.com/view/yugen-registre-mdical-de-clove/organisation/projets-en-cours-terminé" style="text-decoration: none; text-align: center; height: 20px;">🔗 Projets 🔗</a></h3>
        <h3 class="boxButton"><a href="https://sites.google.com/view/clover-scientifique/artéfact" style="text-decoration: none; text-align: center; height: 20px;">🔗 Artéfacts 🔗</a></h3>
        <h3 class="boxButton"><a style="text-decoration: none; text-align: center; height: 20px;">🔗 Technologies 🔗</a></h3>
    </div>
</div>
`

function LoadScien() {
    document.getElementById("main").innerHTML = SCIEN_HTML
}