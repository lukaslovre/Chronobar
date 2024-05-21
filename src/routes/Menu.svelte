<script lang="ts">
  import { slide } from "svelte/transition";
  import MenuItem from "./MenuItem.svelte";
  import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
  import { groupByField } from "$lib/utils";

  const structuredMenu: MenuItemType[] = [
    {
      id: "food101",
      name: "Rustic Italian Pizza",
      description:
        "Hand-tossed crust topped with homemade marinara sauce, mozzarella, fresh basil, and a selection of Italian meats.",
      category: "Food",
      sub_category: "Main Course",
      sub_sub_category: "Pizza",
      price: 12.5,
      currency: "€",
      nutrition: {
        calories: 800,
        protein: 35,
        carbs: 92,
        fats: 33,
      },
      allergens: ["gluten", "dairy"],
      popularity_score_out_of_5: 4.5,
      image_url: "https://picsum.photos/200",
      availability: "Available",
      last_updated: new Date("2024-05-17T00:00:00Z"),
      customization_options: [
        {
          name: "Extra Cheese",
          additional_cost: 2.0,
        },
        {
          name: "Gluten-Free Crust",
          additional_cost: 3.5,
        },
      ],
    },
    {
      id: "food102",
      name: "Classic Cheeseburger",
      description:
        "Grilled beef patty with cheddar cheese, lettuce, tomato, and our signature sauce on a sesame bun.",
      category: "Food",
      sub_category: "Main Course",
      sub_sub_category: "Burger",
      price: 8.0,
      currency: "€",
      nutrition: {
        calories: 600,
        protein: 30,
        carbs: 40,
        fats: 35,
      },
      allergens: ["gluten", "dairy"],
      popularity_score_out_of_5: 4.2,
      image_url: "https://picsum.photos/200",
      availability: "Available",
      last_updated: new Date("2024-05-17T00:00:00Z"),
      customization_options: [
        {
          name: "Add Bacon",
          additional_cost: 1.5,
        },
        {
          name: "Switch to Vegan Patty",
          additional_cost: 2.5,
        },
      ],
    },
    {
      id: "food103",
      name: "Berry Smoothie",
      description:
        "A refreshing blend of strawberries, blueberries, and raspberries with a touch of honey and yogurt.",
      category: "Drinks",
      sub_category: "Non-alcoholic",
      sub_sub_category: "Smoothie",
      price: 5.5,
      currency: "€",
      nutrition: {
        calories: 280,
        protein: 8,
        carbs: 50,
        fats: 3,
      },
      allergens: ["dairy"],
      popularity_score_out_of_5: 4.8,
      image_url: "https://picsum.photos/200",
      availability: "Available",
      last_updated: new Date("2024-05-17T00:00:00Z"),
      customization_options: [
        {
          name: "Add Protein Powder",
          additional_cost: 1.0,
        },
      ],
    },
    {
      id: "food104",
      name: "Margherita Pasta",
      description:
        "Penne pasta tossed in a rich tomato sauce garnished with fresh basil and mozzarella balls.",
      category: "Food",
      sub_category: "Main Course",
      sub_sub_category: "Pasta",
      price: 10.0,
      currency: "€",
      nutrition: {
        calories: 700,
        protein: 20,
        carbs: 90,
        fats: 22,
      },
      allergens: ["gluten", "dairy"],
      popularity_score_out_of_5: 4.0,
      image_url: "https://picsum.photos/200",
      availability: "Available",
      last_updated: new Date("2024-05-17T00:00:00Z"),
      customization_options: [
        {
          name: "Add Chicken",
          additional_cost: 3.0,
        },
      ],
    },
    {
      id: "food105",
      name: "French Onion Soup",
      description:
        "Rich beef broth with caramelized onions, topped with a toasted baguette and melted Gruyère cheese.",
      category: "Food",
      sub_category: "Starters",
      sub_sub_category: "Soup",
      price: 7.0,
      currency: "€",
      nutrition: {
        calories: 400,
        protein: 18,
        carbs: 36,
        fats: 22,
      },
      allergens: ["gluten", "dairy"],
      popularity_score_out_of_5: 4.3,
      image_url: "https://picsum.photos/200",
      availability: "Available",
      last_updated: new Date("2024-05-17T00:00:00Z"),
      customization_options: [
        {
          name: "Extra Cheese",
          additional_cost: 1.0,
        },
      ],
    },
  ];

  const slideTransitionProperties = {
    duration: 200,
  };

  let collapsedSections: string[] = [];

  function addSectionToCollapsedList(sectionName: string) {
    if (collapsedSections.includes(sectionName)) {
      collapsedSections = collapsedSections.filter((section) => section !== sectionName);
    } else {
      collapsedSections = [...collapsedSections, sectionName];
    }
  }
