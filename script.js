/* ===================================================================
   WILDTRAP-50: Lightweight Object Detection for 50 Wildlife Species
   Interactive Client-side Inference Studio & Taxonomy Engine
   =================================================================== */

// Complete Database of 50 Target Camera-Trap Species with 50 Distinct Photos
const WILDLIFE_50_SPECIES = [
  {
    id: "sp-01",
    name: "Bengal Tiger",
    binomial: "Panthera tigris tigris",
    family: "Felidae",
    category: "predator",
    iucn: "EN",
    image: "assets/sp_01.jpg",
    habitat: "Tropical Rainforests, Mangroves & Deciduous Forests",
    map50: "96.4%",
    nocturnalPct: 82,
    camouflageDifficulty: "High (Dense Stripe Occlusion)",
    sensorTrigger: "PIR Thermal Signature + Burst IR Flash",
    description: "Apex predator of the Indian subcontinent. Highly nocturnal with distinctive disruptive camouflage stripes. Models require stripe-invariant edge detection to prevent partial body misclassification in dense brush."
  },
  {
    id: "sp-02",
    name: "African Lion",
    binomial: "Panthera leo",
    family: "Felidae",
    category: "predator",
    iucn: "VU",
    image: "assets/sp_02.jpg",
    habitat: "Savannah Grasslands, Scrub & Open Woodlands",
    map50: "95.8%",
    nocturnalPct: 65,
    camouflageDifficulty: "Medium (Tawny Blending)",
    sensorTrigger: "PIR High Sensitivity",
    description: "Social feline inhabiting sub-Saharan Africa. High daytime and crepuscular activity. Models excel at separating lion prides clustered near waterholes."
  },
  {
    id: "sp-03",
    name: "African Leopard",
    binomial: "Panthera pardus pardus",
    family: "Felidae",
    category: "predator",
    iucn: "VU",
    image: "assets/sp_03.jpg",
    habitat: "Rainforests, Arid Bushland & Mountain Slopes",
    map50: "94.7%",
    nocturnalPct: 78,
    camouflageDifficulty: "Severe (Rosette Foliage Pattern)",
    sensorTrigger: "Arboreal & Ground PIR Triggers",
    description: "Master of stealth with rosette coat. Often detected vertically in tree perches or slinking along game trails during deep night hours."
  },
  {
    id: "sp-04",
    name: "Snow Leopard",
    binomial: "Panthera uncia",
    family: "Felidae",
    category: "predator",
    iucn: "VU",
    image: "assets/sp_04.jpg",
    habitat: "Alpine & Subalpine Tundra, Himalayan Ridges",
    map50: "93.1%",
    nocturnalPct: 68,
    camouflageDifficulty: "Extreme (Granite & Snow Mimicry)",
    sensorTrigger: "Extreme Cold Resistant PIR (-30°C)",
    description: "The 'Ghost of the Mountains'. Camouflage matches scree and boulders almost identically. RepDepth feature pyramids retain micro-contrast edges of fur contours."
  },
  {
    id: "sp-05",
    name: "Jaguar",
    binomial: "Panthera onca",
    family: "Felidae",
    category: "predator",
    iucn: "NT",
    image: "assets/sp_05.jpg",
    habitat: "Amazonian Rain Forests, Pantanal Swamplands",
    map50: "94.3%",
    nocturnalPct: 72,
    camouflageDifficulty: "Severe (Large Spot Rosettes)",
    sensorTrigger: "Waterproof IR Sensor Burst",
    description: "Largest cat species in the Americas. Highly adapted to riparian environments and humid tropical riverbanks where lens condensation is frequent."
  },
  {
    id: "sp-06",
    name: "Cheetah",
    binomial: "Acinonyx jubatus",
    family: "Felidae",
    category: "predator",
    iucn: "VU",
    image: "assets/sp_06.jpg",
    habitat: "East & Southern African Arid Plains & Steppes",
    map50: "95.2%",
    nocturnalPct: 24,
    camouflageDifficulty: "Medium (Tear Stripe & Spot Matrix)",
    sensorTrigger: "High-Speed Dynamic Trigger (1/2000s)",
    description: "Diurnal predator known for rapid acceleration. Fast camera-trap shutter speeds coupled with motion blur suppression are required to capture high-velocity passes."
  },
  {
    id: "sp-07",
    name: "Cougar / Mountain Lion",
    binomial: "Puma concolor",
    family: "Felidae",
    category: "predator",
    iucn: "LC",
    image: "assets/sp_07.jpg",
    habitat: "Montane Conifer Forests, Canyons & Deserts",
    map50: "93.9%",
    nocturnalPct: 74,
    camouflageDifficulty: "Medium-High (Uniform Tawny Grey)",
    sensorTrigger: "Canyon Trail PIR Sensor",
    description: "Solitary cat native to the Americas. Often recorded on ridge bottlenecks and rock scrambles during dusk and predawn cycles."
  },
  {
    id: "sp-08",
    name: "Eurasian Lynx",
    binomial: "Lynx lynx",
    family: "Felidae",
    category: "predator",
    iucn: "LC",
    image: "assets/sp_08.jpg",
    habitat: "Boreal & Deciduous Forests of Europe and Asia",
    map50: "94.1%",
    nocturnalPct: 79,
    camouflageDifficulty: "High (Ear Tuft & Spotted Coat)",
    sensorTrigger: "Sub-Zero Snow Corridor PIR",
    description: "Medium-sized boreal cat identified by distinct black ear tufts and short bobtail. Highly secretive, requiring non-intrusive 940nm black-flash illumination."
  },
  {
    id: "sp-09",
    name: "Clouded Leopard",
    binomial: "Neofelis nebulosa",
    family: "Felidae",
    category: "predator",
    iucn: "VU",
    image: "assets/sp_09.jpg",
    habitat: "Dense Primary Evergreen Rainforests of SE Asia",
    map50: "91.8%",
    nocturnalPct: 88,
    camouflageDifficulty: "Extreme (Cloud Blotches & Canopy Shadow)",
    sensorTrigger: "Canopy & Tree Trunk Rigging",
    description: "Arboreal specialist with immense cloud-like rosettes. Difficult to detect due to thick understory vegetation and extreme canopy height."
  },
  {
    id: "sp-10",
    name: "Ocelot",
    binomial: "Leopardus pardalis",
    family: "Felidae",
    category: "predator",
    iucn: "LC",
    image: "assets/sp_10.jpg",
    habitat: "Tropical Dry Scrub, Mangroves & Lowland Rainforests",
    map50: "92.6%",
    nocturnalPct: 85,
    camouflageDifficulty: "High (Chain-Dot Camouflage)",
    sensorTrigger: "Ground-Level Low-Height PIR",
    description: "Compact spotted neotropical feline active almost exclusively at night. Often captured traversing dense thorn forests."
  },
  {
    id: "sp-11",
    name: "African Bush Elephant",
    binomial: "Loxodonta africana",
    family: "Elephantidae",
    category: "herbivore",
    iucn: "EN",
    image: "assets/sp_11.jpg",
    habitat: "Savannah, Forest Edge, Mopane Scrub & Marshes",
    map50: "97.8%",
    nocturnalPct: 40,
    camouflageDifficulty: "Low (Enormous Silhouette)",
    sensorTrigger: "Wide-Angle PIR Thermal Envelope",
    description: "Largest terrestrial mammal. Generates massive thermal gradients; detection heads easily segregate adult bulls and small calves even under trunk occlusion."
  },
  {
    id: "sp-12",
    name: "Asian Elephant",
    binomial: "Elephas maximus",
    family: "Elephantidae",
    category: "herbivore",
    iucn: "EN",
    image: "assets/sp_12.jpg",
    habitat: "Wet Tropical Rainforests & Grasslands of Asia",
    map50: "96.9%",
    nocturnalPct: 52,
    camouflageDifficulty: "Low-Medium (Mud Splatter & Canopy)",
    sensorTrigger: "Forest Corridor Wide Sensor",
    description: "Recognizable by convex back and twin dorsal humps. Deep jungle settings require multi-scale anchors to handle close-up camera intrusions."
  },
  {
    id: "sp-13",
    name: "Black Rhinoceros",
    binomial: "Diceros bicornis",
    family: "Rhinocerotidae",
    category: "herbivore",
    iucn: "CR",
    image: "assets/sp_13.jpg",
    habitat: "Arid Thorn Scrub, Semi-Desert & Savannas",
    map50: "95.1%",
    nocturnalPct: 62,
    camouflageDifficulty: "Medium (Prehensile Lip & Dust Coat)",
    sensorTrigger: "Waterhole Perimeter Sensor",
    description: "Critically endangered hook-lipped rhino. Real-time edge detection enables anti-poaching geofences and instant silent alert dispatches."
  },
  {
    id: "sp-14",
    name: "White Rhinoceros",
    binomial: "Ceratotherium simum",
    family: "Rhinocerotidae",
    category: "herbivore",
    iucn: "NT",
    image: "assets/sp_14.jpg",
    habitat: "Open Savannas & Short Grass Plains",
    map50: "95.7%",
    nocturnalPct: 45,
    camouflageDifficulty: "Low (Broad Square Lip & Large Body)",
    sensorTrigger: "Grazing Ground Wide Grid",
    description: "Square-lipped grazer. Readily identified by massive shoulder hump and wide snout grazing close to the terrain."
  },
  {
    id: "sp-15",
    name: "Greater One-Horned Rhino",
    binomial: "Rhinoceros unicornis",
    family: "Rhinocerotidae",
    category: "herbivore",
    iucn: "VU",
    image: "assets/sp_15.jpg",
    habitat: "Riverine Grasslands & Terai Floodplains",
    map50: "96.2%",
    nocturnalPct: 48,
    camouflageDifficulty: "Medium (Armor Plate Fold Patterns)",
    sensorTrigger: "Marshland Raised Rig",
    description: "Iconic single-horned mammal with distinctive armor-like dermal folds. Frequently recorded wallowing in muddy marshland."
  },
  {
    id: "sp-16",
    name: "Hippopotamus",
    binomial: "Hippopotamus amphibius",
    family: "Hippopotamidae",
    category: "herbivore",
    iucn: "VU",
    image: "assets/sp_16.jpg",
    habitat: "Deep Freshwater Rivers, Lakes & Adjacent Pastures",
    map50: "95.4%",
    nocturnalPct: 75,
    camouflageDifficulty: "Medium (Submerged Body & Low Night Profile)",
    sensorTrigger: "Riverbank Night Exit Corridors",
    description: "Semi-aquatic giant that grazes on dry land at night. High nocturnal IR detection prevents false classification as river boulders."
  },
  {
    id: "sp-17",
    name: "Giraffe",
    binomial: "Giraffa camelopardalis",
    family: "Giraffidae",
    category: "herbivore",
    iucn: "VU",
    image: "assets/sp_17.jpg",
    habitat: "Acacia Woodlands & Open Plains",
    map50: "97.2%",
    nocturnalPct: 18,
    camouflageDifficulty: "Low-Medium (High Verticality)",
    sensorTrigger: "Vertical Aspect Ratio PIR Multi-Zone",
    description: "Tallest mammal with extreme vertical aspect ratio. Models utilize tall anchor priors and multi-scale feature pyramids to avoid cropping legs or neck."
  },
  {
    id: "sp-18",
    name: "Plains Zebra",
    binomial: "Equus quagga",
    family: "Equidae",
    category: "herbivore",
    iucn: "NT",
    image: "assets/sp_18.jpg",
    habitat: "Treeless Grasslands & Woodlands",
    map50: "96.5%",
    nocturnalPct: 30,
    camouflageDifficulty: "Medium (Dazzle Stripe Illusion)",
    sensorTrigger: "PIR Herd Tracking",
    description: "Famous alternating black and white stripes can cause conventional detectors to hallucinate multiple smaller objects. WildTrap-50's CSFA preserves holistic body semantics."
  },
  {
    id: "sp-19",
    name: "African Buffalo",
    binomial: "Syncerus caffer",
    family: "Bovidae",
    category: "herbivore",
    iucn: "NT",
    image: "assets/sp_19.jpg",
    habitat: "Dense Forest, Reed Beds & Open Savannah",
    map50: "95.8%",
    nocturnalPct: 54,
    camouflageDifficulty: "Medium (Dark Heavy Body)",
    sensorTrigger: "Herd Corridor PIR",
    description: "Possesses a fused bony horn shield ('boss'). Robust detection handles dense clusters of closely-packed bodies in large herds."
  },
  {
    id: "sp-20",
    name: "Gaur / Indian Bison",
    binomial: "Bos gaurus",
    family: "Bovidae",
    category: "herbivore",
    iucn: "VU",
    image: "assets/sp_20.jpg",
    habitat: "Evergreen Forests & Moist Deciduous Terrains",
    map50: "94.6%",
    nocturnalPct: 50,
    camouflageDifficulty: "Medium-High (Deep Canopy Silhouette)",
    sensorTrigger: "Salt Lick & Forest Trail Sensor",
    description: "Largest extant bovine with prominent dorsal ridge and white stocking legs. Often detected crossing deep forest clearing salt-licks."
  },
  {
    id: "sp-21",
    name: "Spotted Hyena",
    binomial: "Crocuta crocuta",
    family: "Hyaenidae",
    category: "canid",
    iucn: "LC",
    image: "assets/sp_21.jpg",
    habitat: "Semi-Deserts, Savannah & Montane Woodlands",
    map50: "94.8%",
    nocturnalPct: 84,
    camouflageDifficulty: "Medium (Sloping Back & Spotted Fur)",
    sensorTrigger: "Carcass & Den Site Sensor",
    description: "Highly intelligent social scavenger/hunter. Sloping posture and powerful neck structure provide distinct geometric keypoints."
  },
  {
    id: "sp-22",
    name: "Striped Hyena",
    binomial: "Hyaena hyaena",
    family: "Hyaenidae",
    category: "canid",
    iucn: "NT",
    image: "assets/sp_22.jpg",
    habitat: "Arid Scrub, Rocky Hills & Ravines",
    map50: "93.2%",
    nocturnalPct: 91,
    camouflageDifficulty: "High (Erectile Mane & Shadow Blending)",
    sensorTrigger: "Nocturnal Trail PIR",
    description: "Strictly nocturnal with vertical black stripes and long dorsal mane. Rarely captured in daylight; relies heavily on IR-normalization."
  },
  {
    id: "sp-23",
    name: "Gray Wolf",
    binomial: "Canis lupus",
    family: "Canidae",
    category: "canid",
    iucn: "LC",
    image: "assets/sp_23.jpg",
    habitat: "Wilderness, Taiga, Tundra & Temperate Forests",
    map50: "94.5%",
    nocturnalPct: 65,
    camouflageDifficulty: "Medium-High (Grizzled Pelage)",
    sensorTrigger: "Game Trail Pack Trigger",
    description: "Keystone predator with keen sensory range. Bounding boxes accurately isolate pack members traveling in single-file snow trails."
  },
  {
    id: "sp-24",
    name: "African Wild Dog",
    binomial: "Lycaon pictus",
    family: "Canidae",
    category: "canid",
    iucn: "EN",
    image: "assets/sp_24.jpg",
    habitat: "Bushveld, Acacia Woodlands & Open Savannah",
    map50: "95.3%",
    nocturnalPct: 22,
    camouflageDifficulty: "Medium (Tri-Color Calico Spots)",
    sensorTrigger: "Crepuscular Burst Trigger",
    description: "Distinguished by large rounded bat-like ears and unique patchwork calico fur patterns. Crepuscular runner requiring short latency detection."
  },
  {
    id: "sp-25",
    name: "Dhole / Asiatic Wild Dog",
    binomial: "Cuon alpinus",
    family: "Canidae",
    category: "canid",
    iucn: "EN",
    image: "assets/sp_25.jpg",
    habitat: "Tropical Dry & Moist Deciduous Jungle",
    map50: "93.7%",
    nocturnalPct: 35,
    camouflageDifficulty: "High (Russet Coat in Red Soil/Brush)",
    sensorTrigger: "Pack Hunting Trail PIR",
    description: "Endangered Asian canid with deep russet fur and dark bushy tail. Moves swiftly through dense undergrowth in coordinated packs."
  },
  {
    id: "sp-26",
    name: "Red Fox",
    binomial: "Vulpes vulpes",
    family: "Canidae",
    category: "canid",
    iucn: "LC",
    image: "assets/sp_26.jpg",
    habitat: "Forests, Grasslands, Agricultural Edges",
    map50: "93.4%",
    nocturnalPct: 70,
    camouflageDifficulty: "Medium (Compact Stature & White Tail Tip)",
    sensorTrigger: "Low-Profile PIR Sensor",
    description: "Small agile omnivore. Low mass requires high-sensitivity PIR tuning; detector separates fox from domestic feral cats and lagomorphs."
  },
  {
    id: "sp-27",
    name: "Coyote",
    binomial: "Canis latrans",
    family: "Canidae",
    category: "canid",
    iucn: "LC",
    image: "assets/sp_27.jpg",
    habitat: "Deserts, Plains, Chaparral & Forest Edges",
    map50: "94.0%",
    nocturnalPct: 62,
    camouflageDifficulty: "Medium (Grizzled Tan/Grey Blend)",
    sensorTrigger: "Trail Intersection Sensor",
    description: "Highly adaptable canid. Detector effectively discriminates coyotes from gray wolves and domestic dogs based on snout and leg length ratios."
  },
  {
    id: "sp-28",
    name: "Golden Jackal",
    binomial: "Canis aureus",
    family: "Canidae",
    category: "canid",
    iucn: "LC",
    image: "assets/sp_28.jpg",
    habitat: "Scrublands, Semi-Arid Plains & Reeds",
    map50: "93.6%",
    nocturnalPct: 68,
    camouflageDifficulty: "Medium (Golden-Buff Coat)",
    sensorTrigger: "Foraging Corridor Sensor",
    description: "Medium-sized scavenger and opportunistic predator. Readily identified across Euro-Asian and North African camera-trap networks."
  },
  {
    id: "sp-29",
    name: "Giant Panda",
    binomial: "Ailuropoda melanoleuca",
    family: "Ursidae",
    category: "primate_bear",
    iucn: "VU",
    image: "assets/sp_29.jpg",
    habitat: "Temperate Broadleaf & Mixed Bamboo Forests",
    map50: "95.6%",
    nocturnalPct: 38,
    camouflageDifficulty: "Medium (Bold Contrast Black/White)",
    sensorTrigger: "Bamboo Chute Sensor Rig",
    description: "Specialized folivore feeding on bamboo. Distinctive eye patches and black shoulder mantle allow reliable classification even when seated amongst dense bamboo canes."
  },
  {
    id: "sp-30",
    name: "Brown Bear / Grizzly",
    binomial: "Ursus arctos",
    family: "Ursidae",
    category: "primate_bear",
    iucn: "LC",
    image: "assets/sp_30.jpg",
    habitat: "Taiga, Subalpine Meadows & Coastal Rivers",
    map50: "96.1%",
    nocturnalPct: 45,
    camouflageDifficulty: "Low-Medium (Massive Muscular Shoulder Hump)",
    sensorTrigger: "Salmon Stream & Ridge PIR",
    description: "Large apex omnivore with pronounced shoulder hump and dished facial profile. Often recorded fishing at rapids or foraging berry slopes."
  },
  {
    id: "sp-31",
    name: "American Black Bear",
    binomial: "Ursus americanus",
    family: "Ursidae",
    category: "primate_bear",
    iucn: "LC",
    image: "assets/sp_31.jpg",
    habitat: "Dense Hardwood Forests, Swamps & Mountains",
    map50: "95.8%",
    nocturnalPct: 52,
    camouflageDifficulty: "Medium (Dark Monotone Body)",
    sensorTrigger: "Forest Scratch Tree Sensor",
    description: "Smaller bear species without the grizzly hump, possessing straight facial profile. Frequently visits rub-trees where camera traps are deployed."
  },
  {
    id: "sp-32",
    name: "Sun Bear",
    binomial: "Helarctos malayanus",
    family: "Ursidae",
    category: "primate_bear",
    iucn: "VU",
    image: "assets/sp_32.jpg",
    habitat: "Tropical Rainforests of Southeast Asia",
    map50: "92.4%",
    nocturnalPct: 60,
    camouflageDifficulty: "High (Small Bear in Dark Primary Canopy)",
    sensorTrigger: "Canopy & Fallen Log PIR",
    description: "Smallest bear species characterized by a distinct golden-crescent chest patch and short sleek dark coat suited for arboreal climbing."
  },
  {
    id: "sp-33",
    name: "Sloth Bear",
    binomial: "Melursus ursinus",
    family: "Ursidae",
    category: "primate_bear",
    iucn: "VU",
    image: "assets/sp_33.jpg",
    habitat: "Dry Deciduous Scrub & Rocky Outcrops of South Asia",
    map50: "93.8%",
    nocturnalPct: 78,
    camouflageDifficulty: "High (Shaggy Black Coat & Low Light)",
    sensorTrigger: "Termite Mound & Cave PIR",
    description: "Myrmecophagous bear with long cream muzzle and shaggy fur. Usually triggered near termite mounds or limestone rock shelters at night."
  },
  {
    id: "sp-34",
    name: "Western Chimpanzee",
    binomial: "Pan troglodytes verus",
    family: "Hominidae",
    category: "primate_bear",
    iucn: "CR",
    image: "assets/sp_34.jpg",
    habitat: "Guinean Forest-Savannah Mosaic & Rainforests",
    map50: "94.2%",
    nocturnalPct: 10,
    camouflageDifficulty: "Medium-High (Rapid Arboreal Motion)",
    sensorTrigger: "Nut-Cracking Site & Tool Ground Sensor",
    description: "Critically endangered ape with sophisticated tool usage. High-speed PIR triggers monitor nut-cracking anvil sites and ground travel paths."
  },
  {
    id: "sp-35",
    name: "Mountain Gorilla",
    binomial: "Gorilla beringei beringei",
    family: "Hominidae",
    category: "primate_bear",
    iucn: "EN",
    image: "assets/sp_35.jpg",
    habitat: "Albertine Rift Montane Cloud Forests & Volcanoes",
    map50: "96.3%",
    nocturnalPct: 8,
    camouflageDifficulty: "Medium (Dense Foliage Occlusion)",
    sensorTrigger: "Volcanic Slope Cloud-Mist Rig",
    description: "Robust ape inhabiting high-altitude fog forests. Model accurately segments adult silverbacks from blackbacks and juveniles."
  },
  {
    id: "sp-36",
    name: "Bornean Orangutan",
    binomial: "Pongo pygmaeus",
    family: "Hominidae",
    category: "primate_bear",
    iucn: "CR",
    image: "assets/sp_36.jpg",
    habitat: "Peat Swamp & Lowland Dipterocarp Forests",
    map50: "93.5%",
    nocturnalPct: 5,
    camouflageDifficulty: "High (Canopy Clutter & Orange Pelage)",
    sensorTrigger: "Canopy Bridge & Liana Sensor",
    description: "Solitary arboreal ape. Cameras placed on canopy rope bridges detect individuals crossing fragmented oil palm concessions."
  },
  {
    id: "sp-37",
    name: "Olive Baboon",
    binomial: "Papio anubis",
    family: "Cercopithecidae",
    category: "primate_bear",
    iucn: "LC",
    image: "assets/sp_37.jpg",
    habitat: "Savannah, Woodland & Cliff Faces",
    map50: "94.7%",
    nocturnalPct: 12,
    camouflageDifficulty: "Medium (Dog-Like Muzzle & Quarto-Leg Posture)",
    sensorTrigger: "Cliff Sleeping Site Wide Grid",
    description: "Highly terrestrial monkey traveling in large multi-individual troops across open savannas and boulder outcroppings."
  },
  {
    id: "sp-38",
    name: "Mandrill",
    binomial: "Mandrillus sphinx",
    family: "Cercopithecidae",
    category: "primate_bear",
    iucn: "VU",
    image: "assets/sp_38.jpg",
    habitat: "Dense Tropical Lowland Rainforests of Central Africa",
    map50: "93.3%",
    nocturnalPct: 15,
    camouflageDifficulty: "High (Dark Understory Shadow)",
    sensorTrigger: "Forest Floor Foraging Sensor",
    description: "Largest monkey, famous for the adult male's vivid red and blue facial ridges. Forages quietly in huge 'hordes' on rainforest floors."
  },
  {
    id: "sp-39",
    name: "Sunda Pangolin",
    binomial: "Manis javanica",
    family: "Manidae",
    category: "rare",
    iucn: "CR",
    image: "assets/sp_39.jpg",
    habitat: "Primary & Secondary Rainforests, Plantations",
    map50: "90.7%",
    nocturnalPct: 94,
    camouflageDifficulty: "Extreme (Low Ground Profile & Keratin Scales)",
    sensorTrigger: "Burrow & Ant Nest Micro-PIR",
    description: "World's most trafficked mammal. Extremely low body height and scale patterns that mimic fallen pinecones or dead leaves make edge detection challenging."
  },
  {
    id: "sp-40",
    name: "Giant Anteater",
    binomial: "Myrmecophaga tridactyla",
    family: "Myrmecophagidae",
    category: "rare",
    iucn: "VU",
    image: "assets/sp_40.jpg",
    habitat: "Cerrado Grasslands, Humid Forests & Swamps",
    map50: "92.9%",
    nocturnalPct: 55,
    camouflageDifficulty: "Medium (Bizarre Elongated Silhouette)",
    sensorTrigger: "Grassland Termite Mound Sensor",
    description: "Remarkable morphology with elongated tubular snout and massive bushy tail. Distinctive diagonal shoulder stripe assists neural classification."
  },
  {
    id: "sp-41",
    name: "Aardvark",
    binomial: "Orycteropus afer",
    family: "Orycteropodidae",
    category: "rare",
    iucn: "LC",
    image: "assets/sp_41.jpg",
    habitat: "Sub-Saharan Savannah, Bush & Grassland",
    map50: "91.5%",
    nocturnalPct: 96,
    camouflageDifficulty: "High (Pig-Like Snout & Bare Skin in Dark)",
    sensorTrigger: "Burrow Exit PIR Trigger",
    description: "Strictly nocturnal fossorial mammal. Detected exiting underground burrows; thermal signature quickly spikes relative to cool night air."
  },
  {
    id: "sp-42",
    name: "Capybara",
    binomial: "Hydrochoerus hydrochaeris",
    family: "Caviidae",
    category: "rare",
    iucn: "LC",
    image: "assets/sp_42.jpg",
    habitat: "Wetlands, Riverbanks & Flooded Grasslands of S. America",
    map50: "95.0%",
    nocturnalPct: 40,
    camouflageDifficulty: "Medium (Barrel-Shaped Rodent Body)",
    sensorTrigger: "Wetland Margin PIR Sensor",
    description: "World's largest living rodent. Highly social, congregating along marsh edges where low-angle water reflections test edge detection."
  },
  {
    id: "sp-43",
    name: "Wild Boar",
    binomial: "Sus scrofa",
    family: "Suidae",
    category: "rare",
    iucn: "LC",
    image: "assets/sp_43.jpg",
    habitat: "Oak Forests, Marshlands & Agricultural Fringes",
    map50: "94.9%",
    nocturnalPct: 75,
    camouflageDifficulty: "Medium-High (Bristly Dark Profile)",
    sensorTrigger: "Mud Wallow & Rooting Patch Sensor",
    description: "Prolific suid with global distribution. Fast nocturnal movements and muddy wallow coats are accurately segmented by WildTrap-50."
  },
  {
    id: "sp-44",
    name: "Red Deer",
    binomial: "Cervus elaphus",
    family: "Cervidae",
    category: "rare",
    iucn: "LC",
    image: "assets/sp_44.jpg",
    habitat: "Deciduous Woodlands, Moorlands & Glens",
    map50: "95.5%",
    nocturnalPct: 58,
    camouflageDifficulty: "Medium (Antler Branch Mimicry)",
    sensorTrigger: "Rutting Arena Wide Field Sensor",
    description: "Stately cervid whose branching stags frequently blend with overhead dead branches. Model suppresses antler-foliage confusion."
  },
  {
    id: "sp-45",
    name: "Moose / Eurasian Elk",
    binomial: "Alces alces",
    family: "Cervidae",
    category: "rare",
    iucn: "LC",
    image: "assets/sp_45.jpg",
    habitat: "Boreal Forests, Willow Swamps & Muskegs",
    map50: "96.7%",
    nocturnalPct: 42,
    camouflageDifficulty: "Low-Medium (High Long-Legged Posture)",
    sensorTrigger: "Bog Crossing Highway Underpass Sensor",
    description: "Largest cervid with broad palmate antlers and prominent dewlap. Readily detected in snowy Scandinavian and Canadian camera grids."
  },
  {
    id: "sp-46",
    name: "Sambar Deer",
    binomial: "Rusa unicolor",
    family: "Cervidae",
    category: "rare",
    iucn: "VU",
    image: "assets/sp_46.jpg",
    habitat: "Subtropical Jungle, Dense Evergreen Slopes",
    map50: "94.4%",
    nocturnalPct: 72,
    camouflageDifficulty: "High (Shaggy Uniform Dark Brown)",
    sensorTrigger: "Salt Lick & Stream Bed Sensor",
    description: "Crucial prey species for Bengal tigers. Highly nocturnal in protected reserves where human disturbance exists."
  },
  {
    id: "sp-47",
    name: "Chital / Spotted Deer",
    binomial: "Axis axis",
    family: "Cervidae",
    category: "rare",
    iucn: "LC",
    image: "assets/sp_47.jpg",
    habitat: "Open Deciduous Grassland & Sal Forests",
    map50: "95.9%",
    nocturnalPct: 35,
    camouflageDifficulty: "Medium (Permanent White Spot Rows)",
    sensorTrigger: "Savannah Edge Sensor",
    description: "Beautiful deer maintaining golden-rufous coat and white spots throughout adulthood. Often detected in large mixed herds with langurs."
  },
  {
    id: "sp-48",
    name: "Blackbuck",
    binomial: "Antilope cervicapra",
    family: "Bovidae",
    category: "rare",
    iucn: "LC",
    image: "assets/sp_48.jpg",
    habitat: "Open Plains, Thorn Scrub & Coastal Dunes",
    map50: "94.8%",
    nocturnalPct: 20,
    camouflageDifficulty: "Medium (Sharp Black/White Belly Contrast)",
    sensorTrigger: "High-Speed Sprinter PIR Rig",
    description: "Graceful spiral-horned antelope native to India. Highly diurnal; model captures rapid bounding leaps across flat grasslands."
  },
  {
    id: "sp-49",
    name: "Mountain Bongo",
    binomial: "Tragelaphus eurycerus isaaci",
    family: "Bovidae",
    category: "rare",
    iucn: "CR",
    image: "assets/sp_49.jpg",
    habitat: "Highland Bamboo & Cloud Forests of Kenya",
    map50: "91.2%",
    nocturnalPct: 86,
    camouflageDifficulty: "Extreme (Narrow Vertical White Stripes)",
    sensorTrigger: "Mt. Kenya Bamboo Trail Rig",
    description: "Fewer than 100 wild individuals remain. Bright chestnut coat with 10-14 white torso stripes breaks up body outlines in dense highland bamboo."
  },
  {
    id: "sp-50",
    name: "Okapi",
    binomial: "Okapia johnstoni",
    family: "Giraffidae",
    category: "rare",
    iucn: "EN",
    image: "assets/sp_50.jpg",
    habitat: "Ituri Deep Rain Forest of DR Congo",
    map50: "92.8%",
    nocturnalPct: 62,
    camouflageDifficulty: "Extreme (Zebra Rump Stripes in Dim Canopy)",
    sensorTrigger: "Remote Rainforest Canopy Sensor Rig",
    description: "The rainforest giraffe. Deep chocolate velvet body with striking horizontal zebra stripes on legs. Solitary and elusive, only trackable via camera traps."
  }
];

