<script lang="ts">
  import Header from "../../Header.svelte";
  import ItemCard from "./ItemCard.svelte";

  export let data;
</script>

<Header />

<ItemCard itemData={data.item} />
