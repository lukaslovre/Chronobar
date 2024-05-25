<script lang="ts">
  import AiContainerQuestions from "./AiContainerQuestions.svelte";
  import AiContainerChat from "./AiContainerChat.svelte";
  import AiSparklesIcon from "$lib/icons/AiSparklesIcon.svelte";

  let inputValue = "";

  function putPremadeQuestionIntoInput(event: CustomEvent) {
    inputValue = event.detail.question;
  }
</script>

<section>
  <div class="header">
    <AiSparklesIcon />

    <h1>Virtualni konobar</h1>
  </div>

  <AiContainerQuestions on:press={putPremadeQuestionIntoInput} />

  <AiContainerChat {inputValue} />
</section>

<style lang="scss">
  @import "$lib/styleVariables.scss";

  section {
    margin: 5rem 0.75rem;
    margin-top: 4rem;
    padding: 1.5rem 0.75rem;
    // background-color: $ai-container-bg;
    background-image: $ai-container-bg-url;
    background-size: cover;
    background-position: center;

    border-radius: 1rem;
    border: 1px solid #ccc;
    box-shadow: 0 0 0.5rem $ai-container-shadow-color;
  }

  .header {
    display: flex;
    align-items: center;
    column-gap: 0.75rem;

    margin-bottom: 2rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 600;

      background: $ai-container-title-gradient;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>