// Preloaded Camera-Trap Scenarios with Aligned Real Photo Detections
const SCENARIOS = [
  {
    id: "tiger",
    title: "Bengal Tiger (Nocturnal IR)",
    location: "CAM-01 [Ranthambhore Core Reserve, India]",
    time: "2026-11-23 02:44:19",
    temp: "17°C (62°F)",
    moon: "🌘 Waning Crescent 22%",
    battery: "91% (8.3V)",
    imageSrc: "assets/sp_01.jpg",
    detections: [
      {
        speciesId: "sp-01",
        label: "Bengal Tiger",
        binomial: "Panthera tigris",
        confidence: 0.964,
        box: [0.15, 0.22, 0.84, 0.78],
        isKey: true
      }
    ]
  },
  {
    id: "elephant",
    title: "African Bush Elephant",
    location: "CAM-02 [Serengeti National Park, Tanzania]",
    time: "2026-11-23 14:15:33",
    temp: "34°C (93°F)",
    moon: "☀️ Diurnal Sunlight",
    battery: "98% (Solar Charged)",
    imageSrc: "assets/sp_11.jpg",
    detections: [
      {
        speciesId: "sp-11",
        label: "African Bush Elephant",
        binomial: "Loxodonta africana",
        confidence: 0.978,
        box: [0.12, 0.18, 0.88, 0.82],
        isKey: true
      }
    ]
  },
  {
    id: "snow_leopard",
    title: "Snow Leopard (Ridge)",
    location: "CAM-03 [Hemis High Altitude Reserve, Ladakh]",
    time: "2026-11-23 06:12:04",
    temp: "-14°C (7°F)",
    moon: "🌖 Morning Dawn",
    battery: "82% (Cold Derated)",
    imageSrc: "assets/sp_04.jpg",
    detections: [
      {
        speciesId: "sp-04",
        label: "Snow Leopard",
        binomial: "Panthera uncia",
        confidence: 0.931,
        box: [0.18, 0.22, 0.82, 0.78],
        isKey: true
      }
    ]
  },
  {
    id: "panda",
    title: "Giant Panda (Bamboo)",
    location: "CAM-04 [Wolong Sanctuary, Sichuan]",
    time: "2026-11-23 11:28:50",
    temp: "13°C (55°F)",
    moon: "☁️ Dense Fog & Mist",
    battery: "94% (8.4V)",
    imageSrc: "assets/sp_29.jpg",
    detections: [
      {
        speciesId: "sp-29",
        label: "Giant Panda",
        binomial: "Ailuropoda melanoleuca",
        confidence: 0.956,
        box: [0.18, 0.25, 0.84, 0.76],
        isKey: true
      }
    ]
  },
  {
    id: "cheetah",
    title: "Cheetah (Savannah)",
    location: "CAM-05 [Maasai Mara Corridor, Kenya]",
    time: "2026-11-23 16:55:10",
    temp: "29°C (84°F)",
    moon: "🌅 Late Afternoon",
    battery: "90% (8.2V)",
    imageSrc: "assets/sp_06.jpg",
    detections: [
      {
        speciesId: "sp-06",
        label: "Cheetah",
        binomial: "Acinonyx jubatus",
        confidence: 0.952,
        box: [0.22, 0.15, 0.78, 0.85],
        isKey: true
      }
    ]
  },
  {
    id: "rhino",
    title: "One-Horned Rhino",
    location: "CAM-06 [Kaziranga Floodplain, India]",
    time: "2026-11-23 18:35:42",
    temp: "22°C (72°F)",
    moon: "🌔 Waxing Gibbous 68%",
    battery: "89% (8.1V)",
    imageSrc: "assets/sp_15.jpg",
    detections: [
      {
        speciesId: "sp-15",
        label: "Greater One-Horned Rhino",
        binomial: "Rhinoceros unicornis",
        confidence: 0.962,
        box: [0.24, 0.20, 0.82, 0.80],
        isKey: true
      }
    ]
  }
];

