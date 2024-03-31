<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	let canvas: HTMLCanvasElement;

	import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
	import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
	import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
	import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

	onMount(() => {
		//initiate three scene
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 10;
		const renderer = new THREE.WebGLRenderer({ canvas });
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);

		//create a cube

		let cubes: {
			cube: THREE.Mesh;
			rotationSpeed: number;
			rotationDirection: number;
		}[] = [];

		//Make a loop and spawn 5 cubes in random positions
		for (let i = 0; i < 10; i++) {
			//Create a red, blue and green color and pick a random one
			const colors = [0xff0000, 0x00ff00, 0x0000ff];
			const randomColor = colors[Math.floor(Math.random() * colors.length)];

			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial({ color: randomColor, wireframe: true });
			const cube = new THREE.Mesh(geometry, material);

			//make a cube object with rotation speed and rotation direction properties
			const cubeObject = {
				cube,
				rotationSpeed: Math.random() * 0.01,
				rotationDirection: Math.random() > 0.5 ? 1 : -1
			};

			cubes.push(cubeObject);

			cube.position.x = (Math.random() * 10 - 5) * 2;
			cube.position.y = Math.random() * 10 - 5;
			cube.position.z = Math.random() * 10 - 5;
			scene.add(cube);
		}

		//add a light
		const light = new THREE.DirectionalLight(0xffffff, 1);
		light.position.set(1, 1, 1).normalize();
		scene.add(light);

		const composer = new EffectComposer(renderer);
		composer.addPass(new RenderPass(scene, camera));

		const bloomPass = new UnrealBloomPass(
			new THREE.Vector2(window.innerWidth, window.innerHeight),
			3,
			1,
			0
		);

		composer.addPass(bloomPass);

		//add render loop
		const animate = () => {
			requestAnimationFrame(animate);

			//traverse through the cubes and rotate them
			cubes.forEach((cube) => {
				cube.cube.rotation.x += cube.rotationSpeed * cube.rotationDirection;
				cube.cube.rotation.y += cube.rotationSpeed * cube.rotationDirection;
			});

			// renderer.render(scene, camera);
			composer.render();
		};
		animate();
	});
</script>

<canvas class="w-full h-full" bind:this={canvas}></canvas>
