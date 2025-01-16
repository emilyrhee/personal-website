<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import TerminalHeader from '$lib/components/TerminalHeader.svelte';
</script>

<Navbar />

<div class="absolute top-0 left-0 right-0 bottom-0
            flex flex-col items-center justify-center
            h-screen px-2 sm:px-0"
>
  <div class="flex flex-col items-start">
    <TerminalHeader text="Emily Rhee" />
    <h4 class="text-white pb-2">Software Developer</h4>
    <p class="text-white">
      Computer Science & Mathematics major @ CCSU.<br>
      Interested in computer graphics for grad school.<br>
      I also like web dev, game dev, & embedded systems.<br>
    </p>
  </div>
</div>