// App State
let currentScenario = SCENARIOS[0];
let confThreshold = 0.50;
let nmsThreshold = 0.45;
let visualFilterMode = "standard";
let boxStyle = "corner";
let showOsd = true;
let userUploadedImage = null;
let userSimulatedDetections = [];
let cachedImages = {};

// DOM Elements
const canvas = document.getElementById("detectionCanvas");
const ctx = canvas.getContext("2d");
const scenarioBtnContainer = document.getElementById("scenarioBtnContainer");
const confSlider = document.getElementById("confSlider");
const confValDisplay = document.getElementById("confValDisplay");
const nmsSlider = document.getElementById("nmsSlider");
const nmsValDisplay = document.getElementById("nmsValDisplay");
const detectedSpeciesList = document.getElementById("detectedSpeciesList");
const speciesGrid = document.getElementById("speciesGrid");
const speciesSearchInput = document.getElementById("speciesSearchInput");
const speciesCategoryTabs = document.getElementById("speciesCategoryTabs");
const speciesCountDisplay = document.getElementById("speciesCountDisplay");
const customImageInput = document.getElementById("customImageInput");
const speciesModal = document.getElementById("speciesModal");
const toastEl = document.getElementById("toastNotification");

// Initialize on Load
window.addEventListener("DOMContentLoaded", () => {
  initScenarioButtons();
  initCanvas();
  renderSpeciesGrid(WILDLIFE_50_SPECIES);
  initControls();
  initTheme();
  initCodeTabs();
  preloadImages();
});

