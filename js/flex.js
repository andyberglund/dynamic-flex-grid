function toggleOpen() {
    'use strict'
    const toggleId = this.id
    const active = document.getElementById(toggleId)
    const classes = ['active', 'passive', 'nxt-row']
    const elements = []
    container.forEach(attr => {
        elements.push({
            id: attr.id
        })
    })
    const inactiveElements = elements.filter(inactive => (inactive.id != toggleId && inactive.id <= elements.length))
    container.forEach(item => {
        classes.forEach(remove => {
            if (item.classList.contains(remove)) {
                item.classList.toggle(remove)
            }
        })
    });
    inactiveElements.forEach(sideElement => {
        const change = document.getElementById(sideElement.id)
        active.classList.toggle('active')
        if (change.id != '2' && toggleId == '1' || change.id != '3' && toggleId == '4' || change.id != '4' && toggleId == '3' || change.id != '1' && toggleId == '2') {
            change.classList.toggle('nxt-row')
        } else {
            change.classList.toggle('passive')
        }
    })
}
const container = document.querySelectorAll('.sectionContainer')
container.forEach(item => item.addEventListener('click', toggleOpen))
