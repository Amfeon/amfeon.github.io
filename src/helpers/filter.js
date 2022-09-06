export default function filter( cacheHouseList, node,callback){
  const form = document.querySelector("#filter-form")
  const filterInput = document.querySelector("#filter")
  if(form && filterInput){
    form.onsubmit = (e)=>{
      e.preventDefault()
      //TODO: если надо что-то сделать до отправки
    }
    filterInput.onkeyup = (e)=>{
      if(e.currentTarget.value.length===0){
        callback(cacheHouseList, node)
      }
      if(e.currentTarget.value.length > 2){
      const filteredList =   cacheHouseList.filter(house=>{
          return house.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())
        })
        if(filteredList.length){
          callback(filteredList, node)
        }
      }
    }
  }
}
