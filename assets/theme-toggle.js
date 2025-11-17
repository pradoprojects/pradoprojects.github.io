const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn ? toggleBtn.querySelector('.toggle-icon') : null;
const root = document.documentElement;

function applyIcon(isDark){
  if(icon){
    icon.textContent = isDark ? '☀️' : '🌙';
  }
  if(toggleBtn){
    toggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    toggleBtn.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
  }
}

// Load saved preference
try {
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme === 'dark'){
    root.classList.add('dark');
    applyIcon(true);
  } else if(savedTheme === 'light'){
    root.classList.remove('dark');
    applyIcon(false);
  } else if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    root.classList.add('dark');
    applyIcon(true);
  } else {
    applyIcon(false);
  }
} catch(e){
  applyIcon(root.classList.contains('dark'));
}

// Toggle on click
if(toggleBtn){
  toggleBtn.addEventListener('click', ()=>{
    const isDark = root.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch(e){}
    applyIcon(isDark);
  });
}
