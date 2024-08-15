<script lang="ts">
  export let button;

  let topClass = 'top-0';

  function buttonDown() {
    topClass = 'top-2';
  }

  function buttonUp() {
    topClass = 'top-0';
  }
</script>

<button class="{button.shading} text-lg text-beige font-jetbrains py-2 px-4 rounded relative transform translate-y-2">
  {button.label}
</button>

<a draggable="false" href={button.link} target="_blank">
  <button
    on:mousedown={buttonDown}
    on:mouseup={buttonUp}
    on:mouseleave={buttonUp}
    class={`${button.color} text-lg text-beige font-jetbrains py-2 px-4 rounded absolute left-0 ${topClass}`}
  >
    {button.label}
  </button>
</a>