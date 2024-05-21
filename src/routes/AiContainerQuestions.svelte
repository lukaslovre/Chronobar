<script lang="ts">
  import RefreshIcon from "$lib/icons/RefreshIcon.svelte";
  import AiContainerPremadeQuestion from "./AiContainerPremadeQuestion.svelte";

  const premadeQuestions = [
    "What do you recommend for someone who loves spicy food?",
    "Can you suggest a good vegetarian dish?",
    "I'm in the mood for seafood tonight. What are the best options?",
    "Which dishes are gluten-free?",
    "Do any of the desserts contain nuts?",
    "I'm allergic to dairy. What can I eat here?",
    "What wine pairs well with your ribeye steak?",
    "I ordered the Thai curry. Which drink would complement it best?",
    "Can you recommend a cocktail that goes well with the salmon?",
    "What are the ingredients in the mushroom risotto?",
    "How is the chicken marinated for the grilled chicken salad?",
    "Is the tomato soup made from fresh tomatoes?",
    "How many calories are in the avocado toast?",
    "Which dish has the highest protein content?",
    "Can you suggest a low-carb option for dinner?",
    "Can I get the burger without onions?",
    "Is it possible to substitute the side fries with a salad?",
    "I'd like less spice in the curry, is that doable?",
    "What's the chef's special for today?",
    "Tell me more about the 'Dish of the Day'.",
    "What are the most popular dishes among customers?",
    "What are the best seasonal dishes right now?",
    "Do you have any local specialties?",
    "What's new on the menu this month?",
  ];

  let shownQuestionsIndexes = refreshPremadeQuestions();

  function refreshPremadeQuestions() {
    const newIndexes = Array.from({ length: 2 }, (_) =>
      Math.floor(Math.random() * premadeQuestions.length)
    );

    // Check if there are any duplicates
    if (newIndexes[0] === newIndexes[1]) {
      newIndexes[1] = (newIndexes[1] + 1) % premadeQuestions.length;
    }

    return newIndexes;
  }
</script>

<div class="premade-questions-container">
  {#each shownQuestionsIndexes as questionIndex (questionIndex)}
    <AiContainerPremadeQuestion question={premadeQuestions[questionIndex]} on:press />
  {/each}

  <button
    type="button"
    id="refresh-premade-questions-button"
    on:click={() => {
      shownQuestionsIndexes = refreshPremadeQuestions();
    }}
  >
    <RefreshIcon /> Drugi primjeri
  </button>
</div>

<style lang="scss">
  @import "$lib/styleVariables.scss";

  .premade-questions-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    margin-bottom: 2rem;

    #refresh-premade-questions-button {
      margin-top: 0.5rem;

      display: flex;
      align-items: center;
      column-gap: 0.5rem;

      padding: 0.25rem 2rem;
      border: 2px solid $primary-color;
      border-radius: 0.25rem;
      background-color: #fff;
      box-shadow: 0 2px 1px rgba(0, 0, 0, 0.125);

      color: $primary-color;
      font-weight: 700;
      font-size: 0.875rem;

      cursor: pointer;
    }
  }
</style>
