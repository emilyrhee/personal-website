<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import TerminalHeader from '$lib/components/TerminalHeader.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { onMount } from 'svelte';
  
  interface Project {
    imageSrc: string;
    title: string;
    description: string;
  }
  let projects: Project[] = [];
  onMount(async () => {
    const response = await fetch('/projects.json');
    projects = await response.json();
  });
</script>

<Navbar />

<div class="max-w-2xl mx-auto px-2 py-10 md:py-28">
  <div class="flex flex-col items-start gap-6">
    <TerminalHeader text="Projects" />

    {#each projects as project}
    <div class="
        border-2
        border-transparent
        hover:border-emerald-500
        w-full
        duration-150
    ">
    <ProjectCard
        imageSrc={project.imageSrc} 
        title={project.title} 
        description={project.description} 
      />
    </div>
    {/each}
  </div>
</div>