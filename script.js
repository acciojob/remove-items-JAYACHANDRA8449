document.querySelector('input').addEventListener('click', function() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedOption = colorSelect.selectedIndex;
        colorSelect.remove(selectedOption);
});
