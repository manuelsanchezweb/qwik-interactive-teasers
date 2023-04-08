import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  IconBeer,
  IconCocktail,
  IconQwik,
  IconWine,
} from "~/components/icons/icons";
import { InteractiveElementLinear } from "~/components/interactive-element-linear";
import { InteractiveElementSelection } from "~/components/interactive-element-selection";

export default component$(() => {
  return (
    <main class="App mb-24">
      <section class="flex md:min-h-[40vh] w-full bg-[var(--color-primary)]">
        <div class="flex flex-col md:flex-row items-center justify-between w-full max-w-[var(--max-width)] mx-auto text-white p-4">
          <h1 class="text-6xl leading-[5rem] font-bold text-center md:text-left max-w-[800px]">
            Interactive elements with Qwik, TypeScript and TailwindCSS
          </h1>
          <IconQwik classCustom="min-w-[300px] h-auto" />
        </div>
      </section>
      <section class="flex flex-col min-h-[50vh] w-full  max-w-[var(--max-width)] mx-auto p-4">
        <h2 class="text-3xl font-bold text-center md:text-left max-w-[800px] my-6">
          Interactive Element: Selection
        </h2>
        <InteractiveElementSelection
          data={{
            headline: "What kind of drinker are you?",
            options: [
              {
                id: 1,
                icon: IconCocktail,
                label: "A cocktailer",
                title: "Cocktailers Create World Peace with One Sip at a Time",
                description:
                  "Did you know that cocktail enthusiasts, or 'cocktailers,' have a harmonious outlook on life? Through their pursuit of the perfect mix, they bring people together with delightful concoctions, fostering bonds between friends and strangers alike.",
                cta: {
                  label: "Learn more",
                  url: "https://www.google.com",
                },
              },
              {
                id: 2,
                icon: IconBeer,
                label: "A beerer",
                title:
                  "Beerers Unite: Craft Beer Lovers Showcase International Hops Harmony",
                description:
                  "Did you know that beer aficionados, known as 'beerers,' share a common passion that transcends borders and cultures? These hop-savvy enthusiasts are building connections worldwide by exchanging and exploring unique craft brews from around the globe",
                cta: {
                  label: "Learn more",
                  url: "https://www.google.com",
                },
              },
              {
                id: 3,
                icon: IconWine,
                label: "A winer",
                title:
                  "Winers' Secret Abilities: Wine Bottle Corks Turned into Lifelong Collectibles",
                description:
                  "Did you know that winers have a unique talent for turning their vast wine cork collections into creative masterpieces? From whimsical cork art to practical household items, their skills are as diverse as the vintages they adore!",
                cta: {
                  label: "Learn more",
                  url: "https://www.google.com",
                },
              },
            ],
          }}
        />
        <InteractiveElementSelection
          data={{
            headline: "What kind of drinker are you?",
            options: [
              {
                id: 1,
                icon: IconCocktail,
                label: "A cocktailer",
                title: "Cocktailers Create World Peace with One Sip at a Time",
                description:
                  "Did you know that cocktail enthusiasts, or 'cocktailers,' have a harmonious outlook on life? Through their pursuit of the perfect mix, they bring people together with delightful concoctions, fostering bonds between friends and strangers alike.",
                cta: {
                  label: "Learn more",
                  url: "https://www.google.com",
                },
              },
              {
                id: 2,
                icon: IconBeer,
                label: "A beerer",
                title:
                  "Beerers Unite: Craft Beer Lovers Showcase International Hops Harmony",
                description:
                  "Did you know that beer aficionados, known as 'beerers,' share a common passion that transcends borders and cultures? These hop-savvy enthusiasts are building connections worldwide by exchanging and exploring unique craft brews from around the globe",
                cta: {
                  label: "Learn more",
                  url: "https://www.google.com",
                },
              },
            ],
          }}
        />

        <InteractiveElementLinear
          data={{
            headline: "What kind of drinker are you?",
            options: [
              {
                id: 1,
                icon: IconCocktail,
                label: "A cocktailer",
                title: "Cocktailers Create World Peace with One Sip at a Time",
                description:
                  "Did you know that cocktail enthusiasts, or 'cocktailers,' have a harmonious outlook on life? Through their pursuit of the perfect mix, they bring people together with delightful concoctions, fostering bonds between friends and strangers alike.",
                cta: {
                  label: "Learn more",
                  url: "https://www.google.com",
                },
              },
              {
                id: 2,
                icon: IconBeer,
                label: "A beerer",
                title:
                  "Beerers Unite: Craft Beer Lovers Showcase International Hops Harmony",
                description:
                  "Did you know that beer aficionados, known as 'beerers,' share a common passion that transcends borders and cultures? These hop-savvy enthusiasts are building connections worldwide by exchanging and exploring unique craft brews from around the globe",
                cta: {
                  label: "Learn more",
                  url: "https://www.google.com",
                },
              },
            ],
          }}
        />
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Qwik - Interactive Elements",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
