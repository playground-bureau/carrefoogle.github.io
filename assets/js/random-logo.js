document.addEventListener('DOMContentLoaded', function () {
  // Array of available GIF numbers
  const gifNumbers = Array.from({ length: 15 }, (_, i) => i + 1)

  // Randomly select a GIF number
  const randomNumber = gifNumbers[Math.floor(Math.random() * gifNumbers.length)]

  // Construct the GIF filename
  const gifFilename = `assets/images/logos/logo-gif-${randomNumber}.gif`

  // Select all logo GIF images
  const logoGifs = document.querySelectorAll('.logo-gif')

  // Update the src attribute for all logo GIF images and handle loading
  logoGifs.forEach(gif => {
    // Create a new Image object to preload the GIF
    const img = new Image()
    img.src = gifFilename

    img.onload = function () {
      // Once the image is loaded, update the src and add the 'loaded' class
      gif.src = gifFilename
      gif.classList.add('loaded')

      // Hide the placeholder
      const placeholder = gif.previousElementSibling
      if (placeholder && placeholder.classList.contains('logo-placeholder')) {
        placeholder.style.display = 'none'
      }
    }

    img.onerror = function () {
      console.error('Failed to load GIF:', gifFilename)
      // Optionally, you can show an error message in the placeholder
      const placeholder = gif.previousElementSibling
      if (placeholder && placeholder.classList.contains('logo-placeholder')) {
        placeholder.textContent = 'Failed to load image'
      }
    }
  })
})
