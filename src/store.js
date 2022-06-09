import { writable } from 'svelte/store';

export let store = writable({
  selectedTemplate: 'Homepage',
  sidebarPanel: {
    heading: 'Homepage',
    opened: false,
    title: undefined,
    items: []
  },
  sidebarList: [
    { text: 'Breadcrumbs', props:{ id: 0 }},
    { text: 'Header', props: { id: 1 }}
  ],
  header: {
    hasBreadcrumbs: true,
    currentPage: 'Tees'
  },
  sections: []
});