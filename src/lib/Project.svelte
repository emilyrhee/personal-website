<script lang="ts">
  import Bolts from '$lib/Bolts.svelte'

  export let project;
</script>

<div class="relative bg-{project.color} text-lg text-beige font-jetbrains p-12 rounded">
    <Bolts />
    
    <h2 class="text-beige text-4xl font-coiny">{project.name}</h2>
    <p class="py-2 text-beige font-jetbrains">
      {project.description}
    </p>
    <a href="{project.link}" target="_blank" class="underline">GitHub</a>
</div>

<div class="py-4"></div>