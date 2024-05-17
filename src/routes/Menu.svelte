<script lang="ts">
  import MenuCategory from "./MenuCategory.svelte";

  const structuredMenu = [
    {
      category: "Food",
      childrenCategories: [
        {
          category: "Appetizers",
          items: [
            { name: "Bruschetta", price: "5.00" },
            { name: "Calamari", price: "7.00" },
            { name: "Garlic Bread", price: "3.00" },
          ],
        },
        {
          category: "Main Course",
          items: [
            { name: "Spaghetti Carbonara", price: "10.00" },
            { name: "Lasagna", price: "12.00" },
            { name: "Pizza Margherita", price: "8.00" },
          ],
        },
        {
          category: "Desserts",
          items: [
            { name: "Tiramisu", price: "5.00" },
            { name: "Panna Cotta", price: "4.00" },
            { name: "Gelato", price: "3.00" },
          ],
        },
      ],
    },
    {
      category: "Drinks",
      childrenCategories: [
        {
          category: "Non-Alcoholic",
          items: [
            { name: "Coca-Cola", price: "2.00" },
            { name: "Orange Juice", price: "3.00" },
            { name: "Lemonade", price: "3.00" },
          ],
        },
        {
          category: "Alcoholic",
          items: [
            { name: "Beer", price: "4.00" },
            { name: "Wine", price: "5.00" },
            { name: "Cocktail", price: "7.00" },
          ],
        },
      ],
    },
  ];
</script>

<section id="menu">
  {#each structuredMenu as category (category.category)}
    <MenuCategory {category} level={1} />
  {/each}
</section>

<style lang="scss">
  @import "$lib/styleVariables.scss";

  #menu {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 0 1.5rem;
  }
</style>
