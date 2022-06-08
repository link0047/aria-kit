<script>
  import GlobalHeader from "$lib/globalheader";
  import { Sidebar, SidebarItem, SidebarPanel } from "$lib/sidebar";
  import { List, ListItem } from "$lib/list";
  import { Button } from "$lib/button";
  import { Select, SelectOptGroup ,SelectOption } from "$lib/select";
  import { store } from "../store";
  import Textfield from "$lib/textfield/textfield.svelte";
  import { ProductCard } from "$lib/card";


  $store = {
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
  };

  function addSidebarSection() {
    let len = $store.sidebarList.length;
    let len2 = $store.sections.length;

    $store.sidebarList[len] = {
      hasCollapsible: true,
      text: 'Card Group',
      props: {
        id: len,
        hasCollapsible: true,
      },
      addCard: (idx) => {
        let children = $store.sidebarList[idx].children;
        let len = children.length;
        let len2 = $store.sections[idx - 2].data.length;
        $store.sidebarList[idx].children[len] = { text: 'Card', id: len2 };
        $store.sections[idx - 2].data[len2] = { 
          component: ProductCard, 
          props: { 
            title: '',
            url: '',
            image: { 
              mobile: undefined,
              desktop: undefined,
              alt: '',
            }
          } 
        };
      },
      children: [{ text: 'Card' }],
    };

    $store.sections[len2] = { 
      type: 'cardgroup',
      heading: '',
      alignment: '',
      columnNumber: 2,
      data: [{ 
        component: ProductCard, 
        props: { 
          title: '',
          url: '',
          image: { 
            mobile: undefined,
            desktop: undefined,
            alt: '',
          }
        } 
      }] 
    }
  }

  function closePanel() {
    $store.sidebarPanel.opened = false;
    $store.sidebarPanel.items = [];
  }

  function handleSidebarAction(event) {
    const target = event.target;
    const componentType = target.textContent.trim();
    const currentSection = Number(target.parentElement.dataset.sectionIdx) - 2;
    console.log(componentType.toLowerCase());
    $store.sidebarPanel.title = componentType;
    $store.sidebarPanel.opened = true;
    switch(componentType.toLowerCase()) {
      case 'breadcrumbs':
      $store.sidebarPanel.items = [{
        component: Select,
        props: {
          labelText: 'Select Category',
          afterChange: (val) => {
            $store.header.currentPage = val;
          },
          selected: $store.header.currentPage
        },
        children: [
          {component: SelectOption, text: 'Tees', props: { value: 'Tees' }},
          {component: SelectOption, text: 'Body Jewelry', props: { value: 'Body Jewelry' }},
          {component: SelectOption, text: 'Fashion', props: { value: 'Fasion' }},
          {component: SelectOption, text: 'Naughty', props: { value: 'Naughty' }},
          {component: SelectOption, text: 'Party', props: { value: 'Party' }},
          {component: SelectOption, text: 'Drinkware', props: { value: 'Drinkware' }},
          {component: SelectOption, text: 'Gifts & Gags', props: { value: 'Gifts & Gags' }},
          {component: SelectOption, text: 'Pop Culture', props: { value: 'Pop Culture' }},
          {component: SelectOption, text: 'Seasonal', props: { value: 'Seasonal' }},
          {component: SelectOption, text: 'Clearance', props: { value: 'Clearance' }},
        ]
      }];
        break;
      case 'header':
        $store.sidebarPanel.items = [{
          component: Textfield,
          props: {
            labelText: 'Section Heading',
            variant: 'outline',
            value: $store.sections[currentSection].heading
          }
        },{
          component: Select,
          props: {
            labelText: 'Heading Alignment',
            selected: $store.sections.alignment
          },
          children: [
            {component: SelectOption, text: 'left', props: { value: 'left' }},
            {component: SelectOption, text: 'middle', props: { value: 'middle' }},
            {component: SelectOption, text: 'right', props: { value: 'right' }},
          ]
        }];
        break;
      case 'card':
        const idx = Number(target.parentElement.dataset.idx);
        const currentCard = $store.sections[currentSection].data[idx].props;
        $store.sidebarPanel.items = [{
          component: Textfield,
          props: {
            labelText: 'Title',
            variant: 'outline',
            value: currentCard.title,
            afterChange: (val) => {
              $store.sections[currentSection].data[idx].props.title = val;
            }
          },
          actions: {
            blur: ({ target: { value }}) => {
              $store.sections[currentSection].data[idx].props.title = value;
            }
          }
        },{
          component: Textfield,
          props: {
            labelText: 'Url',
            variant: 'outline',
            value: currentCard.url,
            afterChange: (val) => {
              $store.sections[currentSection].data[idx].props.url = val;
            }
          },
          actions: {
            blur: ({ target: { value }}) => {
              $store.sections[currentSection].data[idx].props.url = value;
            }
          }
        },{
          component: Textfield,
          props: {
            labelText: 'Mobile Image',
            variant: 'outline',
            value: currentCard.image.mobile,
            afterChange: (val) => {
              $store.sections[currentSection].data[idx].props.image.mobile = val;
            }
          },
          actions: {
            blur: ({ target: { value }}) => {
              $store.sections[currentSection].data[idx].props.image.mobile = value;
            }
          }
        },{
          component: Textfield,
          props: {
            labelText: 'Desktop Image',
            variant: 'outline',
            value: currentCard.image.desktop,
            afterChange: (val) => {
              $store.sections[currentSection].data[idx].props.image.desktop = val;
            }
          },
          actions: {
            blur: ({ target: { value }}) => {
              $store.sections[currentSection].data[idx].props.image.desktop = value;
            }
          }
        },{
          component: Textfield,
          props: {
            labelText: 'Alt',
            variant: 'outline',
            value: currentCard.image.alt,
            afterChange: (val) => {
              $store.sections[currentSection].data[idx].props.image.alt = val;
            }
          },
          actions: {
            blur: ({ target: { value }}) => {
              $store.sections[currentSection].data[idx].props.image.alt = value;
            }
          }
        }];
        break;
      case 'card group':
        $store.sidebarPanel.items = [{
          component: Textfield,
          props: {
            labelText: 'Section Heading',
            variant: 'outline',
            afterChange: (val) => {
              $store.sections[currentSection].heading = val;
            },
            value: $store.sections[currentSection].heading
          },
          actions: {
            blur: (event) => {
              $store.sections[currentSection].heading = event.target.value;
            }
          }
        },{
          component: Select,
          props: {
            labelText: 'Heading Alignment',
            afterChange: (val) => {
              $store.sections[currentSection].alignment = val;
            },
            selected: $store.sections[currentSection].alignment
          },
          actions: {
            blur: ({ target: { value }}) => {
              if ($store.sections[currentSection].alignment !== value) {
                $store.sections[currentSection].alignment = value;
              }
            },
          },
          children: [
            {component: SelectOption, text: 'left', props: { value: 'left' }},
            {component: SelectOption, text: 'middle', props: { value: 'middle' }},
            {component: SelectOption, text: 'right', props: { value: 'right' }},
          ]
        }, {
          component: Select,
          props: {
            labelText: 'Cards Per Row',
            afterChange: (val) => {
              $store.sections[currentSection].columnNumber = val;
            },
            selected: $store.sections[currentSection].columnNumber
          },
          actions: {
            blur: ({ target: { value }}) => {
              if ($store.sections[currentSection].columnNumber !== value) {
                $store.sections[currentSection].columnNumber = value;
              }
            }
          },
          children: [
            {component: SelectOption, text: '2', props: { value: 2 }},
            {component: SelectOption, text: '3', props: { value: 3 }},
            {component: SelectOption, text: '4', props: { value: 4 }},
            {component: SelectOption, text: '5', props: { value: 5 }},
            {component: SelectOption, text: '6', props: { value: 6 }},
          ]
        }];
        break;
      case 'carousel':
        $store.sidebarPanel.items = [{
            component: Textfield,
            props: {
              labelText: 'Section Heading',
              variant: 'outline'
            },
          }, {
            component: Select,
            props: {
              labelText: 'Cards Per View'
            },
            children: [
              {component: SelectOption, text: '2', props: { value: 2 }},
              {component: SelectOption, text: '3', props: { value: 3 }},
              {component: SelectOption, text: '4', props: { value: 4 }},
              {component: SelectOption, text: '5', props: { value: 5 }},
            ]
          }];
        break;
      default:
        break;
    }
  }