</script>

<section id="menu">
  <div class="category-depth-1">
    {#each Object.entries(groupByField(structuredMenu, "category")) as [category, items]}
      <!-- TODO: ovo pretvorit u komponentu i onda svaki ima lokalni isOpen property -->
      <div class="title-and-collapseButton">
        <h1># {category}</h1>
        <button
          on:click={() => {
            addSectionToCollapsedList(category);
          }}
        >
          <ChevronIcon rotation={collapsedSections.includes(category) ? 180 : 0} />
        </button>
      </div>
    {/each}
  </div>
</section>

<section id="menu">
  <div class="category-depth-1">
    {#each Object.entries(groupByField(structuredMenu, "category")) as [category, items]}
      <div class="title-and-collapseButton">
        <h1># {category}</h1>
        <button
          on:click={() => {
            addSectionToCollapsedList(category);
          }}
        >
          <ChevronIcon rotation={collapsedSections.includes(category) ? 180 : 0} />
        </button>
      </div>

      {#if !collapsedSections.includes(category)}
        <div class="category-depth-2" transition:slide={slideTransitionProperties}>
          {#each Object.entries(groupByField(items, "sub_category")) as [sub_category, sub_items]}
            <div class="title-and-collapseButton">
              <h2>## {sub_category}</h2>

              <button
                on:click={() => {
                  addSectionToCollapsedList(sub_category);
                }}
              >
                <ChevronIcon
                  rotation={collapsedSections.includes(sub_category) ? 180 : 0}
                />
              </button>
            </div>

            {#if !collapsedSections.includes(sub_category)}
              <div class="category-depth-3" transition:slide={slideTransitionProperties}>
                {#each Object.entries(groupByField(sub_items, "sub_sub_category")) as [sub_sub_category, sub_sub_items]}
                  <div class="title-and-collapseButton">
                    <h3>### {sub_sub_category}</h3>

                    <button
                      on:click={() => {
                        addSectionToCollapsedList(sub_sub_category);
                      }}
                    >
                      <ChevronIcon
                        rotation={collapsedSections.includes(sub_sub_category) ? 180 : 0}
                      />
                    </button>
                  </div>

                  {#if !collapsedSections.includes(sub_sub_category)}
                    <ul transition:slide={slideTransitionProperties}>
                      {#each sub_sub_items as item}
                        <MenuItem {item} />
                      {/each}
                    </ul>
                  {/if}
                {/each}
              </div>
            {/if}
          {/each}
        </div>
      {/if}
    {/each}
  </div>
</section>

<style lang="scss">
  @import "$lib/styleVariables.scss";

  #menu {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    h1,
    h2,
    h3 {
      color: $primary-color-text;
      text-transform: uppercase;
      font-weight: 500;
    }

    .category-depth-1,
    .category-depth-2,
    .category-depth-3 {
      display: flex;
      flex-direction: column;
    }

    .category-depth-1 {
      gap: 2.5rem;
    }

    .category-depth-2 {
      gap: 2rem;
    }

    .category-depth-3 {
      gap: 1rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 1rem;
    }
  }

  .title-and-collapseButton {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;

      padding: 0.5rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: rgba($primary-color-dark, 0.1);
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
