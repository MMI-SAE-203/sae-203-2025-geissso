import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const getCollection = async (invite) => {
  try {
    return await pb.collection(invite).getFullList();
  } catch (error) {
    console.error(`Erreur de récupération de la collection ${invite}:`, error);
    return [];
  }
};

const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    /** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{astro,html,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  