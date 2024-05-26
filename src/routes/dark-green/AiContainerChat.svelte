<script lang="ts">
  import SendIcon from "$lib/icons/SendIcon.svelte";
  import { onMount } from "svelte";

  export let inputValue = "";

  let chatTextArea: HTMLTextAreaElement;

  onMount(() => {
    resizeTextarea();
  });

  function resizeTextarea() {
    chatTextArea.style.height = "auto";
    chatTextArea.style.height = `${chatTextArea.scrollHeight}px`;
  }
</script>

<div class="chat-container">
  <div class="input">
    <textarea
      bind:this={chatTextArea}
      on:input={resizeTextarea}
      name=""
      id=""
      placeholder="Postavi pitanje o ponudi">{inputValue}</textarea
    >

    <button><SendIcon /></button>
  </div>
</div>

<style lang="scss">
  @import "$lib/styleVariables-dark-green.scss";
  .chat-container {
    .input {
      display: flex;
      align-items: flex-end;
      column-gap: 1rem;

      textarea {
        flex: 1;
        padding: 1rem;
        outline: 1px solid $ai-container-input-border;
        border: none;
        border-radius: 1.5rem;
        background-color: $ai-container-input-bg;
        font-size: 0.875rem;

        resize: none;
        min-height: 2rem;
        overflow: hidden;
        color: $ai-container-input-color;
        line-height: 150%;

        &::placeholder {
          color: #808080;
        }

        &:focus {
          outline: 2px solid #1c73e8;
        }
      }

      button {
        padding: 0.75rem;
        border: none;
        border-radius: 100%;
        background-color: #1c73e8;

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
