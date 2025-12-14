<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import TerminalHeader from '$lib/components/TerminalHeader.svelte';
</script>

<Navbar />

<div class="max-w-2xl mx-auto px-2 py-10 md:py-28">
  <div class="flex flex-col items-start gap-6">
    <TerminalHeader text="Getting to One" />
    <p>
      When I was in college, I would often find myself daydreaming during class 
      about teaching and making curricula. 
      While I did homework, I would assess if the assignment was conducive to 
      learning or unhelpful busy work.
      I would critique if the exams I took were accurate metrics in testing what I've learned.
    </p>

    <p>
      That was how I discovered my interest in pedagogy, particularly in STEM. 
      
      There are often discoveries made about what one is learning through the 
      process of trying to teach it, and that symbiotic relationship is beautiful.
      This is why I made my YouTube channel,
      <a href="http://youtube.com/@gettingtoone" target="_blank">Getting to One</a>.
    </p>
      
    <TerminalHeader text="Latest video:" headerSize="h5" />
    <div class="w-full aspect-video -mt-4">
      <iframe 
        class="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/pmDwYV2Cpqg" 
        title="YouTube video player" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
      ></iframe>
    </div>

    <p>
      On the technical side, the animations are programmed using 
      <a href="https://www.manim.community/" target="_blank">manim</a>, a 
      Python animation library made by <a href="http://youtube.com/@3blue1brown" target="_blank">3Blue1Brown</a>. 
      Like many other math-freaks, he is a great inspiration to me and a factor 
      in what made me want to start creating YouTube videos.
    </p>
  </div>
</div>