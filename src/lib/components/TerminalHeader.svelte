<!--
  @component
  Puts an emerald '>' at the beginning of text and applies white to the rest.

  **Parameters**
  `text` - Text to go in header.
  `textColor` - (Optional) Color class for the text. Defaults to text-neutral-200.
  `arrowColor` - (Optional) Color class for the '>'. Defaults to text-emerald-500.
  `headerSize` - (Optional) HTML tag for the header. Defaults to 'h3'.
-->
<script>
  export let text;
  export let textColor = "text-neutral-200";
  export let arrowColor = 'text-emerald-500'; // Default color
  export let headerSize = 'h3'; // Default header size
</script>

<svelte:element this={headerSize} class={textColor}>
  <span class="{arrowColor} font-extrabold">> </span>
  {text}
</svelte:element>
