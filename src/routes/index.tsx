import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { themeDark, themeLight } from '~/components/router-head/theme-script';

export const ThemeDark = <script async dangerouslySetInnerHTML={themeDark} />;
export const ThemeLight = <script async dangerouslySetInnerHTML={themeLight} />;

export default component$(() => {
  const theme = useSignal(false);

  useVisibleTask$(() => {
    theme.value = localStorage.getItem('theme') === 'dark' ? true : false;
  });

  return (
    <div class="w-full h-screen">
      <button
        onClick$={() => {
          theme.value = !theme.value;
          theme.value
            ? localStorage.setItem('theme', 'dark')
            : localStorage.setItem('theme', 'light');
        }}
      >
        Switch
      </button>
      {theme.value ? ThemeDark : ThemeLight}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
