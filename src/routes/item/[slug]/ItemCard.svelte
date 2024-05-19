<script lang="ts">
  const itemData: MenuItemType = {
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
      allergens: ["gluten", "dairy"],
    },
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
  };
</script>

<main>
  <img src={itemData.image_url} alt={itemData.name} />

  <div class="name-and-price">
    <h1>{itemData.name}</h1>
    <p>{itemData.price.toFixed(2)} €</p>
  </div>

  <p class="description">{itemData.description}</p>

  <div class="allergens-container">
    <p class="label">Allergens</p>
    <div>
      {#each itemData.nutrition.allergens as allergen}
        <div class="tag">{allergen}</div>
      {/each}
    </div>
  </div>

  <div class="nutrition-container">
    <p class="label">Nutrition</p>

    <table>
      <thead>
        <tr>
          <td>Calories</td>
          <td>Protein</td>
          <td>Carbs</td>
          <td>Fats</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{itemData.nutrition.calories} kcal</td>
          <td>{itemData.nutrition.protein} g</td>
          <td>{itemData.nutrition.carbs} g</td>
          <td>{itemData.nutrition.fats} g</td>
        </tr>
      </tbody>
    </table>
  </div>
</main>

<style lang="scss">
  @import "$lib/styleVariables.scss";

  main {
    background-color: #fff;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.125);

    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    padding: 1.5rem;
    width: calc(100% - 2rem); // Subtract padding (1rem on each side)
    margin: 3rem auto 4rem auto;
    border-radius: 0.5rem;

    img {
      width: 100%;
      height: 15rem;
      object-fit: cover;
      border-radius: 0.25rem;
      box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.125);
    }

    .name-and-price h1 {
      font-size: 1.25rem;
      font-weight: 600;
      color: $primary-text-color;
      margin-bottom: 0.5rem;
    }
    .name-and-price p {
      font-size: 1.125rem;
      font-weight: 600;
      color: $primary-color;
    }

    .description {
      font-size: 1rem;
      font-weight: 400;
      color: $secondary-text-color-dark;
      line-height: 150%;
    }

    .allergens-container,
    .nutrition-container {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .label {
      font-size: 0.875rem;
      font-weight: 600;
      color: $secondary-text-color-dark;
    }

    .allergens-container {
      div {
        display: flex;
        gap: 0.5rem;

        .tag {
          background-color: rgba($primary-color, 0.125);
          color: $primary-color;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.25rem 0.75rem;
          border-radius: 0.125rem;
        }
      }
    }

    .nutrition-container {
      table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: 0.5rem;

        td {
          padding: 0.75rem;
          font-size: 0.875rem;
        }

        thead tr {
          font-weight: 500;
          td {
            background-color: #f5f5f5;
            border-top: 1px solid #ccc;
          }

          td:first-child {
            border-radius: 0.5rem 0 0 0;
            border-left: 1px solid #ccc;
          }
          td:last-child {
            border-radius: 0 0.5rem 0 0;
            border-right: 1px solid #ccc;
          }
        }

        tbody tr {
          font-weight: 400;

          td {
            border-bottom: 1px solid #ccc;
          }

          td:first-child {
            border-radius: 0 0 0 0.5rem;
            border-left: 1px solid #ccc;
          }
          td:last-child {
            border-radius: 0 0 0.5rem 0;
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
</style>
