<!--
  @component
  Puts an emerald '>' at the beginning of text and applies white to the rest.

  **Parameters**
  `text` - Text to go in header.
  `color` - (Optional) Color class for the '>'. Defaults to text-emerald-500.
-->
<script>
  export let text;
  export let textColor = "text-neutral-200";
  export let arrowColor = 'text-emerald-500'; // Default color
</script>

<h3 class="{textColor}">
  <span class="{arrowColor} font-extrabold">> </span>
  {text}
</h3>
