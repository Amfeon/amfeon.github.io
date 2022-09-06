export default function CreateCard(data){
  if(data.id){
    const url  = ' /details/' + data.id
    const template = `
              <a class="card" href="${url}">
                  <div class="card__header">
                      <img class="card__image" src="https://langformula.ru/wp-content/uploads/2019/04/house.jpg" alt="${data.title}"/>
                      <div class="card__label card__label_${data.type}">${data.type}</div>
                  </div>
                  <div class="card__body">
                      <div class="card__title">${data.title}</div>
                      <div class="card__address">${data.address}</div>
                      <div class="card__text">New Properties for Sale from <strong>£214,999</strong> </div>
                      <div class="card__subtext">Shared Ownership Available</div> 
                  </div>
              </a>
  `
    return template
  }

}
