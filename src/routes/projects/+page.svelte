<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import TerminalHeader from '$lib/components/TerminalHeader.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { onMount } from 'svelte';
  
  type Category = 'all' | 'tech' | 'game' | 'fashion';

  interface Project {
    imageSrc: string;
    title: string;
    categories: Category[];
    description: string;
    link: string;
  }

  let projects = $state<Project[]>([]);
  let currentFilter = $state<Category>('all');

  onMount(async () => {
    const response = await fetch('/projects.json');
    projects = await response.json();
  });

  const categories: Category[] = ['all', 'tech', 'game'];

  const filteredProjects = $derived(
    currentFilter === 'all'
      ? projects
      : projects.filter((p) => p.categories.includes(currentFilter))
  );
</script>

<Navbar />

<div class="max-w-2xl mx-auto px-2 py-10 md:py-28">
  <div class="flex flex-col items-start gap-6 w-full">
    <TerminalHeader text="Projects" />

    <div class="font-mono text-base text-neutral-400 flex flex-wrap gap-2 items-center">
      {#each categories as category}
        <button
          type="button"
          onclick={() => (currentFilter = category)}
          class="cursor-pointer transition-colors duration-150 {currentFilter === category
            ? 'text-amber-300 font-bold'
            : 'hover:text-white'}"
        >
          --{category}
        </button>
      {/each}
    </div>

    {#each filteredProjects as project (project.title)}
      <a
        href={project.link}
        class="
          border-2
          border-transparent
          hover:border-emerald-500
          w-full
          duration-150
          block
        "
      >
        <ProjectCard
          imageSrc={project.imageSrc} 
          title={project.title} 
          description={project.description} 
        />
      </a>
    {:else}
      {#if projects.length > 0}
        <p class="font-mono text-neutral-500 text-sm mt-4">No projects found for category "{currentFilter}".</p>
      {/if}
    {/each}
  </div>
</div>