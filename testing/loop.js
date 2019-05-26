const content = [
  {
    title: "WHO I AM",
    pixUrl: "https://via.placeholder.com/200x200?text=Cachou+Image",
    text:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta<//p/> <p/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta<//p/>"
  },
  {
    title: "My interests",
    pixUrl: "https://via.placeholder.com/200x200?text=Cachou+Image",
    text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
    Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
    Praesent mauris. Fusce nec tellus sed augue semper porta</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
    Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
    Praesent mauris. Fusce nec tellus sed augue semper porta</p>`
  },
  {
    title: "Projects",
    pixUrl: "https://via.placeholder.com/200x200?text=Cachou+Image",
    text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
    Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
    Praesent mauris. Fusce nec tellus sed augue semper porta</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
    Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
    Praesent mauris. Fusce nec tellus sed augue semper porta</p>`
  },

  {
    title: "Other Happy cats",
    pixUrl: "https://via.placeholder.com/200x200?text=Cachou+Image",
    text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
    Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
    Praesent mauris. Fusce nec tellus sed augue semper porta</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
    Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
    Praesent mauris. Fusce nec tellus sed augue semper porta</p>`
  }
];

const createDivs = (obj, indx) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.id = `card${indx}`;
  document.querySelector("body").appendChild(cardDiv);

  const cardTitle = document.createElement("div");
  cardTitle.className = "card-title";
  cardTitle.innerText = `${obj.title}`;
  document.querySelector(`#${cardDiv.id}`).appendChild(cardTitle);

  const cardText = document.createElement("div");
  cardTitle.className = "card-text";
  cardTitle.innerText = `${obj.text}`;
  document.querySelector(`#${cardDiv.id}`).appendChild(cardText);
};

const loopTest = hashTable => {
  for (let i = 0; i < hashTable.length; i++) {
    const hash = hashTable[i];
    console.log(hash, i);
    createDivs(hash, i);
  }
};

loopTest(content);
