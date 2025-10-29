const whatIsInAName = (objArr, objSrc) => {
  return objArr.filter(obj => 
    // vérifier chaque clé de objSrc
    Object.keys(objSrc).every(key => obj.hasOwnProperty(key) && obj[key] === objSrc[key])
  );
};

// Exemple :
const collection = [
  { first: "Romeo", last: "Montague" },
  { first: "Juliet", last: "Capulet" },
  { first: "Mercutio", last: "???"},
];

console.log(whatIsInAName(collection, { last: "Capulet" }));
// Résultat : [{ first: "Juliet", last: "Capulet" }]
