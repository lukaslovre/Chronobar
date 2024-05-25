<script lang="ts">
  export let item: MenuItemType;
</script>

<a href={`item/${item.name}`}>
  <li class="menu-item">
    <div class="left">
      <p class="name">{item.name}</p>
      <p class="description">{item.description}</p>
      <p class="price">{item.price.toFixed(2)} {item.currency}</p>
      <!-- <p class="price">{item.price}</p> -->
    </div>
    {#if item.image_url}
      <img src={item.image_url} alt={item.name} />
    {/if}
  </li>
</a>

<style lang="scss">
  @import "$lib/styleVariables-dark-green.scss";

  a {
    text-decoration: none;
    color: inherit;
  }

  .menu-item {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    margin: 0 1rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: $menu-item-bg;
    box-shadow: 0 0.25rem 0.5rem $menu-item-shadow-color;

    transition:
      box-shadow 100ms ease-out,
      transform 100ms ease-out;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
      transform: translateY(-0.25rem);
    }

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
    font-weight: 500;
    color: $menu-item-name-color;

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
    color: $menu-item-description-color;

    // truncate text ellipsis, only one row of text
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  .price {
    font-size: 1rem;
    font-weight: 600;
    color: $menu-item-price-color;
  }
</style>
