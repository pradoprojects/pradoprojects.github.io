const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('.toggle-icon');
const root = document.body;

const savedTheme = localStorage.getItem('theme');
if(savedTheme==='dark'){ root.classList.add('dark'); icon.textContent='☀️'; }

toggleBtn.addEventListener('click',()=>{
  const isDark=root.classList.toggle('dark');
  localStorage.setItem('theme', isDark?'dark':'light');
  icon.textContent = isDark?'☀️':'🌙';
});
