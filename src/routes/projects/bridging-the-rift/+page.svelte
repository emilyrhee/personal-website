<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import TerminalHeader from '$lib/components/TerminalHeader.svelte';
</script>

<Navbar />

<div class="max-w-2xl mx-auto px-2 py-10 md:py-28">
  <div class="flex flex-col items-start gap-6">
    <TerminalHeader text="Bridging the Rift" />
    <p>
      This was a platformer game that I started during
      <a href="https://itch.io/jam/acerola-jam-0">Acerola Jam 0</a>. I ended
      up abandoning the jam to work on the game without the constraint of
      the theme or deadlines. The deadline did give me a jump-start, though.
      Totally join a game jam if you need motivation to start a project.
    </p>
    <!-- svelte-ignore a11y_media_has_caption -->
    <video src="/btr.mp4" controls></video>
    <p>
      I am pretty proud of how I made the art, produced the music + sound
      effects, and coded the game solo. The song in the game is the first
      I ever produced! I used FL Studio.
    </p>
  </div>
</div>