<script lang="ts">
  export let rotation = 0;
</script>

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style:transform={`rotate(${rotation}deg)`}
>
  <path d="M7.42 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.42 8.59Z" fill="#A4161A" />
</svg>

<style lang="scss">
  svg {
    transition: transform 200ms ease-out;
  }
</style>
