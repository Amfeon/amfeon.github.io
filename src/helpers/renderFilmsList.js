import CreateCard from "./createCard";

export default function renderFilmsList(mass, node){
  node.innerHTML=''
  mass.forEach(item=>{
    const card = CreateCard(item)
    node.insertAdjacentHTML('beforeend', card)
  })
}
