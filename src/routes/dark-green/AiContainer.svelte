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
  @import "$lib/styleVariables-dark-green.scss";

  section {
    margin: 5rem 0.75rem;
    margin-top: 4rem;
    padding: 3rem 1rem;
    // gradient that has 3 different radial gradients on different positions
    // $ai-container-bg-gradient-1: radial-gradient(circle at 0% 0%, #3d8df5 0%, #3d8df5 100%);
    // $ai-container-bg-gradient-2: radial-gradient(circle at 100% 0%, #d1f53d 0%, #d1f53d 100%);
    // $ai-container-bg-gradient-3: radial-gradient(
    //   circle at 100% 100%,
    //   #f5503d 0%,
    //   #f5503d 100%
    // );
    background-color: $ai-container-bg;

    background-size: 50% 50%;
    background-repeat: no-repeat;
    border-radius: 1rem;
    border: 1px solid $ai-container-border-color;
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
