<script lang="ts">
  import MenuItem from "./MenuItem.svelte";
  import MenuCategoryContainer from "./MenuCategoryContainer.svelte";
  import { groupByField } from "$lib/utils";

  import { menu as structuredMenu } from "$lib/menuData";

  let isCollapsedInitial = true;
</script>

<section id="menu">
  {#each Object.entries(groupByField(structuredMenu, "category")) as [category, items]}
    <MenuCategoryContainer
      categoryDepth={1}
      categoryTitle={category}
      isCollapsed={isCollapsedInitial}
    >
      {#each Object.entries(groupByField(items, "sub_category")) as [sub_category, sub_items]}
        <MenuCategoryContainer
          categoryDepth={2}
          categoryTitle={sub_category}
          isCollapsed={isCollapsedInitial}
        >
          {#each sub_items as item}
            <MenuItem {item} />
          {/each}
        </MenuCategoryContainer>
      {/each}
    </MenuCategoryContainer>
  {/each}
</section>

<style lang="scss">
  @import "$lib/styleVariables.scss";

  #menu {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    gap: 2.5rem;
  }
</style>
