const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('.toggle-icon');
const root = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if(savedTheme==='dark'){ root.classList.add('dark'); icon.textContent='☀️'; }
else if(savedTheme==='light'){ root.classList.remove('dark'); icon.textContent='🌙'; }
else if(window.matchMedia('(prefers-color-scheme: dark)').matches){ root.classList.add('dark'); icon.textContent='☀️'; }

// Toggle on click
toggleBtn.addEventListener('click', ()=>{
  const isDark = root.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  icon.textContent = isDark ? '☀️' : '🌙';
});
