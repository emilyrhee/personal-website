<script>
  export let imageSrc;
  export let title;
  export let description;
</script>

<div class="flex items-center gap-4">
  <img src={imageSrc} class="w-40 md:w-64 aspect-square md:aspect-video object-cover" alt={title} />
  <div class="flex flex-col">
    <h6 class="text-white">{title}</h6>
    <p class="text-white">{description}</p>
  </div>
</div>