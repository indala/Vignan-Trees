const sheetData = [
{
  sno: 1,
  CommonName: 'Neem Tree',
  ScientificName: 'Azadirachta indica',
  uses: 'The Neem tree is known for its medicinal properties and is widely used in Ayurvedic medicine. Its leaves, bark, and seeds are used to treat a variety of ailments.',
  Habitat: 'Native to the Indian subcontinent; found in tropical and subtropical regions of Southeast Asia.',
  url: '/images/Neem Tree.jpg'
},
  {
    sno: 2,
    CommonName: 'Brazilian firetree',
    ScientificName: 'Schizolobium parahyba',
    uses: 'Formerly used for dugout canoes, it is now used for toys, boxes, shoe heels, the inner layers of laminated wood, and paper.The leaves contain water-soluble substances that act as antidotes to the bites of Bothrops snakes.',
    Habitat: 'Atlantic rainforest, most commonly in open, secondary formations, preferring valley bottoms, alluvial plains and near rivers, forming dense groups in hillside depressions',
    url: '/images/Brazilian firetree.jpg'
  },
  {
    sno: 3,
    CommonName: 'mango tree',
    ScientificName: 'Mangifera indica',
    uses: 'Various parts of plant are used as a dentrifrice, antiseptic, astringent, diaphoretic, stomachic, vermifuge, tonic, laxative and diuretic and to treat diarrhea, dysentery, anaemia, asthma, bronchitis, cough, hypertension, insomnia, rheumatism, toothache, leucorrhoea, haemorrhage and piles.',
    Habitat: 'It is native tropical Asia and has been cultivated in the Indian subcontinent for over 4000 years and is now found naturalized in most tropical countries. Parts used: Roots, bark, leaves, fruits, seeds, flowers and kernels are used',
    url: '/images/mango tree.jpg'
  },
  {
    sno: 4,
    CommonName: 'Lemon ironbark',
    ScientificName: 'Eucalyptus staigeriana',
    uses: 'Eucalyptus Lemon Ironbark Essential Oil Uses.In an oil burner, air freshener, potpourri, massage oil, kitchen and bathroom cleaning, dishwashing liquid. In a bath, footbath, sauna, vacuum cloth bag, floor washing water, add to clothes washing, bathroom cleaning.',
    Habitat: 'Eucalyptus staigeriana, lemon ironbark or lemon-scented ironbark, is a small rough barked sclerophyll tree that grows naturally in pure stands on hills in the Palmer River region of Cape York, North Queensland,Australia.',        
    url: '/images/Lemon ironbark.jpg'
  },
  {
    sno: 5,
    CommonName: 'dumbcane',
    ScientificName: 'Dieffenbachia seguine',
    uses: 'antidote (counter-irritant) against snakebites,The seed oil is applied on wounds, burns and inflammations.',   
    Habitat: 'It grows in the Palm House in the Oxford Botanic gardens',
    url: '/images/dumbcane.jpg'
  },
  {
    sno: 6,
    CommonName: 'sappanwood',
    ScientificName: 'Biancaea sappan',
    uses: 'It has antibacterial and anticoagulant properties. It also produces a valuable reddish dye called brazilin, used for dyeing fabric as well as making red paints and inks.',
    Habitat: 'Tod. The native range of this species is Indian Subcontinent to Indo-China. It is a scrambling shrub or tree and grows primarily in the seasonally dry tropical biome.',
    url: '/images/sappanwood.jpg'
  },
  {
    sno: 7,
    CommonName: 'Eugania',
    ScientificName: 'Eugania Involucrata',
    uses: "It is used for intestinal problems and it's fruits are used to make jams",
    Habitat: 'It is native to Brazil',
    url: '/images/Eugania.jpg'
  },
  {
    sno: 8,
    CommonName: 'paper mulberry',
    ScientificName: 'Broussonetia papyrifera',
    uses: 'Paper mulberry was introduced for use as a fast-growing, ornamental shade tree. In its native lands, paper mulberry is used in paper making.In Hawaii and other parts of the South Pacific, its bark is used to make cloth.',
    Habitat: 'Its natural habitat is in Asia, where it can be found in places like India, Japan, Indochina, China, Korea, and Burma. It is widely cultivated worldwide and has spread to portions of Africa, the US, and Europe as an invasive plant.',
    url: '/images/paper mulberry.jpg'
  },
  {
    sno: 9,
    CommonName: 'Bee Sting Bush',
    ScientificName: 'Azima tetracantha',
    uses: 'Azima tetracantha, a traditional medicinal plant included in the order Brassicales and family Salvadoraceae, is widely used as a dietary supplement in folklore medicines. The plant is also used for the treatment of rheumatism, diarrhea and other inflammatory disorders.',
    Habitat: 'Azima tetracantha occurs from Cape Infanta in South Africa to tropical Africa. In South Africa it is found in the following provinces: Western Cape, Eastern Cape, KwaZulu-Natal and Mpumalanga. It occurs in lowland scrub, forest, mangrove edges, sea-dunes, coastal bushland, not far from the high-water mark.',
    url: '/images/Bee Sting Bush.jpg'
  },
  {
    sno: 10,
    CommonName: 'Cleistocalyx',
    ScientificName: 'Syzygium Nervosum',
    uses: "It's buds are used in tonic drinks",
    Habitat: 'It is native to Tropical Asia and Australia',
    url: '/images/Cleistocalyx.jpg'
  },
  {
    sno: 11,
    CommonName: 'Guava',
    ScientificName: 'Psidium Guajava',
    uses: 'It is eaten fresh or made in beverages and jams',
    Habitat: 'It is native to Caribbean, Central and South America',
    url: '/images/Guava.jpg' 
  },
  {
    sno: 12,
    CommonName: 'Xylia',
    ScientificName: 'Xylia Xylocarpa',
    uses: "It's leaves are used to treat wounds in elephants and it's woodpulp is used for wrapping papers",
    Habitat: 'It is native to South and South East Asia',
    url: '/images/Xylia.jpg'
  },
  {
    sno: 13,
    CommonName: 'Santa Maria feverfew',
    ScientificName: 'Parthenium Hysterophorous',
    uses: 'It is used to treat stomach aches, tooth aches',
    Habitat: 'It is native to Tropical America',
    url: '/images/Santa Maria feverfew.jpg'
  },
  {
    sno: 14,
    CommonName: 'Racosperma',
    ScientificName: 'Acacia Confusa',
    uses: 'It is used to dye, stain clothes and tan leather',
    Habitat: 'It is native to South East Asia',
    url: '/images/Racosperma.jpg'
  },
  {
    sno: 15,
    CommonName: 'Ramie',
    ScientificName: 'Boehmeria Nivea',
    uses: 'It is used in sewing threads, packing materials.',
    Habitat: 'It is native to Eastern Asia',
    url: '/images/Ramie.jpg'
  },
  {
    sno: 16,
    CommonName: 'citrus family',
    ScientificName: 'Rutaceae',
    uses: 'It is used for obesity and conjestive heart failure',
    Habitat: 'It grows in subtropical and littoral rainforests',
    url: '/images/citrus family.jpg'
  },
  {
    sno: 17,
    CommonName: 'Siamese rough bush',
    ScientificName: 'Streblus Asper',
    uses: 'It has been important in papermaking in Thailand.',
    Habitat: 'It typically grows in lowland and upland forests',
    url: '/images/Siamese rough bush.jpg'
  },
  {
    sno: 18,
    CommonName: 'Clover plant',
    ScientificName: 'Trifolium',
    uses: 'It is used to treat cancer, cough, other respiratory problems',
    Habitat: 'Originating in Europe',
    url: '/images/Clover plant.jpg'
  },
  {
    sno: 19,
    CommonName: 'Araliaceae',
    ScientificName: 'Polyscias Fruticosa',
    uses: 'It is used in neurodegeneration',
    Habitat: 'It grows in tropical areas from India to Ploynesia',
    url: '/images/Araliaceae.jpg'
  },
  {
    sno: 20,
    CommonName: 'Spyder plant',
    ScientificName: 'Choleophytum comosum',
    uses: 'Spider plant helps clean indoor air.Spider plants can increase the humidity in your home and are a great natural alternative to a plug-in humidifier.',
    Habitat: 'It does well with average humidity and cool to average temperature, although it can tolerate warmer conditions.',
    url: '/images/Spyder plant.jpg'
  },
  {
    sno: 21,
    CommonName: 'Indian Almond',
    ScientificName: 'Terminalia catappa',
    uses: 'Improves Digestive Health,Promotes Brain Function.',
    Habitat: 'tropical Asia,It can also be found around rocky shores and mangroves',
    url: '/images/Indian Almond.jpg'
  },
  {
    sno: 22,
    CommonName: 'vetiver',
    ScientificName: 'Chrysopogon zizanioides',
    uses: 'Vetiver is sometimes applied directly to the skin for relieving stress, as well as for emotional traumas and shock, lice, and repelling insects',
    Habitat: 'It grows wild in low, damp sites such as swamps and bogs',
    url: '/images/vetiver.jpg'
  },
  {
    sno: 23,
    CommonName: 'Bougainvaillea',
    ScientificName: 'Bougainvillea glabra',
    uses: 'The aqueous extract and decoction of this plant have been used as fertility control among the tribal people in many countries.Its flowers are edible and are often used to prepare teas',
    Habitat: 'Native to Brazil, this species has been extensively introduced into tropical, subtropical and warm temperate regions of the world.',
    url: '/images/Bougainvaillea.jpg'
  },
  {
    sno: 24,
    CommonName: 'Broad Leaf Lady palm',
    ScientificName: 'Rhapis Excelsa',
    uses: 'It is used as air filtering plant',
    Habitat: 'It grow in Southern China and Taiwan',
    url: '/images/Broad Leaf Lady palm.jpg'
  },
  {
    sno: 25,
    CommonName: 'Longjack plant',
    ScientificName: 'Eurycoma Longifolia',
    uses: 'It is used to improve low testosterone, male fertility',
    Habitat: 'It is native to Indonesia and Malaysia',
    url: '/images/Longjack plant.jpg'
  },
  {
    sno: 26,
    CommonName: 'tulip tailflower',
    ScientificName: 'Anthurium amnicola',
    uses: 'It has been used extensively in hybridizing small, colorful, pot plants for indoor culture.',
    Habitat: 'With its tulip‑like flowers it was grown in Hawaii for the cut flower industry',
    url: '/images/tulip tailflower.jpg'
  },
  {
    sno: 27,
    CommonName: 'Tadgola',
    ScientificName: 'Borassus flabellifer',
    uses: 'Ice apple may be used as an aperient to relieve constipation and might benefit the digestion process.',        
    Habitat: 'Borassus flabellifer has a growth pattern, very large size, and clean habits that make it an attractive ornamental tree, cultivated for planting in gardens and parks as landscape palm species.',
    url: '/images/Tadgola.jpg'
  },
  {
    sno: 28,
    CommonName: 'Tender coconut plant',
    ScientificName: 'Cocos Nucifera',
    uses: 'It is used as food, fuel, cosmectics',
    Habitat: 'It mostly thrives in sandy soils',
    url: '/images/Tender coconut plant.jpg'
  },
  {
    sno: 29,
    CommonName: 'Bamboo Tree',
    ScientificName: 'B.vulgaris',
    uses: 'It is used in construction,textiles,fuel,etc.',
    Habitat: 'It has a native from South Argentina and the beaches of Chile.',
    url: '/images/Bamboo Tree.jpg'
  },
  {
    sno: 30,
    CommonName: 'Sunshine Tree',
    ScientificName: 'Senna Surattensis',
    uses: 'It boosts digestion,supports weight loss,relieves asthma attacks,relieves edema,etc',
    Habitat: 'The native is Indian subcontinent to Myanmar.',
    url: '/images/Sunshine Tree.jpg'
  },
  {
    sno: 31,
    CommonName: 'Jungle geranium',
    ScientificName: 'Ixora coccinea',
    uses: 'It is used in culinary and also heals wounds.',
    Habitat: 'It is a native to southeast Asia',
    url: '/images/Jungle geranium.jpg'
  },
  {
    sno: 32,
    CommonName: 'Duranta erecta',
    ScientificName: 'Duranta repens',
    uses: 'traditional medicinal plants',
    Habitat: 'native from Florida to Brazil and in the West Indies.',
    url: '/images/Duranta erecta.jpg'
  },
  {
    sno: 33,
    CommonName: 'Caliptranthes',
    ScientificName: 'Myrtacaea',
    uses: 'It is used as food, medicine and for oil',
    Habitat: 'It grows mostly in North America',
    url: '/images/Caliptranthes.jpg'
  },
  {
    sno: 34,
    CommonName: 'Zomoloco Bel plant',
    ScientificName: 'Aegle marmelos',
    uses: 'Aegle marmelos possesses antidiarrhoeal, antimicrobial, antiviral, radioprotective, anticancer, chemopreventive, antipyretic, ulcer healing, antigenotoxic, diuretic, antifertility and anti-inflammatory properties',
    Habitat: 'Aegle marmelos is native across the Indian subcontinent and Southeast Asia, and is cultivated throughout Sri Lanka, Tamilnadu, Thailand, and Malaysia.',
    url: '/images/Zomoloco Bel plant.jpg'      
  },
  {
    sno: 35,
    CommonName: "Wilkes' Copperleaf",
    ScientificName: 'Acalypha wilkesiana',
    uses: "Wilkes' Copperleaf is mostly grown as an ornamental plant for its colorful leaves, which come in various shades of red, green, yellow, and purple. Some traditional medicines also use the plant for treating various ailments such as fever, diarrhea, and skin diseases.",
    Habitat: 'Acalypha wilkesiana is native to tropical regions of the Pacific Islands and Melanesia. It prefers a warm and humid climate, and grows well in moist, well-drained soil. It is often grown in gardens, parks, and as a houseplant.',  
    url: '/images/Wilkes Copperleaf.jpg'       
  },
  {
    sno: 36,
    CommonName: 'bladder campion',
    ScientificName: 'Silene vulgaris',
    uses: 'The leaves of Bladder Campion are edible, and they are used in salads and many other dishes in some Mediterranean countries',
    Habitat: 'It is fairly common in Britain, but is mostly found in the south of England in meadows and fields, and along roadside verges, dry banks, and hedgerows.',
    url: '/images/bladder campion.jpg'
  },
  {
    sno: 37,
    CommonName: 'MINIATURE BEARDED IRIS',
    ScientificName: 'Iris Suaveolens',
    uses: 'It can be used as an expectorant , diuretic and for the treatment of children dentition.',
    Habitat: 'It is a plant species of iris genus.',
    url: '/images/MINIATURE BEARDED IRIS.jpg'
  },
  {
    sno: 38,
    CommonName: 'Milkwood tree',
    ScientificName: 'Sideroxylon inerme',
    uses: 'It is used in treatment of malaria, jaundice, cancer',
    Habitat: 'It is native to Southern China',
    url: '/images/Milkwood tree.jpg'
  },
  {
    sno: 39,
    CommonName: 'spotted wintergreen',
    ScientificName: 'Chimaphila maculata',
    uses: 'it is used to treat diabetes as well as general stomach trouble, arthritis, backache, neuritis, rheumatism, bladder problems, as a diuretic, an astringent and as a pain …',
    Habitat: 'tends to grow in undisturbed habitats in leaf and needle mulch and on decomposing logs.',
    url: '/images/spotted wintergreen.jpg'
  },
  {
    sno: 40,
    CommonName: 'Golden Thryallis',
    ScientificName: 'Galphimia glauca',
    uses: 'Ornamental shrub, low-maintenance, yellow racemes and glittering foliage 123',
    Habitat: 'Well-drained soil, sunny and sheltered space',
    url: '/images/Golden Thryallis.jpg'
  },
  {
    sno: 41,
    CommonName: 'Grains of paradise',
    ScientificName: 'Aframomum melegueta',
  uses: 'Seeds are used as a spice in cooking, adding a warm, peppery flavor. Traditionally used for digestive issues and as a herbal remedy.',
  Habitat: 'Native to West Africa, commonly found in humid, tropical forests. Cultivated for its seeds in countries like Ghana and Nigeria.',
    url: '/images/Grains of paradise.jpg'
  },
  {
    sno: 42,
    CommonName: 'Cycad Plants',
    ScientificName: 'Cycad Plants',
    uses: 'Ornamental plant',
    Habitat: 'Dry, hot sites in the scrublands of eastern India 6',
    url: '/images/Cycad Plants.jpg'
  },
  {
    sno: 43,
    CommonName: 'Rudraksha Tree',
    ScientificName: 'Elaeocarpus ganitrus',
    uses: 'Medicinal plant, religious significance',
    Habitat: 'Himalayan region, Nepal, India, Indonesia',
    url: '/images/Rudraksha Tree.jpg'
  },
  {
    sno: 44,
    CommonName: 'Pterospermum',
    ScientificName: 'Pterospermum acerifolium',
    uses: 'Ornamental plant, medicinal plant',
    Habitat: 'Tropical and subtropical regions of the world',
    url: '/images/Pterospermum.jpg'
  },
  {
    sno: 45,
    CommonName: 'Calamansi',
    ScientificName: 'Citrus × microcarpa',
    uses: 'It is very commonly used as a condiment in dishes like pancit or lugaw, or in the basic sawsawan (dip) of calamansi juice and soy sauce/fish sauce used for fish, spring rolls, dumplings and various savoury dishes.',
    Habitat: 'It is native to the Philippines, Borneo, Sumatra, and Sulawesi (Indonesia, Malaysia, and Brunei) in Southeast Asia; as well as southern China and Taiwan in East Asia.',
    url: '/images/Calamansi.jpg'       
  },
  {
    sno: 46,
    CommonName: 'blumea',
    ScientificName: 'Blumea balsamifera',
    uses: 'Its primary uses are as a diuretic (or "water pill") and to treat symptoms of the common cold.',
    Habitat: 'Blumea is a genus of flowering plants of the family Asteraceae.',
    url: '/images/blumea.jpg'
  },
  {
    sno: 47,
    CommonName: 'Rosy Trumpet Tree',
    ScientificName: 'Tabebuia Rosea',
    uses: 'Reduces fever and pain To treat tonsil inflamations',
    Habitat: 'Terrestial, common in moist or rather dry forest.',
    url: '/images/Rosy Trumpet Tree.jpg'
  },
  {
    sno: 48,
    CommonName: 'Cuban Pink',
    ScientificName: 'Tabebuia Pallida',
    uses: 'Used in traditional medicines Decoction of the cortex is recommended for anemia',
    Habitat: 'Forests and forests edges, tropical hammocks',
    url: '/images/Cuban Pink.jpg'
  },
  {
    sno: 49,
    CommonName: 'asthma plant',
    ScientificName: 'Euphorbia hirta',
    uses: 'Euphorbia hirta is often used traditionally for female disorders, respiratory ailments (cough, coryza, bronchitis, and asthma),',
    Habitat: 'Euphorbia hirta (sometimes called asthma-plant) is a pantropical weed, originating from the tropical regions of the Americas. It is a hairy herb that grows in open grasslands, roadsides and pathways.',
    url: '/images/asthma plant.jpg'
  },
  {
    sno: 50,
    CommonName: 'Plum Tree',
    ScientificName: 'Prunus Domestica',
    uses: 'Reduces heart diseases , blood sugar and anxiety 2. Constipation relief and rich in antioxidants',
    Habitat: 'Higher hills in Srinagar to Jaipur . It prefers temperature climate',
    url: '/images/Plum Tree.jpg'
  },
  {
    sno: 51,
    CommonName: 'Yellow bells',
    ScientificName: 'Tecoma Stans',
    uses: 'Used in diabetics Digestive problems and Stomach pain',
    Habitat: 'Weed of roadsides, riparian zones, open woodlands',
    url: '/images/Yellow bells.jpg'
  },
  {
    sno: 52,
    CommonName: 'Malayan Banyan',
    ScientificName: 'Ficus Microcarpa',
    uses: 'Treatment of ulcers, itching, toothache, leprosy, liver disease Burning Sensations',
    Habitat: 'Tropical or Subtropical species and it requires warm climate',
    url: '/images/Malayan Banyan.jpg'
  },
  {
    sno: 53,
    CommonName: 'Chinese ixora',
    ScientificName: 'Chinese ixora hi-res stock',
    uses: "Pharmacological studies suggest that the plant possesses antioxidative, antibacterial, gastroprotective, hepatoprotective, antidiarrhoeal, antinociceptive, antimutagenic, antineoplastic and chemopreventive effects, thus lending scientific support to the plant's ethnomedicinal uses.",
    Habitat: 'in Tropical Asia. Ixora also grows commonly in subtropical climates in the United States, such as Florida where it is commonly known as West Indian jasmine.Other common nameinclude viruchi, kiskaara, kepale, rangan, kheme, ponna, chann tanea, techi, pan, siantan, jarum-jarum/jejarum, jungle flame, jungle geranium, and cruz de Malta, among others',   
    url: '/images/Chinese ixora.jpg'
  },
  {
    sno: 54,
    CommonName: 'southern magnolia',
    ScientificName: 'Magnolia grandiflora',
    uses: 'Horticultural uses, Culinary uses, Traditional medicine, timber, other uses.',
    Habitat: 'The natural range of Magnolia species is a disjunct distribution, with a main center in east and southeast.',
    url: '/images/southern magnolia.jpg'
  },
  {
    sno: 55,
    CommonName: 'Sugar palm',
    ScientificName: 'Arenga pinnata',
    uses: 'The leaves as well as the leaf midribs can be used to weave baskets and marquetry work in furniture.In Indonesia, starch can also be extracted from sugar palms and used in place of rice flour in noodles, cakes, and other dishes.',   
    Habitat: 'Arenga pinnata is economically important feather palm native to tropical Asia, from eastern India East to Malaysia, Indonesia, and the Philippines in the east',
    url: '/images/Sugar palm.jpg'
  },
  {
    sno: 56,
    CommonName: 'wild lime',
    ScientificName: 'Zanthoxylum fagara',
    uses: 'Use it as an accent or specimen, in containers, as a patio tree, as a border or hedge.',
    Habitat: 'Wild lime is a small tree native to south Florida and the Caribbean Basin . It grows as an understory tree in the coastal upland plant communities on the lee side of the dunes in south Florida.',
    url: '/images/wild lime.jpg'
  },
  {
    sno: 57,
    CommonName: 'Phillippine violet',
    ScientificName: 'Barleria cristata',
    uses: 'Ethnomedicinal reports have also supported B. cristata L. as one of the potential traditional medicines in India claimed for the treatment of toothache, anaemia, snake bite, diabetes, lungs disorders, blood diseases and inflammatory conditions.',
    Habitat: 'It is native to a wide area ranging from Southern to India and Myanmar.',
    url: '/images/Phillippine violet.jpg'
  },
  {
    sno: 58,
    CommonName: 'White goosefoot',
    ScientificName: 'Chenopodium album',
    uses: 'Repairs cell.Cures constipation.Aids in weight loss.Purifies blood.Good for hair.Promotes eye health',
    Habitat: 'Roadsides, fields, gardens; plains, valleys (Lesica et al. 2012.',
    url: '/images/White goosefoot.jpg'
  },
  {
    sno: 59,
    CommonName: 'Spider plant',
    ScientificName: 'chlorophytum comosum',
    uses: 'Thick, fleshy roots allow spider plant to tolerate inconsistent watering',
    Habitat: 'these plants native to tropical and subtropical regions of Africa, Asia, and Australia',
    url: '/images/Spider plant.jpg'
  },
  {
    sno: 60,
    CommonName: 'blackboard',
    ScientificName: 'Alstonia scholaris',
    uses: 'Found in the sub-Himalayan tract. It occurs in tropical, subtropical, moist deciduous forests in India.',      
    url: '/images/blackboard.jpg'
  },
  {
    sno: 61,
    CommonName: 'Henequen',
    ScientificName: 'Agave fourcroydes',
    uses: 'agave syrup and fructans,soaps ,detergents,bug repellent,hair treatements',
    Habitat: 'Agave species are also native to tropical areas of North America, such as Mexico.',
    url: '/images/Henequen.jpg'
  },
  {
    sno: 62,
    CommonName: 'teak',
    ScientificName: 'tectona grandis',
    uses: 'teak leaves can treat constipation,and used as natural laxative',
    Habitat: 'It is found in a variety of habitats and climatic conditions from arid areas with only 500 mm of rain per year to very moist forests.',
    url: '/images/teak.jpg'
  },
  {
    sno: 63,
    CommonName: 'Bottle Palm',
    ScientificName: 'Hyophorbe lagenicaulis',
    uses: 'air purification,used for making oil ,wine,jelly',
    Habitat: 'It is one of three Hyophorbe species which naturally occur in Mauritius, and one of only two that are still extant.',
    url: '/images/Bottle Palm.jpg'
  },
  {
    sno: 64,
    CommonName: 'pomergranate',
    ScientificName: 'punica granatum',
    uses: 'they have rich in fiber and vitamins',
    Habitat: 'modern day iran to northern india',
    url: '/images/pomergranate.jpg'
  },
  {
    sno: 65,
    CommonName: 'White Cheesewood',
    ScientificName: 'Melodorum fruticosum',
    uses: 'evergreen scent',
    Habitat: 'south-east asia',
    url: '/images/White Cheesewood.jpg'
  },
  {
    sno: 66,
    CommonName: 'banana shrub',
    ScientificName: 'magnolia figo',
    uses: 'The leaves are used for scenting tea',
    Habitat: 'Broad-leaved evergreen forests, shady slopes and along river banks',
    url: '/images/banana shrub.jpg' 
  },
  {
    sno: 67,
    CommonName: 'scarlet jungle flame',
    ScientificName: 'Ixora Coccinea',
    uses: 'used in the treatment of hiccups,fever.',
    Habitat: 'bangladesh,india,srilanka,vietnam',
    url: '/images/scarlet jungle flame.jpg'
  },
  {
    sno: 68,
    CommonName: 'african tulip tree',
    ScientificName: 'spathodea campanulata',
    uses: 'used for reforestation and soil conservation.',
    Habitat: 'tropical dry forests',
    url: '/images/african tulip tree.jpg'
  },
  {
    sno: 69,
    CommonName: 'dumb cane',
    ScientificName: 'dieffenbachia segunine',
    uses: 'food,madicine,stimulants and to inflict punishment',
    Habitat: 'mexico and west indies.',
    url: '/images/dumb cane.jpg'
  },
  {
    sno: 70,
    CommonName: 'papaya',
    ScientificName: 'carica papaya',
    uses: 'healthy for skin',
    Habitat: 'naturally distributed forests',
    url: '/images/papaya.jpg'
  },
  {
    sno: 71,
    CommonName: 'Bamboo Palm',
    ScientificName: 'Chrysalidocarpus lutescens',
    uses: 'Keeping indoor plants like Dypsis Lutescens can significantly improve humidity levels indoors.',
    Habitat: 'is native to moist forest areas in Madagascar. Although endangered in its native habitat,',
    url: '/images/Bamboo Palm.jpg'
  },
  {
    sno: 72,
    CommonName: 'Frangipani',
    ScientificName: 'Adenium odesum',
    uses: 'Medicinal plants constitute a natural reservoir for medicines worldwide. They serve mainstream therapeutics and are central in folklore medicine. In case of Adenium obesum (Lav, Apocynaceae)',
    Habitat: 'belonging to the tribe Nerieae of the subfamily Apocynoideae of the dogbane family, Apocynaceae. It is native to the Sahel regions south of the Sahara (from Mauritania and Senegal to Sudan)',
    url: '/images/Frangipani.jpg'
  },
  {
    sno: 73,
    CommonName: 'Russian Olive',
    ScientificName: 'Elaeagnus angustifolia',
    uses: 'Traditionally, Russian olive was used as an anti-ulcer remedy for wound healing or sometimes gastric disorders. E. angustifolia fruits were also famous in Turkish folklore as tonic, antipyretic, kidney disorder healing',
    Habitat: 'Russian olive is native to southern Europe and to central and western Asia. Within this region it occurs primarily on coasts, in riparian areas, and in other relatively moist.',
    url: '/images/Russian Olive.jpg'
  },
  {
    sno: 74,
    CommonName: 'weeping fig plant',
    ScientificName: 'FICUS BENJAMINA',
    uses: 'Ficus is a popular medicinal plant in India, which has long been used in Ayurveda, the ancient system of Indian medicine, for various diseases/disorders including diabetes, liver disorders, diarrhea, inflammatory conditions, hemorrhoids, respiratory, and urinary diseases.',
    Habitat: 'The natural habitat of the weeping fig (Ficus benjamina) is forests. Its wide tropical distribution means that these may be tropical rainforests, monsoonal forests or mixed wet forests. In some locations (Jamaica), the species has been seen colonizing roadsides.',
    url: '/images/weeping fig plant.jpg'
  },
  {
    sno: 75,
    CommonName: 'blue gum',
    ScientificName: 'EUCALYPTUS',
    uses: 'It is found in many lozenges, cough syrups, rubs, and vapor baths throughout the United States and Europe. Herbalists often recommend using fresh leaves in gargles to soothe sore throats and treat bronchitis and sinusitis.',
    Habitat: 'Eucalyptus, (genus Eucalyptus), large genus of more than 660 species of shrubs and tall trees of the myrtle family (Myrtaceae), native to Australia, Tasmania, and nearby islands.',
    url: '/images/blue gum.jpg'
  },
  {
    sno: 76,
    CommonName: 'SINGAPORE GRAVEYARD FLOWER',
    ScientificName: 'PLUMERIA OBTUSA',
    uses: 'The different parts of the plant are used traditionally to treat various diseases like diabetes mellitus, wounds and skin disease, diuretic, purgative, abortion and also used in cosmetics, aromatherapy, necklaces and as offerings.', 
    Habitat: 'Plumeria obtusa, the Singapore graveyard flower, is a species of the genus Plumeria (Apocynaceae). It is native to the West Indies (including the Bahamas and the Greater Antilles), southern Mexico, Belize, Guatemala, and Florida.',
    url: '/images/SINGAPORE GRAVEYARD FLOWER.jpg'
  },
  {
    sno: 77,
    CommonName: 'giant yucca',
    ScientificName: 'Yucca elephantipes',
    uses: 'osteoarthritis, high blood pressure, joint pain, migraine headache, diabetes, and many other condition',       
    Habitat: 'loose, infertile, sandy soil',
    url: '/images/giant yucca.jpg'
  },
  {
    sno: 78,
    CommonName: 'Lacy Lady Aralia',
    ScientificName: 'Evodia hortensis',
    uses: "obesity, headache, high blood pressure, congestive heart failure (CHF), infections caused by viruses, Alzheimer's disease, cancer, and fluid retention.",
    Habitat: 'subtropical and littoral rainforest',
    url: '/images/Lacy Lady Aralia.jpg'
  },
  {
    sno: 79,
    CommonName: 'paper flower',
    ScientificName: 'Bougainvillea',
    uses: 'used as a traditional medicine for different therapeutic conditions like insecticidal, anti-inflammatory (Markandan et al., 2016), anti-diarrhoeal, anti-ulcer, anti-microbial (Edwin et al., 2007b), and anti-diabetic (Edwin et al., 2006) activities',
    Habitat: 'hot, dry climate',
    url: '/images/paper flower.jpg'
  },
  {
    sno: 80,
    CommonName: 'Banana',
    ScientificName: 'Musa sp',
    uses: 'Helps to improve heart health,Helps to build lean muscles',
    Habitat: 'humid, tropical regions of Central and South America, Africa, and Southeast Asia',
    url: '/images/Banana.jpg'
  },
  {
    sno: 81,
    CommonName: 'Bambo',
    ScientificName: 'Bambusoideae',
    uses: 'flooring, roofing designing, and scaffolding), furniture, food, biofuel, fabrics, cloth, paper, pulp, charcoal, ornamental garden planting',
    Habitat: 'tropical and subtropical to mild temperate regions,',
    url: '/images/Bambo.jpg'
  },
  {
    sno: 82,
    CommonName: 'guggul tree',
    ScientificName: 'balsamodendron',
    uses: 'in the Ayurveda since time immemorial for the treatment of variety of disorders such as inflammation, gout, rheumatism, obesity, and disorders of lipids metabolism.',
    Habitat: 'Occurs in the arid rocky tracts of Rajputana, Khandesh, Berar, Mysore, Sind and Baluchistan',
    url: '/images/guggul tree.jpg'
  },
  {
    sno: 83,
    CommonName: 'Chinese fringetree',
    ScientificName: 'Chionanthus retusus',
    uses: 'Fringetree is traditionally used for liver and gallbladder disorders, like gallstones, and other conditions',  
    Habitat: 'Mixed forests, thickets, riversides; 0–3000 m asl in China',
    url: '/images/Chinese fringetree.jpg'
  },
  {
    sno: 84,
    CommonName: 'Golden trumpet',
    ScientificName: 'Allamanda cathartica',
    uses: 'Allamanda species have been used in systems of traditional medicine for various purposes',
    Habitat: 'Yellow allamanda (Allamanda cathartica) prefers moist, well-drained, soils in tropical regions.',
    url: '/images/Golden trumpet.jpg'
  },
  {
    sno: 85,
    CommonName: 'Pothos',
    ScientificName: 'Philodendron',
    uses: 'can remove pollutants like formaldehyde and clean the air&leaves absorb moisture and gives clean oxygen',      
    Habitat: 'humid tropical forests',
    url: '/images/Pothos.jpg'
  },
  {
    sno: 86,
    CommonName: 'Jungle Geranium',
    ScientificName: 'Ixora coccinea',
    uses: 't is used as an ornamental plant in gardens and parks. In traditional medicine, it is used to treat various ailments such as fever, skin infections, and inflammation.',
    Habitat: 'It is native to tropical and subtropical areas of Asia and can be found growing in a wide range of habitats, including forests, grasslands, and near water sources.',
    url: '/images/Jungle Geranium.jpg'
  },
  {
    sno: 87,
    CommonName: 'Grass Lily',
    ScientificName: 'Ornithogalum umbellatum',
    uses: 'It is a popular indoor plant due to its ease of care and air-purifying properties. It is also used in traditional medicine to treat coughs and colds.',
    Habitat: 'It is native to South Africa and can be found growing in a variety of habitats, including grasslands, rocky outcrops, and forests. It is commonly cultivated as a houseplant in many parts of the world.',
    url: '/images/Grass Lily.jpg'
  },
  {
    sno: 88,
    CommonName: 'Yellow silk cotton tree flowers',
    ScientificName: 'Cochlospermum religiosum',
    uses: 'The flowers are used in traditional medicine for various ailments such as fever, cough, and skin diseases. They are also used in the production of dyes and textiles.',
    Habitat: 'The yellow silk cotton tree is native to tropical regions of Africa and Asia and can be found growing in savannahs, dry forests, and riverbanks.',
    url: '/images/Yellow silk cotton tree flowers.jpg'
  },
  {
    sno: 89,
    CommonName: 'Oriental Arborvitae',
    ScientificName: 'Thuja orientalis',
    uses: 'The wood is used for construction and furniture-making, while the essential oil is used in perfumes and aromatherapy.',
    Habitat: 'Native to China, Korea, and Japan, it can be found in a variety of habitats including forests, mountain slopes, and riverbanks.perfumes and aromatherapy',
    url: '/images/Oriental Arborvitae.jpg'
  },
  {
    sno: 90,
    CommonName: 'Spineless yucca',
    ScientificName: 'Yucca elephantipes',
    uses: 'The plant is used for ornamental purposes and is grown indoors and outdoors. The plant is also used for medicinal purposes1',
    Habitat: 'The plant is native to Central America and is found in Mexico, Belize, Guatemala, and Honduras1.',
    url: '/images/Spineless yucca.jpg'
  },
{
  sno: 91,
  CommonName: 'Acalypha',
  ScientificName: "Acalypha 'Mooreana'",
  uses: 'Used in traditional medicine for ailments such as diabetes, jaundice, hypertension, fever, liver inflammation, schistosomiasis, and dysentery.',
  Habitat: 'Thrives in humid conditions, is somewhat salt-tolerant, and requires protection from strong winds.',
  url: '/images/Acalypha.jpg'
},
  {
    sno: 92,
    CommonName: 'Aralia',
    ScientificName: 'Aralia sp',
    uses: 'used as food plants by the larvae of some Lepidoptera species, including the common emerald (Hemithea aestivaria). There are many colours of aralia flowers. The main flower is whitish aralia. Some species, notably Aralia cordata, are edible and are cultivated for human consumption.',
    Habitat: 'The Ming aralia is widely cultivated in several countries of Southeast Asia and the tropical islands of the Pacific region.',
    url: '/images/Aralia.jpg'
  },
  {
    sno: 93,
    CommonName: 'Indian mulberry',
    ScientificName: 'Morinda Tinctoria',
    uses: 'Early studies reported that the extract of leaf, root, and fruits of this plant showed anti-bacterial, analgesic, anti-oxidant, anti-inflammatory, astringent, laxative, sedative, and hypotensive (lowers blood pressure) potentials',  
    Habitat: 'Is a species of flowering plant in the family Rubiaceae, native to southern Asia. Roxb. It is an evergreen shrub or small tree growing to 5–10 m tall.',
    url: '/images/Indian mulberry.jpg'
  },
  {
    sno: 94,
    CommonName: 'Yellow Azalea',
    ScientificName: 'Rhododendron luteum',
    uses: 'It is widely cultivated in western Europe, used both as an ornamental plant in its own right, and as a rootstock onto which other azalea cultivars are grafted. It is locally naturalised in western and northern Europe',
    Habitat: 'the yellow azalea or honeysuckle azalea, is a species of flowering plant in the heath family Ericaceae, native to southeastern Europe and southwest Asia. In Europe, it occurs from southern Poland and Austria, south through the Balkans, and east to southern Russia; and in Asia, east to the Caucasus.',
    url: '/images/Yellow Azalea.jpg'
  },
  {
    sno: 95,
    CommonName: 'Australian blackwood',
    ScientificName: 'Acaci Melanoxylon',
    uses: 'Acacia melanoxylon is cultivated in forestry plantings in eastern Africa (including Kenya and Ethiopia), South Africa and Zimbabwe. It is used for lumber, fuelwood and also in amenity plantings.',
    Habitat: 'In tropical Africa, Acacia melanoxylon is found in cool and wet upland regions. It grows best in deep, moist and fertile soils, but grows also on sandy and alluvial soils, and in wet nearly swampy places',
    url: '/images/Australian blackwood.jpg'
  },
  {
    sno: 96,
    CommonName: 'Bush allamanda',
    ScientificName: 'Allamanda Schottii',
    uses: 'Allamanda species have been used in systems of traditional medicine for various purposes. A. cathartica has been used to treat liver tumors, jaundice, splenomegaly, and malaria',
    Habitat: 'Allamanda schottii is found in the south and southeast of Brazil, in the states of Espírito Santo, Minas Gerais, Rio de Janeiro, São Paulo, Paraná and Santa Catarina.',
    url: '/images/Bush allamanda.jpg'
  },
  {
    sno: 97,
    CommonName: 'BURFLOWER TREE',
    ScientificName: 'Neolamarckia cadamba',
    uses: 'The fruit and inflorescences are reportedly edible by humans.The fresh leaves are fed to cattle',
    Habitat: 'is an evergreen, tropical tree native to South and Southeast Asia.',
    url: '/images/BURFLOWER TREE.jpg'
  },
  {
    sno: 98,
    CommonName: 'BEAUTYFLOWER',
    ScientificName: 'Calophyllum inophyllum',
    uses: 'The oils, as well as poultices made from leaves and flowers, are also commonly used for traditional medicine', 
    Habitat: 'Mast wood is notable for its ability to grow to massive sizes in sandy or rocky beaches of island and coastal habitats, as well as its habit sending out arching large trunks over the water where its seeds are dispersed via the currents',
    url: '/images/BEAUTYFLOWER.jpg'
  },
  {
    sno: 99,
    CommonName: 'MADDER',
    ScientificName: 'Rubia tinctorum',
    uses: 'It has been used since ancient times as a vegetable red dye for leather, wool, cotton and silk.For dye production, the roots are harvested after two years',
    Habitat: 'It prefers loamy soils (sand and clay soil) with a constant level of moisture.',
    url: '/images/MADDER.jpg'
  },
  {
    sno: 100,
    CommonName: 'WESTINDIAN JASMIN',
    ScientificName: 'Plumeria alba',
    uses: 'medicine to treat many inflammatory and infectious diseases',
    Habitat: 'This species is native to Puerto Rico and the Lesser Antilles, but has been introduced into a number of tropical areas around the world.',
    url: '/images/WESTINDIAN JASMIN.jpg'
  },
  {
    sno: 101,
    CommonName: 'exotic marigold',
    ScientificName: 'mozette exotic marigold',
    uses: 'Homemade Skin Treatment. Digestive-Soothing Tea. Immune-Boosting Formula',
    Habitat: 'Marigolds are native to subtropical America and have been cultivated in Mexico for over 2,000 years',       
    url: '/images/exotic marigold.jpg'
  },
  {
    sno: 102,
    CommonName: 'Pink Trumpet Vine',
    ScientificName: 'Podranea ricasoliana',
    uses: 'Garden Use-The showy pink trumpet vine works well in tropical gardens, either sprawling across the ground as a ground cover or draping over trellises, fences, and hedges as ornamentation.',
    Habitat: 'Podranea ricasoliana is native to south tropical Africa, in Malawi, Mozambique and Zimbabwe, and to southern Africa, in South Africa, in Eastern Cape Province and KwaZulu-Natal (Malan and Notten, 2002).',
    url: '/images/Pink Trumpet Vine.jpg'
  },
  {
    sno: 103,
    CommonName: 'Gluta',
    ScientificName: 'Gluta travancorica',
    uses: 'Glutathione is essential for the immune system’s proper functioning and is vital in building and repairing tissue. It acts as an important antioxidant, which helps protect your body from damage to cells caused by free radicals.',    
    Habitat: 'Gluta velutina grows naturally in Burma, Thailand, Vietnam, Sumatra, Peninsular Malaysia, Borneo and Java. Its habitat is tidal rivers and it is often found with the species Barringtonia conoidea and Pandanus helicopus.',
    url: '/images/Gluta.jpg'
  },
  {
    sno: 104,
    CommonName: 'Watery rose Apple',
    ScientificName: 'Syzygium aqueum',
    uses: 'Fever treatment, Detoxify the liver, Cures any skin conditions',
    Habitat: 'Tropical South East Asia like India, Malaysia',
    url: '/images/Watery rose Apple.jpg'
  },
  {
    sno: 105,
    CommonName: 'Crotons',
    ScientificName: 'Codiaeum variegatum',
    uses: 'treatment of cancer, constipation, diabetes, digestive problems, dysentery, external wounds, fever, hypercholesterolemia, hypertension, inflammation, intestinal worms, malaria, pain, ulcers and weight-loss.',
    Habitat: 'Croton does best in fertile, well-drained, moist soil. They need bright, indirect light when grown indoors. Outdoors they thrive in partial shade, and in cool climates can tolerate full sun if kept moist (and are acclimated first when moved from inside).',
    url: '/images/Crotons.jpg'
  },
  {
    sno: 106,
    CommonName: 'Polyalthia longifolia',
    ScientificName: 'Monoon longifolium',
    uses: 'The leaves are used for ornamental decoration during festivals.The tree can be pruned into various shapes and maintained in required sizes.',
    Habitat: 'It is native to southern India and Sri Lanka, but has been widely introduced elsewhere in tropical Asia.',  
    url: '/images/Polyalthia longifolia.jpg'
  },
  {
    sno: 107,
    CommonName: 'Peacock flower',
    ScientificName: 'Caesalpinia pulcherrima',
    uses: 'The leaves, flower, bark, and seeds of C. pulcherrima were used by American Indians in traditional medicine as abortifacients and for suicide',
    Habitat: 'native to the tropics and subtropics of the Americas. It could be native to the West Indies,[3] but its exact origin is unknown due to widespread cultivation.',
    url: '/images/Peacock flower.jpg'
  },
  {
    sno: 108,
    CommonName: 'Bismarck palm tree',
    ScientificName: 'Bismarckia nobilis',
    uses: 'Attractive and can grow both indoor & outdoor',
    Habitat: 'The Bismarck Palm is native to the island of Madagascar near the east coast of Africa.',
    url: '/images/Bismarck palm tree.jpg'
  },
  {
    sno: 109,
    CommonName: 'Moses in the cradle',
    ScientificName: 'Tradescantia spathacea',
    uses: 'a houseplant,primarily used for its decorative value',
    Habitat: 'It is native to Belize, Guatemala, and southern Mexico',
    url: '/images/Moses in the cradle.jpg'
  },
  {
    sno: 110,
    CommonName: 'White bhuhneia purpurea',
    ScientificName: 'strawberry begonia',
    uses: 'Orchid tree, Bauhinia purpurea, is a tropical, evergreen small tree or shrub up to 4 - 10 m tall and 2 m across. It has an erect and slender stem, crooked branches, green leaves, and large, purple and orchid like flowers',
    Habitat: 'auhinia purpurea is a small to medium-size deciduous tree growing to 17 feet (5.2 m) tall. The leaves are 10–20 centimetres (3.9–7.9 in) long and broad, rounded, and bilobed at the base and apex. The flowers are conspicuous, pink, and fragrant, with five petals. The fruit is a pod 30 centimetres (12 in) long, containing 12 to 16 seeds',
    url: '/images/White bhuhneia purpurea.jpg'
  },
  {
    sno: 111,
    CommonName: 'Bougainvillea spectabilis',
    ScientificName: 'great bougainvillea',
    uses: 'Bougainvillea spectabilis has been reported to have anti-inflammatory, anti-bacterial, anti-viral, anti-tumor, anti-hypercholestrolemic, anti-hyperlipidemic, and anti-fertility properties',
    Habitat: 'Bougainvillea spectabilis is native to Brazil, Peru, Bolivia, and Chubut Province, Argentina, but it has been introduced in many other areas. Bougainvillea spectabilis can grow in hardiness zones 10-11, preferring full sun , dry conditions, and fertile soil. It can be propagated from stem and root cuttings.',
    url: '/images/Bougainvillea spectabilis.jpg'
  },
  {
    sno: 112,
    CommonName: 'Tasmanian flax lily',
    ScientificName: 'Dianella tasmanica',
    uses: 'Flax lily, Dianella tasmanica, is a spreading perennial with flat, glossy green leaves. This grass-like foliage plant is often used as a groundcover, border plant, or even as an accent plant, to bring color and texture into the landscape. This fast-growing plant also works well in containers.',
    Habitat: 'asoutheastern Australia',
    url: '/images/Tasmanian flax lily.jpg'
  },
  {
    sno: 113,
    CommonName: 'Zedi orange Mari gold',
    ScientificName: 'mari gold',
    uses: 'Marigolds are native to Mexico, but the sunny annuals have become incredibly popular and are grown in countries around the world. Although they are appreciated primarily for their beauty, you may not have considered the many surprising marigold benefits for gardens. Read on to learn about ways to use marigold plants in the gard',
    Habitat: 'Webmarigold, (genus Tagetes), genus of about 50 species of annual herbs of the aster family (Asteraceae), native to southwestern North America, tropical America, and South America. The name marigold also refers to the pot marigold (genus Calendula) and unrelated',
    url: '/images/Zedi orange Mari gold.jpg'
  },
  {
    sno: 114,
    CommonName: 'Ficus variegata',
    ScientificName: 'red stem fig',
    uses: 'he wood, light and whitish, is used for inner coverings, cases, handicrafts and in the fabrication of the plywood, as well as fuel. The dried fruits are at times consumed with rice by some local populations; leaves and bark are used in the traditional medicine, in particular for dysentery.',
    Habitat: 'icus variegata or Common Red Stem fig (scientific name: Ficus variegata) is native to India, southern China, Indonesia and Malaysia and is a deciduous trees of the family Moraceae. It inhabits the humid forest of the tropical region. The trunk is light gray brown, the leaves are green and heart-shaped',
    url: '/images/Ficus variegata.jpg'
  },
  {
    sno: 115,
    CommonName: 'bonsai',
    ScientificName: 'penjing',
    uses: "Bonsai plants are beneficial to one's health. It aids in the treatment of coughs, weariness, sore throats, and exhaustion.",
    Habitat: 'Tropical Bonsai may be kept on a sunny windowsill year-round. During the summer they love to be outside, but they will also do well indoors. The air inside the house is very dry, so the use of a pebble tray or frequent misting is important.',
    url: '/images/bonsai.jpg'
  },
  {
    sno: 116,
    CommonName: 'Siamese cassia',
    ScientificName: 'senna siamea.',
    uses: 'used in intercropping systems, windbreaks, and shelterbelts..It is also used as a shade tree in cocoa, coffee, and tea plantations.',
    Habitat: 'lowland forests and river banks',
    url: '/images/Siamese cassia.jpg'
  },
  {
    sno: 117,
    CommonName: 'mangium, black wattle',
    ScientificName: 'acacia mangium.',
    uses: 'it is also used for soil protection.used in commercial plantations to provide products such as pulp, firewood, charcoal',
    Habitat: 'areas of high rainfall in northern Australia, New Guinea and some adjacent islands',
    url: '/images/mangium, black wattle.jpg'
  },
  {
    sno: 118,
    CommonName: 'Yellow bells',
    ScientificName: 'Tecoma gaudi gaudi.',
    uses: 'used in traditional medicine.Used to cure digestive problems,stomach pain.',
    Habitat: 'native to the Americas.',
    url: '/images/Yellow bells.jpg'
  },
  {
    sno: 119,
    CommonName: 'Gargoulette palm kernel',
    ScientificName: 'Hyophorbe lagenicaulis',
    uses: 'The Palm kernel is the edible seed of the oil palm tree. The fruit yields two distinct oils—Palm Oil derived from the outer parts of the fruit, and palm kernel oil derived from the kernel. The kernels yield an oil (approx.. 45-50%) which is much in demand for the manufacture of cattle food, soaps',
    Habitat: 'While habitat destruction may destroy the last remaining palms in the wild, the survival of the species is assured due to its plantation as a specimen of the tropics and subtropics',
    url: '/images/Gargoulette palm kernel.jpg'
  },
  {
    sno: 120,
    CommonName: 'Cascabela thevetia',
    ScientificName: 'Thevetia peruviana',
    uses: 'in Cultivation and biological pest control',
    Habitat: 'in pastures, in savanna and in riparian zones (banks of watercourses).',
    url: '/images/Cascabela thevetia.jpg'
  },
  {
    sno: 121,
    CommonName: 'Hibiscus',
    ScientificName: 'Hibiscus tiliaceus',
    uses: "The inner bark of the sea hibiscus (Hibiscus tiliaceus), also called 'hau', is used in Polynesia for making rope, and the wood for making canoe floats",
    Habitat: 'It is widely cultivated as an ornamental plant in the tropics and subtropics, but its native range is Vanuatu',
    url: '/images/Hibiscus.jpg'
  },
  {
    sno: 122,
    CommonName: 'Alternanthera',
    ScientificName: 'Amaranthaceae',
    uses: 'It is used as a local medicine often in mixtures with other medicinal plants, to treat hepatitis, tight chest, bronchitis, asthma and other lung troubles',
    Habitat: 'rivers, lakes, ponds and irrigation canals, as well as many terrestrial habitats',
    url: '/images/Alternanthera.jpg'
  },
  {
    sno: 123,
    CommonName: 'uvaia fruit',
    ScientificName: 'eugenia pyitormis',
    uses: 'its fruits present considerable amounts of antioxidants nd vitamin C when compared to other fruits.It is usually eaten fresh,made into juices or jellies.',
    Habitat: 'Eugenia pyriformis is a plant of family Myrtaceae fund primarily in Brazil.Its native species of razil,occuring primarily in states of Parana,Rio Grande do Sul,Santa Catarina and Sao Paulo.',
    url: '/images/uvaia fruit.jpg'
  },
  {
    sno: 124,
    CommonName: 'katong',
    ScientificName: 'wallichila duisticha',
    uses: 'the pith from the stems is eaten in times f famine.Short lived getting to about 15 years old then flowering for 4-5 years before dying.This is a hapaxanthic genus',
    Habitat: 'It has very short life about 15 years Low mountain valley of Sikkim and north India Himalayas',
    url: '/images/katong.jpg'
  },
  {
    sno: 125,
    CommonName: 'Christ thron',
    ScientificName: 'Euphorbia milii',
    uses: 'The latex of some crown of thron species has been used for arrow poisons and to stupefy fish for cature.Euphoriba plants are also used as food by the larave of some lepidoptera',
    Habitat: 'Crown of thorns starfish are large marine invertrbrates ehich feed on coroal as adults.They occur naturally throughout the Indo Pacific region on coral reefs from Red Sea to west coast of Americas.',
    url: '/images/Christ thron.jpg'
  },
  {
    sno: 126,
    CommonName: 'Cape Honeysuckle',
    ScientificName: 'Tecoma Capensis',
    uses: 'It is often planted specifically to attract birds and butterflies.It is used to relieve pain and sleeplessness.',
    Habitat: 'The species occurs naturally in South Africa Eswatini and southern Mozambique.It is cultovated in other areas of world suc as in South eat ASia,Hawai,Florida and Calfornia.',
    url: '/images/Cape Honeysuckle.jpg'
  },
  {
    sno: 127,
    CommonName: 'Paper Flower',
    ScientificName: 'Bouginvillea Flowers',
    uses: 'The aqueous extract and decoction of this plant have been used as fertility control among tribal people in many countries.It has been shown to posses anticancer,antidiabetic,antihepatotoix,anti inflammatory',
    Habitat: 'Ougainvillea is best suited to hot dry climate and should be watered deeply.It is awoody climber with curved throns that sprawls and needs to be tired.',
    url: '/images/Paper Flower.jpg'
  },
  {
    sno: 128,
    CommonName: 'Lemon',
    ScientificName: 'Citrus limon',
    uses: 'It is helpful in prevention of kidney stones,it reduces cancer risk.',
    Habitat: 'These are subtropical plants native to asia.',
    url: '/images/Lemon.jpg'
  },
  {
    sno: 129,
    CommonName: 'Portia tree',
    ScientificName: 'Thespesia populnea',
    uses: 'It has used in traditional medicine for treating wounds and bruises.',
    Habitat: 'These are found in sea coasts often ehere sandy beaches covered by casuarina',
    url: '/images/Portia tree.jpg'
  },
  {
    sno: 130,
    CommonName: 'Tamarind',
    ScientificName: 'Tamarindus indica',
    uses: 'People use tamarind for dry eye constipation,parasite infections.',
    Habitat: 'Tamarind evergreen tree of the pea family native to tropical Africa.',
    url: '/images/Tamarind.jpg'
  },
  {
    sno: 131,
    CommonName: 'Miracle fruit',
    ScientificName: 'Synsepalum dulcificum',
    uses: 'people use meracle fruit for diabetes, obesity,taste disturbancas in people treated with cancer drugs',
    Habitat: 'This plant is native to tropcal west Africa.',
    url: '/images/Miracle fruit.jpg'
  },
  {
    sno: 132,
    CommonName: 'Sapodilla',
    ScientificName: 'Manilkara zapota',
    uses: 'It is used to treat , arthritas,fever,ulcers,diarrhea.',
    Habitat: 'the sapodilla tree is native to southern Mexico,Bellze and northestern Guatemala',
    url: '/images/Sapodilla.jpg'
  },
  {
    sno: 133,
    CommonName: 'Stereospermum chelonoides',
    ScientificName: 'Bignonia suaveolens',
    uses: 'It is used for stomoch problem,diabetes,lever disorders.',
    Habitat: 'It is a deciduous tree native to south and southeast asia.',
    url: '/images/Stereospermum chelonoides.jpg'
  },
  {
    sno: 134,
    CommonName: 'Tabebuia rosea',
    ScientificName: 'Tabebuia rosea',
    uses: 'It has been used to redues fevers and pains , cause sweating.',
    Habitat: 'This tree  is often seen in Neotropical cities.',
    url: '/images/Tabebuia rosea.jpg'
  },
  {
    sno: 135,
    CommonName: 'Yucca aloifolia',
    ScientificName: 'Yucca aloifolia',
    uses: 'It is used for osteoarthritis,high blood pressure, migraine headaches.',
    Habitat: 'it grows sandy soils , esspecially on sand dunes along the coast',
    url: '/images/Yucca aloifolia.jpg'
  },
  {
    sno: 136,
    CommonName: 'Oleander',
    ScientificName: 'Nerium oleander',
    uses: 'It has traditionaly been used in the treatment of cardiac illness,asthma.',
    Habitat: 'It is found in subtropical regions.',
    url: '/images/Oleander.jpg'
  },
  {
    sno: 137,
    CommonName: 'Aglaia odorata',
    ScientificName: 'Aglalia odorata',
    uses: 'It is used in folk medicine.The flowers are used to treat cough,vertigo. ',
    Habitat: 'It is found in terristrial regions(mountains,rainforest).',
    url: '/images/Aglaia odorata.jpg'
  },
  {
    sno: 138,
    CommonName: 'Chinese Toon',
    ScientificName: 'Toona sinensis',
    uses: 'It is used to blanching,stir-frying,roasting and frying.',
    Habitat: 'it orginates in east Asia and is specifically found in northern and western china',
    url: '/images/Chinese Toon.jpg'
  },
  {
    sno: 139,
    CommonName: 'Yellow Tecoma',
    ScientificName: 'Tecoma stans',
    uses: 'It is used in the construction of buildings.',
    Habitat: 'it is found in rocky places,sandy lake shores and disturbed sites in tropical and subtropical environments.',
    url: '/images/Yellow Tecoma.jpg'
  },
  {
    sno: 140,
    CommonName: 'Pinwheel flower',
    ScientificName: 'Tabernaemontana divaricata',
    uses: 'It is used to treat hypertension,headaches,scabies and toothaches.',
    Habitat: 'it is found in montane brushwoods and sparse forests.',
    url: '/images/Pinwheel flower.jpg'
  },
  {
    sno: 141,
    CommonName: 'Java plum',
    ScientificName: 'Syzygium cumini',
    uses: 'It helps in managing weight,boost immunity.',
    Habitat: 'it is found in most tropical and subtropical forest habitats in india.',
    url: '/images/Java plum.jpg'
  }
]
export default sheetData;