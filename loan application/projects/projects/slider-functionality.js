// Initialize the slider components
function initializeSliders() {
    const loanSlider = document.getElementById('slider-lainasumma');
    const timeSlider = document.getElementById('slider-lainaaika');

    // Assuming you're using a slider library like noUiSlider
    noUiSlider.create(loanSlider, {
        start: [500],
        connect: [true, false],
        range: {
            'min': 500,
            'max': 10000000
        }
    });

    noUiSlider.create(timeSlider, {
        start: [1],
        connect: [true, false],
        range: {
            'min': 1,
            'max': 48
        }
    });

    // Event listeners to update the display
    loanSlider.noUiSlider.on('update', function (values, handle) {
        document.getElementById('wp-current-lainasumma').innerText = values[handle];
    });

    timeSlider.noUiSlider.on('update', function (values, handle) {
        document.getElementById('wp-current-lainaaika').innerText = values[handle];
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initializeSliders();
});

// Functions to handle input visibility toggling
function editLainasumma(element) {
    element.style.display = 'none';
    document.getElementById('edit-lainasumma').classList.remove('hidden');
}

function updateLainasumma(input) {
    const value = input.value;
    document.getElementById('wp-current-lainasumma').innerText = value;
    input.classList.add('hidden');
    document.getElementById('wp-current-lainasumma').style.display = 'inline';
}

function editLainaaika(element) {
    element.style.display = 'none';
    document.getElementById('edit-lainaaika').classList.remove('hidden');
}

function updateLainaaika(input) {
    const value = input.value;
    document.getElementById('wp-current-lainaaika').innerText = value;
    input.classList.add('hidden');
    document.getElementById('wp-current-lainaaika').style.display = 'inline';
}

// Assuming wp_lainata_show_loan_form and check_business functions are defined elsewhere
