<!--
  @component
  Puts an emerald '>' at the beginning of text and applies white to the rest.

  **Parameters**  
  `text` - Text to go in header.
-->
<script>
  export let text;
</script>

<h3 class="text-white">
  <span class="text-emerald-500 font-extrabold">> </span>
  {text}
</h3>
