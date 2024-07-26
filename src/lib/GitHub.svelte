<script>
  let topClass = 'top-0';

  function buttonDown() {
    topClass = 'top-2';
  }

  function buttonUp() {
    topClass = 'top-0';
  }
</script>

<button class="bg-medium-brown text-lg text-beige font-jetbrains py-2 px-4 rounded relative transform translate-y-2">
  GitHub
</button>

<a draggable="false" href="https://github.com/emilyrhee" target="_blank">
  <button
    on:mousedown={buttonDown}
    on:mouseup={buttonUp}
    on:mouseleave={buttonUp}
    class={`bg-light-brown text-lg text-beige font-jetbrains py-2 px-4 rounded absolute left-0 ${topClass}`}
  >
    GitHub
  </button>
</a>