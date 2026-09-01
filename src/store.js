import { reactive } from 'vue'

export const SHELL_COLORS = [
  'slate',
  'navy',
  'blue',
  'turquoise',
  'green',
  'teal',
  'red',
  'maroon',
  'orange',
  'pink',
  'magenta',
  'darkpurple',
]

export const state = reactive({
  stage: 'boot',
  shell: 'slate',
  section: 'status',
  fullscreen: false,
  flashing: false,
  projectsNotifSeen: false,
  projectsFirstOpened: false,
})

export function boot() {
  if (state.stage !== 'boot') return
  state.stage = 'menu'
  state.section = 'status'
  state.flashing = true
  setTimeout(() => {
    state.flashing = false
  }, 720)
}

export function powerOff() {
  if (state.stage !== 'menu') return
  state.stage = 'off'
  state.fullscreen = false
  setTimeout(() => {
    state.stage = 'boot'
    state.section = 'status'
  }, 820)
}

export function openSection(id) {
  state.section = state.section === id ? 'status' : id
}

export function dismissProjectsNotif() {
  state.projectsNotifSeen = true
}

export function markProjectsFirstOpened() {
  state.projectsFirstOpened = true
}

export function setShell(color) {
  state.shell = color
}

export function toggleFullscreen() {
  state.fullscreen = !state.fullscreen
}

export function exitFullscreen() {
  state.fullscreen = false
}