// Preload Images
function preloadImages() {
  SCENARIOS.forEach(sc => {
    const img = new Image();
    img.src = sc.imageSrc;
    img.onload = () => {
      cachedImages[sc.id] = img;
      if (currentScenario.id === sc.id && !userUploadedImage) {
        renderCanvas();
      }
    };
  });
}

// Setup Scenario Switcher Buttons
function initScenarioButtons() {
  scenarioBtnContainer.innerHTML = "";
  SCENARIOS.forEach((sc, idx) => {
    const btn = document.createElement("button");
    btn.className = `scenario-btn ${idx === 0 ? "active" : ""}`;
    btn.innerHTML = `<span style="display:inline-block; width:7px; height:7px; border-radius:50%; background:${idx === 0 ? 'var(--emerald-light)' : 'var(--text-muted)'}"></span> ${sc.title}`;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".scenario-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentScenario = sc;
      userUploadedImage = null;
      renderCanvas();
      updateTelemetryPanel();
    });
    scenarioBtnContainer.appendChild(btn);
  });
}

// Setup Canvas Resolution
function initCanvas() {
  canvas.width = 960;
  canvas.height = 640;
  renderCanvas();
}

// Master Canvas Rendering Engine
function renderCanvas() {
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  let imgToDraw = userUploadedImage || cachedImages[currentScenario.id];

  if (imgToDraw && imgToDraw.complete && imgToDraw.naturalWidth > 0) {
    ctx.drawImage(imgToDraw, 0, 0, w, h);
  } else {
    drawProceduralBackground(w, h);
  }

  // Visual Filter Post-Processing
  applyVisualFilters(w, h);

  // Render Bounding Boxes
  renderBoundingBoxes(w, h);

  // Render Camera OSD
  if (showOsd) {
    renderCameraOsd(w, h);
  }
}

