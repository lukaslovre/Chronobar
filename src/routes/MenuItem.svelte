<script lang="ts">
  export let item = {} as Item;

  type Item = {
    name: string;
    price: string;
  };
</script>

<li>
  <p>{item.name}</p>
  <p class="price">{item.price} €</p>
</li>

<style lang="scss">
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05);
  }

  .price {
    font-weight: 500;
  }
</style>
