document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.querySelector('dialog');
    const errorMsg = document.getElementById('errorMsg');
    
    window.showModal = (text= '') => {
        errorMsg.textContent = text;
        modal.show();
        setTimeout(() => {
            modal.close();
        }, 3000);
    }
});