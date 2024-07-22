<script>
  let topClass = 'top-0';

  function handleMouseDown() {
    topClass = 'top-2';
  }

  function handleMouseUp() {
    topClass = 'top-0';
  }
</script>

<button class="bg-dark-green text-lg text-beige font-jetbrains py-2 px-4 rounded relative transform translate-y-2">
  LinkedIn
</button>

<a href="https://github.com/emilyrhee" target="_blank">
  <button
    on:mousedown={handleMouseDown}
    on:mouseup={handleMouseUp}
    class={`bg-green text-lg text-beige font-jetbrains py-2 px-4 rounded absolute left-0 ${topClass}`}
  >
    LinkedIn
  </button>
</a>