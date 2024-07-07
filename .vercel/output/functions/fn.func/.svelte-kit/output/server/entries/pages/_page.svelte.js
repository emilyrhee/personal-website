import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="flex justify-end space-x-10 py-8 text-brown font-jetbrains" data-svelte-h="svelte-12bzy3c"><a>Home</a> <a>About me</a> <a>Resume</a> <a>Projects</a></nav>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<head data-svelte-h="svelte-wz4r6a"><link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Coiny&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet"></head>  <body class="bg-beige px-4 sm:px-6 md:px-8 lg:px-16 xl:px-80">${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} <div class="py-16"></div> <h1 class="pt-8 py-4 text-brown text-6xl font-coiny" data-svelte-h="svelte-zhgsp3">Hi, I&#39;m Emily Rhee!</h1> <h3 class="text-brown text-3xl font-jetbrains-bold" data-svelte-h="svelte-1vuvbbn">Software developer</h3> <p class="py-4 text-lg text-brown font-jetbrains" data-svelte-h="svelte-xd3to7">I am pursuing a bachelor&#39;s degree in computer science at Central 
    Connecticut State University, and hope to continue in graduate school. My main interests in programming are in game 
    development, but I also dabble in a bit of web dev + embedded systems.</p> <a href="https://github.com/emilyrhee" target="_blank" data-svelte-h="svelte-1lfhx4m"><button class="bg-light-brown text-lg text-beige font-jetbrains py-2 px-4 rounded">GitHub</button></a> <a href="https://www.linkedin.com/in/emily-rhee-055731167/" target="_blank" data-svelte-h="svelte-1jw84ez"><button class="bg-green text-lg text-beige font-jetbrains py-2 px-4 rounded">LinkedIn</button></a></body>`;
});
export {
  Page as default
};
