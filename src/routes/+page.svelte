<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Coiny&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
</head>

<script lang="ts">
  import { NavBar } from '$lib'
</script>

<body class="bg-beige px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-48">

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
      <button class="bg-medium-brown text-lg text-beige font-jetbrains py-2 px-4 rounded relative transform translate-y-2">
        GitHub
      </button>

      <a href="https://github.com/emilyrhee" target="_blank">
        <button class="bg-light-brown text-lg text-beige font-jetbrains py-2 px-4 rounded absolute top-0 left-0">
          GitHub
        </button>
      </a>

      <div class="relative inline-block">

        <button class="bg-dark-green text-lg text-beige font-jetbrains py-2 px-4 rounded absolute top-2 left-0">
          LinkedIn
        </button>

        <a href="https://www.linkedin.com/in/emily-rhee-055731167/" target="_blank">
          <button class="bg-green text-lg text-beige font-jetbrains py-2 px-4 rounded relative transform">
            LinkedIn
          </button>
        </a>
      </div>

    </div>

  </div>
</body>