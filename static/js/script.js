const content_paragraphs = document.querySelectorAll(".content p")
const target_paragraph = content_paragraphs[1]

const scroll_duration = 2000;

// Easing function for ease-in-out
function easeInOutQuad(p) {
    return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
}

setTimeout(() => {
    // Get client rects for important elements
    let target_paragraph_rect = target_paragraph.getBoundingClientRect()

    // Calculate center y value of the paragraph
    let target_paragraph_center_y = target_paragraph_rect.top + (target_paragraph_rect.bottom - target_paragraph_rect.top) / 2

    // If the target element is not already scrolled to
    if (target_paragraph_center_y > window.innerHeight) {
        let starting_time = performance.now();
        let start_scroll_y = window.scrollY;
        let distance_to_scroll = (target_paragraph_center_y-window.innerHeight)

        function animateScroll(currentTime) {
            let elapsed_time = currentTime - starting_time;
            let progress = Math.min(elapsed_time / scroll_duration, 1);

            // Apply the easing function to the progress
            let eased_progress = easeInOutQuad(progress);

            let new_scroll_y = start_scroll_y + distance_to_scroll * eased_progress;

            window.scrollTo(0, new_scroll_y);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }

        // Start the animation loop
        requestAnimationFrame(animateScroll);
    }
}, 5000)