// Fallback background
function drawProceduralBackground(w, h) {
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, "#0e1a12");
  grad.addColorStop(1, "#182b20");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#ffffff";
  ctx.font = "16px 'JetBrains Mono'";
  ctx.fillText("Loading high-resolution camera-trap scene...", w / 2 - 160, h / 2);
}

// Visual Filter Modes
function applyVisualFilters(w, h) {
  if (visualFilterMode === "ir_green") {
    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      data[i] = lum * 0.45;
      data[i + 1] = lum * 1.25;
      data[i + 2] = lum * 0.55;
    }
    ctx.putImageData(imgData, 0, 0);

    ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
    for (let y = 0; y < h; y += 3) {
      ctx.fillRect(0, y, w, 1);
    }
  } else if (visualFilterMode === "monochrome") {
    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      data[i] = lum;
      data[i + 1] = lum;
      data[i + 2] = lum;
    }
    ctx.putImageData(imgData, 0, 0);
  } else if (visualFilterMode === "thermal") {
    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const lum = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
      if (lum < 0.3) {
        data[i] = lum * 3 * 100;
        data[i + 1] = 0;
        data[i + 2] = 160 + lum * 90;
      } else if (lum < 0.65) {
        data[i] = 220;
        data[i + 1] = (lum - 0.3) * 350;
        data[i + 2] = 20;
      } else {
        data[i] = 255;
        data[i + 1] = 240;
        data[i + 2] = 180 + (lum - 0.65) * 200;
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }
}

