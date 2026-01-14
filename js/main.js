document.addEventListener('DOMContentLoaded', () => {
    const replayButtons = document.querySelectorAll('.replay-button');

    const playAnimations = (header) => {
        // Remove the animate class to reset animations
        header.classList.remove('animate');

        setTimeout(() => {
            header.classList.add('animate');
        }, 10);
    };

    const headers = document.querySelectorAll('header');
    headers.forEach(header => {
        playAnimations(header);
    });

    replayButtons.forEach(button => {
        button.addEventListener('click', () => {
            const header = button.closest('header');
            if (header) {
                playAnimations(header);
            }
        });
    });
});
