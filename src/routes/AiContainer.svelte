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
  section {
    margin: 5rem 0.75rem;
    margin-top: 4rem;
    padding: 1.5rem 0.75rem;
    background-color: #e8f1fd;
    border-radius: 1rem;
    border: 1px solid #ccc;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.05);
  }

  .header {
    display: flex;
    align-items: center;
    column-gap: 0.75rem;

    margin-bottom: 2rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 600;
      // linear gradient color (with 3 stops (0, 0.5, 1))
      background: linear-gradient(90deg, #3d8df5 0%, #135ab9 50%, #3d8df5 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>
