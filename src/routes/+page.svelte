<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Coiny&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
</svelte:head>

<script lang="ts">
  import { NavBar } from '$lib'
  import Button from '$lib/Button.svelte';

  const github = {
      label: 'GitHub',
      color: 'bg-light-brown',
      shading: 'bg-medium-brown',
      link: 'https://github.com/emilyrhee'
  };
  const linkedin = {
      label: 'LinkedIn',
      color: 'bg-green',
      shading: 'bg-dark-green',
      link: 'https://www.linkedin.com/in/emily-rhee-055731167/'
  };
</script>

<div class="md:px-8 lg:px-24 xl:px-32 2xl:px-48">
  <NavBar />

  <div class="py-4 sm:py-8 md:py-16"></div>

  <div class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-7/12 2xl:w-7/12 mx-auto">
    <h1 class="pt-8 py-4 text-brown text-6xl font-coiny">Hi, I'm Emily Rhee!</h1>
    <h3 class="text-brown text-3xl font-jetbrains-bold">Software developer</h3>
    <p class="py-4 text-lg text-brown font-jetbrains">
      I am pursuing a bachelor's degree in computer science at Central 
      Connecticut State University and hope to continue in grad school. My main interest in tech is in game 
      and web dev, but I also enjoy systems programming and embedded systems.
    </p>
    
    <div class="relative">
      <Button button={github} />

      <div class="relative inline-block">
        <Button button={linkedin}/>
      </div>
    </div>
  </div>
</div>