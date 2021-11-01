function addToCart(productName = "Parametre Gönderilmedi !", quantity) {
    console.log("sepete eklendi : " + productName + " adet : " + quantity)
}

addToCart()
addToCart("Yumurta", 10)
addToCart("Peynir")

// undefined : bellekte böyle bir bilgi yok - tanımlanmamış

// arrow function

let sayHello = () => {
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World2!")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

// function ile kodlarımızı kabsüllemiş oluyoruz

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 } // Obje içerisinde çeşitli özellikler var

addToCart3(product1)

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 }
let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 }
product2 = product3
product2.productName = "Karpuz"

console.log(product3)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)
console.log(sayi2)

// Objeler referans typedir
// Sayılar değer tipidir 

// Stack ve Heap
//referasn tiplerin değişken ismi stackte verisi heapte tutuluyor referans nuamrası ile
//atama yapıldığında product1'in stacktedeki referans numarası güncelleniyor


function addToCart4(x) {
    //products önce kendi scopena bakıyor eğer bulamaz ise bir üst scope bakarak products buluyor ve yazdırıyor
    console.log(products)
}

let products = [
    { productName: "Elma", unitPrice: 10, quantity: 5 },
    { productName: "Armut", unitPrice: 10, quantity: 5 },
    { productName: "Karpuz", unitPrice: 10, quantity: 5 }
]


addToCart4(products)

// ... rest operatörü gönderilen parametreleri arraye dönüştürüyor
// rest operatotörü dışında başka parametre varsa onu başa yaz. Sona yazarsak hata alırız
function add(bisey, ...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(5, 15)
// add(5, 15, 25)
// add(5, 15, 25, 30)

// ... spread operatörü ayrıştırır, rest toparlar
let numbers = [10, 500, 600, 120, 5]
console.log(numbers)
console.log(...numbers)
console.log(Math.max(...numbers))

// Destructuring 
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [

    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Amasya", "Sinop"],
    ]
]

console.log(icAnadolu)
console.log(marmara)
console.log(karadeniz)
console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)
console.log(karadenizSehirleri)

// JS {} kod bloğu olarak görüyor. () kullanarak sen kod bloğu değilsin diyoruz
let newProductName, newUnitPrice, newQuantity
({productName : newProductName, unitPrice : newUnitPrice, quantity : newQuantity} = { productName: "Kaju", unitPrice: 101, quantity: 201 })

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)







