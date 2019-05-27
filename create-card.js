const content = [
  {
    title: "WHO I AM",
    pixUrl: "https://via.placeholder.com/200x200?text=Cachou+Image",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta"
  },
  {
    title: "My interests",
    pixUrl: "https://via.placeholder.com/200x200?text=Cachou+Image",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta"
  },
  {
    title: "Projects",
    pixUrl: "https://via.placeholder.com/200x200?text=Cachou+Image",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta"
  },

  {
    title: "Other Happy cats",
    pixUrl: "https://via.placeholder.com/200x200?text=Cachou+Image",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta"
  }
];

// interior frame for image
const createPixFrame = (url, id) => {
  const cardPix = document.createElement("img");
  const cardPixContainer = document.createElement("div");

  cardPix.src = url;
  cardPix.alt = "Pictures";
  cardPixContainer.className = "card-pix";
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
