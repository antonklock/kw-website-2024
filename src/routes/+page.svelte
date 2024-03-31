<script lang="ts">
	import ThreeBackground from '$lib/components/ThreeBackground.svelte';
</script>

<div class="h-screen absolute">
	<div class="absolute -z-10">
		<ThreeBackground />
	</div>

	<div class="static w-full z-10">
		<div class="h-full flex flex-col items-center">
			<img src="/kw_lofo_full_white.png" class="w-1/2 md:w-1/4 mt-20" alt="Klockworks logo" />
			<div class="w-full px-4 sm:w-1/2 mt-10 flex flex-col items-center">
				<video
					autoplay
					loop
					muted
					class="rounded-l-md rounded-b-md max-w-1/2 drop-shadow-3xl shadow-blue-600/15 shadow-3xl"
				>
					<source src="/klockworks_showreel.mp4" type="video/mp4" />
				</video>
				<div
					class="flex flex-col w-full sm:w-1/2 mt-10 border-gray-400 border-2 px-20 py-10 rounded-l-xl rounded-b-xl backdrop-blur-sm bg-opacity-50 bg-black"
				>
					<!-- <img src="/kw_box_white.png" alt="KW Box" class="" /> -->
					<div class="text-white">
						<p>Anton Klock</p>
						<p>anton@klockworks.studio</p>
						<p>+46 727 207937</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
