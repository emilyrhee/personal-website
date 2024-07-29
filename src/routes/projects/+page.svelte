<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Coiny&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
</head>

<script lang="ts">
  import NavBar from '$lib/NavBar.svelte'
  import RoomTour from '$lib/RoomTour.svelte';
  import GPT from '$lib/GPT.svelte'
  import PersonalSite from '$lib/PersonalSite.svelte';
  import BridgingTheRift from '$lib/BridgingTheRift.svelte';
</script>

<body class="bg-beige px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
  <NavBar />

  <div class="py-4 sm:py-8 md:py-16"></div>

  <div class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-7/12 2xl:w-7/12 mx-auto">
    <h1 class="pt-8 pb-6 text-brown text-6xl font-coiny">Projects</h1>

    <div class="py-4"></div>

    <RoomTour />

    <div class="py-4"></div>

    <GPT />

    <div class="py-4"></div>

    <PersonalSite />

    <div class="py-4"></div>

    <BridgingTheRift />

    <div class="py-4"></div>
  </div>
</body>
