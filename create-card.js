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

const createCard = (obj, indx) => {
  const cardDiv = document.createElement("div");
  const classValue =
    (indx + 1) % 2 === 0 ? "card card-id-even" : "card card-id-odd";
  cardDiv.className = classValue;
  const aosValue = (indx + 1) % 2 === 0 ? "fade-right" : "fade-left";
  cardDiv.setAttribute("data-aos", aosValue);
  cardDiv.setAttribute("data-aos-duration", "1000");
  cardDiv.id = `card${indx}`;
  document.querySelector("main").appendChild(cardDiv);

  const cardPix = document.createElement("img");
  cardPix.src = obj.pixUrl;
  cardPix.alt = "Pictures";
  const cardPixContainer = document.createElement("div");
  cardPixContainer.className = "card-pix";
  cardPixContainer.appendChild(cardPix);
  document.querySelector(`#${cardDiv.id}`).append(cardPixContainer);

  const cardTitle = document.createElement("div");
  cardTitle.className = "card-title";
  cardTitle.innerText = `${obj.title}`;
  const cardText = document.createElement("p");
  cardText.innerText = obj.text;
  const cardContent = document.createElement("div");
  cardContent.className = "card-content";
  cardContent.append(cardTitle, cardText);
  document.querySelector(`#${cardDiv.id}`).append(cardContent);
  return;
};

const loopCreate = arr => {
  for (let i = 0; i < arr.length; i++) {
    createCard(arr[i], i);
  }
  return;
};

loopCreate(content);
