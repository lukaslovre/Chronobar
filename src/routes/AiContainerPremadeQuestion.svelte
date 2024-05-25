<script lang="ts">
  import IdeaIcon from "$lib/icons/IdeaIcon.svelte";
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let question: string;

  // TODO: handle the press event
  const dispatch = createEventDispatcher();
</script>

<button
  type="button"
  in:slide={{ duration: 300, delay: 0 }}
  out:slide={{ duration: 300, delay: 150 }}
  on:click={() => {
    dispatch("press", { question });
  }}
>
  <IdeaIcon />
  <span>
    {question}
  </span>
</button>

<style lang="scss">
  @import "$lib/styleVariables.scss";

  button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: $ai-container-question-bg;
    box-shadow: 0 2px 8px $ai-container-question-shadow-color;

    color: $ai-container-question-color;
    font-size: 0.875rem;
    line-height: 150%;
    text-align: left;

    cursor: pointer;
    transition:
      background-color 0.2s ease-out,
      color 0.2s ease-out;

    &:hover {
      background-color: $primary-color;
      color: white;
    }
  }
</style>
