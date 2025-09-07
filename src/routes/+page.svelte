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
    <p class="text-white pt-3">
      Mathematics & Computer Science graduate from CCSU.<br>
      I like to develop software.<br>
      Linux enthusiast 🐧
    </p>
  </div>
</div>