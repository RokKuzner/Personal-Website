const content_paragraphs = document.querySelectorAll(".content p")
const target_paragraph = content_paragraphs[1]

setTimeout(() => {
    // Get client rects for important elements
    let target_paragraph_rect = target_paragraph.getBoundingClientRect()

    // Calculate center y value of the paragraph
    const target_paragraph_center_y = target_paragraph_rect.top + (target_paragraph_rect.bottom - target_paragraph_rect.top) / 2

    // If the target element is not already scrolled to
    if (target_paragraph_center_y > window.innerHeight) {
        window.scrollBy(0, target_paragraph_center_y-window.innerHeight)
    }
}, 5000)