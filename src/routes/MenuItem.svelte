<script lang="ts">
  export let item: MenuItem;
</script>

<li>
  <div>
    <p class="name">{item.name}</p>
    <p class="description">{item.description}</p>
  </div>
  <p class="price">{item.price} €</p>
</li>

<style lang="scss">
  @import "$lib/styleVariables.scss";

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05);
  }

  .name {
    margin-bottom: 0.75rem;
  }
  .description {
    font-size: 0.875rem;
    line-height: 150%;
    color: $secondary-text-color;
  }

  .price {
    flex-shrink: 0;
    font-weight: 500;
  }
</style>
