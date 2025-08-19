const content_paragraphs = document.querySelectorAll(".content p")
const target_paragraph = content_paragraphs[1]
const mail_anchor = document.querySelector("#mail")

console.log(target_paragraph.getBoundingClientRect())

setTimeout(() => {
    // Get client rects for important elements
    let target_paragraph_rect = target_paragraph.getBoundingClientRect()
    let mail_anchor_rect = mail_anchor.getBoundingClientRect()

    // Calculate center y value of the paragraph
    const target_paragraph_center_y = target_paragraph_rect.top + (target_paragraph_rect.bottom - target_paragraph_rect.top)
}, 5000)