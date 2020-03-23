    const inputs = document.querySelectorAll('input');
    console.log('hey');

    function handleChange() {
        const suffix = this.dataset.sizing || '';

        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleChange));
    inputs.forEach(input => input.addEventListener('mouseover', handleChange));