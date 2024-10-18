<script lang="ts">
  import Bolts from "$lib/Bolts.svelte";

  export let project;
  export let colors;
  export let index;

  let description: string = "";
  let max: number = 75;
  let isDescriptionFull: boolean = false;
  $: {
    if (isDescriptionFull) {
      description = project.description;
    } else if (project.description.length > max) {
        description = project.description.substring(0, max);
    }
  }
  function showDescription() {
    isDescriptionFull = true;
  }
  function hideDescription() {
    isDescriptionFull = false;
  }
</script>

<div
  class="relative {colors[
    index % colors.length
  ]} text-lg text-beige font-jetbrains p-12 rounded-md"
>
  <Bolts />

  <h2 class="text-beige text-4xl font-coiny">{project.name}</h2>
  <p class="py-2 text-beige font-jetbrains">
    {description}
    {#if !isDescriptionFull}
      <button class="underline" on:click={showDescription}>...more</button>
    {/if}
    {#if isDescriptionFull}
      <div>
        {#if project.video}
          <div class="py-1"></div>
          <video controls muted class="rounded-md">
            <source src={project.video} type="video/mp4" />
          </video>
          <div class="py-1"></div>
        {/if}
        <button class="underline" on:click={hideDescription}>
          Show less
        </button>
      </div>
    {/if}
  </p>
  <a href={project.link} target="_blank" class="underline font-bold">GitHub</a>
</div>

<div class="py-4"></div>