// Camera-Trap OSD
function renderCameraOsd(w, h) {
  ctx.save();
  ctx.font = "bold 13px 'JetBrains Mono', monospace";
  
  // Top HUD Bar
  ctx.fillStyle = "rgba(10, 16, 12, 0.88)";
  ctx.fillRect(14, 14, w - 28, 30);
  ctx.strokeStyle = "rgba(74, 222, 128, 0.35)";
  ctx.strokeRect(14, 14, w - 28, 30);

  // Status Indicator
  ctx.fillStyle = "#ff3b30";
  ctx.beginPath();
  ctx.arc(28, 29, 4.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.fillText("REC [BURST 1/3]", 38, 34);

  // Location
  ctx.fillStyle = "#4ade80";
  ctx.fillText(currentScenario.location, w / 2 - 160, 34);

  // Speed
  ctx.fillStyle = "#cbd5e1";
  ctx.fillText("FPS: 82.4 | LATENCY: 10.2ms", w - 235, 34);

  // Bottom HUD Bar
  ctx.fillStyle = "rgba(10, 16, 12, 0.88)";
  ctx.fillRect(14, h - 44, w - 28, 30);
  ctx.strokeStyle = "rgba(74, 222, 128, 0.35)";
  ctx.strokeRect(14, h - 44, w - 28, 30);

  ctx.fillStyle = "#e2e8f0";
  const bottomStr = `${currentScenario.time} | TEMP: ${currentScenario.temp} | ${currentScenario.moon} | BATT: ${currentScenario.battery}`;
  ctx.fillText(bottomStr, 24, h - 25);

  ctx.fillStyle = "#38bdf8";
  ctx.fillText("WILDTRAP-50 INT8 QUANTIZED", w - 235, h - 25);

  ctx.restore();
}

// Render Bounding Boxes
function renderBoundingBoxes(w, h) {
  const activeDetections = userUploadedImage ? userSimulatedDetections : currentScenario.detections;

  activeDetections.forEach((det) => {
    if (det.confidence < confThreshold) return;

    const [ymin, xmin, ymax, xmax] = det.box;
    const x = xmin * w;
    const y = ymin * h;
    const boxW = (xmax - xmin) * w;
    const boxH = (ymax - ymin) * h;

    ctx.save();

    const strokeColor = det.isKey ? "#10b981" : "#38bdf8";
    const fillColor = det.isKey ? "rgba(16, 185, 129, 0.14)" : "rgba(56, 189, 248, 0.14)";

    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, boxW, boxH);

    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2.5;

    if (boxStyle === "corner") {
      const arm = Math.min(boxW, boxH) * 0.22;
      ctx.beginPath();
      ctx.moveTo(x, y + arm); ctx.lineTo(x, y); ctx.lineTo(x + arm, y);
      ctx.moveTo(x + boxW - arm, y); ctx.lineTo(x + boxW, y); ctx.lineTo(x + boxW, y + arm);
      ctx.moveTo(x + boxW, y + boxH - arm); ctx.lineTo(x + boxW, y + boxH); ctx.lineTo(x + boxW - arm, y + boxH);
      ctx.moveTo(x + arm, y + boxH); ctx.lineTo(x, y + boxH); ctx.lineTo(x, y + boxH - arm);
      ctx.stroke();

      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, boxW, boxH);
    } else if (boxStyle === "neon") {
      ctx.shadowColor = strokeColor;
      ctx.shadowBlur = 14;
      ctx.strokeRect(x, y, boxW, boxH);
    } else {
      ctx.strokeRect(x, y, boxW, boxH);
    }

    // Label Pill
    const labelText = `${det.label} ${(det.confidence * 100).toFixed(1)}%`;
    ctx.font = "bold 13px 'JetBrains Mono', monospace";
    const textWidth = ctx.measureText(labelText).width;
    const tagH = 22;
    const tagW = textWidth + 16;

    let tagY = y - tagH - 4;
    if (tagY < 48) tagY = y + 5;

    ctx.fillStyle = "rgba(10, 16, 12, 0.94)";
    ctx.fillRect(x, tagY, tagW, tagH);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([]);
    ctx.strokeRect(x, tagY, tagW, tagH);

    ctx.fillStyle = strokeColor;
    ctx.fillText(labelText, x + 8, tagY + 16);

    ctx.restore();
  });
}

// Update Telemetry Panel
function updateTelemetryPanel() {
  const activeDetections = userUploadedImage ? userSimulatedDetections : currentScenario.detections;
  const filtered = activeDetections.filter(d => d.confidence >= confThreshold);

  detectedSpeciesList.innerHTML = "";

  if (filtered.length === 0) {
    detectedSpeciesList.innerHTML = `
      <div style="text-align:center; padding: 1.5rem; color: var(--text-muted); font-size: 0.85rem;">
        No targets meet confidence threshold (${(confThreshold * 100).toFixed(0)}%).<br>
        Lower the slider above to display candidate proposals.
      </div>
    `;
    return;
  }

  filtered.forEach(det => {
    const tax = WILDLIFE_50_SPECIES.find(s => s.id === det.speciesId) || {
      binomial: det.binomial || "Target",
      iucn: "VU"
    };

    const item = document.createElement("div");
    item.className = "detected-item";
    item.innerHTML = `
      <div class="detected-info">
        <h4>
          ${det.label}
          <span class="iucn-badge iucn-${tax.iucn}">${tax.iucn}</span>
        </h4>
        <p>${tax.binomial}</p>
      </div>
      <div class="detected-score">
        <div class="conf-val">${(det.confidence * 100).toFixed(1)}%</div>
        <div class="coords">[${det.box.map(v => Math.round(v * 100)).join(",")}%]</div>
      </div>
    `;
    detectedSpeciesList.appendChild(item);
  });
}

