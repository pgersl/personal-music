const filter = document.getElementById('filter')
const filterItems = document.querySelectorAll('.filter-item')
const headings = document.querySelectorAll('.filter-item-heading')

filter.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    headings.forEach(heading => {
        if (!(val === '')){
            heading.style.display = 'none'
        } else {
            heading.style.display = ''
        }
    })
    filterItems.forEach(filterItem => {
        const title = filterItem.querySelector('.filter-item-title').textContent.toLowerCase()
        if (!(title.includes(val))) {
            filterItem.style.display = 'none'
        } else {
            filterItem.style.display = ''
        }
        if (val === '') {
            filterItem.style.display = ''
            headings.style.display = ''
        }
    })
})