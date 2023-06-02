document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.className = 'tile';
        div.id = i
 
        document.getElementById('container').appendChild(div);
    }
}, false);