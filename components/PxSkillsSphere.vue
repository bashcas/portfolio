<template>
  <canvas id="webgl"></canvas>
</template>

<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import font from "../assets/fonts/three/helvetiker_regular.typeface.json"
let camera, scene, renderer, canvas, sphere, controls
export default {
  name: "PxSkillsSphere",
  data() {
    return {
      techologies: [
        "",
        "",
        "Javascript",
        "React",
        "Vue",
        "Next",
        "NodeJS",
        "CSS",
        "Express",
        "Nuxt",
        "npm",
        "MongoDB",
        "MySQL",
        "three",
        "Redux",
        "PostgreSQL",
        "webpack",
        "Git",
        "Nuxt"
      ],
      rotationX: -0.005,
      rotationY: -0.005,
      rotationZ: -0.005,
      textMeshes: [],
      requestAnimationFrameID: Number,
      textMaterial: {}
    }
  },
  props: {
    dark: Boolean
  },
  watch: {
    dark: function() {
      if (this.dark) {
        this.textMaterial.color = new THREE.Color(0x64ffda)
      } else {
        this.textMaterial.color = new THREE.Color(0x1a73e8)
      }
    }
  },
  methods: {
    init() {
      canvas = document.querySelector("#webgl")
      /**
       * Scene
       */
      scene = new THREE.Scene()

      /**
       * Camera
       */
      camera = new THREE.PerspectiveCamera(
        70,
        canvas.parentElement.clientWidth / canvas.parentElement.clientHeight,
        10,
        200
      )
      camera.position.z = 40

      /**
       * Lights
       */
      const light = new THREE.AmbientLight(0xffffff, 3.5)
      scene.add(light)

      /**
       * Objects
       */
      const sphereGeometry = new THREE.SphereGeometry(20, 8, 8)
      const sphereMaterial = new THREE.MeshStandardMaterial({
        wireframe: true,
        transparent: true,
        opacity: 0.025
      })
      sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      sphere.rotation.x = 0
      sphere.rotation.y = 0
      scene.add(sphere)
      const helvetikerFont = new THREE.Font(font)

      this.textMaterial = new THREE.MeshStandardMaterial({
        color: this.dark ? "#64ffda" : "#1a73e8"
      })
      const vertices = sphereGeometry.attributes.position.array
      for (let i = 0; i < this.techologies.length; i++) {
        let i3 = i * 3
        const textGeometry = new THREE.TextGeometry(this.techologies[i], {
          font: helvetikerFont,
          size: 1.2,
          height: 0.2,
          curveSegments: 5,
          bevelEnabled: true,
          bevelThickness: 3,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 0
        })

        const textMesh = new THREE.Mesh(textGeometry, this.textMaterial)
        textMesh.position.set(
          vertices[i3 * 4],
          vertices[i3 * 4 + 1],
          vertices[i3 * 4 + 2]
        )
        textGeometry.center()
        scene.add(textMesh)
        this.textMeshes.push(textMesh)
      }

      /**
       * Renderer
       */
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
      })
      renderer.setSize(
        canvas.parentElement.clientWidth,
        canvas.parentElement.clientHeight
      )

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.physicallyCorrectLights = true
      // renderer.outputEncoding = THREE.sRGBEncoding;
      // renderer.toneMapping = THREE.ReinhardToneMapping;
      renderer.toneMappingExposure = 3
    },
    animate() {
      sphere.rotation.y += this.rotationX
      sphere.rotation.x += this.rotationY
      sphere.rotation.z += this.rotationZ
      sphere.geometry.attributes.position.needsUpdate = true
      this.trackPosition()
      controls.update()
      renderer.render(scene, camera)
      this.requestAnimationFrameID = window.requestAnimationFrame(this.animate)
    },
    addControls() {
      controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.enableRotate = false
      controls.enablePan = false
    },
    trackPosition() {
      this.textMeshes.forEach((mesh, index) => {
        let i3 = index * 3
        let x = sphere.geometry.attributes.position.array[i3 * 4]
        let y = sphere.geometry.attributes.position.array[i3 * 4 + 1]
        let z = sphere.geometry.attributes.position.array[i3 * 4 + 2]
        let vector = new THREE.Vector3(x, y, z)
        vector.applyMatrix4(sphere.matrixWorld)

        mesh.position.set(vector.x, vector.y, vector.z)
      })
    },

    getMousePosition(canvas, event) {
      const rect = canvas.getBoundingClientRect()
      return {
        x: (event.clientX - rect.left - rect.width / 2) / rect.width,
        y: (event.clientY - rect.top - rect.height / 2) / rect.height
      }
    },

    rotateSphere(event) {
      const position = this.getMousePosition(canvas, event)
      this.rotationX = position.x * 0.02
      this.rotationY = position.y * 0.02
      this.rotationZ = ((position.x + position.y) / 2) * 0.02
    },

    handleResize() {
      const width = canvas.parentElement.clientWidth
      const height = canvas.parentElement.clientHeight

      //Update renderer
      renderer.setSize(width, height)

      //Update camera
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
  },
  mounted() {
    this.init()
    window.addEventListener("resize", this.handleResize)
    canvas.addEventListener("mousemove", this.rotateSphere)
    canvas.addEventListener("click", this.rotateSphere)
    this.addControls()
    this.animate()
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize)
    window.cancelAnimationFrame(this.requestAnimationFrameID)
  }
}
</script>

<style></style>
