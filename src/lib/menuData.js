export const menu = [
  {
    name: "Burrata",
    description:
      "podloga od mliječnih mandlih salata, polu sušene cherry rajčice, perlice aceto balsamica, pesto od suhih rajčica, svježi bosiljak",
    price: 9.7,
    currency: "€",
    category: "početak",
    sub_category: "hladna predjela",
    sub_sub_category: "",
    nutrition: {
      calories: 350,
      protein: 20,
      carbs: 15,
      fats: 25,
    },
    allergens: ["mlijeko", "orašasti plodovi"],
    popularity_score_out_of_5: 4.5,
    image_url: "https://example.com/burrata.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte dodatne cherry rajčice",
        additional_cost: 0.5,
      },
      {
        name: "Dodajte više bosiljka",
        additional_cost: 0.3,
      },
    ],
  },
  {
    name: "Pašteta od pileće i gušće jetre s tartufima",
    description: "maslac, džem od luka, toplo brioche pecivo",
    price: 7.9,
    currency: "€",
    category: "početak",
    sub_category: "hladna predjela",
    sub_sub_category: "",
    nutrition: {
      calories: 300,
      protein: 15,
      carbs: 20,
      fats: 22,
    },
    allergens: ["mlijeko", "gluten"],
    popularity_score_out_of_5: 4.7,
    image_url: "https://example.com/pasteta.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte više džema od luka",
        additional_cost: 0.4,
      },
      {
        name: "Dodajte ekstra tartufe",
        additional_cost: 1.5,
      },
    ],
  },
  {
    name: "Grillani sir škripavac",
    description:
      "džem od brusnice, pikantne crvene papričice, džem od luka, toplo brioche pecivo",
    price: 8.9,
    currency: "€",
    category: "početak",
    sub_category: "hladna predjela",
    sub_sub_category: "",
    nutrition: {
      calories: 400,
      protein: 18,
      carbs: 25,
      fats: 28,
    },
    allergens: ["mlijeko", "gluten"],
    popularity_score_out_of_5: 4.6,
    image_url: "https://example.com/grillani-sir.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte više brusnica",
        additional_cost: 0.5,
      },
      {
        name: "Dodajte dodatni brioche",
        additional_cost: 1.0,
      },
    ],
  },
  {
    name: "Beef tartar",
    description: "maslac, toplo brioche pecivo, pikantne crvene papričice, pikantni umak",
    price: 9.9,
    currency: "€",
    category: "početak",
    sub_category: "hladna predjela",
    sub_sub_category: "",
    nutrition: {
      calories: 320,
      protein: 24,
      carbs: 18,
      fats: 22,
    },
    allergens: ["gluten"],
    popularity_score_out_of_5: 4.8,
    image_url: "https://example.com/beef-tartar.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte više pikantnog umaka",
        additional_cost: 0.3,
      },
      {
        name: "Dodajte ekstra papričice",
        additional_cost: 0.4,
      },
    ],
  },
  {
    name: "Mazalica",
    description: "2 kom / 6 kom zapečena mijevena junetina na kriškama lepinje, luk",
    price: 7.5,
    currency: "€",
    category: "početak",
    sub_category: "hladna predjela",
    sub_sub_category: "",
    nutrition: {
      calories: 300,
      protein: 20,
      carbs: 30,
      fats: 15,
    },
    allergens: ["gluten"],
    popularity_score_out_of_5: 4.4,
    image_url: "https://example.com/mazalica.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte ekstra luk",
        additional_cost: 0.2,
      },
      {
        name: "Dodajte više lepinje",
        additional_cost: 0.5,
      },
    ],
  },
  {
    name: "Dimljena pačja prsa",
    description:
      "džem od luka, pikantne crvene papričice, džem od brusnice, toplo brioche pecivo",
    price: 9.9,
    currency: "€",
    category: "početak",
    sub_category: "hladna predjela",
    sub_sub_category: "",
    nutrition: {
      calories: 350,
      protein: 25,
      carbs: 20,
      fats: 22,
    },
    allergens: ["gluten"],
    popularity_score_out_of_5: 4.6,
    image_url: "https://example.com/dimljena-pacja-prsa.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte više džema od brusnice",
        additional_cost: 0.5,
      },
      {
        name: "Dodajte ekstra brioche",
        additional_cost: 1.0,
      },
    ],
  },
  {
    name: "Pohana paprika punjena sirom",
    description:
      "pečena crvena paprika punjena selekcijom sira, panko mrvice, tartar umak",
    price: 8.9,
    currency: "€",
    category: "početak",
    sub_category: "hladna predjela",
    sub_sub_category: "",
    nutrition: {
      calories: 400,
      protein: 18,
      carbs: 28,
      fats: 25,
    },
    allergens: ["mlijeko", "gluten"],
    popularity_score_out_of_5: 4.5,
    image_url: "https://example.com/pohana-paprika.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte više tartar umaka",
        additional_cost: 0.3,
      },
      {
        name: "Dodajte dodatni sir",
        additional_cost: 0.5,
      },
    ],
  },
  {
    name: "Domaća goveđa juha",
    description: "domaći rezanci i mrkva",
    price: 3.9,
    currency: "€",
    category: "početak",
    sub_category: "juhe",
    sub_sub_category: "",
    nutrition: {
      calories: 150,
      protein: 10,
      carbs: 12,
      fats: 6,
    },
    allergens: ["gluten"],
    popularity_score_out_of_5: 4.7,
    image_url: "https://example.com/domaca-goveda-juha.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte više rezanaca",
        additional_cost: 0.5,
      },
      {
        name: "Dodajte ekstra mrkvu",
        additional_cost: 0.3,
      },
    ],
  },
  {
    name: "Gusta juha od rajčice s krutonima",
    description: "gusta juha od rajčica, krutoni, svježi bosiljak",
    price: 3.9,
    currency: "€",
    category: "početak",
    sub_category: "juhe",
    sub_sub_category: "",
    nutrition: {
      calories: 160,
      protein: 8,
      carbs: 20,
      fats: 6,
    },
    allergens: ["gluten"],
    popularity_score_out_of_5: 4.6,
    image_url: "https://example.com/gusta-juha-od-rajcice.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte više krutona",
        additional_cost: 0.3,
      },
      {
        name: "Dodajte ekstra bosiljak",
        additional_cost: 0.2,
      },
    ],
  },
  {
    name: "Ćevapi",
    description: "100% junetina, 7 kom (230g) / 10 kom (330g)",
    price: 8.6,
    currency: "€",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    nutrition: {
      calories: 300,
      protein: 25,
      carbs: 5,
      fats: 20,
    },
    allergens: [],
    popularity_score_out_of_5: 4.8,
    image_url: "https://example.com/cevapi.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte više ćevapa",
        additional_cost: 1.5,
      },
      {
        name: "Dodajte ekstra luk",
        additional_cost: 0.3,
      },
    ],
  },
  {
    name: "Ćevapi sa sirom",
    description: "100% junetina, 7 kom (230g) / 10 kom (330g)",
    price: 9.6,
    currency: "€",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    nutrition: {
      calories: 350,
      protein: 28,
      carbs: 6,
      fats: 22,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.7,
    image_url: "https://example.com/cevapi-sa-sirom.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte više sira",
        additional_cost: 0.5,
      },
      {
        name: "Dodajte ekstra ćevape",
        additional_cost: 1.5,
      },
    ],
  },
  {
    name: "Pileći ćevapi sa sirom",
    description: "7 kom (230g) / 10 kom (330g)",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 7.7,
    currency: "€",
    nutrition: {
      calories: 300,
      protein: 25,
      carbs: 5,
      fats: 18,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.3,
    image_url: "https://example.com/pileci-cevapi-sa-sirom.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte više sira",
        additional_cost: 0.5,
      },
      {
        name: "Dodajte ekstra ćevape",
        additional_cost: 1.5,
      },
    ],
  },
  {
    name: "Tri vrste ćevapa",
    description: "juneći ćevapi, juneći ćevapi sa sirom, pileći ćevapi 9 kom (300g)",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 8.1,
    currency: "€",
    nutrition: {
      calories: 400,
      protein: 30,
      carbs: 8,
      fats: 25,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.5,
    image_url: "https://example.com/tri-vrste-cevapa.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Ćevapi u umaku od kajmaka",
    description: "100% junetina, 10 kom (330g)",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 10.5,
    currency: "€",
    nutrition: {
      calories: 450,
      protein: 35,
      carbs: 7,
      fats: 30,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.6,
    image_url: "https://example.com/cevapi-u-umaku-od-kajmaka.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Ćevapi u umaku od pečenih paprika",
    description: "100% junetina, 10 kom (330g)",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 10.5,
    currency: "€",
    nutrition: {
      calories: 430,
      protein: 34,
      carbs: 9,
      fats: 28,
    },
    allergens: ["paprika"],
    popularity_score_out_of_5: 4.4,
    image_url: "https://example.com/cevapi-u-umaku-od-pecenih-paprika.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Gurmanski ćevapi",
    description:
      "2 kom junetina, svinjetina, sir, dimljena slanina, pikantna papričica, papar, krem umak od pečene paprike, pikantni feferoni",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 8.1,
    currency: "€",
    nutrition: {
      calories: 500,
      protein: 35,
      carbs: 10,
      fats: 35,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.8,
    image_url: "https://example.com/gurmanski-cevapi.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Pileći batak i zabatak",
    description: "1 kom / 2 kom očišćeni od kosti",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 5.2,
    currency: "€",
    nutrition: {
      calories: 320,
      protein: 25,
      carbs: 2,
      fats: 22,
    },
    allergens: [],
    popularity_score_out_of_5: 4.3,
    image_url: "https://example.com/pileci-batak-i-zabatak.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Mesni uštipci",
    description:
      "junetina, svinjetina, sir, dimljena slanina, tucana paprika, slatke rajčice 5 kom (300g)",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 9.5,
    currency: "€",
    nutrition: {
      calories: 400,
      protein: 30,
      carbs: 8,
      fats: 25,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.5,
    image_url: "https://example.com/mesni-ustipci.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Gurmanska pljeskavica",
    description:
      "junetina, svinjetina, sir, dimljena slanina, tucana paprika, kajmak, pikantni feferoni (330g)",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 10.9,
    currency: "€",
    nutrition: {
      calories: 550,
      protein: 40,
      carbs: 10,
      fats: 35,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.7,
    image_url: "https://example.com/gurmanska-pljeskavica.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Punjena vješalica",
    description: "1 kom / 2 kom svinjski kare punjen sirom i omotan dimljenom slaninom",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 7.3,
    currency: "€",
    nutrition: {
      calories: 450,
      protein: 35,
      carbs: 6,
      fats: 30,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.6,
    image_url: "https://example.com/punjena-vjesalica.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Punjena vješalica u umaku od kajmaka",
    description:
      "Svinjski kare punjen sirom, omotan dimljenom slaninom, umak od kajmaka, 2 kom",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 13.5,
    currency: "€",
    nutrition: {
      calories: 500,
      protein: 35,
      carbs: 7,
      fats: 35,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.8,
    image_url: "https://example.com/punjena-vjesalica-u-umaku-od-kajmaka.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Punjeni pileći batak zabatak",
    description:
      "Očišćeni pileći batak i zabatak, punjen delikates šunkom, sirom i kajmakom, omotan dimljenom slaninom (390g)",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 11.5,
    currency: "€",
    nutrition: {
      calories: 480,
      protein: 35,
      carbs: 8,
      fats: 32,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.7,
    image_url: "https://example.com/punjeni-pileci-batak-zabatak.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "BBQ krilca",
    description: "pileća krilca sa grilla, BBQ umak",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 9.2,
    currency: "€",
    nutrition: {
      calories: 450,
      protein: 30,
      carbs: 12,
      fats: 28,
    },
    allergens: ["soja"],
    popularity_score_out_of_5: 4.5,
    image_url: "https://example.com/bbq-krilca.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "BBQ rebarca",
    description: "BBQ rebarca svinjetina, BBQ umak",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 14.9,
    currency: "€",
    nutrition: {
      calories: 600,
      protein: 40,
      carbs: 15,
      fats: 40,
    },
    allergens: ["soja"],
    popularity_score_out_of_5: 4.6,
    image_url: "https://example.com/bbq-rebarca.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Plata Batak (za 2 osobe)",
    description:
      "juneći ćevapi sa sirom, pileći ćevapi, punjena vješalica, batak zabatak, krške mladog krumpira, šampinjoni, kajmak",
    category: "glavna jela / roštilj",
    sub_category: "mješane plate",
    sub_sub_category: "",
    price: 36.9,
    currency: "€",
    nutrition: {
      calories: 1200,
      protein: 90,
      carbs: 35,
      fats: 75,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.9,
    image_url: "https://example.com/plata-batak.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Gurmanska plata (za 2 osobe)",
    description:
      "juneći ćevapi sa sirom, gurmanska pljeskavica, punjena vješalica, uštipci, krške mladog krumpira, šampinjoni, umbeš",
    category: "glavna jela / roštilj",
    sub_category: "mješane plate",
    sub_sub_category: "",
    price: 36.9,
    currency: "€",
    nutrition: {
      calories: 1300,
      protein: 95,
      carbs: 40,
      fats: 80,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.9,
    image_url: "https://example.com/gurmanska-plata.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Batak burger",
    description:
      "100% junetina, brioche pecivo, cheddar sir, iceberg salata, rajčica, pržena slanina, blagi ili ljuti umak",
    category: "glavna jela / roštilj",
    sub_category: "burgeri",
    sub_sub_category: "",
    price: 8.7,
    currency: "€",
    nutrition: {
      calories: 650,
      protein: 35,
      carbs: 40,
      fats: 35,
    },
    allergens: ["mlijeko", "pšenica", "jaja"],
    popularity_score_out_of_5: 4.6,
    image_url: "https://example.com/batak-burger.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte više sira",
        additional_cost: 0.5,
      },
      {
        name: "Dodajte ekstra slaninu",
        additional_cost: 1.0,
      },
    ],
  },
  {
    name: "Batak burger special",
    description:
      "100% junetina, brioche pecivo, grillani Tomino sir, iceberg salata, rajčica, pržena slanina, blagi ili ljuti umak",
    category: "glavna jela / roštilj",
    sub_category: "burgeri",
    sub_sub_category: "",
    price: 11.5,
    currency: "€",
    nutrition: {
      calories: 700,
      protein: 40,
      carbs: 40,
      fats: 38,
    },
    allergens: ["mlijeko", "pšenica", "jaja"],
    popularity_score_out_of_5: 4.8,
    image_url: "https://example.com/batak-burger-special.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte više sira",
        additional_cost: 0.5,
      },
      {
        name: "Dodajte ekstra slaninu",
        additional_cost: 1.0,
      },
    ],
  },
  {
    name: "Rib-Eye steak",
    description: "dry aged Black Angus, cca. 300g",
    category: "glavna jela / roštilj",
    sub_category: "steakovi",
    sub_sub_category: "",
    price: 10.9,
    currency: "€",
    nutrition: {
      calories: 650,
      protein: 50,
      carbs: 0,
      fats: 45,
    },
    allergens: [],
    popularity_score_out_of_5: 4.7,
    image_url: "https://example.com/rib-eye-steak.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte umak",
        additional_cost: 2.0,
      },
      {
        name: "Dodajte prilog",
        additional_cost: 3.0,
      },
    ],
  },
  {
    name: "Zagrebački odrezak",
    description: "pileći file punjen delikates šunkom i sirom, paniran u panko mrvicama",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 11.5,
    currency: "€",
    nutrition: {
      calories: 550,
      protein: 40,
      carbs: 20,
      fats: 30,
    },
    allergens: ["mlijeko", "pšenica", "jaja"],
    popularity_score_out_of_5: 4.6,
    image_url: "https://example.com/zagrebacki-odrezak.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Čobanac",
    description: "junetina, svinjetina, domaće njoke, ½ lepinja",
    category: "glavna jela / roštilj",
    sub_category: "mesna jela",
    sub_sub_category: "",
    price: 9.9,
    currency: "€",
    nutrition: {
      calories: 600,
      protein: 45,
      carbs: 35,
      fats: 25,
    },
    allergens: ["pšenica"],
    popularity_score_out_of_5: 4.5,
    image_url: "https://example.com/cobanac.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Losos file",
    description: "File lososa sa žara, blitva s krumpirom",
    category: "glavna jela / roštilj",
    sub_category: "riba",
    sub_sub_category: "",
    price: 14.2,
    currency: "€",
    nutrition: {
      calories: 500,
      protein: 35,
      carbs: 15,
      fats: 30,
    },
    allergens: ["riba"],
    popularity_score_out_of_5: 4.7,
    image_url: "https://example.com/losos-file.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Toplo hladna salata s grillanom piletinom",
    description:
      "očišćeni pileći batak zabatak, zelena salata, miješane mlade salate, feta sir, polu sušene rajčice, pržena slanina, krutoni dressing po izboru: jogurt-med-senf/aceto-maslinovo ulje",
    category: "glavna jela / roštilj",
    sub_category: "salate",
    sub_sub_category: "",
    price: 10.2,
    currency: "€",
    nutrition: {
      calories: 350,
      protein: 25,
      carbs: 20,
      fats: 18,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.5,
    image_url: "https://example.com/toplo-hladna-salata-s-grillanom-piletinom.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [
      {
        name: "Dodajte više sira",
        additional_cost: 0.5,
      },
    ],
  },
  {
    name: "Losos salata",
    description:
      "pečene kockice lososa, iceberg salata, rukola, svježi krastavci u umaku od jogurta i kopra, rotkvice, maslinovo ulje",
    category: "glavna jela / roštilj",
    sub_category: "salate",
    sub_sub_category: "",
    price: 14.2,
    currency: "€",
    nutrition: {
      calories: 400,
      protein: 30,
      carbs: 12,
      fats: 25,
    },
    allergens: ["riba", "mlijeko"],
    popularity_score_out_of_5: 4.7,
    image_url: "https://example.com/losos-salata.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Lepinja",
    description: "1 kom",
    category: "prilozi i salate",
    sub_category: "prilozi",
    sub_sub_category: "",
    price: 1.6,
    currency: "€",
    nutrition: {
      calories: 200,
      protein: 5,
      carbs: 40,
      fats: 2,
    },
    allergens: ["pšenica"],
    popularity_score_out_of_5: 4.0,
    image_url: "https://example.com/lepinja.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Pommes Frites",
    description: "150g",
    category: "prilozi i salate",
    sub_category: "prilozi",
    sub_sub_category: "",
    price: 3.0,
    currency: "€",
    nutrition: {
      calories: 300,
      protein: 3,
      carbs: 40,
      fats: 15,
    },
    allergens: [],
    popularity_score_out_of_5: 4.3,
    image_url: "https://example.com/pommes-frites.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Kriške mladog krumpira",
    description: "sa topljenim sirom i prženim komadićima slanine",
    category: "prilozi i salate",
    sub_category: "prilozi",
    sub_sub_category: "",
    price: 3.8,
    currency: "€",
    nutrition: {
      calories: 350,
      protein: 5,
      carbs: 45,
      fats: 15,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.5,
    image_url: "https://example.com/kriske-mladog-krumpira.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Domaći krumpir",
    description: "sa topljenim sirom i prženim komadićima slanine",
    category: "prilozi i salate",
    sub_category: "prilozi",
    sub_sub_category: "",
    price: 3.8,
    currency: "€",
    nutrition: {
      calories: 350,
      protein: 5,
      carbs: 45,
      fats: 15,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.4,
    image_url: "https://example.com/domaci-krumpir.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Pommes frites od batata",
    description: "",
    category: "prilozi i salate",
    sub_category: "prilozi",
    sub_sub_category: "",
    price: 3.8,
    currency: "€",
    nutrition: {
      calories: 320,
      protein: 2,
      carbs: 45,
      fats: 12,
    },
    allergens: [],
    popularity_score_out_of_5: 4.2,
    image_url: "https://example.com/pommes-frites-od-batata.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Blitva s krumpirom",
    description: "",
    category: "prilozi i salate",
    sub_category: "prilozi",
    sub_sub_category: "",
    price: 3.8,
    currency: "€",
    nutrition: {
      calories: 150,
      protein: 3,
      carbs: 20,
      fats: 5,
    },
    allergens: [],
    popularity_score_out_of_5: 4.1,
    image_url: "https://example.com/blitva-s-krumpirom.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Zapečeni grah",
    description: "",
    category: "prilozi i salate",
    sub_category: "prilozi",
    sub_sub_category: "",
    price: 4.0,
    currency: "€",
    nutrition: {
      calories: 250,
      protein: 12,
      carbs: 30,
      fats: 10,
    },
    allergens: [],
    popularity_score_out_of_5: 4.3,
    image_url: "https://example.com/zapeceni-grah.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Šampinjoni sa žara",
    description: "",
    category: "prilozi i salate",
    sub_category: "prilozi",
    sub_sub_category: "",
    price: 3.8,
    currency: "€",
    nutrition: {
      calories: 100,
      protein: 3,
      carbs: 8,
      fats: 5,
    },
    allergens: [],
    popularity_score_out_of_5: 4.2,
    image_url: "https://example.com/sampinjoni-sa-zara.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Povrće sa žara",
    description: "",
    category: "prilozi i salate",
    sub_category: "prilozi",
    sub_sub_category: "",
    price: 4.0,
    currency: "€",
    nutrition: {
      calories: 120,
      protein: 3,
      carbs: 15,
      fats: 5,
    },
    allergens: [],
    popularity_score_out_of_5: 4.3,
    image_url: "https://example.com/povrce-sa-zara.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Zapečena paprika",
    description: "u krem umaku od vrhnja s grana padano sirom",
    category: "prilozi i salate",
    sub_category: "prilozi",
    sub_sub_category: "",
    price: 3.8,
    currency: "€",
    nutrition: {
      calories: 180,
      protein: 4,
      carbs: 15,
      fats: 10,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.4,
    image_url: "https://example.com/zapecena-paprika.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Feferoni sa žara",
    description: "",
    category: "prilozi i salate",
    sub_category: "prilozi",
    sub_sub_category: "",
    price: 4.3,
    currency: "€",
    nutrition: {
      calories: 50,
      protein: 1,
      carbs: 10,
      fats: 1,
    },
    allergens: [],
    popularity_score_out_of_5: 4.1,
    image_url: "https://example.com/feferoni-sa-zara.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Kupus / zelena / rajčica / krastavac",
    description: "",
    category: "prilozi i salate",
    sub_category: "salate",
    sub_sub_category: "",
    price: 3.2,
    currency: "€",
    nutrition: {
      calories: 50,
      protein: 2,
      carbs: 10,
      fats: 1,
    },
    allergens: [],
    popularity_score_out_of_5: 4.0,
    image_url: "https://example.com/kupus-zelena-rajcica-krastavac.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Miješana salata",
    description: "",
    category: "prilozi i salate",
    sub_category: "salate",
    sub_sub_category: "",
    price: 3.6,
    currency: "€",
    nutrition: {
      calories: 60,
      protein: 2,
      carbs: 10,
      fats: 2,
    },
    allergens: [],
    popularity_score_out_of_5: 4.1,
    image_url: "https://example.com/mijesana-salata.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Rikula",
    description: "",
    category: "prilozi i salate",
    sub_category: "salate",
    sub_sub_category: "",
    price: 3.8,
    currency: "€",
    nutrition: {
      calories: 25,
      protein: 2,
      carbs: 3,
      fats: 1,
    },
    allergens: [],
    popularity_score_out_of_5: 4.0,
    image_url: "https://example.com/rikula.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Rikula s cherry rajčicama",
    description: "",
    category: "prilozi i salate",
    sub_category: "salate",
    sub_sub_category: "",
    price: 4.0,
    currency: "€",
    nutrition: {
      calories: 35,
      protein: 2,
      carbs: 5,
      fats: 1,
    },
    allergens: [],
    popularity_score_out_of_5: 4.1,
    image_url: "https://example.com/rikula-s-cherry-rajcicama.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Cherry rajčice",
    description: "",
    category: "prilozi i salate",
    sub_category: "salate",
    sub_sub_category: "",
    price: 3.2,
    currency: "€",
    nutrition: {
      calories: 20,
      protein: 1,
      carbs: 4,
      fats: 0,
    },
    allergens: [],
    popularity_score_out_of_5: 4.0,
    image_url: "https://example.com/cherry-rajcice.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Pečena crvena paprika",
    description: "",
    category: "prilozi i salate",
    sub_category: "salate",
    sub_sub_category: "",
    price: 3.6,
    currency: "€",
    nutrition: {
      calories: 30,
      protein: 1,
      carbs: 6,
      fats: 1,
    },
    allergens: [],
    popularity_score_out_of_5: 4.1,
    image_url: "https://example.com/pecena-crvena-paprika.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Coleslaw salata",
    description: "kupus, mrkva, celer, dressing",
    category: "prilozi i salate",
    sub_category: "salate",
    sub_sub_category: "",
    price: 3.0,
    currency: "€",
    nutrition: {
      calories: 150,
      protein: 2,
      carbs: 10,
      fats: 10,
    },
    allergens: ["celer"],
    popularity_score_out_of_5: 4.2,
    image_url: "https://example.com/coleslaw-salata.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Šopska salata",
    description: "rajčica, paprika, krastavac, luk, feta sir",
    category: "prilozi i salate",
    sub_category: "salate",
    sub_sub_category: "",
    price: 4.2,
    currency: "€",
    nutrition: {
      calories: 100,
      protein: 4,
      carbs: 8,
      fats: 6,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.3,
    image_url: "https://example.com/sopska-salata.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Umak od kajmaka",
    description: "",
    category: "prilozi i salate",
    sub_category: "dodaci",
    sub_sub_category: "",
    price: 2.5,
    currency: "€",
    nutrition: {
      calories: 100,
      protein: 1,
      carbs: 2,
      fats: 10,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.4,
    image_url: "https://example.com/umak-od-kajmaka.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Kajmak / Umbeš",
    description: "",
    category: "prilozi i salate",
    sub_category: "dodaci",
    sub_sub_category: "",
    price: 2.5,
    currency: "€",
    nutrition: {
      calories: 120,
      protein: 2,
      carbs: 2,
      fats: 12,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.3,
    image_url: "https://example.com/kajmak-umbes.jpg",
    availability: "Dostupno",
    last_updated: new Date(),
    customization_options: [],
  },
  {
    name: "Batak BBQ umak",
    description: "Ukusan BBQ umak za dodavanje posebnog okusa batacima.",
    category: "prilozi i salate",
    sub_category: "dodaci",
    sub_sub_category: "",
    price: 1.5,
    currency: "€",
    nutrition: {
      calories: 50,
      protein: 0,
      carbs: 12,
      fats: 0,
    },
    allergens: ["soja"],
    popularity_score_out_of_5: 4.0,
    image_url: "https://example.com/batak-bbq-umak.jpg",
    availability: "Dostupno",
    last_updated: "2024-05-24T00:00:00.000Z",
    customization_options: [],
  },
  {
    name: "Jalapeno papričice",
    description: "Ljute jalapeno papričice, savršene za dodavanje pikantnosti.",
    category: "prilozi i salate",
    sub_category: "dodaci",
    sub_sub_category: "",
    price: 1.5,
    currency: "€",
    nutrition: {
      calories: 20,
      protein: 0,
      carbs: 4,
      fats: 0,
    },
    allergens: [],
    popularity_score_out_of_5: 4.5,
    image_url: "https://example.com/jalapeno-papricice.jpg",
    availability: "Dostupno",
    last_updated: "2024-05-24T00:00:00.000Z",
    customization_options: [],
  },
  {
    name: "Ajvar domaći",
    description: "Domaći ajvar od svježih paprika.",
    category: "prilozi i salate",
    sub_category: "dodaci",
    sub_sub_category: "",
    price: 2.5,
    currency: "€",
    nutrition: {
      calories: 80,
      protein: 1,
      carbs: 10,
      fats: 4,
    },
    allergens: [],
    popularity_score_out_of_5: 4.7,
    image_url: "https://example.com/ajvar-domaci.jpg",
    availability: "Dostupno",
    last_updated: "2024-05-24T00:00:00.000Z",
    customization_options: [],
  },
  {
    name: "Krem umak od pečenih paprika",
    description: "Kremasti umak od pečenih paprika, idealan za dodatak jelima.",
    category: "prilozi i salate",
    sub_category: "dodaci",
    sub_sub_category: "",
    price: 2.5,
    currency: "€",
    nutrition: {
      calories: 90,
      protein: 1,
      carbs: 5,
      fats: 8,
    },
    allergens: ["mlijeko"],
    popularity_score_out_of_5: 4.6,
    image_url: "https://example.com/krem-umak-od-pecenih-paprika.jpg",
    availability: "Dostupno",
    last_updated: "2024-05-24T00:00:00.000Z",
    customization_options: [],
  },
  {
    name: "Kren / Ketchup / Senf / Majoneza / Tartar",
    description: "Različiti umaci za sve ukuse.",
    category: "prilozi i salate",
    sub_category: "dodaci",
    sub_sub_category: "",
    price: 1.0,
    currency: "€",
    nutrition: {
      calories: 60,
      protein: 0,
      carbs: 3,
      fats: 5,
    },
    allergens: ["jaja", "senf"],
    popularity_score_out_of_5: 4.2,
    image_url: "https://example.com/umaci.jpg",
    availability: "Dostupno",
    last_updated: "2024-05-24T00:00:00.000Z",
    customization_options: [],
  },
  {
    name: "Dressing za salatu",
    description: "Jogurt, med i senf dressing za salatu.",
    category: "prilozi i salate",
    sub_category: "dodaci",
    sub_sub_category: "",
    price: 1.0,
    currency: "€",
    nutrition: {
      calories: 45,
      protein: 1,
      carbs: 3,
      fats: 3,
    },
    allergens: ["mlijeko", "senf"],
    popularity_score_out_of_5: 4.3,
    image_url: "https://example.com/dressing-za-salatu.jpg",
    availability: "Dostupno",
    last_updated: "2024-05-24T00:00:00.000Z",
    customization_options: [],
  },
  {
    name: "Ćevapi mini",
    description: "Ćevapi (junetina) 5 kom, pomfrit, ketchup.",
    category: "dječji menu",
    sub_category: "dječji menu",
    sub_sub_category: "",
    price: 6.9,
    currency: "€",
    nutrition: {
      calories: 350,
      protein: 15,
      carbs: 25,
      fats: 20,
    },
    allergens: ["gluten"],
    popularity_score_out_of_5: 4.8,
    image_url: "https://example.com/cevapi-mini.jpg",
    availability: "Dostupno",
    last_updated: "2024-05-24T00:00:00.000Z",
    customization_options: [
      {
        name: "Bez pomfrita",
        additional_cost: 0,
      },
      {
        name: "Dodatni ketchup",
        additional_cost: 0.5,
      },
    ],
  },
  {
    name: "Batak mini",
    description: "Pohani prženi batak zabatak u panko mrvicama, pomfrit, ketchup.",
    category: "dječji menu",
    sub_category: "dječji menu",
    sub_sub_category: "",
    price: 7.3,
    currency: "€",
    nutrition: {
      calories: 400,
      protein: 20,
      carbs: 30,
      fats: 25,
    },
    allergens: ["gluten", "jaja"],
    popularity_score_out_of_5: 4.9,
    image_url: "https://example.com/batak-mini.jpg",
    availability: "Dostupno",
    last_updated: "2024-05-24T00:00:00.000Z",
    customization_options: [
      {
        name: "Bez pomfrita",
        additional_cost: 0,
      },
      {
        name: "Dodatni ketchup",
        additional_cost: 0.5,
      },
    ],
  },
];