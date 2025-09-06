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
    <TerminalHeader text="Projects" />

    <div class="flex items-center">
      <img src="/btr.png" class="h-36 pt-4" alt="Bridging the Rift">
      <div class="flex flex-col pl-2">
        <h6 class="text-white">Bridging the Rift</h6>
        <p class="text-white">A 2D platformer game</p>
      </div>
    </div>
  </div>
</div>