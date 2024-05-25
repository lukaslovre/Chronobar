<script lang="ts">
  import RefreshIcon from "$lib/icons/RefreshIcon.svelte";
  import AiContainerPremadeQuestion from "./AiContainerPremadeQuestion.svelte";

  const premadeQuestionsEng = [
    "What do you recommend for someone who loves spicy food?",
    "Can you suggest a good vegetarian side dish?",
    "I'm in the mood for grilled meat tonight. What are the best options?",
    "Which dishes are gluten-free?",
    "Do any of the prilozi contain nuts?",
    "I'm allergic to dairy. What can I eat here?",
    "What drink pairs well with your Rib-Eye steak?",
    "I ordered the Grillani sir škripavac. Which drink would complement it best?",
    "Can you recommend a drink that goes well with the Losos file?",
    "What are the ingredients in the Pohana paprika punjena sirom?",
    "How is the chicken prepared for the Toplo hladna salata s grillanom piletinom?",
    "Is the Gusta juha od rajčice made from fresh tomatoes?",
    "How many calories are in the Ćevapi mini from the children's menu?",
    "Which dish has the highest protein content?",
    "Can you suggest a low-carb option for dinner?",
    "Can I get the Batak burger without onions?",
    "Is it possible to substitute the side fries with a salad?",
    "I'd like less spice in the Gurmanski ćevapi, is that doable?",
    "What's the chef's special for today?",
    "Tell me more about the 'Dish of the Day'.",
    "What are the most popular dishes among customers?",
    "What are the best seasonal dishes right now?",
    "Do you have any local specialties?",
    "What's new on the menu this month?",
  ];

  const premadeQuestions = [
    "Što preporučujete za nekoga tko voli začinjenu hranu?",
    "Možete li predložiti dobar vegetarijanski prilog?",
    "Raspoložen sam za roštiljano meso večeras. Koje su najbolje opcije?",
    "Koja jela su bez glutena?",
    "Sadrže li neki od priloga orašaste plodove?",
    "Alergičan sam na mliječne proizvode. Što mogu ovdje jesti?",
    "Koje piće se dobro slaže s vašim Rib-Eye steakom?",
    "Naručio sam Grillani sir škripavac. Koje bi piće najbolje pratilo?",
    "Možete li preporučiti piće koje se dobro slaže s filetom lososa?",
    "Koji su sastojci u Pohanoj paprici punjenoj sirom?",
    "Kako se priprema piletina za Toplo hladnu salatu s grillanom piletinom?",
    "Da li se Gusta juha od rajčice pravi od svježih rajčica?",
    "Koliko kalorija ima u Ćevapima mini s dječjeg menija?",
    "Koje jelo ima najviše proteina?",
    "Možete li predložiti opciju s niskim udjelom ugljikohidrata za večeru?",
    "Mogu li dobiti Batak burger bez luka?",
    "Je li moguće zamijeniti prilog pomfrit s salatom?",
    "Mogu li dobiti Gurmanske ćevape s manje začina?",
    "Koja su najpopularnija jela među gostima?",
    "Koja su najbolja sezonska jela trenutno?",
    "Imate li neke lokalne specijalitete?",
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
