//Exercice 1
function MineurMajeur(list) {
  let newList = list.map((ele) => {
    ele.age >= 18 ? (ele.status = "majeur") : (ele.status = "mineur");
    return ele;
  });
  return newList;
}
const persons = [
  { name: "MONCEF", age: 13 },
  { name: "BAHIJA", age: 23 },
  { name: "ALA", age: 18 },
];
console.log(MineurMajeur(persons));
//Exercice 2
const str1 = "ahmed&ferah-moez&saadi-fadhel&gadihi";
function formatToArray(str) {
  let nomEtPrenom = str.split("-").join(" ").split(" ");
  let filtrednames = nomEtPrenom.map((ele) => {
    let nom = ele.slice(0, ele.indexOf("&"));
    let prenom = ele.slice(ele.indexOf("&") + 1);
    let person = {
      firstname: nom,
      lastname: prenom,
    };
    return person;
  });
  return filtrednames;
}
console.log(formatToArray(str1));
//Exercice 3
function MoodDetect(liste) {
  let userResult = liste.map((ele) => {
    if (ele.comment.includes("<3")) {
      ele.etat = "heureux";
    } else if (ele.comment.includes(":(")) {
      ele.etat = "triste";
    } else {
      ele.etat = "neutre";
    }
    delete ele.comment;
    return ele;
  });
  return userResult;
}
const users = [
  { name: "sarah", comment: "j'aime ce poste <3" },
  { name: "monya", comment: "le poste est null :( " },
  { name: "carlos", comment: "salut l'algérie" },
];
console.log(MoodDetect(users));

//Exercice 4
function FailedStudent(liste) {
  let filtredSortedListe = liste
    .filter((ele) => ele.note !== undefined)
    .sort((a, b) => a.note - b.note)
    .reverse();
  let moyenneclasse =
    filtredSortedListe
      .map((ele) => ele.note)
      .reduce((acc, ele) => acc + ele, 0) / filtredSortedListe.length;
  finalResult = filtredSortedListe.map((etudiant) => {
    etudiant.note >= moyenneclasse
      ? (etudiant.mention = "bien")
      : (etudiant.mention = "passable");
    return etudiant;
  });
  return finalResult;
}
const etudiants = [
  { name: "sarah", note: undefined },
  { name: "monya", note: 7 },
  { name: "carlos", note: 18 },
  { name: "fadhel", note: 13 },
];
console.log(FailedStudent(etudiants));
