import { Injectable } from '@angular/core';
import { Answer } from '../models/answer.interface';
import * as antsAnswers from '../../../bot-sources/ants-answers.json';

@Injectable()
export class AntsService {
  public answers;
  constructor() {
    this.answers = antsAnswers;
  }
  /* public answers: Array<Answer> = [
    {
      answer: [
        "A simpler question would be: where don't you get your protein from? All foods contain protein. In your supermarket, try finding food labels that show nil protein.",
        "You've asked the most common question fielded by vegetarians over the years. Promotion of meat protein has been very successful in establishing the beliefs that only protein gives energy and protein equals meat. Both are myths. We need protein, but not for energy, and ample protein is available from a multitude of sources besides meat. It's plentiful in wholemeal bread, beans, corn, lentils, peas, chick peas, oatmeal, broccoli, tofu and nuts.",
        "Vegetarians who excelled in demanding activities, achieving status that would be unlikely if protein were the only provider of energy and they were protein deficient, include six-times world ironman champion Dave Scott, running great Edwin Moses (undefeated in 122 consecutive races), Death Valley ultra-marathon champion Scott Jurek and first woman to walk to the north pole, Nicky Cole.",
        "Let's improve your question. Where do we find protein that both promotes health and reduces heart disease, cancer, food poisoning and other risk? The world's largest, most comprehensive study of nutrition found protein from animal sources, even at low intake levels, is associated with disease. The safe proteins, at all levels, are from plants.",
        "So instead of 'Where do you get your protein from?' can I please ask: Where do you get your cancer from? Where do you get your heart disease from? and Where do you get your diabetes from?"
      ],
      source: "But you kill ants",
      key: "Where do you get your protein from?"
    },
    {
      answer: [
        "Vegans generally get too much protein. The average American meat eater's intake is double the recommended protein, which means a lot of fat, increased cancer risk and urinary system stress. In Australia, more than half the adult population and nearly a third of children are overweight or obese. If vegans get less protein than the general population, that's good news.",
        "Obesity isn't just inconvenience. It robs you of seven to 13 years. A huge study of 900,000 people over 16 found obese men were 52 per cent and obese women 62 per cent more likely to die from cancer. Overweight is a 'significant trigger of arthritis.' Vegans weigh 15 per cent less than meat-eaters, fish-eaters and vegetarians; 'especially vegans [have] lower BMI [body mass index] than meat-eaters.'",
        "High protein diets contribute to progressive kidney damage and rob the body of calcium. Cornell University's study demonstrated 'the greatest single influence on ... heart disease, cancer and diabetes was the amount of animal fat and protein eaten.'",
        "If vegan protein deficiency still concerns you, most soy milks have 3-3.5g of protein per 100ml, compared with dairy milk at 3.3 (Coles' Farmland) and 4.8 (Dairy Farmers' Shape). Dried soy beans have 50 per cent more protein than your steak.",
        "The largest study reports vegans get 'plenty of protein.' Vegans Martina Navratilova (oldest tennis grand slam winner at a month short of her 50th birthday) and Lucy Stephens (24-hour triathlon world record) eliminate protein concern."
      ],
      source: "But you kill ants",
      key: "Vegans don't get enough protein."
    },
    {
      answer: [
        "What does 'natural' mean? When did you last enjoy 'the warm, tasty contents of a freshly slaughtered sheep ripped apart with your bare teeth? We don't eat any \"natural\" meat products. We cook them, spice them, put them on bread and in pies. Neither is there anything natural about drugs injected into animals to make them grow larger [and] produce eggs and milk more often.' In any case, a new anthropologist generation found our hominid ancestors to be originally vegetarian.",
        "Carnivores have sharp pointed front teeth and no flat back grinding teeth; herbivores have no sharp pointed front teeth and have flat back grinding teeth. A carnivore's intestinal tract is only three times its body length to allow decaying flesh to pass quickly; a herbivore's and our intestinal tracts are up to 12 times body length to allow vegetable nutrient absorption.",
        "There are other physiological differences between carnivores and herbivores where, again, we are copies of the latter:",
        "Carnivores\tHerbivores",
        "Make own vitamin C\tVitamin C: fruit,vegetables",
        "Perspire through tongues\tPerspire through skin",
        "Born with teeth\tBorn without teeth",
        "Move jaws vertically\tJaws have grinding motion",
        "Rip and swallow food\tChew food",
        "Suffer atherosclerosis\tSpared atherosclerosis",
        "Have dense tooth-bone to crunch bones of prey\tHave many times less dense tooth-bone",
        "The animals with which we are most closely aligned are chimpanzees and bonobos, whose diet is 95 per cent meat-free, and gorillas and orangutans, who are vegetarian. Even if they were carnivores, I'd still side with the herbivores as I don't want to cause suffering to any other creatures."
      ],
      source: "But you kill ants",
      key: "It's natural for humans to eat meat."
    },
    {
      answer: [
        "What do tennis stars eat between games: burgers or bananas? What precede marathon races: beef barbecues or pasta parties?",
        "Bananas offer quick energy for tennis players; pasta stores it for a marathon's demanding 42 kilometres. Both are excellent for carbohydrates, the best energy source, which meat lacks.",
        "Public knowledge lags behind modern nutrition. Runner's World's Hal Higdon, who ran six marathons in six weeks, said: 'My 1963 training diary is particularly frightening. The pre-race meal [included] a 6-ounce steak! ... Today, just about any runner knows that spaghetti is a better pre-marathon meal than, say, scrambled eggs or steak.' [emphasis his]",
        "The Australian Institute of Sport's list for pre-event meals omitted meat. And it added 'a well-chosen vegetarian diet contains adequate energy and protein, is high in carbohydrate and low in fat - making it ideal for athletes striving to meet the dietary guidelines encouraged for sport.'",
        "Further, Brussels University found vegetarians performed endurance tests two to three times longer than meat-eaters and took one fifth the time of meat-eaters to recover.",
        "These top athletes didn't need meat for strength and energy:",
        "Percy Cerutty, runner of four marathons in 24 hours",
        "Cliff Young, winner of a 1000km ultra-marathon at age 61",
        "Dave Scott, world's greatest triathlete",
        "Alan Jones, 17,003 consecutive pushups record holder",
        "Andreas Cahling, body-building champion",
        "Sixto Linares, 24-hour triathlon world record holder",
        "Chris Campbell, world and Olympic champion wrestler",
        "Scott Jurek, twice Death Valley ultra-marathon champion",
        "Tim McCartney-Snape, the only person to climb Mt Everest from sea to summit, and this was without oxygen.",
        "The world's strongest creatures, elephants, are vegetarian. Most dinosaurs were. Buffalos, bulls, gorillas, hippos, horses, oxen and rhinos don't need meat for their enormous strength."
      ],
      source: "But you kill ants",
      key: "You have to eat meat for strength and energy."
    },
    {
      answer: [
        "The Australian Consumers' Association reported 'liver, oysters and mussels are the best sources of iron, followed by beef and lamb, pork and chicken. Soy beans, green veggies, eggs and almonds are also quite high in iron but it's not absorbed as well. Vegetarians should choose from a variety of legumes (beans and pulses), green vegetables, nuts and seeds to get their iron. Wholegrain and wholemeal cereals are good sources of iron and zinc.' You can check the labels of your favourite breakfast cereals, as many are vitamin fortified. Iron is best absorbed when combined with a vitamin C source such as orange juice.",
        "Is meat the best overall for iron? If your iron intake is a little better from meat but worse in other areas, such as cancer and heart attack risk, is it worth the increased threat to you and the suffering and death of animals?",
        "The ACA article, on 'healthy eating guidelines', advised 'plenty of fruit and veggies'. When it recommended meat in the diet it added 'or alternatives', such as legumes and nuts.",
        "Per kilojoule, broccoli, lentils and soy beans have three times as much iron as meat. A concern with meat is excess iron, not just deficiency. 'Iron overload promotes fatigue, arthritis, weakness, impotence, diabetes, shortness of breath, loss of menstrual periods and neurological problems. It can also contribute to heart attacks ... No matter how many iron-rich vegetables you eat, your body handles it easily, absorbing only what is needed.'",
        "The American Dietetic Association confirms vegetarians don't have a higher incidence of iron deficiency than non-vegetarians.",
        "Yes, meat is a source of iron, but also of illness with its muck, pus, urine and blood."
      ],
      source: "But you kill ants",
      key: "Meat is the best source of iron."
    },
    {
      answer: [
        "The National Geographic reported the world's three longest-lived tribes were 'vegetarian centenarians'. Tibet's Hunzas are well known; the others are the Caucasus Azerbaijanis and the Villcabamba of Ecuador. The world's oldest person in 2004, Hamida Musulmani, still working on her farm at 126, said she 'stopped eating meat many years ago'. The Guinness World Records' oldest in 2006 was China's 120-year-old Du Pinhua, vegetarian all her life. So were the oldest in 2008, Portugal's Maria de Jesus, and 1998, Canada's Marie-Louise Meilleur. Vegetarian Fauja Singh set the world marathon record for age 100+ in 2011.",
        "Was it not just abstaining from meat that so benefited these long-lived people? Maybe there were other factors, such as pure air and life free of city pressures? Shouldn't we ensure variables are eliminated before drawing conclusions?",
        "We should, we can and we will, but first, let's note irrespective of whatever else was going for them, they showed how well and how long you can live without meat.",
        "Studies removing variables favour meat-free diets. One of meat-eating Mormons and vegetarian Adventists showed the latter lived seven more years. Both avoid alcohol, tobacco, tea and coffee. The only difference that could affect physical and psychological well-being is Mormons eat meat. Five large U.S., England and German studies showed vegetarians have 25 per cent lower risk of dying from heart disease.",
        "Regarding your anaemia concern, this can result from an iron deficiency, but there's no need for vegetarians to lack iron if they consume soy beans, green vegetables, nuts and cereals."
      ],
      source: "But you kill ants",
      key:
        "You might be able to go without meat for a while, but if you don't start eating properly again you'll get anaemic and won't live very long."
    },
    {
      answer: [
        "What your grandmother proved is it's possible to eat meat every day and live to 98. She didn't prove meat is good for you, just as the death of a young meat-eater doesn't prove meat is bad for you. You can also find someone who's lived to 98 and smoked every day. Centenarians, or near-centenarians, in India (including a prime minister), used to drink their urine every day. None of those proves eating meat, smoking, or drinking urine is conducive to good health.",
        "Exceptions don't prove rules; most rules have exceptions. We need large samples before making conclusions. Large samples of meat-eaters and smokers show both practices are injurious to health. Whilst there's no guarantee either way, your chances of good health and longevity are improved, and improved significantly, by refraining from both.",
        "I'm unaware of any study of the benefits of drinking urine, and am not motivated to commence one.",
        "While we're discussing one body waste matter, we can analyse what comes out the other side. An American study in 1996 concluded '78.6 per cent of the ground beef contained microbes that are spread primarily by fecal material ... [There is] a simple explanation for why eating a hamburger can now make you seriously ill: there is shit in the meat.'",
        "Grandma was spared what's now in meat. Although feeding of dead cats and dogs to American cattle was stopped in 1997, dead pigs, horses and poultry are rendered into cattle feed. Not only are cattle fed dead poultry, but poultry are fed dead cattle. United States cattle eat about 1.3 million kilograms of chicken manure a year. The cattle also dine on sawdust and old newspapers. If you relish reading more about what Grandma missed out on, there's plenty to satisfy you."
      ],
      source: "But you kill ants",
      key:
        "My grandmother lived to 98. She ate meat every day all her life. That proves meat is good for you."
    },
    {
      answer: [
        "Some elderly vegetarians do, just as some young vegetarians do. And some elderly non-vegetarians develop deficiencies. We can simplify all that to saying some people don't follow an adequate diet. An adequate diet has a large variety of foods with all essential vitamins.",
        "Deficiencies in iodine and vitamins D and B12 are more common in elderly people. Vitamin tablets are one solution, but seniors sometimes over-compensate and are then worse off. Vegans as well as other vegetarians have adequate sources for iodine and vitamins D and B12:",
        "Iodine",
        "Only trace amounts of iodine are required (150 micrograms daily for adults), but it may be found in iodised salt, kelp, some breads and plants grown in soil rich with iodine.",
        "Vitamin D",
        "Vitamin D is absorbed from the sun. Just 15 minutes in mid-day sun might be sufficient for you. Vitashine D3 spray is vegan; most D3 capsules are vegetarian but none vegan. Some D2 tablets such as Deva are vegan. Your health professional can check your status.",
        "Vitamin B12",
        "Besides vitamin tablets, vegan sources for B12 include fortified soy milk and meat analogues.",
        "Cliff Young had been vegetarian for decades when he won the inaugural Sydney to Melbourne ultra-marathon at 61. Whole tribes have shown they can be healthy into their 90s and past their century as vegetarians.",
        "Rather than being disadvantaged, vegetarian seniors have a lower death rate and use less medication than meat-eating seniors. Most importantly, the later years of vegetarians and especially vegans are less likely to have bone weaknesses, heart defects, dementia, kidney failure and poor eyesight."
      ],
      source: "But you kill ants",
      key: "Elderly people develop deficiencies on a vegetarian diet."
    },
    {
      answer: [
        "Concerns about a vegan diet, as opposed to a lacto-vegetarian diet, centre on its absence of dairy products.",
        "The consumer magazine Choice used to recommend full-cream milk for children up to age five. Later, 'due to the increasing number of obese children, but also to research showing that a diet high in saturated fat, even early in life, can lead to heart disease' it was reduced to apply only to age two.",
        "Now research suggests milk shouldn't be consumed by those under two years of age either. This follows the trend away from dairy milk over the last decades. Fifty years ago it was promoted as essential and given free to schoolchildren. Since then, both dairy and meat have suffered demotion on the food pyramid. That's no surprise, as vegans star disproportionately in extreme sports. Brendan Brazier twice won Canada's ultra-marathon in record time. Dave Scott was world triathlon champion six times. Richard Roll, one of the world's 25 fittest, did five triathlons in a week. After six years as a vegan, Scott Jurek twice won the world's toughest endurance race (Death Valley's 215 kilometres in temperatures above 50 degrees), is seven consecutive times winner of the Western States 160-kilometre run of steep climbs, snow, rivers and desert and 'the top ultra-runner ? maybe in the world, arguably of all time'.",
        "Studies of large numbers of people over long periods have shown that rather than eat more meat and drink more milk, the less you consume of both the healthier you're likely to be. You can still find a test result that 'casts doubt' about a vegan diet. But the likelihood of a favourable verdict is proportional to the number, size, length and recency of the studies you check. These offer assurance, rather than doubt, for vegans."
      ],
      source: "But you kill ants",
      key: "Tests cast doubt about the benefits of a vegan diet."
    },
    {
      answer: [
        "Don't believe one favouring vegetarians. Believe thousands.",
        "A panel of experts examined diet and cancer for the World Cancer Research Fund and the American Institute of Cancer Research, basing its findings on 4500 scientific studies. The most consistently protective dietary components appeared to be vegetables, fruits, fibre, whole grains, carotenoids in food and vitamin C in food. The most consistently harmful dietary components appeared to be alcohol, meat, saturated fat, grilling or barbecuing and dairy products. The American Journal of Clinical Nutrition reported on a seven-year study of over 4000 British vegetarians, finding a 60 per cent reduction in heart disease. A 27,000 person study found that eliminating animal products reduced cataract risk by 40 per cent.",
        "Almost all advice regarding diet recommends less meat. Such recommendation carries considerable weight when derived from results of extensive testing and emanating from highly regarded organisations. The British Medical Association said 'vegetarians have lower rates of obesity, coronary heart disease, high blood pressure, large bowel disorders, cancers and gall stones.' To these, the World Health Organisation added diabetes, strokes, osteoporosis and kidney failure.",
        "The most comprehensive large study of nutrition ever conducted, described by The New York Times as the 'Grand Prix of epidemiology', concludes we shouldn't consume meat or dairy products.",
        "Let me put the subject the other way: how often do we see dietary advice to eat more meat? We're consistently told by nutritionists, whether vegetarian or not, to have less meat and dairy and more fruit and vegetables."
      ],
      source: "But you kill ants",
      key:
        "You say to be cautious about a test result favouring meat or milk. Then why should I believe one favouring vegetarians?"
    },
    {
      answer: [
        "Let's look at how and why your categories haven't told us.",
        "Doctors",
        "Do you visit your doctor when healthy or sick? Rather than advising you on nutrition when you're healthy, your doctor's role is prescribing when you're not. The China Study has a comment from a medical researcher who knew we should eat no animal products, but believed people wouldn't accept eliminating them. He said: 'So we don't tell them.'",
        "Government",
        "If government publicised such a finding, many jobs (i.e. votes) in the meat and dairy industries could be lost.",
        "Media",
        "Easy options are open to those affected to discredit findings:",
        "1. Major on minors",
        "Detail any negative aspect. You can always find something, no matter how trivial. And although 99 per cent of the population might benefit, publicise the 1 per cent that doesn't.",
        "2. Use terms that can be claimed to apply to almost anything:",
        "It has 'personal opinions', 'extreme views', factual errors'.",
        "3. Use the Yes Minister method",
        "'Release a statement, Bernard, saying the findings have been questioned.' 'But they haven't been, Sir Humphrey.' 'Well, question them Bernard, then they have been.'",
        "Yale University's Kelly Brownell says tactics used to stifle diet information mirror what tobacco giants used as they fought regulation. They dismiss as 'junk science' peer-reviewed studies showing product and disease links; pay scientists for pro-industry studies; sow doubt about the harm their products cause; market to children and adolescents; roll out supposedly 'safer' products and vow to regulate their industries; deny addictive nature of their products; and lobby with massive resources to thwart regulatory action."
      ],
      source: "But you kill ants",
      key:
        "If there were any proof animal products aren't healthy, doctors, the government and the media would tell us. They haven't, so there isn't."
    },
    {
      answer: [
        "With most items that we put into our bodies, we consider if they're harmful in moderate amounts, they're harmful in small amounts.",
        "You accept you should reduce your meat intake to lessen chances of major health problems. Why shouldn't eliminating it lessen those chances further? Do you believe smoking cigarettes is sensible if you restrict them to a few a day? Do you hold it's sensible to use whatever illegal drugs are in, as long as you limit your indulgence? Are small intakes of trans fats fine? Or isn't it logical if something is harmful in medium quantities, it might be harmful in any quantity?",
        "Investigation confirms that logic. Not only are animal foods strongly linked to degenerative diseases, including breast cancer, but significantly so 'at unusually low intakes'. Eliminating meat, indeed all animal products, had an extraordinary result for Olympic rowing gold medalist and American Association of Endocrine Surgeons President Dr Calwell Esselstyn, Jr, who says that 'moderation kills'. His 18 trial patients, with a history of 49 heart incidents, had only one case in the next 11 years on a vegan diet, and that was from a non-conformer.",
        "A reason you so rarely see advice to eat no meat is that health authorities consider such advice impracticable, so patients wouldn't follow it. They should consider how practicable chemotherapy, heart surgery, cataract removal, dialysis and insulin are. Harvard Medical School's Dr Dean Ornish, whose no-meat patients had a 91 per cent chest pain reduction compared with a 165 per cent rise for those on a standard low meat treatment plan, said: 'The point of our study was to determine what is true, not what is practicable.'"
      ],
      source: "But you kill ants",
      key:
        "We're told not to eat too much meat. Eating it in sensible small amounts doesn't harm us."
    },
    {
      answer: [
        "We want to make life more pleasant (or less unpleasant) for you and for animals. We want you to be healthy and we want animals to be spared the unimaginable suffering they endure to satisfy our taste preferences. Instead of telling you what to do and eat, we are telling you what you're doing and eating.",
        "When we suggest you follow a vegetarian lifestyle, we've nothing to gain personally if you follow that advice. Yet as not only you, but also the animals, fish and birds you would've eaten, and the environment generally, have so much to gain, it follows your dietary choices aren't just your concern."
      ],
      source: "But you kill ants",
      key:
        "You should've been cops - vegetarians always want to tell everyone what to do and eat. Don't tell me what to do and eat."
    },
    {
      answer: [
        "Advertising has convinced many that meat is the only source of protein and dairy milk likewise for calcium. But note cows get the calcium from plants and that countries with the lowest dairy consumption have the lowest osteoporosis level.",
        "The main milk substitute in Australia is So Good soy milk, with 120mg of calcium per 100ml (So Good Essential has 150mg). So Natural and some Vitasoy varieties also have 120mg. For comparison, the calcium content of Coles' Farmland milk is 114mg per 100ml and Dairy Farmers' Shape 163mg. About 800mg of calcium per day is recommended, so you need less than 700ml to avoid deficiency.",
        "The strongest and tallest animals, elephants and giraffes, whose bones show no deficiency, derive their calcium entirely and directly from plants; so do mountain gorillas, our largest primate cousins, and so can you. Vegans get more than enough calcium from a similar quantity of soy milk as others do from dairy milk. Yet it's also derived from tofu, almond and brazil nuts, carob, dried fruit, cereals, sesame and sunflower seeds, parsley, broccoli, carrots, cauliflower and rhubarb. The claim you can only get calcium from milk is a myth.",
        "Having explained how vegans get their calcium, let's look at how they keep it. The key to bone strength isn't maximising calcium intake but minimising calcium loss. Excess protein, especially animal protein, reduces calcium retention. But if you get your protein from plant sources, the body has more calcium to use even with a lower intake. Vegans also tend to consume less salt, another offender in calcium loss.",
        "The belief we must drink milk for calcium is excusable, as dairy producers advertise more than broccoli producers."
      ],
      source: "But you kill ants",
      key: "How do you get your calcium?"
    },
    {
      answer: [
        "Tests have proved calcium, found in milk, is essential for strong bones. Tests have also proved milk contributes to obesity, heart disease and cancer.",
        "The late Dr Benjamin Spock, America's leading authority on child care, warned, in the last edition of his best-seller book, against feeding cow's milk to children. He said it can 'cause anaemia, allergies and insulin-dependent diabetes and, in the long term, will set kids up for obesity and heart disease.'",
        "To avoid breast or prostate cancer, Professor Jane Plant, best-seller scientist, says: 'Don't have any dairy products in any form.' Other studies show links to Parkinson's and dementia.",
        "Those with allergies to milk, and there are many of them, aren't healthier when they drink it. Milk can cause hay fever, asthma, bronchitis, pneumonia, sinus infections and eczema.",
        "A Loma Linda University study found Californian Seventh-day Adventist men who drank soy milk more than once a day had a 70 per cent reduction in prostate cancer.",
        "Should we still drink dairy milk for the calcium benefit? Not according to a massive study of 75,000 women for 12 years, which found extra milk consumption doesn't reduce, but rather increases, fracture risk. A 2006 review of 200 scientific studies found dairy closely linked to the above, plus acne, asthma, arthritis, kidney disease and weak bones.",
        "Tests haven't proved drinking milk improves health or that it's essential for strong bones. It's calcium that is essential. Choose other sources to avoid the negatives."
      ],
      source: "But you kill ants",
      key:
        "Tests have proved people who drink milk are healthier than those who don't."
    },
    {
      answer: [
        "A Sydney newspaper ran a front-page headline 'Soy Cancer Warning'. The sub-heading was 'Doctors find link to breast and prostate tumours.' That would suffice for rejection of soy for life for thousands who saw the large print but didn't read the article. They missed two significant qualifications.",
        "Firstly, the statement referred solely to those who were already cancer patients, warning soy could react with and minimise drug effect. Secondly, it noted the problem wasn't normal, but high, soy intake. These qualifications were in the second paragraph, but in print one-tenth the size.",
        "A pediatrics professor said the evidence of soy causing tumours involved rats injected with phytoestrogens rather than humans eating soy' and 'there is not a shred of evidence to show that eating soy causes cancer.' Since then, large American studies found women with breast cancer consuming soy products have a 254 or 325 per cent lower risk of return and 29 per cent lower of death, compared with women who consume little or none. Canadian research determined 'high dietary intake of soy isoflavones was associated with lower risk of recurrence among postmenopausal patients with breast cancer.' The world's largest study warned the risk is the dairy milk that you 'stick to'. It 'promoted all stages of the cancer process ? The safe proteins were from plants.' Many other studies have shown soy reduces prostate and breast cancer risk. If you're still concerned, you have rice and oat milks as substitutes."
      ],
      source: "But you kill ants",
      key: "Soy causes cancer, so I stick to dairy milk."
    },
    {
      answer: [
        "You need to stop eating fish to stay healthy. 'Fish is not a boon for good health as consumers are often led to believe,' according to Amy Lanou, assistant professor of health at the University of North Carolina. 'Fish has a questionable role in heart-disease prevention and contains surprisingly high levels of mercury and other toxins, as well as fat and cholesterol, making it a poor dietary choice.' A British study of more than 3000 men with stable angina found 'those given high amounts of oily fish were at a higher risk of heart attack and recorded an increased number of cardiac deaths.' Men with higher levels of DHA, one of the omega-3 fatty acids found in fish oil, are at increased risk of developing prostate cancer. The American Journal of Clinical Nutrition reported the omega-3 in vegetables, fruit and beans is more stable.",
        "Omega-3 from plant sources instead of fish or fish-oil capsules removes negatives, just as protein from plants rather than meat does.",
        "Mercury is a major concern, including increasing risk of Parkinson's disease. A TV study found mercury levels in Australian fish 'astonishing'. It's not only injurious to adults but also risks danger to unborn children. A former NSW chief food inspector told the program the 'US Federation of Public Health has said that mercury is responsible for up to 60,000 neurological defects in babies in the United States.'",
        "Non-fish omega-3 sources include broccoli, walnuts, So Good Essential soy milk and flaxseed and hempseed oils."
      ],
      source: "But you kill ants",
      key: "You need to eat fish regularly to stay healthy."
    },
    {
      answer: [
        "Non-vegan babies have died from malnutrition too.",
        "Vegan babies die of various causes, one of which is malnutrition. Vegan and non-vegan parents need qualified health practitioner advice to ensure baby's good health. When any baby's (but also any older child's or adult's) food intake is inadequate (or excessive), there's a health risk.",
        "The world's largest association of nutritional professionals, the American Dietetic Association, says a vegan diet is appropriate for infants. In the last edition of his famous book, child-care expert Dr Benjamin Spock wrote: 'I no longer recommend dairy products,' adding that 'mother's milk is better than cow's.' The former director of pediatrics at John Hopkins University agrees: 'There's no reason to drink cow's milk at any time in your life. It was designed for calves, not humans, and we should all stop drinking it today.' The American Academy of Pediatrics says human milk is uniquely superior and details advantages of breast-feeding over cow's milk.",
        "Dietician and nutritionist Amanda Benham recommends:",
        "Breastfeed if possible (the only safe alternative to breast-feeding is commercial infant formula).",
        "Ensure adequate daily vitamin B12 when breastfeeding, as breastfed babies rely on its presence in their mother's diet.",
        "Ensure plentiful intake of calcium, iron, zinc, vitamin A.",
        "Optimise fatty acid with flaxseed, olive and canola oils.",
        "We appreciate your interest in the welfare of vegan babies, but aren't you also interested in your child's increased risk of cancer, osteoporosis, diabetes, cholesterol and heart problems in later life from consumption of meat and dairy?"
      ],
      source: "But you kill ants",
      key: "Vegan babies have died from malnutrition."
    },
    {
      answer: [
        "Some who haven't fared too badly 'for long' as vegans are Carl Lewis, Bryan Adams, Greg Chappell, Scott Jurek and Martina Navralitova.",
        "Peace Pilgrim walked across the United States eight times.",
        "Ruth Heidrich had cancer in 1982 at age 47. Both breasts were removed. At that time she decided to go vegan. Thirty years later, how's she coping physically?",
        "Winner of hundreds of demanding races",
        "Named one of North America's Top 10 Fittest Women",
        "Six times age winner of the Hawaii triathlon, the world's hardest (4km swim, 180km cycle, 42km run)",
        "You mightn't stay healthy for long if you're a vegan (or a meat-eater) who follows an unhealthy diet. Being a vegan of itself doesn't make you healthy or unhealthy. As well as avoiding harmful products, such as meat and milk, you also need to consume the healthy ones. This means ensuring all essential vitamins are covered. If you do this, not only can you 'stay healthy for long if you're a vegan', but, to put it more accurately, you will most likely stay healthier and for longer.",
        "The benefits of a vegan diet aren't recent discoveries. It was well-known in ancient Greece that Olympic athletes performed best when they ate plant-based diets. A vegan diet not only helps during the competitive years but also later in reduced risk of cancer, diabetes, heart disease, high blood pressure, dementia, gall and kidney stones and multiple sclerosis. The world's most comprehensive survey ever of the connection between diet and disease found we should adopt a plant-based diet to avoid 80 per cent of cancers, cardiovascular diseases and other forms of degenerative illnesses."
      ],
      source: "But you kill ants",
      key: "You can't stay healthy for long if you're a vegan."
    },
    {
      answer: [
        "Vitamin B12 is plentiful in meat and dairy products. It can also be found in kelp, beer and rotting garbage and, as a result of bacteria, in minute portions in some land vegetables. Of these, only meat and dairy provide useful B12, so vegans must obtain it from other foods or vitamin supplements.",
        "A common source is soy milk. Lines fortified with B12 include the larger-selling varieties of Sanitarium's So Good. So are some meat substitutes and cereals. Check their labels to see how much they contain.",
        "There are two very favourable factors for vegans regarding B12: the body requires less of this vitamin than others and it's kind in storing it for us.",
        "In spite of that, to be safe, it's important to ensure regular B12 intake. Nutritionists' suggestions vary, but two to five micrograms spread over the day (it's best absorbed in small amounts) should be fine. The body uses what it needs; higher intake is considered harmless. Have B12 levels checked by your doctor or health practitioner because a B12 deficiency can have serious consequences, including neurological damage which may be irreversible. It's more important still during pregnancy to follow these precautions in the interests of the baby's health.",
        "Symptoms of B12 deficiency are 'numbness and tingling in the hands and legs, inability to maintain balance when walking, weakness and excessive fatigue, loss of vision and position sense, irregular menstrual cycles and a range of psychological disorders.'"
      ],
      source: "But you kill ants",
      key:
        "Vegans are sickly because the essential vitamin B12 only comes from animals."
    },
    {
      answer: [
        "I've seen a very unhealthy meat-eater.",
        "We can be unhealthy from causes other than diet. Some are accidents, heredity, smoking, excessive alcohol, radiation, disease transmission, mosquito bites, chemicals, too much sun and pollution. Vegans are vulnerable to these like anyone else. So, too, with diet-related causes, examples of which are over-eating with under-exercising, lack of or excessive vitamins, excessive processed food and insufficient variety.",
        "Whilst vegans are usually health-conscious, most choose their philosophy for other than health reasons. Those who are vegan solely because of animal-cruelty concerns could have less interest in their health than the general population has. They might smoke, not exercise, drink excessively, use drugs and overeat. They would likely be unhealthy, just as we would not be surprised if meat-eaters with those habits had less than radiant health. Even without such practices, people learning of animal cruelty may change immediately without being aware of nutrition needs (B12 and iodine supplements and a wide variety of fruit, vegetables and legumes). Deteriorating health is then not the fault of following an adequate vegan diet but the fault of not following it. The variety rule applies to vegetarians generally, not just vegans. As a meat-eating author states, 'vegetarians who fail to remain healthy fail through lack of knowledge rather than vegetarianism.'",
        "Whether a diet is beneficial isn't determined by surveying one person or a few people, but by a large number. We know how injurious tobacco smoking is, but we can find a heavy smoker in excellent health and a lifelong non-smoker in poor health. Rules love to have exceptions.",
        "Extensive studies show the chances of improving and maintaining your health are enhanced by avoiding meat and dairy. Or, as a newspaper's Health and Science section concluded, 'a vegan lifestyle is proved to be the healthiest.'"
      ],
      source: "But you kill ants",
      key: "I've seen a very unhealthy vegan."
    },
    {
      answer: [
        "Animals have similar physiology to humans as far as sensing pain is concerned. They have brains and nervous systems. They show the same desires to avoid being hurt as we do by learning to shun certain situations.",
        "'Many of their senses are far more acute than ours - visual acuity in certain birds, hearing in most wild animals, and touch in others; these animals depend more than we do today on the sharpest possible awareness of a hostile environment. Apart from the complexity of the cerebral cortex (which does not directly receive pain anyway) their nervous systems are almost identical to ours and reactions to pain remarkably similar.'",
        "People are appalled by cruelty to a dog. Why be concerned if animals can't feel pain? Or is it that concern is just for cuddly animals who become loved companions? Would you care if your dogs were caged in stalls so tiny they couldn't turn? Pigs are just as sentient and that's typical of how they spend their lives in Australia until 2013. Those who don't live with us don't receive sympathy. Thus killing and eating of dogs attracts strong disapproval from countries where this isn't part of the cuisine, but no incongruity is seen in killing peaceful cattle for a particular taste in food.",
        "Not only is there physical suffering but also emotional suffering, the ultimate of which, as we know, is the loss of a loved one. In the animal world, cows show their emotional pain by calling for their calves for days after the calves have been removed for slaughter or to facilitate milk production. Unfortunately consideration isn't given to them.",
        "Whilst most of us believe that animals suffer, the extent of suffering isn't realised because it occurs out of sight. Few of us are confronted with animal factory cruelty."
      ],
      source: "But you kill ants",
      key: "Animals don't feel pain."
    },
    {
      answer: [
        "Observation of a caught fish suggests it isn't happy with its new situation. Whether in pain or desperately trying to escape, it's suffering to satisfy human sport or taste preferences.",
        "Studies provide evidence fish do feel pain. Scientists from the Universities of Edinburgh and Liverpool placed bee venom on fish's lips. 'The pattern of the electrical recordings was typical of those from pain receptors in humans, strongly suggesting that the lips of fish also contain pain receptors ... the neurons show[ing] a similar firing pattern to that in the human nervous system when transmitting a pain signal.'",
        "By recommending that in fish experiments 'humane restraint, analgesia and anaesthetic should be adopted,' experimenters agree that fish feel pain. 'Fish use their tongues and lips like hands ... making sport fishing both debilitating and cruel ... Out of water the fish suffocates, rather like we drown when in water ... The peripheral nervous system of fish is very similar to that of humans. All have receptor cells near the skin. The lips and mouths of fish are particularly well supplied with such receptor cells. When a hook pierces the mouth, a fish feels both pain and fear, which is especially intense if the fish is \"played\" with on the line. Fish produce the same pain-blocking substances as humans.'",
        "The above is why fishing has been described as 'a cruel and destructive way of wasting a day while taking a life.'",
        "Psychology professor Steven Siviy asks: 'If you believe in evolution by natural selection, how can you believe feelings suddenly appeared, out of the blue, with human beings?'5",
        "If you're still not sure about pain, note that drift nets kill tens of thousands of dolphins, whales and albatrosses annually."
      ],
      source: "But you kill ants",
      key: "Fish certainly don't feel pain."
    },
    {
      answer: [
        "Do you believe vegetables feel pain? If neither of us does, there isn't much point in an animated discussion of it. But if you're concerned about this possibility, what is the evidence?",
        "A nervous system and a brain enable feeling of pain. These are possessed by humans and animals, not plants.",
        "Probably the closest that scientists have been to findings of pain in plants is sound waves produced by ethylene gas, emitted by plants when they 'suffer' mildew, for example. Such waves have been detected by researchers at the Institute for Applied Physics at Germany's Bonn University.",
        "Let's assume plants (vegetables, fruit, nuts, etc.) do feel pain. How can we avoid that? Without plants we could only survive by eating animals, birds or fish, which doesn't solve the pain problem, but magnifies it. What we can do is minimise pain. Observing reactions, and their severity, shows animals suffer far more severely than plants and are more aware of suffering. The vast majority of grains raised today are used as cattle feed. Cows must consume more than 10 kilograms of vegetation to convert it into one kilogram of flesh. By eating plants directly, rather than eating animals, we save many more plants' lives, freeing those plants from whatever pain they feel and, as a bonus, destroy less land.",
        "Your concern highlights the incongruity of defending veganism. We have to counter simultaneously these claims:",
        "It's morally acceptable for animals to be killed and eaten because they don't feel pain",
        "It's morally unacceptable to eat carrots because they do feel pain."
      ],
      source: "But you kill ants",
      key:
        "I've heard it's been shown vegetables feel pain, so vegetarians cause suffering too."
    },
    {
      answer: [
        "Who are 'they'? Your use of that vague term suggests you're not familiar with animal factories and the laws, or rather lack of laws, pertaining to them. Don't believe what I'm saying or anyone else says. Do your own internet search for answers to whether 'they' allow 'cruel treatment' regarding your food sources:",
        "Are calves removed from their mothers soon after birth?",
        "Can sows still be confined for months in metal crates where they can barely move?",
        "Are battery cages still allowed for confining hens?",
        "Does 'free range' include severely-crowded sheds where most hens find it difficult or impossible to access outside?",
        "Are 'free range' as well as battery hens' beaks cut off without anesthetic because of overcrowding?",
        "Are cows, pigs and chickens killed, the ultimate cruelty, at a small fraction of their natural lives?",
        "Do animal cruelty laws apply to companion animals such as cats and dogs but not to those raised to be eaten?",
        "Many more questions could be offered, but we can keep it short and still determine whether 'they wouldn't allow it now'.",
        "Forgoing half an hour of your time to check answers to these questions is surely not much to ask compared with lifetimes of misery for millions of animals. While doing so, keep in mind image promotion. A large supplier to KFC said on its website in 2011 that its hens weren't confined in cages and were free to roam in large sheds. It was investigated for false advertising as birds squeezed in barns certainly can't 'roam'.",
        "If you decline to check, should we deduce that torture of sentient beings is of no concern to you and that you're content to be a contributor towards it?"
      ],
      source: "But you kill ants",
      key:
        "Cruel treatment of cows, pigs and hens is all in the past. They wouldn't allow it now."
    },
    {
      answer: [
        "If it's so awful for you just looking at pictures of what's done to animals, what must it be for them enduring it?",
        "Animal welfare magazines use pictures of animal suffering because it's the most graphic way of revealing its extent and nature. Fewer people will grasp from a verbal description what animals endure, inadequate as such descriptions must be concerning something you rightly refer to as 'horrifying'.",
        "Our magazines would be more appealling if they carried the traditional pretty pictures of smiling pigs and contented cows having a wonderful life out in the paddocks, but that fiction side of modern mass-production of meat and milk is well catered for already. Meat industries, though, appear none too keen to disseminate pictures of confinement or of abattoirs.",
        "Let's come back to your statement, and ask: if you can't look at pictures of what's done to animals, how would you cope if it were done to you? How would you endure lifelong boredom of no means of activity or entertainment? Would you care if your offspring were removed from you, for execution, shortly after birth? If you're one of those whose execution wasn't perfect, would you mind being skinned or boiled alive? Or what if all the above were done to your companion dog or cat?",
        "Then please don't be a party to the torture and killing of other feeling, thinking, intelligent beings."
      ],
      source: "But you kill ants",
      key:
        "You put horrifying pictures of animals in your magazine. I can't look at pictures of animals suffering."
    },
    {
      answer: [
        "Does breeding 'for a purpose' make that purpose acceptable? Especially when the purpose is unnecessary?",
        "Minks are bred for fur coats, which require their death. 'Fur farmers use the cheapest and cruelest killing methods available including suffocation, gassing and poisoning. Many animals are electrocuted by having rods inserted into their rectums and 240 volts sent through their bodies. The animals convulse, shake and often cry out before they have heart attacks and die. Crude killing methods aren't always effective, and sometimes animals \"wake up\" while they are being skinned.' We've plenty of synthetic fur substitutes to satisfy both warmth and fashion, so why wouldn't we spare them that horror?",
        "Billions of other animals are bred for food, experimentation or sport.",
        "Being bred for a purpose and denied roaming in the wild don't mean that animals lack a craving for freedom. Factory-bred animals and birds are usually confined in cages that give very little room to move. They lead a miserable existence. Given a choice, they'll quickly forsake the known breeding area for unknown freedom where they can pursue their instinctive physical desires.",
        "Was (and still in some areas, is) 'breeding' slaves 'for that purpose' acceptable to you? If not, why not?",
        "Breeding for a purpose doesn't release the victim from pain or us from moral obligation."
      ],
      source: "But you kill ants",
      key: "Minks are bred for that purpose."
    },
    {
      answer: [
        "Creatures imprisoned from birth have the instinctive behaviours of wanting to stretch, walk, run, roam, climb, fly or whatever is natural for their species. They want to avoid pain, frustration and boredom just the same as their non-captive relatives.",
        "If we are in any doubt, we can perform our own easy experiments. Open the cage door for a bird that has never known freedom and see what happens. Try the equivalent for any other bird or animal that has spent a whole life in confinement. But we know the experiment results already.",
        "Why would we expect any other outcome? If we'd been confined to a hospital bed or room for our first few years wouldn't we want to leave it? Does never having been outside our state or country or inside a plane mean we've no desire to travel? Don't those blind or deaf from birth wish for sight and hearing?"
      ],
      source: "But you kill ants",
      key: "They've never known anything else."
    },
    {
      answer: [
        "Is intelligence our guide as to hierarchy? Are cruelty, torture and murder less offensive when directed at the less intelligent?",
        "Intelligent non-humans (eg dogs, pigs, monkeys, dolphins) rank higher than infants and developmentally-disabled adults. Research shows them to be significantly higher.",
        "Arizona University's Biological Science professor found prairie dog alarm calls contain 'descriptive information about the general size, colour and speed of the predator.'",
        "Animals and birds excel and embarrass us in their fields of specialisation, such as tracking or navigating. Some bird species fly thousands of kilometres annually to the same place. Salmon swim thousands of kilometres only to return to their birthplace to die. Albatrosses circumnavigate the globe without instruments. Could you do that, or find your way home across the ocean as Blue Whales do? Could you find your partner at a cocktail party with a million guests where everyone was blindfolded, including you? Bats can. Dolphins have their own language which we can't decipher. Elephants communicate subsonically, using rumbles that go long distances underground. They mourn their dead and cradle their bones.",
        "A chimp trounced British memory champion Ben Pridmore.",
        "Chaser, the world's smartest dog in 2011, had a 2100-word vocabulary.",
        "Whilst there have been national leaders who believed their race could be improved by exterminating its lowest-intelligence members, one would hope we've moved beyond that philosophy. And we should acknowledge this absurdity: we're horrified at cruelty to dogs, yet not of far greater cruelty to pigs because the former have the attractive personality and the latter satisfy our taste preference. It's nothing to do with intelligence."
      ],
      source: "But you kill ants",
      key: "Anyway, humans are more intelligent than animals."
    },
    {
      answer: [
        "Nor did slaves. They were of a different race. Several American presidents owned slaves, so it must be acceptable.",
        "We have ditched that philosophy, because we acknowledge those of a different race are equal to us and have the right to enjoy pleasure, avoid pain, choose to live how they wish providing they don't harm others, maximise their potential, vote and so on.",
        "Animals don't have the ability to speak as we do or vote. But neither do human infants or severely mentally-disabled adults. Because such people can't utilise their rights to free speech or voting, we don't deny them their other rights. As philosopher Jeremy Bentham wrote more than 200 years ago, 'The question is not, Can they reason? nor, Can they talk? but, Can they suffer?'",
        "Our companion animals are individuals with their own personalities. They've sufficient interests and personality to merit rights, such as food, water, attention and protection from torture or being killed. We wouldn't be happy if someone took delight in maiming and killing our dog and gained acquittal on the grounds our dog had no rights. We have laws to prevent cruelty to animals. If animals have no rights, such laws are pointless.",
        "We can have our interests and rights without denying non-human animals their interests and rights."
      ],
      source: "But you kill ants",
      key: "'Animals have rights' is a myth. Animals don't have rights."
    },
    {
      answer: [
        "Do racehorses run faster when being patted or whipped? Do experimental rats perform 'better' (i.e. do what the experimenter wants them to do) when happy or during electric shocks? Are you more likely to hand over $1000 to a needy person when you're asked politely or when a gun's pointed at your head?",
        "Performance isn't always related to pleasure, but often to fear or force. The performance of factory-produced animals and chicken is certainly not related to pleasure. They haven't known that state. They produce for reasons such as force-feeding or unnatural conditions including continuous lighting or exercise restraint.",
        "Factory animal and bird production establishments are interested in output, not contented cows or happy hens. That was obvious in the confinement for months of sows by metal bars so that they couldn't even turn around, until Australian supermarkets rejected the practice in 2013. The Australian Egg Corporation wanted the definition of 'free-range' to allow as many as 20,000 hens per hectare instead of the 1500 in the bill before the New South Wales parliament in 2011.",
        "Profit for factory farms comes from the economies of mass production rather than individual contentment."
      ],
      source: "But you kill ants",
      key:
        "Don't you realise that if animals or chooks weren't happy, they wouldn't give as much milk or eggs in return?"
    },
    {
      answer: [
        "The opposite is true. Most animals are killed well before their declining years.",
        "Where do you believe your lamb or chicken comes from? Consider those who are killed when their useful life has hardly started. Lambs providing 25 million servings to Australians weekly are slaughtered at around 12 months. Most of the beef from butcher shops or supermarkets is the bodies of yearlings.",
        "Chickens fare worst. They're killed at about two months (or even within a day or two of birth), a little short of 'growing old' at the nearly 20 years they could otherwise have. And how enjoyable is their shortened life? One of Australia's top-selling newspapers was unimpressed. Its editorial, 'Put an end to this appalling practice,' said 'intensive farming of chicken is an indefensible practice. It exploits both the farmer and tens of thousands of birds bred purely for the financial benefit of processing companies ... 15,000 chickens are held in sheds on intensive farms for [six or seven weeks] of purgatory before being slaughtered.' The editorial could have enlarged on the 'purgatory': crippling from forced growth, faeces-laden sheds causing dehydration and suffocation, survivors thrown in trucks for transport and, on arrival, throat cutting and dumping into scalding water even if conscious.",
        "To avoid growing old and facing declining health, should humans be removed similarly, say at retiring age? Even then, we'd live a massively higher percentage of our natural life spans than that which animals experience, and of which so many of us approve. If we don't believe this proposal would be beneficial for us, why would we believe it is for animals?"
      ],
      source: "But you kill ants",
      key:
        "Animals are only killed when their useful life is over. Better for them to be killed than to grow old and be in bad health."
    },
    {
      answer: [
        "If you believe that, you won't mind visiting an abattoir. See if any of the animals appear terrified when they sense what's coming as they stand in the chute, trying to avoid slaughter.",
        "Here's a slaughterhouse worker's account. 'Cattle get their heads stuck under the gate guards, and the only way you can get it out is to cut their heads off while they're alive ... I've seen cows hit with whips, chains, hoes, shovels, boards. Anything they can use to move them. Seen them laid wide open across their nose and stuff ... You take an electric winch, latch it on to one of her legs - it's supposed to be a leg - and drag her all the way through the kill alley to the knocking box ... If you couldn't get her leg, it would go around her neck, and by the time she gets up here she's almost dead - it's choking her. You're in such a hurry, and people get so mad at you if you don't get the job done on time, that your adrenaline's flowing and you don't care what you do.'",
        "Why are we so violent to those who are so gentle?",
        "'He struggles upside down as he swings out over the kill floor where men stand in gore with long knives slitting each steer's throat and puncturing the jugular vein.'",
        "If you can't get permission to watch this, might it be because a visit will destroy the image of the happy cow or pig frolicking in the yard, keen to become our dinner?",
        "We don't want to know what goes on in abattoirs. It doesn't help enjoyment of the next meal. So conditioned are we to animal killing being normal that suffering goes unrecognised."
      ],
      source: "But you kill ants",
      key: "Abattoirs kill humanely - the animals don't suffer."
    },
    {
      answer: [
        "Are you saying because she's going to die sometime we're justified in eating her body now?",
        "You're going to die sometime. Am I therefore justified in taking your life, house and car now? You're not going to have them forever. You have to lose them sometime. Might as well be now.",
        "No, it's your life and your property. You choose what you do with them until such time as your life ends naturally.",
        "Since we don't need the body of the cow, or any other creature, to survive and survive well, isn't it reasonable to allow the cow also to enjoy her natural life instead of terminating it at a fraction of what it might have been?"
      ],
      source: "But you kill ants",
      key: "The cow's going to die sometime - might as well be now."
    },
    {
      answer: [
        "Yes, 'it', meaning the cow from whom your steak or hamburger has come, is dead. That cow's dead because people didn't consider the suffering of animals.",
        "One of the most effective campaigns on behalf of animals was a series of newspaper advertisements asking 'Mr Revlon' how many animals he had blinded that day. People reading the large-print question and seeing the experimental rabbit didn't continue using Revlon products on the basis the rabbit was 'already tested'. Rather, they got the message and stopped using Revlon products. Revlon got the message, too. Fearing further loss of sales, the company opted for alternative testing methods.",
        "You can't help that cow. It's too late. However, continuing to eat animal products increases the demand and consequent future suffering and death. Not only will your refraining from eating 'already dead' animals help reduce cruelty, but your example to and conversation with others will lead them to consider what they're doing."
      ],
      source: "But you kill ants",
      key: "It's already dead anyhow."
    },
    {
      answer: [
        "If you look at how association with a crime is regarded, you find it's normal for the law to apply partially or equally to an accomplice. You're not in the clear if you benefitted. 'I didn't steal it' won't assist you if you planned the theft, employed the robber or pocketed the proceeds.",
        "When we eat meat we're the equivalent of the accomplice. We planned the purchase of the meat, employed those involved in the killing (our purchase price helped pay the slaughterhouse workers' salaries) and we ate the proceeds.",
        "To see what you're an accomplice of, visit earthlings.com or meat.org. As Paul McCartney says, if slaughter-houses had glass walls, we'd all be vegetarians."
      ],
      source: "But you kill ants",
      key: "I didn't kill it."
    },
    {
      answer: [
        "Is killing cruel? What happens to every dairy cow when she no longer produces sufficient milk? She goes to the slaughter-house.",
        "But before she reaches it, our drinking of milk is contributing to her suffering and that of her calves. Soon after birth, usually within 24 hours, her calves are removed so that her milk, which was meant for them, can be taken for humans. Cows can be heard calling for days for their lost offspring, but it's too late.",
        "What happens to the calves in the mass milk production industry? These are some of their options, none of which is attractive:",
        "Be killed shortly after birth to become pet food.",
        "Become a milk machine, reared on milk substitutes instead of mum's milk and have annual forced pregnancies in order to produce milk.",
        "In some countries, spend whole life (shortened to 14-16 weeks) confined without water in a stall where even turning around is impossible, being fed growth stimulators and antibiotics but having iron and fibre withheld (causing gnawing at the crate bars for iron) because of a preference for white over red veal, and be kept in the dark for more than 20 hours a day.",
        "The life expectancy of a dairy cow is now around six years. A century ago it was 20 years.",
        "If we drink milk, we're involved in cruelty. We can do a favour for the cows and their calves, as well as ourselves, by using milk substitutes."
      ],
      source: "But you kill ants",
      key:
        "You say you don't eat meat because it's cruel. But that's no argument for not drinking milk."
    },
    {
      answer: [
        "And who did nature ordain should milk them? Their calves. We interfere with nature by drinking the milk the cow produces for offspring. To do this, we remove the offspring soon after birth. Excess female calves are killed; the males can also expect an early death unless veal is an option. If it is, they're in isolated detention for four months, with hardly enough room to even move, before being killed for veal.",
        "Denying cows their calves so we can have their milk is far from meeting the demand. To fulfil it, they're impregnated and fed growth hormones, resulting in an output of milk that dwarfs what they'd provide naturally and causes suffering such as from swollen udders.",
        "We're the only species to drink milk after infancy. We're also the only one to drink the milk of another species. Milk is good for the calves, or would be if we allowed them to have it. It's not so good for us."
      ],
      source: "But you kill ants",
      key: "It's cruel if you don't milk cows. They have to be milked."
    },
    {
      answer: [
        "I'm 'allowed' to eat eggs. I choose not to.",
        "Most hens spend their lives in crammed cages to mass-produce eggs. Picture a hen confined to a space smaller than an A4 sheet. She can't even stretch her wings. For life! Imagine being unable to stretch your arms or legs for a day.",
        "Yet she's crushed in with up to five other hens. So now imagine your whole life locked in a shower cubicle jammed against five of your fellow-humans. The unbearably-cramped conditions cause hens to peck each other, so they're 'de-beaked', an operation which causes severe, lasting pain. From standing on wire they become lame. More than half of caged hens suffer painful bone fractures.",
        "'TV coverage of de-beaked, de-feathered, sick, dying and dead hens, crammed into cages in filthy conditions, of eggs laid by living hens on the rotting corpses of their cage mates - scenes such as this have sickened viewers and convinced them they want no part of this cruel, polluting, unhealthy industry.'",
        "A Sydney newspaper found that some photos of factory chicken production it obtained 'were too horrific to publish', but it editorialised 'suffering of any living creature is too big a price for cheap food at the checkout.'",
        "Remember, too, nearly half of 'free-range' birds are crowded in sheds where they can barely move and all suffer premature death, killed when their useful laying life is over. The majority of free-range farms also slaughter male chicks when only a day old and practise debeaking."
      ],
      source: "But you kill ants",
      key: "Why aren't you allowed to eat eggs?"
    },
    {
      answer: [
        "Let the hens choose. Line them up in front of a battery cage and an open yard and see which they head for.",
        "Yes, the hens have permanent shelter. They also have permanent crowding so they can't stretch, permanent pain from deformed bodies or operations that removed their beaks, permanent filth from cages above them and permanent death (by beheading, crushing, mincing, drowning, gassing or suffocation) at one-fiftieth of their natural life.",
        "In outside freedom they're far safer from predators. Some will fall victim to predators, but in battery cages and intensive barns all fall victim to the ultimate predators, humans. Life expectancy is minimised and life enjoyment nullified by these appalling conditions. The hens might get some of their own back, though, as the predator's life expectancy is minimised by consuming an egg each day. Harvard Medical School researchers revealed in 2008 this can increase risk of death by over 20 per cent. And men eating 2 1/2 eggs each week have an 81 per cent greater risk of deadly prostate cancer compared with those on 1 1/2 eggs."
      ],
      source: "But you kill ants",
      key:
        "Hens in what you emotionally call battery cages are much better looked after than they would be outside. They've permanent shelter, air-conditioning and safety from predators."
    },
    {
      answer: [
        "I don't wear wool for the same reason as I don't eat meat or eggs or drink milk - I don't wish to be a partner of cruelty.",
        "Australia's merino sheep are unsuited to the climate. When carrying a full load of wool they're subject to heat exhaustion during the day; when shorn they're subject to dying from cold at night, as a million of them do in Australia each year.",
        "Shearers are paid per sheep, so there's an incentive for speed. Accuracy falls and cuts to sheep's skin follow.",
        "Mulesing, the industry's most notorious and painful feature, is a skin-removal operation done swiftly without anaesthetic. It's performed to avoid later misery for sheep from blowflies, but is an outcome of this breed's unsuitability. Mulesing saves labour costs, but at a cost of weeks or months of suffering for the sheep. Some farmers spare the sheep that ordeal and also fly strike by regularly inspecting their sheep. If all farmers did likewise, wool products would cost more. We pay to relieve our dogs' pain; why then wouldn't we be prepared to do likewise for sheep? Unfortunately, as former inspector Ben Lund says, today it's 'avoid paying workers, mutilate the poor creatures and pretend there's no other way.'",
        "More cruelty follows wool. Millions of Australian and New Zealand sheep, once they produce less wool, endure being packed on ships for a month, when about 20,000 die each year.",
        "We can avoid being part of the suffering of sheep by selecting from the many wool alternatives.",
        "It remains true, though, that sheep are more fortunate than other animals used for human desires. They at least have some freedom that intensively-produced animals and birds lack."
      ],
      source: "But you kill ants",
      key:
        "You're being fanatical when you won't even wear wool. That's not eating or drinking anything."
    },
    {
      answer: [
        "We mightn't value the life of a mouse, but the mouse does.",
        "The dictionary definition of 'vermin' is 'mammals and birds injurious to game, crops, etc'. In other words, creatures whose interests conflict with the interests of others. Rats and mice certainly conflict with ours. The problem is how to stop rats and mice from ruining our lives without our ruining theirs.",
        "Through no fault of their own they enter our houses for food, so we should ensure food is inaccessible for them. If that doesn't deter them, mousetraps which do that and no more, i.e. trap them without injuring them, are available from some Animal Liberation offices. They can then be released half a kilometre away to prevent backtracking. A warning regarding these traps, though: they need to be checked regularly so mice don't suffer a lingering death."
      ],
      source: "But you kill ants",
      key: "I can't believe you say rats and mice should live. They're vermin."
    },
    {
      answer: [
        "I make my home of no interest to them so they have to go elsewhere to dine.",
        "The first step is to remove access to food. This means having all food in sealed containers, not packets, and sealing all waste food.",
        "The second step is a linguist's delight: leave bay leaves to leave them at bay.",
        "The third is a recipe. Take equal amounts of tea tree oil, rosemary oil and citronella oil; combine with water using one part oil mixture to six parts water. Spray mist wherever cockroaches enter, especially around plumbing, under sinks, behind stoves and refrigerators and along baseboards.",
        "If your cockroaches treat all that with contempt, you can try Epsom salts or eucalyptus oil.",
        "Should all attempts to discourage cockroaches fail, common-sense requires we defend ourselves, our families and our homes just as we would if attacked by humans. This may mean force, the minimum force necessary to control the situation."
      ],
      source: "But you kill ants",
      key: "What do you do about cockroaches?"
    },
    {
      answer: [
        "I do, but not intentionally. A vegan doesn't intentionally or unnecessarily cause suffering or death to any living creature. Vegans wish it were otherwise, but humans can't survive without killing some insects. Every step taken runs that risk.",
        "I can discourage ants, flies, cockroaches, mice and other creatures whose competing interests with mine make them a pest to me and me a pest to them. Care with food, i.e. proper disposal of waste and sealed containers for unused food, limits their interest in my environment.",
        "Ants may stay well clear of tea tree and eucalyptus oils, red chili pepper, dry peppermint, lemon juice and coffee grounds. Claims for electronic pest-repellers seem baseless, though. Consumer magazine Choice found 'no scientific evidence to support claims that they can affect pests in ways like driving them away or deterring them from entering the treated area', and concluded 'you shouldn't waste your money.'",
        "With flying insects, I find no difficulty in trapping them in drinking glasses and releasing them outside so they can continue with their plans for the day.",
        "Besides stepping on ants, there's other unavoidable cruelty. My purchases help pay workers' salaries. They then purchase animal products and add to animal suffering. Almost any action could be construed likewise.",
        "Expecting vegans to be perfect is 'an unrealistic view of the world. No-one is morally perfect, nor should perfection be the standard by which we judge people's character or behaviour.' We don't expect a doctor will never misdiagnose a patient or a Wimbledon champion will never serve a double fault.",
        "Early animal rights activist, Henry Salt, said: 'We would much rather be inconsistently humane than consistently cruel.' The fact that some suffering is unavoidable is no excuse for causing suffering that is avoidable."
      ],
      source: "But you kill ants",
      key: "But you kill ants."
    },
    {
      answer: [
        "The oldest dog in England, possibly the world, in 2002 was 27 and vegan. Dogs can survive and survive well on vegan food.",
        "Substitute 'cat' for 'dog' to be nearer the truth. Cats are less able to survive without meat, but specially formulated foods such as Vegecat, Vegekit and Veganpet help.",
        "Even the biggest of cats can be herbivorous. A lion cub, rescued from a zoo, refused meat and lived healthily for four years on a vegetarian diet. 'Little Tyke' became a TV star.",
        "Whilst herbivorous diets aren't natural for dogs or cats, neither is the food they're routinely served at home. Most domesticated dogs and cats live on 'pet food' from the super-market. This, in turn, comes from the leftovers from slaughter-houses. It can lead to malnutrition for animals just as deficient diets do for humans.",
        "It's no more unnatural for a dog or cat to eat vegan food than modern food from a tin for these reasons:",
        "Companion cats and dogs are unlike their counterparts in the wild; we've an unnatural situation already.",
        "Tinned food hardly compares with finding their own.",
        "The processed food eaten by cats and dogs is nothing like the 'natural' food they'd eat if not domesticated.",
        "Vegan cat and dog foods are approved by Murdoch University and animal nutrition associations. Some cats and dogs enjoy meat analogues for humans from health food stores and supermarkets. Or make your own 'pet food'."
      ],
      source: "But you kill ants",
      key: "I have to feed my dog meat. That means I have to buy meat."
    },
    {
      answer: [
        "The carnivores might have to, but we don't. Irrespective of whether particular animals have to kill and eat others to survive, we should be able to do better than take our lessons in morality from their behaviour.",
        "Some animals (carnivores) eat other animals (mainly herbivores). Remember most of the animals humans eat, such as cattle, pigs and sheep, are herbivores. The logic - that some animals are carnivores, therefore it's fine for us to eat herbivores - leaves a little to be desired.",
        "Further, if you're going to use the habits of some animals as justification for human behavior, you'll run into problems. You'll be approving murder, rape and the exploitation of those who are physically or intellectually weaker."
      ],
      source: "But you kill ants",
      key:
        "Animals eat each other. So it's fair enough for us to eat animals. Anyhow, the carnivores have to, in order to survive."
    },
    {
      answer: [
        "Ethical vegetarians care about anyone with cancer. Indeed, they care about all human and animal suffering.",
        "Despite millions of dollars spent on animal experiments to find a cure for cancer, we've not been successful.",
        "There's merit in arguing more time and money should be directed to preventing, rather than finding cures for, cancer. Professor John Dwyer, chairman of the Australian Health Reform Alliance, says 'every dollar spent on prevention saves $7 down the track in treatment.' Causes of cancer are poor diet, tobacco, alcohol, radiation, medication and pollution. The best, cheapest and easiest way to reduce cancer is to reduce the primary causes. Because we care about kids with cancer we promote a vegan diet. Harvard Medical School's Nutrition Department chairman, Dr William Castelli, director of the longest-ever clinical trial, said 'a low-fat, plant-based diet would ... lower the cancer rate 60 per cent.'",
        "Pain management specialist Dr Ray Greek, Americans for Medical Advancement president, says 'the public has long been sold the idea that the cures for disease will be found in animals ? This is an expensive and dangerous fallacy.' A Research Defence Society chairman admitted 'the real motives [for animal research] are a mixture in varying proportions of scientific curiosity, desire to explore new fields, desire for recognition and fame and career ambitions.'",
        "Why don't we see experimental laboratories? Vision of appalling conditions and treatment surfaces because of those who worked undercover to obtain it, often at significant cost."
      ],
      source: "But you kill ants",
      key:
        "You oppose experiments on animals. Don't you care about kids with cancer?"
    },
    {
      answer: [
        "That's true. A lot of suffering has also come about because products were tested on animals first without adverse effect before being declared safe and released for human use.",
        "Early heart transplant patients died because complications hadn't been seen in hundreds of dog transplants. Yet a valve used on humans was nearly abandoned because it killed test dogs. Dr Ralph Heywood, Huntingdon Research Centre's director, said 'the best guess for the correlation of adverse reactions in man and animal toxicity is somewhere between 5 and 25 per cent.'",
        "Much testing is to save companies from being sued. Torture and death of millions of animals precedes cosmetics, paint and sleeping tablets. As Peter Singer writes, 'while sleeping tablets may be more important than cosmetics, the animal suffering involved in testing a substance is in any case a high price to pay for the avoidance of sleeplessness. So doing without animal testing would not mean releasing substances ... untested; it would mean doing without it, and trying to become less dependent on drugs ... [What we learn] is not that animal testing is necessary, but that it is unreliable; not that we need to poison animals, but that we need to find alternative[s].'",
        "You can reduce animal suffering by purchasing from suppliers whose items haven't been animal-tested. As a bonus, you'll also be reducing human suffering, as studies have found that experimenters themselves suffer greatly.",
        "Previous lack of alternatives (computer models, cell cultures) doesn't justify continuing testing when alternatives do exist."
      ],
      source: "But you kill ants",
      key:
        "A lot of human suffering would've come about if tests of new products hadn't been carried out on animals first."
    },
    {
      answer: [
        "They've suffered enormously, not just a bit. At Princeton University, researchers 'terminally deprived 256 young rats of food and water. They then watched the rats die from thirst and starvation. They concluded that under conditions of fatal thirst and starvation young rats are much more active.' To grasp the 'bit' of suffering multiply by millions the 256 tortured animals in that seemingly pointless experiment. 'In the US alone, 70 million animals are burned, blinded, crushed, driven insane, electrocuted, irradiated, poisoned, suffocated and dismembered in laboratories each year.' Much suffering has been pointless because of prior experiments, or has added to human problems following incorrect assumptions that the effects (or lack of) on animals could be transposed to us. Experimenting is sometimes unreliable, often unnecessary and always cruel.",
        "That some tests were beneficial doesn't mean cruelty was justified or results could not have been otherwise obtained. Polio is nominated as a prime example of the benefits of experiments and how tests on monkeys contributed to finding a cure. But that wasn't the whole story. 'Two separate bodies of work were done on polio-the in vitro work, which was awarded the Nobel Prize and did not involve animals, and the subsequent animal tests, in which close to 1 million animals were killed and which the Nobel committee refused to recognise as anything more than wasteful. Also, polio died out just as quickly in countries that did not use the vaccine.'",
        "Animal experiments will continue, but refining them to limit suffering, reduce the number of animals used and find alternatives should be the goal. We wouldn't be happy for our pets to have their brains cut open in experiments, would we?"
      ],
      source: "But you kill ants",
      key:
        "Look at all the benefits from animal experiments in [treatment of] diseases. It's better that they suffer a bit for humanity."
    },
    {
      answer: [
        "Acknowledgement that animal experimentation isn't essential for research and safety has come in universities' granting exemption for conscientious objectors. This has spread to non-objectors, with courses and research using computer models. Almost every study shows that students using these models performed at least as well as those whose training involved suffering and death of animals. As computer programs expand with more realism, enabling students to dissect most creatures' bodies on screen, the trend will continue.",
        "Dr Andrew Knight, at Perth's Murdoch University, did his veterinary science degree as a conscientious objector to animal experimentation. If he can achieve that, so can others. His book on learning without killing is published under that title.",
        "Australian Catholic University lecturer Vaughan Monamy details alternatives to animal experimentation in his books which present both sides of the debate. He recommends we use",
        "less- (or non-) sentient organisms",
        "in-vitro techniques",
        "non-biological replacement alternatives",
        "human studies",
        "Add to those cell and tissue cultures, population studies and ethical clinical research with volunteer patients and healthy subjects.",
        "Progress in such alternatives is marvellous news for animal supporters considering a veterinary career, but are dissuaded by the thought of causing suffering as a student prior to relieving suffering as a professional."
      ],
      source: "But you kill ants",
      key: "Medical and veterinary students have to dissect animals."
    },
    {
      answer: [
        "They don't make the animals happy.",
        "The claim suggests:",
        "(1) If an activity makes people happy, it's morally justified.",
        "(2) Animal circuses make people happy.",
        "(3) Therefore animal circuses are morally justified.",
        "Do we wish to continue with this reasoning?",
        "Theft makes burglars happy. Drug addicts make suppliers happy. Do we suggest misery of robbery victims and drug addicts is justified because of happiness for burglars and drug suppliers? No, and nor is suffering of circus animals justified because spectators go home happy.",
        "Circus animals suffer in their training and in their transport. In training they're forced to do unnatural acts and if they fail are punished by such means as whips, electric shocks and withholding of food. Conditions for animals in transport between circus locations prevent any hint of natural movement for those whose instinct is to cover kilometres in the wild.",
        "If you get the opportunity to approach a confined horse at a circus, perform your own experiment. Offer your outstretched hand and see whether the horse reacts inquisitively and naturally or jerks her head and tries to recoil. The result of your experiment suggests whether she's had loving or abusive treatment. Horses also suffer enormously in racing: boredom during 22 hours a day in a stall, injuries from training and death if they don't perform to the wishes of 'connections'.",
        "There's abundant entertainment for us without resorting to attractions that use performing animals."
      ],
      source: "But you kill ants",
      key:
        "It's a pity animal rights people try to stop circuses. Animal acts in circuses make everyone happy."
    },
    {
      answer: [
        "They'd learn in the same ways as they learn about other subjects. They can choose from books, internet, TV (especially the National Geographic and Discovery channels) and videos. Children can learn about the moon and Mars without going there; they can learn about animals without meeting them.",
        "But unlike the moon and Mars, they can learn first hand about wild animals, and learn about them much better than by visiting zoos and staring into a concrete enclosure for 60 seconds. The ideal place is their natural habitat - in the wild. One of the greatest educational and life experiences you can give your children is to take them to East Africa. Let them visit wildlife reserves, such as South Africa's Kruger or Botswana's Chobe National Parks, where herds of elephants and a host of other species roam over hundreds of kilometres. They will describe this as the trip of a lifetime and never want to visit a zoo again. If you travel on the cheap - hiring your own vehicle and using backpacker accommodation rather than going on an organised tour - you'll be surprised at how economically you can provide this for them. As a bonus from living and eating cheaply and as close to the locals' conditions as possible, you won't hear a whinge when they return home."
      ],
      source: "But you kill ants",
      key:
        "Zoos aren't just for entertainment. How would children learn about wild animals without them?"
    },
    {
      answer: [
        "Sydney Domain speaker, 'Charlie' King, delighted in telling his audience 'you were born naked and an atheist. Your parents clothed you and gave you their religion.'",
        "Parents raise children according to religion, politics, sporting and food interests. Each set of parents will differ from you in one or more of those. You may think their children would do better under your practices, but I assume you don't deny those parents the right to train their children their way.",
        "Why, then, would you deny vegan parents the right to do likewise? If you say a vegan diet is unhealthy, I suggest you compare vegan children with non-vegans. A third of Australian children are overweight, yet overweight vegans are few. How many parents wish their children were as healthy?",
        "Most vegans give their children one of life's great blessings: good health, not only for now but as a permanent legacy.",
        "Setting boundaries isn't abuse or neglect. We limit what they do and say, as well as what they eat. Don't you also watch your children's fast food, chocolate, vandalism, bad language and (later) alcohol, drugs, friends and whereabouts?",
        "Because vegan parents know the advantages of a vegan diet they don't serve or purchase food that harms children's health and hurts or kills animals, birds or fish. Most of these children don't want such food anyway, some rejecting even the meat analogues (vegetarian foods resembling meat), so not 'letting' them is a non sequitur. Vegans don't only provide a health advantage for their children. They instil respect for animals and abhorrence of cruelty. As studies show, animal cruelty is often in the childhood background of violent adults. 'There has now been established a clear link that people who abuse animals often ... go on to child abuse or domestic violence.'"
      ],
      source: "But you kill ants",
      key:
        "It's appalling that you impose your vegan beliefs on your children. You don't even let them eat what they want to."
    },
    {
      answer: [
        "Your question is appropriately hypothetical. It's more likely my children will value the health and ethical principles they've been given. Nevertheless, there are plenty of vegan children who choose other paths as they become teenagers and adults and thus the question is very fair.",
        "What are you going to do if your children reject your religion or join an opposing political party? What if they drop football in spite of the hundreds of hours you devoted to their sporting success? Won't you continue to love them? And I'll continue to love mine if they start eating hamburgers and pouring milk on their cereal. I'd be disappointed, as no doubt you'd be.",
        "We wouldn't be alone, of course. Many children eventually reject their parents' religion or non-religion, their politics and their other interests.",
        "Whatever my faults in raising my children, lying to them about the origins of meat, dairy and eggs isn't one of them. I don't pretend to them that steaks come from contented cows who lived a full, happy and long life before choosing to be eaten by us; I don't tell them eggs come from happy hens scratching and exploring to their hearts' content in the backyard. Rather, they know something about factory animal and chicken production. Which images have you and most other parents 'forced' on your children? Do they know the background of their meat, or has the truth been withheld from them? Aren't they entitled to know if the food they're given is injurious to their health and to the health and lives of the creatures the food came from?"
      ],
      source: "But you kill ants",
      key:
        "What are you going to do when your children grow up if they reject what you forced on them?"
    },
    {
      answer: [
        "Yes, we try to convert other people to our practice. We've found what we know to be very important for their health, our health and that of other species. If we keep that discovery to ourselves, public health will miss an opportunity to improve and the exploitation of animals will continue. To succeed in all these areas, we must educate and encourage others. If our contacts choose a vegetarian or vegan diet, we are delighted for their sake; if they ignore the risks entailed by meat and dairy consumption then at least we've done our best to inform them of the possible consequences.",
        "Some vegans believe it's appropriate to 'impose' their views in circumstances where the lives of animals and birds are devastated by humans. Use of force is available, to a very limited extent, through the passing of laws. Two prominent animal rights supporters in the Australian political arena have been Lee Rhiannon (Greens senator) and Andrew Bartlett (Australian Democrats leader). By force of the law, a small percentage of animal cruelty is prevented; the banning of battery hen cages by some countries and states shows progress.",
        "We believe we've an obligation to disseminate our views. We certainly have the right, as do those who don't share our philosophy. They speak for their beliefs and causes. We speak for those who can't speak."
      ],
      source: "But you kill ants",
      key:
        "You try to convert others. If you live oddly, that's your business, but don't try to impose it on everyone else."
    },
    {
      answer: [
        "An opinion is a 'judgement or view based on grounds short of proof.' If I told my friend she'd look better in a dark-blue rather than light-blue dress, that'd be an opinion, as I wouldn't be able to supply proof. If I were to tell her that her chances of getting lung cancer if she continues to smoke are higher than if she ceases, I would have proof and therefore it wouldn't be 'just [my] opinion'.",
        "So where does eating meat come in opinion versus proof? The two major reasons for not eating meat are avoiding cruelty to animals and improving human health.",
        "We have proof animals feel pain and are intelligent. My stating that if you care about suffering you shouldn't eat meat is based on proof of animal suffering, not on 'opinion'.",
        "The evidence for better health through not eating meat is as impressive as for not smoking. Thousands of studies confirm that. Again, advice that you shouldn't eat meat for your health isn't 'just [my] opinion'.",
        "'Others are entitled to their opinions' about dress colours, music and employment opportunities. But do you also hold others are entitled to their opinions that smoking is healthy, drink-driving harmless and murder acceptable if you're so inclined? Do you claim Hitler was entitled to his opinion that Jews should be exterminated or slave holders that slavery is legitimate? 5 Then please don't suggest it's 'just [an] opinion' that eating meat is cruel and unhealthy. As Ari Solomon said, 'This is not about your opinion versus my opinion, this is about animal suffering'."
      ],
      source: "But you kill ants",
      key:
        "Saying meat shouldn't be eaten is just your opinion. Others are entitled to their opinions."
    },
    {
      answer: [
        "Yes, some of us tend to be self-righteous. That's just one of our failings. Other vegetarians are criminals, prostitutes, back-stabbers, alcoholics and ladder-climbers. We can be negative, divisive, foul-mouthed, bombastic and so on, just as in any other group of humans. Conversely, you can also find caring, dedicated, pleasant and unassuming people.",
        "Your valid criticism can be taken a step further. Some vegans seem more interested in their perceived moral purity above vegetarians who continue the use of dairy products, eggs and leather, instead of recognising the contribution they make.",
        "In spite of what we've achieved, we've convinced only a small percentage of the population to go vegetarian. We have a long way to go before we can crow about our success.",
        "Nevertheless, is it appropriate that we condemn those who eat meat? No, says a vegetarian Baptist seminary professor: 'Consumers do not purchase their neatly wrapped cellophane packages of meat at the grocery with a cold, calloused heart against animals. Nor do they sit down to a meal of steak or chicken with a murderous attitude. Most people are very affectionate toward animals and grieve over their death. However, relatively few are aware of the cruelty and suffering factory-farmed animals and birds have to endure. If consumers personally had to raise animals with the torturous methods of intensive animal farming and then personally slaughter the animals they ate, very few would continue to eat meat. They'd recognise that abusive treatment of animals is morally wrong and would have no part in it.'"
      ],
      source: "But you kill ants",
      key:
        "The vegetarians I've met tend to be very self-righteous. Some seem more interested in their own moral purity than in befriending those who fall short of their absolute standards."
    },
    {
      answer: [
        "A note attached to the June 2002 Newsletter of the Vegan Society (NSW) reported their annual meeting attendance. How many was this? 500? 50? 'No-one bothered to turn up at the AGM but myself,' it read. Can figures be more discouraging?",
        "The answer is yes, they can. The cover story for an animal welfare magazine was headed 'Tasmania Battery Hens Rescued.' Their 'rescue team successfully saved the lives of eight very debilitated battery hens.' Eight saved; millions lost.",
        "Attracting one person to an annual meeting and saving eight hens aren't significant achievements. They're indications of how few vegans there are and how inactive are many of the 'few'. Exceptions to the inactivity include the rescuers, who over years have achieved much despite appearances and whether we approve of their methods.",
        "What did the rescuers gain? Saving eight hens is better than none, but extensive media coverage of battery hen conditions led many to think twice before eating another of their eggs.",
        "Such educational ventures can have far-reaching results, as a list from Professor Peter Singer shows:",
        "Battery cages became illegal in Switzerland in 1991.",
        "Since 2012 European egg producers have had to provide perches and nesting boxes or use much larger cages.",
        "Keeping anaemic veal calves or pregnant sows in narrow, individual crates is illegal in Europe.",
        "Cosmetic companies no longer routinely blind rabbits.",
        "All Australian department stores were fur-free from October 2012 and Coles' brand pork sow stall-free from January 2013.",
        "Improvement for those millions of creatures is achievement.",
        "A couple of decades ago, supermarket shelf space for soy and other milk substitutes was nil. Times change. Most restaurants now offer cruelty-free meals. And the Vegan Society (NSW) figures a decade later? Annual meeting 50, membership 150, Facebook page members 1571, annual events 36."
      ],
      source: "But you kill ants",
      key: "Vegans haven't achieved much."
    },
    {
      answer: [
        "There are few vegans for the same reasons you're not one. Have you read about meat production? Seen inside an abattoir? Pondered a cow having its calf taken? Been reared on children's books of contented pigs thrilled to be off to market?",
        "Albert Schweitzer observed that 'very little of the great cruelty shown by men can really be attributed to cruel instinct. Most of it comes from thoughtlessness or inherited habit.' Those who like animal products don't want to know whether the source of those products involves cruelty.",
        "Vested interests' power limits information or maximises dis-information. The Australian Egg Corporation won Choice magazine's 2008 Shonky Award for defining hens packed 14 to a square metre as 'free range'. Finding that animal factories aren't nursery-book farms supports Mark Twain's view that 'education consists mainly in what we have unlearned.'",
        "Most of us never investigate the animal industry. Why would we? We already have plenty to occupy our time: family, work, study, sport, TV, Facebook, music, restaurants and sleep. But find a few minutes to read a brochure on cruelty or an hour to read a book or watch a movie. It will ensure you're no longer unknowingly cruel, and change your health as well.",
        "It's still 'hardly any vegans', but polls now suggest 2 per cent of Britons and 1.4 per cent of Americans are vegan."
      ],
      source: "But you kill ants",
      key:
        "Most people aren't cruel. If eating and drinking foods from animals is cruel like you reckon, how come there are hardly any vegans? You're the only vegan I've ever met."
    },
    {
      answer: [
        "Most people want clarification of 'vegan'. That's understandable as worldwide only one in hundreds is vegan. Many also want clarification of 'vegetarian'.",
        "The original meaning of vegetarian was 'one who lives solely from the vegetable kingdom'. Gradually those who consumed milk and eggs called themselves vegetarian. So the definition was broadened to 'one who abstains from animal food, especially that obtained by killing animals, and whose diet includes roots, green vegetables, cereals, seeds, fruit and nuts, with or without eggs and dairy products.' To distinguish between the basic types of vegetarians, 'vegan' was coined in the 1940s. A vegan 'eats no animals or animal products; strict(ly) vegetarian.' Nor does a vegan wear animal products.",
        "There are other sub-groups of vegetarians:",
        "Lacto-vegetarians eat vegetables (including fruit, nuts, cereals and legumes) plus dairy products.",
        "Ovo-vegetarians eat vegetables plus eggs.",
        "The most common vegetarians, lacto-ovo vegetarians, eat vegetables, eggs and dairy products.",
        "Total vegetarians don't eat meat, eggs or dairy products but, unlike vegans, may wear wool or leather.",
        "An attempt at a further extension has been the recent addition of 'pesco-vegetarian', a 'vegetarian' who eats fish.",
        "There is yet another category, that of pretend vegetarians. In a survey of 11,000 Americans, a third of those who said they were vegetarian admitted to having eaten meat in the previous 24 hours; nearly two-thirds had eaten meat, fish or poultry. Some claimed this was because they were 'semi-vegetarian'. It is, of course, impossible to be semi-vegetarian, just as it's impossible to be semi-pregnant. You're either pregnant or not pregnant. You're either vegetarian or not vegetarian. If you're not vegetarian, remember that every time you forgo meat you have reduced animal suffering, and we admire you for that."
      ],
      source: "But you kill ants",
      key: "Nobody even knows what a vegan is."
    },
    {
      answer: [
        "By 'everyone', you mean a large majority. If we accept this definition, we can apply it to other situations.",
        "Everyone once knew the world was flat.",
        "Everyone (99 per cent) in Somalia knows Islam is truth.",
        "Everyone (98 per cent) in Venezuela accepts Catholicism.",
        "Everyone (98 per cent) in Laos says Buddhism is true.",
        "The 'everyone ? so it must be right' hypothesis is running into a touch of difficulty. And might the simple explanation be 'everyone' hasn't the means, time or inclination to investigate and ponder long-held beliefs?",
        "Everyone believes it would be wrong to imprison a dog all day in a tiny crate where even two steps are impossible. But that's how pigs are confined?permanently, not just for a day ?even though they've similar intellect and pain receptors to dogs. They undergo mental and physical torture for years to provide food we don't need, because we can live and be healthier by eating plant foods.",
        "To put that logically:",
        "It's not right to cause unnecessary suffering.",
        "Eating meat is unnecessary.",
        "Animals suffer in meat production.",
        "Therefore it's not right to eat meat.",
        "That applies even though 'everyone else eats meat.'",
        "So why do so many act illogically? Usually from ignorance of meat production. This can be wilful to salve conscience, or because meat promotion in the fiction of contented animals grazing or rolling on green hills persists and visits to animal factories are prevented. Others remain convinced the best, or even only, source of protein is meat. Aristotle's observation comes down to this: we tend to believe what we like and what those we like believe, irrespective of evidence.",
        "Once we're aware of the above we have a choice, and we should make the right choice before our next meal."
      ],
      source: "But you kill ants",
      key: "Everyone else eats meat, so it must be right."
    },
    {
      answer: [
        "Thank you for the compliment.",
        "An extremist is 'a user of opinions and actions far beyond the norm' or an advocate of 'something as different as possible.' The definition doesn't imply violence, although its most frequent use is in that connotation. For us it means we don't just want to ease unnecessary animal suffering, but go to the extreme and eliminate it.",
        "By labelling us extremists, you place us in the company of Abraham Lincoln, that extremist president who wanted to abolish all slavery; Albert Schweitzer, the extremist jungle doctor who revered all life, not merely that of humans; and Mohandas Gandhi, the Indian extremist who eschewed all violence rather than killing or injuring a few of his British opponents.",
        "Would you have preferred that Lincoln just stood for reducing the number of slaves, or simply reducing their hours of slavery or type of hard labour? Would you prefer that we only agitate about the one cat who was tortured and ignore the plight of the millions of animals and birds who spend their years in confinement where they can hardly move?",
        "It's far better to go all the way with a worthwhile cause than just dabble at edges. We long for the day when no animal, fish or bird is tortured and killed to please our taste. If this means we are extremists, so be it. But who are really the extremists? Vegans declining meat and milk, or those who believe that their taste preference justifies torture and death of animals?",
        "American civil rights leader, Martin Luther King, Jr, reminded us that 'the question is not whether we will be extremists, but what kind of extremists we will be ... The nation and the world are in dire need of creative extremists.'"
      ],
      source: "But you kill ants",
      key: "Those animal rights advocates are extremists."
    },
    {
      answer: [
        "Many animal rights activists reject all violence, using personal contact, print, radio, TV, Facebook, etc., to publicise animal suffering. Others raid animal or chicken factories to rescue pathetic creatures. The resulting publicity informs those who've never been confronted with the consequences of their food choice and precipitates legislative change. Raids may cause some property damage, even just to defeat alarms. Some go further and destroy laboratories.",
        "What about the 'terrorist' category then? A terrorist 'favours or uses terror-inspiring methods of governing or of coercing government or community.' Terror is 'extreme fear'.",
        "Since animal rights activists, almost without exception, only attack property (if that) rather than people, they're not terrorists. They don't cause extreme fear although they might cause inconvenience, expense and even facility closure.",
        "Your belief that animal rights activists are terrorists may stem from the Animal Liberation Front. Its guidelines are:",
        "Liberate animals from abusive places such as factory production units and laboratories and find good homes.",
        "Cause economic damage to profiteers from animal misery.",
        "Reveal horrors and atrocities against animals behind locked doors, by non-violent actions and liberations.",
        "Take care against harming humans and non-humans.",
        "If those are followed, they don't fit the 'terrorist' definition.",
        "Activist Dr Steven Best asks: 'Why are anti-Nazi resistance fighters heroes, and ALF members terrorists? Why is violence acceptable in defence of human beings but not animals?'4",
        "Whether we agree with some activists' methods, their aim is to prevent violence and terror. The violence and terror we cause to the species we eat is incalculable."
      ],
      source: "But you kill ants",
      key: "Animal rights activists are terrorists."
    },
    {
      answer: [
        "Your authority for this statement is from the Bible's first chapter. 'God said ... Let [man] have dominion over the fish of the sea, and over the fowl of the air, and over the cattle ...'",
        "Does this text imply the right to kill and eat these creatures? Maybe not, as it contrasts with God's caring about a sparrow. Perhaps, then, he cares about billions of cattle slaughtered.",
        "'Dominion' is 'lordship, sovereignty, control'; 'supremacy, ascendancy, authority, command, government, mastery, power, rule, sway. Bibles use stewardship, mastery and rule.",
        "Parents have dominion over children; governments and their agencies have dominion over the rest of us for orderly society. It requires an interpretive leap to say the 'dominion' verse approves battery cages or killing animals for sport or taste.",
        "If we still hold that this text approves killing animals, do we believe God created everything in six days? If we don't take the creation account literally, how do we justify taking the dominion part of that same chapter literally?",
        "Literal interpreters should be consistent. 'I have given you every herb bearing seed ... and the fruit of a tree ... to you it shall be for meat.' God's original, presumably ideal, diet was vegan. Daniel promoted it and God will restore it in the new earth. It wouldn't do any harm to get some practice in now."
      ],
      source: "But you kill ants",
      key: "God gave us dominion over all creatures."
    },
    {
      answer: [
        "The first granting of permission to eat meat was after the flood when God told Noah 'everything that lives and moves will be food for you.' This is usually interpreted to be the natural result of the flood's having destroyed all vegetation, or as a concession to human sinfulness, with God taking us as we are rather than in the ideal vegetarian world. It's like our dealing with heroin addicts by providing methadone: we don't want anyone to take methadone, but we recognise the state the addict is in and compromise.",
        "God also allowed polygamy among his chosen people rather than deprive people of rights and desires, but this is no ringing endorsement of polygamy for us any more than permission to eat meat after the flood validates our eating it. 'Divine activity among humans invariably involves accommodation to human life and customs.'",
        "We should also keep in mind this is an account of God's dealing with his people in a desert rather than dealing with us in a bountiful 21st century country.",
        "Even with that permission to eat meat, it remains difficult to conceive of a loving God's approving the cruelty of the factory assembly-line in today's chicken production, for example. After just eight weeks of a life of hell, when many have broken bones or other deformities, they are deprived of food and water prior to slaughter. This involves being shackled to have their throats slit, often while conscious. If this is an environment where you believe God resides comfortably, vegans part company with you theologically."
      ],
      source: "But you kill ants",
      key: "God gave man permission to eat meat."
    },
    {
      answer: [
        "Jesus is a significant person in Judaism, an Islam prophet and the Christian saviour, so it's worth a look at his practices.",
        "'Meat' in the King James Version of the Bible is archaic English for 'food of any kind'; modern versions have 'food', 'something to eat', or similar. Word meanings can change quickly. 'Fantastic' and 'gay' are examples. Or you can ask a teenager what 'wicked', 'cool' and 'fully sick' mean. This is relevant to the rare texts connecting Jesus and 'meat'.",
        "Two noted vegetarian theologians who don't believe Jesus was vegetarian have written books on how they reconcile their philosophies with this practice. Their arguments are based on the future world when the wolf will live with the lamb and the fact that the meat industry today does not resemble how meat was obtained in biblical times. It seems, though, Jesus' brother, James, was vegetarian or even vegan.",
        "If we believe Jesus would approve of our eating meat, can we picture him working in today's battery hen sheds or abattoirs? Can we see him shackling the cow (conscious or otherwise) or slitting the cow's throat? If not, would we believe he'd delegate to us what he wasn't prepared to do himself? Would we be comfortable working in an abattoir? Or again, are we happy to let others do that work while we eat the camouflaged body of what was once a living creature, now nicely packaged under the soft light of a supermarket meat section?",
        "Our plant food supply is plentiful and we know we and the environment are healthier if we don't eat meat. So how moral is our religion if it allows our taste preference to take priority over the suffering and early death of other creatures?"
      ],
      source: "But you kill ants",
      key: "Jesus ate meat."
    },
    {
      answer: [
        "Jesus' disciples 'gave him a piece of a broiled fish, and of an honeycomb. And he took it, and did eat before them.'",
        "This isn't a favourite passage for Seventh-day Adventists, who push a vegetarian diet. One could expect their Bible commentary to dismiss this if they could get away with it. No such luck. 'Broiled fish ... Did eat. Undoubtedly to convince the disciples that He was still a material, corporeal being.'",
        "What possibilities are there for Christian vegetarians?",
        "An exception may have been made for desert dwelling.",
        "Eating of flesh was a God-given concession to sinful man.",
        "'It' isn't in the original text, so what he ate is uncertain.",
        "Future text discoveries might invalidate the fish accounts.",
        "The fish stories may have been parables.",
        "They may have been added later by a fish-eating sect.",
        "Also possible is what you say: Jesus ate fish.",
        "Jesus approved of others eating fish. With five loaves and two fishes, he fed 5000. Perhaps the desert didn't offer other food. Not many vegetarians would accept that. Nor would Christians, as his miracles could have provided alternatives to fish. Maybe no cruelty was involved as the fish were dead and multiplying dead creatures doesn't multiply pain.",
        "If biblical fish eating approves that for us, what about biblical slavery? And God had a mandatory death penalty for cursing a parent. Only the most exasperated parent wants that now.",
        "Theologians explain slavery and the cursing penalty were for a particular place and time. Why, then, mightn't eating of fish have been likewise? Even if food shortage made fish eating acceptable then, we can't use that excuse now."
      ],
      source: "But you kill ants",
      key: "Jesus ate fish."
    },
    {
      answer: [
        "Some do, but 'not any' is close to the truth. Jainism and a few small Christian denominations require vegetarianism.",
        "Others recommend but don't insist on abstaining from meat. Buddhists and Hindus, to a greater or lesser degree, practise vegetarianism. Confucius is believed to have been vegetarian. The best-known Christian church recommending abstaining is the 17-million member Seventh-day Adventist Church.",
        "At least it's a rare religion that says it's a sin not to eat meat. Some Muslim and Jewish festivals centre on killing and eating animals, but you're not required to do so.",
        "Vegans find it curious, frustrating and incomprehensible when those who believe in a loving God aren't concerned about factory-produced animals and birds. It's strange that animals are prominent in God's creation and the biblical new earth preview, yet rarely worth a sermon. Also, why are there prayers for the sick yet little is done to promote a healthy diet?",
        "Lack of concern for animals isn't necessarily permanent. It took 1800 years for churches to oppose slavery, as they could provide biblical support to justify it. They took even longer with discrimination against women; here again they had the example of all 12 of Jesus' disciples being male.",
        "Most religions claim a direct link to heaven. If their leader has received no animal messages, they're not keen to change. As with slavery and women's rights, they may yet oppose animal exploitation. They just need lots of time.",
        "Religion is faith, animal suffering fact. People of faith who saw the fact of animal suffering were RSPCA founder Rev Arthur Broome and African jungle doctor Albert Schweitzer."
      ],
      source: "But you kill ants",
      key:
        "If it's wrong to eat meat, why don't any religions or churches say it's a sin?"
    },
    {
      answer: [
        "Milk production is certainly bad for the environment.",
        "Water supply is already reduced by meat-eaters, who use 5000 litres of water a day compared with the 1000-2000 by vegetarians. Around 2700 litres is needed for production of a hamburger compared with 70 for an apple. Milk is no kinder. Your one litre of milk costs 1000 litres of water.",
        "If you're concerned about the environment, do you consider your taste? Meat and dairy generate as much greenhouse gas as all transport.' The CSIRO/University of Sydney 2011 report said animal agriculture 'is responsible for more than 30 per cent of Australia's greenhouse gas emissions' and we should move towards a plant-based diet.",
        "We are healthier, land is healthier and water is healthier if we don't drink milk. 'It takes a great deal of grain and other foodstuffs cycled through cows to produce a small amount of milk. And not only is milk a waste of energy and water, the production of milk is also a disastrous source of water pollution. A dairy cow produces 55 kilograms of waste daily - equal to that of 24 people, but with no toilets, sewers or treatment plants.' It just runs downhill into water courses.",
        "Milk production is bad for the environment. No kidding."
      ],
      source: "But you kill ants",
      key:
        "Traffic, factory waste, forest clearing, bush-fires and oil spills affect the environment. Now vegans say milk, of all things, is bad for the environment. They're kidding!"
    },
    {
      answer: [
        "Kangaroos prefer different grasses from sheep and cattle, so that limits their competition. Competition is between shooters. As the kangaroo industry grows, so does need for killing.",
        "Major killing areas support only 10 per cent of sheep and cattle. Sydney University of Technology research group founder Dror Ben-Ami says 'kangaroos rarely compete for food with livestock.' Australian Museum head, Michael Archer, adds 'farmers can get filthy stinking rich killing kangaroos.' Thus a major motivation is money. Kangaroos are hunted for skins, which become shoes, and for meat.",
        "Joeys depend on their mothers for milk, warmth, protection from predators and emotional support for 14 months. If they escape when their mothers are killed, they usually die in a few days from predators, starvation, hypothermia or accident.",
        "Combined devastation from sport and profit kills millions of young kangaroos annually. For each one entering the meat trade, two die agonizing, slow deaths. Should you not feel there is significant cruelty, ask to join a kangaroo shoot. If 'culling' is 'humane', you wouldn't be denied permission, would you? Yet French Public Television 'had to put pressure for months to film one night of kangaroo harvesting.' Presumably the industry chose their best shooter. However, his aim wasn't always successful. Filming was terminated when the crew was seen 'filming \"dead\" kangaroos still kicking.'",
        "Sheep, cattle and kangaroos can share Australia, if allowed."
      ],
      source: "But you kill ants",
      key:
        "We have to cull to keep the [kangaroo] population down. If we didn't, there wouldn't be enough food for sheep and cattle. They'd starve."
    },
    {
      answer: [
        "Our species is hardly the one to accuse another of degrading and destroying the environment.",
        "Degradation starts with our destructive agricultural practices. Then there's harm from a kangaroo shooter's vehicle. Yet the annual quota for killing of kangaroos is in the millions. That's a lot of four-wheel driving over fragile environment.",
        "The presence of kangaroos can have the reverse effect: their soft feet and long tails help regenerate native grasses.",
        "Kangaroos are killed in the belief they cause destruction and compete with the pastoral industry. This is disputed by a former Federal Bureau of Animal Health deputy director, who says 'every attempt to demonstrate this scientifically has failed. In the \"harvesting\" large males are favoured for their skins and pet meat ... Four million kangaroos are killed each year of which probably a million or more are breeding females. In this population most have an in-pouch joey.' These joeys are bashed to death. Hundreds of thousands of older ones escape each year to face a lingering death.",
        "We should be wary when the kangaroo, rather than land mismanagement, is blamed for the state of outback terrain. The kangaroo industry 'is worth $270 million per year and directly employs 4000 people.' With all that profit at stake, there is incentive to disregard joeys' suffering and damage from shooters' vehicles. Also ignored is the average age of red kangaroos reaching processing plants: only two years instead of the 25 they could otherwise live.",
        "Rather than kangaroos' being a problem for us, it's an introduced species, sheep, in an unsuitable environment that disadvantages the kangaroo. We disadvantage the sheep by breeding them in the wrong climate and by eating them."
      ],
      source: "But you kill ants",
      key: "Kangaroos degrade and destroy the environment."
    },
    {
      answer: [
        "This is true, but how much human intervention is desirable or counter-productive is a much-debated issue. Feral cats, for example, have been killed in expensive removal programs even though the claimed damage from them was unproven. It's also suggested that when they are removed, they are simply replaced by more of the young, like traffic expanding to fill new road space. Largely ignored are the main offenders in the killing of animals, such as land clearance and sheep and cattle grazing.",
        "In the case of dingoes, though, they are rapidly declining without needing further encouragement from us. A University of New England researcher, Gisela Kaplan, says those who work with dingoes know this, even if the rest of us don't. Professor Kaplan also commented they are frequently blamed for attacks on livestock by domesticated dogs gone feral or hybrids. Dingoes 'kill to feed, not to play.'",
        "Preventing land devastation and reducing the fertility of animals rather than killing them appear the most promising, and clearly less cruel, solutions. The latter is successful in the United States on free populations of horses, deer and goats and on captive zoo animals.",
        "The question of human intervention in the animal kingdom isn't easily resolved, but one thing is certain: our activity, either directly through slaughter or indirectly through loss of habitat, is by far the primary cause of animal suffering and death. Our intervention almost always results in animals' being worse off."
      ],
      source: "But you kill ants",
      key:
        "If we don't kill dingoes or wild cats, they kill native animals and birds."
    },
    {
      answer: [
        "A glimpse of factory animal production shows they don't have much room now. But if we didn't eat meat, there'd be more room for all the animals and more food for them and us.",
        "Our insatiable meat appetite causes animals to be artificially inseminated and factory-bred. 'Enough room' means pigs spend their lives unable to turn or take more than one step. Picture your dog imprisoned for years like that.",
        "Another problem is each extra animal needs extra food. If half as much land again is required to produce meat as is needed to produce vegan food, that's a substantial waste of land. Twice as much would appal. Yet 10 times extra land is required to provide the most basic meat-based diet than to feed one vegan. Bacon requires 10 times as much crop land (in the form of feed grains) as bacon analogue from soy beans.",
        "Grain that could feed humans is fed to animals uneconomically. The grain eaten by United States cattle could feed 800 million people. Regarding that, London's The Guardian said 'it now seems plain that [veganism] is the only ethical response to what is arguably the world's most urgent social justice issue.' Environmentalist David Suzuki says we'd make a significant contribution to the welfare of our planet if we had one meat-free day each week. How much greater would be our contribution if we had seven meat-free days.",
        "As population continues to rise, abstaining from meat might well be forced on us to avoid global famine.",
        "So supporting meat-eating by claiming this provides sufficient room for other creatures doesn't 'hold water'. Nor does it if we eat fish. They've sufficient spare space left, or would have if we weren't intensively rearing them as well."
      ],
      source: "But you kill ants",
      key:
        "If we didn't eat meat there wouldn't be enough room for all the animals. We're doing them a service."
    },
    {
      answer: [
        "Yes to both. Meat causes more environmental damage than any other food. Without mass production, it would cost more, but that could be avoided by changing to a non-meat diet. Then it wouldn't cost more; you'd pay less.",
        "A study of 36,000 people showed omnivores use 810 more litres of water weekly than vegetarians. Another by the United Nations showed we can do as much to prevent global-warming through a plant-based diet as by not using cars. Cattle-rearing is a 'major source' of land and water degradation. Producing a kilogram of beef requires 16,000 litres of water compared with 3000 for rice and 1350 for wheat. The CSIRO says up to 50,000 litres for beef .",
        "Climate activist Al Gore says 'growing meat intensity of diets around the world is one of the issues connected to this global crisis - not only because of the CO2 involved, but also because of the water consumed.' Gidon Eshel and Pamela Martin, two Chicago University researchers, compared fossil fuel for food cultivation and processing and factored emissions from cows, sheep and manure treatment. They saw that typical American diets, 28 per cent from animals, 'generate the equivalent of nearly 1.5 tonnes more carbon dioxide per person per year than a vegan diet with the same number of calories.'",
        "Even if changing to a plant-based diet were to cost us more rather than less financially, it'd be a significant saving environmentally. But we save both ways.",
        "Our list of reasons for avoiding meat continues to grow: health, ethics, environment and economy."
      ],
      source: "But you kill ants",
      key:
        "I know mass production of meat causes environmental damage. But without it meat would cost much more."
    },
    {
      answer: [
        "You could take your argument further. Harvesting kills mice, rabbits and other animals. And some of the pay that transport and supermarket employees receive for handling vegan food is spent in their purchase of meat and dairy products.",
        "There is a significant difference between long-term torture then deliberate killing of animals for meat and the accidental, unintentional killing of animals in harvesting grains. Similar is a robber's murder of a shopkeeper to prevent identification compared with a driver's accidental killing of a child who ran out onto the road in front of the car. Vegans drive cars, walk on footpaths and eat plant foods. Driving involves risk to humans, every step involves risk to ants and harvesting plant foods involves risk to animals. Vegans don't claim perfection, just as Christians don't claim to be sinless and those concerned about the environment drive cars and use electricity.",
        "More animals are killed in harvesting for meat. About 80 per cent of the world's soy production is fed to cows, pigs and chicken instead of their natural diet. This is done for economy, to fatten them in the shortest time. So the less of those meat products are consumed, the less field animals die.",
        "As people become aware of cruelty to animals, the demand for reform of factory production has increased. Supermarkets are responding to consumer pressure by ceasing to source eggs from battery hen cages and pork from sow stalls. Concern for environmental and health damage has seen a surge in organic foods. The trend will no doubt continue in developing methods to greatly reduce risk to animals in harvesting.",
        "Rutgers law professor, Gary Francione, says 'we should obviously endeavour to commit as little harm as possible but we cannot eliminate harm. We can, however, eliminate intentional harm. And eating animals involves an intentional decision to participate in the suffering and death of nonhumans where there is no plausible moral justification.'"
      ],
      source: "But you kill ants",
      key: "A vegan diet results in the killing of mice in the field."
    },
    {
      answer: [
        "Some travel, especially in undeveloped countries, can be inconvenient for us as vegans. We miss meals occasionally or have fewer choices. That's unlikely to do us much harm. We gain deeper understanding of the hunger felt daily by millions, and whose hunger is for life, not just the few weeks of a holiday. As well as not doing us harm, it probably does some good. Vegans, like most others, can eat too much, too often and too luxuriously.",
        "In the Sahara or above the Arctic Circle, thanks to modern transport, vegan food is found. Even Eskimos have no excuse.",
        "Vegans can travel through and live in the poorest countries? Ethiopia, Mozambique, Senegal, The Gambia?without a problem. There's no shortage of desert, but you can find ample fruit, bread and tinned vegetables in desert settlements.",
        "Some travel guides list vegetarian outlets where such exist; these are usually capable of providing vegan meals. Vegan phrases and questions in virtually any language are available.",
        "The larger the airline, the greater the chance for meal requests to be honoured. United Airlines, for example, serves 200,000 vegan meals annually. But if we can't cope with missing an occasional meal on smaller airlines, we may not be suited to travelling anyway.",
        "Surprisingly, vegans often find an advantage when travelling, especially in parts of Asia and Africa. Some meat-eaters opt for vegan food as they consider it minimises the risk of travel illness. It's then the non-vegans who are 'disadvantaged'."
      ],
      source: "But you kill ants",
      key:
        "You've got it easy being a vegan here. You wouldn't be able to follow your peculiar ideas if you travelled or lived overseas."
    },
    {
      answer: [
        "Greenland's Cape Den, a typical Eskimo village, is one of the most isolated settlements on earth. There's no road access. Access is by water when icebergs permit, otherwise by small plane. Yes, they catch seals and polar bears who've become stranded on ice that's broken away and, unfortunately for the polar bears, drifted into range of the Cape Den Eskimos.",
        "Seals and polar bears are far from 'nothing [else] to eat', even in tiny Cape Den. Fortunately it has a general store that sells limited fresh fruit and vegetables but a large range of packaged and tinned food. Supplies are flown or shipped in.",
        "By contrast, residents of Matmata, in the Tunisian Sahara, live underground. It's so hot and barren that little grows. If they didn't eat their goats and camels (they do), would they have nothing to eat? No. Their range is almost as good as in cities - bread, fruit, vegetables and packaged and tinned food.",
        "Not much is grown in Antarctica, but people there eat food that arrived in Antarctica the same way they did, and they don't have to limit themselves to eating seals or penguins.",
        "Even if those in Greenland, Tunisia and Antarctica had to eat meat, that still wouldn't excuse our adding to animal suffering when we've no such need.",
        "We're nearer the mark if we alter your wording to 'vegetarian beliefs ... work for all places and all people.'"
      ],
      source: "But you kill ants",
      key:
        "Eskimos have to eat meat. If they didn't catch seals or polar bears they'd have nothing to eat because where they live you can't grow anything. Since it's impossible for them, it shows vegetarian beliefs are wrong because they only work for some places and some people."
    },
    {
      answer: [
        "The existence of zoos, with their close confinement of animals who are accustomed to roaming over large territories, is claimed to be necessary to preserve particular species until their numbers are increased for return to their natural habitat. There are some problems with this argument.",
        "The number of animals required to maintain a viable gene pool is high; if it's too small, inbreeding can result in susceptibility to disease, birth defects and mutations so it wouldn't be viable to return them to the wild.",
        "Some species (for example, pandas, marine mammals and birds) are extremely difficult to breed in captivity, resulting in a net drain in wild populations.",
        "In most cases, loss of natural habitat, chemical contamination and poaching are the causes of the threatened extinction. Returning the zoo animals to the wild becomes less of a possibility as controlling these threats continues to fail rather than succeed.",
        "The longer animals are contained in zoos, the less competent they will be for seeking food and water, building dens, etc., and thus the less able to fend for themselves when released.",
        "Most zoo species aren't endangered anyway.",
        "Large wildlife reserves, such as those in Africa, are infinitely more successful with saving animals, providing they can control poaching. Most opt for minimal human interference. Some development is essential for tourism, as it provides not only the money for operating reserves, but also for the African countries' improving economies. The more tourists who are attracted by the wildlife reserves, the more determined the countries are to ensure preservation of their wildlife in natural surroundings."
      ],
      source: "But you kill ants",
      key: "Zoos save animals from extinction."
    },
    {
      answer: [
        "Some do, some don't. Some live for considerably longer than they might have survived in the wild; others have their lives significantly shortened by a zoo's artificial, cramped surroundings and boredom as compared with their natural habitat.",
        "A 2008 study of more than 4500 elephants showed those in zoos have only a third to a half of the median life expectancy of elephants who are free.",
        "For those who live longer, we must question whether the important factor for them is quantity or quality. For the veal calf or battery hen, the answer is clear: their short life spent entirely in hell would readily be exchanged for an even shorter life in farmyard bliss.",
        "At least zoo animals can expect to have more room than the unfortunate veal calves and battery hens. Yet even if they had extra years in captivity compared with fewer years roaming the plains, as you claim, would they be better off? Would we prefer a life of 60 years in a foreign prison to one of 30 years of freedom?"
      ],
      source: "But you kill ants",
      key: "Animals live longer in zoos."
    },
    {
      answer: [
        "What if both of us were marooned on that desert island and there were no sheep? Would you kill and eat me?",
        "It would be more sensible for one of us to survive than neither, but how would we decide? Would we play rock, scissors, paper? Should the decision be made on the basis of age, fitness or intelligence? If we couldn't agree, would it be on strength?",
        "If you win by whatever method, or if I volunteer to be killed by you, are you confident you could eat my flesh? Once dead, I'd have no problem if you did; it would be no use to me any longer. Indeed, it would be pleasing if my flesh kept you alive until rescued.",
        "If you don't think you could kill and eat me, perhaps you can understand why I'm confident I'd choose not to kill or eat another living creature, and therefore you'd lose the bet. Although I understand we can't be sure what we'd do in extreme circumstances, I don't believe I could kill the sheep. Even if I could bring myself to do that, I've grave doubts I could stomach sheep's flesh after so many years without meat.",
        "Stomachs aside, if the sheep were killed in a fall from a cliff on the island, I'd have no ethical objection to eating the body, and if I died of starvation before you in my example, you would, I assume, have no ethical objection to eating mine.",
        "A case similar to this occurred in Argentina's Andes Mountains following a plane crash. Surviving rugby players ate the bodies of their less fortunate team members. How often does this happen? What are my chances of being marooned on a desert island? One in billions? Is it really worth spending time debating 'what ifs' as unlikely as this?"
      ],
      source: "But you kill ants",
      key:
        "What if you were marooned on a desert island with nothing to eat but a sheep? I'll bet you'd kill and eat it."
    },
    {
      answer: [
        "If we were to give factory-produced animals the greatest thing we can, it would be to leave them 'non-existing'. It would mean a lot less suffering for them and no loss of pleasure.",
        "But we have a philosophical absurdity, as the most prominent philosopher in this area explains. 'On whom do we confer the favour of existence? ... There are no such entities as nonexistent beings, waiting around in limbo for someone to bring them into existence ... If to bring a being into existence is to benefit it, then presumably to decide not to bring a being into existence is to harm it. But there is no 'it' to be harmed by the decision ... If it were good to bring beings into existence then, other things being equal, we ought to bring as many humans into existence too, and if to this we add the view that human lives are more important than the lives of animals - a view the flesh-eater seems sure to accept - then, ... since more humans may be fed if we do not feed our grain to livestock, the upshot of the argument is, after all, that we ought to become vegetarians!'"
      ],
      source: "But you kill ants",
      key:
        "If we didn't eat meat these animals wouldn't exist. We are giving them the greatest thing we can give anyone - life."
    },
    {
      answer: [
        "Yes, we do. We also inconvenience our families and friends. Worse still, we show insufficient appreciation.",
        "Most restaurants have vegetarian and possibly vegan options. Given notice, their vegan meals can be impressive. Yet it's inconvenient to prepare one meal rather than mass-produce several meals. They may accept this because they value a good name or wish custom despite inconvenience.",
        "We too readily complain when airlines fail to provide requested meals, a special service at no extra fare. Most major airlines rarely fail; small ones rarely deliver.",
        "A large aircraft might carry 400 people. Of all possible meals (vegetarian, vegan, low fat, diabetic, kosher, halal, etc) 20 may be specials. The other 380 passengers have a choice of, say, beef or chicken. Two varieties for 380 people, perhaps five varieties for the other 20. What a pain we are!",
        "Many people in developing countries don't comprehend a non-meat-eating human. We mustn't expect their world of crowded millions to change its orbit as soon as we arrive. There's always something to eat, even if just fruit or bread.",
        "Yet not just vegetarians and vegans, but all minority groups cause inconvenience. Examples are obese people for clothing manufacturers and retailers, builders for neighbours and cyclists for motorists. We are all in some minority group that inconveniences the majority.",
        "Vegetarians are above average in health, yet subsidise non-vegetarians' extra medical care. Inconvenience is both ways.",
        "If we eat meat, we cause ultimate inconvenience for animals. We are part of the process that tortures and kills them."
      ],
      source: "But you kill ants",
      key:
        "Vegetarians cause a lot of inconvenience for restaurants and airlines."
    },
    {
      answer: [
        "Every major change causes lost jobs. Yet most changes create other opportunities. A drift from 'snail mail' to email cost postal jobs but opened up a host of IT jobs. If we all became vegetarian (hardly an imminent event to cause you concern, but environmental pressures may eventually precipitate it), meat industry employment would disappear and the demand for heart specialists diminish. To compensate, the fruit and vegetable industry would expand and supernumerary heart specialists could devote their talent to other health areas.",
        "Most employers and employees have to adjust, especially as technology forges ahead. There's no reason why the meat and dairy industries should be cocooned from change.",
        "If all were vegetarian this would help, not ruin, the economy. As vegetarians require far less medical attention, there'd be huge savings on Medicare and more for other needs.",
        "Meat workers have higher cancer rates, three times greater general injuries and 35 times greater repetitive stress injuries than those in other manual jobs. Would you like a description of some of their 'jobs [that] would be lost'?",
        "'His face is splattered with gray matter and blood. He is the 'knocker' ... A 'sticker' does nothing but stand in a river of blood, being drenched in blood, slitting the neck of a steer every 10 seconds or so ... Many slaughterhouse workers make a knife cut every two or three seconds, which adds up to about 10,000 cuts during an eight-hour shift.'",
        "Naturally, these repetitive actions lead to injuries. If these workers were transferred to the sanitation crew they might avoid injury, but have other disadvantages. This crew 'faces a mess of monumental proportions ... They get under tables and conveyor belts, climbing right into the bloody muck, cleaning out grease, fat, manure, leftover scraps of meat.'",
        "Maybe we are a lot better off without those jobs."
      ],
      source: "But you kill ants",
      key:
        "If we were all vegetarians, jobs would be lost and it would ruin the economy."
    },
    {
      answer: [
        "I care about all people, but I don't care for the actions of some, including cattle and sheep farmers. I'd prefer they farmed crops; so would the environment and our health.",
        "Whenever there's progress in social standards, there will be losses in jobs. Rather, we should say changes in jobs. Those whose farms raised cattle or sheep for slaughter can change to raising vegetables. A fraction of the land area is required to produce the same amount of vegetable food as meat. That's a lot less environmental destruction, including of trees as well as water quality from faeces pollution.",
        "Yes, I care about cattle and sheep farmers. And I'm sure we both care about starvation in countries such as Bangladesh, India and Mozambique. If we were all vegetarians, we could look after both farmers and starvers. The same amount of land presently devoted to cattle feed would easily feed the world's human population."
      ],
      source: "But you kill ants",
      key: "Don't you care about farmers?"
    },
    {
      answer: [
        "If it did cost more, would that matter if it improved your health? Isn't good health high on everyone's list of priorities? Giving up meat in favour of fruit and vegetables is a huge plus.",
        "If healthy food meant paying more, you might be able to rearrange your finances to give more priority to food.",
        "However, it wouldn't cost more to give up meat. It would cost you less. Further, the more naturally you eat, i.e. fresh fruit and vegetables rather than processed vegetarian foods, the more you save and the better your health. It's even better still for both reasons if you grow your own vegetables.",
        "A research nutritionist at George Washington University calculated that on a vegan diet a family of four could save enough to buy a new car every six or seven years."
      ],
      source: "But you kill ants",
      key: "It'd cost more for food if I gave up meat."
    },
    {
      answer: [
        "What about these 'one persons': Adolf Hitler, Mother Teresa, Steve Jobs, Muhammad, Martin Luther King?",
        "Peter Singer, one of Time magazine's '100 Most Influential People', founded Animal Liberation; his book with that title probably did more to awaken our concern for animals than any other. Henry Spira initiated campaigns that saved millions of animals annually from the agony of unnecessary formality tests. Jenifer Graham fought her school over having to dissect animals and won it for all California school biology students.",
        "Broadcaster John Pearce used to tell non-achievers they could achieve anything given two factors: they wanted it badly enough and worked hard enough at it. How much do we give of our money, time and labour to a cause we believe in or a goal we wish to reach? Think of how much advertisers achieve by paying thousands of dollars for a 30-second spot on a leading city radio station. We can reach 100,000 people by ringing a talk station at zero cost. Total dedication by one person to his or her chosen cause can make a huge difference.",
        "What if you worked at educating others about animal cruelty, pacifism, drugs or whatever your concern is, and each year just one other person accepted your philosophy? What if that person did likewise? And so on. After six years 32 would have adopted your philosophy. Another six years and the number would have passed 2000, or if we halve that to allow for those who lose commitment or die, 1000, all coming from what you started a decade or so earlier. That's quite a difference!",
        "'The question is not \"can you make a difference?\" You already do ... It's just a matter of what kind.'"
      ],
      source: "But you kill ants",
      key: "One person doesn't make a difference."
    },
    {
      answer: [
        "It would make a difference to the one cow whose body you helped eat and therefore killed, or to the cow whose calf was taken from her at birth to improve milk production.",
        "But it's not just one cow. If you change your dietary habits, during a lifetime you'll save the lives of 17 cows, about the same number of pigs, 90 sheep and schools of fish. More than 1000 chickens will be spared death at only eight weeks because you cared."
      ],
      source: "But you kill ants",
      key:
        "If I stopped eating meat and drinking milk, the difference I'd make to animals would be negligible."
    },
    {
      answer: [
        "Where donors choose to send their money is their business. Whether the money they worked for is given to Red Cross, World Vision, famine relief or Animal Liberation, it's given. They've decided not to spend that portion of their income on new clothes, new cars, restaurants, entertainment or poker machines, and I admire them for that. Who are we to prescribe where they donate their funds?",
        "It's still pertinent to consider where the money goes so it will do the most good and whether it will be spent as the donor wishes. We are drawn to 'cancer research' appeals. If money is sought to help find a cancer cure, it's assumed the money is well spent. Yet few of us consider checking on how it's used. Does it finance animal experiments, perhaps duplicates of previous ones? How much goes to experiments redesigned or renamed 'cancer research' to attract funding? We don't usually ask those questions.",
        "Are our priorities misplaced with cancer research on animals when so much of our knowledge has come from studying humans, and, worse still, when we ignore what we've already learned? We know how to reduce cancer by nearly a half and how to reduce it by half again: stop consuming animal products and stop smoking. With a third of the population developing cancer, donations might best be used to inform people about healthy food and motivate them to change.",
        "Another point to consider is a vegan diet is cheaper than a meat-based diet, so adopting the former allows more funds to be made available for needy people.",
        "Vegans can generously support humanitarian and animal welfare groups. The two fields aren't mutually exclusive."
      ],
      source: "But you kill ants",
      key:
        "Donations should be spent on needy people rather than given to animal organisations."
    },
    {
      answer: [
        "Vegans typically give of their time to helping people. Why wouldn't they? They're vegans because they want to help animals, both human and non-human. Both groups suffer and vegans try to alleviate that suffering. Donations of time to human and animal welfare aren't mutually exclusive, any more than donations of money are. Time can go to both.",
        "An example of spending time for people and animals is William Wilberforce, a leader in abolishing slavery and an RSPCA founder. Another is Joseph Brotherton, a Member of Parliament who opposed child labour and the death penalty as well as being chairman of the first meeting of the Vegetarian Society in the UK. Philip Wollen, Order of Australia recipient, Australian Humanitarian Award winner and Australian of the Year Victoria initiates, supervises or encourages worldwide projects that help sick people, poor communities and animals. A vegan Christian, Mr Wollen practices reverse tithing - he donates 90 per cent of his income to his own and other charities and retains 10 per cent.",
        "By donating our time to enlightening people about the cruelty in the animal industry, we're also helping humans. If we discourage them from eating animals, we're significantly lessening their chances of having life-destroying illnesses.",
        "How people choose to donate their time is their business. Yet we should remember that unlike humans, animals (especially captive animals) are less able or unable to help or speak for themselves. And humans 'aren't kept in cramped warehouses amongst their own excrement, trucked many miles, hung upside down by their feet and slaughtered, then consumed.'",
        "The easiest way to help animals? Stop eating them. That takes no more of our time."
      ],
      source: "But you kill ants",
      key: "Why don't you spend your time helping people instead of animals?"
    },
    {
      answer: [
        "It can be worse than not agreeing. Oxford University's theology professor, Rev Andrew Linzey, stood out from his fellow preachers by drawing attention to the plight of animals although his and other denominations are largely indifferent to animals. He said of his four years with the RSPCA council: 'I have not been to more acrimonious meetings where more hatred was shown. I saw more vilification of individuals and more back-scene manoeuvering than in any other human societal group I've belonged to - including the church.'",
        "Yes, often we can't agree amongst ourselves. Should we, for instance, destroy experimental laboratories? Should we break into battery cage places to rescue hens? We'll never have agreement here. Those in favour of these actions say they gain maximum publicity and alert people who would otherwise not know, or too easily avoid discovering, what's behind the scenes. Those against say if we oppose violence towards animals we ourselves should be non-violent.",
        "Vegans and lacto-ovo vegetarians have had and will continue to have 'frank exchanges of views' regarding eggs and dairy products. Even amongst vegans, we disagree about such things as purchasing foods labelled 'may contain traces of dairy products' and how to use our limited funds. Should our funds be spent on preventing evil or promoting good?",
        "We disagree, often rudely, because we are human and don't meet the standards we should. But we are not alone. Do your football club members have disagreements? What about your workplace staff meeting? Or your local council?",
        "Disagreement can be good. It helps us see other, better ideas and methods. One of us isn't the repository of all wisdom.",
        "Even so, like other groups, we 'animal trendies' have to learn how to disagree without being disagreeable."
      ],
      source: "But you kill ants",
      key: "You animal trendies can't even agree among yourselves."
    },
    {
      answer: [
        "Why couldn't you? It's not because you can't get enough food or be as healthy without meat. It's not because you couldn't afford the alternative foods. Embarrassment isn't a problem because vegetarianism has become trendy. What's left? Taste. We ignore animal suffering, torture and death to satisfy our taste preferences. We choose not to think of their suffering, but that doesn't make it go away.",
        "When did you last dine in a vegetarian restaurant? When did you try going without meat for a month, or a week? Or have you just pictured a vegetarian meal as what's on your plate minus meat? There are many substitutes available: hamburgers, pies, steaks, sausages, hot dogs, schnitzels and chicken from supermarket freezer and health food sections or health food stores. Do what you've never done before and sample vegetarian or vegan restaurants. You'll be surprised at how tasty and how varied non-meat cuisine can be. Or try any of the vegetarian and vegan recipes on the internet. Go without meat for a month. That's a morsel of a life span to see how well you cope and feel at the end.",
        "You can live without meat. Expect to live longer and healthier without it. Your choice might be living without meat or living with cancer, heart disease or a kidney dialysis machine. Change now with a free vegetarian starter kit."
      ],
      source: "But you kill ants",
      key: "I couldn't give up meat. I couldn't live without it."
    },
    {
      answer: [
        "Decades ago it might have been difficult, but now substitutes are readily available.",
        "There are many plain and flavoured soy milks as well as the less common rice, almond and oat milks. Put a little of any of these, but especially soy milk, in your dairy milk and gradually increase the substitute percentage. The change will be so slight you won't notice it. Your health might well notice it, though.",
        "Some rice, almond and oat milks are calcium-boosted. Unlike fortified soy milks, they have no vitamin B12, but nor do they involve cruelty.",
        "You won't have to give up all the foods containing milk:",
        "Recipes",
        "Whenever a recipe calls for milk, just use soy milk, or experiment with rice and nut-based milks.",
        "Butter",
        "Butter is off your list, but margarine isn't.",
        "Cheese",
        "Sheese is non-dairy, but you'd fail a blindfold difference test.",
        "Ice cream",
        "Non-dairy ice creams abound, particularly in supermarkets. You can choose from soy- and fruit-based varieties.",
        "Chocolate",
        "Milk-free chocolates are plentiful. You can even buy vegan Easter eggs.",
        "Cakes",
        "If cakes are your addiction, buy a whole book devoted to milk- and egg-free cakes. Samples are Apricot Christmas Crackle, Orange Almond Cake, Muffins and Super Snowballs."
      ],
      source: "But you kill ants",
      key: "I couldn't give up milk."
    },
    {
      answer: [
        "If you were embarrassed, that would be a small price to pay to reduce animal suffering. But how much would you suffer?",
        "You may be embarrassed initially, but only briefly. Soon you would be proud. Proud to confirm no animal suffered or died for your tastes. Proud your body is free of meat fats and poisons. Proud your health and fitness have improved.",
        "You wouldn't be alone; 600 million vegetarians worldwide will make sure of that. Vegetarianism has become trendy.",
        "In addition, many people gleefully announce they're vegetarian when they're not. Of 10 million such Americans, more than half eat meat, fowl or fish! If 5 million people claim to be what they're not, it can't be too embarrassing. Nor is it when 25 per cent of U.S. adolescents describe vegetarianism as 'cool'; salad eaters are rated more moral, virtuous and considerate than steak eaters; and the higher a child's IQ, the greater the chances of becoming vegetarian.",
        "The increase in the number and acceptance of genuine vegetarians follows a greater awareness of nutrition and obesity, and meat production. This may be the start of an era when it will be embarrassing to admit that you do eat meat.",
        "A plethora of famous vegetarians shows you needn't be embarrassed. A list of history's top 100 influential people has nine vegetarians. Its compiler believes Leonardo da Vinci (artist, inventor, astronomer, engineer, philosopher, scientist, vegetarian) might be the most talented ever. Albert Einstein was Time's 'man of the millennium'. Herodotus and Persia's King Cyrus the Great are two more. You're in good company."
      ],
      source: "But you kill ants",
      key: "I'd be embarrassed if I were a vegetarian."
    },
    {
      answer: [
        "In what ways would it be unfair?",
        "Would they be embarrassed about having to admit they had a vegetarian in the family? Then tell them about all the famous and admired people who have beaten you to the change.",
        "Would it be unfair to give them the extra chores of preparing separate meals for you? Then prepare your own, or prepare some of your meals for them. They might be delighted to discover how delicious vegetarian meals can be and how they're just as easy to prepare.",
        "It might be unfair to them if you were heavily addicted to smoking, drinking or gambling. They would potentially have a lot more to lose then.",
        "Rather than being unfair, aren't you giving your family the opportunity to gain one of the most valuable assets any of us can have, namely good health? If your example leads them to adopt the same diet, you might well be sparing them heart attack, stroke, cancer, dementia or other ailments."
      ],
      source: "But you kill ants",
      key: "It wouldn't be fair to my family if I became a vegetarian."
    },
    {
      answer: [
        "A vegetarian is 'one who abstains from animals for food, especially that obtained by killing animals, and whose diet includes roots, green vegetables, cereals, seeds, fruit and nuts, with or without eggs and dairy products.' A vegan is 'a person eating no animals or animal products; strict vegetarian,'1 to which we can add wearing no animal products. Nothing about cigarettes or beer there.",
        "Those who are vegetarian for health may choose not to smoke or drink and the religious vegetarians may do so under religious edicts. This is in addition to vegetarianism, not because of it. A commitment to vegetarianism no more prevents you from smoking or consuming alcohol than it stops you going surfing or watching the evening news.",
        "It's incongruous when those who choose a vegetarian diet for health continue smoking. Environmental vegetarians also might wish to avoid pollution from tobacco smoke. But ethical vegetarians please themselves whether they smoke, just as the rest of the population does.",
        "Some of the religious sector of vegetarians and, to a lesser extent, the health sector, avoid alcohol as well as meat. The remaining vegetarians are indistinguishable from meat-eaters in consuming alcoholic drinks.",
        "That leaves steaks and hamburgers. Health food stores and supermarkets carry vegetarian substitutes for steaks and hamburgers, as well as for sausages, chicken, hot dogs, pies, etc. Vegetarian and vegan meals, though, don't depend solely, or even primarily, on substitutes. Any meat-eater who doubts the taste and enjoyment available to non-meat-eaters need only try a vegetarian restaurant or internet cooking site.",
        "Vegetarians make a profit from abstaining from steaks and hamburgers, and, if they wish, cigarettes and beer. They then have more funds for whatever else might turn them on."
      ],
      source: "But you kill ants",
      key:
        "What a dull life you vegetarians have. No steaks, no hamburgers, no cigarettes, no beer."
    },
    {
      answer: [
        "Is that what you would say to vegans Martina Navratilova, Bill Clinton, Scott Jurek or Joaquin Phoenix?",
        "What's necessary to 'get a life'? Education, job security, parties, gambling, sport, iPad, car, sex, family, friends, travel, alcohol? Which do you suggest you 'get' but vegans can't?",
        "Vegans choose not to consume animal products, but there are so many plant-based substitutes now that this isn't a concern. We take no part in horse-racing, but can spend our money in other gambling forms. The 'sports' of hunting and fishing are of no interest to us. Do you feel we don't have a life simply because our food doesn't taste exactly the same as yours, that we don't get excited over which horse wins and we aren't involved in shooting and fishing? Do you really believe that those few choices of ours are all that make the difference between getting and not getting a life?",
        "Economists David Blanchflower, Andrew Oswald and Sarah Stewart-Brown found in a survey of 80,000+ people in October 2012 that we're the ones who get a life. They showed 'simple evidence consistent with the existence of a link between the consumption of fruit and vegetables and high well-being. In cross-sectional data, happiness and mental health rise in an approximately dose-response way with the number of daily portions of fruit and vegetables'.",
        "'Get a life' is a term that anyone can use against those with different interests or practices. It's in the same class as words used to denigrate research when facts against it are lacking, ie 'the research is dated/flawed/selective/questioned.",
        "We've been fortunate to 'get a life'. I recommend you add 'keep a life' and 'save a life'. Keep your life by eating plant-based rather than animal foods to improve your chances of happiness and minimise risk of life-destroying diseases. Save a life of an animal every time you do."
      ],
      source: "But you kill ants",
      key: "Get a life."
    },
    {
      answer: [
        "We also see members of political parties, religious groups and sports clubs give up their allegiances and find fulfilment elsewhere. That doesn't necessarily prove any fault of the group they left.",
        "What surprises isn't 'so many' give up their vegetarian commitment but so many retain it. This is despite our regularly being told how embarrassing being a vegetarian is, how difficult it is to do without meat and milk and what a dull life we have.",
        "A significant number of religious organisations have a strong hold on their adherents through threats of dire consequences of leaving them, including losing eternal life or suffering eternal damnation. There's no such coercion to remain vegetarian. So how is it we see vegetarians keep their commitment for decades or life? While people maintain their concern for the suffering of non-human species they're unlikely to abandon veganism. And vegans and vegetarians who value the health those lifestyles have afforded them think twice before going 'back to being normal'. With 60 per cent of Australians overweight and one in four obese (one in three Americans), being 'normal' means excessive weight and increased chance of heart disease, diabetes, high blood pressure, dementia and cancer. Abnormality has its advantages."
      ],
      source: "But you kill ants",
      key:
        "You can tell being a vegetarian is no good because so many give it up and go back to being normal."
    },
    {
      answer: [
        "Your jibe doubtless was not intended to be taken seriously and we can enjoy laughing at ourselves. Nevertheless, we can respond to the fun with fact. Surveys carried out on large numbers of vegetarians show they can expect to live approximately seven years longer than the general population. Similarly, we know that their average health is far better and hence the majority of vegetarians look younger than those of their age.",
        "One of the reasons for this is that anti-oxidants help to delay the ageing process, and anti-oxidants are prevalent in vegetarian foods. The principal research scientist for Sanitarium foods records 'almost all junk food is made from foods low in anti-oxidants. Eating a junk-food meal deprives us of the anti-ageing, disease-preventing anti-oxidants we would be getting from a wholesome meal of whole grains, legumes, nuts and vegetables.'"
      ],
      source: "But you kill ants",
      key: "Vegetarians don't live longer, they just look older."
    },
    {
      answer: [
        "Your question has an inherent problem for you, namely 'meat' is a construct. Nothing is 'made out of meat.' Putting that to one side, though, I ask if humans weren't meant to be eaten, then why are they 'made out of meat'? There are plenty of similarities between our flesh and that of animals. We wouldn't use that fact to justify cannibalism, would we?",
        "Nevertheless, you asked your question as a joke and we join in the fun by asking you three questions.",
        "Do you know why people tell stupid vegetarian jokes? It's so meat-eaters can understand them.",
        "What's the best way to keep milk fresh? Leave it in the cow.",
        "How many meat-eaters does it take to change a light bulb? Answer: none. They'd rather stay in the dark.",
        "Unfortunately, that answer to the last one isn't just a joke. It's also a fact. Most meat-eaters studiously avoid acquiring the slightest knowledge of the animal suffering that precedes their food selection."
      ],
      source: "But you kill ants",
      key:
        "If animals weren't meant to be eaten, why are they made out of meat?"
    },
    {
      answer: [
        "Thank you for that enlightenment. If you would like to rubbish us further, two other anagrams formed by re-arranging the letters in 'vegetarianism' are vitamin grease and Meat? I vegan, sir.",
        "Or, from 'vegetarian', there is irate vegan.",
        "Now it's our turn to make anagrams of your food connections and, like your anagram, these aren't intended to be taken seriously.",
        "Battery hens = Try ban these",
        "Roast beef = Eat for BSE",
        "McDonald's Restaurants = Uncle Sam's standard rot or, as we'd advise, Mustn't scorn salad, dear",
        "If your appetite for nonsense isn't satisfied, try an endless supply of cartoons featuring vegetarians and meat-eaters mocking each other at vegetus.org/vegtoon/vegtoon.html."
      ],
      source: "But you kill ants",
      key: "An anagram of 'vegetarianism' is: 'Imagine! Starve!'"
    },
    {
      answer: [
        "The validity and quality of objections are the significant factors. Without those, quantity has little merit.",
        "Professor Emeritus Michael Allen Fox records that 'the greatest philosophies of the past have been those that have sparked the greatest controversy. St. Thomas Aquinas alone spent much of his life writing Summa Theologiae, which contained hundreds of objections to Christian thought and his replies. Rene Descartes published a whole book of objections and replies to his Meditations on First Philosophy ? probably, with Plato's Republic, the most widely read and studied text in Western philosophy.'",
        "There's more merit in objections to vegetarians than to vegetarianism. We often fail in our standards and fail to adequately support and defend the unfortunate species that need protection. Who are more deserving of condemnation: those who are well aware of cruelty in the animal industries and refrain from consuming animal products but do little else to ease animal suffering, or those who eat meat but are unaware of the suffering they're causing?",
        "There's something wrong with the philosophers, not the philosophy."
      ],
      source: "But you kill ants",
      key:
        "There must be something wrong with a philosophy that has so many objections to it."
    }
  ]; */
}
