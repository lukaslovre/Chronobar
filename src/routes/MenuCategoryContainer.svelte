<script lang="ts">
  import { slide } from "svelte/transition";
  import ChevronIcon from "$lib/icons/ChevronIcon.svelte";

  export let categoryDepth: number = 1;
  export let categoryTitle: string = "Category title";
  export let isCollapsed: boolean = false;
</script>

<div class="category-container" style:gap={categoryDepth === 1 ? "2rem" : "1rem"}>
  <div class="title-and-collapseButton">
    {#if categoryDepth === 1}
      <h1>{categoryTitle}</h1>
    {:else}
      <h2>{categoryTitle}</h2>
    {/if}

    <button
      on:click={() => {
        isCollapsed = !isCollapsed;
      }}
    >
      <ChevronIcon rotation={isCollapsed ? 180 : 0} />
    </button>
  </div>

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
    display: flex;
    justify-content: space-between;
    align-items: center;

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
        background-color: rgba($primary-color, 0.1);
      }
    }
  }
</style>
