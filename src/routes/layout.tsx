import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import styles from './styles.css?inline';
import themeScript from '~/components/router-head/theme-script';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export const ThemeRefresh = <script dangerouslySetInnerHTML={themeScript} />;

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="render">
      {ThemeRefresh}
      <main>
        <Slot />
      </main>
    </div>
  );
});
