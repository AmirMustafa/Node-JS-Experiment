// This page holds the module / function of movies related

function Name() {
    console.log('Don');
}

function Name2() {
    console.log('Don2');
}

// This generally means Name method can be exported /accessed to any page like accessor i.e. public, private etc.
// In import page will be accessed by a defined below
module.exports.a = Name;
module.exports.b = Name2;