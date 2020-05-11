const quartos = [
    {
      "photo": "https://a0.muscache.com/im/pictures/e6c4b347-49c7-4840-8c00-df36a2a273da.jpg?aki_policy=x_large",
      "property_type": "apartamento",
      "location": "rio de janeiro",
      "name": "Apartment in Son Parc, wonderful views",
      "price": 433,
      "guest": 2
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/4a5326cb-95e4-4220-a4d8-c91f50cf784c.jpg?aki_policy=xx_large",
      "property_type": "apartamento",
      "name": "APARTAMENTO IDEAL PAREJAS EN SON PARC",
      "location": "sao paulo",
      "price": 368,
      "guest": 3
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/77a102a4-cf65-475e-be60-4d592307ab4a.jpg?aki_policy=xx_large",
      "property_type": "casa",
      "name": "Casa Charmosa Bem Localizada",
      "location": "minas gerais",
      "price": 70,
      "guest": 3
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/83de85c5-ce24-4cc4-ae85-dfb2300b4a06.jpg?aki_policy=xx_large",
      "property_type": "casa",
      "name": "Quartos pertinho do Anhembi!",
      "location": "sao paulo",
      "price": 189,
      "guest": 4
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/d5dbb5b2-12a3-4de5-87d0-5a66841eb731.jpg?aki_policy=xx_large",
      "property_type": "chacara",
      "name": "Charming Chalet, private pool, free AC & WiFi",
      "location": "rio de janeiro",
      "price": 737,
      "guest": 5
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/ce7dd48a-8125-4cea-a1b7-27ce0068d5d8.jpg?aki_policy=x_large",
      "property_type": "chacara",
      "name": "Menorca Green Park C7",
      "location": "minas gerais",
      "price": 520,
      "guest": 3
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/bea86611-2f82-487a-a62e-17ab268515de.jpg?aki_policy=xx_large",
      "property_type": "chacara",
      "name": "Villa Monty",
      "location": "rio de janeiro",
      "price": 1291,
      "guest": 5
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/4cfeba0b-a0c3-4ae4-87c9-5e9349608814.jpg?aki_policy=xx_large",
      "property_type": "estudio",
      "name": "Bonito penthouse cerca del aeropuerto CDMX",
      "price": 73,
      "location": "sao paulo",
      "guest": 2
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/ac081c48-0161-4cde-a0e6-77b3bd933f94.jpg?aki_policy=xx_large",
      "property_type": "estudio",
      "name": "The Backpacker's Retreat - Balcony",
      "location": "minas gerais",
      "price": 51,
      "guest": 1
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/dc72255f-7965-4964-b89e-7bfb9f4aa939.jpg?aki_policy=x_large",
      "property_type": "estudio",
      "name": "10min airport, Foro Sol, Palacio de los Deportes",
      "location": "rio de janeiro",
      "price": 81,
      "guest": 1
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/60f11b07-3aa2-4e03-ac03-6a0c12fbc35b.jpg?aki_policy=x_large",
      "property_type": "estudio",
      "name": "Acogedor depto cerca aeropuerto, foro Sol, Centro",
      "location": "sao paulo",
      "price": 77,
      "guest": 1
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/f2379eb0-d77e-4a99-9df5-f16032693f0d.jpg?aki_policy=xx_large",
      "property_type": "loft",
      "name": "Sol Nascente da Prainha",
      "location": "minas gerais",
      "price": 200,
      "guest": 30
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/5ed611f3-fb3f-489e-b1cb-d5f26ea80c4c.jpg?aki_policy=xx_large",
      "property_type": "loft",
      "name": "Ap novo com wi-fi na Prainha - Arraial do Cabo",
      "location": "rio de janeiro",
      "price": 145,
      "guest": 3
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/207ef44d-fbe6-4fcd-9824-91b65de4b3cb.jpg?aki_policy=xx_large",
      "property_type": "quarto",
      "name": "Suite @ Subway Trianon Masp",
      "location": "minas gerais",
      "price": 69,
      "guest": 2
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/f94985db-d4db-4c10-8b9b-82342746601d.jpg?aki_policy=x_large",
      "property_type": "quarto",
      "name": "Quarto Arouche Centro SP Ótima Localização",
      "location": "sao paulo",
      "price": 45,
      "guest": 1
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/8b397c47-01af-4476-9fb8-784ab4df2c91.jpg?aki_policy=xx_large",
      "property_type": "quarto",
      "name": "Quarto 1 - Parque da Aclimacão",
      "location": "rio de janeiro",
      "price": 55,
      "guest": 2
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/c3c6432f-b140-4768-8d61-c160e639b7a8.jpg?aki_policy=x_large",
      "property_type": "quarto",
      "name": "Existe amor em SP",
      "location": "sao paulo",
      "price": 55,
      "guest": 2
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/306e0369-ab79-40be-bdb7-c87340dcdbc1.jpg?aki_policy=xx_large",
      "property_type": "quarto",
      "name": "Confortável quarto de casal px. à Av. Paulista",
      "location": "sao paulo",
      "price": 80,
      "guest": 2
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/f5abd356-8a66-495b-b00b-877e7eae0323.jpg?aki_policy=xx_large",
      "property_type": "quarto",
      "name": "Room Higienopolis são paulo",
      "location": "sao paulo",
      "price": 80,
      "guest": 2
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/f1899868-21d0-44c2-b253-8b927821e178.jpg?aki_policy=xx_large",
      "property_type": "quarto",
      "name": "Confortável quarto solteiro px. à Av. Paulista",
      "location": "sao paulo",
      "price": 80,
      "guest": 1
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/6b46fa03-8ef3-4370-8158-390935279dcf.jpg?aki_policy=xx_large",
      "property_type": "quarto",
      "name": "Modern, Cozy + all you need! Muito aconchegante!!",
      "location": "rio de janeiro",
      "price": 66,
      "guest": 3
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/f074bead-ee2d-4c91-a958-2a0360e1ad7c.jpg?aki_policy=xx_large",
      "property_type": "sitio",
      "name": "Recanto Rosana - Quartos e estrutura completa",
      "location": "rio de janeiro",
      "price": 39,
      "guest": 4
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/de890df5-1279-481f-989c-97847f8482cd.jpg?aki_policy=xx_large",
      "property_type": "sitio",
      "name": "Suite na Montanha - Refúgio do Artista",
      "location": "minas gerais",
      "price": 77,
      "guest": 2
    },
    {
      "photo": "https://a0.muscache.com/im/pictures/17b61b71-3b06-4cec-bf8f-f32daea24f39.jpg?aki_policy=xx_large",
      "property_type": "sitio",
      "name": "Sítio Costa do Sol",
      "location": "minas gerais",
      "price": 100,
      "guest": 5
    }
  ];


