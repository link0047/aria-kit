<script>
  import { Listbox, ListboxOption } from '$lib/listbox';
  import { Select, SelectOptGroup, SelectOption } from '$lib/select';
  import { Popover } from '$lib/popover';
  import Textfield from '$lib/textfield';
  import Panel from '$lib/panel';
  import { ProductCard } from "$lib/card"; 

  const options = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  const cards = [
    { component: ProductCard, 
      props: { 
        title: 'Naughty',
        url: '/section/naughty/2352.uts?utm_medium=home_page&utm_source=grid_spot1&utm_campaign=naughty&utm_content=naughty_category&utm_term=26_dec_2021&utm_inex=i',
        image: { 
          mobile: '//spencers.scene7.com/is/image/Spencers/12_27_21_Naughty_Circle_D?$Fullsize%5FLessComp$',
          desktop: '//spencers.scene7.com/is/image/Spencers/12_27_21_Naughty_Circle_D?$Fullsize%5FLessComp$',
          alt: 'Naughty',
        }
      } 
    },
    { component: ProductCard, 
      props: { 
        title: 'Lingerie',
        url: '/section/lingerie/213.uts?utm_medium=home_page&utm_source=grid_spot2&utm_campaign=naughty&utm_content=lingerie_category&utm_term=26_dec_2021&utm_inex=i',
        image: { 
          mobile: '//spencers.scene7.com/is/image/Spencers/12_27_21_Lingerie_Circle_D?$Fullsize%5FLessComp$',
          desktop: '//spencers.scene7.com/is/image/Spencers/12_27_21_Lingerie_Circle_D?$Fullsize%5FLessComp$',
          alt: 'Lingerie',
        }
      } 
    },
    { component: ProductCard, 
      props: { 
        title: 'Tees',
        url: '/section/tees/3369.uts?utm_medium=home_page&utm_source=grid_spot3&utm_campaign=tee_shop&utm_content=shop_tees&utm_term=26_dec_2021&utm_inex=i',
        image: { 
          mobile: '//spencers.scene7.com/is/image/Spencers/11_08_21_Category_Circles_Tees?$Fullsize%5FLessComp$',
          desktop: '//spencers.scene7.com/is/image/Spencers/11_08_21_Category_Circles_Tees?$Fullsize%5FLessComp$',
          alt: 'Tees',
        }
      } 
    },
    { component: ProductCard, 
      props: { 
        title: 'Body Jewelry',
        url: '/section/body-jewelry/2025.uts?utm_medium=home_page&utm_source=grid_spot4&utm_campaign=body_jewelry&utm_content=body_jewelry&utm_term=26_dec_2021&utm_inex=i',
        image: { 
          mobile: '//spencers.scene7.com/is/image/Spencers/12%5F27%5F21%5FJewelry%5FCircle%5FD?$Fullsize%5FLessComp$',
          desktop: '//spencers.scene7.com/is/image/Spencers/12%5F27%5F21%5FJewelry%5FCircle%5FD?$Fullsize%5FLessComp$',
          alt: 'Body Jewelry',
        }
      } 
    }, 
    { component: ProductCard, 
      props: { 
        title: 'Drinkware',
        url: '/category/party/drinkware/pc/4664/285.uts?utm_medium=home_page&utm_source=grid_spot5&utm_campaign=home_dorm&utm_content=drinkware_category&utm_term=26_dec_2021&utm_inex=i',
        image: { 
          mobile: '//spencers.scene7.com/is/image/Spencers/12_27_21_Drinkware_Circle_D?$Fullsize%5FLessComp$',
          desktop: '//spencers.scene7.com/is/image/Spencers/12_27_21_Drinkware_Circle_D?$Fullsize%5FLessComp$',
          alt: 'Drinkware',
        }
      } 
    }, 
    { component: ProductCard, 
      props: { 
        title: 'Backpacks',
        url: '/category/fashion/backpacks/pc/4663/2024.uts?utm_medium=home_page&utm_source=grid_spot6&utm_campaign=fashion&utm_content=backpacks_category&utm_term=26_dec_2021&utm_inex=i',
        image: { 
          mobile: '//spencers.scene7.com/is/image/Spencers/12_27_21_Backpacks_Circle_D?$Fullsize%5FLessComp$',
          desktop: '//spencers.scene7.com/is/image/Spencers/12_27_21_Backpacks_Circle_D?$Fullsize%5FLessComp$',
          alt: 'Backpacks',
        }
      } 
    }, 
    { component: ProductCard, 
      props: { 
        title: 'Home Decor',
        url: '/category/gifts-gags/room-accessories/pc/4700/1684.uts?utm_medium=home_page&utm_source=grid_spot7&utm_campaign=gifts_gags&utm_content=room_accessories&utm_term=26_dec_2021&utm_inex=i',
        image: { 
          mobile: '//spencers.scene7.com/is/image/Spencers/12_27_21_Home_Decor_Circle_D?$Fullsize%5FLessComp$',
          desktop: '//spencers.scene7.com/is/image/Spencers/12_27_21_Home_Decor_Circle_D?$Fullsize%5FLessComp$',
          alt: 'Home Decor',
        }
      } 
    }, 
    { component: ProductCard, 
      props: { 
        title: 'Holistic',
        url: '/category/gifts-gags/holistic-healing/pc/4700/4173.uts?utm_medium=home_page&utm_source=grid_spot8&utm_campaign=gifts_gags&utm_content=holistic_healing&utm_term=26_dec_2021&utm_inex=i',
        image: { 
          mobile: '//spencers.scene7.com/is/image/Spencers/12_27_21_Holistic_Circle_D?$Fullsize%5FLessComp$',
          desktop: '//spencers.scene7.com/is/image/Spencers/12_27_21_Holistic_Circle_D?$Fullsize%5FLessComp$',
          alt: 'Holistic',
        }
      } 
    }, 
    { component: ProductCard, 
      props: { 
        title: 'Lava Lamps',
        url: '/category/gifts-gags/lava-lamps/pc/4700/310.uts?utm_medium=home_page&utm_source=grid_spot9&utm_campaign=gifts_gags&utm_content=lava_lamps&utm_term=26_dec_2021&utm_inex=i',
        image: { 
          mobile: '//spencers.scene7.com/is/image/Spencers/12_27_21_Lava_Circle_D?$Fullsize%5FLessComp$',
          desktop: '//spencers.scene7.com/is/image/Spencers/12_27_21_Lava_Circle_D?$Fullsize%5FLessComp$',
          alt: 'Lava Lamps',
        }
      } 
    }, 
    { component: ProductCard, 
      props: { 
        title: 'Fleece Blankets',
        url: '/category/gifts-gags/fleece-blankets/pc/4700/306.uts?utm_medium=home_page&utm_source=grid_spot10&utm_campaign=gifts_gags&utm_content=fleece_blankets&utm_term=26_dec_2021&utm_inex=i',
        image: { 
          mobile: '//spencers.scene7.com/is/image/Spencers/12_27_21_Fleece_Circle_D?$Fullsize%5FLessComp$',
          desktop: '//spencers.scene7.com/is/image/Spencers/12_27_21_Fleece_Circle_D?$Fullsize%5FLessComp$',
          alt: 'Fleece Blankets',
        }
      } 
    }, 
    { component: ProductCard, 
      props: { 
        title: 'Games',
        url: '/category/party/games-puzzles/pc/4664/1593.uts?utm_medium=home_page&utm_source=grid_spot10&utm_campaign=party&utm_content=games&utm_term=26_dec_2021&utm_inex=i',
        image: { 
          mobile: '//spencers.scene7.com/is/image/Spencers/12_27_21_Games_Circle_D?$Fullsize%5FLessComp$',
          desktop: '//spencers.scene7.com/is/image/Spencers/12_27_21_Games_Circle_D?$Fullsize%5FLessComp$',
          alt: 'Games',
        }
      } 
    }, 
    { component: ProductCard, 
      props: { 
        title: 'Clearance',
        url: '/section/clearance/3257.uts?utm_medium=home_page&utm_source=grid_spot12&utm_campaign=deals&utm_content=clearance&utm_term=08_feb_2021&utm_inex=i',
        image: { 
          mobile: '//spencers.scene7.com/is/image/Spencers/Circles_12_232x232_2019?$fullsize$',
          desktop: '//spencers.scene7.com/is/image/Spencers/Circles_12_232x232_2019?$fullsize$',
          alt: 'Clearance',
        }
      } 
    }
  ]
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<section class="page-section">
  <header class="page-section__header"> 
    <h1 class="page-section__title"><span>Style Your Way</span></h1> 
  </header>
  <div class="grid" role="group" style="--columns:6">
    {#each cards as card, i}
      <svelte:component this={card.component} {...card.props}/>
    {/each}
  </div>
</section>
<Panel>
  <Textfield labelText="Heading" variant="outline"/>
  <Select labelText="Cards per row">
    <SelectOptGroup label="Select Template">
      <SelectOption>3</SelectOption>
      <SelectOption>4</SelectOption>
      <SelectOption>5</SelectOption>
    </SelectOptGroup>
  </Select>
</Panel>
<Popover>
  <Listbox>
    {#each options as option, i }
      <ListboxOption>{i}</ListboxOption>
    {/each}
  </Listbox>
</Popover>
<Popover>
  <Listbox>
    <ListboxOption>0</ListboxOption>
  </Listbox>
</Popover>
<style>
  .page-section__header {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    padding: 8px;
  }

  .page-section__header .page-section__title {
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .page-section__title {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4em;
    margin: 0;
    position: relative;
    text-align: center;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(var(--columns, 4), 1fr);
    gap: 8px;
  }
</style>