const gotraData = {
  Kaudinya: {
    gotraName: "Kaudinya",
    castes: [
      "Pyakuryal", "Paneru", "Acharya", "Gaire", "Sapkota",
      "Satyal", "Morasaini", "Parajuli", "Baskota", "Trital",
      "Nyaupane", "Lakai Khadka (Kamalakothe)", "Thapa (Gamle, Bagale)", "Rawal",
    ],
    prawar: ["Kaudinya", "Vashistha", "Maitravaruni"],
  },
  Atri: {
    gotraName: "Atri",
    castes: ["Chapagain", "Wosti", "Mishra", "Khatiwada", "Malla", "Ojha", "Adhikari (Thadarai)", "Gautam"],
    prawar: ["Atri", "Archananasa", "Shyavashva"],
  },
  Aatreya: {
    gotraName: "Aatreya",
    castes: [
      "Duwadi Dulal", "Poudel", "Thapa (Punwar, Khulal, Kalikote, Bagale)",
      "Pani Pokharel", "Kalikote Khadka", "Aryal", "Sigdel", "Gelal",
      "Ghonde Gurung", "Duwadi", "Majhi",
    ],
    prawar: ["Atreya", "Archananasa", "Shyavashva"],
  },
  Upamanyu: {
    gotraName: "Upamanyu",
    castes: ["Mainali", "Dhakal", "Bartoula", "Dweni", "Oli", "Bhatt (Duwaal)", "Pandey"],
    prawar: ["Upamanyu", "Kapila", "Viruj"],
  },
  Kashyap: {
    gotraName: "Kashyap",
    castes: [
      "Shah", "Shahi", "Thakuri", "Rayamajhi", "Ghimire", "Godar Thapa", "Gartoula",
      "Adhikari (Bhandare, Khilchine, Kauwaali)", "Bogati", "Kathayat", "Budhathoki (Sodari)",
      "Pandey (Simladiya, Badakhora)", "Badal", "Chatakuli", "Shrestha", "Limbu", "Rai",
      "Sherpa", "Others Unknown"
    ],
    prawar: ["Kashyap", "Avatsara", "Naidruva"],
  },
  Dhungel: {
    gotraName: "Dhungel",
    castes: ["Dhungel"],
    prawar: ["Agastya", "Dadhyachyuta", "Idmbaha", "Agasti", "Jaimini", "Dadhichi"],
  },
  Kaushik: {
    gotraName: "Kaushik",
    castes: [
      "Regmi", "Khaptari (Khadka)", "Vist (Khaptari)", "Khaptari Budhathoki", "Bidari",
      "Phuyal", "Rimal", "Lamichhane Khadka", "Khaptari Khadka", "Dhungana", "Dhital",
      "Tiwari", "Majhi", "Khaptari Basnet", "Luitel", "Pudasaini", "Baniya", "Raghuwanshi",
      "Bhandari", "Bastakoti", "Dashauliya", "Pathak", "Gauli", "Dangi",
    ],
    prawar: ["Kaushik", "Adhmarsana", "Vishwamitra", "Devrata", "Odal"],
  },
  Garg: {
    gotraName: "Garg",
    castes: [
      "Bastola", "Gajurel", "Bhatt", "Risal", "Lamichhane (Bhatt)", "Bhurtel",
      "Acharya", "Lamichhane Thapa", "Bhetwal", "Lamichhane Gurung", "Rokaha", "Chundal",
      "Joshi (Jhijar)", "Palpali Khadka",
    ],
    prawar: ["Garg", "Gargya", "Gautam", "Vishwamitra", "Parashar"],
  },
  Gautam: {
    gotraName: "Gautam",
    castes: ["Tripathi", "Tiwari", "Chand", "Dangar"],
    prawar: ["Gautam", "Garg", "Shandilya"],
  },
  GhritKaushik: {
    gotraName: "Ghritkaushik",
    castes: ["Sutarkarki", "Baral", "Pandit", "Khanal", "Nepal", "Vardewa"],
    prawar: ["Ghritkaushik", "Vishwamitra"],
  },
  Dhananjaya: {
    gotraName: "Dhananjaya",
    castes: [
      "Homegai", "Humagai", "Rijal", "Pangeni", "Basel", "Kukurkate", "Guragai",
      "Khulal Basnet", "Bhusal", "Khulal Budhathoki", "Gairipipli", "Dhamala", "Pakuwaal",
    ],
    prawar: ["Dhananjaya", "Vishwamitra", "Madhuccchanda"],
  },
  Bharadwaj: {
    gotraName: "Bharadwaj",
    castes: [
      "Chaulagain", "Subedi", "Thapaliya", "Vaidawar Kshetri", "Panthi", "Siluwaal",
      "Vist (Sijapati)", "Wagle", "Lohani", "Pant", "Adhikari (Thami)", "Dudh Pokharel",
      "Shiwakoti", "Devkota", "Nirola", "Jamarkattel", "Khadka (Maharajji)", "Raut",
      "Kanel", "Shripali Basnet", "Pandey (Kuleta)", "Joshi (Latoula)", "Ghale Gurung",
      "Lama Gurung", "Rajouria", "Chimouria", "Burlakoti", "Majgainya", "Sitaula",
      "Bohora", "Sangroula", "Khanigelal",
    ],
    prawar: ["Bharadwaj", "Angiras", "Varhaspatya"],
  },
  Parashar: {
    gotraName: "Parashar",
    castes: ["Marhatha", "Lamakarki", "Arya", "Dhimāl", "Kattel", "Pandit", "Naraal", "Kattel"],
    prawar: ["Parashar", "Vashistha", "Shakti"],
  },
  Maandavya: {
    gotraName: "Mandavya",
    castes: ["Bajgain", "Gyawali", "Katuwal", "Panthi", "Maskebajai"],
    prawar: ["Mandap", "Mandavya", "Vishwamitra"],
  },
  Maudgalya: {
    gotraName: "Maudgalya",
    castes: [
      "Koirala", "Kuinkel", "Thapa (Kalikote)", "Karki (Khulal, Mudula, Lama)",
      "Upreti", "Sinkhada", "Timilsina", "Belkani", "Timalsina", "Belbase",
    ],
    prawar: ["Maudgalya", "Angiras", "Bharmyashva"],
  },
  Vatsa: {
    gotraName: "Vatsa",
    castes: ["Rana", "Lamsal", "Kunwar", "Dahal", "Rupakheti", "Chauhan", "Kharal"],
    prawar: ["Vatsa Aurva", "Chyavan Bhargava", "Jamadagni"],
  },
  Krishnatri: {
    gotraName: "Krishnatri",
    castes: ["Khakurel"],
    prawar: [],
  },
  Jaimini: {
    gotraName: "Jaimini",
    castes: ["Ghodasaini"],
    prawar: ["Jaimini", "Ugra", "Sankriti"],
  },
  Saunak: {
    gotraName: "Saunak",
    castes: ["Sahi"],
    prawar: ["Saunak", "Vishwamitra", "Bhayishva"],
  },
  Vashishtha: {
    gotraName: "Vashishtha",
    castes: [
      "Suyal Gharti", "Gaire Raut", "Bhattarai", "Suyel Thapa", "Duwadi",
      "Thansinghe Bhandari", "Suyal Gharti", "Kharel", "Chalise", "Mudubari",
      "Phalakoti", "Pathak", "Keshari", "Soti",
    ],
    prawar: ["Vashishtha Indrapramada", "Abhardwasu"],
  },
  Shandilya: {
    gotraName: "Shandilya",
    castes: ["Kafle", "Prasai", "Mahat", "Katuwal"],
    prawar: ["Shandilya", "Asita", "Deval", "Savarni", "Isavashya", "Maitrei", "Varun", "Panchapravar"],
  },
  Angiras: {
    gotraName: "Angiras",
    castes: ["Joshi (Silai)", "Sedhain", "Saunak", "Sahi"],
    prawar: ["Saunak", "Vishwamitra", "Bharmyashva"],
  },
  Vishwamitra: {
    gotraName: "Vishwamitra",
    castes: ["Bhatt (Alina)", "Duwadi", "Nirwanshi", "Rayal", "Rai"],
    prawar: [],
  },
  Kushnanjani: {
    gotraName: "Kushnanjani",
    castes: ["Vist (Kamalakothe)", "Kaderiya"],
    prawar: [],
  },
  Kapil: {
    gotraName: "Kapil",
    castes: ["Bohora", "Khadka (Punwar)", "Dani Kshetri (Vist Thapa Khadka)"],
    prawar: [],
  },
  Bhrigu: {
    gotraName: "Bhrigu",
    castes: ["Chauhan"],
    prawar: [],
  },
};
