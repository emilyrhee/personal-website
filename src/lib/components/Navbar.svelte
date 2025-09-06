<script>
  let isMenuOpen = false;
  const navLinks = [
    { href: "/", label: "/Home" },
    { href: "/projects", label: "/Projects" },
  ];
</script>

<nav class="sticky top-0
            flex items-center justify-center
            py-5 z-10
            text-cyan-400 bg-neutral-900"
>
  <!-- Desktop Links -->
  <div class="hidden lg:flex space-x-10">
    {#each navLinks as { href, label }}
      <a href={href}>{label}</a>
    {/each}
  </div>

  <!-- Hamburger Button -->
  <div class="block lg:hidden">
    <button on:click={() => isMenuOpen = !isMenuOpen} 
      class="text-cyan-400" aria-label="Toggle menu"
    >
      <i class="fa-solid fa-bars fa-xl"></i>
    </button>
  </div>

  <!-- Mobile Links (Hamburger Menu) -->
  {#if isMenuOpen}
    <div class="flex flex-col items-start
                lg:hidden
                absolute top-16 right-0
                bg-neutral-900 text-cyan-400
                w-full
                space-y-5 p-5
                text-center"
    >
      {#each navLinks as { href, label }}
        <a href={href}>{label}</a><br>
      {/each}
    </div>
  {/if}

  <!-- Socials -->
  <div class="space-x-8 pl-12">
    <a
      href="https://github.com/emilyrhee"
      aria-label="Visit Emily Rhee's GitHub profile"
      target="_blank" rel="noopener noreferrer"
    >
      <i class="fa-brands fa-github fa-xl" style="color: #ffffff;"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/erhee"
      aria-label="Visit Emily Rhee's LinkedIn profile"
      target="_blank" rel="noopener noreferrer"
    >
      <i class="fa-brands fa-linkedin fa-xl" style="color: #ffffff;"></i>
    </a>
    <a
      href="https://www.youtube.com/@gettingtoone"
      aria-label="Visit Emily Rhee's YoutTube Channel, Getting to One"
      target="_blank" rel="noopener noreferrer"
    >
      <i class="fa-brands fa-youtube fa-xl" style="color: #ffffff;"></i>
    </a>

  </div>
</nav>