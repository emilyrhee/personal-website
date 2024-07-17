<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Coiny&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
</head>

<script lang="ts">
  import { NavBar } from '$lib'
  import roomtour from '$lib/assets/roomtour.png'
</script>

<body class="bg-beige px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
  <NavBar />

  <div class="py-4 sm:py-8 md:py-16"></div>

  <div class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-7/12 2xl:w-7/12 mx-auto">
    <h1 class="pt-8 pb-6 text-brown text-6xl font-coiny">Projects</h1>

    <div class="relative bg-green text-lg text-beige font-jetbrains p-12 rounded">
      <!-- Top-left circle -->
      <div class="absolute top-4 left-4 w-4 h-4 bg-beige rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <!-- Top-right circle -->
      <div class="absolute top-4 right-4 w-4 h-4 bg-beige rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <!-- Bottom-left circle -->
      <div class="absolute bottom-4 left-4 w-4 h-4 bg-beige rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      <!-- Bottom-right circle -->
      <div class="absolute bottom-4 right-4 w-4 h-4 bg-beige rounded-full transform translate-x-1/2 translate-y-1/2"></div>

      <h2 class="text-beige text-4xl font-coiny">Room Tour</h2>
      <p class="py-2 text-beige font-jetbrains">
        A small game where I give a tour of my bedroom. The player walks into
        furniture to display a factoid about it. Made using the JavaFX library
        to assist with creating GUI.
      </p>
      <!-- <img class="mx-auto py-3" alt="Room tour program preview" src={roomtour} /> -->
      <a href="https://github.com/emilyrhee/room-tour" target="_blank" class="underline">Code</a>
    </div>
  </div>
  
</body>
