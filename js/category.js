
// agarro lo que esta desp del ? en la url
let qs = location.search;

//transformo en objheto
let qsObj = new URLSearchParams(qs);

//guardo en categoryu la categoria clorrespondiente
let category = qsObj.get('categoria');


//cambio el titulo
let titulo = document.querySelector(".titulo-productos");
titulo.innerText = category;



// carga de productos (api)


