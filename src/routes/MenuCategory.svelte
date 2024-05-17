<script lang="ts">
  import MenuCategory from "./MenuCategory.svelte";
  import MenuItem from "./MenuItem.svelte";
  export let category = {} as Category;
  export let level = 0;

  type Category = {
    category: string;
    childrenCategories?: Category[];
    items?: { name: string; price: string }[];
  };
</script>

<div class="category" style={`row-gap: ${3 - level}rem`}>
  <h1 style={`font-size: ${1.5 - level * 0.25}rem`}>
    {"#".repeat(level)}
    {category.category}
  </h1>

  {#if category.childrenCategories}
    {#each category.childrenCategories as subcategory (subcategory.category)}
      <MenuCategory category={subcategory} level={level + 1} />
    {/each}
  {:else if category.items}
    <ul>
      {#each category.items as item (item.name)}
        <MenuItem {item} />
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  @import "$lib/styleVariables.scss";

  .category {
    display: flex;
    flex-direction: column;
    row-gap: 1rem; // 1rem is the default value
  }

  h1 {
    color: $primary-color;
    text-transform: uppercase;
  }

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
