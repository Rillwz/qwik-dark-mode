export const themeScript: string = `
    var mainE = document.firstElementChild.getElementsByClassName('render')[0];

    mainE.classList.add('bg-gray-100');

    if (localStorage.theme === 'dark') {
      mainE.classList.remove('bg-gray-100');
      mainE.classList.add('dark', 'bg-black');
    } else if (localStorage.theme === 'light') {
      mainE.classList.remove('dark', 'bg-black');
      mainE.classList.add('bg-gray-100');
    }
   `;

export const themeDark: string = `
   var mainE = document.firstElementChild.getElementsByClassName('render')[0];
   if (localStorage.theme === 'dark') {
   mainE.classList.add('dark', 'bg-black');
   mainE.classList.remove('bg-gray-100');
   }
   `;

export const themeLight: string = `
   var mainE = document.firstElementChild.getElementsByClassName('render')[0];
   if (localStorage.theme === 'light') {
   mainE.classList.remove('dark', 'bg-black')
   mainE.classList.add('bg-gray-100');
   }
   `;

export default themeScript;
