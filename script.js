const result = document.querySelector("#result");
async function getData() {
    try {
        const res = await fetch("https://api.openbrewerydb.org/breweries");
        return await res.json()
            .then((data) => {
                for (const item of data) {
                    const boxItem = document.createElement("div");
                    boxItem.className = "box";
                    boxItem.innerHTML = `<div class="name-area">
                  <p>  Name : ${item.name} </p>
                   </div>
                   <div class="type-area">  <p> Brewery Type : ${item.brewery_type} </p> </div>
                   <div class="address-area">Address :
                       <p class="street">Street :  ${item.street}</p>
                       <p class="city"> City :  ${item.city}</p>
                       <p class="state">State : ${item.state}</p>
                       <div class="zip-code">Postal Code :  ${item.postal_code}</div>
                       <div class="country"><p>Country:  ${item.country} <p></div>
                   </div>
                   <div class="phone">  <p> Phone Number: ${item.phone} <p></div>
                   <div class="url-area"> <p> Website URL:  ${item.website_url} <p></div> 
                   `;
                    result.appendChild(boxItem);
                }
            })
    } catch (e) {
        console.error(e);
    }
};