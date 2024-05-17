<script lang="ts">
  const premadeQuestions = [
    "I'm in the mood for seafood tonight. What are the best options?",
    "Can you suggest a low-carb option for dinner?",
    "I ordered the Thai curry. Which drink would complement it best?",
  ];
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
        fill="url(#paint0_linear_12_416)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_12_416"
          x1="1"
          y1="1"
          x2="23"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BA181B" />
          <stop offset="1" stop-color="#660708" />
        </linearGradient>
      </defs>
    </svg>
    <p>Pitaj o cjeniku:</p>
  </div>

  <div class="premade-questions-container">
    {#each premadeQuestions as question}
      <button>{question}</button>
    {/each}
  </div>

  <div class="chat-container">
    <div class="input">
      <input type="text" name="" id="" placeholder="Postavi pitanje" />
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
    margin: 5rem 0.5rem;
    padding: 1.5rem 1rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.05);

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
    row-gap: 1rem;

    button {
      padding: 0.5rem 1rem;
      border: 2px solid $primary-color-dark;
      border-radius: 0.25rem;
      background-color: $primary-color-dark-transparent;

      color: $primary-color-dark;
      font-size: 1rem;
      line-height: 150%;

      cursor: pointer;
      transition:
        background-color 0.2s ease-out,
        color 0.2s ease-out;

      &:hover {
        background-color: $primary-color-dark;
        color: white;
      }
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
        background-color: rgba(0, 0, 0, 0.05);
        // font-size: 1rem;

        &::placeholder {
          color: #4d4d4d;
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