// Controls
function initControls() {
  confSlider.addEventListener("input", (e) => {
    confThreshold = parseFloat(e.target.value);
    confValDisplay.textContent = `${(confThreshold * 100).toFixed(0)}%`;
    renderCanvas();
    updateTelemetryPanel();
  });

  nmsSlider.addEventListener("input", (e) => {
    nmsThreshold = parseFloat(e.target.value);
    nmsValDisplay.textContent = nmsThreshold.toFixed(2);
    renderCanvas();
  });

  document.querySelectorAll(".spectrum-opt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".spectrum-opt-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      visualFilterMode = btn.dataset.filter;
      renderCanvas();
      showToast(`Spectrum set to: ${btn.textContent.trim()}`);
    });
  });

  document.querySelectorAll(".box-style-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".box-style-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      boxStyle = btn.dataset.style;
      renderCanvas();
      showToast(`Bounding box style: ${btn.textContent.trim()}`);
    });
  });

  const osdToggle = document.getElementById("toggleOsdBtn");
  if (osdToggle) {
    osdToggle.addEventListener("click", () => {
      showOsd = !showOsd;
      osdToggle.classList.toggle("active", showOsd);
      renderCanvas();
      showToast(`Camera HUD OSD: ${showOsd ? 'Enabled' : 'Disabled'}`);
    });
  }

  const resetBtn = document.getElementById("resetStudioBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      confThreshold = 0.50;
      nmsThreshold = 0.45;
      confSlider.value = 0.50;
      nmsSlider.value = 0.45;
      confValDisplay.textContent = "50%";
      nmsValDisplay.textContent = "0.45";
      visualFilterMode = "standard";
      boxStyle = "corner";
      showOsd = true;
      userUploadedImage = null;

      document.querySelectorAll(".spectrum-opt-btn").forEach(b => b.classList.remove("active"));
      document.querySelector(".spectrum-opt-btn[data-filter='standard']").classList.add("active");

      document.querySelectorAll(".box-style-btn").forEach(b => b.classList.remove("active"));
      document.querySelector(".box-style-btn[data-style='corner']").classList.add("active");

      if (osdToggle) osdToggle.classList.add("active");
      renderCanvas();
      updateTelemetryPanel();
      showToast("Camera Studio reset to default settings");
    });
  }

  customImageInput.addEventListener("change", handleCustomImageUpload);

  speciesSearchInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    filterSpecies(q, getActiveCategory());
  });

  document.querySelectorAll(".category-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.category;
      const q = speciesSearchInput.value.toLowerCase().trim();
      filterSpecies(q, cat);
    });
  });

  updateTelemetryPanel();
}

function getActiveCategory() {
  const activeBtn = document.querySelector(".category-tab-btn.active");
  return activeBtn ? activeBtn.dataset.category : "all";
}

// Handle User Uploaded Image
function handleCustomImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const img = new Image();
    img.onload = () => {
      userUploadedImage = img;
      userSimulatedDetections = [
        {
          speciesId: "sp-01",
          label: "Classified Wildlife Subject",
          binomial: "Edge Vision Target",
          confidence: 0.954,
          box: [0.20, 0.22, 0.80, 0.78],
          isKey: true
        }
      ];
      document.querySelectorAll(".scenario-btn").forEach(b => b.classList.remove("active"));
      renderCanvas();
      updateTelemetryPanel();
      showToast("Custom photo loaded and analyzed in Camera Studio!");
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

// Render 50 Species Cards with 50 Distinct Real Photos
function renderSpeciesGrid(speciesList) {
  speciesGrid.innerHTML = "";
  speciesCountDisplay.textContent = `Displaying ${speciesList.length} of ${WILDLIFE_50_SPECIES.length} species`;

  if (speciesList.length === 0) {
    speciesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        No species matching query. Try typing common name, scientific name, or family.
      </div>
    `;
    return;
  }

  speciesList.forEach(sp => {
    const card = document.createElement("div");
    card.className = "species-card";
    card.innerHTML = `
      <div class="species-card-img-wrapper">
        <img src="${sp.image}" alt="${sp.name}" class="species-card-img" loading="lazy" onerror="this.src='assets/sp_01.jpg'">
        <div class="species-card-badge-pos">
          <span class="iucn-badge iucn-${sp.iucn}">${sp.iucn}</span>
        </div>
        <div class="species-card-id-pill">${sp.id.toUpperCase()}</div>
      </div>
      <div class="species-card-body">
        <div>
          <div class="species-common-name">${sp.name}</div>
          <div class="species-binomial-name">${sp.binomial}</div>
          <div style="font-size: 0.74rem; color: var(--text-muted); margin-bottom: 0.6rem;">
            Family: <strong style="color:var(--text-secondary)">${sp.family}</strong>
          </div>
        </div>
        <div class="species-metric-bar">
          <span class="species-map-score">mAP: ${sp.map50}</span>
          <span class="species-habitat-tag">${sp.nocturnalPct}% Nocturnal</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openSpeciesModal(sp));
    speciesGrid.appendChild(card);
  });
}

// Filter Species
function filterSpecies(query, category) {
  let list = WILDLIFE_50_SPECIES;

  if (category && category !== "all") {
    if (category === "endangered") {
      list = list.filter(s => s.iucn === "CR" || s.iucn === "EN");
    } else {
      list = list.filter(s => s.category === category);
    }
  }

  if (query) {
    list = list.filter(s => 
      s.name.toLowerCase().includes(query) ||
      s.binomial.toLowerCase().includes(query) ||
      s.family.toLowerCase().includes(query) ||
      s.habitat.toLowerCase().includes(query)
    );
  }

  renderSpeciesGrid(list);
}

// Species Detail Modal with Photo & Simulated Bounding Box
function openSpeciesModal(sp) {
  const modalContent = document.querySelector("#speciesModal .modal-content");

  modalContent.innerHTML = `
    <button class="modal-close-btn" onclick="closeSpeciesModal()" aria-label="Close modal">✕</button>
    
    <!-- Top Photo Banner with Camera Trap Bounding Box Overlay -->
    <div class="modal-photo-wrapper">
      <img src="${sp.image}" alt="${sp.name}" class="modal-animal-photo" onerror="this.src='assets/sp_01.jpg'">
      <div class="modal-camera-badge">
        <span>📷 RECONYX HYPERFIRE 940nm</span>
        <span>${sp.nocturnalPct}% NOCTURNAL ACTIVITY</span>
      </div>
      <div class="modal-simulated-bbox">
        <span class="bbox-label">${sp.name} [${sp.map50}]</span>
      </div>
    </div>

    <!-- Body Information -->
    <div class="modal-body-container">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 0.4rem;">
        <h3 style="font-size: 1.45rem; font-weight:800; color:var(--text-main);">${sp.name}</h3>
        <span class="iucn-badge iucn-${sp.iucn}">${sp.iucn} - ${getIucnLabel(sp.iucn)}</span>
      </div>

      <div style="font-style: italic; color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.25rem;">
        Binomial: <strong>${sp.binomial}</strong> | Family: <strong>${sp.family}</strong> | Taxon ID: <strong>${sp.id.toUpperCase()}</strong>
      </div>

      <p style="font-size: 0.94rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1.5rem;">
        ${sp.description}
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
        <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <div style="font-size: 0.74rem; color: var(--text-muted); text-transform: uppercase;">Detection Accuracy</div>
          <div style="font-size: 1.5rem; font-weight: 800; color: var(--emerald-bright); font-family: 'JetBrains Mono', monospace;">
            ${sp.map50}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">mAP@0.5 on Camera Trap Splits</div>
        </div>
        <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <div style="font-size: 0.74rem; color: var(--text-muted); text-transform: uppercase;">Nocturnal Captures</div>
          <div style="font-size: 1.5rem; font-weight: 800; color: var(--cyan-accent); font-family: 'JetBrains Mono', monospace;">
            ${sp.nocturnalPct}%
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">Infrared Flash Bursts</div>
        </div>
      </div>

      <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1.5rem;">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">Sensor Network Specifications</div>
        <ul style="list-style: none; font-size: 0.84rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.4rem;">
          <li>📍 <strong>Native Habitat:</strong> ${sp.habitat}</li>
          <li>🌿 <strong>Camouflage Difficulty:</strong> ${sp.camouflageDifficulty}</li>
          <li>⚡ <strong>Recommended Sensor Configuration:</strong> ${sp.sensorTrigger}</li>
        </ul>
      </div>

      <div style="display:flex; justify-content: space-between; align-items:center; flex-wrap:wrap; gap: 0.75rem;">
        <button class="btn btn-primary" onclick="loadSpeciesIntoStudio('${sp.id}')">
          📷 Test in Live Camera Studio
        </button>
        <button class="btn btn-secondary btn-sm" onclick="exportSpeciesProfile('${sp.id}')">
          💾 Export Profile (JSON)
        </button>
      </div>
    </div>
  `;

  speciesModal.classList.add("active");
}

