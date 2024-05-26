<script lang="ts">
  import { scale } from "svelte/transition";

  let languageMenuVisible = false;
</script>

<header>
  <div>
    <h1>Batak grill menu</h1>
    <h2>powered by Chronobar</h2>
  </div>

  <button
    type="button"
    id="change-language-button"
    on:click={() => (languageMenuVisible = !languageMenuVisible)}
  >
    <img src="/flags-4x3/hr.svg" alt="flag" />
    <span>HR</span>
  </button>

  {#if languageMenuVisible}
    <div id="language-menu" transition:scale={{ duration: 200, start: 0.5 }}>
      <button type="button">
        <img src="/flags-4x3/gb.svg" alt="flag" />
        <span>EN</span></button
      >
      <button type="button">
        <img src="/flags-4x3/de.svg" alt="flag" />
        <span>DE</span>
      </button>
      <button type="button">
        <img src="/flags-4x3/it.svg" alt="flag" />
        <span>IT</span>
      </button>
    </div>
  {/if}
</header>

<style lang="scss">
  @import "$lib/styleVariables-dark-green.scss";

  header {
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    padding-bottom: 0;
  }

  h1 {
    font-size: 2rem;
    color: $app-title-color;
    font-weight: 700;
  }

  h2 {
    font-size: 0.875rem;
    color: $app-subtitle-color;
    font-weight: 400;
  }

  #change-language-button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: none;
    background-color: #262626;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;

    img {
      width: 2rem;
      height: 1.5rem;
    }
  }

  #language-menu {
    position: absolute;
    top: 100%;
    right: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #404040;
    border-radius: 0.25rem;
    padding: 0.5rem;
    box-shadow: 0 4px 1rem rgba(0, 0, 0, 0.25);

    button {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      padding: 0.5rem 1rem;
      border: none;
      background-color: transparent;
      border-radius: 0.25rem;
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      img {
        width: 2rem;
        height: 1.5rem;
      }
    }
  }
</style>
