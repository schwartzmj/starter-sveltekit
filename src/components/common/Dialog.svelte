<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from '$components/common/Button.svelte';
	import type { Icon } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	// TODO: this dialog should open in a portal
	export let triggerText: string;
	// NOTE: This component may have to use Svelte 4 types until lucide-svelte is updated https://github.com/lucide-icons/lucide/issues/2312
	export let TriggerIcon: ComponentType<Icon> | undefined = undefined;

	export let dialogOpen = false;
	export let onDialogClose: (() => void) | undefined = undefined;

	function closeDialog() {
		dialogOpen = false;
		if (onDialogClose) onDialogClose();
	}

	function openDialog() {
		dialogOpen = true;
	}
</script>

<Button onClick={() => openDialog()}>
	{#if TriggerIcon}
		<TriggerIcon class="h-5 w-5" />
	{/if}
	{triggerText}
</Button>
{#if dialogOpen}
	<div class="fixed inset-0 z-10 overflow-y-auto" transition:fade={{ duration: 250 }}>
		<div
			class="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0"
		>
			<div class="fixed inset-0" aria-hidden="true">
				<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
			</div>

			<span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true"
				>&#8203;</span
			>

			<div
				class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
			>
				<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
					<!-- <div class="sm:flex sm:items-start"> -->
					<div>
						<!-- <div
							class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 sm:mx-0 sm:h-10 sm:w-10"
						>
							<svg
								class="h-6 w-6 text-primary-600"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 9v2m0 4h.01m-6.938-6L12 4.062 18.938 9H5.062z"
								/>
							</svg>
						</div> -->
						<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
							<slot {closeDialog} {openDialog} />
							<!-- <h3 class="text-lg leading-6 font-medium text-gray-900">Create new option</h3>
							<div class="mt-2">
								<p class="text-sm text-gray-500">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum
									similique veniam quo totam eius aperiam dolorum.
								</p>
							</div> -->
						</div>
					</div>
				</div>
				<div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
					<button
						type="button"
						class="mt-3 inline-flex w-full justify-center rounded-md border border-red-300 bg-white px-4 py-2 text-base font-medium text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
						on:click={closeDialog}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
