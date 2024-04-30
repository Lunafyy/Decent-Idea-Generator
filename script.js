var descriptors = ["Voice-activated", "AI", "Natural Language Processing", "Predictive", "Telepathic", "Facial Recognition", "Quiz", "Codebreaker", "Problem Solving", "Brainrot", "Pattern Recognition"];
var platforms = ["Mobile App", "Minecraft Plugin", "C# WinForms App", "Website", "Social Media Bot", "Discord Bot", "Unity Game", "Browser Extension"];

/**
 * Resets the animation of the first element with the class 'idea'.
 *
 * @returns {void} This function does not return any value.
 */
function reset_animation() {
    var ideaElement = document.getElementsByClassName('idea')[0]; // Get the first element with the class 'idea'
    ideaElement.style.animation = 'none'; // Set animation to 'none'
    ideaElement.offsetHeight; // Trigger a reflow
    ideaElement.style.animation = null;  // Remove animation
}

/**
 * Generates a new idea.
 *
 * @returns {void} This function does not return any value.
 */
function generateIdea() {
    reset_animation(); // Reset the animation of the first element with the class 'idea'

    // Generate a random index for each list
    var randomDescriptorIndex = Math.floor(Math.random() * descriptors.length);
    var randomPlatformIndex = Math.floor(Math.random() * platforms.length);

    // Get the random elements from the lists
    var randomDescriptor = descriptors[randomDescriptorIndex];
    var randomPlatform = platforms[randomPlatformIndex];

    var ideaElement = document.getElementsByClassName('idea')[0]; // Get the first element with the class 'idea'
    var newIdea = randomDescriptor + " " + randomPlatform;

    ideaElement.innerText = newIdea // Example: Set the inner text to "New Idea".

    ideaElement.parentElement.href = "https://www.google.com/search?q=" + newIdea + "+Project"; // Example: https://www.google.com/search?q=voice-activated+minecraft+plugin
    ideaElement.parentElement.target = "_blank"; // Open the link in a new tab
}

/**
 * Callback function for particles.js config loading.
 *
 * @callback particlesjsConfigLoadedCallback
 * @returns {void} This function does not return any value.
 */
particlesJS.load("particles-js", "assets/particlesjs-config.json", function () {
    console.log("callback - particles.js config loaded");
  });
  