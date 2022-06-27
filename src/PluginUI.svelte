<script>

	import { Checkbox } from 'figma-plugin-ds-svelte';

    let isChecked = false;

	function toggleSpacers() {
        console.log("Toggle spacer called..."+isChecked)
		parent.postMessage({ pluginMessage: { 
			'type': 'toggle-spacers', 
			'status': isChecked,
		} }, '*');
	}
</script>


<div class="wrapper p-xxsmall">
<Checkbox on:change={toggleSpacers} bind:checked={isChecked}>Afficher les espacements</Checkbox>
 </div>


<style>

/* Add additional global or scoped styles here */

</style>