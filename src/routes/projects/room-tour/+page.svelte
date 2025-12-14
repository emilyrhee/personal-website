<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import TerminalHeader from '$lib/components/TerminalHeader.svelte';
</script>

<Navbar />

<div class="max-w-2xl mx-auto px-2 py-10 md:py-28">
  <div class="flex flex-col items-start gap-6">
    <TerminalHeader text="Room Tour" />
    <p>
      Room Tour was the final project for my Object-Oriented Programming
      class in CT State Community College. This was an awesome project for me
      because I had been interested in game development since I was a
      wee lassie, and this was the first game I made. Is it a little scuffed? 
      Yes, but I hardly knew how to program. Plus, I made the art, too.
    </p>
    <!-- svelte-ignore a11y_media_has_caption -->
    <video src="/roomtour.mp4" controls></video>
  </div>
</div>