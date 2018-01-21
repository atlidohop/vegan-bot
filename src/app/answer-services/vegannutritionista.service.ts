import { Injectable } from '@angular/core';
import { Answer } from '../models/answer.interface';
import * as vegannutritionistaAnswers from '../../../bot-sources/vegannutritionista-answers.json';

@Injectable()
export class VeganNutritionistaService {
  public answers;
  constructor() {
    this.answers = vegannutritionistaAnswers;
  }
  /* public answers: Array<Answer> = [
    {
      source: "Vegan Nutritionista",
      key:
        "If everyone only ate vegetables and grains, would there be enough to eat?",
      answer: [
        "If everyone was a vegetarian, we would actually have more food to feed hungry people across the world. Most of the grain we produce is fed to animals, and if we stopped doing that, no one would be starving. The cattle population across the world eats enough calories to feed 8.7 billion people.",
        "Additionally, a great deal of the Earth is cleared to make room for animal farms. The natural ecosystem and makes it harder for certain plants to grow and thrive. If we stopped clearing land for animal grazing, there would be more land for crops to feed humans."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key:
        "If we all stop eating animals, they will overrun the Earth. Isn't it better to eat them than let them just die and go to waste?",
      answer: [
        'It is true that if we stopped eating all animals today, there would be billions of farm animals who would "go to waste." But there\'s no way that would ever happen. The likely scenario is that we would gradually decrease the amount of meat we eat, and factory farmers would gradually decrease the number of animals they bred for food.',
        "Eventually there would be no more farm animals than any other species on Earth and the ecosystem would return to a natural balance. There are numerous reports that show the measurable difference it would make if the inhabitants of Earth would eat a vegetarian diet."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Animals kill other animals for food, so why shouldn’t we?",
      answer: [
        "Animals kill to survive, and humans simply don't need to do so because we have modern resources that allow us to avoid animal products and still survive.",
        "If we were to imagine ourselves back in the wild, without any of the modern world, we wouldn't be part of the same food chain with chickens and cows. It's more likely we would be eating vegetables, fruits, grains, and the occasional small animal like squirrels and other rodents.",
        "Besides, if we are going to ask this anti-vegan question, shouldn't we then make ourselves use the same methods for killing animals as other animals? That would mean we would need to hide behind bushes and hunt the animals, slaughter them ourselves, and process them. Our food system has nothing to do with nature's original purpose.",
        "https://www.vegan-nutritionista.com/anti-vegan.html"
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Aren't humans natural carnivores?",
      answer: [
        "Human bodies are very different from the bodies of carnivores. Carnivores have short digestive tracts, sharp claws, and curved fangs; humans have long digestive tracts for vegetable matter, flat thin nails made for protection from dings, and flat teeth for grinding at plant protein. Even human canine teeth are far flatter than those on carnivores.",
        "https://www.vegan-nutritionista.com/humans-are-herbivores.html"
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "What if I just eat sustainable meat/fish/dairy, isn't that better?",
      answer: [
        "I simply do not believe in harming animals just to satisfy my tastes, so for most vegans, the answer is a flat no. If you mean from the perspective of damage to the environment, the answer actually still no. Factory farming devastates fertile lands to clear space to grow GMO crops to feed farm animals and emits overwhelming amounts of methane gas. Animal agriculture is the leading cause of global climate change, as stated by the United Nations.",
        'However, while "sustainable" farming uses more appropriate farming practices, there is simply not enough space on the planet to allow animals to graze freely and still fill the current demand for animal products. The documentary Cowspiracy covers this concept in depth and I highly recommend seeing it on Netflix. The only true sustainable option is for us to stop eating animal products now. It would make a vast difference for the environment.'
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Isn't being a vegan expensive?",
      answer: [
        "Vegan food can be as pricey as you choose to make it, just like with non-vegan food. Mock meats and cheeses are often expensive, but the standard diet of grains, vegetables, beans, and fruits is pretty cheap. Most beans and grains can be found in the bulk section, and fruits and vegetables can be bought at farmers' markets or even grown by individuals."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Isn't it hard to become vegan?",
      answer: [
        "Some people find it difficult to become vegan, and others find it simple. The easiest thing to do is follow along with what you believe, and don't force yourself to make changes faster than you feel comfortable. If you try to abstain from something just because you know you should, but you are not truly ready to do so, you are more likely to bounce back and start eating meat again.",
        "https://www.vegan-nutritionista.com/vegan-diet.html",
        "Even if you cut back on your meat and dairy consumption just a little to start (i.e. Meatless Mondays), you are making progress and are helping yourself and the world around you. When you feel you are ready, maybe you can add a Tofu Tuesday or a Soybean Sunday."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Aren't you hurting plants by cutting them down?",
      answer: [
        "Plants do not have nervous systems or anything structural that perceives pain. Additionally more plants are cut down to feed farm animals than to feed humans, so by being a vegan, you are still killing fewer plants than as a meat-eater."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "If you were stranded on a desert island, would you eat animals?",
      answer: [
        "It's hard to say, because in a survival situation we might do anything to save ourselves, but this is more of a hypothetical question than one that deserves an answer. Most of us are not in this situation, and most of us have the resources to be able to make choices that don't involve eating animals."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "I heard that vegetarians don't eat enough protein, is that true?",
      answer: [
        "No, vegetarians do not have trouble getting enough protein. Whole grains, vegetables, and beans provide more than enough protein to stay healthy. Most people actually eat too much protein, and when the body has more than it needs, it excretes the rest in our urine. Animal protein also leads to increased risk for several llnesses.",
        "https://www.vegan-nutritionista.com/vegan-protein.html",
        "https://www.vegan-nutritionista.com/animal-protein.html"
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Is a vegan diet healthy?",
      answer: [
        'Simply eating vegan is not going to ensure you are eating healthy food because there is so much junk food available nowadays that has no animal products in it. However, if you eat a healthy vegan diet, you are undoubtedly going to be healthier than a person eating a "regular" diet.',
        "A healthy vegan diet is based around whole grains, vegetables, fruits, and legumes. This diet is low in fat, has no cholesterol, and provides plenty of protein, calcium, fiber, and other nutrients for optimal nutrition. Healthy vegan diets are great for everyone; including children, infants, pregnant and breast-feeding women, adults, and senior citizens.",
        "https://www.vegan-nutritionista.com/vegan-food-pyramid.html",
        "Many studies show that vegans have lower rates of diseases such as high blood cholesterol, type 2 diabetes, cancers, and heart disease.",
        "https://www.vegan-nutritionista.com/prevent-heart-disease.html"
      ]
    },
    {
      source: "Vegan Nutritionista",
      key:
        "Seafood is high in fatty acids and low in fat, so it's healthy, right?",
      answer: [
        "Much of the fish we find in the grocery store is factory farmed, which means they are given antibiotics and growth hormones with a highly unnatural corn diet. Because of that, they are not actually healthy. Many sea creatures also have super high cholesterol levels. And, any toxins in the water get passed onto humans, so they are often very high in chemicals."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key:
        "Don't farmers treat their animals well so they'll produce more milk or eggs?",
      answer: [
        "Contrary to popular belief, animals are not raised on old-fashioned farms where they walk around on grassy fields, make babies when they are ready, and crow to wake up the farmers. Modern farms (commonly called factory farms) are made to process animals as quickly, cheaply, and efficiently as possible. Animals are never given medical care, are often genetically engineered, and are fed hormones, antibiotics, and medicine. They are not treated well, by any stretch of the imagination.",
        "https://www.vegan-nutritionista.com/factory-farms.html#factory"
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Doesn't it help the cows to be milked?",
      answer: [
        "Cows produce milk in the same way that humans do- when they have a baby. In nature, the calf would drink his mother's milk and then she would no longer have a supply of milk. On factory farms, dairy cows are artificially inseminated so that they constantly have milk. They also have their calf taken away from them immediately after birth and are made into either veal cows (males) or future dairy cows (females.)",
        "https://www.vegan-nutritionista.com/factory-farms.html#cows",
        "Additionally, dairy cows are given growth hormones so that they produce much more milk than they would have in nature. Those hormones cause their udders to be engorged with milk, which leads to infection and intense pain for the cow. When her udders are attached to the milking machines, the udders grow external infections, fill with cuts and puss, and hurt her.",
        "Once they are no longer able to produce a large amount of milk, they are slaughtered. Needless to say, milking a cow does hurt the cow."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key:
        "It's natural for chickens to lay eggs, so why is it bad to eat eggs?",
      answer: [
        "The egg laying hens go through some of the worst abuse of any factory-farmed animal. These hens are packed into cages with numerous other hens, and those cages are stacked several layers high. As the hens on the top defecate, the poop falls into the cages below. The hens are unable to stretch their wings or legs, and often develop severe bone disorders. When the chickens die, they are often left in the cages where the other hens trample them as they begin to grow around the wires.",
        "https://www.vegan-nutritionista.com/factory-farms.html#chickens",
        "Of the eggs allowed to hatch, the females become laying hens. The males are useless, so they thrown into a trash heap where they suffocate or are crushed, or they are ground up alive."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Can fish feel pain?",
      answer: [
        "Fish have brains and nervous systems just like other birds and mammals, so they can feel pain. Their mouths and tongues are used like mammals use their hands. Research also shows that fish have a sense of fear, showing bursts of adrenaline and breathing rates when they are threatened.",
        "https://www.vegan-nutritionista.com/factory-farms.html#fish"
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Aren't free-range farms good enough?",
      answer: [
        'The term "free-range" has been badly misused in the food industry. Many people believe they are ensuring that the animals they are eating have lived a fufilled life, when in fact their life is no different than any other farm animal.',
        "https://www.vegan-nutritionista.com/factory-farms.html#free-range",
        'A product can be labeled as "cage-free" or "free-range" if the animal had access to the outside, no matter how unrealistic that access is for the animals. In most cases, the access is a tiny door to a tiny yard that the animals never use because their feed is located inside the barn.',
        "There are many ways that farmers get around using terms that make people feel more comfortable with their support for the farming industry. The only truly safe way to avoid supporting the factory farming industry is by avoiding eating animals at all."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Aren't kosher animals treated better?",
      answer: [
        "Kosher slaughter rules say that blood is not kosher, so it must be removed from the animal before slaughter. Animals have their necks cut so they bleed to death before they are slaughtered. However, with the strenuous demand on slaughterhouses in the modern era, often the animals are cut improperly, are still alive when slaughtered, or a number of other awful scenarios. There is a popular DVD about a huge investigation of a Kosher slaughterhouse in 2004 called 'If This Is Kosher'.",
        "http://www.amazon.com/gp/product/B000ICLWWA?ie=UTF8&tag=vegannutrit-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=B000ICLWWA"
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "The Bible says we should eat meat.",
      answer: [
        "There are thousands of different perspectives on the interpretation of the Bible, but nowhere does it say that humans are require to eat animals. In fact, a common view is that God put Adam and Eve in Eden to represent how he wanted humans to behave, and they ate no animal products while there."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Do you care more about animal suffering than human suffering?",
      answer: [
        "Human suffering and animal suffering are actually related more than one would assume. You cannot be concerned about one without concern about the other.",
        "Much worldwide human suffering is linked to humans not having access to vital resources like food, water, and shelter. The animal industry leeches these resources from humans, especially food and water. By spending so much money and resources on feeding and watering animals for human consumption (mostly in Western countries), we are stealing it from people who need it most.",
        "If you're reading this article, you probably have access to food, water, and shelter. You probably are wealthy enough that you can get a fast food hamburger anytime you want, or pick up a piece of meat at the grocery store, or even visit a steakhouse on occasion. This freedom to eat whatever we please is enslaving the non-starving humans with Western style diets that are slowly killing them.",
        "https://www.vegan-nutritionista.com/standard-american-diet.html",
        "And lastly, in Animal Liberation, Peter Singer makes the case that assuming humans are of more importance than animals is speciesm, a prejudice toward one animal over another. In much the same vein as a racist or sexist, a speciest believes that a human's suffering is more significant than another species' suffering, and disregards the fact that \"pain is pain.\"",
        "http://www.amazon.com/gp/product/0060011572?ie=UTF8&tag=vegannutrit-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0060011572"
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Why should I care about hurting animals for food?",
      answer: [
        "Most people would feel bad upon seeing a domestic animal like a cat or dog suffer, and would never consider harming one themselves, but they don't stop to think twice about eating an animal. Farm animals feel pain and emotional stress the same as humans, and certainly as much as domesticated pets. Their suffering is no less intense just because they don't speak English or walk on their hind legs or live in our house with us.",
        "As Peter Singer covers in Animal Liberation, just because we enjoy the taste of some animals doesn't mean that we should be freely allowed to eat them whenever we please. Humans aren't free to exercise whichever desire they feel at any particular moment they please, and food choices should be the same.",
        "http://www.amazon.com/gp/product/0060011572?ie=UTF8&tag=vegannutrit-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0060011572",
        "Perhaps you're against hunting and animal abuse, but you're not a vegetarian. Even if you didn't physically kill the animal yourself, you paid for the killing when you bought the animal product at the store."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Why should animals have rights?",
      answer: [
        'People who believe in "animal rights" believe that all animals have worth, regardless of what need they can serve for humans. It\'s the belief that every being has the right to life without suffering or pain.'
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "What is animal welfare?",
      answer: [
        "When someone expresses concern for animal welfare, they mean that they care about the physical and psychological well-being of sentient beings, whether those beings can speak or not."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Why don't vegans eat honey?",
      answer: [
        "Some vegan eat honey, and others don't, largely because they disagree about whether or not insects can feel pain. Some vegans believe that because honey comes from insects, it is not right for humans to take it and use it for consumption.",
        'There are many different definitionsfor the word "vegan," but even if someone eats honey, they are still making a huge impact by avoiding all other animal products.',
        "https://www.vegan-nutritionista.com/what-is-a-vegan.html"
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "Is sugar vegan?",
      answer: [
        "While there are no animal products in refined sugars, they are sometimes processed with bone char (from animals), and so some people do not consider it to be vegan. There are many alternatives to refined sugar that are available at most grocery stores."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key:
        "I love the flavor of meat/cheese/ice cream and I don't think I could give it up.",
      answer: [
        "All vegans remember a time when we thought it would be impossible to give up one part of our diet. I had the hardest time with cheese because I loved the flavor of it so much. What I found is that my taste buds actually changed over time.",
        "While it was hard at first, overall it was much easier than I thought it would be to give it up. There are some really good substitutes for our favorite foods in the vegan world, and when you are just starting out, it's a good idea to transition with foods that are familiar to you.",
        "https://www.vegan-nutritionista.com/vegan-foods.html",
        "Plus, it's better to be partially-there and occasionally eat some meat or dairy than to completely give up on the idea because you know it will be hard."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "What are hidden animal ingredients?",
      answer: [
        "There are resources you can use to figure out if products are made or processed with anything that comes from animals. Sometimes taking such a strict approach can make a vegan diet very difficult to maintain. In my opinion, it's better to focus on the obvious animal ingredients, and draw the line at doing the best you can, rather than force yourself to uphold a very difficult standard."
      ]
    },
    {
      source: "Vegan Nutritionista",
      key: "How can you find nice shoes that aren't made from leather?",
      answer: [
        "There are so many resources for finding non-leather accessories nowadays, so you don't have to wear beige hemp clothes and shoes to live a vegan lifestyle.",
        "https://www.vegan-nutritionista.com/vegan-christmas-presents.html"
      ]
    },
    {
      source: "Vegan Nutritionista",
      key:
        "Is it possible to find household products that aren't tested on animals in everyday stores?",
      answer: [
        "Yes. Many large companies still do unnecessary cosmetic testing on animals, but many have also ended the practice. Most animal-friendly companies list it on their labels. Also, if you have a Whole Foods near you, they never sell products that are tested on animals, and they have a huge selection."
      ]
    }
  ]; */
}
