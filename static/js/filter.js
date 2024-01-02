const filter = document.getElementById('filter')
const filterItems = document.querySelectorAll('.filter-item')

filter.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    filterItems.forEach(filterItem => {
        const title = filterItem.querySelector('.filter-item-title').textContent.toLowerCase()
        if (!(title.includes(val))) {
            filterItem.style.display = 'none'
        } else {
            filterItem.style.display = ''
        }
        if (val === '') {
            filterItem.style.display = ''
        }
    })
})