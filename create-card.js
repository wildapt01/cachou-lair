const content = [
  {
    title: "WHO I AM",
    pixUrl: "assets/cachou-7mois.png",
    text:
      "My name is Cachou and I am a male Siberian Neva Masquerade. It does not look like it because I am a big cat, as my breed is known for, but I am still a kitten, just 9 months old. Right now, I weigh a bit more than 14 lbs! \n \n My main servant (cats do not have owners, they have servants. Owners are against the Cat Code of Conduct!) was kind enough to build this site for me. I can share what I like, my projects, some more information about me and my breed. This is fun!"
  },
  {
    title: "MORE ABOUT SIBERIANS",
    pixUrl: "assets/three-cats.png",
    text:
      "We are a very old breed, sturdy and powerful. We reach our full adult size at 3 to 5 years old and we can weigh in at 20 to 25 lbs. Some say we are the base breed for all long-hair cats. Great jumpers, we are also very good hunters. Our personality is on the mellow side and we are truly chill cats. We love to play and be around our servants, just in case they get lost and need to be reminded of our presence. \n\n To know more, click on this Wikipedia link."
  },
  {
    title: "NEVA MASQUERADE?",
    pixUrl: "assets/neva-masquerade.png",
    text:
      "Though Siberians are usually tabbies or tortoise, my color is labeled as seal point. It means that at some point Siamese genes were introduced in our genetic make-up. My coloration is sometimes considered as a distinct Siberian breed."
  },
  {
    title: "WHAT I LIKE",
    pixUrl: "assets/cachou-play.png",
    text:
      "PLAYING - Like all cats, fluffy moving things are made for us to chase. What a blast! \n\n EATING - I am really growing up and I need good meals. \n\n BEING PET - There is almost nothing better than a nice rub behind the ears!"
  },
  {
    title: "SLEEPING",
    pixUrl: "assets/cachou-sleep.png",
    text:
      "Kittens my age usually sleep 18 to 20 hours a day!\n\n I even have my favorite purse, though it is getting a bit tight to fit in."
  },
  {
    title: "PROJECTS",
    pixUrl: "assets/blue-jay.png",
    text:
      "BIRDS - There is a lot of nature around our place and those little fluttering zipping birds do look yummy on the other side of my window! I really, really want to hunt one of those blue jays I can see every day outside. \n\n EXPLORING - I am soooo curious, all those nooks and crannies in the house must be explored. I'd love to inspect all of them as well as jumping on all the ledges I can find."
  }
];

// interior frame for image
const createPixFrame = (url, id) => {
  const cardPix = document.createElement("img");

  cardPix.src = url;
  cardPix.alt = "Pictures";
  const cardPixContainer = document.createElement("div");

  cardPixContainer.className = "card-pix-container";
  cardPixContainer.appendChild(cardPix);
  document.querySelector(id).append(cardPixContainer);
};

// interior frame for title and text
const createContentFrame = (title, text, id) => {
  const cardTitle = document.createElement("div");
  const cardText = document.createElement("p");
  const cardContent = document.createElement("div");

  cardTitle.className = "card-title";
  cardTitle.innerText = title;
  cardText.innerText = text;
  cardContent.className = "card-content";
  cardContent.append(cardTitle, cardText);
  document.querySelector(id).append(cardContent);
};

const createCard = (obj, indx) => {
  // drawing card frame + animation
  const cardDiv = document.createElement("div");
  const classValue =
    (indx + 1) % 2 === 0 ? "card card-id-even" : "card card-id-odd";
  const aosValue = (indx + 1) % 2 === 0 ? "fade-right" : "fade-left";

  cardDiv.className = classValue;
  cardDiv.setAttribute("data-aos", aosValue);
  cardDiv.setAttribute("data-aos-duration", "1000");
  cardDiv.id = `card${indx}`;
  document.querySelector("main").appendChild(cardDiv);

  createPixFrame(obj.pixUrl, `#${cardDiv.id}`);

  createContentFrame(obj.title, obj.text, `#${cardDiv.id}`);
};

const loopCreate = arr => {
  for (let i = 0; i < arr.length; i++) {
    createCard(arr[i], i);
  }
};

loopCreate(content);
