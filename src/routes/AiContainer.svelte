<script lang="ts">
  import AiContainerQuestions from "./AiContainerQuestions.svelte";
  import AiContainerChat from "./AiContainerChat.svelte";

  let inputValue = "";

  function putPremadeQuestionIntoInput(event: CustomEvent) {
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

  <AiContainerQuestions on:press={putPremadeQuestionIntoInput} />

  <AiContainerChat {inputValue} />
</section>

<style lang="scss">
  section {
    margin: 5rem 0.75rem;
    margin-top: 3rem;
    padding: 1.5rem 0.75rem;
    background-color: #e8f1fd;
    border-radius: 1rem;
    border: 1px solid #ccc;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.05);
  }

  .header {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    margin-bottom: 2rem;

    p {
      font-weight: 500;
    }
  }
</style>