self.quartos = quartos;

$(document).ready(function(){
  createItensAndAppendToList(self.quartos);
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 230) {
      $('.nav').addClass('affix');
      console.log("OK");
  } else {
      $('.nav').removeClass('affix');
  }
});

function selectHtmlElementById(id) {
  return document.querySelector(`#${id}`);
}

function selectHtmlElementByClass(classe) {
 return document.querySelector(`.${classe}`);
}

function createHtmlElement(element) {
  return document.createElement(element); 
}

function createItem(item) {
  let li = createHtmlElement('li');
  let img = createHtmlElement('img');
  let sectionf = createHtmlElement('section');
  let sections = createHtmlElement('section');
  let pf = createHtmlElement('p');
  let ps = createHtmlElement('p');
  let button = createHtmlElement('button');

  let type = document.createTextNode(`${item.property_type} - ${item.location}`);
  let price = document.createTextNode("R$ " + item.price);
  let btn = document.createTextNode("Ver mais");
  
  $(li).attr("class", "cards-item");
  $(img).attr("src", item.photo);
  $(img).attr("class", "photo");
  $(sectionf).attr("class", "card");
  $(sections).attr("class", "card-content");
  $(pf).attr("class", "card-type");
  $(ps).attr("class", "card-price");
  $(button).attr("class", "button");

  li.appendChild(sectionf);
  sectionf.appendChild(img);
  sectionf.appendChild(sections);
  sections.appendChild(pf);
  sections.appendChild(ps);
  sections.appendChild(button);
  pf.appendChild(type);
  ps.appendChild(price);
  button.appendChild(btn);
  
  return li;
}

function createItensAndAppendToList(quartos){
  let ul = self.selectHtmlElementById('cards');
  
  quartos.map(quarto => {
    const li = self.createItem(quarto);
    ul.appendChild(li);
  })

}

function constructFilterObj(filters) {
  let newFilterObj = {};
  filters.map(filter => {
    for (var key in filter)
      if (filter[key] == ""){
        return;
      }

    return newFilterObj[key] = filter[key];
  })

  return newFilterObj;
}

function filterQuartos(filtersObj) {
  return self.quartos.filter((quarto) => {
    for (var key in filtersObj) {
      if (quarto[key] === undefined || quarto[key] != filtersObj[key])
        return false;
    }
  
    return true;
  });
}

function buttonFilter () {
  let filters = [
    {"property_type": selectHtmlElementByClass('type').value},
    {"location": selectHtmlElementByClass('location').value},
    // "price": selectHtmlElementByClass('price').value,
    {"guest": selectHtmlElementByClass('guest').value}
  ];
  
  let filtersObj = constructFilterObj(filters);

  let quartosFiltered = filterQuartos(filtersObj);

  $("#cards").empty();
  createItensAndAppendToList(quartosFiltered);
}
