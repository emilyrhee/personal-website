<script lang="ts">
  import Bolts from '$lib/Bolts.svelte';

  export let project;

  let description: string = "";
  let max: number = 75;
  let isDescriptionFull: boolean = false;
  $: {
    if (isDescriptionFull) {
      description = project.description;
    } else {
      if (project.description.length > max) {
        description = project.description.substring(0, max);
      }
    }
  }
  function showDescription() {
    isDescriptionFull = true;
  }
  function hideDescription() {
    isDescriptionFull = false;
  }
</script>

<div class="relative {project.color} text-lg text-beige font-jetbrains p-12 rounded-md">
    <Bolts />
    
    <h2 class="text-beige text-4xl font-coiny">{project.name}</h2>
    <p class="py-2 text-beige font-jetbrains">
      {description} 
      {#if !isDescriptionFull}
        <button class="underline" on:click={showDescription}>...more</button>
      {/if}
      {#if isDescriptionFull}
        <div>
          <button class="underline" on:click={hideDescription}>
            Show less
          </button>
        </div>
      {/if}
    </p>
    <a href="{project.link}" target="_blank" class="underline">GitHub</a>
</div>

<div class="py-4"></div>