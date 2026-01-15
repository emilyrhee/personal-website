<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import TerminalHeader from '$lib/components/TerminalHeader.svelte';
</script>

<Navbar />

<div class="max-w-2xl mx-auto px-2 py-10 md:py-28">
  <div class="flex flex-col items-start gap-6">
    <TerminalHeader text="Bus Game" />
    <p>
      I am a train enthusiast who had the misfortunate of being born and
      raised in the US of A. However, due to the car-dependent infrastructure
      of most US cities, we can't just start putting trains everywhere. I have
      a hunch that investment in buses is the way to go for improving the state of US public
      transportation, and this is why I made this game... a title better than
      "Bus Game" pending.
    </p>
    <p>
      In this game, the player tries to maximize the probability that a
      city's residents will use public transportation. The probability
      is affected by factors such as fare cost, quality of bus stop
      (are there seats? is there a roof?), ride length, etc.
      Currently, this is where we are at in development:
    </p>
    <!-- svelte-ignore a11y_media_has_caption -->
    <video src="/bus.mp4" controls></video>
    <p>
      This is certainly the largest project I've ever worked on. Video devlog
      detailing the development process + design decisions is
      in the works on the
      <a href="https://www.youtube.com/@sushimomogames">sushimomo games YouTube channel</a>.
      Stay tuned 😎.
    </p>
  </div>
</div>