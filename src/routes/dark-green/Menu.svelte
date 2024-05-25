<script lang="ts">
  import MenuItem from "./MenuItem.svelte";
  import MenuCategoryContainer from "./MenuCategoryContainer.svelte";
  import { groupByField } from "$lib/utils";

  import { menu as structuredMenu } from "$lib/menuData";
  import ViewListIcon from "$lib/icons/ViewListIcon.svelte";

  let isCollapsedInitial = true;
</script>

<section id="menu">
  <div class="button-container">
    <button
      type="button"
      id="unfold-all-button"
      on:click={() => {
        isCollapsedInitial = !isCollapsedInitial;
      }}
    >
      <ViewListIcon color="#8BF3A8" />
      {isCollapsedInitial ? "Unfold all" : "Fold all"}
    </button>
  </div>

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
  @import "$lib/styleVariables-dark-green.scss";

  #menu {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .button-container {
      display: flex;
      justify-content: flex-end;
      padding: 0 0.5rem;

      #unfold-all-button {
        background-color: rgba($primary-color, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow: 0 2px 1px rgba(0, 0, 0, 0.125);

        padding: 0.5rem 1rem;
        border-radius: 0.25rem;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        color: $primary-color;
        font-size: 0.875rem;
        font-weight: 700;

        cursor: pointer;

        &:hover {
          background-color: rgba($primary-color, 0.1);
        }
      }
    }
  }
</style>
