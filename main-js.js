function performSearch() {
    const bloodGroup = document.getElementById('bloodGroup').value;
    const hospital = document.getElementById('hospital').value;
    const availability = document.getElementById('availability').value;

    if (bloodGroup === 'Blood Group') {
        alert('Please select a valid Blood Group.');
        return;
    }

    console.log("Searching for:", { bloodGroup, hospital, availability });

    // Simulating a search action
    const btn = document.querySelector('.btn-search');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Searching...';

    setTimeout(() => {
        alert(`Search initiated for Blood Group: ${bloodGroup}`);
        btn.innerHTML = originalText;
    }, 1500);
}