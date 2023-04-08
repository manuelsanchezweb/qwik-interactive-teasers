import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate, stagger } from "motion";

type OptionProps = {
  id: number;
  icon: any;
  label: string;
  title: string;
  description?: string;
  cta?: {
    label: string;
    url: string;
  };
};

type DataProps = {
  data: {
    headline: string;
    options: OptionProps[];
  };
};

export const InteractiveElementSelection = component$(({ data }: DataProps) => {
  const selectedOption = useSignal<OptionProps>();
  const viewSelected = useSignal<boolean>();

  const handleOptionSelection = $((option: OptionProps) => {
    selectedOption.value = option;
    viewSelected.value = true;
  });

  useVisibleTask$(() => {
    const allButtons = document.querySelectorAll(".animated");
    if (!allButtons) return;

    animate(
      allButtons,
      { opacity: [0, 1], scale: [0, 1] },
      { delay: stagger(0.1), easing: "ease-in-out" }
    );
  });

  return (
    <div class="flex flex-col md:flex-row justify-between items-center gap-6 my-12 md:my-2 min-h-[20vh] md:min-h-[40vh]">
      {!viewSelected.value ? (
        <>
          <h2 class="text-3xl md:text-5xl max-w-[500px] mb-4 text-center md:text-left">
            {data.headline}
          </h2>
          <div class="flex flex-wrap justify-center gap-6">
            {data.options.map((option) => (
              <button
                key={option.id}
                onClick$={() => handleOptionSelection(option)}
                class="animated bg-[var(--color-light)] rounded-3xl flex flex-col items-center justify-center min-w-[175px] min-h-[175px] gap-4 hover:bg-[var(--color-secondary)] focus:bg-[var(--color-secondary)]"
              >
                <option.icon />
                <div>{option.label}</div>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div class="flex flex-col items-center justify-center max-w-[900px] mx-auto text-center relative p-12 lg:p-6">
          <button
            class="bg-[var(--color-light)] p-4 w-[20px] h-[20px] flex items-center justify-center rounded-full absolute right-2 top-0"
            onClick$={() => (viewSelected.value = false)}
          >
            x
          </button>
          <h2 class="text-5xl font-semibold mb-4">
            {selectedOption?.value?.title}
          </h2>
          <p class="text-xl mb-8">{selectedOption?.value?.description}</p>
          {selectedOption?.value?.cta?.url &&
            selectedOption?.value?.cta?.label && (
              <a
                href={selectedOption?.value?.cta.url}
                class="border border-black bg-[var(--color-secondary)]  px-4 py-2 rounded mt-4"
              >
                {selectedOption?.value?.cta?.label}
              </a>
            )}
        </div>
      )}
    </div>
  );
});
