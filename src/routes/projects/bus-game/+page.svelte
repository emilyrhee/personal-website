<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import TerminalHeader from '$lib/components/TerminalHeader.svelte';
</script>

<Navbar />

<div class="max-w-2xl mx-auto px-2 py-10 md:py-28">
  <div class="flex flex-col items-start gap-6">
    <TerminalHeader text="Bus Game" />
    <p>
     In 2023, I went on a trip to my parents' home city: Daejeon,
     South Korea. I didn't need to have a car to get anywhere. 
     However, I found it to still be fairly car-dependent society.
     Most adults I met owned a car. 
     Howeever, I got around just fine by
     walking, taking the bus, and taxi. 
    </p>
    <p>
      Since returning to the States, I haven't been able to shake my experience
      in Daejeon. Train-freaks like myself often romanticize rail, but here 
      were buses getting the job done. The density of buildings 
      and effective zoning in Daejeon also plays an important role in the 
      efficacy of their public transportation. Urban-sprawl cities in the US 
      lack both of these facets. Regardless, Daejeon gave me hope for public 
      transportation in the US. It got me thinking: what would it take for me to 
      use the bus in my hometown?
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