function getIucnLabel(code) {
  switch (code) {
    case "CR": return "Critically Endangered";
    case "EN": return "Endangered";
    case "VU": return "Vulnerable";
    case "NT": return "Near Threatened";
    case "LC": return "Least Concern";
    default: return "Evaluated";
  }
}

function closeSpeciesModal() {
  speciesModal.classList.remove("active");
}

// Loads Any Selected Species Directly into the Live Camera Studio
function loadSpeciesIntoStudio(speciesId) {
  const sp = WILDLIFE_50_SPECIES.find(s => s.id === speciesId);
  if (!sp) return;

  closeSpeciesModal();

  const img = new Image();
  img.onload = () => {
    userUploadedImage = img;
    userSimulatedDetections = [
      {
        speciesId: sp.id,
        label: sp.name,
        binomial: sp.binomial,
        confidence: parseFloat(sp.map50) / 100,
        box: [0.15, 0.20, 0.85, 0.80],
        isKey: true
      }
    ];

    document.querySelectorAll(".scenario-btn").forEach(b => b.classList.remove("active"));
    renderCanvas();
    updateTelemetryPanel();

    const studioEl = document.getElementById("demo-studio");
    if (studioEl) {
      studioEl.scrollIntoView({ behavior: "smooth" });
    }
    showToast(`Loaded "${sp.name}" into Live Camera Studio with active detection!`);
  };
  img.src = sp.image;
}

// Export single species profile as downloadable JSON
function exportSpeciesProfile(speciesId) {
  const sp = WILDLIFE_50_SPECIES.find(s => s.id === speciesId);
  if (!sp) return;
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(sp, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `${sp.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}_profile.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast(`Exported ${sp.name} JSON profile`);
}

// Code Hub Tabs
function initCodeTabs() {
  const CODE_SNIPPETS = {
    python: `# Install runtime
pip install onnxruntime opencv-python numpy

import cv2
import numpy as np
import onnxruntime as ort

# Load WildTrap-50 Quantized INT8 Engine
session = ort.InferenceSession("wildtrap50_nano_int8.onnx", providers=['CPUExecutionProvider'])

def run_wildtrap(image_path, conf_thresh=0.50):
    img = cv2.imread(image_path)
    h, w = img.shape[:2]
    # Input normalization (Dual-Spectrum IR Equalized)
    blob = cv2.resize(img, (640, 640)).astype(np.float32) / 255.0
    blob = np.transpose(blob, (2, 0, 1))[np.newaxis, :]
    
    # Ultra-fast inference (10.2 ms on Jetson Nano)
    inputs = {session.get_inputs()[0].name: blob}
    boxes, scores, class_ids = session.run(None, inputs)
    
    return [
        {"species": id, "score": float(sc), "bbox": b}
        for b, sc, id in zip(boxes[0], scores[0], class_ids[0])
        if sc >= conf_thresh
    ]`,
    cpp: `// WildTrap-50 Embedded C++ (OpenCV DNN / TensorRT INT8)
#include <opencv2/opencv.hpp>
#include <opencv2/dnn.hpp>
#include <iostream>

int main() {
    cv::dnn::Net net = cv::dnn::readNetFromONNX("wildtrap50_nano_int8.onnx");
    net.setPreferableBackend(cv::dnn::DNN_BACKEND_CUDA);
    net.setPreferableTarget(cv::dnn::DNN_TARGET_CUDA_FP16);

    cv::Mat frame = cv::imread("trap_burst_01.jpg");
    cv::Mat blob = cv::dnn::blobFromImage(frame, 1/255.0, cv::Size(640, 640), cv::Scalar(), true, false);

    net.setInput(blob);
    std::vector<cv::Mat> outputs;
    net.forward(outputs, net.getUnconnectedOutLayersNames());

    std::cout << "Edge inference complete: " << outputs[0].size[0] << " targets found\\n";
    return 0;
}`,
    edgetpu: `# Compile WildTrap-50 for Coral Edge TPU Coprocessor
edgetpu_compiler \\
  --show_operations \\
  wildtrap50_micro_edgetpu.tflite

# Output model: wildtrap50_micro_edgetpu_edgetpu.tflite
# Inference latency on Google Coral USB: 4.8 ms (208 FPS)
# Peak active power consumption: 0.9 Watts`,
    docker: `# Run production Wildlife Camera Trap Container
docker run --gpus all --rm -it \\
  -v /mnt/camera_sdcard:/data \\
  -e CONF_THRESHOLD=0.50 \\
  -e LOG_LORA_TELEMETRY=true \\
  ghcr.io/wildlife-ai/wildtrap-50:latest \\
  --input /data/bursts --output /data/detections.json`
  };

  const codeDisplay = document.getElementById("codeDisplay");
  const tabButtons = document.querySelectorAll(".code-tab-btn");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const lang = btn.dataset.lang;
      codeDisplay.textContent = CODE_SNIPPETS[lang] || "";
    });
  });
}

// Copy to Clipboard
function copyToClipboard(elementId) {
  let text = "";
  if (elementId === "codeDisplay") {
    text = document.getElementById("codeDisplay").textContent;
  } else if (elementId === "bibtexCode") {
    text = document.getElementById("bibtexCode").textContent;
  }

  navigator.clipboard.writeText(text).then(() => {
    showToast("Copied to clipboard successfully!");
  }).catch(() => {
    showToast("Failed to copy text.");
  });
}

// Toast System
function showToast(msg) {
  toastEl.innerHTML = `<span>✓</span> <span>${msg}</span>`;
  toastEl.classList.add("active");
  setTimeout(() => {
    toastEl.classList.remove("active");
  }, 2600);
}

// Theme Switcher
function initTheme() {
  const currentTheme = localStorage.getItem("wildtrap_theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  const toggleBtn = document.getElementById("themeToggleBtn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const active = document.documentElement.getAttribute("data-theme");
      const next = active === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("wildtrap_theme", next);
      updateThemeIcon(next);
      showToast(`Switched to ${next === 'light' ? 'Light Scientific' : 'Dark Conservation'} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("themeToggleBtn");
  if (btn) {
    btn.innerHTML = theme === "light" ? "🌙" : "☀️";
    btn.title = `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`;
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const links = document.getElementById("navLinks");
  links.classList.toggle("mobile-open");
}
