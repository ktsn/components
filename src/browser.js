export const raf = window.requestAnimationFrame.bind(window)

export const getStyle = window.getComputedStyle

export function append (parent, child) {
  parent.appendChild(child)
}
