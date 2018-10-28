

export function saveHistory(query) {
  let existingHistory = localStorage.getItem('history') || '';
  localStorage.setItem('history', existingHistory += `${query};`);
};

export function getHistory() {
  return localStorage.getItem('history') || '';
}