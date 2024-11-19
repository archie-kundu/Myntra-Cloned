let bagItems=[ ]
onLoad()
function onLoad(){
    displayItemonHomePage()
    displayBagIcon()
    let bagItemStr=localStorage.getItem('bagItems')
    bagItems=bagItemStr? JSON.parse (bagItemStr):[]
}
function addToBag(itemId){
    bagItems.push(itemId)
    displayBagIcon()
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
}
function displayBagIcon(){
    let BagItemsCountElement=document.querySelector(".bag-item-count")
    if(bagItems.length>0){
        BagItemsCountElement.style.visibility="visible"
        BagItemsCountElement.innerText= bagItems.length
    }
    else{
        BagItemsCountElement.style.visibility="hidden"
    }
    
}
function displayItemonHomePage(){
    let itemContainerElement = document.querySelector(".items-container")
    if(!itemContainerElement){
        return
    }
    let innerHTML=" "
    items.forEach(item=>{
        innerHTML += `<div class="item-container">
            <img class="item-image" src="${item.image}" alt="img">
            <div class="rating">${item.rating.stars} ⭐ ${item.rating.count}</div>
            <div class="company">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">RS ${item.current_price}</span>
                <span class="original-price">RS ${item.original_price}</span>
                <span class="discount">(${item.discount}% OFF)</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
            </div>`
    })
    itemContainerElement.innerHTML = innerHTML
}

// let item={
//     item_image:'images/6.jpg',
//      rating : {
//         start:4.5,
//         end:770
//     },
//     company: "DressBerry",
//     item_name: "Men Analogue Watch",
//     current_price: 824,
//     original_price: 3299,
//     discount:75
// }


