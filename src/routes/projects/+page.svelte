<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Coiny&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
</head>

<script lang="ts">
  import NavBar from '$lib/NavBar.svelte'
  import Project from '$lib/Project.svelte';

  const projects = [
    {
      name: 'Bridging the Rift',
      color: 'bg-blue',
      description: 'A platformer game in which the player collects materials to help build bridges after a natural disaster. Made using Godot in C#.',
      link: 'https://github.com/emilyrhee/bridging-the-rift'
    },
    {
      name: 'emilyrhee.me',
      color: 'bg-red',
      description: 'The website you are on right now! Created using the Sveltekit framework and Tailwind CSS. Prototyped in Figma Design.',
      link: 'https://github.com/emilyrhee/personal-site'
    },
    {
      name: 'Room Tour',
      color: 'bg-green',
      description: 'A game where I give a tour of my bedroom. The player walks into furniture to display a factoid about it. Made using Java + JavaFX.',
      link: 'https://github.com/emilyrhee/room-tour'
    },
    {
      name:'GPT',
      color: 'bg-light-brown',
      description: 'A group project to create a generative pre-trained transformer which takes input text data, trains off of it, and outputs text of a similar style. Made using Python + PyTorch.',
      link: 'https://github.com/CCSU-AI-2024/gpt'
    }
  ];
</script>

<body class="bg-beige px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
  <NavBar />

  <div class="py-4 sm:py-8 md:py-16"></div>

  <div class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-7/12 2xl:w-7/12 mx-auto">
    <h1 class="pt-8 pb-6 text-brown text-6xl font-coiny">Projects</h1>

    <div class="py-4"></div>

    {#each projects as project}
      <Project {project} />
    {/each}
  </div>
</body>
