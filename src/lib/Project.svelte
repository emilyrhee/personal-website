<script lang="ts">
  import Bolts from '$lib/Bolts.svelte'

  export let data;
</script>

<div class="relative bg-{data.color} text-lg text-beige font-jetbrains p-12 rounded">
    <Bolts />
    
    <h2 class="text-beige text-4xl font-coiny">{data.name}</h2>
    <p class="py-2 text-beige font-jetbrains">
      {data.description}
    </p>
    <a href="{data.link}" target="_blank" class="underline">Code</a>
</div>