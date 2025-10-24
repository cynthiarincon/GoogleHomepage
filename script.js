const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  alert(query ? `You searched for: ${query}` : 'Please enter a search query.');
});

searchInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') searchButton.click();
});
