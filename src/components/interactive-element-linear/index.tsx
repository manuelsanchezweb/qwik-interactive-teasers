import { $, Fragment, component$, useSignal } from "@builder.io/qwik";

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

export const InteractiveElementLinear = component$(({ data }: DataProps) => {
  const selectedOption = useSignal<OptionProps>();
  const viewSelected = useSignal<boolean>();
  const thumbValue = useSignal<number>(50);
  const isDragging = useSignal<boolean>(false);

  const handleOptionSelection = $((option: OptionProps) => {
    selectedOption.value = option;
    viewSelected.value = true;
  });

  const handlePointerDown = $((event: any) => {
    event.target.setPointerCapture(event.pointerId);
    isDragging.value = true;
  });

  const handlePointerMove = $((event: any) => {
    if (!isDragging.value) return;

    const sliderRect = event.target.parentElement?.getBoundingClientRect();

    if (!sliderRect) return;
    const newPosition = event.clientX - sliderRect.left;
    const percentage = (newPosition / sliderRect.width) * 100;

    thumbValue.value = Math.min(Math.max(0, percentage), 100);
  });

  const handlePointerUp = $(() => {
    isDragging.value = false;

    setTimeout(() => {
      if (thumbValue.value > 55) {
        handleOptionSelection(data.options[1]);
      } else if (thumbValue.value < 45) {
        handleOptionSelection(data.options[0]);
      }
    }, 500);
  });

  return (
    <div class="flex flex-col justify-between items-center my-12 gap-6 min-h-[20vh] md:min-h-[25vh]">
      {!viewSelected.value ? (
        <>
          <h2 class="text-3xl md:text-5xl max-w-[500px] text-center">
            {data.headline}
          </h2>
          <div class="flex  items-center gap-2 sm:gap-8 md:gap-12 w-full justify-center">
            {data.options.map((option, index) => (
              <Fragment key={option.id}>
                <div class="animated bg-[var(--color-light)] rounded-3xl flex flex-col items-center justify-center min-w-[125px] min-h-[125px] md:min-w-[175px] md:min-h-[175px] gap-4">
                  <option.icon />
                  <div>{option.label}</div>
                </div>
                {index === Math.floor(data.options.length / 2) - 1 && (
                  <div class=" animated flex relative my-8 h-8 bg-[var(--color-secondary)] max-w-[475px] w-full rounded-xl">
                    <button
                      onPointerDown$={handlePointerDown}
                      onPointerMove$={handlePointerMove}
                      onPointerUp$={handlePointerUp}
                      onPointerCancel$={handlePointerUp}
                      style={{
                        left: `${thumbValue.value}%`,
                      }}
                      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-[45px] rounded-full bg-[var(--color-primary)]"
                    ></button>
                  </div>
                )}
              </Fragment>
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
