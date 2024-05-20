<script lang="ts">
  import SendIcon from "$lib/icons/SendIcon.svelte";

  export let inputValue = "";
</script>

<div class="chat-container">
  <div class="input">
    <input
      type="text"
      name=""
      id=""
      placeholder="Postavi pitanje"
      bind:value={inputValue}
    />
    <button><SendIcon /></button>
  </div>
</div>

<style lang="scss">
  @import "$lib/styleVariables.scss";
  .chat-container {
    .input {
      display: flex;
      column-gap: 1rem;

      input {
        flex: 1;
        padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        border-radius: 10rem;
        background-color: #fff;
        // font-size: 1rem;

        &::placeholder {
          color: #808080;
        }

        &:focus {
          outline: 2px solid rgba(0, 0, 0, 0.1);
        }
      }

      button {
        padding: 0.75rem;
        border: none;
        border-radius: 100%;
        background-color: $primary-color;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        transition: background-color 0.2s ease-out;

        &:hover {
          background-color: $primary-color-light;
        }
      }
    }
  }
</style>