</script>
<div class="editor">
  <GlobalHeader>
    <Select slot="middle" style="width:400px" afterChange={(val) => {
      console.log(val)
      $store.sidebarPanel.heading = val;
    }}>
      <SelectOptGroup label="Select Template">
        <SelectOption value="homepage">homepage</SelectOption>
        <SelectOption value="section" selected>section</SelectOption>
        <SelectOption value="hybrid">hybrid</SelectOption>
      </SelectOptGroup>
    </Select>
  </GlobalHeader>
  <Sidebar title="{$store.sidebarPanel.heading}">
    <SidebarPanel title="{$store.sidebarPanel.title}" opened="{$store.sidebarPanel.opened}">
      <Button slot="closeBtn" variant="icon" on:click="{closePanel}">
        <svg role="presentation" focusable="false" class="icon" viewBox="0 0 24 24">
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
        </svg>
      </Button>
      {#each $store.sidebarPanel.items as item}
        <svelte:component this={item.component} {...item.props} on:blur={item.actions.blur}>
          {#if item.children}
            {#each item.children as child}
              <svelte:component this="{child.component}" {...child.props}>
                {child.text}
              </svelte:component>
            {/each}
          {/if}
        </svelte:component>
      {/each}
    </SidebarPanel>
    <List>
      {#each $store.sidebarList as item, i}
        {#if item.hasCollapsible}
          <SidebarItem {...item.props} data-section-idx={i} primaryAction="{handleSidebarAction}">
            {item.text}
            <List slot="collaspe" variant="indented">
              {#each item.children as child, j}
                <SidebarItem data-section-idx={i} data-idx={j} primaryAction="{handleSidebarAction}">
                  { child.text }
                </SidebarItem>
              {/each}
              <SidebarItem primaryAction="{item.addCard.bind(null, i)}">
                <svg style="fill:#2c6ecb" role="presentation" focusable="false" class="icon" viewBox="0 0 24 24">
                  <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
                </svg>
                Add Card
              </SidebarItem>
            </List>
          </SidebarItem>
        {:else}
          <SidebarItem {...item.props} data-section-idx={i} primaryAction={handleSidebarAction}>
            {item.text}
          </SidebarItem>
        {/if}
      {/each}
    </List>
    <Button on:click={addSidebarSection}>
      <svg style="fill:#2c6ecb" role="presentation" focusable="false" class="icon" viewBox="0 0 24 24">
        <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
      </svg>
      Add Section
    </Button>
  </Sidebar>
  <main class="editor__live-area">
    <section class="page">
      <slot />
    </section>
  </main>
</div>
<style>
.editor {
  min-width: 0;
  max-width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "header"
    "main"
    "primary-sidebar";
  width: 100vw;
  height: 100vh;
  background-color: rgba(246, 246, 247, 1);
  overflow: hidden;
}

@media (min-width: 41.6875em) {
  .editor {
    grid-template-columns: 300px 1fr;
    grid-template-areas: "header header" "primary-sidebar main"; 
  }
}

.editor__live-area {
  min-width: 0;
  max-width: 100%;
  grid-area: main;
  z-index: 40;
  position: relative;
  display: flex;
  padding: 24px;
  overflow: scroll;
}

.editor__live-area .page {
  padding: 8px;
  border-radius: 4px;
  overflow: scroll;
}

.page {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  line-height: 1.4em;
  font-size: 16px;
  direction: ltr;
  background-color: #fff;
  unicode-bidi: embed;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  font-synthesis: none;
  font-feature-settings: "liga", "kern";
}
</style>