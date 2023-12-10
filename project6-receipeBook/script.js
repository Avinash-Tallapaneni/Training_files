const recipes = [
  {
    title: "Christmas pie",
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, finely chopped",
      "500g sausagemeat or skinned sausages",
      "100g fresh white breadcrumbs",
      "85g ready-to-eat dried apricots, chopped",
      "2 tsp chopped fresh or 1tsp dried thyme",
      "100g cranberries, fresh or frozen",
      "500g boneless, skinless chicken breasts",
      "500g pack ready-made shortcrust pastry",
      "beaten egg, to glaze",
    ],
    instructions:
      "Heat oven to 190C/fan 170C/gas 5. Heat 1 tbsp oil and the butter in a frying pan, then add the onion and fry for 5 mins until softened. Cool slightly. Tip the sausagemeat, lemon zest, breadcrumbs, apricots, chestnuts and thyme into a bowl. Add the onion and cranberries, and mix everything together with your hands, adding plenty of pepper and a little salt. Cut each chicken breast into three fillets lengthwise and season all over with salt and pepper. Heat the remaining oil in the frying pan, and fry the chicken fillets quickly until browned, about 6-8 mins. Roll out two-thirds of the pastry to line a 20-23cm springform or deep loose-based tart tin. Press in half the sausage mix and spread to level. Then add the chicken pieces in one layer and cover with the rest of the sausage. Press down lightly.Roll out the remaining pastry. Brush the edges of the pastry with beaten egg and cover with the pastry lid. Pinch the edges to seal, then trim. Brush the top of the pie with egg, then roll out the trimmings to make holly leaf shapes and berries. Decorate the pie and brush again with egg. Set the tin on a baking sheet and bake for 50-60 mins, then cool in the tin for 15 mins. Remove and leave to cool completely. Serve with a winter salad and pickles.",
  },
];

const displayReceipeCards = () => {
  let main = document.querySelector(".main");

  main.innerHTML = "";

  for (const value of recipes) {
    const { title, image, ingredients, instructions } = value;

    /*--- Create the div element with classname card to add all the card details---*/

    const card = document.createElement("div");
    card.classList.add("card");

    /*--- Create the p element and set title of the receipe---*/

    let recipeTitle = document.createElement("p");
    recipeTitle.classList.add("title");
    recipeTitle.textContent = title;

    /*--- Create the div element and append the image to it---*/
    let recipeimage = document.createElement("div");
    recipeimage.className = "image";

    /*--- Create the img element---*/
    const imgElement = document.createElement("img");

    /*---check if the image src is present. if undefind set the default image---*/
    imgElement.src = !image ? "https://placehold.co/300x150" : image;
    imgElement.alt = title;
    recipeimage.appendChild(imgElement);

    /* Create the div element with class ingredient and instruction
     and append the ingridient and instruction to it 
    */

    let recipeIngredients = document.createElement("div");
    recipeIngredients.classList.add("ingredients");
    let recipeInstructions = document.createElement("div");
    recipeInstructions.classList.add("instructions");

    /* Looping throught the ingredients/instructions array, creating list items
     and appending it to the ingredients/instructions div
    */

    const ingredientTitle = document.createElement("p");
    ingredientTitle.textContent = "Ingredient";
    recipeIngredients.appendChild(ingredientTitle);

    ingredients.map((ingredient) => {
      const ingredientList = document.createElement("li");
      ingredientList.textContent = ingredient;
      recipeIngredients.appendChild(ingredientList);
    });

    const instructionsTitle = document.createElement("p");
    instructionsTitle.textContent = "Instructions";
    recipeInstructions.appendChild(instructionsTitle);

    const instructionsList = document.createElement("li");
    instructionsList.textContent = instructions;
    recipeInstructions.appendChild(instructionsList);

    /*----Append the title, image, ingredients,instruction to the card-----*/

    card.appendChild(recipeTitle);
    card.appendChild(recipeimage);
    card.appendChild(recipeIngredients);
    card.appendChild(recipeInstructions);

    /*----Append the card to the main-----*/

    main.appendChild(card);
  }
};

displayReceipeCards();

/*--Modal styling-- */

const addIngredients = document.querySelector(".addIngredient");
const ingredientsFormInput = document.querySelector(".ingredientsForm");
const chipsContainer = document.querySelector(".chipsContainer");

/*--if clicked on add ingrients are added to the chip container-- */

addIngredients.addEventListener("click", () => {
  let ingredient = ingredientsFormInput.value;
  const chip = document.createElement("div");
  chip.classList.add("chip");

  chip.textContent = ingredient;
  chipsContainer.appendChild(chip);

  ingredientsFormInput.value = "";
});

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".cancel");

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

const submitReceipe = document.querySelector(".submit");

submitReceipe.addEventListener("click", (e) => {
  e.preventDefault();

  const receipeName = document.querySelector(".receipeName");
  const imageUrl = document.querySelector(".imageUrl");
  const instructionsForm = document.querySelector(".instructionsForm");
  const ingredientsChip = document.querySelectorAll(".chip");

  if (
    !receipeName.value ||
    !instructionsForm.value ||
    !Array.from(ingredientsChip).length
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  const title = receipeName.value;
  const image = imageUrl.value;
  const instructions = instructionsForm.value;
  let ingredients = Array.from(ingredientsChip).map((el) => el.textContent);

  /*--receipes are pushed to the receipe array as object-- */

  recipes.push({
    title: title,
    image: image,
    instructions: instructions,
    ingredients: ingredients,
  });

  receipeName.value = "";
  imageUrl.value = "";
  instructionsForm.value = "";
  chipsContainer.innerHTML = "";

  modal.classList.remove("active");
  displayReceipeCards();
});

const addReceipe = document.querySelector(".addReceipe");
addReceipe.addEventListener("click", () => {
  modal.classList.add("active");
});
