import * as DOMPurify from 'dompurify'

export function sanitize(html) {
  if (typeof DOMPurify.sanitize !== 'undefined') {
    return DOMPurify.sanitize(html, {
      ALLOWED_ATTR: ['style', 'class', 'type', 'href'],
      USE_PROFILES: {
        html: true,
        mathml: true,
        svg: true,
      },
      ALLOWED_TAGS: [
        'figure',
        'table',
        'caption',
        'thead',
        'tr',
        'th',
        'tbody',
        'td',
        'style',
      ],
    })
  } else {
    return ""
  }
}
