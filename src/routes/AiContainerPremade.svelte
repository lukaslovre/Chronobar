<script lang="ts">
  export let question: string;
</script>

<button>{question}</button>

<style lang="scss">
  @import "$lib/styleVariables.scss";

  button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba($primary-color-dark, 0.25);

    color: $primary-color-dark;
    font-size: 0.875rem;
    line-height: 150%;
    text-align: left;

    cursor: pointer;
    transition:
      background-color 0.2s ease-out,
      color 0.2s ease-out;

    &:hover {
      background-color: $primary-color-dark;
      color: white;
    }
  }
</style>
