<script lang="ts">
  import AiContainerPremade from "./AiContainerPremade.svelte";
  import RefreshIcon from "$lib/icons/RefreshIcon.svelte";

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

  let inputValue = "";

  function putPremadeQuestionIntoInput(event) {
    inputValue = event.detail.question;
  }
</script>

<section>
  <div class="header">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 1L17.74 3.75L15 5L17.74 6.26L19 9L20.25 6.26L23 5L20.25 3.75M9 4L6.5 9.5L1 12L6.5 14.5L9 20L11.5 14.5L17 12L11.5 9.5M19 15L17.74 17.74L15 19L17.74 20.25L19 23L20.25 20.25L23 19L20.25 17.74"
        fill="url(#paint0_linear_33_292)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_33_292"
          x1="1"
          y1="1"
          x2="23"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#185EBA" />
          <stop offset="1" stop-color="#8BB8F3" />
        </linearGradient>
      </defs>
    </svg>

    <p>Virtualni konobar:</p>
  </div>

  <div class="premade-questions-container">
    {#each shownQuestionsIndexes as questionIndex (questionIndex)}
      <AiContainerPremade
        question={premadeQuestions[questionIndex]}
        on:press={putPremadeQuestionIntoInput}
      />
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

  <div class="chat-container">
    <div class="input">
      <input
        type="text"
        name=""
        id=""
        placeholder="Postavi pitanje"
        bind:value={inputValue}
      />
      <button
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 20V14L11 12L3 10V4L22 12L3 20Z" fill="white" />
        </svg>
      </button>
    </div>
  </div>
</section>

<style lang="scss">
  @import "$lib/styleVariables.scss";

  section {
    margin: 5rem 0.75rem;
    margin-top: 3rem;
    padding: 1.5rem 0.75rem;
    background-color: #e8f1fd;
    border-radius: 1rem;
    border: 1px solid #ccc;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.05);

    & > * {
      margin-bottom: 2rem;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }

  .header {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    p {
      font-weight: 500;
    }
  }

  .premade-questions-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;

    #refresh-premade-questions-button {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;

      padding: 0.25rem 2rem;
      border: 2px solid $primary-color;
      border-radius: 0.25rem;
      background-color: transparent;

      color: $primary-color;
      font-weight: 700;
      font-size: 0.875rem;

      cursor: pointer;
    }
  }

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
