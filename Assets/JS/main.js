function toggleDetail (e) {
    const target = $(e.target) // Membuat Variabel Target Untuk Mendapatkan Parents (Pertama Dilakukan)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }
    
    
    const item = $(target).parents(".about-exp-item") // Ketika Sudah di Dapatkan si Target, Dipindahkan Ke Sini Untuk Menjadi Nilai si Item (Ketiga Dilakukan)
    
    const detail = $(item).children(".about-exp-item-detail") // // Ketika Sudah di Dapatkan si children, yaitu si Target, Dipindahkan Ke Sini Untuk Menjadi Nilai si detail (Kelima Dilakukan)
    
    $(detail).slideToggle()

    // console.log($(target).parents(".about-exp-item")) // Mencari Parents si Target (Kedua Dilakukan)
    // console.log($(item).children(".about-exp-item-detail")) // Mencari Children, yaitu si Target (Keempat Dilakukan)
}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inputEmail")
    const subjek = $("#inputSubjek")
    const pesan = $("#inputPesan")

    if(!$(email).val()) {
        alert("Masukkan Email Anda")
    } else if (!$(subjek).val()) {
        alert("Masukkan Subjek Anda")
    } else if (!$(pesan).val()) {
        alert("Masukkan Pesan Anda")
    } else {
        alert("Form Disubmit, Terima Kasih!")
        $(email).val("")
        $(subjek).val("")
        $(pesan).val("")
    }
}