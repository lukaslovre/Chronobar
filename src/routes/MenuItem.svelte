<script lang="ts">
  export let item: MenuItemType;
</script>

<li class="menu-item">
  <div class="left">
    <p class="name">{item.name}</p>
    <p class="description">{item.description}</p>
    <p class="price">{item.price.toFixed(2)} €</p>
  </div>
  <img src={item.image_url} alt={item.name} />
</li>

<style lang="scss">
  @import "$lib/styleVariables.scss";

  .menu-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05);

    .left {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      min-width: 0;
    }

    img {
      flex-shrink: 0;

      object-fit: cover;
      object-position: center;
      width: 5rem;
      height: 5rem;
      border-radius: 0.25rem;
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.125);
    }
  }

  .name {
    font-size: 1rem;
    font-weight: 400;
    color: $primary-text-color;

    // truncate text ellipsis, only one row of text
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
  .description {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 150%;
    color: $secondary-text-color;

    // truncate text ellipsis, only one row of text
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  .price {
    font-size: 1rem;
    font-weight: 500;
    color: $primary-color;
  }
</style>
