const HTML_PAGE2 = `
<div class="textbox">
    <h1 class="center">Hiérarchie Médicale et Scientifique</h1>
    <h3>🎖️ Chef</h3>
    <p class="justify italic">Le Chef supervise l'ensemble des activités du Centre de Recherches. Il prend les décisions stratégiques, guide les équipes de chercheurs et de médecins, et assure l'harmonisation entre les projets de recherche et les besoins médicaux. Sa mission est de garantir que les recherches progressent tout en assurant la sécurité et le bien-être des membres du centre.</p>
    <h3>🔰Titulaires <span class="italic">spécialisation</span></h3>
    <p class="justify italic">Les Titulaires spécialisés sont des experts dans un domaine précis de la recherche ou de la médecine, tel que la Chirurgie Générale, la Chirurgie Cardiovasculaire ou encore la Neurochirurgie. Leur mission est de mener des recherches approfondies, de développer de nouvelles applications thérapeutiques ou d'améliorer les traitements existants, en partageant leur expertise avec les autres membres du centre. Certains d'entre-eux seront nommés Chef de leur Service respectif. La différence entre médecins et chercheurs reste dans leur appelation, un Titulaire en médecine sera appelé Docteur (Dr.) tandis qu'un Titulaire en recherche sera appelé Professeur (Pr.).</p>
    <h3>⚔️ Résidents</h3>
    <p class="justify italic">Les Résidents sont des chercheurs et médecins en formation avancée. Ils participent activement aux projets de recherche et aux soins médicaux, mènent des expériences et assistent dans les traitements des patients. Leur objectif est d'acquérir une expertise dans leur domaine de spécialisation avant de devenir des titulaires.</p>
    <h3>⚔️ Internes</h3>
    <p class="justify italic">Les Internes sont des étudiants ou des apprentis chercheurs et médecins. Ils aident dans les expériences de recherche et les soins quotidiens des patients. Ils apprennent sous la supervision des titulaires et des résidents, en se formant à la fois sur les théories magiques et médicales, tout en participant aux tâches pratiques de recherche et de traitement.</p>
    <h3>🛡️ Infirmiers</h3>
    <p class="justify italic">Les Infirmiers sont responsables des soins médicaux à la Clinique. Ils traitent les blessures et les maladies des chercheurs et des patients en utilisant des potions, des remèdes et des sorts de guérison. Leur rôle est essentiel pour maintenir la santé et la sécurité du peuple au jour le jour, en particulier lors de désastres.</p>
    <h3>🛡️ Aides Sanitaire</h3>
    <p class="justify italic">Les Aides Sanitaires assistent les infirmiers et les chercheurs médicaux dans leurs tâches. Ils apportent un soutien lors des premiers secours, préparent des remèdes de base, et veillent à la gestion quotidienne des équipements médicaux et des matériaux de recherche. Leur mission est d’assurer un environnement sûr et de faciliter les soins en cas d’urgence.</p>
</div>
`

function LoadHierarchie() {
    document.getElementById("main").innerHTML = HTML_PAGE2;
}