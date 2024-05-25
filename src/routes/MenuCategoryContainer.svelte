<script lang="ts">
  import { slide } from "svelte/transition";
  import ChevronIcon from "$lib/icons/ChevronIcon.svelte";

  export let categoryDepth: number = 1;
  export let categoryTitle: string = "Category title";
  export let isCollapsed: boolean = false;
</script>

<div class="category-container" style:gap={categoryDepth === 1 ? "2rem" : "1rem"}>
  <button
    type="button"
    class="title-and-collapseButton"
    on:click={() => {
      isCollapsed = !isCollapsed;
    }}
  >
    {#if categoryDepth === 1}
      <h1>{categoryTitle}</h1>
    {:else}
      <h2>{categoryTitle}</h2>
    {/if}

    <ChevronIcon rotation={isCollapsed ? 180 : 0} />
  </button>

  {#if !isCollapsed}
    <div
      class="slot-container"
      style:gap={categoryDepth === 1 ? "2rem" : "1rem"}
      transition:slide
    >
      <slot />
    </div>
  {/if}
</div>

<style lang="scss">
  @import "$lib/styleVariables.scss";

  .category-container,
  .slot-container {
    display: flex;
    flex-direction: column;
  }

  .title-and-collapseButton {
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-align: left;

    padding: 1rem;
    border-radius: 0.5rem;

    &:hover {
      background-color: rgba($primary-color, 0.1);
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 0.5rem;

    h1,
    h2 {
      font-weight: 600;
    }

    h1 {
      color: $menu-h1-color;
      font-size: 1.5rem;
      text-transform: uppercase;
    }

    h2 {
      color: $menu-h2-color;
      font-size: 1.125rem;
      text-transform: capitalize;
    }
  }
</style>
