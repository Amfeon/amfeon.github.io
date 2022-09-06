import './scss/main.scss'
import filter from "./helpers/filter";
import renderFilmsList from "./helpers/renderFilmsList";
function main(){
  const cardList = document.querySelector("#card-list")
  let cacheHouseList = []
  if (cardList){
    fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes').then(resp=>{
      return resp.json()
    }).then(data=>{
      cacheHouseList = data
      renderFilmsList(data, cardList)
      filter(cacheHouseList, cardList, renderFilmsList)
    }).catch(error=>{
      console.error('Что то пошло не так, и рисуется заглушка', error)
    })
  }
}
main()
